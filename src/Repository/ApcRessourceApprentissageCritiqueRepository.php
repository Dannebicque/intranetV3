<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Repository/ApcRessourceApprentissageCritiqueRepository.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 24/05/2021 16:35
 */

namespace App\Repository;

use App\Entity\ApcRessourceApprentissageCritique;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @method ApcRessourceApprentissageCritique|null find($id, $lockMode = null, $lockVersion = null)
 * @method ApcRessourceApprentissageCritique|null findOneBy(array $criteria, array $orderBy = null)
 * @method ApcRessourceApprentissageCritique[]    findAll()
 * @method ApcRessourceApprentissageCritique[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class ApcRessourceApprentissageCritiqueRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, ApcRessourceApprentissageCritique::class);
    }

    public function findArrayIdAc($ressource)
    {
        $query = $this->createQueryBuilder('a')
            ->where('a.ressource = :ressource')
            ->setParameter('ressource', $ressource)
            ->getQuery()
            ->getResult();

        $t = [];
        /** @var ApcRessourceApprentissageCritique $q */
        foreach ($query as $q) {
            $t[] = $q->getApprentissageCritique()->getId();
        }

        return $t;
    }
}
