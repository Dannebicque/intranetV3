<?php
/*
 * Copyright (c) 2024. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Repository/PersonnelDepartementRepository.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 18/04/2024 17:54
 */

namespace App\Repository;

use App\Entity\Departement;
use App\Entity\Personnel;
use App\Entity\PersonnelDepartement;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Common\Collections\Order;
use Doctrine\ORM\NonUniqueResultException;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @method PersonnelDepartement|null find($id, $lockMode = null, $lockVersion = null)
 * @method PersonnelDepartement|null findOneBy(array $criteria, array $orderBy = null)
 * @method PersonnelDepartement[]    findAll()
 * @method PersonnelDepartement[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 * @extends ServiceEntityRepository<PersonnelDepartement>
 */
class PersonnelDepartementRepository extends ServiceEntityRepository
{
    /**
     * PersonnelDepartementRepository constructor.
     */
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, PersonnelDepartement::class);
    }

    public function findByPersonnel(Personnel $user): array
    {
        return $this->createQueryBuilder('f')
            ->innerJoin(Personnel::class, 'p', 'WITH', 'f.personnel = p.id')
            ->innerJoin(Departement::class, 'm', 'WITH', 'f.departement = m.id')
            ->where('f.personnel = :personnel')
            ->setParameter('personnel', $user)
            ->orderBy('m.libelle', Order::Descending->value)
            ->getQuery()
            ->getResult();
    }

    public function findByPersonnelDepartement(Personnel $personnel, Departement $departement): array
    {
        return $this->createQueryBuilder('f')
            ->where('f.personnel = :personnel')
            ->andWhere('f.departement = :departement')
            ->setParameter('personnel', $personnel)
            ->setParameter('departement', $departement)
            ->getQuery()
            ->getResult();
    }

    public function findDroitsByPersonnelDepartement(Personnel $personnel, Departement $departement): array
    {
        return $this->createQueryBuilder('f')
            ->select('f.roles')
            ->where('f.personnel = :personnel')
            ->andWhere('f.departement = :departement')
            ->setParameter('personnel', $personnel)
            ->setParameter('departement', $departement)
            ->getQuery()
            ->getResult();
    }

    /**
     * @throws NonUniqueResultException
     */
    public function findOneByPersonnelDepartement(Personnel $personnel, Departement $departement): ?PersonnelDepartement
    {
        return $this->createQueryBuilder('f')
            ->where('f.personnel = :personnel')
            ->andWhere('f.departement = :departement')
            ->setParameter('personnel', $personnel)
            ->setParameter('departement', $departement)
            ->getQuery()
            ->getOneOrNullResult();
    }

    public function getPersonnelByDepartements(Departement $departement): array
    {
        return $this->createQueryBuilder('f')
            ->innerJoin(Personnel::class, 'p', 'WITH', 'f.personnel = p.id')
            ->where('f.departement = :departement')
            ->setParameter('departement', $departement)
            ->orderBy('p.nom', Order::Ascending->value)
            ->addOrderBy('p.prenom', Order::Ascending->value)
            ->getQuery()
            ->getResult();
    }

    public function search(string $needle, Departement $departement): array
    {
        $query = $this->createQueryBuilder('d')
            ->innerJoin(Personnel::class, 'p', 'WITH', 'd.personnel = p.id')
            ->where('p.nom LIKE :needle')
            ->orWhere('p.prenom LIKE :needle')
            ->orWhere('p.username LIKE :needle')
            ->orWhere('p.mailUniv LIKE :needle')
            ->andWhere('d.departement = :departement')
            ->setParameter('needle', '%'.$needle.'%')
            ->setParameter('departement', $departement->getId())
            ->orderBy('p.nom', Order::Ascending->value)
            ->addOrderBy('p.prenom', Order::Ascending->value)
            ->getQuery()
            ->getResult();

        $t = [];

        /** @var PersonnelDepartement $pers */
        foreach ($query as $pers) {
            $personnel = $pers->getPersonnel();
            if (null !== $personnel) {
                $tt = [];
                $tt['displayPr'] = $personnel->getDisplayPr();
                $tt['slug'] = $personnel->getSlug();
                $tt['photo'] = $personnel->getPhotoName();
                $tt['nom'] = $personnel->getNom();
                $tt['numeroHarpege'] = $personnel->getNumeroHarpege();
                $tt['prenom'] = $personnel->getPrenom();
                $tt['username'] = $personnel->getUserIdentifier();
                $tt['mailUniv'] = $personnel->getMailUniv();
                $tt['mailPerso'] = $personnel->getMailPerso();
                $tt['avatarInitiales'] = $personnel->getAvatarInitiales();

                $t[] = $tt;
            }
        }

        return $t;
    }
}
