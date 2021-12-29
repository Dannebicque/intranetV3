<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Adapter/EdtIntranetAdapter.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 26/10/2021 16:44
 */

namespace App\Adapter;

use App\Classes\Edt\EdtManager;
use App\DTO\EvenementEdt;
use App\DTO\EvenementEdtCollection;
use App\Entity\Constantes;
use Carbon\Carbon;

class EdtIntranetAdapter extends AbstractEdtAdapter implements EdtAdapterInterface
{
    private array $matieres = [];

    public function collection(array $events, array $matieres = []): EvenementEdtCollection
    {
        $this->matieres = $matieres;
        $collection = new EvenementEdtCollection();

        foreach ($events as $event) {
            $collection->add($this->single($event));
        }

        return $collection;
    }

    public function single(mixed $event): ?EvenementEdt
    {
        //todo: pourrait être une interface ? mais après l'interface ?
        $evt = new EvenementEdt();
        $evt->source = EdtManager::EDT_INTRANET;
        $evt->id = $event->getId();
        $evt->jour = $event->getJour();
        $evt->heureDebut = Carbon::createFromTimeString($event->getDebutTexte());
        $evt->heureFin = Carbon::createFromTimeString($event->getFinTexte());

        $evt->salle = $event->getSalle();
        $evt->personnel = $event->getIntervenant()?->getDisplay();
        $evt->ordreGroupe = (int)$event->getGroupe();
        $evt->groupe = $event->getDisplayGroupe();
        $evt->typeIdMatiere = $event->getTypeIdMatiere();
        if (array_key_exists($evt->typeIdMatiere, $this->matieres)) {
            $evt->matiere = $this->matieres[$evt->typeIdMatiere]->display;
            $evt->code_matiere = $this->matieres[$evt->typeIdMatiere]->codeMatiere;
        }
        $evt->type_cours = $event->getType();
        $evt->semestre = $event->getSemestre();
        $evt->dateObjet = $event->getDate();
        $evt->couleur = null !== $event->getSemestre() ? $event->getSemestre()->getAnnee()->getCouleur() : '';

        $evt->gridStart = Constantes::TAB_HEURES_EDT_2[$event->getDebut() - 1][0];
        $evt->gridEnd = Constantes::TAB_HEURES_EDT_2[$event->getFin() - 1][0];

        return $evt;
    }
}
