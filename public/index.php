<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/public/index.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 04/08/2021 08:02
 */

use App\Kernel;

require_once dirname(__DIR__) . '/vendor/autoload_runtime.php';

return function(array $context) {
    return new Kernel($context['APP_ENV'], (bool)$context['APP_DEBUG']);
};
