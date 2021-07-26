<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Classes/Edt/EdtCelcat.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 26/07/2021 14:47
 */

namespace App\Classes\Edt;


use App\DTO\EvenementEdtCollection;
use App\Entity\Semestre;

class EdtCelcat extends AbstractEdt implements EdtInterface
{

    public function getPlanningSemestre(Semestre $semestre): EvenementEdtCollection
    {
        // TODO: Implement getPlanningSemestre() method.
    }
}
