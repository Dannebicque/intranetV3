<?php
/*
 * Copyright (c) 2024. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Repository/TypeGroupeRepository.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 18/04/2024 17:54
 */

namespace App\Repository;

use App\Entity\Annee;
use App\Entity\Departement;
use App\Entity\Diplome;
use App\Entity\Semestre;
use App\Entity\TypeGroupe;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Common\Collections\Order;
use Doctrine\ORM\QueryBuilder;
use Doctrine\Persistence\ManagerRegistry;
use function array_key_exists;

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
            ->innerJoin('t.semestres', 's')
            ->addSelect('s')
            ->where('s.id = :semestre')
            ->setParameter('semestre', $semestre)
            ->orderBy('t.libelle');
    }

    public function findBySemestre(Semestre $semestre): array
    {
        return $this->findBySemestreBuilder($semestre)->getQuery()->getResult();
    }

    public function findByDepartement(Departement $departement): array
    {
        return $this->createQueryBuilder('t')
            ->innerJoin('t.semestres', 's')
            ->addSelect('s')
            ->innerJoin(Annee::class, 'a', 'WITH', 's.annee = a.id')
            ->innerJoin(Diplome::class, 'd', 'WITH', 'a.diplome = d.id')
            ->where('d.departement = :departement')
            ->setParameter('departement', $departement->getId())
            ->getQuery()
            ->getResult();
    }

    public function findByDepartementSemestresActifs(Departement $departement): array
    {
        return $this->createQueryBuilder('t')
            ->innerJoin('t.semestres', 's')
            ->addSelect('s')
            ->innerJoin(Annee::class, 'a', 'WITH', 's.annee = a.id')
            ->leftJoin(Diplome::class, 'd', 'WITH', 'a.diplome = d.id')
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
            foreach ($tg->getSemestres() as $semestre) {
                if (!array_key_exists($semestre->getCodeElement(), $t)) {
                    $t[$semestre->getCodeElement()] = [];
                }
                $t[$semestre->getCodeElement()][$tg->getLibelle()] = $tg;
            }
        }

        return $t;
    }

    public function findByDiplomeAndOrdreSemestre(
        Diplome $diplome,
        int $ordreSemestre
    ): array {
        return $this->findByDiplomeAndOrdreSemestreBuilder($diplome, $ordreSemestre)->getQuery()->getResult();
    }

    public function findByDiplomeAndOrdreSemestreBuilder(
        Diplome $diplome,
        int $ordreSemestre
    ): QueryBuilder {
        if (null !== $diplome->getParent()) {
            $diplome = $diplome->getParent();
        }

        return $this->createQueryBuilder('t')
            ->innerJoin('t.semestres', 's')
            ->addSelect('s')
            ->innerJoin(Annee::class, 'a', 'WITH', 's.annee = a.id')
            ->innerJoin(Diplome::class, 'd', 'WITH', 'a.diplome = d.id')
            ->where('d.id = :diplome')
            ->orWhere('d.parent = :diplome')
            ->andWhere('s.ordreLmd = :ordreSemestre')
            ->setParameter('diplome', $diplome->getId())
            ->setParameter('ordreSemestre', $ordreSemestre)
            ->orderBy('t.libelle', Order::Ascending->value);
    }
}
