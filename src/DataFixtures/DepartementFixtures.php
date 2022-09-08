<?php
/*
 * Copyright (c) 2022. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/DataFixtures/DepartementFixtures.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 08/09/2022 19:05
 */

namespace App\DataFixtures;

use App\Entity\Annee;
use App\Entity\ApcRessource;
use App\Entity\Departement;
use App\Entity\Diplome;
use App\Entity\Etudiant;
use App\Entity\Groupe;
use App\Entity\PersonnelDepartement;
use App\Entity\Previsionnel;
use App\Entity\Semestre;
use App\Entity\TypeGroupe;
use App\Entity\Ue;
use App\Enums\TypeGroupeEnum;
use Carbon\Carbon;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Common\DataFixtures\DependentFixtureInterface;
use Doctrine\Persistence\ObjectManager;
use Symfony\Component\PasswordHasher\Hasher\UserPasswordHasherInterface;

class DepartementFixtures extends Fixture implements DependentFixtureInterface
{
    final public const DEPARTEMENT_REFERENCE = 'departement';
    final public const SEMESTRE_REFERENCE = 'semestre';

    public function __construct(private readonly UserPasswordHasherInterface $encoder)
    {
    }

    /**
     * @throws \JsonException
     */
    public function load(ObjectManager $manager): void
    {
        $departement = new Departement();
        $departement->setLibelle('MMI');
        $departement->setOptEdt(false);
        $departement->setLogoName('logo.png');
        $departement->setActif(true);
        $departement->setDescription('loreum ipsum');
        $departement->setCouleur('blue');
        $this->addReference(self::DEPARTEMENT_REFERENCE, $departement);
        $manager->persist($departement);

        $personnelDepartement = new PersonnelDepartement($this->getReference(UserFixtures::PERMANENT_USER_REFERENCE),
            $departement);
        $personnelDepartement->setDefaut(true);
        $personnelDepartement->setAnnee(2021);
        $personnelDepartement->setRoles('["ROLE_CDD"]');
        $manager->persist($personnelDepartement);

        // Diplome
        $diplome = new Diplome($departement);
        $diplome->setLibelle('Métiers du Multimédia et de l\'Internet');
        $diplome->setSigle('MMI');
        $diplome->setDepartement($departement);
        $diplome->setActif(true);
        $diplome->setAnneeUniversitaire($this->getReference(AnneeUniversitaireFixture::ANNEE_UNIVERSITAIRE_REFERENCE));
        $diplome->setCodeDepartement('TS123');
        $diplome->setCodeDiplome('DTS123');
        $diplome->setCodeVersion('101');
        $diplome->setCreated(Carbon::now());
        $diplome->setUpdated(Carbon::now());
        $diplome->setResponsableDiplome($this->getReference(UserFixtures::PERMANENT_USER_REFERENCE));
        $diplome->setTypeDiplome($this->getReference(TypeDiplomeFixtures::TYPE_BUT_REFERENCE));
        $manager->persist($diplome);

        // Annee
        $annee = new Annee();
        $annee->setLibelle('BUT 1');
        $annee->setDiplome($diplome);
        $annee->setCodeEtape('TS1231');
        $annee->setCodeVersion('101');
        $annee->setCreated(Carbon::now());
        $annee->setUpdated(Carbon::now());
        $annee->setCouleur('red');
        $manager->persist($annee);

        // Semestre
        $semestre = new Semestre();
        $semestre->setLibelle('S1');
        $semestre->setAnnee($annee);
        $semestre->setActif(true);
        $semestre->setCodeElement('TS123S1');
        $semestre->setMoisDebut(9);
        $semestre->setOrdreLmd(1);
        $semestre->setCreated(Carbon::now());
        $semestre->setUpdated(Carbon::now());
        $this->addReference(self::SEMESTRE_REFERENCE, $semestre);
        $manager->persist($semestre);

        // UE
        $ue = new Ue($semestre);
        $ue->setSemestre($semestre);
        $ue->setCodeElement('TS123S1UE1');
        $ue->setLibelle('UE1');
        $ue->setNumeroUe(1);
        $ue->setCreated(Carbon::now());
        $ue->setUpdated(Carbon::now());
        $ue->setActif(true);
        $ue->setCoefficient(1);
        $ue->setNbEcts(5);
        $manager->persist($ue);

        // Ressource
        $ressource = new ApcRessource();
        $ressource->setCodeElement('TS123S1UE1R1');
        $ressource->setCodeMatiere('R101');
        $ressource->setLibelle('Ressource 1');
        $ressource->addSemestre($semestre);
        $semestre->addApcSemestresRessource($ressource);
        $ressource->setCmFormation(10);
        $ressource->setTdFormation(10);
        $ressource->setTpFormation(10);
        $ressource->setCmFormation($semestre);
        $ressource->setNbNotes(2);
        $ressource->setCreated(Carbon::now());
        $ressource->setUpdated(Carbon::now());
        $manager->persist($ressource);

        // Etudiant
        $user3 = new Etudiant();
        $user3->setUsername('etudiant');
        $password = $this->encoder->hashPassword($user3, 'test');
        $user3->setPassword($password);
        $user3->setMailUniv('etudiant@gmail.com');
        $user3->setNom('Jean');
        $user3->setNumEtudiant('2210000');
        $user3->setNumIne('0987654321A');
        $user3->setPrenom('Pierre');
        $user3->setSlug('etudiant');
        $user3->setTypeUser('etudiant');
        $user3->setRoles(['ROLE_ETUDIANT']);
        $user3->setPhotoName('noimage.png');
        $user3->setCreated(Carbon::now());
        $user3->setUpdatedValue();
        $user3->setSemestre($semestre);
        $user3->setDepartement($departement);
        $manager->persist($user3);

        $tg = new TypeGroupe($semestre);
        $tg->setLibelle('TD');
        $tg->setType(TypeGroupeEnum::TYPE_GROUPE_TD);
        $tg->setDefaut(true);
        $tg->setCreated(Carbon::now());
        $tg->setUpdated(Carbon::now());
        $manager->persist($tg);

        $groupe = new Groupe();
        $groupe->setTypeGroupe($tg);
        $groupe->setLibelle('TD AB');
        $groupe->setCodeApogee('TS123S1TDAB');
        $groupe->setOrdre(1);
        $manager->persist($groupe);

        $user3->addGroupe($groupe);
        $groupe->addEtudiant($user3);

        $previ = new Previsionnel(2021, $this->getReference(UserFixtures::PERMANENT_USER_REFERENCE));
        $previ->setIdMatiere(1);
        $previ->setTypeMatiere('ressource');
        $previ->setNbGrCm(1);
        $previ->setNbGrTd(1);
        $previ->setNbGrTp(1);
        $previ->setNbHCm(5);
        $previ->setNbHTd(5);
        $previ->setNbHTp(5);
        $manager->persist($previ);

        $manager->flush();
    }

    public function getDependencies(): array
    {
        return [
            UserFixtures::class,
            AnneeUniversitaireFixture::class,
            TypeDiplomeFixtures::class,
        ];
    }
}
