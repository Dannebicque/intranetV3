<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Classes/Edt/EdtInterface.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 26/09/2021 18:46
 */

/*
 * Pull your hearder here, for exemple, Licence header.
 */

namespace App\Classes\Edt;

use App\DTO\EvenementEdt;
use App\DTO\EvenementEdtCollection;
use App\Entity\Semestre;

interface EdtInterface
{
    public function getPlanningSemestre(Semestre $semestre): EvenementEdtCollection;

    public function find($event): EvenementEdt;
}
