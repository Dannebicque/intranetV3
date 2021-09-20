<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/DTO/EvenementEdt.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 20/09/2021 22:06
 */

namespace App\DTO;

use Carbon\CarbonInterface;

class EvenementEdt
{
    public ?string $source;
    public ?int $id;

    public ?string $date;
    public ?string $jour;
    /** @deprecated */
    public ?float $duree;

    public ?CarbonInterface $heureDebut;
    public ?CarbonInterface $heureFin;

    public ?string $matiere;
    public ?string $salle;
    public ?string $personnel;
    public ?string $groupe;
    public ?int $groupeId;
    public ?string $typeIdMatiere;
    public ?string $type_cours;
    public ?string $texte = null;

    public ?string $gridStart = '';
    public ?string $gridEnd = '';

    public ?string $couleur = '';

    /** @deprecated */
    public ?string $display = '';

    public function getDisplay()
    {
        //générer un affichage
    }

    public function getClassCss()
    {
        return strtolower($this->type_cours) . '_' . $this->couleur;
    }
}
