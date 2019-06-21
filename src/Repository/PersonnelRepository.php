<?php
/**
 * *
 *  *  Copyright (C) $month.$year | David annebicque | IUT de Troyes - All Rights Reserved
 *  *
 *  *
 *  * @file /Users/davidannebicque/htdocs/intranetv3/src/Repository/PersonnelRepository.php
 *  * @author     David annebicque
 *  * @project intranetv3
 *  * @date 4/28/19 8:46 PM
 *  * @lastUpdate 4/28/19 8:42 PM
 *  *
 *
 */

namespace App\Repository;

use App\Entity\Departement;
use App\Entity\Diplome;
use App\Entity\Personnel;
use App\Entity\PersonnelDepartement;
use App\Entity\Semestre;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\ORM\NonUniqueResultException;
use Doctrine\ORM\Query;
use Doctrine\ORM\QueryBuilder;
use Symfony\Bridge\Doctrine\RegistryInterface;
use Symfony\Component\Routing\RouterInterface;

/**
 * @method Personnel|null find($id, $lockMode = null, $lockVersion = null)
 * @method Personnel|null findOneBy(array $criteria, array $orderBy = null)
 * @method Personnel[]    findAll()
 * @method Personnel[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class PersonnelRepository extends ServiceEntityRepository
{
    private $router;


    /**
     * PersonnelRepository constructor.
     *
     * @param RegistryInterface $registry
     */
    public function __construct(RegistryInterface $registry, RouterInterface $router)
    {
        parent::__construct($registry, Personnel::class);
        $this->router = $router;

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
     * @param $needle
     *
     * @return array
     */
    public function search($needle): array
    {
        $query = $this->createQueryBuilder('p')
            ->where('p.nom LIKE :needle')
            ->orWhere('p.prenom LIKE :needle')
            ->orWhere('p.username LIKE :needle')
            ->orWhere('p.mailUniv LIKE :needle')
            ->setParameter('needle', '%' . $needle . '%')
            ->orderBy('p.nom', 'ASC')
            ->addOrderBy('p.prenom', 'ASC')
            ->getQuery()
            ->getResult();

        $t = array();

        /** @var Personnel $personnel */
        foreach ($query as $personnel) {
            $tt = array();
            $tt['displayPr'] = $personnel->getDisplayPr();
            $tt['slug'] = $personnel->getSlug();
            $tt['photo'] = $personnel->getPhotoName();
            $tt['nom'] = $personnel->getNom();
            $tt['prenom'] = $personnel->getPrenom();
            $tt['username'] = $personnel->getUsername();
            $tt['mail_univ'] = $personnel->getMailUniv();
            $tt['profil'] = '<a href="'.$this->router->generate('user_profil', ['type' => 'personnel', 'slug' => $personnel->getSlug()]).'"
       class="btn btn-info btn-outline btn-square"
       data-provide="tooltip"
       target="_blank"
       data-placement="bottom"
       title="Profil de l\'étudiant">
        <i class="fa fa-info"></i>
        <span class="sr-only">Profil de l\'étudiant</span>
    </a>';;

            $t[] = $tt;
        }

        return $t;
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
        // ->andWhere('u.visible = :visible')
        // ->andWhere('u.anneesortie = :anneesortie')

        //todo: ordre des colonnes? ou essayer de récupérer les noms?
        switch ($order[0]['column']) {
            case 0:
                $qb->orderBy('u.prenom', $order[0]['dir']);
                $qb->addOrderBy('u.nom', $order[0]['dir']);
                break;
            case 1:
                $qb->orderBy('u.slug', $order[0]['dir']);
                break;
            case 2:
                $qb->orderBy('u.nom', $order[0]['dir']);
                break;
            case 3:
                $qb->orderBy('u.prenom', $order[0]['dir']);
                break;
            case 4:
                $qb->orderBy('u.username', $order[0]['dir']);
                break;
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
}
