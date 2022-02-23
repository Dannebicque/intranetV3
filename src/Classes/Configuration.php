<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Classes/Configuration.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 23/10/2021 10:31
 */

namespace App\Classes;

use App\Repository\ConfigurationRepository;
use function count;
use Symfony\Component\Mime\Address;

class Configuration
{
    private array $settings = [];

    private ConfigurationRepository $configurationRepository;

    public function __construct(ConfigurationRepository $configurationRepository)
    {
        $this->configurationRepository = $configurationRepository;
    }

    public function get(string $name): string
    {
        if (0 === count($this->settings)) {
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

    public function getExpediteurIntranet(): Address
    {
        return new Address($this->get('MAIL_FROM'), 'Intranet '.$this->get('NOM_IUT'));
    }
}
