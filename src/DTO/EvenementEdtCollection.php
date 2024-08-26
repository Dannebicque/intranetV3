<?php
/*
 * Copyright (c) 2024. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/DTO/EvenementEdtCollection.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 22/08/2024 16:05
 */

namespace App\DTO;

use App\Entity\Constantes;

class EvenementEdtCollection
{
    /** @var EvenementEdt[] */
    public array $evenements = [];

    public function add(EvenementEdt $event): void
    {
        $this->evenements[] = $event;
    }

    /**
     * @return EvenementEdt[]
     */
    public function getEvents(): array
    {
        return $this->evenements;
    }

    public function toArray(int $maxGroupe = 8, ?string $couleur = '#000000'): array
    {
        $planning = [];
        foreach ($this->evenements as $evenement) {
            // [jour][ligne][groupe]
            $evenement->couleur = $couleur;
            $debut = Constantes::TAB_HEURES_INDEX[$evenement->heureDebut->format('H:i:s')];
            $fin = Constantes::TAB_HEURES_INDEX[$evenement->heureFin->format('H:i:s')];
            $groupe = $evenement->ordreGroupe > 40 ? $evenement->ordreGroupe - 40 : $evenement->ordreGroupe;
            $planning[$evenement->jour][$debut][$groupe] = $evenement;

            $groupefin = $groupe + (0 === $evenement->largeur ? $maxGroupe : $evenement->largeur);

            for ($i = $debut; $i < $fin; ++$i) {
                for ($j = $groupe; $j < $groupefin; ++$j) {
                    if (!isset($planning[$evenement->jour][$i][$j])) {
                        $planning[$evenement->jour][$i][$j] = 'xx';
                    }
                }
            }
        }

        return $planning;
    }

    public function getEvenementsAsArray(): array
    {
        $t = [];
        foreach ($this->evenements as $evt) {
            if (null !== $evt->jour && null !== $evt->indexDebut) {
                $t[$evt->jour][$evt->indexDebut] = $evt;
            }
        }

        return $t;
    }

    public function getEvenementsAsJson(): array
    {
        $t = [];
        foreach ($this->evenements as $evt) {
            $t[] = $evt->toJson();
        }

        return $t;
    }
}
