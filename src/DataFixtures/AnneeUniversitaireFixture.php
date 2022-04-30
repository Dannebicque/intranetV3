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
use Carbon\Carbon;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Persistence\ObjectManager;

class AnneeUniversitaireFixture extends Fixture
{
    public final const ANNEE_UNIVERSITAIRE_REFERENCE = 'annee-universitaire';

    public function load(ObjectManager $manager): void
    {
        $anneeUniversitaire = new AnneeUniversitaire();
        $anneeUniversitaire->setLibelle('2021-2022');
        $anneeUniversitaire->setActive(true);
        $anneeUniversitaire->setAnnee(2021);
        $anneeUniversitaire->setCreated(Carbon::now());
        $anneeUniversitaire->setUpdated(Carbon::now());
        $manager->persist($anneeUniversitaire);
        $this->addReference(self::ANNEE_UNIVERSITAIRE_REFERENCE, $anneeUniversitaire);
        $manager->flush();
    }
}
