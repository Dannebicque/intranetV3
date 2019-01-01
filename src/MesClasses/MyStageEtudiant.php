<?php
/**
 * Created by PhpStorm.
 * User: davidannebicque
 * Date: 06/08/2018
 * Time: 15:49
 */

namespace App\MesClasses;

use App\Entity\Etudiant;
use App\Entity\StageEtudiant;
use App\Entity\StagePeriode;
use App\Events;
use App\Repository\StageEtudiantRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\EventDispatcher\EventDispatcherInterface;
use Symfony\Component\EventDispatcher\GenericEvent;

class MyStageEtudiant
{
    /** @var EntityManagerInterface */
    protected $entityManger;

    /** @var EventDispatcherInterface  */
    protected $eventDispatcher;

    /** @var StageEtudiantRepository */
    protected $stageEtudiantRepository;

    /** @var StageEtudiant */
    protected $stageEtudiant;

    /**
     * MyStageEtudiant constructor.
     *
     * @param EntityManagerInterface   $entityManger
     * @param EventDispatcherInterface $eventDispatcher
     * @param StageEtudiantRepository  $stageEtudiantRepository
     */
    public function __construct(EntityManagerInterface $entityManger, EventDispatcherInterface $eventDispatcher, StageEtudiantRepository $stageEtudiantRepository)
    {
        $this->eventDispatcher = $eventDispatcher;
        $this->entityManger = $entityManger;
        $this->stageEtudiantRepository = $stageEtudiantRepository;
    }

    /**
     * @param StagePeriode $stagePeriode
     * @param Etudiant     $etudiant
     * @param              $etat
     *
     * @throws \Doctrine\ORM\NonUniqueResultException
     */
    public function changeEtat(StagePeriode $stagePeriode, Etudiant $etudiant, $etat): void
    {
        $this->stageEtudiant = $this->checkStageEtudiantExist($stagePeriode, $etudiant);

        $eventMail = '';
        $eventNotif = '';

        switch ($etat) {
            case StageEtudiant::ETAT_STAGE_AUTORISE:
                $this->stageEtudiant->setEtatStage(StageEtudiant::ETAT_STAGE_AUTORISE);
                $this->stageEtudiant->setDateAutorise(new \DateTime('now'));
                $eventMail = Events::MAIL_CHGT_ETAT_STAGE_AUTORISE;
                $eventNotif = Events::CHGT_ETAT_STAGE_AUTORISE;
                break;
            case StageEtudiant::ETAT_STAGE_DEPOSE:
                $this->stageEtudiant->setEtatStage(StageEtudiant::ETAT_STAGE_DEPOSE);
                $this->stageEtudiant->setDateDepotFormulaire(new \DateTime('now'));
                $eventMail = Events::MAIL_CHGT_ETAT_STAGE_DEPOSE;
                $eventNotif = Events::CHGT_ETAT_STAGE_DEPOSE;
                break;
            case StageEtudiant::ETAT_STAGE_VALIDE:
                $this->stageEtudiant->setEtatStage(StageEtudiant::ETAT_STAGE_VALIDE);
                $this->stageEtudiant->setDateValidation(new \DateTime('now'));
                $eventMail = Events::MAIL_CHGT_ETAT_STAGE_VALIDE;
                $eventNotif = Events::CHGT_ETAT_STAGE_VALIDE;
                break;
            case StageEtudiant::ETAT_STAGE_CONVENTION_ENVOYEE:
                $this->stageEtudiant->setEtatStage(StageEtudiant::ETAT_STAGE_CONVENTION_ENVOYEE);
                $this->stageEtudiant->setDateConventionEnvoyee(new \DateTime('now'));
                $eventMail = Events::MAIL_CHGT_ETAT_STAGE_CONVENTION_ENVOYEE;
                $eventNotif = Events::CHGT_ETAT_STAGE_CONVENTION_ENVOYEE;
                break;
            case StageEtudiant::ETAT_STAGE_CONVENTION_RECUE:
                $this->stageEtudiant->setEtatStage(StageEtudiant::ETAT_STAGE_CONVENTION_RECUE);
                $this->stageEtudiant->setDateConventionRecu(new \DateTime('now'));
                $eventMail = Events::MAIL_CHGT_ETAT_CONVENTION_RECUE;
                $eventNotif = Events::CHGT_ETAT_CONVENTION_RECUE;
                break;
            case StageEtudiant::ETAT_STAGE_ERASMUS:
                $this->stageEtudiant->setEtatStage(StageEtudiant::ETAT_STAGE_ERASMUS);
                break;
            case StageEtudiant::ETAT_STAGE_ETRANGER:
                $this->stageEtudiant->setEtatStage(StageEtudiant::ETAT_STAGE_ETRANGER);
                break;
            case StageEtudiant::ETAT_STAGE_APPRENTISSAGE:
                $this->stageEtudiant->setEtatStage(StageEtudiant::ETAT_STAGE_APPRENTISSAGE);
                break;
        }

        $event = new GenericEvent($this->stageEtudiant);
        if ($eventMail !== '') {
            $this->eventDispatcher->dispatch($eventMail, $event);
        }

        if ($eventNotif !== '') {
            $this->eventDispatcher->dispatch($eventNotif, $event);
        }

        $this->entityManger->persist($this->stageEtudiant);
        $this->entityManger->flush();
    }

    /**
     * @param StagePeriode $stagePeriode
     * @param Etudiant     $etudiant
     *
     * @return StageEtudiant|mixed
     * @throws \Doctrine\ORM\NonUniqueResultException
     * @throws \Exception
     */
    private function checkStageEtudiantExist(StagePeriode $stagePeriode, Etudiant $etudiant)
    {
        $result = $this->stageEtudiantRepository->findExist($stagePeriode, $etudiant);

        if ($result === null) {
            return $this->createStageEtudiant($stagePeriode, $etudiant);
        }

        return $result;
    }

    /**
     * @param StagePeriode $stagePeriode
     * @param Etudiant     $etudiant
     *
     * @return StageEtudiant
     * @throws \Exception
     */
    private function createStageEtudiant(StagePeriode $stagePeriode, Etudiant $etudiant): StageEtudiant
    {
        $stageEtudiant = new StageEtudiant();
        $stageEtudiant->setEtudiant($etudiant);
        $stageEtudiant->setStagePeriode($stagePeriode);
        $stageEtudiant->setDateDebutStage($stagePeriode->getDateDebut());
        $stageEtudiant->setDateFinStage($stagePeriode->getDateFin());

        $this->entityManger->persist($stageEtudiant);
        $this->entityManger->flush();

        return $stageEtudiant;
    }
}
