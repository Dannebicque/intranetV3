<?php
/**
 * *
 *  *  Copyright (C) $month.$year | David annebicque | IUT de Troyes - All Rights Reserved
 *  *
 *  *
 *  * @file /Users/davidannebicque/htdocs/intranetv3/src/Repository/MessageDestinatairePersonnelRepository.php
 *  * @author     David annebicque
 *  * @project intranetv3
 *  * @date 4/28/19 8:46 PM
 *  * @lastUpdate 4/28/19 8:42 PM
 *  *
 *
 */

namespace App\Repository;

use App\Entity\Message;
use App\Entity\MessageDestinatairePersonnel;
use App\Entity\Personnel;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\ORM\NonUniqueResultException;
use Symfony\Bridge\Doctrine\RegistryInterface;

/**
 * @method MessageDestinatairePersonnel|null find($id, $lockMode = null, $lockVersion = null)
 * @method MessageDestinatairePersonnel|null findOneBy(array $criteria, array $orderBy = null)
 * @method MessageDestinatairePersonnel[]    findAll()
 * @method MessageDestinatairePersonnel[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class MessageDestinatairePersonnelRepository extends ServiceEntityRepository
{
    public function __construct(RegistryInterface $registry)
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
}
