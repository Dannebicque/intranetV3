<?php
// Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
// @file /Users/davidannebicque/htdocs/intranetV3/config/bundles.php
// @author davidannebicque
// @project intranetV3
// @lastUpdate 23/01/2021 14:49

return [
    Symfony\Bundle\FrameworkBundle\FrameworkBundle::class                => ['all' => true],
    Symfony\Bundle\TwigBundle\TwigBundle::class                          => ['all' => true],
    Doctrine\Bundle\DoctrineBundle\DoctrineBundle::class                 => ['all' => true],
    Doctrine\Bundle\MigrationsBundle\DoctrineMigrationsBundle::class     => ['all' => true],
    Vich\UploaderBundle\VichUploaderBundle::class                        => ['all' => true],
    Symfony\Bundle\SecurityBundle\SecurityBundle::class                  => ['all' => true],
    FOS\JsRoutingBundle\FOSJsRoutingBundle::class                        => ['all' => true],
    Sensio\Bundle\FrameworkExtraBundle\SensioFrameworkExtraBundle::class => ['all' => true],
    Symfony\Bundle\MonologBundle\MonologBundle::class                    => ['all' => true],
    Endroid\QrCodeBundle\EndroidQrCodeBundle::class                      => ['all' => true],
    Symfony\Bundle\MakerBundle\MakerBundle::class                        => ['dev' => true],
    Symfony\Bundle\WebProfilerBundle\WebProfilerBundle::class            => ['dev' => true, 'test' => true],
    Doctrine\Bundle\FixturesBundle\DoctrineFixturesBundle::class         => ['dev' => true, 'test' => true],
    Liip\ImagineBundle\LiipImagineBundle::class                          => ['all' => true],
    Twig\Extra\TwigExtraBundle\TwigExtraBundle::class                    => ['all' => true],
    Symfony\WebpackEncoreBundle\WebpackEncoreBundle::class               => ['all' => true],
    Bugsnag\BugsnagBundle\BugsnagBundle::class                           => ['all' => true],
    Symfony\UX\Chartjs\ChartjsBundle::class                              => ['all' => true],
    Knp\Bundle\SnappyBundle\KnpSnappyBundle::class                       => ['all' => true],
];
