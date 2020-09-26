<?php
// Copyright (c) 2020. | David Annebicque | IUT de Troyes  - All Rights Reserved
// @file /Users/davidannebicque/htdocs/intranetV3/src/Classes/Etudiant/EtudiantGroupes.php
// @author davidannebicque
// @project intranetV3
// @lastUpdate 26/09/2020 08:52

namespace App\Classes\Etudiant;

use App\Entity\Etudiant;
use App\Entity\Groupe;
use Doctrine\ORM\EntityManagerInterface;

class EtudiantGroupes
{
    /**
     * @var Etudiant
     */
    private Etudiant $etudiant;

    /**
     * @var EntityManagerInterface
     */
    private EntityManagerInterface $entityManager;

    /**
     * EtudiantGroupes constructor.
     *
     * @param EntityManagerInterface $entityManager
     */
    public function __construct(EntityManagerInterface $entityManager)
    {
        $this->entityManager = $entityManager;
    }

    public function setEtudiant(Etudiant $etudiant)
    {
        $this->etudiant = $etudiant;
    }

    public function suppressionGroupes(): void
    {
        /** @var Groupe $groupe */
        foreach ($this->etudiant->getGroupes() as $groupe) {
            //suppression des groupes
            $this->etudiant->removeGroupe($groupe);
            $groupe->removeEtudiant($this->etudiant);
            $this->entityManager->persist($groupe);
        }
        $this->entityManager->flush();
    }
}
