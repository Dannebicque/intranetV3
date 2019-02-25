<?php

namespace App\DataFixtures;

use App\Entity\Adresse;
use App\Entity\Annee;
use App\Entity\AnneeUniversitaire;
use App\Entity\Diplome;
use App\Entity\Etudiant;
use App\Entity\Formation;
use App\Entity\Matiere;
use App\Entity\Personnel;
use App\Entity\PersonnelFormation;
use App\Entity\Previsionnel;
use App\Entity\Semestre;
use App\Entity\Site;
use App\Entity\TypeDiplome;
use App\Entity\Ue;
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

        $anneeu = new AnneeUniversitaire();
        $anneeu->setLibelle('2018');
        $anneeu->setAnnee(2018);
        $manager->persist($anneeu);

        $td = new TypeDiplome();
        $td->setLibelle('Diplôme Universitaire de Technologie');
        $td->setNbSemestres(4);
        $td->setNiveauEntree(0);
        $td->setNiveauSortie(2);
        $td->setSigle('DUT');
        $manager->persist($td);
        $manager->flush();

        $diplome = new Diplome($formation);
        $diplome->setLibelle('DUT MMI');
        $diplome->setSigle('DUT MMI');
        $diplome->setTypeDiplome($td);
        $diplome->setActif(true);
        $diplome->setAnneeUniversitaire(2018);
        $diplome->setCodeApogee('985DUTMMI');
        $diplome->setCodeDepartement('985');
        $diplome->setCodeVersion('402');
        $manager->persist($diplome);

        $annee = new Annee();
        $annee->setDiplome($diplome);
        $annee->setActif(true);
        $annee->setLibelle('MMI 1');
        $annee->setCodeApogee('985T1');
        $annee->setCodeDepartement('985');
        $annee->setCodeVersion('402');
        $annee->setOrdre(1);
        $manager->persist($annee);

        $semestre = new Semestre();
        $semestre->setAnnee($annee);
        $semestre->setOrdreAnnee(1);
        $semestre->setOrdreLmd(1);
        $semestre->setLibelle('S1');
        $semestre->setActif(true);
        $semestre->setMoisDebut(9);
        $semestre->setCodeApogee('985TS1');
        $semestre->setCodeDepartement('985');
        $semestre->setCodeVersion('402');
        $manager->persist($semestre);

        $ue = new Ue($semestre);
        $ue->setLibelle('UE 1');
        $ue->setCodeApogee('985TS1UE1');
        $ue->setCodeDepartement('985');
        $ue->setCodeVersion('402');
        $ue->setCoefficient(15);
        $ue->setNbEcts(15);
        $manager->persist($ue);

        $matiere = new Matiere();
        $matiere->setUe($ue);
        $matiere->setLibelle('Anglais');
        $matiere->setNbEcts(3);
        $matiere->setCoefficient(3);
        $matiere->setCodeVersion('402');
        $matiere->setCodeDepartement('985');
        $matiere->setCodeApogee('985TS1UE1M1101');
        $matiere->setCodeMatiere('M1101');
        $matiere->setCmFormation(1);
        $matiere->setCmPpn(1);
        $matiere->setTdFormation(1);
        $matiere->setTdPpn(1);
        $matiere->setTpFormation(1);
        $matiere->setTpPpn(1);
        $manager->persist($matiere);

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

        $previ = new Previsionnel($matiere, $user, 2018);
        $previ->setNbGrCm(1);
        $previ->setNbGrTd(1);
        $previ->setNbGrTp(1);
        $previ->setNbHCm(1.5);
        $previ->setNbHTd(1.5);
        $previ->setNbHTp(1.5);
        $manager->persist($previ);

        $user2 = new Etudiant();
        $user2->setUsername('etudiant');
        $password = $this->encoder->encodePassword($user2, 'test');
        $user2->setPassword($password);
        $user2->setMailUniv('etudiant@gmail.com');
        $user2->setNom('Doe');
        $user2->setPrenom('Etudiant');
        $user2->setTypeUser('etudiant');
        $user2->setRoles(['ROLE_ETUDIANT']);
        $user2->setPhotoName('noimage.png');
        $user2->setNumEtudiant('21800000');
        $user2->setNumIne('21800000A');
        $user2->setSemestre($semestre);
        $user2->setCreated(new \DateTime('now'));
        $manager->persist($user2);

        $manager->flush();
    }
}
