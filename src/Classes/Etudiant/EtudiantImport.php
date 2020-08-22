<?php
// Copyright (c) 2020. | David Annebicque | IUT de Troyes  - All Rights Reserved
// @file /Users/davidannebicque/htdocs/intranetV3/src/Classes/Etudiant/EtudiantImport.php
// @author davidannebicque
// @project intranetV3
// @lastUpdate 22/08/2020 14:29

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
     *
     * @param MyLdap                 $myLdap
     * @param EntityManagerInterface $entity
     */
    public function __construct(MyLdap $myLdap, EntityManagerInterface $entity)
    {
        $this->myLdap = $myLdap;
        $this->entity = $entity;
    }


    /**
     * @param Semestre|null $semestre
     * @param array         $dataApogee
     *
     * @return Etudiant
     */
    public function createEtudiant(?Semestre $semestre, array $dataApogee): Etudiant
    {
        $etudiant = new Etudiant();
        $etudiant->setSemestre($semestre);
        $etudiant->updateFromApogee($dataApogee['etudiant']);
        $this->updateLdap($etudiant);
        $this->saveAdresse($dataApogee, $etudiant);
        $this->entity->persist($etudiant);

        return $etudiant;
    }

    private function updateLdap(Etudiant $etudiant)
    {
        $etuLdap = $this->myLdap->getInfoEtudiant($etudiant->getNumEtudiant());
        if (count($etuLdap) === 2) {
            $etudiant->updateFromLdap($etuLdap);
        }
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
        $this->updateLdap($etudiant);
        $etudiant->getAdresse()->updateFromApogee($dataApogee['adresse']);
        $this->saveAdresse($dataApogee, $etudiant);
        $this->entity->persist($etudiant);

        return $etudiant;
    }
}
