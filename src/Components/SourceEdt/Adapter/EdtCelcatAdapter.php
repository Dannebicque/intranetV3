<?php
/*
 * Copyright (c) 2022. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Components/SourceEdt/Adapter/EdtCelcatAdapter.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 12/10/2022 15:33
 */

namespace App\Components\SourceEdt\Adapter;

use App\Adapter\AbstractEdtAdapter;
use App\Classes\Edt\EdtManager;
use App\DTO\EvenementEdt;
use App\DTO\EvenementEdtCollection;
use App\Entity\Constantes;

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
        $matiere = null;
        $event->texte = null;
        $evt->source = EdtManager::EDT_CELCAT;
        $evt->id = $event->getId();

        $evt->jour = (string) ($event->getJour() + 1);
        $evt->heureDebut = $event->getDebut();
        $evt->indexDebut = Constantes::TAB_HEURES_EDT_LIGNE_2[$event->getDebut()->roundMinute(10)->format('Hi')];
        $evt->heureFin = $event->getFin();
        $evt->matiere = utf8_decode($event->getLibModule());
        $evt->typeIdMatiere = $event->getTypeIdMatiere();
        if (array_key_exists($event->getTypeIdMatiere(), $matieres)) {
            $matiere = $matieres[$event->getTypeIdMatiere()];
            $evt->matiere = $matiere->display;
        } else {
            $evt->matiere = 'Inconnue';
        }

        $evt->salle = $event->getLibSalle();
        $evt->personnel = utf8_decode($event->getLibPersonnel());
        $evt->personnelObjet = $event->getPersonnel();

        if (array_key_exists($event->getCodeGroupe(), $groupes)) {
            $evt->ordreGroupe = $groupes[$event->getCodeGroupe()]->getOrdre();
            $evt->groupeObjet = $groupes[$event->getCodeGroupe()];
            $evt->groupeId = $groupes[$event->getCodeGroupe()]->getId();
        } else {
            $evt->ordreGroupe = 0;
            $evt->groupeId = 0;
        }

        if (null !== $event->getSemestre()) {
            $evt->semestre = $event->getSemestre();
        } else {
            if (null !== $matiere) {
                $evt->semestre = $matiere->getSemestres()[0];
            }
        }

        $evt->couleur = $evt->semestre?->getAnnee()->getCouleur();
        $evt->ordreSemestre = $evt->semestre?->getOrdreLmd();

        $evt->diplome = $event->getSemestre()?->getDiplome();

        $evt->groupe = $event->getLibGroupe();
        $evt->codeelement = $event->getCodeModule();
        $evt->type_cours = $event->getType();
        $evt->date = $event->getDateCours();
        $evt->dateObjet = $event->getDateCours();
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
