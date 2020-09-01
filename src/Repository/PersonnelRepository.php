<?php
// Copyright (c) 2020. | David Annebicque | IUT de Troyes  - All Rights Reserved
// @file /Users/davidannebicque/htdocs/intranetV3/src/Repository/PersonnelRepository.php
// @author davidannebicque
// @project intranetV3
// @lastUpdate 01/09/2020 06:53

namespace App\Repository;

use App\Entity\Departement;
use App\Entity\Diplome;
use App\Entity\Personnel;
use App\Entity\PersonnelDepartement;
use App\Entity\Semestre;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;
use Doctrine\ORM\NonUniqueResultException;
use Doctrine\ORM\Query;
use Doctrine\ORM\QueryBuilder;
use Symfony\Component\Routing\RouterInterface;

/**
 * @method Personnel|null find($id, $lockMode = null, $lockVersion = null)
 * @method Personnel|null findOneBy(array $criteria, array $orderBy = null)
 * @method Personnel[]    findAll()
 * @method Personnel[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class PersonnelRepository extends ServiceEntityRepository
{



    /**
     * PersonnelRepository constructor.
     *
     * @param ManagerRegistry $registry
     * @param RouterInterface $router
     */
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, Personnel::class);


    }

    /**
     * @param $type
     * @param $departement
     *
     * @return mixed
     */
    public function findByType($type, $departement)
    {
        return $this->createQueryBuilder('p')
            ->innerJoin(PersonnelDepartement::class, 'f', 'WITH', 'f.personnel = p.id')
            ->where('p.typeUser = :type')
            ->andWhere('f.departement = :departement')
            ->setParameter('type', $type)
            ->setParameter('departement', $departement)
            ->orderBy('p.nom', 'ASC')
            ->addOrderBy('p.prenom', 'ASC')
            ->getQuery()
            ->getResult();
    }



    /**
     * @param $slug
     *
     * @return mixed
     * @throws NonUniqueResultException
     */
    public function findOneBySlug($slug)
    {
        return $this->createQueryBuilder('p')
            ->where('p.slug = :slug')
            ->setParameter('slug', $slug)
            ->getQuery()
            ->getOneOrNullResult();
    }

    /**
     * @param $departement
     *
     * @return mixed
     */
    public function findByDepartement($departement)
    {
        return $this->findByDepartementBuilder($departement)
            ->getQuery()
            ->getResult();
    }

    /**
     * @param $departement
     *
     * @return QueryBuilder
     */
    public function findByDepartementBuilder($departement): QueryBuilder
    {
        return $this->createQueryBuilder('p')
            ->innerJoin(PersonnelDepartement::class, 'f', 'WITH', 'f.personnel = p.id')
            ->where('f.departement = :departement')
            ->setParameter('departement', $departement)
            ->orderBy('p.nom', 'ASC')
            ->addOrderBy('p.prenom', 'ASC');
    }

    /**
     * @param Semestre $semestre
     *
     * @return QueryBuilder|null
     */
    public function findBySemestreBuilder(Semestre $semestre): ?QueryBuilder
    {
        if ($semestre->getAnnee() !== null && $semestre->getAnnee()->getDiplome() !== null) {
            return $this->findByDepartementBuilder($semestre->getAnnee()->getDiplome()->getDepartement());
        }

        return null;
    }

    /**
     * @param      $data
     * @param int  $page
     * @param null $max
     * @param bool $getResult
     *
     * @return Query|mixed
     */
    public function getAllPersonnel($data, $page = 0, $max = null, $getResult = true)
    {
        $qb = $this->_em->createQueryBuilder();
        $query = isset($data['query']) && $data['query'] ? $data['query'] : null;
        $order = isset($data['order']) && $data['order'] ? $data['order'] : null;
        $qb
            ->select('u')
            ->from(Personnel::class, 'u');

        if ($order !== null && count($order) > 0) {
            switch ($order[0]['column']) {
                case 0:
                    $qb->orderBy('u.numeroHarpege', $order[0]['dir']);
                    break;
                case 2:
                    $qb->orderBy('u.prenom', $order[0]['dir']);
                    $qb->addOrderBy('u.nom', $order[0]['dir']);
                    break;
                case 3:
                    $qb->orderBy('u.username', $order[0]['dir']);
                    break;
                case 1:
                    $qb->orderBy('u.nom', $order[0]['dir']);
                    break;
                case 5:
                    $qb->orderBy('u.deleted', $order[0]['dir']);
                    break;
                default:
                    $qb->addOrderBy('u.nom', $order[0]['dir']);
            }
        }

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

    /**
     * @param Diplome $diplome
     *
     * @return array
     */
    public function tableauPersonnelHarpege(Diplome $diplome): array
    {
        $p = $this->findByDepartement($diplome->getDepartement());

        $t = array();

        /** @var  $pers Personnel */
        foreach ($p as $pers) {
            $t[$pers->getNumeroHarpege()] = $pers;
        }

        return $t;
    }

    public function tableauIntervenants(Departement $departement): array
    {
        $query = $this->createQueryBuilder('s')
            ->innerJoin(PersonnelDepartement::class, 'p', 'WITH', 's.id = p.personnel')
            ->where('p.departement = :departement')
            ->setParameter('departement', $departement->getId())
            ->orderBy('s.nom,s.prenom', 'ASC')
            ->getQuery()
            ->getResult();

        $t = array();

        /** @var  $q Personnel */
        foreach ($query as $q) {
            $t[$q->getInitiales()] = $q;
        }

        return $t;
    }

    /**
     * @param $code
     *
     * @return mixed
     * @throws NonUniqueResultException
     */
    public function findByCode($code)
    {
        return $this->createQueryBuilder('p')
            ->where('MD5(p.slug) = :code')
            ->setParameter('code', $code)
            ->getQuery()
            ->getOneOrNullResult();
    }

    public function findAllOrder(): QueryBuilder
    {
        return $this->createQueryBuilder('s')
            ->orderBy('s.nom,s.prenom', 'ASC');
    }
}
