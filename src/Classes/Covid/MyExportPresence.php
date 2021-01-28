<?php
// Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
// @file /Users/davidannebicque/htdocs/intranetV3/src/Classes/Covid/MyExportPresence.php
// @author davidannebicque
// @project intranetV3
// @lastUpdate 28/01/2021 16:44

namespace App\Classes\Covid;

use App\Classes\Excel\MyExcelWriter;
use App\Classes\Mail\MailerFromTwig;
use App\Classes\Pdf\MyPDF;
use App\Entity\CovidAttestationEtudiant;
use App\Entity\CovidAttestationPersonnel;
use App\Entity\Etudiant;
use DateTime;
use PhpOffice\PhpSpreadsheet\Writer\Xlsx;
use Symfony\Component\HttpFoundation\StreamedResponse;
use Symfony\Component\HttpKernel\KernelInterface;
use Symfony\Component\Mailer\Exception\TransportExceptionInterface;
use Twig\Error\LoaderError;
use Twig\Error\RuntimeError;
use Twig\Error\SyntaxError;

class MyExportPresence
{
    private MyExcelWriter $myExcelWriter;

    private MyPDF $myPdf;
    private string $dir;

    private MailerFromTwig $myMailer;

    /**
     * MyExport constructor.
     *
     * @param MyExcelWriter   $myExcelWriter
     * @param MyPDF           $myPdf
     * @param KernelInterface $kernel
     * @param MailerFromTwig  $myMailer
     */
    public function __construct(
        MyExcelWriter $myExcelWriter,
        MailerFromTwig $myMailer,
        MyPdf $myPdf,
        KernelInterface $kernel
    ) {

        $this->myMailer = $myMailer;
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
                    $presence->getPersonnel() !== null ? $presence->getPersonnel()->getPrenom() : '',
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
                'Content-Disposition' => 'attachment;filename="presence' . $date->format('d-m-Y') . '.xlsx"'
            ]
        );
    }

    /**
     * @param CovidAttestationPersonnel $covidAttestationPersonnel
     * @param                           $sortie
     *
     * @return bool|string
     * @throws LoaderError
     * @throws RuntimeError
     * @throws SyntaxError
     */
    public function genereAttestationPdf(CovidAttestationPersonnel $covidAttestationPersonnel, $sortie)
    {
        if ($sortie === 'force') {
            return $this->myPdf::generePdf(
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

    /**
     * @param CovidAttestationEtudiant $covidAttestationEtudiant
     * @param Etudiant                 $etudiant
     *
     * @throws LoaderError
     * @throws RuntimeError
     * @throws SyntaxError
     */
    public function genereConvocationPdf(
        CovidAttestationEtudiant $covidAttestationEtudiant,
        Etudiant $etudiant
    ): void {
        $this->myPdf::generePdf(
            'pdf/covid/autorisationEtudiant.html.twig',
            [
                'covidAttestationEtudiant' => $covidAttestationEtudiant,
                'etudiant'                 => $etudiant
            ],
            'convocation-covid-' . $covidAttestationEtudiant->getDatePresence()->format('d-m-Y') . '-' . $etudiant->getNumEtudiant()
        );
    }

    /**
     * @param CovidAttestationEtudiant $covidAttestationEtudiant
     * @param Etudiant                 $etudiant
     *
     * @throws LoaderError
     * @throws RuntimeError
     * @throws SyntaxError
     * @throws TransportExceptionInterface
     */
    public function sendOneConvocation(CovidAttestationEtudiant $covidAttestationEtudiant, Etudiant $etudiant): void
    {

        $name = 'convocation-covid-' . $covidAttestationEtudiant->getDateDebut()->format('d-m-Y') . '-' . $etudiant->getNumEtudiant();
        $this->myPdf::genereAndSavePdf(
            'pdf/covid/autorisationEtudiant.html.twig',
            [
                'covidAttestationEtudiant' => $covidAttestationEtudiant,
                'etudiant'                 => $etudiant
            ],
            $name,
            $this->dir . 'covid/convocations/'
        );

        $this->myMailer->initEmail();
        $this->myMailer->setTemplate('mails/covid/convocationEtudiant.html.twig', [
            'covidAttestationEtudiant' => $covidAttestationEtudiant,
            'etudiant'                 => $etudiant
        ]);

        //joindre le PDF
        $this->myMailer->attachFile($this->dir . 'covid/convocations/' . $name . '.pdf');
        $this->myMailer->attachFile($this->dir . 'covid/Conditions accès  IUT  Troyes au 01.02.2021- Note aux étudiants.pdf');
        $this->myMailer->sendMessage(
            $etudiant->getMails(),
            'Attestation de présence pour la période du ' . $covidAttestationEtudiant->getDateDebut()->format('d/m/Y') . '  au ' . $covidAttestationEtudiant->getDateFin()->format('d/m/Y'),
            [
                'replyTo' => [$covidAttestationEtudiant->getDiplome()->getAssistantDiplome()->getMailUniv()],
                'from'    => [$covidAttestationEtudiant->getDiplome()->getAssistantDiplome()->getMailUniv()]
            ]
        );
    }

    /**
     * @param CovidAttestationEtudiant $covidAttestationEtudiant
     *
     * @throws LoaderError
     * @throws RuntimeError
     * @throws SyntaxError|TransportExceptionInterface
     */
    public function sendAllConvocation(CovidAttestationEtudiant $covidAttestationEtudiant): void
    {
        set_time_limit(300);
        foreach ($covidAttestationEtudiant->getGroupes() as $groupe) {
            foreach ($groupe->getEtudiants() as $etudiant) {
                $this->sendOneConvocation($covidAttestationEtudiant, $etudiant);
            }
        }
        set_time_limit(30);
    }

    public function genereFichierEtudiant(array $presences)
    {
        $this->myExcelWriter->createSheet('stage');
        $tEnTete = [
            'date présence',
            'Heure',
            'Civ.',
            'Nom',
            'Prénom',
            'Mail',
            'Motif',
            'diplôme',
            'Salles'
        ];
        $this->myExcelWriter->ecritLigne($tEnTete, 1, 1);

        $ligne = 2;

        /** @var CovidAttestationEtudiant $presence */
        foreach ($presences as $presence) {
            foreach ($presence->getGroupes() as $groupe) {
                foreach ($groupe->getEtudiants() as $etudiant) {
                    $t = [
                        $presence->getDatePresence() !== null ? $presence->getDatePresence()->format('d/m/Y H:i') : '-',
                        $presence->heureLong(),
                        $etudiant->getCiviliteLong(),
                        $etudiant->getNom(),
                        $etudiant->getPrenom(),
                        $etudiant->getMailUniv(),
                        $presence->getMotif(),
                        $etudiant->getSemestre()->display(),
                        $presence->getSalles()
                    ];

                    $this->myExcelWriter->ecritLigne($t, 1, $ligne);
                    $ligne++;
                }
            }
        }
        $this->myExcelWriter->getColumnsAutoSize('A', 'J');
        $writer = new Xlsx($this->myExcelWriter->getSpreadsheet());
        $date = new DateTime('now');

        return new StreamedResponse(
            static function() use ($writer) {
                $writer->save('php://output');
            },
            200,
            [
                'Content-Type'        => 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
                'Content-Disposition' => 'attachment;filename="presence-etudiant-' . $date->format('d-m-Y') . '.xlsx"'
            ]
        );
    }
}
