<?php
// Copyright (C) 11 / 2019 | David annebicque | IUT de Troyes - All Rights Reserved
// @file /Users/davidannebicque/htdocs/intranetv3/src/Repository/TwigTemplateRepository.php
// @author     David Annebicque
// @project intranetv3
// @date 25/11/2019 10:21
// @lastUpdate 23/11/2019 09:14

namespace App\Repository;

use App\Entity\TwigTemplate;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Common\Persistence\ManagerRegistry;

/**
 * @method TwigTemplate|null find($id, $lockMode = null, $lockVersion = null)
 * @method TwigTemplate|null findOneBy(array $criteria, array $orderBy = null)
 * @method TwigTemplate[]    findAll()
 * @method TwigTemplate[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class TwigTemplateRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, TwigTemplate::class);
    }
}
