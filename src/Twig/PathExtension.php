<?php
/*
 * Copyright (c) 2023. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Twig/PathExtension.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 26/07/2023 08:11
 */

namespace App\Twig;

use App\Classes\Configuration;
use Twig\Extension\AbstractExtension;
use Twig\TwigFilter;

/**
 * Class AppExtension.
 */
class PathExtension extends AbstractExtension
{
    protected Configuration $config;

    public function __construct(protected \Symfony\Bundle\SecurityBundle\Security $security)
    {
    }

    public function getFilters(): array
    {
        return [
            new TwigFilter('path_admin', $this->pathAdmin(...)),
        ];
    }

    public function pathAdmin(string $path): ?string
    {
        if ($this->security->isGranted('ROLE_ADMINISTRATIF')) {
            return 'sadm_'.$path;
        }

        return 'adm_'.$path;
    }
}
