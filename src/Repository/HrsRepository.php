<?php
/*
 * Copyright (c) 2024. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Repository/HrsRepository.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 11/09/2024 20:42
 */

namespace App\Repository;

use App\Entity\Departement;
use App\Entity\Hrs;
use App\Entity\Personnel;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Common\Collections\Order;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @method Hrs|null find($id, $lockMode = null, $lockVersion = null)
 * @method Hrs|null findOneBy(array $criteria, array $orderBy = null)
 * @method Hrs[]    findAll()
 * @method Hrs[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 * @extends ServiceEntityRepository<Hrs>
 */
class HrsRepository extends ServiceEntityRepository
{
    /**
     * HrsRepository constructor.
     */
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, Hrs::class);
    }

    public function getPersonnelAnnee(Personnel $personnel, int $annee = 0): array
    {
        $query = $this->createQueryBuilder('h')
            ->join('h.typeHrs', 'tp')
            ->addSelect('tp')
            ->leftJoin('h.personnel', 'p')
            ->addSelect('p')
            ->where('h.personnel = :user')
            ->setParameter('user', $personnel)
            ->orderBy('h.typeHrs', Order::Ascending->value)
            ->addOrderBy('h.semestre', Order::Ascending->value);

        if (0 !== $annee) {
            $query->andWhere('h.annee = :annee')
                ->setParameter('annee', $annee);
        }

        return $query->getQuery()
            ->getResult();
    }

    public function getPersonnelDepartementAnnee(
        Personnel $personnel,
        Departement $departement,
        int $annee): array
    {
        return $this->createQueryBuilder('h')
            ->leftJoin('h.typeHrs', 'tp')
            ->addSelect('tp')
            ->leftJoin('h.personnel', 'p')
            ->addSelect('p')
            ->leftJoin('h.semestre', 's')
            ->leftJoin('h.departement', 'd')

            ->where('h.personnel = :user')
            ->andWhere('h.annee = :annee')
            ->andWhere('h.departement = :departement')
            ->setParameter('user', $personnel)
            ->setParameter('annee', $annee)
            ->setParameter('departement', $departement)
            ->orderBy('h.typeHrs', Order::Ascending->value)
            ->addOrderBy('h.semestre', Order::Ascending->value)
            ->getQuery()
            ->getResult();
    }

    public function findByDepartement(Departement $departement, int $annee): array
    {
        return $this->createQueryBuilder('h')
            ->leftJoin('h.typeHrs', 'tp')
            ->addSelect('tp')
            ->leftJoin('h.personnel', 'p')
            ->addSelect('p')
            ->where('h.departement = :departement')
            ->andWhere('h.annee = :annee')
            ->setParameter('departement', $departement->getId())
            ->setParameter('annee', $annee)
            ->orderBy('p.nom', Order::Ascending->value)
            ->addOrderBy('p.prenom', Order::Ascending->value)
            ->addOrderBy('h.typeHrs', Order::Ascending->value)
            ->addOrderBy('h.semestre', Order::Ascending->value)
            ->getQuery()
            ->getResult();
    }

    public function findByPersonnelAnnee(Personnel $personnel, float|bool|int|string|null $annee): array
    {
        return [];//todo: utilisé ?
    }
}
