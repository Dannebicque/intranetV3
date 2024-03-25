<?php
/*
 * Copyright (c) 2024. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Classes/SousCommission/AbstractSousCommission.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 23/02/2024 21:40
 */

namespace App\Classes\SousCommission;

use App\Classes\Etudiant\EtudiantAbsences;
use App\Classes\Etudiant\EtudiantNotes;
use App\Classes\Matieres\MatiereInterface;
use App\Classes\Matieres\TypeMatiereManager;
use App\Entity\AnneeUniversitaire;
use App\Entity\Etudiant;
use App\Entity\Semestre;
use App\Entity\Ue;
use App\Enums\SemestreLienEnum;
use App\Repository\EtudiantRepository;
use App\Repository\UeRepository;
use Doctrine\ORM\EntityManagerInterface;

abstract class AbstractSousCommission
{
    protected Semestre $semestre;
    protected AnneeUniversitaire $anneeUniversitaire;
    protected array $sousCommissionEtudiant = [];

    /** @var array<int, MatiereInterface> */
    protected array $matieres = [];

    /** @var array<int, Etudiant> */
    protected array $etudiants = [];

    /** @var array<int, Ue> */
    protected array $ues = [];

    /** @var array<int, Semestre> */
    protected array $semestresScolarite = [];

    public function __construct(
        protected EntityManagerInterface $entityManager,
        protected EtudiantRepository $etudiantRepository,
        protected UeRepository $ueRepository,
        protected TypeMatiereManager $typeMatiereManager,
        protected EtudiantNotes $etudiantNotes,
        protected EtudiantAbsences $etudiantAbsences
    ) {
    }

    public function initDataSousCommission(): void
    {
        if ($this->semestre->getDiplome()->getTypeDiplome()->getApc()) {
            $this->matieres = $this->typeMatiereManager->findBySemestreAndReferentiel($this->semestre,
                $this->semestre->getDiplome()->getReferentiel());
        } else {
            $this->matieres = $this->typeMatiereManager->findBySemestre($this->semestre);
        }
        $this->ues = $this->ueRepository->findBySemestre($this->semestre);
        $this->etudiants = $this->etudiantRepository->findBySemestre($this->semestre);

        // récupération des semestres précédents
        $sem = $this->semestre;

        foreach ($sem->getSemestreLienDepart() as $se) {
            if ($se->getSens() === SemestreLienEnum::PRECEDENT) {
                $this->semestresScolarite[] = $se->getSemestreArrive();
            }
        }
    }

    /**
     * @return Ue[]
     */
    public function getUes(): array
    {
        return $this->ues;
    }

    /**
     * @return Etudiant[]|array
     */
    public function getEtudiants(): array
    {
        return $this->etudiants;
    }

    public function getSemestresScolarite(): array
    {
        return $this->semestresScolarite;
    }

    public function getSemestre(): Semestre
    {
        return $this->semestre;
    }

    public function getAnneeUniversitaire(): AnneeUniversitaire
    {
        return $this->anneeUniversitaire;
    }

    /**
     * @return MatiereInterface[]
     */
    public function getMatieres(): array
    {
        return $this->matieres;
    }
}
