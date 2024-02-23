<?php
/*
 * Copyright (c) 2024. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Exception/SemestreNotFoundException.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 23/02/2024 21:35
 */

namespace App\Exception;

use Exception;

class SemestreNotFoundException extends Exception
{
    public function __construct()
    {
        parent::__construct('Semestre non trouvé');
    }
}
