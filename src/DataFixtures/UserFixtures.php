<?php
/**
 * Copyright (C) 7 / 2019 | David annebicque | IUT de Troyes - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetv3/src/DataFixtures/UserFixtures.php
 * @author     David Annebicque
 * @project intranetv3
 * @date 7/12/19 11:23 AM
 * @lastUpdate 4/28/19 8:46 PM
 */

namespace App\DataFixtures;

use App\Entity\Personnel;
use DateTime;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Common\Persistence\ObjectManager;
use Symfony\Component\Security\Core\Encoder\UserPasswordEncoderInterface;

class UserFixtures extends Fixture
{
    private $encoder;

    public function __construct(UserPasswordEncoderInterface $encoder)
    {
        $this->encoder = $encoder;
    }

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
        $manager->persist($user3);

        $manager->flush();
    }
}
