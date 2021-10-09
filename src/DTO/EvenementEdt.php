<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/DTO/EvenementEdt.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 04/10/2021 22:32
 */

namespace App\DTO;

use App\Entity\Semestre;
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
    public ?CarbonInterface $dateObjet = null;

    public ?string $matiere = '';
    public ?string $salle;
    public ?string $personnel;
    public ?string $groupe;
    public ?int $groupeId;
    public ?string $typeIdMatiere;
    public ?string $type_cours;
    public ?string $texte = null;

    public ?Semestre $semestre = null;

    public ?string $gridStart = '';
    public ?string $gridEnd = '';

    public ?string $couleur = '';

    /** @deprecated */
    public ?string $display = '';
    public ?string $codeelement = '';
    public ?int $ordreGroupe = 1;

    public function getDisplay()
    {
        //générer un affichage
    }

    public function getMatiere()
    {
        return $this->matiere;
    }

    public function getClassCss()
    {
        return strtolower($this->type_cours) . '_' . $this->couleur;
    }
}
