<?php
/**
 * Copyright (C) 11 / 2019 | David annebicque | IUT de Troyes - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetv3/src/Repository/MessageDestinataireRepository.php
 * @author     David Annebicque
 * @project intranetv3
 * @date 14/11/2019 14:57
 * @lastUpdate 14/11/2019 14:56
 */

namespace App\Repository;

use App\Entity\MessageDestinataire;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Common\Persistence\ManagerRegistry;

/**
 * @method MessageDestinataire|null find($id, $lockMode = null, $lockVersion = null)
 * @method MessageDestinataire|null findOneBy(array $criteria, array $orderBy = null)
 * @method MessageDestinataire[]    findAll()
 * @method MessageDestinataire[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class MessageDestinataireRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, MessageDestinataire::class);
    }
}
