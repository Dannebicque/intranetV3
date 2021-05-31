<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Repository/DateRepository.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 31/05/2021 20:35
 */

namespace App\Repository;

use App\Entity\Annee;
use App\Entity\Date;
use App\Entity\Departement;
use App\Entity\Diplome;
use App\Entity\Etudiant;
use DateTime;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\ORM\AbstractQuery;
use Doctrine\Persistence\ManagerRegistry;
use Exception;

/**
 * @method Date|null find($id, $lockMode = null, $lockVersion = null)
 * @method Date|null findOneBy(array $criteria, array $orderBy = null)
 * @method Date[]    findAll()
 * @method Date[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class DateRepository extends ServiceEntityRepository
{
    /**
     * DateRepository constructor.
     */
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, Date::class);
    }

    public function findByDepartementBuilder(Departement $departement, $nbResult = 0)
    {
        $query = $this->createQueryBuilder('d')
            ->where('d.departement = :departement')
            ->setParameter('departement', $departement->getId())
            ->orderBy('d.dateDebut', 'DESC');
        if (0 !== $nbResult) {
            $query->setMaxResults($nbResult);
        }

        return $query;
    }

    public function findByDepartement(Departement $departement, $nbResult = 0)
    {
        return $this->findByDepartementBuilder($departement, $nbResult)->getQuery()->getResult();
    }

    public function findByDepartementArray(Departement $departement, $nbResult = 0)
    {
        return $this->findByDepartementBuilder($departement,
            $nbResult)->getQuery()->getResult(AbstractQuery::HYDRATE_ARRAY);
    }

    /**
     *
     * @throws Exception
     */
    public function findByDepartementPlanning($departement, $annee): array
    {
        $datedebut = new DateTime($annee . '-09-01');
        $annee2 = $annee + 1;
        $datefin = new DateTime($annee2 . '-08-31');

        $query = $this->createQueryBuilder('d')
            ->leftJoin('d.semestres', 's')
            ->innerJoin(Annee::class, 'a', 'WITH', 'a.id = s.annee')
            ->innerJoin(Diplome::class, 'p', 'WITH', 'p.id = a.diplome')
            ->where('p.departement = :departement')
            ->andWhere('d.dateDebut >= :datedebut')
            ->andWhere('d.dateDebut <= :datefin')
            ->setParameter('departement', $departement)
            ->setParameter('datedebut', $datedebut)
            ->setParameter('datefin', $datefin)
            ->orderBy('d.dateDebut', 'ASC')
            ->getQuery()
            ->getResult();

        $tab = [];

        /** @var Date $event */
        foreach ($query as $event) {
            if (null !== $event->getDateDebut()) {
                $key = $event->getDateDebut()->format('Y-m-d');
                if (!\array_key_exists($key, $tab)) {
                    $tab[$key] = [];
                }
                $tab[$key][] = $event;
                //si sur plusieurs jours, faire une boucle pour remplir le tableau
            }
        }

        return $tab;
    }


    public function findByDateForEtudiant(Etudiant $etudiant, int $nbResult)
    {
        $query = $this->createQueryBuilder('d')
            ->leftJoin('d.semestres', 's')
            ->where('s.id = :semestre')
            ->setParameter('semestre', $etudiant->getSemestre()->getId())
            ->orderBy('d.dateDebut', 'DESC');
        if (0 !== $nbResult) {
            $query->setMaxResults($nbResult);
        }

        return $query->getQuery()->getResult();
    }

    public function findByDateForPersonnel(Departement $departement, int $nbResult)
    {
        $query = $this->createQueryBuilder('d')
            ->where('d.departement = :departement')
            ->andWhere('d.qui = :qui')
            ->setParameter('departement', $departement->getId())
            ->setParameter('qui', Date::QUI_PERSONNEL)
            ->orderBy('d.dateDebut', 'DESC');
        if (0 !== $nbResult) {
            $query->setMaxResults($nbResult);
        }

        return $query->getQuery()->getResult();
    }
}
