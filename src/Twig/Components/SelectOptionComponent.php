<?php

/*
 * Copyright (c) 2024. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Twig/Components/SelectOptionComponent.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 24/02/2024 09:27
 */

namespace App\Twig\Components;

use App\Classes\MyConfiguration;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\HttpFoundation\Request;
use Symfony\UX\LiveComponent\Attribute\AsLiveComponent;
use Symfony\UX\LiveComponent\Attribute\LiveAction;
use Symfony\UX\LiveComponent\Attribute\LiveProp;
use Symfony\UX\LiveComponent\DefaultActionTrait;

#[AsLiveComponent]
final class SelectOptionComponent
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
    public ?int $value; //uniquement l'id

    #[LiveProp(writable: true)]
    public ?string $entity; //uniquement l'id

    public array $liste = [];

    public function __construct(
        protected MyConfiguration        $myConfiguration,
        protected EntityManagerInterface $entityManager)
    {
    }

    #[LiveAction]
    public function changeOptionSelect(
        Request $request,
    ): void
    {
        $data = json_decode($request->request->get('data'), true);
        $this->value = $data['updated']['value'];
        $this->myConfiguration->updateOption($this->type, $this->id, $this->cle, $this->entity . $this->value);
    }
}
