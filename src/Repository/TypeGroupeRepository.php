<?php
/*
 * Copyright (c) 2022. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Repository/TypeGroupeRepository.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 03/10/2022 18:22
 */

namespace App\Repository;

use App\Entity\Annee;
use App\Entity\Departement;
use App\Entity\Diplome;
use App\Entity\Semestre;
use App\Entity\TypeGroupe;
use function array_key_exists;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Common\Collections\Criteria;
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

    public function findBySemestre(Semestre $semestre): array
    {
        return $this->findBySemestreBuilder($semestre)->getQuery()->getResult();
    }

    public function findByDepartement(Departement $departement): array
    {
        // todo: à revoir, le semestre n'est pas forcément présent pour le moment
        return $this->createQueryBuilder('t')
            ->innerJoin(Semestre::class, 's', 'WITH', 't.semestre = s.id')
            ->innerJoin(Annee::class, 'a', 'WITH', 's.annee = a.id')
            ->innerJoin(Diplome::class, 'd', 'WITH', 'a.diplome = d.id')
            ->where('d.departement = :departement')
            ->setParameter('departement', $departement->getId())
            ->getQuery()
            ->getResult();
    }

    public function findByDepartementSemestresActifs(Departement $departement): array
    {
        // todo: à revoir, le semestre n'est pas forcément présent pour le moment. Rustine pour que ca fonctionne en attenand de reprendre typegroupe...
        return $this->createQueryBuilder('t')
          //  ->innerJoin(Semestre::class, 's', 'WITH', 't.semestre = s.id')
           // ->innerJoin(Annee::class, 'a', 'WITH', 's.annee = a.id')
            ->innerJoin(Diplome::class, 'd', 'WITH', 't.diplome = d.id')
            ->where('d.departement = :departement')
            // ->andWhere('a.actif = true')
           // ->andWhere('s.actif = true')
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

    public function findByDiplomeAndOrdreSemestre(Diplome $diplome, int $ordreSemestre): array
    {
        return $this->findByDiplomeAndOrdreSemestreBuilder($diplome, $ordreSemestre)->getQuery()->getResult();
    }

    public function findByDiplomeAndOrdreSemestreBuilder(Diplome $diplome, int $ordreSemestre): QueryBuilder
    {
        if (null !== $diplome->getParent()) {
            $diplome = $diplome->getParent();
        }

        return $this->createQueryBuilder('t')
            ->where('t.diplome = :diplome')
            ->andWhere('t.ordreSemestre = :ordreSemestre')
            ->setParameter('diplome', $diplome->getId())
            ->setParameter('ordreSemestre', $ordreSemestre)
            ->orderBy('t.libelle', Criteria::ASC)
           ;
    }
}
