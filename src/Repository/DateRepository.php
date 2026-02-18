<?php
/*
 * Copyright (c) 2026. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Repository/DateRepository.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 06/01/2026 10:14
 */

namespace App\Repository;

use App\Entity\Annee;
use App\Entity\Constantes;
use App\Entity\Date;
use App\Entity\Departement;
use App\Entity\Diplome;
use App\Entity\Etudiant;
use DateTime;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Common\Collections\Order;
use Doctrine\ORM\AbstractQuery;
use Doctrine\ORM\QueryBuilder;
use Doctrine\Persistence\ManagerRegistry;
use Exception;
use function array_key_exists;

/**
 * @method Date|null find($id, $lockMode = null, $lockVersion = null)
 * @method Date|null findOneBy(array $criteria, array $orderBy = null)
 * @method Date[]    findAll()
 * @method Date[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 * @extends ServiceEntityRepository<Date>
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

    public function findByDepartementBuilder(Departement $departement, int $nbResult = 0, bool $isEtudiant = true): QueryBuilder
    {
        $query = $this->createQueryBuilder('d')
            ->where('d.departement = :departement')
            ->setParameter('departement', $departement->getId())
            ->orderBy('d.dateDebut', Order::Descending->value);
        if (0 !== $nbResult) {
            $query->setMaxResults($nbResult);
        }

        if (true === $isEtudiant) {
            $query->andWhere('d.typeDestinataire = :typeDestinataire')
                ->setParameter('typeDestinataire', 'ETU');
        }

        return $query;
    }

    public function findByDepartement(Departement $departement, int $nbResult = 0, bool $isEtudiant = true): array
    {
        return $this->findByDepartementBuilder($departement, $nbResult, $isEtudiant)->getQuery()->getResult();
    }

    public function findByDepartementArray(Departement $departement, int $nbResult = 0): array
    {
        return $this->findByDepartementBuilder($departement,
            $nbResult)->getQuery()->getResult(AbstractQuery::HYDRATE_ARRAY);
    }

    /**
     * @throws Exception
     */
    public function findByDepartementPlanning(Departement $departement, int $annee, bool $isEtudiant = true): array
    {
        $datedebut = new DateTime($annee.'-09-01');
        $annee2 = $annee + 1;
        $datefin = new DateTime($annee2.'-08-31');

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
            ->orderBy('d.dateDebut', Order::Ascending->value);

        if (true === $isEtudiant) {
            $query->andWhere('d.typeDestinataire = :typeDestinataire')
                ->setParameter('typeDestinataire', Constantes::TYPE_DESTINATAIRE_ETUDIANT);
        }

        $query = $query->getQuery()
            ->getResult();

        $tab = [];

        /** @var Date $event */
        foreach ($query as $event) {
            if (null !== $event->getDateDebut()) {
                $key = $event->getDateDebut()->format('Y-m-d');
                if (!array_key_exists($key, $tab)) {
                    $tab[$key] = [];
                }
                $tab[$key][] = $event;
                // si sur plusieurs jours, faire une boucle pour remplir le tableau
            }
        }

        return $tab;
    }

    public function findByDateForEtudiant(Etudiant $etudiant, int $nbResult = 0): array
    {
        $query = $this->createQueryBuilder('d')
            ->leftJoin('d.semestres', 's')
            ->where('s.id = :semestre')
            ->andWhere('d.typeDestinataire = :typeDestinataire')
            ->setParameter('semestre', $etudiant->getSemestreActif()?->getId())
            ->setParameter('typeDestinataire', Constantes::TYPE_DESTINATAIRE_ETUDIANT)
            ->orderBy('d.dateDebut', Order::Descending->value);
        if (0 !== $nbResult) {
            $query->setMaxResults($nbResult);
        }

        return $query->getQuery()->getResult();
    }

    public function findByDateForPersonnel(Departement $departement, int $nbResult = 0): array
    {
        $query = $this->createQueryBuilder('d')
            ->where('d.departement = :departement')
            ->andWhere('d.typeDestinataire = :typeDestinataire')
            ->setParameter('departement', $departement->getId())
            ->setParameter('typeDestinataire', Constantes::TYPE_DESTINATAIRE_PERSONNEL)
            ->orderBy('d.dateDebut', Order::Descending->value);
        if (0 !== $nbResult) {
            $query->setMaxResults($nbResult);
        }

        return $query->getQuery()->getResult();
    }
}
