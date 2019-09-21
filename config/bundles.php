<?php
/**
 * Copyright (C) 9 / 2019 | David annebicque | IUT de Troyes - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetv3/config/bundles.php
 * @author     David Annebicque
 * @project intranetv3
 * @date 21/09/2019 11:51
 * @lastUpdate 21/09/2019 11:51
 */

return [
    Symfony\Bundle\FrameworkBundle\FrameworkBundle::class => ['all' => true],
    Symfony\Bundle\TwigBundle\TwigBundle::class => ['all' => true],
    Doctrine\Bundle\DoctrineCacheBundle\DoctrineCacheBundle::class => ['all' => true],
    Doctrine\Bundle\DoctrineBundle\DoctrineBundle::class => ['all' => true],
    Doctrine\Bundle\MigrationsBundle\DoctrineMigrationsBundle::class => ['all' => true],
    Symfony\Bundle\SwiftmailerBundle\SwiftmailerBundle::class => ['all' => true],
    Vich\UploaderBundle\VichUploaderBundle::class => ['all' => true],
    Symfony\Bundle\SecurityBundle\SecurityBundle::class => ['all' => true],
    FOS\JsRoutingBundle\FOSJsRoutingBundle::class => ['all' => true],
    Sensio\Bundle\FrameworkExtraBundle\SensioFrameworkExtraBundle::class => ['all' => true],
    Stof\DoctrineExtensionsBundle\StofDoctrineExtensionsBundle::class => ['all' => true],
    Symfony\Bundle\MonologBundle\MonologBundle::class            => ['all' => true],
    Endroid\QrCodeBundle\EndroidQrCodeBundle::class              => ['all' => true],
    L3\Bundle\CasBundle\L3CasBundle::class                       => ['all' => true],
    Symfony\Bundle\MakerBundle\MakerBundle::class                => ['dev' => true],
    Symfony\Bundle\WebProfilerBundle\WebProfilerBundle::class    => ['dev' => true, 'test' => true],
    Doctrine\Bundle\FixturesBundle\DoctrineFixturesBundle::class => ['dev' => true, 'test' => true],
    Translation\Bundle\TranslationBundle::class                  => ['all' => true],
    PRayno\CasAuthBundle\PRaynoCasAuthBundle::class              => ['all' => true],
];
