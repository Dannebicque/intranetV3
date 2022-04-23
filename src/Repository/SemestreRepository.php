<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Repository/SemestreRepository.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 21/07/2021 17:23
 */

namespace App\Repository;

use App\Entity\Annee;
use App\Entity\ApcRessource;
use App\Entity\Departement;
use App\Entity\Diplome;
use App\Entity\Personnel;
use App\Entity\Previsionnel;
use App\Entity\Semestre;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\ORM\QueryBuilder;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @method Semestre|null find($id, $lockMode = null, $lockVersion = null)
 * @method Semestre|null findOneBy(array $criteria, array $orderBy = null)
 * @method Semestre[]    findAll()
 * @method Semestre[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 * @extends ServiceEntityRepository<Semestre>
 */
class SemestreRepository extends ServiceEntityRepository
{
    /**
     * SemestreRepository constructor.
     */
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, Semestre::class);
    }

    public function findByDepartementBuilder(Departement $departement): QueryBuilder
    {
        return $this->createQueryBuilder('s')
            ->innerJoin(Annee::class, 'a', 'WITH', 'a.id = s.annee')
            ->innerJoin(Diplome::class, 'd', 'WITH', 'd.id = a.diplome')
            ->where('d.departement = :departement')
            ->andWhere('a.actif = true')
            ->setParameter('departement', $departement)
            ->orderBy('s.ordreLmd', 'ASC')
            ->addOrderBy('s.libelle', 'ASC');
    }

    public function findByDepartementActif(Departement $departement): array
    {
        return $this->createQueryBuilder('s')
            ->innerJoin(Annee::class, 'a', 'WITH', 'a.id = s.annee')
            ->innerJoin(Diplome::class, 'd', 'WITH', 'd.id = a.diplome')
            ->where('d.departement = :departement')
            ->andWhere('s.actif = 1')
            ->setParameter('departement', $departement)
            ->getQuery()
            ->getResult();
    }

    public function findByDiplomeBuilder(Diplome $diplome): QueryBuilder
    {
        return $this->createQueryBuilder('s')
            ->innerJoin(Annee::class, 'a', 'WITH', 'a.id = s.annee')
            ->where('a.diplome = :diplome')
            ->setParameter('diplome', $diplome)
            ->orderBy('s.ordreLmd', 'ASC');
    }

    public function findByDiplome(Diplome $diplome): array
    {
        return $this->findByDiplomeBuilder($diplome)->getQuery()->getResult();
    }

    public function findByDepartement(Departement $departement): array
    {
        return $this->findByDepartementBuilder($departement)->getQuery()->getResult();
    }

    public function tableauSemestres(Departement $departement): array
    {
        $semestres = $this->createQueryBuilder('s')
            ->innerJoin(Annee::class, 'a', 'WITH', 'a.id=s.annee')
            ->innerJoin(Diplome::class, 'd', 'WITH', 'd.id=a.diplome')
            ->where('d.departement = :departement')
            ->andWhere('a.actif = 1')
            ->setParameter('departement', $departement->getId())
            ->orderBy('s.libelle')
            ->getQuery()
            ->getResult();

        $tabsemestre = [];

        /** @var Semestre $semestre */
        foreach ($semestres as $semestre) {
            $index = mb_substr($semestre->getLibelle(), 1);

            if (1 === mb_strlen($index)) {
                $index = '0'.$index;
            }
            $tabsemestre[$index] = $semestre;
        }

        return $tabsemestre;
    }

    public function tableauSemestresApogee(Departement $departement): array
    {
        $semestres = $this->findByDepartement($departement);

        $tabsemestre = [];

        /** @var Semestre $semestre */
        foreach ($semestres as $semestre) {
            $tabsemestre[$semestre->getCodeElement()] = $semestre;
        }

        return $tabsemestre;
    }

    /**
     * @throws \Doctrine\ORM\NonUniqueResultException
     */
    public function findOneByDiplomeEtNumero(Diplome $diplome, string $numero, string $ordreAnnee): ?Semestre
    {
        return $this->createQueryBuilder('s')
            ->innerJoin(Annee::class, 'a', 'WITH', 'a.id = s.annee')
            ->where('a.diplome = :diplome')
            ->andWhere('s.ordreAnnee = :ordreAnnee')
            ->andWhere('s.ordreLmd = :numero')
            ->setParameter('diplome', $diplome->getId())
            ->setParameter('numero', $numero)
            ->setParameter('ordreAnnee', $ordreAnnee)
            ->orderBy('s.ordreLmd', 'ASC')
            ->getQuery()
            ->getOneOrNullResult();
    }

    public function findSemestresActifBuilder(): QueryBuilder
    {
        return $this->createQueryBuilder('s')
            ->innerJoin(Annee::class, 'a', 'WITH', 'a.id = s.annee')
            ->innerJoin(Diplome::class, 'd', 'WITH', 'd.id = a.diplome')
            ->where('s.actif = true')
            ->orderBy('d.sigle', 'ASC')
            ->addOrderBy('s.ordreLmd', 'ASC')
            ;
    }
}
