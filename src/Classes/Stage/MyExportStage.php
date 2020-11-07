<?php
// Copyright (c) 2020. | David Annebicque | IUT de Troyes  - All Rights Reserved
// @file /Users/davidannebicque/htdocs/intranetV3/src/Classes/Stage/MyExportStage.php
// @author davidannebicque
// @project intranetV3
// @lastUpdate 07/11/2020 08:59

namespace App\Classes\Stage;

use App\Classes\Excel\MyExcelWriter;
use App\Entity\StageEtudiant;
use App\Entity\StagePeriode;
use PhpOffice\PhpSpreadsheet\Writer\Xlsx;
use Symfony\Component\HttpFoundation\StreamedResponse;

class MyExportStage
{
    private MyExcelWriter $myExcelWriter;

    /**
     * MyExport constructor.
     *
     * @param MyExcelWriter $myExcelWriter
     */
    public function __construct(
        MyExcelWriter $myExcelWriter
    ) {

        $this->myExcelWriter = $myExcelWriter;
    }

    /**
     *
     * @param StagePeriode $stagePeriode
     *
     * @return null|StreamedResponse
     */
    public function genereFichier(
        StagePeriode $stagePeriode
    ): ?StreamedResponse {
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
            'Lieu de stage différent'
        ];
        $this->myExcelWriter->ecritLigne($tEnTete, 1, 1);

        $ligne = 2;


        /** @var StageEtudiant $stage */
        foreach ($stagesEtudiants as $stage) {
            $adresse = ['-', '-', '-', '-'];
            if ($stage->getEntreprise() !== null && $stage->getEntreprise()->getAdresse() !== null) {
                $adresse = [
                    $stage->getEntreprise()->getAdresse()->getAdresse1(),
                    $stage->getEntreprise()->getAdresse()->getAdresse2(),
                    $stage->getEntreprise()->getAdresse()->getCodePostal() . ' ' . $stage->getEntreprise()->getAdresse()->getVille()
                ];
            }

            $adresseEtu = ['-', '-', '-', '-'];

            if ($stage->getEtudiant() !== null && $stage->getEtudiant()->getAdresse() !== null) {
                $adresseEtu = [
                    $stage->getEtudiant()->getAdresse()->getAdresse1(),
                    $stage->getEtudiant()->getAdresse()->getAdresse2(),
                    $stage->getEtudiant()->getAdresse()->getCodePostal(),
                    $stage->getEtudiant()->getAdresse()->getVille()
                ];
            }

            $adresse2 = '';
            if ($stage->getAdresseStage() !== null) {
                $adresse2 = $stage->getAdresseStage()->getAdresse1() . ' ' . $stage->getAdresseStage()->getAdresse2() . ' ' . $stage->getAdresseStage()->getCodePostal() . ' ' . $stage->getAdresseStage()->getVille();
            }

            $tuteurUniv = '-';
            if ($stage->getTuteurUniversitaire() !== null) {
                $tuteurUniv = $stage->getTuteurUniversitaire()->getPrenom() . ' ' . $stage->getTuteurUniversitaire()->getNom();
            }
            $groupes = '';
            $parcours = '';
            foreach ($stage->getEtudiant()->getGroupes() as $groupe) {
                if ($groupe->getParcours() !== null) {
                    $parcours .= $groupe->getParcours()->getLibelle() . ', ';
                }
                $groupes .= $groupe->getLibelle() . ', ';
            }

            $t = [
                $stage->getEtudiant()->getNumetudiant(),
                $stage->getDateDebutStage() !== null ? $stage->getDateDebutStage()->format('d/m/Y') : '-',
                $stage->getDateFinStage() !== null ? $stage->getDateFinStage()->format('d/m/Y') : '-',
                $stage->getDateConventionEnvoyee() !== null ? $stage->getDateConventionEnvoyee()->format('d/m/Y') : '-',
                $stage->getDateConventionRecu() !== null ? $stage->getDateConventionRecu()->format('d/m/Y') : '-',
                $stage->getEtudiant()->getNom(),
                $stage->getEtudiant()->getPrenom(),
                $stage->getEtudiant()->getCivilite(),
                $tuteurUniv,
                $stage->getEtudiant()->getMailuniv(),
                $groupes,
                '',
                $parcours,
                $stage->getEtudiant()->getCivilite(),
                $stage->getEtudiant()->getDatenaissance() !== null ? $stage->getEtudiant()->getDatenaissance()->format('d/m/Y') : '-',
                $adresseEtu[0],
                $adresseEtu[1],
                $adresseEtu[2],
                $adresseEtu[3],
                $stage->getEtudiant()->getTel1(),
                $stage->getEtudiant()->getTel2(),
                $stage->getEtudiant()->getMailperso(),
                $stage->getEtudiant()->getIntituleSecuriteSociale(),
                $stage->getEtudiant()->getAdresseSecuriteSociale(),
                $stage->getEntreprise() !== null ? $stage->getEntreprise()->getRaisonSociale() : '-',
                $adresse[0],
                $adresse[1],
                $adresse[2],
                $stage->getEntreprise() !== null ? $stage->getEntreprise()->getSiret() : '-',
                $stage->getEntreprise() !== null && $stage->getEntreprise()->getResponsable() ? $stage->getEntreprise()->getResponsable()->getPrenom() : '-',
                $stage->getEntreprise() !== null && $stage->getEntreprise()->getResponsable() ? $stage->getEntreprise()->getResponsable()->getNom() : '-',
                $stage->getEntreprise() !== null && $stage->getEntreprise()->getResponsable() ? $stage->getEntreprise()->getResponsable()->getCiviliteLong() : '-',
                $stage->getEntreprise() !== null && $stage->getEntreprise()->getResponsable() ? $stage->getEntreprise()->getResponsable()->getFonction() : '-',
                $stage->getEntreprise() !== null && $stage->getEntreprise()->getResponsable() ? $stage->getEntreprise()->getResponsable()->getTelephone() : '-',
                $stage->getServiceStageEntreprise(),
                '',
                '',
                $stage->getEntreprise() !== null && $stage->getEntreprise()->getResponsable() ? $stage->getEntreprise()->getResponsable()->getEmail() : '-',
                $stage->getTuteur() !== null ? $stage->getTuteur()->getPrenom() : '-',
                $stage->getTuteur() !== null ? $stage->getTuteur()->getNom() : '-',
                $stage->getTuteur() !== null ? $stage->getTuteur()->getCiviliteLong() : '-',
                $stage->getTuteur() !== null ? $stage->getTuteur()->getFonction() : '-',
                $stage->getTuteur() !== null ? $stage->getTuteur()->getTelephone() : '-',
                $stage->getTuteur() !== null ? $stage->getTuteur()->getEmail() : '-',
                $adresse2
            ];

            $this->myExcelWriter->ecritLigne($t, 1, $ligne);
            $ligne++;
        }

        $writer = new Xlsx($this->myExcelWriter->getSpreadsheet());

        return new StreamedResponse(
            static function() use ($writer) {
                $writer->save('php://output');
            },
            200,
            [
                'Content-Type'        => 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
                'Content-Disposition' => 'attachment;filename="' . $stagePeriode->getLibelle() . '.xlsx"'
            ]
        );
    }
}
