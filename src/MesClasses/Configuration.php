<?php
// Copyright (C) 11 / 2019 | David annebicque | IUT de Troyes - All Rights Reserved
// @file /Users/davidannebicque/htdocs/intranetv3/src/MesClasses/Configuration.php
// @author     David Annebicque
// @project intranetv3
// @date 25/11/2019 10:20
// @lastUpdate 23/11/2019 09:14

/**
 * Created by PhpStorm.
 * User: davidannebicque
 * Date: 26/09/2018
 * Time: 09:17
 */

namespace App\MesClasses;

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

        /** @var \App\Entity\Configuration $conf */
        foreach ($settings as $conf) {
            self::$settings[$conf->getCle()] = $conf->getValeur();
        }
    }
}
