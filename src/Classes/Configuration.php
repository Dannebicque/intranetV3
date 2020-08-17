<?php
// Copyright (c) 2020. | David Annebicque | IUT de Troyes  - All Rights Reserved
// @file /Users/davidannebicque/htdocs/intranetV3/src/Classes/Configuration.php
// @author davidannebicque
// @project intranetV3
// @lastUpdate 24/07/2020 09:15

namespace App\Classes;

use App\Repository\ConfigurationRepository;

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
        if (count($this->settings) === 0) {
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
}
