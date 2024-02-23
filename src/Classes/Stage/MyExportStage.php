<?php
/*
 * Copyright (c) 2024. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Classes/Stage/MyExportStage.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 23/02/2024 21:35
 */

/*
 * Pull your hearder here, for exemple, Licence header.
 */

namespace App\Classes\Stage;

use App\Classes\Excel\MyExcelWriter;
use App\Entity\StageEtudiant;
use App\Entity\StagePeriode;
use PhpOffice\PhpSpreadsheet\Writer\Xlsx;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\StreamedResponse;

readonly class MyExportStage
{
    /**
     * MyExport constructor.
     */
    public function __construct(private MyExcelWriter $myExcelWriter)
    {
    }

    public function genereFichier(
        StagePeriode $stagePeriode
    ): ?StreamedResponse {
        // todo: améliroer avec ligne de tête et largeur automatique...
        $stagesEtudiants = $stagePeriode->getStageEtudiants();
        $this->myExcelWriter->createSheet('stage');
        $tEnTete = [
            'N° étudiant',
            'Date de début de stage',
            'Date de fin de stage',
            'Départ convention',
            'Retour convention',
            'Nom',
            'Prénom',
            'Sexe',
            'Tuteur IUT',
            'Adresse électronique',
            'Groupe option',
            'Option',
            'Parcours',
            'Civilité',
            'Date de naissance',
            'Adresse 1',
            'Adresse 2',
            'CPostal',
            'Commune',
            'Téléphone portable',
            'Tel étudiant',
            'Courriel',
            'CPAM Intitulé',
            'CPAM Adresse',
            'Entreprise',
            'Adresse entreprise',
            'BP',
            'Codville2',
            'SIRET',
            'Prénom signataire',
            'Nom signataire',
            'Civilité signataire',
            'Fonction signataire',
            'Tél',
            'Service',
            'Portable service',
            'Tél service',
            'Courriel général',
            'Prénom tuteur',
            'Nom tuteur',
            'Civilité tuteur',
            'Fonction tuteur',
            'Tél tuteur',
            'Mél tuteur',
            'Lieu de stage différent',
        ];
        $this->myExcelWriter->ecritLigne($tEnTete, 1, 1);

        $ligne = 2;

        /** @var StageEtudiant $stage */
        foreach ($stagesEtudiants as $stage) {
            $adresse = ['-', '-', '-', '-'];
            if (null !== $stage->getEntreprise() && null !== $stage->getEntreprise()->getAdresse()) {
                $adresse = [
                    $stage->getEntreprise()->getAdresse()->getAdresse1(),
                    $stage->getEntreprise()->getAdresse()->getAdresse2(),
                    $stage->getEntreprise()->getAdresse()->getCodePostal().' '.$stage->getEntreprise()->getAdresse()->getVille(),
                ];
            }

            $adresseEtu = ['-', '-', '-', '-'];

            if (null !== $stage->getEtudiant() && null !== $stage->getEtudiant()->getAdresse()) {
                $adresseEtu = [
                    $stage->getEtudiant()->getAdresse()->getAdresse1(),
                    $stage->getEtudiant()->getAdresse()->getAdresse2(),
                    $stage->getEtudiant()->getAdresse()->getCodePostal(),
                    $stage->getEtudiant()->getAdresse()->getVille(),
                ];
            }

            $adresse2 = '';
            if (null !== $stage->getAdresseStage()) {
                $adresse2 = $stage->getAdresseStage()->getAdresse1().' '.$stage->getAdresseStage()->getAdresse2().' '.$stage->getAdresseStage()->getCodePostal().' '.$stage->getAdresseStage()->getVille();
            }

            $tuteurUniv = '-';
            if (null !== $stage->getTuteurUniversitaire()) {
                $tuteurUniv = $stage->getTuteurUniversitaire()->getPrenom().' '.$stage->getTuteurUniversitaire()->getNom();
            }
            $groupes = '';
            $parcours = '';
            foreach ($stage->getEtudiant()->getGroupes() as $groupe) {
                if (null !== $groupe->getParcours()) {
                    $parcours .= $groupe->getParcours()->getLibelle().', ';
                }
                $groupes .= $groupe->getLibelle().', ';
            }

            $t = [
                $stage->getEtudiant()->getNumetudiant(),
                null !== $stage->getDateDebutStage() ? $stage->getDateDebutStage()->format('d/m/Y') : '-',
                null !== $stage->getDateFinStage() ? $stage->getDateFinStage()->format('d/m/Y') : '-',
                null !== $stage->getDateConventionEnvoyee() ? $stage->getDateConventionEnvoyee()->format('d/m/Y') : '-',
                null !== $stage->getDateConventionRecu() ? $stage->getDateConventionRecu()->format('d/m/Y') : '-',
                $stage->getEtudiant()->getNom(),
                $stage->getEtudiant()->getPrenom(),
                $stage->getEtudiant()->getCivilite(),
                $tuteurUniv,
                $stage->getEtudiant()->getMailuniv(),
                $groupes,
                '',
                $parcours,
                $stage->getEtudiant()->getCivilite(),
                null !== $stage->getEtudiant()->getDatenaissance() ? $stage->getEtudiant()->getDatenaissance()->format('d/m/Y') : '-',
                $adresseEtu[0],
                $adresseEtu[1],
                $adresseEtu[2],
                $adresseEtu[3],
                $stage->getEtudiant()->getTel1(),
                $stage->getEtudiant()->getTel2(),
                $stage->getEtudiant()->getMailperso(),
                $stage->getEtudiant()->getIntituleSecuriteSociale(),
                $stage->getEtudiant()->getAdresseSecuriteSociale(),
                null !== $stage->getEntreprise() ? $stage->getEntreprise()->getRaisonSociale() : '-',
                $adresse[0],
                $adresse[1],
                $adresse[2],
                null !== $stage->getEntreprise() ? $stage->getEntreprise()->getSiret() : '-',
                null !== $stage->getEntreprise() && $stage->getEntreprise()->getResponsable() ? $stage->getEntreprise()->getResponsable()->getPrenom() : '-',
                null !== $stage->getEntreprise() && $stage->getEntreprise()->getResponsable() ? $stage->getEntreprise()->getResponsable()->getNom() : '-',
                null !== $stage->getEntreprise() && $stage->getEntreprise()->getResponsable() ? $stage->getEntreprise()->getResponsable()->getCiviliteLong() : '-',
                null !== $stage->getEntreprise() && $stage->getEntreprise()->getResponsable() ? $stage->getEntreprise()->getResponsable()->getFonction() : '-',
                null !== $stage->getEntreprise() && $stage->getEntreprise()->getResponsable() ? $stage->getEntreprise()->getResponsable()->getTelephone() : '-',
                $stage->getServiceStageEntreprise(),
                '',
                '',
                null !== $stage->getEntreprise() && $stage->getEntreprise()->getResponsable() ? $stage->getEntreprise()->getResponsable()->getEmail() : '-',
                null !== $stage->getTuteur() ? $stage->getTuteur()->getPrenom() : '-',
                null !== $stage->getTuteur() ? $stage->getTuteur()->getNom() : '-',
                null !== $stage->getTuteur() ? $stage->getTuteur()->getCiviliteLong() : '-',
                null !== $stage->getTuteur() ? $stage->getTuteur()->getFonction() : '-',
                null !== $stage->getTuteur() ? $stage->getTuteur()->getTelephone() : '-',
                null !== $stage->getTuteur() ? $stage->getTuteur()->getEmail() : '-',
                $adresse2,
            ];

            $this->myExcelWriter->ecritLigne($t, 1, $ligne);
            ++$ligne;
        }

        $writer = new Xlsx($this->myExcelWriter->getSpreadsheet());

        return new StreamedResponse(
            static function () use ($writer) {
                $writer->save('php://output');
            },
            Response::HTTP_OK,
            [
                'Content-Type' => 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
                'Content-Disposition' => 'attachment;filename="'.$stagePeriode->getLibelle().'.xlsx"',
            ]
        );
    }
}
