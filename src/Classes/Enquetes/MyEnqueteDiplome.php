<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Classes/Enquetes/MyEnqueteDiplome.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 07/02/2021 11:20
 */

/*
 * Pull your hearder here, for exemple, Licence header.
 */

namespace App\Classes\Enquetes;

use App\Classes\Configuration;
use App\Classes\Excel\MyExcelWriter;
use App\Classes\Tools;
use App\Entity\QuestionnaireQuestion;
use App\Entity\QuestionnaireQuizz;
use App\Repository\EtudiantRepository;
use App\Repository\QuestionnaireEtudiantReponseRepository;
use App\Repository\QuestionnaireEtudiantRepository;
use App\Repository\QuestionnaireQuizzRepository;
use App\Repository\QuestionnaireReponseRepository;
use DateTime;
use PhpOffice\PhpSpreadsheet\Writer\Xlsx;
use Symfony\Component\HttpFoundation\StreamedResponse;

class MyEnqueteDiplome
{
    private MyExcelWriter $myExcelWriter;
    private EtudiantRepository $etudiantRepository;
    private QuestionnaireEtudiantReponseRepository $questionnaireEtudiantReponse;
    private QuestionnaireReponseRepository $questionnaireReponseRepository;

    private ?QuestionnaireQuizz $questionnaire;
    private $etudiantsReponses;
    private $reponses;

    /**
     * MyEnqueteDiplome constructor.
     */
    public function __construct(
        Configuration $configuration,
        QuestionnaireReponseRepository $questionnaireReponseRepository,
        QuestionnaireQuizzRepository $questionnaireQuizzRepository,
        QuestionnaireEtudiantRepository $questionnaireEtudiantRepository,
        QuestionnaireEtudiantReponseRepository $questionnaireEtudiantReponse,
        MyExcelWriter $myExcelWriter,
        EtudiantRepository $etudiantRepository
    ) {
        $this->myExcelWriter = $myExcelWriter;
        $this->questionnaireEtudiantReponse = $questionnaireEtudiantReponse;
        $this->questionnaireReponseRepository = $questionnaireReponseRepository;
        $this->etudiantRepository = $etudiantRepository;
        $this->questionnaire = $questionnaireQuizzRepository->find($configuration->get('ENQUETE_DIPLOME'));
        if (null !== $this->questionnaire) {
            $this->reponses = $questionnaireEtudiantRepository->findByQuestionnaire($this->questionnaire);
        }
    }

    public function export()
    {
        $tReponses = $this->questionnaireReponseRepository->findByQuizzArray($this->questionnaire);

        $this->myExcelWriter->createSheet('enquete');
        $tEnTete = ['nom', 'prenom', 'Dernière mise à jour'];
        $tEnTeteId = [];

        foreach ($this->questionnaire->getSections() as $section) {
            foreach ($section->getSection()->getQualiteSectionQuestions() as $question) {
                $tEnTete[] = $question->getQuestion()->getLibelle();
                $tEnTeteId[] = $question->getQuestion();
            }
        }

        $this->myExcelWriter->ecritLigne($tEnTete, 1, 1);

        $ligne = 2;

        foreach ($this->reponses as $reponse) {
            $reponses = $this->questionnaireEtudiantReponse->findByQuizzEtudiant($reponse);
            $t = [
                $reponse->getEtudiant()->getNom(),
                $reponse->getEtudiant()->getPrenom(),
                $reponse->getUpdated()->format('d/m/Y H:i'),
            ];
            foreach ($tEnTeteId as $question) {
                if (QuestionnaireQuestion::QUESTION_TYPE_LIBRE === $question->getType()) {
                    $cle = 'quizz_question_text_q' . $question->getId();
                    if (\array_key_exists($cle, $reponses)) {
                        $t[] = $reponses[$cle]->getValeur();
                    } else {
                        $t[] = '';
                    }
                } else {
                    $cle = 'quizz_question_reponses_q' . $question->getId();
                    if (\array_key_exists($cle, $reponses)) {
                        if (\array_key_exists($reponses[$cle]->getIdReponse(), $tReponses)) {
                            $t[] = $tReponses[$reponses[$cle]->getIdReponse()]->getLibelle();
                        }
                    } else {
                        $t[] = '';
                    }
                }
            }
            $this->myExcelWriter->ecritLigne($t, 1, $ligne);
            ++$ligne;
        }
        $this->myExcelWriter->getColumnsAutoSize('A', 'Z');
        $writer = new Xlsx($this->myExcelWriter->getSpreadsheet());
        $date = new DateTime('now');

        return new StreamedResponse(
            static function() use ($writer) {
                $writer->save('php://output');
            },
            200,
            [
                'Content-Type'        => 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
                'Content-Disposition' => 'attachment;filename="synthese_reponse' . $date->format('d-m-Y') . '.xlsx"',
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
            if (\array_key_exists($attendu->getNumEtudiant(), $this->etudiantsReponses)) {
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
        $date = new DateTime('now');

        return new StreamedResponse(
            static function() use ($writer) {
                $writer->save('php://output');
            },
            200,
            [
                'Content-Type'        => 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
                'Content-Disposition' => 'attachment;filename="synthese_reponse' . $date->format('d-m-Y') . '.xlsx"',
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
            if (\array_key_exists($reponse->getEtudiant()->getNumEtudiant(), $tEtudiant)) {
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

    public function getEtudiantsReponses()
    {
        return $this->etudiantsReponses;
    }

    /**
     * @return \App\Entity\QuestionnaireEtudiant[]|int|mixed|string
     */
    public function getReponses()
    {
        return $this->reponses;
    }
}
