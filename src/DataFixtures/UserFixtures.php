<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/DataFixtures/UserFixtures.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 07/02/2021 10:40
 */

namespace App\DataFixtures;

use App\Entity\Etudiant;
use App\Entity\Personnel;
use Carbon\Carbon;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Persistence\ObjectManager;
use Symfony\Component\PasswordHasher\Hasher\UserPasswordHasherInterface;

class UserFixtures extends Fixture
{
    final public const PERMANENT_USER_REFERENCE = 'permanent-user';

    public function __construct(private readonly UserPasswordHasherInterface $encoder)
    {
    }

    /**
     * @throws \JsonException
     */
    public function load(ObjectManager $manager): void
    {
        $user3 = new Personnel();
        $user3->setUsername('superAdmin');
        $password = $this->encoder->hashPassword($user3, 'test');
        $user3->setPassword($password);
        $user3->setMailUniv('super_admin@gmail.com');
        $user3->setNom('Super');
        $user3->setPrenom('Admin');
        $user3->setSlug('super_admin');
        $user3->setStatut('MCF');
        $user3->setTypeUser('permanent');
        $user3->setRoles(['ROLE_SUPER_ADMIN']);
        $user3->setPhotoName('noimage.png');
        $user3->setCreated(Carbon::now());
        $user3->setUpdatedValue();
        $user3->setAnneeUniversitaire($this->getReference(AnneeUniversitaireFixture::ANNEE_UNIVERSITAIRE_REFERENCE));
        $manager->persist($user3);

        $user2 = new Personnel();
        $user2->setUsername('permanent');
        $password = $this->encoder->hashPassword($user2, 'test');
        $user2->setPassword($password);
        $user2->setMailUniv('permanent@gmail.com');
        $user2->setNom('Doe');
        $user2->setPrenom('John');
        $user2->setSlug('permanent');
        $user2->setStatut('MCF');
        $user2->setTypeUser('permanent');
        $user2->setRoles(['ROLE_PERMANENT']);
        $user2->setPhotoName('noimage.png');
        $user2->setCreated(Carbon::now());
        $user2->setAnneeUniversitaire($this->getReference(AnneeUniversitaireFixture::ANNEE_UNIVERSITAIRE_REFERENCE));
        $user2->setUpdatedValue();
        $manager->persist($user2);
        $this->addReference(self::PERMANENT_USER_REFERENCE, $user2);

        $manager->flush();
    }

    public function getDependencies(): array
    {
        return [
            AnneeUniversitaireFixture::class,
        ];
    }
}
