<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Exception/DepartementNotFoundException.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 23/10/2021 10:25
 */

namespace App\Exception;

use Exception;

class DepartementNotFoundException extends Exception
{
    protected $message = 'Département non trouvée';
}
