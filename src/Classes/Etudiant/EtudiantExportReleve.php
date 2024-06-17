<?php
/*
 * Copyright (c) 2024. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Classes/Etudiant/EtudiantExportReleve.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 17/06/2024 18:25
 */

namespace App\Classes\Etudiant;

use App\Classes\Matieres\TypeMatiereManager;
use App\Classes\MyEvaluations;
use App\Classes\Pdf\PdfManager;
use App\Entity\AnneeUniversitaire;
use App\Entity\Etudiant;
use App\Entity\Scolarite;
use App\Entity\Semestre;
use App\Utils\Tools;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpKernel\KernelInterface;
use Twig\Error\LoaderError;
use Twig\Error\RuntimeError;
use Twig\Error\SyntaxError;
use ZipArchive;

class EtudiantExportReleve
{
    private Etudiant $etudiant;

    private readonly string $dir;

    /**
     * EtudiantNotes constructor.
     */
    public function __construct(
        private readonly TypeMatiereManager $typeMatiereManager,
        private readonly EtudiantNotes $etudiantNotes,
        private readonly PdfManager $myPdf,
        KernelInterface $kernel,
        private readonly MyEvaluations $myEvaluations
    ) {
        $this->dir = $kernel->getProjectDir() . '/public/upload/';
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
    public function exportReleveProvisoire(Semestre $semestre, AnneeUniversitaire $anneeUniversitaire): Response
    {
        $this->myEvaluations->getEvaluationsSemestre($semestre, $anneeUniversitaire);
        $matieres = $this->typeMatiereManager->findBySemestreArray($semestre);

        return $this->myPdf->pdf()::generePdf('pdf/releveProvisoire.html.twig', [
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
     * @throws SyntaxError
     * @throws RuntimeError
     * @throws LoaderError
     */
    public function exportReleveDefinitif(Scolarite $scolarite): Response
    {
        return $this->myPdf->pdf()::generePdf('pdf/releveDefinitif.html.twig', [
            'scolarite' => $scolarite,
        ], 'releveNotedefinitif-'.Tools::slug($scolarite->getEtudiant()?->getNom()).'.pdf');
    }

    /**
     * @throws SyntaxError
     * @throws RuntimeError
     * @throws LoaderError
     */
    public function exportAllReleveProvisoire(Semestre $semestre, AnneeUniversitaire $anneeUniversitaire): string
    {
        $this->myEvaluations->getEvaluationsSemestre($semestre, $anneeUniversitaire);
        $statistiques = $this->myEvaluations->getStatistiques();
        $matieres = $this->typeMatiereManager->findBySemestreArray($semestre);

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
                $tabFiles[] = $this->myPdf->pdf()::genereAndSavePdf('pdf/releveProvisoire.html.twig', [
                    'titre' => 'Relevé de notes provisoire ' . $semestre->getLibelle(),
                    'etudiant' => $this->etudiant,
                    'notes' => $this->getNotesEtudiantSemestre($semestre, $anneeUniversitaire),
                    'syntheses' => $statistiques,
                    'anneeUniversitaire' => $anneeUniversitaire,
                    'semestre' => $semestre,
                    'matieres' => $matieres,
                ], $nomFichier,
                    'upload/temp/pdf');
//                $file = $nomFichier; //$this->dir.$nomFichier.'.pdf';
//                $tabFiles[] = $file;
//                $zip->addFile($file,
//                    $semestre->getLibelle().'/'.$nomFichier.'.pdf');
            }
        }

        foreach ($tabFiles as $file) {
            $zip->addFile(
                $this->dir . 'temp/pdf/' . $file,
                $semestre->getLibelle() . '/' . $nomFichier . '.pdf'
            );
        }


        $zip->close();

        // suppression des PDF
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
