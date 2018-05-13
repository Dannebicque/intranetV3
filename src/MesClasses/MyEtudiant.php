<?php
/**
 * Created by PhpStorm.
 * User: davidannebicque
 * Date: 12/05/2018
 * Time: 16:02
 */

namespace App\MesClasses;


use App\Entity\Absence;
use App\Entity\Etudiant;
use App\Entity\Note;
use App\Repository\AbsenceRepository;
use App\Repository\EtudiantRepository;
use App\Repository\NoteRepository;
use Doctrine\Common\Collections\Collection;

class MyEtudiant
{
    /** @var EtudiantRepository */
    private $etudiantRepository;

    /** @var NoteRepository */
    private $noteRepository;

    /** @var AbsenceRepository */
    private $absenceRepository;

    /** @var Etudiant */
    private $etudiant;

    /** @var Collection|Absence[] */
    private $absences;

    /** @var Collection|Note[] */
    private $notes;

    /**
     * MyEtudiant constructor.
     *
     * @param EtudiantRepository $etudiantRepository
     * @param NoteRepository     $noteRepository
     * @param AbsenceRepository  $absenceRepository
     */
    public function __construct(
        EtudiantRepository $etudiantRepository,
        NoteRepository $noteRepository,
        AbsenceRepository $absenceRepository
    ) {
        $this->etudiantRepository = $etudiantRepository;
        $this->noteRepository = $noteRepository;
        $this->absenceRepository = $absenceRepository;
    }


    /**
     * @return Etudiant
     */
    public function getEtudiant(): Etudiant
    {
        return $this->etudiant;
    }

    /**
     * @return Collection|Absence[]
     */
    public function getAbsences(): Collection
    {
        return $this->absences;
    }

    /**
     * @return Collection|Note[]
     */
    public function getNotes(): Collection
    {
        return $this->notes;
    }

    /**
     * @param Etudiant $etudiant
     */
    public function setEtudiant(Etudiant $etudiant): void
    {
        $this->etudiant = $etudiant;
    }

    /**
     *
     */
    public function getNotesAbsences(): void
    {
        $this->notes = $this->etudiant->getNotes();
        $this->absences = $this->etudiant->getAbsences();
    }
}