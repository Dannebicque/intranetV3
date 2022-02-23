<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/DTO/StatitiquesBac.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 07/02/2021 10:41
 */

namespace App\DTO;

class StatitiquesBac
{
    public int $nbValide = 0;
    public int $nbNonvalide = 0;
    public int $nbReorientation = 0;
    public int $nbRedoublement = 0;

    public function getPourcentageValide(int $effectif): float
    {
        return 0 !== $effectif ? $this->nbValide / $effectif * 100 : 0.0;
    }

    public function getPourcentageNonValide(int $effectif): float
    {
        return 0 !== $effectif ? $this->nbNonvalide / $effectif * 100 : 0.0;
    }

    public function getPourcentageReorientation(int $effectif): float
    {
        return 0 !== $effectif ? $this->nbReorientation / $effectif * 100 : 0.0;
    }

    public function getPourcentageRedoublement(int $effectif): float
    {
        return 0 !== $effectif ? $this->nbRedoublement / $effectif * 100 : 0.0;
    }
}
