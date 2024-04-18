<?php
/*
 * Copyright (c) 2024. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Repository/BorneRepository.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 18/04/2024 17:54
 */

namespace App\Repository;

use App\Entity\Annee;
use App\Entity\Borne;
use App\Entity\Departement;
use App\Entity\Diplome;
use App\Entity\Semestre;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Common\Collections\Order;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @method Borne|null find($id, $lockMode = null, $lockVersion = null)
 * @method Borne|null findOneBy(array $criteria, array $orderBy = null)
 * @method Borne[]    findAll()
 * @method Borne[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 * @extends ServiceEntityRepository<Borne>
 */
class BorneRepository extends ServiceEntityRepository
{
    /**
     * BorneRepository constructor.
     */
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, Borne::class);
    }

    public function findByDepartement(Departement $departement, int $nbResult = 0): array
    {
        $q = $this->createQueryBuilder('b')
            ->innerJoin('b.semestres', 'c')// récupération de la jointure dans la table dédiée
            ->innerJoin(Semestre::class, 's', 'WITH', 'c.id = s.id')
            ->innerJoin(Annee::class, 'a', 'WITH', 's.annee = a.id')
            ->innerJoin(Diplome::class, 'd', 'WITH', 'a.diplome = d.id')
            ->where('d.departement = :departement')
            ->setParameter('departement', $departement->getId())
            ->orderBy('a.created', Order::Descending->value);

        if ($nbResult > 0) {
            $q->setMaxResults($nbResult);
        }

        return $q->getQuery()
            ->getResult();
    }
}
