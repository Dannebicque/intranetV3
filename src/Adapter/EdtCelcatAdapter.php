<?php
/*
 * Copyright (c) 2022. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Adapter/EdtCelcatAdapter.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 17/09/2022 18:50
 */

namespace App\Adapter;

use App\Classes\Edt\EdtManager;
use App\DTO\EvenementEdt;
use App\DTO\EvenementEdtCollection;
use App\Entity\Constantes;
use Carbon\Carbon;

class EdtCelcatAdapter extends AbstractEdtAdapter implements EdtAdapterInterface
{
    /** @param array<int, mixed> $events */
    public function collection(array $events, array $matieres, array $groupes): EvenementEdtCollection
    {
        $collection = new EvenementEdtCollection();

        foreach ($events as $event) {
            $collection->add($this->single($event, $matieres, $groupes));
        }

        return $collection;
    }

    public function single(mixed $event, array $matieres, array $groupes): ?EvenementEdt
    {
        $evt = new EvenementEdt();
        $event->texte = null;
        $evt->source = EdtManager::EDT_CELCAT;
        $evt->id = $event->getId();
        $evt->couleur = $event->getSemestre()->getAnnee()->getCouleur();
        $evt->jour = (string) ($event->getJour() + 1);
        $evt->heureDebut = Carbon::createFromTimeString($event->getDebut());
        $evt->heureFin = Carbon::createFromTimeString($event->getFin());
        $evt->matiere = utf8_decode($event->getLibModule());
        if (array_key_exists($event->getCodeModule(), $matieres)) {
            $matiere = $matieres[$event->getCodeModule()];
            $event->matiere = $matiere->display;
            $event->typeIdMatiere = $matiere->getTypeIdMatiere();
        } else {
            $event->matiere = 'Inconnue';
            $event->typeIdMatiere = null;
        }

        $evt->salle = $event->getLibSalle();
        $evt->personnel = utf8_decode($event->getLibPersonnel());
        if (array_key_exists($event->getCodeGroupe(), $groupes)) {
            $evt->ordreGroupe = $groupes[$event->getCodeGroupe()]->getOrdre();
            $evt->groupeId = $groupes[$event->getCodeGroupe()]->getId();
        } else {
            $evt->ordreGroupe = 0;
            $evt->groupeId = 0;
        }
        $evt->semestre = $event->getSemestre();
        $evt->diplome = $event->getSemestre()?->getDiplome();
        $evt->ordreSemestre = $event->getSemestre()->getOrdreLmd();
        $evt->groupe = $event->getLibGroupe();
        $evt->codeelement = $event->getCodeModule();
        $evt->type_cours = $event->getType();
        $evt->date = $event->getDateCours();
        $evt->gridStart = $event->getDebut()?->format('Hi');
        $evt->gridEnd = $event->getFin()?->format('Hi');
        $evt->largeur = $this->getLargeur($evt);
        $evt->duree = Constantes::TAB_HEURES_INDEX[$event->getFin()->format('H:i:s')] - Constantes::TAB_HEURES_INDEX[$event->getDebut()->format('H:i:s')];

        return $evt;
    }

    private function getLargeur(mixed $evt)
    {
        switch (trim($evt->type_cours)) {
            case 'cm':
            case 'CM':
                return $evt->semestre->getNbgroupeTpEdt();
            case 'TD':
            case 'td':
                return 2;
            default:
                return 1;
        }
    }
}
