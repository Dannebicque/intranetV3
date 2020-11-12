<?php
// Copyright (c) 2020. | David Annebicque | IUT de Troyes  - All Rights Reserved
// @file /Users/davidannebicque/htdocs/intranetV3/src/Repository/GroupeRepository.php
// @author davidannebicque
// @project intranetV3
// @lastUpdate 12/11/2020 14:01


namespace App\Repository;

use App\Entity\Annee;
use App\Entity\Departement;
use App\Entity\Diplome;
use App\Entity\Groupe;
use App\Entity\Semestre;
use App\Entity\TypeGroupe;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\ORM\QueryBuilder;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @method Groupe|null find($id, $lockMode = null, $lockVersion = null)
 * @method Groupe|null findOneBy(array $criteria, array $orderBy = null)
 * @method Groupe[]    findAll()
 * @method Groupe[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class GroupeRepository extends ServiceEntityRepository
{
    /**
     * GroupeRepository constructor.
     *
     * @param ManagerRegistry $registry
     */
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, Groupe::class);
    }

    public function findByDepartementBuilder(Departement $departement)
    {
        return $this->createQueryBuilder('g')
            ->innerJoin(TypeGroupe::class, 't', 'WITH', 'g.typeGroupe = t.id')
            ->innerJoin(Semestre::class, 's', 'WITH', 't.semestre = s.id')
            ->innerJoin(Annee::class, 'a', 'WITH', 'a.id = s.annee')
            ->innerJoin(Diplome::class, 'd', 'WITH', 'd.id = a.diplome')
            ->where('d.departement = :departement')
            ->setParameter('departement', $departement->getId());
    }

    public function findByDepartement(Departement $departement)
    {
        return $this->findByDepartementBuilder($departement)
            ->getQuery()
            ->getResult();
    }


    public function findBySemestre(Semestre $semestre)
    {
        return $this->findBySemestreBuilder($semestre)
            ->getQuery()
            ->getResult();
    }

    public function findBySemestreBuilder(Semestre $semestre): QueryBuilder
    {
        return $this->createQueryBuilder('g')
            ->innerJoin(TypeGroupe::class, 't', 'WITH', 'g.typeGroupe = t.id')
            ->where('t.semestre = :semestre')
            ->setParameter('semestre', $semestre->getId())
            ->orderBy('g.libelle', 'ASC');
    }

    public function findAllGroupes(Semestre $semestre): array
    {

        $groupes = [];
        $gtp = $this->getGroupesTP($semestre->getId());

        $i = 1;
        /** @var Groupe $g */
        foreach ($gtp as $g) {
            $groupes[$i] = $g->getLibelle();
            $i++;
        }

        for ($j = $i; $j <= $semestre->getNbgroupeTpEdt() + 1; $j++) {
            $groupes[$j] = '';
        }

        return $groupes;

    }

    /**
     * @param $semestre
     *
     * @return array
     */
    public function getGroupesTP($semestre): array
    {
        return $this->createQueryBuilder('g')
            ->innerJoin(TypeGroupe::class, 't', 'WITH', 'g.typeGroupe = t.id')
            ->where('t.type = :type')
            ->andWhere('t.semestre = :semestre')
            ->setParameters(array('type' => 'TP', 'semestre' => $semestre))
            ->orderBy('g.libelle', 'ASC')
            ->getQuery()
            ->getResult();
    }

    /**
     * @param $semestre
     *
     * @return array
     */
    public function getGroupesTD($semestre): array
    {
        return $this->createQueryBuilder('g')
            ->innerJoin(TypeGroupe::class, 't', 'WITH', 'g.typeGroupe = t.id')
            ->where('t.type = :type')
            ->andWhere('t.semestre = :semestre')
            ->setParameters(array('type' => 'TD', 'semestre' => $semestre))
            ->orderBy('g.libelle', 'ASC')
            ->getQuery()
            ->getResult();
    }

    /**
     * @param Semestre $semestre
     *
     * @return array
     */
    public function findBySemestreArray(Semestre $semestre): array
    {
        $groupes = $this->findBySemestre($semestre);
        $t = [];

        /** @var Groupe $groupe */
        foreach ($groupes as $groupe) {
            $t[$groupe->getCodeApogee()] = $groupe;
        }

        return $t;

    }

    /**
     * @param Semestre $semestre
     *
     * @return array
     */
    public function findGroupeSemestreEdt(Semestre $semestre): array
    {
        $groupes = [];
        $gtp = $this->getGroupesTP($semestre->getId());
        $gtd = $this->getGroupesTD($semestre->getId());

        $i = 1;
        $groupes[0]['id'] = 'CM-1';
        $groupes[0]['display'] = 'CM | CM';

        /** @var  Groupe $g */
        foreach ($gtp as $g) {
            $groupes[$i]['id'] = 'TP-' . $g->getOrdre();
            $groupes[$i]['display'] = 'TP' . $g->getLibelle() . ' | TP ' . $g->getLibelle();
            $i++;
        }

        /** @var  Groupe $g */
        foreach ($gtd as $g) {
            $or = $g->getOrdre();
            $groupes[$i]['id'] = 'TD-' . $or;
            $groupes[$i]['display'] = 'TD' . $g->getLibelle() . ' | TD ' . $g->getLibelle();
            $i++;
        }

        return $groupes;
    }

    public function findByTypeGroupe(?TypeGroupe $typegroupe)
    {
        return $this->createQueryBuilder('g')
            ->where('g.typeGroupe = :typeGroupe')
            ->orderBy('g.ordre', 'ASC')
            ->setParameter('typeGroupe', $typegroupe)
            ->getQuery()
            ->getResult();
    }
}
