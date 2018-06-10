<?php

namespace App\Repository;

use App\Entity\Personnel;
use App\Entity\PersonnelFormation;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Symfony\Bridge\Doctrine\RegistryInterface;

/**
 * @method Personnel|null find($id, $lockMode = null, $lockVersion = null)
 * @method Personnel|null findOneBy(array $criteria, array $orderBy = null)
 * @method Personnel[]    findAll()
 * @method Personnel[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class PersonnelRepository extends ServiceEntityRepository
{
    public function __construct(RegistryInterface $registry)
    {
        parent::__construct($registry, Personnel::class);
    }

    public function findByType($type)
    {
        return $this->createQueryBuilder('p')
            ->where('p.type_user = :type')
            ->setParameter('type', $type)
            ->getQuery()
            ->getResult();
        //todo: filtrer par formation
    }

    /**
     * @param $needle
     *
     * @return ArrayCollection
     */
    public function search($needle): ArrayCollection
    {
        return $this->createQueryBuilder('p')
            ->where('p.nom LIKE :needle')
            ->orWhere('p.prenom LIKE :needle')
            ->orWhere('p.username LIKE :needle')
            ->orWhere('p.mail_univ LIKE :needle')
            ->setParameter('needle', '%'.$needle.'%')
            ->orderBy('p.nom', 'ASC')
            ->orderBy('p.prenom', 'ASC')
            ->getQuery()
            ->getResult();
    }

    /**
     * @param $slug
     *
     * @return mixed
     * @throws \Doctrine\ORM\NonUniqueResultException
     */
    public function findOneBySlug($slug)
    {
        return $this->createQueryBuilder('p')
            ->where('p.slug = :slug')
            ->setParameter('slug', $slug)
            ->getQuery()
            ->getOneOrNullResult();
    }

    public function findByFormation($formation)
    {
        return $this->findByFormationBuilder($formation)
            ->getQuery()
            ->getResult();
    }

    public function findByFormationBuilder($formation)
    {
        return $this->createQueryBuilder('p')
            ->innerJoin(PersonnelFormation::class, 'f', 'WITH', 'f.personnel = p.id')
            ->where('f.formation = :formation')
            ->setParameter('formation', $formation)
            ->orderBy('p.nom', 'ASC')
            ->orderBy('p.prenom', 'ASC');
    }
}
