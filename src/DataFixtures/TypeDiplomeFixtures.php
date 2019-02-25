<?php

namespace App\DataFixtures;

use App\Entity\TypeDiplome;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Common\Persistence\ObjectManager;

class TypeDiplomeFixtures extends Fixture
{
    public function load(ObjectManager $manager)
    {
        $td = new TypeDiplome();
        $td->setLibelle('Diplôme Universitaire de Technologie');
        $td->setNbSemestres(4);
        $td->setNiveauEntree(0);
        $td->setNiveauSortie(2);
        $td->setSigle('DUT');
        $manager->persist($td);
        $manager->flush();
    }
}
