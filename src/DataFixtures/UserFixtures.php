<?php

namespace App\DataFixtures;

use App\Entity\Configuration;
use App\Entity\Personnel;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Common\Persistence\ObjectManager;
use Symfony\Component\Security\Core\Encoder\PasswordEncoderInterface;

class UserFixtures extends Fixture
{
    public function load(ObjectManager $manager, PasswordEncoderInterface $encoder)
    {
        // $product = new Product();
        // $manager->persist($product);
        $user = new Personnel();
        $user->setUsername('annebi01');
        $user->setPassword($encoder->encodePassword('test'));
        $user->setMailUniv('david.annebicque@gmail.com');
        $user->setNom('Annebicque');
        $user->setPrenom('David');
        $user->setRoles(["ROLE_SUPER_ADMIN"]);
        $user->setPhotoName('noimage.png');
        $user->setCreated(new \DateTime('now'));
        $manager->persist($user);

        $manager->flush();
    }
}
