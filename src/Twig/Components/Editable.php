<?php

/*
 * Copyright (c) 2024. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Twig/Components/Editable.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 19/04/2024 10:19
 */

namespace App\Twig\Components;

use DateTime;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\UX\LiveComponent\Attribute\AsLiveComponent;
use Symfony\UX\LiveComponent\Attribute\LiveAction;
use Symfony\UX\LiveComponent\Attribute\LiveProp;
use Symfony\UX\LiveComponent\DefaultActionTrait;

#[AsLiveComponent]
final class Editable extends AbstractController
{
    use DefaultActionTrait;

    #[LiveProp]
    public $value;

    #[LiveProp]
    public string $titre;

    #[LiveProp(writable: true)]
    public $newValue;

    #[LiveProp]
    public string $field;
    public string $type = 'text';
    public bool $edition = false;

    #[LiveProp]
    public string $id = '';

    public string $idInput = '';

    #[LiveProp]
    public string $className = '';

    public function __construct(
        protected EntityManagerInterface $entityManager,
    )
    {
        $this->idInput = md5((new DateTime('now'))->format('Y-m-d H:i:s'));
        $this->newValue = $this->value;
    }

    #[LiveAction]
    public function edit(): void
    {
        $this->edition = true;
        $this->newValue = $this->value;
    }

    #[LiveAction]
    public function abort(): void
    {
        $this->edition = false;
    }

    #[LiveAction]
    public function valide(): bool
    {
        // récupérer une entité de type EditableInterface depuis son nom
        $objetEditable = $this->entityManager->getRepository($this->className)->find($this->id);

        if ($objetEditable === null) {
            return false;
        }

        $objetEditable->updateEditable($this->field, $this->newValue);
        $this->entityManager->flush();
        $this->value = $this->newValue;
        $this->edition = false;

        return true;
    }
}
