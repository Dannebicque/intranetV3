<?php
// Copyright (c) 2020. | David Annebicque | IUT de Troyes  - All Rights Reserved
// @file /Users/davidannebicque/htdocs/intranetV3/src/Classes/Etudiant/EtudiantExportReleve.php
// @author davidannebicque
// @project intranetV3
// @lastUpdate 08/08/2020 10:20

namespace App\Classes\Etudiant;


use App\Classes\MyEvaluations;
use App\Classes\Pdf\MyPDF;
use App\Entity\AnneeUniversitaire;
use App\Entity\Etudiant;
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
     */
    public function exportReleveProvisoire(Semestre $semestre, AnneeUniversitaire $anneeUniversitaire): void
    {
        $this->myEvaluations->getEvaluationsSemestre();

        try {
            $this->myPdf::generePdf('pdf/releveProvisoire.html.twig', [
                'etudiant'           => $this->etudiant,
                'notes'              => $this->getNotesEtudiantSemestre($semestre, $anneeUniversitaire),
                'syntheses'          => $this->myEvaluations->getStatistiques(),
                'anneeUniversitaire' => $semestre->getAnneeUniversitaire(),
            ], 'releveNoteProvisoire-' . $this->etudiant->getNom() . '.pdf', $this->etudiant->getDepartement());
        } catch (LoaderError $e) {
        } catch (RuntimeError $e) {
        } catch (SyntaxError $e) {
        }
    }

    private function getNotesEtudiantSemestre(Semestre $semestre, AnneeUniversitaire $anneeUniversitaire)
    {
        $this->etudiantNotes->setEtudiant($this->etudiant);

        return $this->etudiantNotes->getNotesParSemestresEtAnneeUniversitaire($semestre, $anneeUniversitaire);
    }

    public function exportReleveDefinitif(?Semestre $param, ?AnneeUniversitaire $getAnneeUniversitaire)
    {
        //todo: a faire
    }
}
