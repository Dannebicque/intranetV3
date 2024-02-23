<?php
/*
 * Copyright (c) 2024. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Classes/Rdd/MyExportRdd.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 23/02/2024 21:41
 */

/*
 * Pull your hearder here, for exemple, Licence header.
 */

namespace App\Classes\Rdd;

use App\Classes\Excel\MyExcelWriter;
use App\Entity\Etudiant;
use App\Entity\RddDiplome;
use Carbon\Carbon;
use PhpOffice\PhpSpreadsheet\Writer\Xlsx;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\StreamedResponse;
use function array_key_exists;

readonly class MyExportRdd
{
    /**
     * MyExport constructor.
     */
    public function __construct(private MyExcelWriter $myExcelWriter)
    {
    }

    /**
     * @param RddDiplome[] $diplomes
     * @param Etudiant[]   $etudiants
     */
    public function genereFichier(
        array $diplomes,
        array $etudiants
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
            'update',
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
                    null !== $etudiants[$diplome->getNumEtudiant()]->getAdresse() ? $etudiants[$diplome->getNumEtudiant()]->getAdresse()->getAdresse1() : '-',
                    null !== $etudiants[$diplome->getNumEtudiant()]->getAdresse() ? $etudiants[$diplome->getNumEtudiant()]->getAdresse()->getAdresse2() : '-',
                    null !== $etudiants[$diplome->getNumEtudiant()]->getAdresse() ? $etudiants[$diplome->getNumEtudiant()]->getAdresse()->getAdresse3() : '-',
                    null !== $etudiants[$diplome->getNumEtudiant()]->getAdresse() ? $etudiants[$diplome->getNumEtudiant()]->getAdresse()->getCodePostal() : '-',
                    null !== $etudiants[$diplome->getNumEtudiant()]->getAdresse() ? $etudiants[$diplome->getNumEtudiant()]->getAdresse()->getVille() : '-',
                    null !== $etudiants[$diplome->getNumEtudiant()]->getAdresse() ? $etudiants[$diplome->getNumEtudiant()]->getAdresse()->getPays() : '-',
                    null !== $etudiants[$diplome->getNumEtudiant()]->getAdresse() ? str_replace('<br />', "\r\n",
                        $etudiants[$diplome->getNumEtudiant()]->getAdresse()->getDisplay()) : '-',
                    true === $diplome->getConfirme() ? 'Oui' : 'Non',
                    $etudiants[$diplome->getNumEtudiant()]->getMailUniv(),
                    $etudiants[$diplome->getNumEtudiant()]->getMailPerso(),
                    $diplome->getUpdated()->format('d/m/Y H:i'),
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
                    true === $diplome->getConfirme() ? 'Oui' : 'Non',
                    '',
                    '',
                ];
            }
            $this->myExcelWriter->ecritLigne($t, 1, $ligne);
            ++$ligne;
        }
        $this->myExcelWriter->getColumnsAutoSize('A', 'Z');
        $writer = new Xlsx($this->myExcelWriter->getSpreadsheet());
        $date = Carbon::now();

        return new StreamedResponse(
            static function () use ($writer) {
                $writer->save('php://output');
            },
            Response::HTTP_OK,
            [
                'Content-Type' => 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
                'Content-Disposition' => 'attachment;filename="rdd'.$date->format('d-m-Y').'.xlsx"',
            ]
        );
    }
}
