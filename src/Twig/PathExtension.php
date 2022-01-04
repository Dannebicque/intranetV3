<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Twig/PathExtension.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 09/10/2021 10:02
 */

namespace App\Twig;

use App\Classes\Configuration;
use Symfony\Component\Security\Core\Security;
use Twig\Extension\AbstractExtension;
use Twig\TwigFilter;

/**
 * Class AppExtension.
 */
class PathExtension extends AbstractExtension
{
    protected Security $security;
    protected Configuration $config;

    public function __construct(Security $security)
    {
        $this->security = $security;
    }

    public function getFilters(): array
    {
        return [
            new TwigFilter('path_admin', [$this, 'pathAdmin']),
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
