<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Repository/HrsRepository.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 11/05/2021 08:46
 */

namespace App\Repository;

use App\Entity\Departement;
use App\Entity\Hrs;
use App\Entity\Personnel;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
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
            ->where('h.personnel = :user')
            ->setParameter('user', $personnel)
            ->orderBy('h.typeHrs', 'ASC')
            ->orderBy('h.semestre', 'ASC');

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
        //todo: gérer le département pour le filtre

        return $this->createQueryBuilder('h')
            ->where('h.personnel = :user')
            ->andWhere('h.annee = :annee')
            ->setParameter('user', $personnel)
            ->setParameter('annee', $annee)
            ->orderBy('h.typeHrs', 'ASC')
            ->orderBy('h.semestre', 'ASC')
            ->getQuery()
            ->getResult();
    }

    public function findByDepartement(Departement $departement, int $annee): array
    {
        return $this->createQueryBuilder('h')
            ->where('h.departement = :departement')
            ->andWhere('h.annee = :annee')
            ->setParameter('departement', $departement->getId())
            ->setParameter('annee', $annee)
            ->orderBy('h.typeHrs', 'ASC')
            ->orderBy('h.semestre', 'ASC')
            ->getQuery()
            ->getResult();
    }
}
