<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Classes/MyStage.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 07/02/2021 11:20
 */

/*
 * Pull your hearder here, for exemple, Licence header.
 */

namespace App\Classes;

use App\Entity\Etudiant;
use App\Entity\StageEtudiant;
use App\Entity\StagePeriode;
use App\Repository\EtudiantRepository;
use App\Repository\StageEtudiantRepository;
use Doctrine\ORM\EntityManagerInterface;

class MyStage
{
    /** @var EntityManagerInterface */
    protected $entityManger;

    /** @var StageEtudiantRepository */
    protected $stageEtudiantRepository;

    /** @var EtudiantRepository */
    protected $etudiantRepository;

    protected $dataEtudiants = [];

    protected $propositionsAValider = [];
    protected $conventionAEnvoyer = [];
    protected $conventionEnAttente = [];
    protected $conventionComplete = [];
    private $conventionAImprimer = [];

    /**
     * MyStage constructor.
     */
    public function __construct(
        EntityManagerInterface $entityManger,
        StageEtudiantRepository $stageEtudiantRepository,
        EtudiantRepository $etudiantRepository
    ) {
        $this->entityManger = $entityManger;
        $this->stageEtudiantRepository = $stageEtudiantRepository;
        $this->etudiantRepository = $etudiantRepository;
    }

    public function getDataPeriode(StagePeriode $stagePeriode, ?int $anneeUniversitaire = 0): self
    {
        if (0 === $anneeUniversitaire) {
            $anneeUniversitaire = null !== $stagePeriode->getAnneeUniversitaire() ? $stagePeriode->getAnneeUniversitaire()->getAnnee() : (int)date('Y');
        }

        $etudiants = $this->etudiantRepository->findBySemestre($stagePeriode->getSemestre());
        if (0 === \count($etudiants)) {
            $etudiants = $this->etudiantRepository->findByAnnee($stagePeriode->getSemestre()->getAnnee());
        }

        /** @var Etudiant $etudiant */
        foreach ($etudiants as $etudiant) {
            $this->dataEtudiants[$etudiant->getId()]['etudiant'] = $etudiant;
        }

        /** @var StageEtudiant $stageEtudiant */
        foreach ($stagePeriode->getStageEtudiants() as $stageEtudiant) {
            if (null !== $stageEtudiant->getEtudiant()) {
                if (\array_key_exists($stageEtudiant->getEtudiant()->getId(), $this->dataEtudiants)) {
                    $this->dataEtudiants[$stageEtudiant->getEtudiant()->getId()]['stage'] = $stageEtudiant;
                }

                switch ($stageEtudiant->getEtatStage()) {
                    case StageEtudiant::ETAT_STAGE_DEPOSE:
                        $this->propositionsAValider[$stageEtudiant->getEtudiant()->getId()] = $stageEtudiant;
                        break;
                    case StageEtudiant::ETAT_STAGE_VALIDE:
                        $this->conventionAImprimer[$stageEtudiant->getEtudiant()->getId()] = $stageEtudiant;
                        break;
                    case StageEtudiant::ETAT_STAGE_CONVENTION_IMPRIMEE:
                        $this->conventionAEnvoyer[$stageEtudiant->getEtudiant()->getId()] = $stageEtudiant;
                        break;
                    case StageEtudiant::ETAT_STAGE_CONVENTION_ENVOYEE:
                        $this->conventionEnAttente[$stageEtudiant->getEtudiant()->getId()] = $stageEtudiant;
                        break;
                    case StageEtudiant::ETAT_STAGE_CONVENTION_RECUE:
                        $this->conventionComplete[$stageEtudiant->getEtudiant()->getId()] = $stageEtudiant;
                        break;
                }
            }
        }

        return $this;
    }

    public function getDataEtudiants(): array
    {
        return $this->dataEtudiants;
    }

    public function getPropositionsAValider(): array
    {
        return $this->propositionsAValider;
    }

    public function getConventionAEnvoyer(): array
    {
        return $this->conventionAEnvoyer;
    }

    public function getConventionAImprimer(): array
    {
        return $this->conventionAImprimer;
    }

    public function getConventionEnAttente(): array
    {
        return $this->conventionEnAttente;
    }

    public function getConventionComplete(): array
    {
        return $this->conventionComplete;
    }
}
