<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/DataFixtures/DepartementFixtures.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 07/02/2021 10:40
 */

namespace App\DataFixtures;

use App\Entity\Departement;
use App\Entity\PersonnelDepartement;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Common\DataFixtures\DependentFixtureInterface;
use Doctrine\Persistence\ObjectManager;

class DepartementFixtures extends Fixture implements DependentFixtureInterface
{
    public function load(ObjectManager $manager)
    {
        $departement = new Departement();
        $departement->setLibelle('MMI');
        $departement->setLogoName('logo.png');
        $departement->setActif(true);
        $departement->setDescription('loreum ipsum');
        $departement->setCouleur('blue');
        $manager->persist($departement);

        $personnelDepartement = new PersonnelDepartement($this->getReference(UserFixtures::PERMANENT_USER_REFERENCE),
            $departement);
        $personnelDepartement->setDefaut(true);
        $personnelDepartement->setAnnee(2020);
        $personnelDepartement->setRoles('ROLE_PERMANENT');

        $manager->flush();
    }

    public function getDependencies()
    {
        return [
            UserFixtures::class,
        ];
    }
}
