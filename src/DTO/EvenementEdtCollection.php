<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/DTO/EvenementEdtCollection.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 04/10/2021 18:26
 */

namespace App\DTO;

use App\Entity\Constantes;

class EvenementEdtCollection
{
    /** @var \App\DTO\EvenementEdt[] */
    public array $evenements = [];

    public function add(EvenementEdt $event): void
    {
        $this->evenements[] = $event;
    }

    /**
     * @return \App\DTO\EvenementEdt[]
     */
    public function getEvents(): array
    {
        return $this->evenements;
    }

    public function toArray(int $maxGroupe = 8)
    {
        $planning = [];
        foreach ($this->evenements as $evenement) {
            //[jour][ligne][groupe]
            $debut = Constantes::TAB_HEURES_INDEX[$evenement->heureDebut->format('H:i:s')];
            $fin = Constantes::TAB_HEURES_INDEX[$evenement->heureFin->format('H:i:s')];
            $planning[$evenement->jour][$debut][$evenement->ordreGroupe] = $evenement;
            $groupe = $evenement->ordreGroupe;
            if (strtoupper($evenement->type_cours) === 'CM') {
                $groupefin = $groupe + $maxGroupe;//todo: nb groupes du semestre ??
            } else {
                $groupefin = $groupe + $evenement->largeur();
            }

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
}
