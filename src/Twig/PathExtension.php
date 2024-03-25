<?php
/*
 * Copyright (c) 2024. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Twig/PathExtension.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 23/02/2024 21:35
 */

namespace App\Twig;

use App\Classes\Configuration;
use Symfony\Bundle\SecurityBundle\Security;
use Twig\Extension\AbstractExtension;
use Twig\TwigFilter;

/**
 * Class AppExtension.
 */
class PathExtension extends AbstractExtension
{
    protected Configuration $config;

    public function __construct(protected Security $security)
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
