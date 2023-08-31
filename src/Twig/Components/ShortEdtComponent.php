<?php

/*
 * Copyright (c) 2023. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Twig/Components/ShortEdtComponent.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 13/08/2023 19:13
 */

namespace App\Twig\Components;

use App\Classes\Edt\EdtManager;
use App\DTO\EvenementEdt;
use Carbon\Carbon;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\UX\TwigComponent\Attribute\AsTwigComponent;

#[AsTwigComponent()]
final class ShortEdtComponent extends AbstractController
{
    public ?EvenementEdt $currentEvent = null;
    public ?EvenementEdt $nextEvent = null;

    public bool $sameDay = false;

    public function __construct(EdtManager $edtManager)
    {
        $this->currentEvent = $edtManager->getCurrentEvent();
        $this->nextEvent = $edtManager->getNextEvent();

        if ($this->nextEvent !== null) {
            $this->sameDay = $this->nextEvent->dateObjet->format('d/m/Y') === Carbon::now()->format('d/m/Y');
        }
    }
}
