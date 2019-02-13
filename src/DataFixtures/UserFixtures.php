<?php

namespace App\DataFixtures;

use App\Entity\Configuration;
use App\Entity\Personnel;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Common\Persistence\ObjectManager;
use Symfony\Component\Security\Core\Encoder\PasswordEncoderInterface;

class UserFixtures extends Fixture
{
    public function load(ObjectManager $manager)
    {
        // $product = new Product();
        // $manager->persist($product);
        $user = new Personnel();
        $user->setUsername('annebi01');
        $user->setPassword('$2y$10$Nq3ZV0/lAQZCrUtxZZJn0OoIHGrhtn3JXgJwpJ7obD759XqLJF78y');
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
