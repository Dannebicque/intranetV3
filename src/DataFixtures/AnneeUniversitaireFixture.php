<?php
// Copyright (C) 11 / 2019 | David annebicque | IUT de Troyes - All Rights Reserved
// @file /Users/davidannebicque/htdocs/intranetv3/src/DataFixtures/AnneeUniversitaireFixture.php
// @author     David Annebicque
// @project intranetv3
// @date 25/11/2019 10:20
// @lastUpdate 25/11/2019 10:18

namespace App\DataFixtures;

use App\Entity\AnneeUniversitaire;
use DateTime;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Common\Persistence\ObjectManager;

class AnneeUniversitaireFixture extends Fixture
{
    public function load(ObjectManager $manager): void
    {
        $td = new AnneeUniversitaire();
        $td->setLibelle('2019-2020');
        $td->setActive(true);
        $td->setAnnee(2019);
        $td->setCreated(new DateTime('now'));
        $td->setUpdated(new DateTime('now'));
        $manager->persist($td);


        $manager->flush();
    }
}
