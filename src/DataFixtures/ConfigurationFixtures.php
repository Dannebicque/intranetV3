<?php

namespace App\DataFixtures;

use App\Entity\Configuration;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Common\Persistence\ObjectManager;

class ConfigurationFixtures extends Fixture
{
    public function load(ObjectManager $manager): void
    {
        // $product = new Product();
        // $manager->persist($product);
        $conf = new Configuration();
        $conf->setCle('MAIL_FROM');
        $conf->setValeur('intranet@iut-troyes.univ-reims.fr');
        $manager->persist($conf);

        $conf = new Configuration();
        $conf->setCle('NOM_IUT');
        $conf->setValeur('IUT de Troyes');
        $manager->persist($conf);

        $conf = new Configuration();
        $conf->setCle('NOM_UNIVERSITE');
        $conf->setValeur('Université de Reims Champagne-Ardenne');
        $manager->persist($conf);

        $conf = new Configuration();
        $conf->setCle('LOGO_IUT');
        $conf->setValeur('logo.jpg');
        $manager->persist($conf);

        $conf = new Configuration();
        $conf->setCle('SITE_IUT');
        $conf->setValeur('https://iut-troyes.univ-reims.fr');
        $manager->persist($conf);

        $conf = new Configuration();
        $conf->setCle('SITE_INTRANET_IUT');
        $conf->setValeur('https://intranet.iut-troyes.univ-reims.fr');
        $manager->persist($conf);

        $conf = new Configuration();
        $conf->setCle('ADRESSE_IUT');
        $conf->setValeur('Iut de Troyes, 9, Rue de Québec, CS90396, 10026 Troyes Cedex');
        $manager->persist($conf);

        $conf = new Configuration();
        $conf->setCle('BASE_PATH');
        $conf->setValeur('src/public/upload/');
        $manager->persist($conf);

        $manager->flush();
    }
}
