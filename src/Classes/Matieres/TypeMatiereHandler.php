<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Classes/Matieres/TypeMatiereHandler.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 02/05/2021 18:44
 */

namespace App\Classes\Matieres;

use App\Entity\ApcRessource;
use App\Entity\ApcSae;
use App\Entity\Matiere;
use Doctrine\ORM\EntityManagerInterface;

class TypeMatiereHandler
{

    /**
     * @var \Doctrine\ORM\EntityManagerInterface
     */
    private EntityManagerInterface $entityManager;

    public function __construct(EntityManagerInterface $entityManager)
    {
        $this->entityManager = $entityManager;
    }

    public function typeDeMatiereFromSelect($data)
    {
        $d = explode('_', $data);

        if (count($d) === 2) {
            return $this->typeDeMatiere($d[0]);
        }
    }

    public function typeDeMatiere($type)
    {
        switch ($type) {
            case Matiere::SOURCE:
                return new MatiereManager($this->entityManager->getRepository(Matiere::class));
            case ApcSae::SOURCE:
                return new SaeManager($this->entityManager->getRepository(ApcSae::class));
            case ApcRessource::SOURCE:
                return new RessourceManager($this->entityManager->getRepository(ApcRessource::class));
        }
    }
}
