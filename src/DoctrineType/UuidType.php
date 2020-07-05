<?php
// Copyright (c) 2020. | David Annebicque | IUT de Troyes  - All Rights Reserved
// @file /Users/davidannebicque/htdocs/intranetV3/src/DoctrineType/UuidType.php
// @author davidannebicque
// @project intranetV3
// @lastUpdate 05/07/2020 08:13

declare(strict_types=1);

namespace App\DoctrineType;

use Doctrine\DBAL\Platforms\AbstractPlatform;
use Doctrine\DBAL\Types\ConversionException;
use Doctrine\DBAL\Types\GuidType;
use Symfony\Component\Uid\Uuid;
use Throwable;

/**
 * @author Guillaume Loulier <contact@guillaumeloulier.fr>
 */
final class UuidType extends GuidType
{
    private const NAME = 'uuid';

    /**
     * {@inheritdoc}
     */
    public function convertToDatabaseValue($value, AbstractPlatform $platform)
    {
        if (null === $value || '' === $value) {
            return null;
        }

        if ($value instanceof Uuid) {
            return $value->toRfc4122();
        }

        throw ConversionException::conversionFailed($value, self::NAME);
    }

    /**
     * {@inheritdoc}
     */
    public function convertToPHPValue($value, AbstractPlatform $platform)
    {
        if (null === $value || '' === $value) {
            return null;
        }

        if (!Uuid::isValid($value)) {
            throw ConversionException::conversionFailed($value, self::NAME);
        }

        return Uuid::fromString($value);
    }

    /**
     * {@inheritdoc}
     */
    public function getName()
    {
        return self::NAME;
    }
}
