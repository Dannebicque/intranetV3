<?php

namespace App\Repository;

use App\Entity\Diplome;
use App\Entity\Personnel;
use App\Entity\PersonnelFormation;
use App\Entity\Semestre;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Symfony\Bridge\Doctrine\RegistryInterface;

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
     * @param RegistryInterface $registry
     */
    public function __construct(RegistryInterface $registry)
    {
        parent::__construct($registry, Personnel::class);
    }

    /**
     * @param $type
     * @param $formation
     *
     * @return mixed
     */
    public function findByType($type, $formation)
    {
        return $this->createQueryBuilder('p')
            ->innerJoin(PersonnelFormation::class, 'f', 'WITH', 'f.personnel = p.id')
            ->where('p.typeUser = :type')
            ->andWhere('f.formation = :formation')
            ->setParameter('type', $type)
            ->setParameter('formation', $formation)
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
            ->orderBy('p.prenom', 'ASC')
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

            $t[] = $tt;
        }

        return $t;
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

    /**
     * @param $formation
     *
     * @return mixed
     */
    public function findByFormation($formation)
    {
        return $this->findByFormationBuilder($formation)
            ->getQuery()
            ->getResult();
    }

    /**
     * @param $formation
     *
     * @return \Doctrine\ORM\QueryBuilder
     */
    public function findByFormationBuilder($formation): \Doctrine\ORM\QueryBuilder
    {
        return $this->createQueryBuilder('p')
            ->innerJoin(PersonnelFormation::class, 'f', 'WITH', 'f.personnel = p.id')
            ->where('f.formation = :formation')
            ->setParameter('formation', $formation)
            ->orderBy('p.nom', 'ASC')
            ->orderBy('p.prenom', 'ASC');
    }

    /**
     * @param Semestre $semestre
     *
     * @return \Doctrine\ORM\QueryBuilder|null
     */
    public function findBySemestreBuilder(Semestre $semestre): ?\Doctrine\ORM\QueryBuilder
    {
        if ($semestre->getAnnee() !== null && $semestre->getAnnee()->getDiplome() !== null) {
            return $this->findByFormationBuilder($semestre->getAnnee()->getDiplome()->getFormation());
        }

        return null;
    }

    /**
     * @param      $data
     * @param int  $page
     * @param null $max
     * @param bool $getResult
     *
     * @return \Doctrine\ORM\Query|mixed
     */
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

    /**
     * @param Diplome $diplome
     *
     * @return array
     */
    public function tableauPersonnelHarpege(Diplome $diplome): array
    {
        $p = $this->findByFormation($diplome->getFormation());

        $t = array();

        /** @var  $pers Personnel */
        foreach ($p as $pers) {
            $t[$pers->getNumeroHarpege()] = $pers;
        }

        return $t;
    }
}
