<?php
/*
 * Copyright (c) 2023. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Exception/PersonnelNotFoundException.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 25/07/2023 13:56
 */

namespace App\Exception;

use Exception;

class PersonnelNotFoundException extends Exception
{
    public function __construct()
    {
        parent::__construct('Personnel non trouvé');
    }
}
