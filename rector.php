<?php

declare(strict_types=1);

use Rector\Config\RectorConfig;
use Rector\Doctrine\Set\DoctrineSetList;
use Rector\Set\ValueObject\LevelSetList;
use Rector\Core\Configuration\Option;
use Rector\Symfony\Set\SymfonySetList;

return static function (RectorConfig $containerConfigurator): void {
    // get parameters
    $parameters = $containerConfigurator->parameters();
    $parameters->set(
        Option::SYMFONY_CONTAINER_XML_PATH_PARAMETER,
        __DIR__ . '/var/cache/dev/App_KernelDevDebugContainer.xml'
    );
    // Define what rule sets will be applied

    $containerConfigurator->import(LevelSetList::UP_TO_PHP_81);
//    $containerConfigurator->import(SymfonySetList::SYMFONY_54);
//    $containerConfigurator->import(SymfonySetList::SYMFONY_CODE_QUALITY);
//    $containerConfigurator->import(SymfonySetList::SYMFONY_CONSTRUCTOR_INJECTION);
//    $containerConfigurator->import(SymfonySetList::ANNOTATIONS_TO_ATTRIBUTES);
//    $containerConfigurator->import(DoctrineSetList::DOCTRINE_CODE_QUALITY);
   // $containerConfigurator->import(DoctrineSetList::ANNOTATIONS_TO_ATTRIBUTES);
};
