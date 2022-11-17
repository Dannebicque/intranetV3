<?php
/*
 * Copyright (c) 2022. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Exception/DepartementNotFoundException.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 25/10/2022 12:49
 */

namespace App\Exception;

use Exception;

class DepartementNotFoundException extends Exception
{
    public function __construct()
    {
        parent::__construct('Département non trouvé');
    }
}
