<?php

/*
 * Copyright (c) 2024. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Twig/Components/ShortEdtComponent.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 23/02/2024 18:43
 */

namespace App\Twig\Components;

use App\Classes\Edt\EdtManager;
use App\Controller\BaseController;
use App\DTO\EvenementEdt;
use Carbon\Carbon;
use Symfony\UX\TwigComponent\Attribute\AsTwigComponent;
use Symfony\UX\TwigComponent\Attribute\PostMount;

#[AsTwigComponent]
final class ShortEdtComponent extends BaseController
{
    public ?EvenementEdt $currentEvent = null;
    public ?EvenementEdt $nextEvent = null;

    public bool $sameDay = false;

    public function __construct(protected EdtManager $edtManager)
    {
    }

    #[PostMount]
    public function postMount(): void
    {
        $this->currentEvent = $this->edtManager->getCurrentEvent($this->getUser(), $this->getAnneeUniversitaire());
        $this->nextEvent = $this->edtManager->getNextEvent($this->getUser(), $this->getAnneeUniversitaire());


        if ($this->nextEvent !== null) {
            $this->sameDay = $this->nextEvent->dateObjet->format('d/m/Y') === Carbon::now()->format('d/m/Y');
        }
    }
}
