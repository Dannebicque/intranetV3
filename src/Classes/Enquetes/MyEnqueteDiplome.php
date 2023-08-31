<?php
/*
 * Copyright (c) 2023. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Classes/Enquetes/MyEnqueteDiplome.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 31/08/2023 16:15
 */

/*
 * Pull your hearder here, for exemple, Licence header.
 */

namespace App\Classes\Enquetes;

use App\Classes\Configuration;
use App\Classes\Excel\MyExcelWriter;
use App\Components\Questionnaire\TypeQuestion\TypeLibre;
use App\Repository\EtudiantRepository;
use App\Repository\RddDiplomeRepository;
use App\Utils\Tools;
use Carbon\Carbon;
use PhpOffice\PhpSpreadsheet\Writer\Xlsx;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\StreamedResponse;
use function array_key_exists;

class MyEnqueteDiplome
{
    private array $etudiantsReponses;
    private readonly array $AllEtudiants;

    /**
     * MyEnqueteDiplome constructor.
     */
    public function __construct(
        Configuration $configuration,
        private readonly RddDiplomeRepository $rddDiplomeRepository,
        private readonly MyExcelWriter $myExcelWriter,
        private readonly EtudiantRepository $etudiantRepository
    ) {
        $this->AllEtudiants = $this->rddDiplomeRepository->getEtudiantAvecQuestionnaire();
    }

    public function export(): StreamedResponse
    {
        //todo: a refaire... + export des réponses
        $this->myExcelWriter->createSheet('enquete');
        $tEnTete = ['nom', 'prenom', 'Dernière mise à jour', 'tel', 'mail', 'codeEtape', 'diplome', 'adresse', 'Complément', 'Code Postal', 'ville', 'pays'];
        $tEnTeteId = [];

        $this->myExcelWriter->ecritLigne($tEnTete, 1, 1);

        $ligne = 2;

        foreach ($this->AllEtudiants as $etudiant) {
            if (array_key_exists($etudiant->getNumEtudiant(), $this->reponses)) {
                $reponse = $this->reponses[$etudiant->getNumEtudiant()];
                $t = [
                    $reponse->getEtudiant()->getNom(),
                    $reponse->getEtudiant()->getPrenom(),
                    $reponse->getUpdated()->format('d/m/Y H:i'),
                    Tools::telFormat($reponse->getEtudiant()->getTel1()),
                    $reponse->getEtudiant()->getMailPerso(),
                    $etudiant->getCodeEtape(),
                    $etudiant->getLibelleDiplome(),
                    $reponse->getEtudiant()->getAdresse()->getAdresse1(),
                    $reponse->getEtudiant()->getAdresse()->getAdresse2(),
                    $reponse->getEtudiant()->getAdresse()->getCodePostal(),
                    $reponse->getEtudiant()->getAdresse()->getVille(),
                    $reponse->getEtudiant()->getAdresse()->getPays(),
                ];
                foreach ($tEnTeteId as $question) {
                    if (TypeLibre::class === $question->getType()) {
                        $cle = 'quizz_question_text_q'.$question->getId();
                        if (array_key_exists($cle, $reponses)) {
                            $t[] = $reponses[$cle]->getValeur();
                        } else {
                            $t[] = '';
                        }
                    } else {
                        $cle = 'quizz_question_reponses_q'.$question->getId();
                        if (array_key_exists($cle, $reponses)) {
                            if (array_key_exists($reponses[$cle]->getIdReponse(), $tReponses)) {
                                $t[] = $tReponses[$reponses[$cle]->getIdReponse()]->getLibelle();
                            }
                        } else {
                            $t[] = '';
                        }
                    }
                }
            } else {
                $etu = $this->etudiantRepository->findOneBy(['numEtudiant' => $etudiant->getNumEtudiant()]);
                if (null !== $etu) {
                    $t = [
                        $etu->getNom(),
                        $etu->getPrenom(),
                        $etudiant->getUpdated()->format('d/m/Y H:i'),
                        Tools::telFormat($etu->getTel1()),
                        $etudiant->getMailPerso(),
                        $etudiant->getCodeEtape(),
                        $etudiant->getLibelleDiplome(),
                        $etu->getAdresse()->getAdresse1(),
                        $etu->getAdresse()->getAdresse2(),
                        $etu->getAdresse()->getCodePostal(),
                        $etu->getAdresse()->getVille(),
                        $etu->getAdresse()->getPays(),
                    ];
                }
            }
            $this->myExcelWriter->ecritLigne($t, 1, $ligne);
            ++$ligne;
        }
        $this->myExcelWriter->getColumnsAutoSize('A', 'AJ');
        $writer = new Xlsx($this->myExcelWriter->getSpreadsheet());
        $date = Carbon::now();

        return new StreamedResponse(
            static function () use ($writer) {
                $writer->save('php://output');
            },
            Response::HTTP_OK,
            [
                'Content-Type' => 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
                'Content-Disposition' => 'attachment;filename="synthese_reponse'.$date->format('d-m-Y').'.xlsx"',
            ]
        );
    }

