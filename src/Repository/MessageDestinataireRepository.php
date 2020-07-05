<?php
// Copyright (c) 2020. | David Annebicque | IUT de Troyes  - All Rights Reserved
// @file /Users/davidannebicque/htdocs/intranetV3/src/Repository/MessageDestinataireRepository.php
// @author davidannebicque
// @project intranetV3
// @lastUpdate 05/07/2020 08:13

namespace App\Repository;

use App\Entity\MessageDestinataire;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

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
