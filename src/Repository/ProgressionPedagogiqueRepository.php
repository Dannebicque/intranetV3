<?php /**
 * Copyright (C) 8 / 2019 | David annebicque | IUT de Troyes - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetv3/src/Repository/ProgressionPedagogiqueRepository.php
 * @author     David Annebicque
 * @project intranetv3
 * @date 26/08/2019 13:45
 * @lastUpdate 26/08/2019 13:13
 */ /**
 * Copyright (C) 11 / 2019 | David annebicque | IUT de Troyes - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetv3/src/Repository/ProgressionPedagogiqueRepository.php
 * @author     David Annebicque
 * @project intranetv3
 * @date 14/11/2019 14:57
 * @lastUpdate 14/11/2019 14:56
 */ // Copyright (C) 11 / 2019 | David annebicque | IUT de Troyes - All Rights Reserved
// @file /Users/davidannebicque/htdocs/intranetv3/src/Repository/ProgressionPedagogiqueRepository.php
// @author     David Annebicque
// @project intranetv3
// @date 25/11/2019 10:21
// @lastUpdate 23/11/2019 09:14
/** @noinspection PhpUnused */

namespace App\Repository;

use App\Entity\Matiere;
use App\Entity\Personnel;
use App\Entity\ProgressionPedagogique;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Common\Persistence\ManagerRegistry;
use Doctrine\ORM\NonUniqueResultException;

/**
 * @method ProgressionPedagogique|null find($id, $lockMode = null, $lockVersion = null)
 * @method ProgressionPedagogique|null findOneBy(array $criteria, array $orderBy = null)
 * @method ProgressionPedagogique[]    findAll()
 * @method ProgressionPedagogique[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class ProgressionPedagogiqueRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, ProgressionPedagogique::class);
    }

    /**
     * @param Personnel $personnel
     * @param           $semaine
     * @param           $typeCours
     * @param Matiere   $matiere
     *
     * @return mixed
     * @throws NonUniqueResultException
     */
    public function findBySemaineTypeMatiere(Personnel $personnel, $semaine, $typeCours, Matiere $matiere)
    {
        return $this->createQueryBuilder('p')
            ->andWhere('p.personnel = :personnel')
            ->andWhere('p.semaine = :semaine')
            ->andWhere('p.typeCours = :typeCours')
            ->andWhere('p.matiere = :matiere')
            ->setParameter('personnel', $personnel->getId())
            ->setParameter('semaine', $semaine)
            ->setParameter('typeCours', $typeCours)
            ->setParameter('matiere', $matiere->getId())
            ->getQuery()
            ->getOneOrNullResult();
    }

    public function getProgressionsArray(Personnel $personnel): array
    {
        $query = $this->createQueryBuilder('d')
            ->andWhere('d.personnel = :personnel')
            ->setParameter('personnel', $personnel->getId())
            ->getQuery()
            ->getResult();

        $t = [];
        /** @var ProgressionPedagogique $progression */
        foreach ($query as $progression) {
            if ($progression->getMatiere() !== null) {
                $matiere = $progression->getMatiere()->getId();
                $semaine = $progression->getSemaine();
                if (!array_key_exists($matiere, $t)) {
                    $t[$matiere] = [];
                }

                if (!array_key_exists($semaine, $t[$matiere])) {
                    $t[$matiere][$semaine] = [];
                }

                $t[$matiere][$semaine][$progression->getTypeCours()] = $progression->getNbSeance();
            }
        }

        return $t;
    }


}
