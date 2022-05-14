<?php
/*
 * Copyright (c) 2022. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/rector.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 14/05/2022 11:00
 */

declare(strict_types=1);

use Rector\Config\RectorConfig;
use Rector\Core\Configuration\Option;
use Rector\Doctrine\Set\DoctrineSetList;
use Rector\Set\ValueObject\LevelSetList;
use Rector\Symfony\Set\SensiolabsSetList;
use Rector\Symfony\Set\SymfonyLevelSetList;
use Rector\Symfony\Set\SymfonySetList;

return static function (RectorConfig $containerConfigurator): void {
    // get parameters
    $parameters = $containerConfigurator->parameters();
    $parameters->set(
        Option::SYMFONY_CONTAINER_XML_PATH_PARAMETER,
        __DIR__.'/var/cache/dev/App_KernelDevDebugContainer.xml'
    );
    // Define what rule sets will be applied

//    $containerConfigurator->import(LevelSetList::UP_TO_PHP_81);
    $containerConfigurator->import(SymfonyLevelSetList::UP_TO_SYMFONY_60);
//    $containerConfigurator->import(SymfonyLevelSetList::UP_TO_SYMFONY_54);
//    $containerConfigurator->import(SymfonySetList::SYMFONY_CODE_QUALITY);
//    $containerConfigurator->import(SymfonySetList::SYMFONY_CONSTRUCTOR_INJECTION);
//    $containerConfigurator->import(DoctrineSetList::ANNOTATIONS_TO_ATTRIBUTES);
//    $containerConfigurator->import(SymfonySetList::ANNOTATIONS_TO_ATTRIBUTES);
//    $containerConfigurator->import(SensiolabsSetList::FRAMEWORK_EXTRA_61);
};
