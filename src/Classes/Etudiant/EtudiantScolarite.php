<?php
// Copyright (c) 2020. | David Annebicque | IUT de Troyes  - All Rights Reserved
// @file /Users/davidannebicque/htdocs/intranetV3/src/Classes/Etudiant/EtudiantScolarite.php
// @author davidannebicque
// @project intranetV3
// @lastUpdate 26/08/2020 17:04

namespace App\Classes\Etudiant;


use App\Entity\Constantes;
use App\Entity\Etudiant;
use Doctrine\ORM\EntityManagerInterface;

class EtudiantScolarite
{

    private Etudiant $etudiant;
    private EtudiantGroupes $etudiantsGroupes;
    private EntityManagerInterface $entityManger;

    /**
     * EtudiantScolarite constructor.
     *
     * @param EtudiantGroupes        $etudiantsGroupes
     * @param EntityManagerInterface $entityManger
     */
    public function __construct(EtudiantGroupes $etudiantsGroupes, EntityManagerInterface $entityManger)
    {
        $this->etudiantsGroupes = $etudiantsGroupes;
        $this->entityManger = $entityManger;
    }


    public function setEtudiant(Etudiant $etudiant): void
    {
        $this->etudiant = $etudiant;
    }

    public function changeEtat($etat): void
    {

        switch ($etat) {
            case Constantes::SCOLARITE_DIPLOME:
            case Constantes::SEMESTRE_REORIENTE:
                $this->finFormation();
                //todo: update scolarité
                break;
            case 'erreur':
                $this->etudiant->setSemestre(null);
                $this->etudiant->setDepartement(null);
                $this->etudiantsGroupes->setEtudiant($this->etudiant);
                $this->etudiantsGroupes->suppressionGroupes();
                break;
        }

        $this->entityManger->persist($this->etudiant);
        $this->entityManger->flush();

    }

    private function finFormation(): void
    {
        $this->etudiant->setSemestre(null);
        $this->etudiant->setAnneeSortie(date('Y'));
        $this->etudiantsGroupes->setEtudiant($this->etudiant);
        $this->etudiantsGroupes->suppressionGroupes();
    }
}
