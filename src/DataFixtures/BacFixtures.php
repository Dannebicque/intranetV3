<?php
// Copyright (C) 11 / 2019 | David annebicque | IUT de Troyes - All Rights Reserved
// @file /Users/davidannebicque/htdocs/intranetv3/src/DataFixtures/BacFixtures.php
// @author     David Annebicque
// @project intranetv3
// @date 25/11/2019 10:20
// @lastUpdate 23/11/2019 09:14

namespace App\DataFixtures;

use App\Entity\Bac;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Persistence\ObjectManager;

class BacFixtures extends Fixture
{
    public function load(ObjectManager $manager): void
    {
        $bac = new Bac();
        $bac->setLibelle('S');
        $bac->setLibelleLong('Scientifique');
        $manager->persist($bac);

        $bac2 = new Bac();
        $bac2->setLibelle('L');
        $bac2->setLibelleLong('Littéraire');
        $manager->persist($bac2);

        $bac3 = new Bac();
        $bac3->setLibelle('ES');
        $bac3->setLibelleLong('Economique et Social');
        $manager->persist($bac3);

        $bac4 = new Bac();
        $bac4->setLibelle('Pro');
        $bac4->setLibelleLong('Professionnel');
        $manager->persist($bac4);

        $manager->flush();
    }
}
