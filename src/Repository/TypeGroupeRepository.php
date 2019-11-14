<?php /**
 * Copyright (C) 8 / 2019 | David annebicque | IUT de Troyes - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetv3/src/Repository/TypeGroupeRepository.php
 * @author     David Annebicque
 * @project intranetv3
 * @date 26/08/2019 13:45
 * @lastUpdate 26/08/2019 13:13
 */ /**
 * Copyright (C) 11 / 2019 | David annebicque | IUT de Troyes - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetv3/src/Repository/TypeGroupeRepository.php
 * @author     David Annebicque
 * @project intranetv3
 * @date 14/11/2019 14:57
 * @lastUpdate 14/11/2019 08:16
 */ /** @noinspection ALL */
/** @noinspection PhpUnused */

namespace App\Repository;

use App\Entity\Annee;
use App\Entity\Departement;
use App\Entity\Diplome;
use App\Entity\Semestre;
use App\Entity\TypeGroupe;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Common\Persistence\ManagerRegistry;
use Doctrine\ORM\QueryBuilder;
use Symfony\Bridge\Doctrine\RegistryInterface;

/**
 * @method TypeGroupe|null find($id, $lockMode = null, $lockVersion = null)
 * @method TypeGroupe|null findOneBy(array $criteria, array $orderBy = null)
 * @method TypeGroupe[]    findAll()
 * @method TypeGroupe[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class TypeGroupeRepository extends ServiceEntityRepository
{
    /**
     * TypeGroupeRepository constructor.
     *
     * @param RegistryInterface $registry
     */
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, TypeGroupe::class);
    }

    /**
     * @param $semestre
     *
     * @return QueryBuilder
     */
    public function findBySemestreBuilder(Semestre $semestre): QueryBuilder
    {
        return $this->createQueryBuilder('t')
            ->where('t.semestre = :semestre')
            ->setParameter('semestre', $semestre);
    }

    public function findBySemestre(Semestre $semestre)
    {
        return $this->findBySemestreBuilder($semestre)->getQuery()->getResult();
    }

    public function findByDepartement(Departement $departement)
    {
        return $this->createQueryBuilder('t')
            ->innerJoin(Semestre::class, 's', 'WITH', 't.semestre = s.id')
            ->innerJoin(Annee::class, 'a', 'WITH', 's.annee = a.id')
            ->innerJoin(Diplome::class, 'd', 'WITH', 'a.diplome = d.id')
            ->where('d.departement = :departement')
            ->setParameter('departement', $departement->getId())
            ->getQuery()
            ->getResult();
    }
}
