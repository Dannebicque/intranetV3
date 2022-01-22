<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Repository/TypeGroupeRepository.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 03/09/2021 18:34
 */

namespace App\Repository;

use App\Entity\Annee;
use App\Entity\Departement;
use App\Entity\Diplome;
use App\Entity\Semestre;
use App\Entity\TypeGroupe;
use function array_key_exists;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\ORM\QueryBuilder;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @method TypeGroupe|null find($id, $lockMode = null, $lockVersion = null)
 * @method TypeGroupe|null findOneBy(array $criteria, array $orderBy = null)
 * @method TypeGroupe[]    findAll()
 * @method TypeGroupe[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 * @extends ServiceEntityRepository<TypeGroupe>
 */
class TypeGroupeRepository extends ServiceEntityRepository
{
    /**
     * TypeGroupeRepository constructor.
     */
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, TypeGroupe::class);
    }

    public function findBySemestreBuilder(Semestre $semestre): QueryBuilder
    {
        return $this->createQueryBuilder('t')
            ->where('t.semestre = :semestre')
            ->setParameter('semestre', $semestre)
            ->orderBy('t.libelle');
    }

    public function findBySemestre(Semestre $semestre)
    {
        return $this->findBySemestreBuilder($semestre)->getQuery()->getResult();
    }

    public function findByDepartement(Departement $departement)
    {
        return $this->createQueryBuilder('t')
            ->innerJoin(Semestre::class, 's', 'WITH', 't.semestre = s.id')
            ->innerJoin(Annee::class, 'a', 'WITH', 's.annee = a.id')
            ->innerJoin(Diplome::class, 'd', 'WITH', 'a.diplome = d.id')
            ->where('d.departement = :departement')
            ->setParameter('departement', $departement->getId())
            ->getQuery()
            ->getResult();
    }

    public function findByDepartementSemestresActifs(Departement $departement)
    {
        return $this->createQueryBuilder('t')
            ->innerJoin(Semestre::class, 's', 'WITH', 't.semestre = s.id')
            ->innerJoin(Annee::class, 'a', 'WITH', 's.annee = a.id')
            ->innerJoin(Diplome::class, 'd', 'WITH', 'a.diplome = d.id')
            ->where('d.departement = :departement')
            ->andWhere('a.actif = true')
            ->andWhere('s.actif = true')
            ->setParameter('departement', $departement->getId())
            ->getQuery()
            ->getResult();
    }

    public function tableauDepartementSemestre(Departement $departement): array
    {
        $req = $this->findByDepartement($departement);
        $t = [];
        /** @var TypeGroupe $tg */
        foreach ($req as $tg) {
            if (null !== $tg->getSemestre()) {
                if (!array_key_exists($tg->getSemestre()->getCodeElement(), $t)) {
                    $t[$tg->getSemestre()->getCodeElement()] = [];
                }
                $t[$tg->getSemestre()->getCodeElement()][$tg->getLibelle()] = $tg;
            }
        }

        return $t;
    }
}
