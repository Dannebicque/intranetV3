<?php
/*
 * Copyright (c) 2022. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Components/LiveTwig/PersonnelMesCoursComponent.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 12/09/2022 11:50
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

#[AsLiveComponent('personnel_mes_cours', csrf: false)]
class PersonnelMesCoursComponent
{
    use DefaultActionTrait;

    #[LiveProp(writable: true)]
    public ?Semestre $semestre = null;

    #[LiveProp(writable: true)]
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

//    public function dehydrateAddress(array $addressDto)
//    {
//        // NOTE: should the user be forced to json_encode() to return a scalar
//        // SEE BELOW
//        return [
//            'street1' => $addressDto->street1,
//            'street2' => $addressDto->street2,
//            'city' => $addressDto->city,
//        ];
//    }
//    public function hydrateAddress(array $address)
//    {
//        return new AddressDto(
//            $address['street1'],
//            $address['street2'],
//            $address['city']
//        );
//    }
}
