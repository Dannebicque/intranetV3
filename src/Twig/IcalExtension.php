<?php

/*
 * Copyright (c) 2024. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Twig/IcalExtension.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 16/09/2024 19:53
 */

namespace App\Twig;

use App\Entity\Personnel;
use Symfony\Component\Routing\Generator\UrlGeneratorInterface;
use Symfony\Component\Routing\RouterInterface;
use Twig\Extension\AbstractExtension;
use Twig\TwigFilter;

class IcalExtension extends AbstractExtension
{
    public function __construct(private RouterInterface $router)
    {
    }

    public function getFilters(): array
    {
        return [
            new TwigFilter('genereLienIcal', $this->genereLienIcal(...), ['is_safe' => ['html']]),
        ];
    }

    public function genereLienIcal(Personnel $personnel): string
    {
        return $this->router->generate('edt_etudiant_synchro_ical', [
            'code' => md5($personnel->getSlug()),
            '_format' => 'ics',
        ],
            UrlGeneratorInterface::ABSOLUTE_URL);
    }
}
