<?php
/*
 * Copyright (c) 2024. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Components/LiveTwig/PersonnelMesCoursComponent.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 27/03/2024 19:31
 */

namespace App\Components\LiveTwig;

use App\Classes\DataUserSession;
use App\Classes\Previsionnel\PrevisionnelManager;
use App\DTO\Previsionnel;
use App\Entity\Semestre;
use App\Repository\SemestreRepository;
use Symfony\UX\LiveComponent\Attribute\AsLiveComponent;
use Symfony\UX\LiveComponent\Attribute\LiveAction;
use Symfony\UX\LiveComponent\Attribute\LiveProp;
use Symfony\UX\LiveComponent\DefaultActionTrait;

#[AsLiveComponent('personnel_mes_cours', csrf: false)]
class PersonnelMesCoursComponent
{
    use DefaultActionTrait;

    #[LiveProp(writable: true)]
    public ?Semestre $semestre = null;

    #[LiveProp(writable: true)]
    public $idsemestre = null;

    /** @var Previsionnel[] */
    public array $previsionnels = [];

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
    public function changeSemestre(): void
    {
        $this->semestre = $this->semestreRepository->find($this->idsemestre);
        $this->getPrevisionnelSemestre();
    }

    public function getPrevisionnelSemestre(): void
    {
        $previs = $this->myPrevisionnel->getPrevisionnelPersonnelSemestre(
            $this->dataUserSession->getUser(),
            $this->semestre, $this->dataUserSession->getAnneePrevisionnel()
        );

        $this->previsionnels = [];

        // filtre le tableau pour n'avoir qu'une seule fois les éléments
        foreach ($previs as $prev) {
            $this->previsionnels[$prev->getTypeIdMatiere()] = $prev;
        }
    }
}
