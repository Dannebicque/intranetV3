<?php
/**
 * Copyright (C) 7 / 2019 | David annebicque | IUT de Troyes - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetv3/src/Repository/MessagePieceJointeRepository.php
 * @author     David Annebicque
 * @project intranetv3
 * @date 7/12/19 11:23 AM
 * @lastUpdate 7/13/18 7:35 AM
 */

namespace App\Repository;

use App\Entity\MessagePieceJointe;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Symfony\Bridge\Doctrine\RegistryInterface;

/**
 * @method MessagePieceJointe|null find($id, $lockMode = null, $lockVersion = null)
 * @method MessagePieceJointe|null findOneBy(array $criteria, array $orderBy = null)
 * @method MessagePieceJointe[]    findAll()
 * @method MessagePieceJointe[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class MessagePieceJointeRepository extends ServiceEntityRepository
{
    public function __construct(RegistryInterface $registry)
    {
        parent::__construct($registry, MessagePieceJointe::class);
    }
}
