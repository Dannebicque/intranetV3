<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Classes/Etudiant/EtudiantExportReleve.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 25/06/2021 10:28
 */

namespace App\Classes\Etudiant;

use App\Classes\Matieres\TypeMatiereManager;
use App\Classes\MyEvaluations;
use App\Classes\Pdf\MyPDF;
use App\Entity\AnneeUniversitaire;
use App\Entity\Etudiant;
use App\Entity\Scolarite;
use App\Entity\Semestre;
use App\Repository\NoteRepository;
use App\Utils\Tools;
use Knp\Bundle\SnappyBundle\Snappy\Response\PdfResponse;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpKernel\KernelInterface;
use Twig\Error\LoaderError;
use Twig\Error\RuntimeError;
use Twig\Error\SyntaxError;
use ZipArchive;

class EtudiantExportReleve
{
    public NoteRepository $noteRepository;

    private Etudiant $etudiant;

    private MyPDF $myPdf;

    private MyEvaluations $myEvaluations;

    private string $dir;

    private EtudiantNotes $etudiantNotes;

    private TypeMatiereManager $typeMatiereManager;

    /**
     * EtudiantNotes constructor.
     */
    public function __construct(
        TypeMatiereManager $typeMatiereManager,
        EtudiantNotes $etudiantNotes,
        MyPDF $myPdf,
        KernelInterface $kernel,
        MyEvaluations $myEvaluations
    ) {
        $this->typeMatiereManager = $typeMatiereManager;
        $this->etudiantNotes = $etudiantNotes;
        $this->myEvaluations = $myEvaluations;
        $this->myPdf = $myPdf;
        $this->dir = $kernel->getProjectDir().'/public/upload/temp/pdf/';
    }

    public function setEtudiant(Etudiant $etudiant): void
    {
        $this->etudiant = $etudiant;
    }

    /**
     * @throws LoaderError
     * @throws RuntimeError
     * @throws SyntaxError
     */
    public function exportReleveProvisoire(Semestre $semestre, AnneeUniversitaire $anneeUniversitaire): PdfResponse
    {
        $this->myEvaluations->getEvaluationsSemestre($semestre, $anneeUniversitaire);
        $matieres = $this->typeMatiereManager->findBySemestreArray($semestre);

        return $this->myPdf::generePdf('pdf/releveProvisoire.html.twig', [
            'etudiant' => $this->etudiant,
            'notes' => $this->getNotesEtudiantSemestre($semestre, $anneeUniversitaire),
            'syntheses' => $this->myEvaluations->getStatistiques(),
            'anneeUniversitaire' => $semestre->getAnneeUniversitaire(),
            'semestre' => $semestre,
            'matieres' => $matieres,
        ], 'releveNoteProvisoire-'.Tools::slug($this->etudiant->getNom()).'.pdf');
    }

    public function getNotesEtudiantSemestre(Semestre $semestre, AnneeUniversitaire $anneeUniversitaire): array
    {
        $this->etudiantNotes->setEtudiant($this->etudiant);
        $matieres = $this->typeMatiereManager->findBySemestre($semestre);

        return $this->etudiantNotes->getNotesParSemestresEtAnneeUniversitaire($matieres, $anneeUniversitaire);
    }

    /**
     * @throws \Twig\Error\SyntaxError
     * @throws \Twig\Error\RuntimeError
     * @throws \Twig\Error\LoaderError
     */
    public function exportReleveDefinitif(Scolarite $scolarite): PdfResponse
    {
        return $this->myPdf::generePdf('pdf/releveDefinitif.html.twig', [
            'scolarite' => $scolarite,
        ], 'releveNotedefinitif-'.Tools::slug($scolarite->getEtudiant()?->getNom()).'.pdf');
    }

    /**
     * @throws \Twig\Error\SyntaxError
     * @throws \Twig\Error\RuntimeError
     * @throws \Twig\Error\LoaderError
     */
    public function exportAllReleveProvisoire(Semestre $semestre, AnneeUniversitaire $anneeUniversitaire): string
    {
        $this->myEvaluations->getEvaluationsSemestre($semestre, $anneeUniversitaire);
        $statistiques = $this->myEvaluations->getStatistiques();
        $matieres = $this->typeMatiereManager->findBySemestreArray($semestre);
        $libelleDepartement = $semestre->getDiplome()?->getDepartement()?->getLibelle();

        // Create new Zip Archive.
        $zip = new ZipArchive();
        $fileName = $semestre->getLibelle().'-'.date('YmdHis').'.zip';
        // The name of the Zip documents.
        $zipName = $this->dir.$fileName;

        $zip->open($zipName, ZipArchive::CREATE);
        $tabFiles = [];

        $etudiants = $semestre->getEtudiants();
        foreach ($etudiants as $etudiant) {
            if (0 === $etudiant->getAnneeSortie()) {
                $this->etudiant = $etudiant;
                $nomFichier = 'releveNoteProvisoire-'.Tools::slug($this->etudiant->getNom()).'-'.$this->etudiant->getNumEtudiant();
                $this->myPdf::genereAndSavePdf('pdf/releveProvisoire.html.twig', [
                    'etudiant' => $this->etudiant,
                    'notes' => $this->getNotesEtudiantSemestre($semestre, $anneeUniversitaire),
                    'syntheses' => $statistiques,
                    'anneeUniversitaire' => $anneeUniversitaire,
                    'semestre' => $semestre,
                    'matieres' => $matieres,
                ], $nomFichier,
                    $this->dir,
                    $libelleDepartement);
                $file = $this->dir.$nomFichier.'.pdf';
                $tabFiles[] = $file;
                $zip->addFile($file,
                    $semestre->getLibelle().'/'.$nomFichier.'.pdf');
            }
        }

        $zip->close();

        //suppression des PDF
        foreach ($tabFiles as $file) {
            unlink($file);
        }

        $response = new Response(file_get_contents($zipName));
        $response->headers->set('Content-Type', 'application/zip');
        $response->headers->set('Content-Disposition', 'attachment;filename="'.$zipName.'"');
        $response->headers->set('Content-length', filesize($zipName));

        return $fileName;
    }
}
