<?php
/*
 * Copyright (c) 2022. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Classes/Version.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 14/05/2022 10:36
 */

namespace App\Classes;

use Symfony\Component\HttpKernel\KernelInterface;

class Version
{
    private readonly string $dir;
    private readonly ?object $bugsnag;

    public function __construct(KernelInterface $kernel)
    {
        $this->bugsnag = $kernel->getContainer()->get('bugsnag');
        $this->dir = $kernel->getProjectDir();
    }

    public function version(): string
    {
        $filename = $this->dir.'/package.json';
        $composerData = json_decode(file_get_contents($filename), true, 512, JSON_THROW_ON_ERROR);
        $version = $composerData['version'];
        $this->bugsnag->setAppVersion($version);

        return $version;
    }
}
