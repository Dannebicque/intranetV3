<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/DataFixtures/TypeDiplomeFixtures.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 07/02/2021 10:40
 */

namespace App\DataFixtures;

use App\Entity\TypeDiplome;
use Carbon\Carbon;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Persistence\ObjectManager;

class TypeDiplomeFixtures extends Fixture
{
    final public const TYPE_BUT_REFERENCE = 'type-but';

    public function load(ObjectManager $manager): void
    {
        $td = new TypeDiplome();
        $td->setLibelle('Diplôme Universitaire de Technologie');
        $td->setCreated(Carbon::now());
        $td->setUpdated(Carbon::now());
        $td->setSigle('DUT');
        $td->setNbSemestres(4);
        $td->setNiveauEntree(0);
        $td->setNiveauSortie(2);
        $manager->persist($td);

        $td = new TypeDiplome();
        $td->setLibelle('Bachelor Universitaire de Technologie');
        $td->setCreated(Carbon::now());
        $td->setUpdated(Carbon::now());
        $td->setSigle('B.U.T.');
        $td->setNbSemestres(6);
        $td->setNiveauEntree(0);
        $td->setNiveauSortie(3);
        $this->addReference(self::TYPE_BUT_REFERENCE, $td);
        $manager->persist($td);

        $td = new TypeDiplome();
        $td->setLibelle('Licence Professionnelle');
        $td->setCreated(Carbon::now());
        $td->setUpdated(Carbon::now());
        $td->setSigle('LPro');
        $td->setNbSemestres(2);
        $td->setNiveauEntree(2);
        $td->setNiveauSortie(3);
        $manager->persist($td);

        $manager->flush();
    }
}
