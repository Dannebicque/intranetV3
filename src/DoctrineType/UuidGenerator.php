<?php

declare(strict_types=1);

namespace App\DoctrineType;

use Doctrine\ORM\EntityManager;
use Doctrine\ORM\Id\AbstractIdGenerator;
use Symfony\Component\Uid\Uuid;

/**
 * @author Guillaume Loulier <contact@guillaumeloulier.fr>
 */
final class UuidGenerator extends AbstractIdGenerator
{
    /**
     * {@inheritdoc}
     */
    public function generate(EntityManager $em, $entity)
    {
        return Uuid::v4();
    }
}
