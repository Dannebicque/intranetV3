<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Repository/TwigTemplateRepository.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 07/02/2021 11:08
 */

namespace App\Repository;

use App\Entity\TwigTemplate;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

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
