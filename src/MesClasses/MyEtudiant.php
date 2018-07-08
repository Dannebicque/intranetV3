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
use App\Entity\Matiere;
use App\Entity\Note;
use App\Entity\Personnel;
use App\Repository\AbsenceRepository;
use App\Repository\EtudiantRepository;
use App\Repository\NoteRepository;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\EntityManager;
use Doctrine\ORM\EntityManagerInterface;

/**
 * Class MyEtudiant
 * @package App\MesClasses
 */
class MyEtudiant
{
    /** @var EtudiantRepository */
    private $etudiantRepository;

    /** @var NoteRepository */
    private $noteRepository;

    /** @var AbsenceRepository */
    private $absenceRepository;

    /** @var EntityManagerInterface */
    private $entityManager;

    /** @var Etudiant */
    private $etudiant;

    /** @var Collection|Absence[] */
    private $absences;

    /** @var Collection|Note[] */
    private $notes;

    /**
     * MyEtudiant constructor.
     *
     * @param EntityManagerInterface $entityManager
     * @param EtudiantRepository     $etudiantRepository
     * @param NoteRepository         $noteRepository
     * @param AbsenceRepository      $absenceRepository
     */
    public function __construct(
        EntityManagerInterface $entityManager,
        EtudiantRepository $etudiantRepository,
        NoteRepository $noteRepository,
        AbsenceRepository $absenceRepository
    ) {
        $this->entityManager = $entityManager;
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

    public function setIdEtudiant($id)
    {
        $this->etudiant = $this->etudiantRepository->find($id);
    }

    /**
     * @param $date
     * @param $heure
     * @param $matiere
     * @param $personnel
     *
     * @return bool
     * @throws \Doctrine\ORM\ORMException
     * @throws \Doctrine\ORM\OptimisticLockException
     */
    public function addAbsence($date, $heure, Matiere $matiere, Personnel $personnel, $annee)
    {
        $absence = new Absence();
        $absence->setEtudiant($this->etudiant);
        $absence->setPersonnel($personnel);
        $absence->setDate($date);
        $absence->setAnneeuniversitaire($annee);
        $absence->setDuree(new \DateTime('01:30'));
        $absence->setHeure($heure);
        $absence->setMatiere($matiere);

        $this->entityManager->persist($absence);
        $this->entityManager->flush();

        return true;
    }
}