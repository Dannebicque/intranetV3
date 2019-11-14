<?php /**
 * Copyright (C) 8 / 2019 | David annebicque | IUT de Troyes - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetv3/src/Repository/BorneRepository.php
 * @author     David Annebicque
 * @project intranetv3
 * @date 26/08/2019 13:45
 * @lastUpdate 26/08/2019 13:44
 */ /**
 * Copyright (C) 11 / 2019 | David annebicque | IUT de Troyes - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetv3/src/Repository/BorneRepository.php
 * @author     David Annebicque
 * @project intranetv3
 * @date 14/11/2019 14:57
 * @lastUpdate 14/11/2019 08:12
 */ /** @noinspection ALL */
/** @noinspection PhpUnused */

namespace App\Repository;

use App\Entity\Annee;
use App\Entity\Borne;
use App\Entity\Departement;
use App\Entity\Diplome;
use App\Entity\Semestre;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Common\Persistence\ManagerRegistry;
use Symfony\Bridge\Doctrine\RegistryInterface;

/**
 * @method Borne|null find($id, $lockMode = null, $lockVersion = null)
 * @method Borne|null findOneBy(array $criteria, array $orderBy = null)
 * @method Borne[]    findAll()
 * @method Borne[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class BorneRepository extends ServiceEntityRepository
{
    /**
     * BorneRepository constructor.
     *
     * @param RegistryInterface $registry
     */
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, Borne::class);
    }

    public function findByDepartement(Departement $departement, $nbResult)
    {
        $q = $this->createQueryBuilder('b')
            ->innerJoin('b.semestres', 'c')//récupération de la jointure dans la table dédiée
            ->innerJoin(Semestre::class, 's', 'WITH', 'c.id = s.id')
            ->innerJoin(Annee::class, 'a', 'WITH', 's.annee = a.id')
            ->innerJoin(Diplome::class, 'd', 'WITH', 'a.diplome = d.id')
            ->where('d.departement = :departement')
            ->setParameter('departement', $departement->getId())
            ->orderBy('a.created', 'DESC');

        if ($nbResult > 0) {
            $q->setMaxResults($nbResult);
        }

        return $q->getQuery()
            ->getResult();
    }
}
