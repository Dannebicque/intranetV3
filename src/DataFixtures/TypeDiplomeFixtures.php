<?php
// Copyright (C) 11 / 2019 | David annebicque | IUT de Troyes - All Rights Reserved
// @file /Users/davidannebicque/htdocs/intranetv3/src/DataFixtures/TypeDiplomeFixtures.php
// @author     David Annebicque
// @project intranetv3
// @date 25/11/2019 10:20
// @lastUpdate 23/11/2019 09:14

namespace App\DataFixtures;

use App\Entity\TypeDiplome;
use DateTime;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Common\Persistence\ObjectManager;

class TypeDiplomeFixtures extends Fixture
{
    public function load(ObjectManager $manager): void
    {
        $td = new TypeDiplome();
        $td->setLibelle('Diplôme Universitaire de Technologie');
        $td->setCreated(new DateTime('now'));
        $td->setUpdated(new DateTime('now'));
        $td->setSigle('DUT');
        $td->setNbSemestres(4);
        $td->setNiveauEntree(0);
        $td->setNiveauSortie(2);
        $manager->persist($td);

        $td = new TypeDiplome();
        $td->setLibelle('Licence Professionnelle');
        $td->setCreated(new DateTime('now'));
        $td->setUpdated(new DateTime('now'));
        $td->setSigle('LPro');
        $td->setNbSemestres(2);
        $td->setNiveauEntree(2);
        $td->setNiveauSortie(3);
        $manager->persist($td);

        $manager->flush();
    }
}
