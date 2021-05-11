<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Exception/SemestreNotFoundException.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 08/05/2021 12:30
 */

namespace App\Exception;

use Exception;

class SemestreNotFoundException extends Exception
{
    protected $message = 'Semestre non trouvée';
}
