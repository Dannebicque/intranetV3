<?php
// Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
// @file /Users/davidannebicque/htdocs/intranetV3/src/DTO/StatitiquesBac.php
// @author davidannebicque
// @project intranetV3
// @lastUpdate 24/01/2021 14:48

namespace App\DTO;


class StatitiquesBac
{
    public $nbValide = 0;
    public $nbNonvalide = 0;
    public $nbReorientation = 0;
    public $nbRedoublement = 0;

    public function __construct()
    {

    }

    public function getPourcentageValide($effectif)
    {
        return $effectif !== 0 ? $this->nbValide / $effectif * 100 : 0;
    }

    public function getPourcentageNonValide($effectif)
    {
        return $effectif !== 0 ? $this->nbNonvalide / $effectif * 100 : 0;
    }

    public function getPourcentageReorientation($effectif)
    {
        return $effectif !== 0 ? $this->nbReorientation / $effectif * 100 : 0;
    }

    public function getPourcentageRedoublement($effectif)
    {
        return $effectif !== 0 ? $this->nbRedoublement / $effectif * 100 : 0;
    }
}
