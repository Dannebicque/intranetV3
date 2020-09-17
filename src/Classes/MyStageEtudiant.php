<?php
// Copyright (c) 2020. | David Annebicque | IUT de Troyes  - All Rights Reserved
// @file /Users/davidannebicque/htdocs/intranetV3/src/Classes/MyStageEtudiant.php
// @author davidannebicque
// @project intranetV3
// @lastUpdate 16/09/2020 17:13

/**
 * Created by PhpStorm.
 * User: davidannebicque
 * Date: 06/08/2018
 * Time: 15:49
 */

namespace App\Classes;

use App\Entity\Etudiant;
use App\Entity\StageEtudiant;
use App\Entity\StagePeriode;
use App\Event\StageEvent;
use App\Repository\StageEtudiantRepository;
use Carbon\Carbon;
use DateTime;
use Doctrine\ORM\EntityManagerInterface;
use Doctrine\ORM\NonUniqueResultException;
use Exception;
use Symfony\Contracts\EventDispatcher\EventDispatcherInterface;

class MyStageEtudiant
{
    protected EntityManagerInterface $entityManger;

    protected EventDispatcherInterface $eventDispatcher;

    protected StageEtudiantRepository $stageEtudiantRepository;

    protected StageEtudiant $stageEtudiant;

    private Configuration $configuration;

    /**
     * MyStageEtudiant constructor.
     *
     * @param Configuration            $configuration
     * @param EntityManagerInterface   $entityManger
     * @param EventDispatcherInterface $eventDispatcher
     * @param StageEtudiantRepository  $stageEtudiantRepository
     */
    public function __construct(
        Configuration $configuration,
        EntityManagerInterface $entityManger,
        EventDispatcherInterface $eventDispatcher,
        StageEtudiantRepository $stageEtudiantRepository
    ) {
        $this->eventDispatcher = $eventDispatcher;
        $this->entityManger = $entityManger;
        $this->configuration = $configuration;
        $this->stageEtudiantRepository = $stageEtudiantRepository;
    }

    /**
     * @param StagePeriode $stagePeriode
     * @param Etudiant     $etudiant
     * @param              $etat
     *
     * @throws NonUniqueResultException
     */
    public function changeEtat(StagePeriode $stagePeriode, Etudiant $etudiant, $etat): void
    {
        $this->stageEtudiant = $this->checkStageEtudiantExist($stagePeriode, $etudiant);

        $eventMail = '';
        $eventNotif = '';

        switch ($etat) {
            case StageEtudiant::ETAT_STAGE_AUTORISE:
                $this->stageEtudiant->setEtatStage(StageEtudiant::ETAT_STAGE_AUTORISE);
                $this->stageEtudiant->setDateAutorise(new Carbon('now'));
                $eventNotif = StageEvent::CHGT_ETAT_STAGE_AUTORISE;
                break;
            case StageEtudiant::ETAT_STAGE_DEPOSE:
                $this->stageEtudiant->setEtatStage(StageEtudiant::ETAT_STAGE_DEPOSE);
                $this->stageEtudiant->setDateDepotFormulaire(new Carbon('now'));
                $eventNotif = StageEvent::CHGT_ETAT_STAGE_DEPOSE;
                break;
            case StageEtudiant::ETAT_STAGE_VALIDE:
                $this->stageEtudiant->setEtatStage(StageEtudiant::ETAT_STAGE_VALIDE);
                $this->stageEtudiant->setDateValidation(new Carbon('now'));
                $eventNotif = StageEvent::CHGT_ETAT_STAGE_VALIDE;
                break;
            case StageEtudiant::ETAT_STAGE_CONVENTION_ENVOYEE:
                $this->stageEtudiant->setEtatStage(StageEtudiant::ETAT_STAGE_CONVENTION_ENVOYEE);
                $this->stageEtudiant->setDateConventionEnvoyee(new Carbon('now'));
                $eventNotif = StageEvent::CHGT_ETAT_STAGE_CONVENTION_ENVOYEE;
                break;
            case StageEtudiant::ETAT_STAGE_CONVENTION_RECUE:
                $this->stageEtudiant->setEtatStage(StageEtudiant::ETAT_STAGE_CONVENTION_RECUE);
                $this->stageEtudiant->setDateConventionRecu(new Carbon('now'));
                $eventNotif = StageEvent::CHGT_ETAT_CONVENTION_RECUE;
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

        $event = new StageEvent($this->stageEtudiant);

        if ($eventNotif !== '') {
            $this->eventDispatcher->dispatch($event, $eventNotif);
        }

        $this->entityManger->persist($this->stageEtudiant);
        $this->entityManger->flush();
    }

    /**
     * @param StagePeriode $stagePeriode
     * @param Etudiant     $etudiant
     *
     * @return StageEtudiant|mixed
     * @throws NonUniqueResultException
     * @throws Exception
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
     * @throws Exception
     */
    private function createStageEtudiant(StagePeriode $stagePeriode, Etudiant $etudiant): StageEtudiant
    {
        $stageEtudiant = new StageEtudiant($this->configuration->get('GRATIFICATION_HEURE_STAGE'));
        $stageEtudiant->setEtudiant($etudiant);
        $stageEtudiant->setStagePeriode($stagePeriode);
        $stageEtudiant->setDateDebutStage($stagePeriode->getDateDebut());
        $stageEtudiant->setDateFinStage($stagePeriode->getDateFin());

        $this->entityManger->persist($stageEtudiant);
        $this->entityManger->flush();

        return $stageEtudiant;
    }
}
