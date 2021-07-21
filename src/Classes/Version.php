<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Classes/Version.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 21/07/2021 17:19
 */

namespace App\Classes;


use Symfony\Component\HttpKernel\KernelInterface;

class Version
{
    private string $dir;

    public function __construct(KernelInterface $kernel)
    {
        $this->dir = $kernel->getProjectDir();

    }

    public function version()
    {
        $filename = $this->dir . '/package.json';
        $composerData = json_decode(file_get_contents($filename), true);

        return $composerData['version'];
    }
}
