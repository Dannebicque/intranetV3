<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Classes/Etudiant/EtudiantGroupes.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 07/02/2021 10:07
 */

/*
 * Pull your hearder here, for exemple, Licence header.
 */

namespace App\Classes\Etudiant;

use App\Entity\Etudiant;
use App\Entity\Groupe;
use Doctrine\ORM\EntityManagerInterface;

class EtudiantGroupes
{
    private Etudiant $etudiant;

    private EntityManagerInterface $entityManager;

    /**
     * EtudiantGroupes constructor.
     */
    public function __construct(EntityManagerInterface $entityManager)
    {
        $this->entityManager = $entityManager;
    }

    public function setEtudiant(Etudiant $etudiant): void
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
