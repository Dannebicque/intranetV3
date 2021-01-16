<?php
// Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
// @file /Users/davidannebicque/htdocs/intranetV3/src/Classes/Rdd/MyExportRdd.php
// @author davidannebicque
// @project intranetV3
// @lastUpdate 15/01/2021 16:08

namespace App\Classes\Rdd;

use App\Classes\Excel\MyExcelWriter;
use App\Entity\Etudiant;
use App\Entity\RddDiplome;
use DateTime;
use PhpOffice\PhpSpreadsheet\Writer\Xlsx;
use Symfony\Component\HttpFoundation\StreamedResponse;

class MyExportRdd
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
     *
     * @param RddDiplome[] $diplomes
     * @param Etudiant[]   $etudiants
     *
     * @return null|StreamedResponse
     */
    public function genereFichier(
        $diplomes,
        $etudiants
    ): ?StreamedResponse {
        $this->myExcelWriter->createSheet('rdd');
        $tEnTete = [
            'N° Etudiant',
            'Civilite',
            'Nom',
            'Prénom',
            'Diplôme',
            'Code Etape',
            'Lib. Diplôme',
            'Numéro INE',
            'Telephone',
            'Adresse1',
            'Adresse2',
            'Adresse3',
            'CP',
            'Ville',
            'Pays',
            'Adresse complète',
            'confirme',
            'mail URCA',
            'mail Perso',
            'update'
        ];
        $this->myExcelWriter->ecritLigne($tEnTete, 1, 1);

        $ligne = 2;

        foreach ($diplomes as $diplome) {
            if (array_key_exists($diplome->getNumEtudiant(), $etudiants)) {
                $t = [
                    $diplome->getNumEtudiant(),
                    $etudiants[$diplome->getNumEtudiant()]->getCiviliteLong(),
                    ucfirst($etudiants[$diplome->getNumEtudiant()]->getNom()),
                    mb_strtoupper($etudiants[$diplome->getNumEtudiant()]->getPrenom()),
                    $diplome->getDiplome(),
                    $diplome->getCodeEtape(),
                    $diplome->getLibelleDiplome(),
                    $etudiants[$diplome->getNumEtudiant()]->getNumIne(),
                    $etudiants[$diplome->getNumEtudiant()]->getTel1(),
                    $etudiants[$diplome->getNumEtudiant()]->getAdresse() !== null ? $etudiants[$diplome->getNumEtudiant()]->getAdresse()->getAdresse1() : '-',
                    $etudiants[$diplome->getNumEtudiant()]->getAdresse() !== null ? $etudiants[$diplome->getNumEtudiant()]->getAdresse()->getAdresse2() : '-',
                    $etudiants[$diplome->getNumEtudiant()]->getAdresse() !== null ? $etudiants[$diplome->getNumEtudiant()]->getAdresse()->getAdresse3() : '-',
                    $etudiants[$diplome->getNumEtudiant()]->getAdresse() !== null ? $etudiants[$diplome->getNumEtudiant()]->getAdresse()->getCodePostal() : '-',
                    $etudiants[$diplome->getNumEtudiant()]->getAdresse() !== null ? $etudiants[$diplome->getNumEtudiant()]->getAdresse()->getVille() : '-',
                    $etudiants[$diplome->getNumEtudiant()]->getAdresse() !== null ? $etudiants[$diplome->getNumEtudiant()]->getAdresse()->getPays() : '-',
                    $etudiants[$diplome->getNumEtudiant()]->getAdresse() !== null ? str_replace("<br />", "\r\n",
                        $etudiants[$diplome->getNumEtudiant()]->getAdresse()->getDisplay()) : '-',
                    $diplome->getConfirme() === true ? 'Oui' : 'Non',
                    $etudiants[$diplome->getNumEtudiant()]->getMailUniv(),
                    $etudiants[$diplome->getNumEtudiant()]->getMailUniv(),
                    $diplome->getUpdated()->format('d/m/Y H:i')

                ];
            } else {
                $t = [
                    $diplome->getNumEtudiant(),
                    '',
                    '',
                    '',
                    $diplome->getDiplome(),
                    '',
                    '',
                    '',
                    '',
                    '',
                    '',
                    '',
                    '',
                    '',
                    $diplome->getConfirme() === true ? 'Oui' : 'Non',
                    '',
                    ''
                ];
            }
            $this->myExcelWriter->ecritLigne($t, 1, $ligne);
            $ligne++;

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
                'Content-Disposition' => 'attachment;filename="rdd' . $date->format('d-m-Y') . '.xlsx"'
            ]
        );
    }
}
