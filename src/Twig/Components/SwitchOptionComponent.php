<?php

/*
 * Copyright (c) 2024. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Twig/Components/SwitchOptionComponent.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 14/01/2024 18:01
 */

namespace App\Twig\Components;

use App\Classes\MyConfiguration;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\UX\LiveComponent\Attribute\AsLiveComponent;
use Symfony\UX\LiveComponent\Attribute\LiveAction;
use Symfony\UX\LiveComponent\Attribute\LiveProp;
use Symfony\UX\LiveComponent\DefaultActionTrait;

#[AsLiveComponent()]
final class SwitchOptionComponent
{
    use DefaultActionTrait;

    #[LiveProp(writable: true)]
    public ?string $help;

    #[LiveProp(writable: true)]
    public ?string $label;

    #[LiveProp(writable: true)]
    public ?int $id;

    #[LiveProp(writable: true)]
    public ?string $type;

    #[LiveProp(writable: true)]
    public ?string $cle;

    #[LiveProp(writable: true)]
    public ?bool $value;

    public function __construct(
        protected MyConfiguration        $myConfiguration,
        protected EntityManagerInterface $entityManager)
    {
    }

    #[LiveAction]
    public function changeOption(): void
    {
        $this->value = !$this->value;
        $this->myConfiguration->updateOption($this->type, $this->id, $this->cle, $this->value);
    }

}
