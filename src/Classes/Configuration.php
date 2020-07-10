<?php
// Copyright (c) 2020. | David Annebicque | IUT de Troyes  - All Rights Reserved
// @file /Users/davidannebicque/htdocs/intranetV3/src/Classes/Configuration.php
// @author davidannebicque
// @project intranetV3
// @lastUpdate 09/07/2020 11:21

/**
 * Created by PhpStorm.
 * User: davidannebicque
 * Date: 26/09/2018
 * Time: 09:17
 */

namespace App\Classes;

use App\Repository\ConfigurationRepository;

class Configuration
{
    /**
     * @var \App\Entity\Configuration[]
     */
    protected static $settings = [];

    protected static $configurationRepository;

    public function __construct(ConfigurationRepository $configurationRepository)
    {
        self::$configurationRepository = $configurationRepository;
    }

    public static function get($name): string
    {
        if (count(self::$settings) === 0) {
            self::getAllSettings();
        }

        return self::$settings[$name];
    }

    public static function getAllSettings(): void
    {
        $settings = self::$configurationRepository->findAll();

        foreach ($settings as $conf) {
            self::$settings[$conf->getCle()] = $conf->getValeur();
        }
    }
}
