<?php
/*
 * Copyright (c) 2023. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Repository/PersonnelRepository.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 01/01/2023 13:43
 */

namespace App\Repository;

use App\Entity\AnneeUniversitaire;
use App\Entity\Departement;
use App\Entity\Diplome;
use App\Entity\Personnel;
use App\Entity\PersonnelDepartement;
use App\Entity\Previsionnel;
use App\Entity\Semestre;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Common\Collections\Criteria;
use Doctrine\ORM\NonUniqueResultException;
use Doctrine\ORM\QueryBuilder;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @method Personnel|null find($id, $lockMode = null, $lockVersion = null)
 * @method Personnel|null findOneBy(array $criteria, array $orderBy = null)
 * @method Personnel[]    findAll()
 * @method Personnel[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 * @extends ServiceEntityRepository<Personnel>
 */
class PersonnelRepository extends ServiceEntityRepository
{
    /**
     * PersonnelRepository constructor.
     */
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, Personnel::class);
    }

    public function findByType(string $type, Departement $departement, string $filtreAdm = 'commun'): array
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

        return $query->orderBy('p.nom', Criteria::ASC)
            ->addOrderBy('p.prenom', Criteria::ASC)
            ->getQuery()
            ->getResult();
    }

    public function search(string $needle): array
    {
        $query = $this->createQueryBuilder('p')
            ->where('p.nom LIKE :needle')
            ->orWhere('p.prenom LIKE :needle')
            ->orWhere('p.username LIKE :needle')
            ->orWhere('p.mailUniv LIKE :needle')
            ->setParameter('needle', '%' . $needle . '%')
            ->orderBy('p.nom', Criteria::ASC)
            ->addOrderBy('p.prenom', Criteria::ASC)
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
            $tt['username'] = $personnel->getUserIdentifier();
            $tt['mail_univ'] = $personnel->getMailUniv();
            $tt['mail_perso'] = $personnel->getMailPerso();
            $tt['avatarInitiales'] = $personnel->getAvatarInitiales();

            $t[] = $tt;
        }

        return $t;
    }

    /**
     * @throws NonUniqueResultException
     */
    public function findOneBySlug(string $slug): ?Personnel
    {
        return $this->createQueryBuilder('p')
            ->where('p.slug = :slug')
            ->setParameter('slug', $slug)
            ->getQuery()
            ->getOneOrNullResult();
    }

    public function findByDepartement(Departement $departement): array
    {
        return $this->findByDepartementBuilder($departement)
            ->getQuery()
            ->getResult();
    }

    public function findByDepartementBuilder(Departement $departement): QueryBuilder
    {
        return $this->createQueryBuilder('p')
            ->innerJoin(PersonnelDepartement::class, 'f', 'WITH', 'f.personnel = p.id')
            ->where('f.departement = :departement')
            ->setParameter('departement', $departement)
            ->orderBy('p.nom', Criteria::ASC)
            ->addOrderBy('p.prenom', Criteria::ASC);
    }

    public function findBySemestreBuilder(Semestre $semestre): ?QueryBuilder
    {
        if (null !== $semestre->getAnnee() && null !== $semestre->getAnnee()->getDiplome()) {
            return $this->findByDepartementBuilder($semestre->getAnnee()->getDiplome()->getDepartement());
        }

        return null;
    }

    public function tableauPersonnelHarpege(Diplome $diplome): array
    {
        $p = $this->findByDepartement($diplome->getDepartement());

        $t = [];

        /** @var Personnel $pers */
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
            ->orderBy('s.nom,s.prenom', Criteria::ASC)
            ->getQuery()
            ->getResult();

        $t = [];

        /** @var Personnel $q */
        foreach ($query as $q) {
            $t[$q->getInitiales()] = $q;
        }

        return $t;
    }

    /**
     * @throws NonUniqueResultException
     */
    public function findByCode(string $code): ?Personnel
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
            ->orderBy('s.nom,s.prenom', Criteria::ASC);
    }

    public function findActifs(): array
    {
        return $this->createQueryBuilder('p')
            ->where('p.deleted = :deleted')
            ->setParameter('deleted', false)
            ->orderBy('p.nom', Criteria::ASC)
            ->addOrderBy('p.prenom', Criteria::ASC)
            ->getQuery()
            ->getResult();
    }

    public function findPersonnelByPrevisionnelBuilder(
        Previsionnel $previsionnel,
        AnneeUniversitaire $anneeUniversitaire
    ): QueryBuilder {
        return $this->createQueryBuilder('p')
            ->join('p.previsionnels', 'i')
            ->where('i.idMatiere = :idMatiere')
            ->andWhere('i.typeMatiere = :typeMatiere')
            ->andWhere('i.annee = :annee')
            ->setParameter('idMatiere', $previsionnel->getIdMatiere())
            ->setParameter('typeMatiere', $previsionnel->getTypeMatiere())
            ->setParameter('annee', $anneeUniversitaire->getAnnee())
            ->orderBy('p.nom', Criteria::ASC)
            ->addOrderBy('p.prenom', Criteria::ASC)
            ->groupBy('p.id');;
    }
}
