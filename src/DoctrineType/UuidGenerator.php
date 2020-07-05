<?php
// Copyright (c) 2020. | David Annebicque | IUT de Troyes  - All Rights Reserved
// @file /Users/davidannebicque/htdocs/intranetV3/src/DoctrineType/UuidGenerator.php
// @author davidannebicque
// @project intranetV3
// @lastUpdate 05/07/2020 08:13

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
