<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Repository/PersonnelRepository.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 08/10/2021 20:09
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
use Doctrine\Persistence\ManagerRegistry;
use Symfony\Component\Routing\RouterInterface;
use function count;

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
     */
    public function __construct(ManagerRegistry $registry, RouterInterface $router)
    {
        parent::__construct($registry, Personnel::class);
        $this->router = $router;
    }

    public function findByType($type, $departement, $filtreAdm = 'commun')
    {
        $query = $this->createQueryBuilder('p')
            ->innerJoin(PersonnelDepartement::class, 'f', 'WITH', 'f.personnel = p.id')
            ->where('p.typeUser = :type')
            ->andWhere('f.departement = :departement')
            ->setParameter('departement', $departement);

        if ('separation' === $filtreAdm) {
            if ('administratif' === $type) {
                $query->andWhere('(' . $query->expr()->orX('p.statut = ' . $query->expr()->literal('TEC')) . ' OR ' . $query->expr()->orX('p.statut = ' . $query->expr()->literal('ASS')) . ')')
                    ->setParameter('type', 'permanent');
            } else {
                $query->andWhere('(' . $query->expr()->andX('p.statut <> ' . $query->expr()->literal('TEC')) . ' AND ' . $query->expr()->andX('p.statut <> ' . $query->expr()->literal('ASS')) . ')')
                    ->setParameter('type', $type);
            }
        } else {
            $query->setParameter('type', $type);
        }

        return $query->orderBy('p.nom', 'ASC')
            ->addOrderBy('p.prenom', 'ASC')
            ->getQuery()
            ->getResult();
    }

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

        $t = [];

        /** @var Personnel $personnel */
        foreach ($query as $personnel) {
            $tt = [];
            $tt['displayPr'] = $personnel->getDisplayPr();
            $tt['slug'] = $personnel->getSlug();
            $tt['photo'] = $personnel->getPhotoName();
            $tt['nom'] = $personnel->getNom();
            $tt['numeroHarpege'] = $personnel->getNumeroHarpege();
            $tt['prenom'] = $personnel->getPrenom();
            $tt['username'] = $personnel->getUsername();
            $tt['mail_univ'] = $personnel->getMailUniv();
            $tt['mail_perso'] = $personnel->getMailPerso();
            $tt['avatarInitiales'] = $personnel->getAvatarInitiales();
            $tt['profil'] = '<a href="' . $this->router->generate('user_profil',
                    ['type' => 'personnel', 'slug' => $personnel->getSlug()]) . '"
       class="btn btn-info btn-outline btn-square"
       data-provide="tooltip"
       target="_blank"
       data-placement="bottom"
       title="Profil du personne">
        <i class="fa fa-info"></i>
        <span class="sr-only">Profil du personnel</span>
    </a>';

            $t[] = $tt;
        }

        return $t;
    }

    /**
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

    public function findByDepartement($departement)
    {
        return $this->findByDepartementBuilder($departement)
            ->getQuery()
            ->getResult();
    }

    public function findByDepartementBuilder($departement): QueryBuilder
    {
        return $this->createQueryBuilder('p')
            ->innerJoin(PersonnelDepartement::class, 'f', 'WITH', 'f.personnel = p.id')
            ->where('f.departement = :departement')
            ->setParameter('departement', $departement)
            ->orderBy('p.nom', 'ASC')
            ->addOrderBy('p.prenom', 'ASC');
    }

    public function findBySemestreBuilder(Semestre $semestre): ?QueryBuilder
    {
        if (null !== $semestre->getAnnee() && null !== $semestre->getAnnee()->getDiplome()) {
            return $this->findByDepartementBuilder($semestre->getAnnee()->getDiplome()->getDepartement());
        }

        return null;
    }

    public function getAllPersonnel($data, int $page = 0, ?int $max = null, bool $getResult = true)
    {
        $qb = $this->_em->createQueryBuilder();
        $query = isset($data['query']) && $data['query'] ? $data['query'] : null;
        $order = isset($data['order']) && $data['order'] ? $data['order'] : null;
        $qb
            ->select('u')
            ->from(Personnel::class, 'u');

        if (null !== $order && count($order) > 0) {
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

    public function tableauPersonnelHarpege(Diplome $diplome): array
    {
        $p = $this->findByDepartement($diplome->getDepartement());

        $t = [];

        /** @var $pers Personnel */
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

        $t = [];

        /** @var $q Personnel */
        foreach ($query as $q) {
            $t[$q->getInitiales()] = $q;
        }

        return $t;
    }

    /**
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
