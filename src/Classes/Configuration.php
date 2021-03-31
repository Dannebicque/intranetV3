<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Classes/Configuration.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 31/03/2021 17:13
 */

/*
 * Pull your hearder here, for exemple, Licence header.
 */

namespace App\Classes;

use App\Repository\ConfigurationRepository;
use Symfony\Component\Mime\Address;

class Configuration
{
    /**
     * @var \App\Entity\Configuration[]
     */
    private array $settings = [];

    private ConfigurationRepository $configurationRepository;

    public function __construct(ConfigurationRepository $configurationRepository)
    {
        $this->configurationRepository = $configurationRepository;
    }

    public function get($name): string
    {
        if (0 === \count($this->settings)) {
            $this->getAllSettings();
        }

        return $this->settings[$name];
    }

    public function getAllSettings(): void
    {
        $settings = $this->configurationRepository->findAll();

        foreach ($settings as $conf) {
            $this->settings[$conf->getCle()] = $conf->getValeur();
        }
    }

    public function getExpediteurIntranet()
    {
        return new Address($this->get('MAIL_FROM'), 'Intranet ' . $this->get('NOM_IUT'));
    }
}
