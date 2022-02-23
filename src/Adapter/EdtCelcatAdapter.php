<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Adapter/EdtCelcatAdapter.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 23/09/2021 07:48
 */

namespace App\Adapter;

use App\Classes\Edt\EdtManager;
use App\DTO\EvenementEdt;
use App\DTO\EvenementEdtCollection;

class EdtCelcatAdapter extends AbstractEdtAdapter implements EdtAdapterInterface
{
    /** @param array<int, mixed> $events */
    public function collection(array $events): EvenementEdtCollection
    {
        $collection = new EvenementEdtCollection();

        foreach ($events as $event) {
            $collection->add($this->single($event));
        }

        return $collection;
    }

    public function single(mixed $event): ?EvenementEdt
    {
        $evt = new EvenementEdt();
        $evt->source = EdtManager::EDT_CELCAT;
        $evt->id = $event->getId();
        $evt->jour = (string) ($event->getJour() + 1);
        $evt->heureDebut = $event->getDebut();
        $evt->heureFin = $event->getFin();
        $evt->matiere = $event->getLibModule();
        $evt->salle = $event->getLibSalle();
        $evt->personnel = $event->getLibPersonnel();
        $evt->groupe = $event->getLibGroupe();
        $evt->codeelement = $event->getCodeModule();
        $evt->type_cours = $event->getType();

        $evt->gridStart = $event->getDebut()?->format('Hi');
        $evt->gridEnd = $event->getFin()?->format('Hi');

        return $evt;
    }
}
