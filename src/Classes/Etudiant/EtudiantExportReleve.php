<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Classes/Etudiant/EtudiantExportReleve.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 19/02/2021 12:06
 */

/*
 * Pull your hearder here, for exemple, Licence header.
 */

namespace App\Classes\Etudiant;

use App\Classes\MyEvaluations;
use App\Classes\Pdf\MyPDF;
use App\Classes\Tools;
use App\Entity\AnneeUniversitaire;
use App\Entity\Etudiant;
use App\Entity\Scolarite;
use App\Entity\Semestre;
use App\Repository\NoteRepository;
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

    /**
     * EtudiantNotes constructor.
     */
    public function __construct(
        EtudiantNotes $etudiantNotes,
        MyPDF $myPdf,
        KernelInterface $kernel,
        MyEvaluations $myEvaluations
    ) {
        $this->etudiantNotes = $etudiantNotes;
        $this->myEvaluations = $myEvaluations;
        $this->myPdf = $myPdf;
        $this->dir = $kernel->getProjectDir() . '/public/upload/temp/pdf/';
    }

    public function setEtudiant(Etudiant $etudiant)
    {
        $this->etudiant = $etudiant;
    }

    /**
     * @throws LoaderError
     * @throws RuntimeError
     * @throws SyntaxError
     */
    public function exportReleveProvisoire(Semestre $semestre, AnneeUniversitaire $anneeUniversitaire)
    {
        $this->myEvaluations->getEvaluationsSemestre($semestre, $anneeUniversitaire);

        return $this->myPdf::generePdf('pdf/releveProvisoire.html.twig', [
            'etudiant' => $this->etudiant,
            'notes' => $this->getNotesEtudiantSemestre($semestre, $anneeUniversitaire),
            'syntheses' => $this->myEvaluations->getStatistiques(),
            'anneeUniversitaire' => $semestre->getAnneeUniversitaire(),
            'semestre' => $semestre,
        ], 'releveNoteProvisoire-' . Tools::slug($this->etudiant->getNom()) . '.pdf',
            $this->etudiant->getDepartement()->getLibelle());
    }

    public function getNotesEtudiantSemestre(Semestre $semestre, AnneeUniversitaire $anneeUniversitaire)
    {
        $this->etudiantNotes->setEtudiant($this->etudiant);

        return $this->etudiantNotes->getNotesParSemestresEtAnneeUniversitaire($semestre, $anneeUniversitaire);
    }

    public function exportReleveDefinitif(Scolarite $scolarite)
    {
        return $this->myPdf::generePdf('pdf/releveDefinitif.html.twig', [
            'scolarite' => $scolarite,
        ], 'releveNotedefinitif-' . Tools::slug($scolarite->getEtudiant()->getNom()) . '.pdf',
            $scolarite->getEtudiant()->getDepartement()->getLibelle());
    }

    public function exportAllReleveProvisoire(Semestre $semestre, AnneeUniversitaire $anneeUniversitaire)
    {
        $this->myEvaluations->getEvaluationsSemestre($semestre, $anneeUniversitaire);
        $statistiques = $this->myEvaluations->getStatistiques();

        $libelleDepartement = $semestre->getDiplome()->getDepartement()->getLibelle();

        // Create new Zip Archive.
        $zip = new ZipArchive();
        $fileName = $semestre->getLibelle() . '-' . date('YmdHis') . '.zip';
        // The name of the Zip documents.
        $zipName = $this->dir . $fileName;

        $zip->open($zipName, ZipArchive::CREATE);
        $tabFiles = [];

        $etudiants = $semestre->getEtudiants();
        foreach ($etudiants as $etudiant) {
            if (0 === $etudiant->getAnneeSortie()) {
                $this->etudiant = $etudiant;
                $nomFichier = 'releveNoteProvisoire-' . Tools::slug($this->etudiant->getNom());
                $this->myPdf::genereAndSavePdf('pdf/releveProvisoire.html.twig', [
                    'etudiant' => $this->etudiant,
                    'notes' => $this->getNotesEtudiantSemestre($semestre, $anneeUniversitaire),
                    'syntheses' => $statistiques,
                    'anneeUniversitaire' => $anneeUniversitaire,
                    'semestre' => $semestre,
                ], $nomFichier,
                    $this->dir,
                    $libelleDepartement);
                $file = $this->dir . $nomFichier . '.pdf';
                $tabFiles[] = $file;
                $zip->addFile($file,
                    $semestre->getLibelle() . '/' . $nomFichier . '.pdf');
            }
        }

        $zip->close();

        //suppression des PDF
        foreach ($tabFiles as $file) {
            unlink($file);
        }

        $response = new Response(file_get_contents($zipName));
        $response->headers->set('Content-Type', 'application/zip');
        $response->headers->set('Content-Disposition', 'attachment;filename="' . $zipName . '"');
        $response->headers->set('Content-length', filesize($zipName));

        return $fileName;
    }
}
