<?php
/*
 * Copyright (c) 2023. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Components/LiveTwig/PersonnelMesCoursComponent.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 04/09/2023 20:02
 */

namespace App\Components\LiveTwig;

use App\Classes\DataUserSession;
use App\Classes\Previsionnel\PrevisionnelManager;
use App\DTO\Previsionnel;
use App\Entity\Semestre;
use App\Repository\SemestreRepository;
use Symfony\UX\LiveComponent\Attribute\AsLiveComponent;
use Symfony\UX\LiveComponent\Attribute\LiveAction;
use Symfony\UX\LiveComponent\Attribute\LiveArg;
use Symfony\UX\LiveComponent\Attribute\LiveProp;
use Symfony\UX\LiveComponent\DefaultActionTrait;

#[AsLiveComponent('personnel_mes_cours', csrf: false)]
class PersonnelMesCoursComponent
{
    use DefaultActionTrait;

    #[LiveProp(writable: true)]
    public ?Semestre $semestre = null;

    /** @var Previsionnel[] */
    public ?array $previsionnels = [];

    public function __construct(
        protected DataUserSession $dataUserSession,
        protected SemestreRepository $semestreRepository,
        protected PrevisionnelManager $myPrevisionnel,
    ) {
        if (null === $this->semestre) {
            $this->semestre = $dataUserSession->getSemestresActifs()[0];
            $this->getPrevisionnelSemestre();
        }
    }

    #[LiveAction]
    public function changeSemestre(
        #[LiveArg] int $semestre): void
    {
        $this->semestre = $this->semestreRepository->find($semestre);
        $this->getPrevisionnelSemestre();
    }

    public function getPrevisionnelSemestre(): void
    {
        $this->previsionnels = $this->myPrevisionnel->getPrevisionnelPersonnelSemestre($this->dataUserSession->getUser(),
            $this->semestre, $this->dataUserSession->getAnneePrevisionnel());
    }
}
