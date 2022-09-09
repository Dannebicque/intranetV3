<?php
/*
 * Copyright (c) 2022. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Components/LiveTwig/PersonnelMesCoursComponent.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 09/09/2022 16:17
 */

namespace App\Components\LiveTwig;

use App\Classes\DataUserSession;
use App\Classes\Previsionnel\PrevisionnelManager;
use App\Entity\Semestre;
use App\Repository\SemestreRepository;
use Symfony\UX\LiveComponent\Attribute\AsLiveComponent;
use Symfony\UX\LiveComponent\Attribute\LiveAction;
use Symfony\UX\LiveComponent\Attribute\LiveArg;
use Symfony\UX\LiveComponent\Attribute\LiveProp;
use Symfony\UX\LiveComponent\DefaultActionTrait;

#[AsLiveComponent('personnel_mes_cours')]
class PersonnelMesCoursComponent
{
    use DefaultActionTrait;

    #[LiveProp]
    public ?Semestre $semestre = null;

    #[LiveProp]
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
        #[LiveArg] int $semestre)
    {
        $this->semestre = $this->semestreRepository->find($semestre);
        $this->getPrevisionnelSemestre();
    }

    public function getPrevisionnelSemestre()
    {
        $this->previsionnels = $this->myPrevisionnel->getPrevisionnelPersonnelSemestre($this->dataUserSession->getUser(),
            $this->semestre, $this->dataUserSession->getAnneePrevisionnel());
    }
}
