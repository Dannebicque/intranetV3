<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/DataFixtures/AnneeUniversitaireFixture.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 21/10/2021 18:13
 */

namespace App\DataFixtures;

use App\Entity\AnneeUniversitaire;
use DateTime;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Persistence\ObjectManager;

class AnneeUniversitaireFixture extends Fixture
{
    public function load(ObjectManager $manager): void
    {
        $td = new AnneeUniversitaire();
        $td->setLibelle('2021-2022');
        $td->setActive(true);
        $td->setAnnee(2021);
        $td->setCreated(new DateTime('now'));
        $td->setUpdated(new DateTime('now'));
        $manager->persist($td);

        $manager->flush();
    }
}
