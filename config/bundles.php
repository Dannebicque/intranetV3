<?php

return [
    Symfony\Bundle\FrameworkBundle\FrameworkBundle::class                => ['all' => true],
    Symfony\Bundle\TwigBundle\TwigBundle::class                          => ['all' => true],
    Sensio\Bundle\FrameworkExtraBundle\SensioFrameworkExtraBundle::class => ['all' => true],
    Symfony\Bundle\MakerBundle\MakerBundle::class                        => ['dev' => true],
    Doctrine\Bundle\DoctrineCacheBundle\DoctrineCacheBundle::class       => ['all' => true],
    Doctrine\Bundle\DoctrineBundle\DoctrineBundle::class                 => ['all' => true],
    Doctrine\Bundle\MigrationsBundle\DoctrineMigrationsBundle::class     => ['all' => true],
    Symfony\Bundle\SecurityBundle\SecurityBundle::class                  => ['all' => true],
    FOS\JsRoutingBundle\FOSJsRoutingBundle::class                        => ['all' => true],
    Symfony\Bundle\WebProfilerBundle\WebProfilerBundle::class            => ['dev' => true, 'test' => true],
    Symfony\Bundle\MonologBundle\MonologBundle::class                    => ['all' => true],
    Vich\UploaderBundle\VichUploaderBundle::class                        => ['all' => true],
    Translation\Bundle\TranslationBundle::class                          => ['all' => true],
    Symfony\Bundle\SwiftmailerBundle\SwiftmailerBundle::class            => ['all' => true],
    Core23\DompdfBundle\Core23DompdfBundle::class                        => ['all' => true],
];
