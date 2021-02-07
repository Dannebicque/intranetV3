<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Classes/Etudiant/EtudiantImport.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 07/02/2021 11:11
 */

/*
 * Pull your hearder here, for exemple, Licence header.
 */

namespace App\Classes\Etudiant;

use App\Classes\LDAP\MyLdap;
use App\Entity\Adresse;
use App\Entity\Etudiant;
use App\Entity\Semestre;
use Doctrine\ORM\EntityManagerInterface;

class EtudiantImport
{
    private MyLdap $myLdap;
    private EntityManagerInterface $entity;

    /**
     * EtudiantImport constructor.
     */
    public function __construct(MyLdap $myLdap, EntityManagerInterface $entity)
    {
        $this->myLdap = $myLdap;
        $this->entity = $entity;
    }

    /**
     * @return Etudiant
     * @throws \JsonException
     *
     */
    public function createEtudiant(?Semestre $semestre, array $dataApogee): ?Etudiant
    {
        $etudiant = new Etudiant();
        $etudiant->setSemestre($semestre);
        $etudiant->setDepartement($semestre->getDiplome()->getDepartement());
        $etudiant->updateFromApogee($dataApogee['etudiant']);
        $etudiant->setPhotoName($etudiant->getNumEtudiant() . '.jpg');
        $update = $this->updateLdap($etudiant);
        $this->saveAdresse($dataApogee, $etudiant);
        if (true === $update) {
            $this->entity->persist($etudiant);

            return $etudiant;
        }

        return null;
    }

    private function updateLdap(Etudiant $etudiant)
    {
        $etuLdap = $this->myLdap->getInfoEtudiant($etudiant->getNumEtudiant());
        if (\is_array($etuLdap) && 2 === \count($etuLdap) && '' !== $etuLdap['mail'] && '' !== $etuLdap['login']) {
            $etudiant->updateFromLdap($etuLdap);

            return true;
        }

        $etudiant->setUsername(mb_substr($etudiant->getNumEtudiant(), 0, 6));
        $etudiant->setSlug(mb_substr($etudiant->getNumEtudiant(), 0, 6));
        $etudiant->setMailUniv(mb_substr($etudiant->getNumEtudiant(), 0, 6));

        return false;
    }

    private function saveAdresse($dataApogee, Etudiant $etudiant): void
    {
        $adresse = new Adresse();
        $adresse->updateFromApogee($dataApogee['adresse']);
        $this->entity->persist($adresse);
        $etudiant->setAdresse($adresse);
        $this->entity->persist($etudiant);
    }

    public function updateEtudiant(
        Etudiant $etudiant,
        Semestre $semestre,
        array $dataApogee
    ) {
        $etudiant->updateFromApogee($dataApogee['etudiant']);
        $etudiant->setSemestre($semestre);
        $ldap = $this->updateLdap($etudiant);
        $etudiant->getAdresse()->updateFromApogee($dataApogee['adresse']);
        $etudiant->setPhotoName($etudiant->getNumEtudiant() . '.jpg');
        $this->saveAdresse($dataApogee, $etudiant);

        if ($ldap) {
            $this->entity->persist($etudiant);

            return $etudiant;
        }

        $this->entity->clear($etudiant);

        return null;
    }
}
