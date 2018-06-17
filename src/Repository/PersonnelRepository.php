<?php

namespace App\Repository;

use App\Entity\Personnel;
use App\Entity\PersonnelFormation;
use App\Entity\Semestre;
use App\MesClasses\MyRoute;
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

    public function findByType($type, $formation)
    {
        return $this->createQueryBuilder('p')
            ->where('p.typeUser = :type')
            ->setParameter('type', $type)
            ->getQuery()
            ->getResult();
        //todo: filtrer par formation
    }

    /**
     * @param $needle
     *
     * @return array
     */
    public function search($needle): array
    {
        return $this->createQueryBuilder('p')
            ->where('p.nom LIKE :needle')
            ->orWhere('p.prenom LIKE :needle')
            ->orWhere('p.username LIKE :needle')
            ->orWhere('p.mailUniv LIKE :needle')
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

    public function findBySemestreBuilder(Semestre $semestre)
    {
        if ($semestre->getAnnee() !== null && $semestre->getAnnee()->getDiplome() !== null) {
            return $this->findByFormationBuilder($semestre->getAnnee()->getDiplome()->getFormation());
        }

        return null;
    }

    public function getAllPersonnel($data, $page = 0, $max = null, $getResult = true)
    {
        $qb = $this->_em->createQueryBuilder();
        $query = isset($data['query']) && $data['query'] ? $data['query'] : null;
        //$order = isset($data['query']) && $data['query'] ? $data['query'] : null;

        $qb
            ->select('u')
            ->from(Personnel::class, 'u');
        // ->andWhere('u.visible = :visible')
        // ->andWhere('u.anneesortie = :anneesortie')

        /*switch ($order[0]['column']) {
            case 0:
                //todo: mettre les tris.
                break;
        }*/

        if ($query) {
            $qb
                ->andWhere('u.nom like :query')
                ->orWhere('u.prenom like :query')
                ->setParameter('query', '%' . $query . '%');
        }

        if ($max) {
            $preparedQuery = $qb->getQuery()
                ->setMaxResults($max)
                ->setFirstResult($page * $max);
        } else {
            $preparedQuery = $qb->getQuery();
        }

        return $getResult ? $preparedQuery->getResult() : $preparedQuery;

    }
}
