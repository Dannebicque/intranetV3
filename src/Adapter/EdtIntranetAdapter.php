<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Adapter/EdtIntranetAdapter.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 26/09/2021 18:46
 */

namespace App\Adapter;

use App\Classes\Edt\EdtManager;
use App\DTO\EvenementEdt;
use App\DTO\EvenementEdtCollection;
use App\Entity\Constantes;
use Carbon\Carbon;

class EdtIntranetAdapter extends AbstractEdtAdapter implements EdtAdapterInterface
{
    public function collection(array $matieres): EvenementEdtCollection
    {
        $collection = new EvenementEdtCollection();

        foreach ($matieres as $matiere) {
            $collection->add($this->single($matiere));
        }

        return $collection;
    }

    public function single($event): ?EvenementEdt
    {
        $evt = new EvenementEdt();
        $evt->source = EdtManager::EDT_INTRANET;
        $evt->id = $event->getId();
        $evt->jour = $event->getJour();
        $evt->heureDebut = Carbon::createFromTimeString($event->getDebutTexte());
        $evt->heureFin = Carbon::createFromTimeString($event->getFinTexte());

        $evt->salle = $event->getSalle();
        $evt->personnel = $event->getIntervenant()?->getDisplay();
        $evt->groupe = $event->getGroupe();
        $evt->typeIdMatiere = $event->getTypeIdMatiere();
        $evt->type_cours = $event->getType();
        $evt->semestre = $event->getSemestre();
        $evt->dateObjet = $event->getDate();

        $evt->gridStart = Constantes::TAB_HEURES_EDT_2[$event->getDebut() - 1][0];
        $evt->gridEnd = Constantes::TAB_HEURES_EDT_2[$event->getFin() - 1][0];

        return $evt;
    }
}
