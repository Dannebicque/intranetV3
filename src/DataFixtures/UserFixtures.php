<?php
// Copyright (c) 2020. | David Annebicque | IUT de Troyes  - All Rights Reserved
// @file /Users/davidannebicque/htdocs/intranetV3/src/DataFixtures/UserFixtures.php
// @author davidannebicque
// @project intranetV3
// @lastUpdate 12/12/2020 14:31

namespace App\DataFixtures;

use App\Entity\Personnel;
use DateTime;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Persistence\ObjectManager;
use JsonException;
use Symfony\Component\Security\Core\Encoder\UserPasswordEncoderInterface;

class UserFixtures extends Fixture
{
    private $encoder;
    public const PERMANENT_USER_REFERENCE = 'permanent-user';


    public function __construct(UserPasswordEncoderInterface $encoder)
    {
        $this->encoder = $encoder;
    }

    /**
     * @param ObjectManager $manager
     *
     * @throws JsonException
     */
    public function load(ObjectManager $manager): void
    {
        $user3 = new Personnel();
        $user3->setUsername('superAdmin');
        $password = $this->encoder->encodePassword($user3, 'test');
        $user3->setPassword($password);
        $user3->setMailUniv('super_admin@gmail.com');
        $user3->setNom('Super');
        $user3->setPrenom('Admin');
        $user3->setStatut('MCF');
        $user3->setTypeUser('permanent');
        $user3->setRoles(['ROLE_SUPER_ADMIN']);
        $user3->setPhotoName('noimage.png');
        $user3->setCreated(new DateTime('now'));
        $user3->setUpdatedValue();
        $manager->persist($user3);

        $user2 = new Personnel();
        $user2->setUsername('permanent');
        $password = $this->encoder->encodePassword($user2, 'test');
        $user2->setPassword($password);
        $user2->setMailUniv('permanent@gmail.com');
        $user2->setNom('Doe');
        $user2->setPrenom('John');
        $user2->setStatut('MCF');
        $user2->setTypeUser('permanent');
        $user2->setRoles(['ROLE_PERMANENT']);
        $user2->setPhotoName('noimage.png');
        $user2->setCreated(new DateTime('now'));
        $user2->setUpdatedValue();
        $manager->persist($user2);
        $this->addReference(self::PERMANENT_USER_REFERENCE, $user2);
        $manager->flush();
    }
}
