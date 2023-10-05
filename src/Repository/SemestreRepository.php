<?php
/*
 * Copyright (c) 2022. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Repository/SemestreRepository.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 07/09/2022 17:17
 */

namespace App\Repository;

use App\Entity\Annee;
use App\Entity\Departement;
use App\Entity\Diplome;
use App\Entity\Semestre;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Common\Collections\Criteria;
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
            ->orderBy('s.ordreLmd', Criteria::ASC)
            ->addOrderBy('s.libelle', Criteria::ASC);
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
            ->orderBy('s.ordreLmd', Criteria::ASC);
    }

    public function findByDiplome(Diplome $diplome): array
    {
        // utiliser findByDiplomeApc pour avoir tous les semestres sans dépendance du diplôme
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
    public function findByDiplomeEtNumero(Diplome $diplome, int $ordreSemestre): array
    {
        if (null !== $diplome->getParent()) {
            $diplome = $diplome->getParent();
        }

        $query = $this->createQueryBuilder('s')
            ->innerJoin(Annee::class, 'a', 'WITH', 'a.id = s.annee')
            ->andWhere('s.ordreLmd = :numero')
            ->setParameter('numero', $ordreSemestre);

        $ors = [];
        foreach ($diplome->getEnfants() as $dip) {
            $ors[] = '('.$query->expr()->orx('a.diplome = '.$query->expr()->literal($dip->getId())).')';
        }
        $ors[] = '('.$query->expr()->orx('a.diplome = '.$query->expr()->literal($diplome->getId())).')';

        return $query->andWhere(implode(' OR ', $ors))
            ->getQuery()
            ->getResult();


    }

    public function findSemestresActifBuilder(): QueryBuilder
    {
        return $this->createQueryBuilder('s')
            ->innerJoin(Annee::class, 'a', 'WITH', 'a.id = s.annee')
            ->innerJoin(Diplome::class, 'd', 'WITH', 'd.id = a.diplome')
            ->where('s.actif = true')
            ->orderBy('d.sigle', Criteria::ASC)
            ->addOrderBy('s.ordreLmd', Criteria::ASC);
    }

    public function findAllSemestreByDiplomeApc(Diplome $diplome): array
    {
        return $this->findAllSemestreByDiplomeApcBuilder($diplome)->getQuery()->getResult();
    }

    public function findAllSemestreByDiplomeApcBuilder(Diplome $diplome): QueryBuilder
    {
        if (null !== $diplome->getParent()) {
            $diplome = $diplome->getParent();
        }

        $query = $this->createQueryBuilder('s')
            ->innerJoin(Annee::class, 'a', 'WITH', 'a.id = s.annee')
            ->innerJoin(Diplome::class, 'd', 'WITH', 'd.id = a.diplome')
            ->where('d.id = :diplome')
            ->setParameter('diplome', $diplome->getId())
            ->orderBy('s.ordreLmd', Criteria::ASC);

        $i = 1;
        foreach ($diplome->getEnfants() as $diplomeEnfant) {
            $query->orWhere('d.id = :dip'.$i)
                ->setParameter('dip'.$i, $diplomeEnfant->getId());
            ++$i;
        }

        return $query;
    }

    public function findByDepartementActifFc(Departement $departement): array {
        return $this->createQueryBuilder('s')
            ->innerJoin(Annee::class, 'a', 'WITH', 'a.id = s.annee')
            ->innerJoin(Diplome::class, 'd', 'WITH', 'd.id = a.diplome')
            ->where('d.departement = :departement')
            ->andWhere('s.actif = 1')
            ->andWhere('a.optAlternance = 1')
            ->setParameter('departement', $departement)
            ->getQuery()
            ->getResult();
    }

    public function findSemestreEduSign() {
        return $this->createQueryBuilder('s')
            ->where('s.idEduSign IS NOT NULL')
            ->getQuery()
            ->getResult();
    }

    public function save(Semestre $semestre): void
    {
        $this->_em->persist($semestre);
        $this->_em->flush();
    }
}
