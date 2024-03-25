<?php
/*
 * Copyright (c) 2024. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Classes/MyStageEtudiant.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 24/02/2024 08:39
 */

namespace App\Classes;

use App\Entity\Etudiant;
use App\Entity\StageEtudiant;
use App\Entity\StagePeriode;
use App\Event\StageEvent;
use App\Repository\StageEtudiantRepository;
use App\Utils\Tools;
use Carbon\Carbon;
use Doctrine\ORM\EntityManagerInterface;
use Doctrine\ORM\NonUniqueResultException;
use Exception;
use Symfony\Contracts\EventDispatcher\EventDispatcherInterface;

class MyStageEtudiant
{
    protected StageEtudiant $stageEtudiant;

    /**
     * MyStageEtudiant constructor.
     */
    public function __construct(
        private readonly Configuration $configuration,
        private readonly EntityManagerInterface $entityManager,
        private readonly EventDispatcherInterface $eventDispatcher,
        private readonly StageEtudiantRepository $stageEtudiantRepository
    ) {
    }

    /**
     * @throws NonUniqueResultException
     * @throws Exception
     */
    public function changeEtat(StagePeriode $stagePeriode, Etudiant $etudiant, string $etat): void
    {
        $this->stageEtudiant = $this->checkStageEtudiantExist($stagePeriode, $etudiant);

        $eventNotif = '';

        switch ($etat) {
            case StageEtudiant::ETAT_STAGE_AUTORISE:
                $this->stageEtudiant->setEtatStage(StageEtudiant::ETAT_STAGE_AUTORISE);
                $this->stageEtudiant->setDateAutorise(new Carbon('now'));
                $eventNotif = StageEvent::CHGT_ETAT_STAGE_AUTORISE;
                break;
            case StageEtudiant::ETAT_STAGE_REFUS:
                $eventNotif = StageEvent::CHGT_ETAT_STAGE_REFUS;
                $this->entityManager->remove($this->stageEtudiant);
                break;
            case StageEtudiant::ETAT_STAGE_INCOMPLET:
                $this->stageEtudiant->setEtatStage(StageEtudiant::ETAT_STAGE_AUTORISE);
                $eventNotif = StageEvent::CHGT_ETAT_STAGE_INCOMPLET;
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
            case StageEtudiant::ETAT_STAGE_CONVENTION_IMPRIMEE:
                $this->stageEtudiant->setEtatStage(StageEtudiant::ETAT_STAGE_CONVENTION_IMPRIMEE);
                $this->stageEtudiant->setDateImprime(new Carbon('now'));
                $eventNotif = StageEvent::CHGT_ETAT_STAGE_CONVENTION_IMPRIMEE;
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

        $this->entityManager->persist($this->stageEtudiant);
        $this->entityManager->flush();

        $event = new StageEvent($this->stageEtudiant);

        if ('' !== $eventNotif) {
            $this->eventDispatcher->dispatch($event, $eventNotif);
        }
    }

    /**
     * @throws NonUniqueResultException
     * @throws Exception
     */
    private function checkStageEtudiantExist(StagePeriode $stagePeriode, Etudiant $etudiant): StageEtudiant
    {
        $result = $this->stageEtudiantRepository->findExist($stagePeriode, $etudiant);

        return $result ?? $this->createStageEtudiant($stagePeriode, $etudiant);
    }

    /**
     * @throws Exception
     */
    private function createStageEtudiant(StagePeriode $stagePeriode, Etudiant $etudiant): StageEtudiant
    {
        if ($stagePeriode->getNbSemaines() <= 8) {
            $gratif = 0;
        } else {
            $gratif = $this->configuration->get('GRATIFICATION_HEURE_STAGE');
        }
        $stageEtudiant = new StageEtudiant($gratif);
        $stageEtudiant->setEtudiant($etudiant);
        $stageEtudiant->setStagePeriode($stagePeriode);
        $stageEtudiant->setDateDebutStage($stagePeriode->getDateDebut());
        $stageEtudiant->setDateFinStage($stagePeriode->getDateFin());
        $stageEtudiant->setDureeJoursStage($stagePeriode->getNbJours());

        $this->entityManager->persist($stageEtudiant);
        $this->entityManager->flush();

        return $stageEtudiant;
    }

    /**
     * @throws Exception
     */
    public function update(StageEtudiant $stageEtudiant, string $name, $value, string $type = 'text'): bool
    {
        if ('date' === $type) {
            $value = Tools::convertDateToObject($value);
        }

        if ('gratificationPeriode' === $type) {
            $value = mb_strtoupper(mb_substr($value, 0, 1));
        }

        if ('gratificationMontant' === $type) {
            $value = Tools::convertToFloat($value);
        }

        $method = 'set'.$name;
        if (method_exists($stageEtudiant, $method)) {
            $stageEtudiant->$method($value);
            $this->entityManager->flush();

            return true;
        }

        return false;
    }
}
