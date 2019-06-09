<?php
/**
 * *
 *  *  Copyright (C) $month.$year | David annebicque | IUT de Troyes - All Rights Reserved
 *  *
 *  *
 *  * @file /Users/davidannebicque/htdocs/intranetv3/src/Repository/SemestreRepository.php
 *  * @author     David annebicque
 *  * @project intranetv3
 *  * @date 4/28/19 8:46 PM
 *  * @lastUpdate 4/28/19 8:45 PM
 *  *
 *
 */

namespace App\Repository;

use App\Entity\Annee;
use App\Entity\Departement;
use App\Entity\Diplome;
use App\Entity\Semestre;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\ORM\QueryBuilder;
use Symfony\Bridge\Doctrine\RegistryInterface;

/**
 * @method Semestre|null find($id, $lockMode = null, $lockVersion = null)
 * @method Semestre|null findOneBy(array $criteria, array $orderBy = null)
 * @method Semestre[]    findAll()
 * @method Semestre[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class SemestreRepository extends ServiceEntityRepository
{
    /**
     * SemestreRepository constructor.
     *
     * @param RegistryInterface $registry
     */
    public function __construct(RegistryInterface $registry)
    {
        parent::__construct($registry, Semestre::class);
    }

    /**
     * @param $departement
     *
     * @return QueryBuilder
     */
    public function findByDepartementBuilder($departement): QueryBuilder
    {
        return $this->createQueryBuilder('s')
            ->innerJoin(Annee::class, 'a', 'WITH', 'a.id = s.annee')
            ->innerJoin(Diplome::class, 'd', 'WITH', 'd.id = a.diplome')
            ->where('d.departement = :departement')
            ->setParameter('departement', $departement);
    }

    /**
     * @param $departement
     *
     * @return mixed
     */
    public function findByDepartementActif($departement)
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

    /**
     * @param $diplome
     *
     * @return QueryBuilder
     */
    public function findByDiplomeBuilder($diplome): QueryBuilder
    {
        return $this->createQueryBuilder('s')
            ->innerJoin(Annee::class, 'a', 'WITH', 'a.id = s.annee')
            ->where('a.diplome = :diplome')
            ->setParameter('diplome', $diplome);
    }

    /**
     * @param $diplome
     *
     * @return mixed
     */
    public function findByDiplome($diplome)
    {
        return $this->findByDiplomeBuilder($diplome)->getQuery()->getResult();
    }

    public function findByDepartement(Departement $departement)
    {
        return $this->findByDepartementBuilder($departement->getId())->getQuery()->getResult();
    }

    public function tableauSemestres(Departement $departement): array
    {
        $semestres = $this->createQueryBuilder('s')
            ->innerJoin(Annee::class, 'a', 'WITH', 'a.id=s.annee')
            ->innerJoin(Diplome::class, 'd', 'WITH', 'd.id=a.diplome')
            ->where('d.departement = :departement')
            ->setParameter('departement', $departement->getId())
            ->orderBy('s.libelle')
            ->getQuery()
            ->getResult();

        $tabsemestre = [];

        /** @var Semestre $semestre */
        foreach ($semestres as $semestre) {
            $index = substr($semestre->getLibelle(), 1, strlen($semestre->getLibelle()) - 1);

            if (strlen($index) === 1) {
                $index = '0' . $index;
            }

            $tabsemestre[$index] = $semestre;
        }


        return $tabsemestre;
    }
}
