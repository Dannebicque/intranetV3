<?php
/*
 * Copyright (c) 2024. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Components/LiveTwig/ListingsEtudiantsComponent.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 07/03/2024 08:57
 */

namespace App\Components\LiveTwig;

use App\Classes\DataUserSession;
use App\Entity\Semestre;
use App\Entity\TypeGroupe;
use App\Exception\DiplomeNotFoundException;
use App\Repository\SemestreRepository;
use App\Repository\TypeGroupeRepository;
use Symfony\UX\LiveComponent\Attribute\AsLiveComponent;
use Symfony\UX\LiveComponent\Attribute\LiveAction;
use Symfony\UX\LiveComponent\Attribute\LiveArg;
use Symfony\UX\LiveComponent\Attribute\LiveProp;
use Symfony\UX\LiveComponent\DefaultActionTrait;

#[AsLiveComponent('listings_etudiants')]
class ListingsEtudiantsComponent
{
    use DefaultActionTrait;

    #[LiveProp]
    public ?Semestre $semestre = null;

    #[LiveProp]
    /** @var TypeGroupe[] */
    public ?array $typeGroupes = [];

    public function __construct(
        protected DataUserSession $dataUserSession,
        protected SemestreRepository $semestreRepository,
        protected TypeGroupeRepository $typeGroupeRepository
    ) {
        if (null === $this->semestre) {
            $this->semestre = $dataUserSession->getSemestresActifs()[0];
            $this->findTypeGroupes();
        }
    }

    #[LiveAction]
    public function changeSemestre(
        #[LiveArg] int $semestre): void
    {
        $this->semestre = $this->semestreRepository->find($semestre);
        if ($this->semestre !== null) {
            $this->findTypeGroupes();
        }
    }

    private function findTypeGroupes(): void
    {
        $diplome = $this->semestre?->getDiplome();

        if (null === $diplome) {
            throw new DiplomeNotFoundException();
        }

        if ($diplome->isApc()) {
            $this->typeGroupes = $this->typeGroupeRepository->findByDiplomeAndOrdreSemestre($diplome,
                $this->semestre->getOrdreLmd());
        } else {
            $this->typeGroupes = $this->typeGroupeRepository->findBySemestre($this->semestre);
        }
    }
}
