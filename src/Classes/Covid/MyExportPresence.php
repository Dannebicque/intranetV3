<?php
// Copyright (c) 2020. | David Annebicque | IUT de Troyes  - All Rights Reserved
// @file /Users/davidannebicque/htdocs/intranetV3/src/Classes/Covid/MyExportPresence.php
// @author davidannebicque
// @project intranetV3
// @lastUpdate 07/11/2020 10:31

namespace App\Classes\Covid;

use App\Classes\Excel\MyExcelWriter;
use App\Classes\Pdf\MyPDF;
use App\Entity\CovidAttestationPersonnel;
use App\Entity\Departement;
use DateTime;
use Dompdf\Dompdf;
use Dompdf\Options;
use PhpOffice\PhpSpreadsheet\Writer\Xlsx;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\StreamedResponse;
use Symfony\Component\HttpKernel\KernelInterface;

class MyExportPresence
{
    private MyExcelWriter $myExcelWriter;

    private MyPDF $myPdf;
    private string $dir;

    /**
     * MyExport constructor.
     *
     * @param MyExcelWriter   $myExcelWriter
     * @param MyPDF           $myPdf
     * @param KernelInterface $kernel
     */
    public function __construct(
        MyExcelWriter $myExcelWriter,
        MyPdf $myPdf,
        KernelInterface $kernel
    ) {

        $this->myExcelWriter = $myExcelWriter;
        $this->myPdf = $myPdf;
        $this->dir = $kernel->getProjectDir() . '/public/upload/';
    }

    /**
     *
     * @param CovidAttestationPersonnel[] $presences
     *
     * @return null|StreamedResponse
     */
    public function genereFichier(
        $presences
    ): ?StreamedResponse {
        $this->myExcelWriter->createSheet('stage');
        $tEnTete = [
            'N°',
            'date demande',
            'Civ.',
            'Nom',
            'Prénom',
            'Mail',
            'Motif',
            'diplôme',
            'Moyen deplacement',
            'Validation Département',
            'Date validation département',
            'Validation Direction',
            'Date validation direction',
            'date',
            'heure arrivée',
            'heure départ',
        ];
        $this->myExcelWriter->ecritLigne($tEnTete, 1, 1);

        $ligne = 2;


        foreach ($presences as $presence) {
            foreach ($presence->getCovidCreneauPresences() as $creneau) {
                $t = [
                    $presence->getId(),
                    $presence->getCreated() !== null ? $presence->getCreated()->format('d/m/Y H:i') : '-',
                    $presence->getPersonnel() !== null ? $presence->getPersonnel()->getCivilite() : '',
                    $presence->getPersonnel() !== null ? $presence->getPersonnel()->getNom() : '',
                    $presence->getPersonnel() !== null ? $presence->getPersonnel()->getNom() : '',
                    $presence->getPersonnel() !== null ? $presence->getPersonnel()->getMailUniv() : '',
                    $presence->getMotifLong(),
                    $presence->getDiplome()->getLibelle(),
                    $presence->getMoyenDeplacement(),
                    $presence->getValidationDepartementDisplay(),
                    $presence->getDateValidationDepartement() !== null ? $presence->getDateValidationDepartement()->format('d/m/Y H:i') : '-',
                    $presence->getValidationDirectionDisplay(),
                    $presence->getDateValidationDirection() !== null ? $presence->getDateValidationDirection()->format('d/m/Y H:i') : '-',
                    $creneau->getDate() !== null ? $creneau->getDate()->format('d/m/Y') : '-',
                    $creneau->getHeureArrivee() !== null ? $creneau->getHeureArrivee()->format('H:i') : '-',
                    $creneau->getHeureDepart() !== null ? $creneau->getHeureDepart()->format('H:i') : '-',
                ];

                $this->myExcelWriter->ecritLigne($t, 1, $ligne);
                $ligne++;
            }
        }

        $writer = new Xlsx($this->myExcelWriter->getSpreadsheet());
        $date = new DateTime('now');

        return new StreamedResponse(
            static function() use ($writer) {
                $writer->save('php://output');
            },
            200,
            [
                'Content-Type'        => 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
                'Content-Disposition' => 'attachment;filename="presence' . $date->format('d-m-Y') . '.xlsx"'
            ]
        );
    }

    public function genereAttestationPdf(CovidAttestationPersonnel $covidAttestationPersonnel, $sortie)
    {
        if ($sortie === 'force') {
            $this->myPdf::generePdf(
                'pdf/covid/autorisationPersonnel.html.twig',
                [
                    'covidAttestationPersonnel' => $covidAttestationPersonnel
                ],
                'attestation-' . $covidAttestationPersonnel->getPersonnel()->getNom()
            );
        } else {
            $this->myPdf::genereAndSavePdf(
                'pdf/covid/autorisationPersonnel.html.twig',
                [
                    'covidAttestationPersonnel' => $covidAttestationPersonnel
                ],
                'attestation-' . $covidAttestationPersonnel->getCreated()->format('dmYHis'),
                $this->dir . 'covid/attestation/'
            );

            return $this->dir . 'covid/attestation/' . 'attestation-' . $covidAttestationPersonnel->getCreated()->format('dmYHis') . '.pdf';
        }

        return true;
    }
}