    public function exportManquant(array $attendus): StreamedResponse
    {
        $this->myExcelWriter->createSheet('enquete');
        $tEnTete = [
            'Nom',
            'Prénom',
            'Mail',
            'Num Etudiant',
            'Date de Naissance',
            'Téléphone',
            'Téléphone',
            'Diplome',
            'Reponse',
            'Date',
            'Dernière mise à jour',
        ];
        $this->myExcelWriter->ecritLigne($tEnTete, 1, 1);

        $ligne = 2;

        $this->getSyntheseReponse();

        foreach ($attendus as $attendu) {
            if (array_key_exists($attendu->getNumEtudiant(), $this->etudiantsReponses)) {
                $rep = $this->etudiantsReponses[$attendu->getNumEtudiant()];

                if (null !== $rep['reponse']) {
                    if (true === $rep['reponse']->getTermine()) {
                        $etat = 'Terminé';
                        $etat2 = $rep['reponse']->getDateTermine()->format('d/m/Y');
                    } else {
                        $etat = 'En cours';
                        $etat2 = '';
                    }
                    $update = $rep['reponse']->getUpdated()->format('d/m/Y H:i');
                } else {
                    $etat = 'Non répondu';
                    $etat2 = '';
                    $update = '';
                }

                $t = [
                    $rep['etudiant']->getNom(),
                    $rep['etudiant']->getPrenom(),
                    $attendu->getMailperso(),
                    $attendu->getNumEtudiant(),
                    $attendu->getDateNaissance()->format('d/m/Y'),
                    Tools::telFormat($rep['etudiant']->getTel1()),
                    Tools::telFormat($rep['etudiant']->getTel2()),
                    $attendu->getLibelleDiplome(),
                    $etat,
                    $etat2,
                    $update,
                ];
                $this->myExcelWriter->ecritLigne($t, 1, $ligne);
                ++$ligne;
            }
        }
        $this->myExcelWriter->getColumnsAutoSize('A', 'I');
        $writer = new Xlsx($this->myExcelWriter->getSpreadsheet());
        $date = Carbon::now();

        return new StreamedResponse(
            static function () use ($writer) {
                $writer->save('php://output');
            },
            Response::HTTP_OK,
            [
                'Content-Type' => 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
                'Content-Disposition' => 'attachment;filename="synthese_reponse'.$date->format('d-m-Y').'.xlsx"',
            ]
        );
    }

    public function getSyntheseReponse(): self
    {
        $etudiants = $this->etudiantRepository->findAll();
        $tEtudiant = [];
        foreach ($etudiants as $etudiant) {
            $tEtudiant[$etudiant->getNumEtudiant()]['etudiant'] = $etudiant;
            $tEtudiant[$etudiant->getNumEtudiant()]['reponse'] = null;
        }

        foreach ($this->reponses as $reponse) {
            if (array_key_exists($reponse->getEtudiant()->getNumEtudiant(), $tEtudiant)) {
                $tEtudiant[$reponse->getEtudiant()->getNumEtudiant()]['reponse'] = $reponse;
            }
        }
        $this->etudiantsReponses = $tEtudiant;

        return $this;
    }

    public function getQuestionnaire(): ?QuestionnaireQuizz
    {
        return $this->questionnaire;
    }

    public function getEtudiantsReponses(): array
    {
        return $this->etudiantsReponses;
    }

    /**
     * @return \App\Entity\QuestionnaireEtudiant[]|int|mixed|string
     */
    public function getReponses(): mixed
    {
        return $this->reponses;
    }
}
