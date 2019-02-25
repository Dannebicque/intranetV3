<?php

namespace App\DataFixtures;

use App\Entity\Adresse;
use App\Entity\Formation;
use App\Entity\Personnel;
use App\Entity\PersonnelFormation;
use App\Entity\Site;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Common\Persistence\ObjectManager;
use Symfony\Component\Security\Core\Encoder\UserPasswordEncoderInterface;

class FormationFixtures extends Fixture
{
    private $encoder;

    public function __construct(UserPasswordEncoderInterface $encoder)
    {
        $this->encoder = $encoder;
    }

    public function load(ObjectManager $manager)
    {
        $adresse = new Adresse();
        $adresse->setAdresse1('9 Rue de Québec');
        $adresse->setCodePostal('10026');
        $adresse->setVille('Troyes');
        $manager->persist($adresse);

        $site = new Site();
        $site->setLibelle('IUT de Troyes');
        $site->setAdresse($adresse);
        $manager->persist($site);

        $formation = new Formation();
        $formation->setLibelle('MMI');
        $formation->setActif(true);
        $formation->setCouleur('blue');
        $formation->setDescription('loreum ipsum');
        $formation->setSite($site);
        $formation->setLogoName('noimage.png');
        $manager->persist($formation);

        $user = new Personnel();
        $user->setUsername('permanent');
        $password = $this->encoder->encodePassword($user, 'test');
        $user->setPassword($password);
        $user->setMailUniv('permanent@gmail.com');
        $user->setNom('Annebicque');
        $user->setPrenom('David');
        $user->setStatut('MCF');
        $user->setTypeUser('permanent');
        $user->setRoles(['ROLE_PERMANENT']);
        $user->setPhotoName('noimage.png');
        $user->setCreated(new \DateTime('now'));
        $manager->persist($user);

        $pf = new PersonnelFormation($user, $formation);
        $manager->persist($pf);

        $manager->flush();
    }
}
