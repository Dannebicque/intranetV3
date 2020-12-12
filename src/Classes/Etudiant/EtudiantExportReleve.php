<?php
// Copyright (c) 2020. | David Annebicque | IUT de Troyes  - All Rights Reserved
// @file /Users/davidannebicque/htdocs/intranetV3/src/Classes/Etudiant/EtudiantExportReleve.php
// @author davidannebicque
// @project intranetV3
// @lastUpdate 12/12/2020 19:05

namespace App\Classes\Etudiant;


use App\Classes\MyEvaluations;
use App\Classes\Pdf\MyPDF;
use App\Entity\AnneeUniversitaire;
use App\Entity\Etudiant;
use App\Entity\Scolarite;
use App\Entity\Semestre;
use App\Repository\NoteRepository;
use Doctrine\ORM\EntityManagerInterface;
use Twig\Error\LoaderError;
use Twig\Error\RuntimeError;
use Twig\Error\SyntaxError;

class EtudiantExportReleve
{

    public NoteRepository $noteRepository;

    private Etudiant $etudiant;
    /**
     * @var EntityManagerInterface
     */
    private EntityManagerInterface $entityManager;
    /**
     * @var MyPDF
     */
    private MyPDF $myPdf;


    /**
     * EtudiantNotes constructor.
     *
     * @param EtudiantNotes          $etudiantNotes
     * @param EtudiantAbsences       $etudiantAbsences
     * @param MyPDF                  $myPdf
     * @param MyEvaluations          $myEvaluations
     * @param EntityManagerInterface $entityManager
     */
    public function __construct(
        EtudiantNotes $etudiantNotes,
        EtudiantAbsences $etudiantAbsences,
        MyPDF $myPdf,
        MyEvaluations $myEvaluations,
        EntityManagerInterface $entityManager
    ) {
        $this->entityManager = $entityManager;
        $this->etudiantNotes = $etudiantNotes;
        $this->etudiantAbsences = $etudiantAbsences;
        $this->myEvaluations = $myEvaluations;
        $this->myPdf = $myPdf;
    }


    public function setEtudiant(Etudiant $etudiant)
    {
        $this->etudiant = $etudiant;
    }

    /**
     * @param Semestre           $semestre
     * @param AnneeUniversitaire $anneeUniversitaire
     *
     * @throws LoaderError
     * @throws RuntimeError
     * @throws SyntaxError
     */
    public function exportReleveProvisoire(Semestre $semestre, AnneeUniversitaire $anneeUniversitaire)
    {
        $this->myEvaluations->getEvaluationsSemestre($semestre, $anneeUniversitaire);


        return $this->myPdf::generePdf('pdf/releveProvisoire.html.twig', [
            'etudiant'           => $this->etudiant,
            'notes'              => $this->getNotesEtudiantSemestre($semestre, $anneeUniversitaire),
            'syntheses'          => $this->myEvaluations->getStatistiques(),
            'anneeUniversitaire' => $semestre->getAnneeUniversitaire(),
            'semestre'           => $semestre
        ], 'releveNoteProvisoire-' . $this->etudiant->getNom() . '.pdf',
            $this->etudiant->getDepartement()->getLibelle());

    }

    private function getNotesEtudiantSemestre(Semestre $semestre, AnneeUniversitaire $anneeUniversitaire)
    {
        $this->etudiantNotes->setEtudiant($this->etudiant);

        return $this->etudiantNotes->getNotesParSemestresEtAnneeUniversitaire($semestre, $anneeUniversitaire);
    }

    public function exportReleveDefinitif(Scolarite $scolarite)
    {
        return $this->myPdf::generePdf('pdf/releveDefinitif.html.twig', [
            'scolarite' => $scolarite
        ], 'releveNotedefinitif-' . $scolarite->getEtudiant()->getNom() . '.pdf',
            $scolarite->getEtudiant()->getDepartement()->getLibelle());
    }
}
