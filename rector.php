<?php
/*
 * Copyright (c) 2023. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/rector.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 25/07/2023 22:19
 */

declare(strict_types=1);

use Rector\Config\RectorConfig;
use Rector\Symfony\Set\SymfonyLevelSetList;
use Rector\Symfony\Set\SymfonySetList;

return static function(RectorConfig $rectorConfig): void {
    $rectorConfig->symfonyContainerXml(__DIR__ . '/var/cache/dev/App_KernelDevDebugContainer.xml');

    // Define what rule sets will be applied

    $rectorConfig->import(SymfonyLevelSetList::UP_TO_SYMFONY_63);
    $rectorConfig->import(SymfonySetList::SYMFONY_CODE_QUALITY);
};
