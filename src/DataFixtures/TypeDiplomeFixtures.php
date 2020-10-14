<?php
// Copyright (c) 2020. | David Annebicque | IUT de Troyes  - All Rights Reserved
// @file /Users/davidannebicque/htdocs/intranetV3/src/DataFixtures/TypeDiplomeFixtures.php
// @author davidannebicque
// @project intranetV3
// @lastUpdate 13/10/2020 09:56

namespace App\DataFixtures;

use App\Entity\TypeDiplome;
use DateTime;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Persistence\ObjectManager;

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
        $td->setLibelle('Bachelor Universitaire de Technologie');
        $td->setCreated(new DateTime('now'));
        $td->setUpdated(new DateTime('now'));
        $td->setSigle('B.U.T.');
        $td->setNbSemestres(6);
        $td->setNiveauEntree(0);
        $td->setNiveauSortie(3);
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
