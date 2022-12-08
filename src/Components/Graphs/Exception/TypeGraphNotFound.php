<?php
/*
 * Copyright (c) 2022. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Components/Graphs/Exception/TypeGraphNotFound.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 18/11/2022 08:54
 */

namespace App\Components\Graphs\Exception;

use Exception;

class TypeGraphNotFound extends Exception
{
    protected $message = 'Ce type de graphique n\'existe pas';
}
