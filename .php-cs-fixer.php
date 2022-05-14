<?php
/*
 * Copyright (c) 2022. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/.php-cs-fixer.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 14/05/2022 10:55
 */

$finder = PhpCsFixer\Finder::create()
    ->in(__DIR__ . '/src');
$config = new PhpCsFixer\Config();

return $config->setRules([
    '@Symfony' => true,
    'yoda_style' => false,
    'class_attributes_separation' => [
        'elements' => ['method' => 'one', 'property' => 'one', 'trait_import' => 'one']
    ]
])
    ->setFinder($finder);
