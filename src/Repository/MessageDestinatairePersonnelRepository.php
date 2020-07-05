<?php
// Copyright (c) 2020. | David Annebicque | IUT de Troyes  - All Rights Reserved
// @file /Users/davidannebicque/htdocs/intranetV3/src/Repository/MessageDestinatairePersonnelRepository.php
// @author davidannebicque
// @project intranetV3
// @lastUpdate 05/07/2020 08:13

namespace App\Repository;

use App\Entity\Message;
use App\Entity\MessageDestinatairePersonnel;
use App\Entity\Personnel;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\ORM\NoResultException;
use Doctrine\Persistence\ManagerRegistry;
use Doctrine\ORM\NonUniqueResultException;

/**
 * @method MessageDestinatairePersonnel|null find($id, $lockMode = null, $lockVersion = null)
 * @method MessageDestinatairePersonnel|null findOneBy(array $criteria, array $orderBy = null)
 * @method MessageDestinatairePersonnel[]    findAll()
 * @method MessageDestinatairePersonnel[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class MessageDestinatairePersonnelRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, MessageDestinatairePersonnel::class);
    }

    public function findLast(Personnel $user, $nbMessage = 0, $filtre = '')
    {
        $query = $this->createQueryBuilder('m')
            ->where('m.personnel = :personnel')
            ->setParameter('personnel', $user->getId())
            ->orderBy('m.created', 'DESC');

        switch ($filtre){
            case 'all':
                $query->andWhere('m.etat = :read or m.etat = :unread')
                    ->setParameter('read', 'R')
                    ->setParameter('unread', 'U');
                break;
            case 'trash':
                $query->andWhere('m.etat = :delete')
                    ->setParameter('delete', 'D');
                break;
            case 'starred':
                $query->andWhere('m.starred = 1');
                break;
        }

        if ($nbMessage > 0) {
            $query->setMaxResults($nbMessage);
        }

        return $query->getQuery()
            ->getResult();
    }

    /**
     * @param $user
     * @param $message
     *
     * @return mixed
     * @throws NonUniqueResultException
     */
    public function findDest(Personnel $user, Message $message): ?MessageDestinatairePersonnel
    {
        return $this->createQueryBuilder('m')
            ->where('m.personnel = :personnel')
            ->andWhere('m.message = :message')
            ->setParameter('personnel', $user->getId())
            ->setParameter('message', $message->getId())
            ->getQuery()
            ->getOneOrNullResult();
    }

    /**
     * @param Personnel $user
     *
     * @return mixed
     * @throws NonUniqueResultException
     * @throws NoResultException
     */
    public function getNbUnread(Personnel $user)
    {
        return $this->createQueryBuilder('m')
            ->select('count(m.id)')
            ->where('m.personnel = :personnel')
            ->setParameter('personnel', $user->getId())
            ->andWhere('m.etat = :unread')
            ->setParameter('unread', 'U')
            ->getQuery()
            ->getSingleScalarResult();
    }
}
