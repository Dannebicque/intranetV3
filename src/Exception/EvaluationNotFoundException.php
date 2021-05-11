<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Exception/EvaluationNotFoundException.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 08/05/2021 19:58
 */

namespace App\Exception;

use Exception;

class EvaluationNotFoundException extends Exception
{
    protected $message = 'Evaluation non trouvée';
}
