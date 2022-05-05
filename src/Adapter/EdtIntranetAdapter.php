<?php
/*
 * Copyright (c) 2022. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Adapter/EdtIntranetAdapter.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 05/05/2022 10:36
 */

namespace App\Adapter;

use App\Classes\Edt\EdtManager;
use App\DTO\EvenementEdt;
use App\DTO\EvenementEdtCollection;
use App\Entity\Constantes;
use Carbon\Carbon;

class EdtIntranetAdapter extends AbstractEdtAdapter implements EdtAdapterInterface
{
    public function collection(array $events, array $matieres, array $groupes): EvenementEdtCollection
    {
        $collection = new EvenementEdtCollection();

        foreach ($events as $event) {
            $collection->add($this->single($event, $matieres, $groupes));
        }

        return $collection;
    }

    public function single(mixed $evt, array $matieres = [], array $groupes = []): ?EvenementEdt
    {
        $event = new EvenementEdt();

        if (array_key_exists($evt->getTypeIdMatiere(), $matieres)) {
            $event->matiere = $matieres[$evt->getTypeIdMatiere()]->display;
            $event->code_matiere = $matieres[$evt->getTypeIdMatiere()]->codeMatiere;
        } else {
            $event->matiere = 'Inconnue';
        }
        $event->source = EdtManager::EDT_INTRANET;
        $event->id = $evt->getId();
        $event->date = $evt->getDate();
        $event->jour = (string) $evt->getJour();
        $event->heureDebut = Carbon::createFromTimeString($evt->getDebutTexte());
        $event->heureFin = Carbon::createFromTimeString($evt->getFinTexte());
        $event->typeIdMatiere = $evt->getTypeIdMatiere();
        $event->texte = $evt->getTexte();
        $event->groupeId = $evt->getGroupe();
        $event->salle = $evt->getSalle();
        $event->groupe = $evt->getDisplayGroupe();
        $event->dateObjet = $evt->getDate();
        $event->gridStart = Constantes::TAB_HEURES_EDT_2[$evt->getDebut() - 1][0];
        $event->gridEnd = Constantes::TAB_HEURES_EDT_2[$evt->getFin() - 1][0];

        if (array_key_exists($evt->getGroupe(), $groupes)) {
            $event->ordreGroupe = $groupes[$evt->getGroupe()]->getOrdre();
        }

        $event->personnel = null !== $evt->getIntervenant() ? $evt->getIntervenant()->getDisplayPr() : '-';
        $event->groupe = $evt->getDisplayGroupe();
        $event->type_cours = $evt->getType();
        $event->couleur = $evt->getSemestre()->getAnnee()->getCouleur();

        return $event;
    }
}
