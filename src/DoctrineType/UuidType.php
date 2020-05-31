<?php

namespace App\DoctrineType;

use InvalidArgumentException;
use Symfony\Component\Uid\Uuid;
use Doctrine\DBAL\Types\ConversionException;
use Doctrine\DBAL\Types\GuidType;
use Doctrine\DBAL\Platforms\AbstractPlatform;
use Symfony\Component\Uid\UuidV4;

/**
 * Field type mapping for the Doctrine Database Abstraction Layer (DBAL).
 *
 * UUID fields will be stored as a string in the database and converted back to
 * the Uuid value object when querying.
 */
class UuidType extends GuidType
{
    /**
     * @var string
     */
    const NAME = 'uuid';

    /**
     * {@inheritdoc}
     *
     * @param string|UuidV4|null $value
     * @param AbstractPlatform   $platform
     *
     * @return UuidV4|null
     *
     * @throws ConversionException
     */
    public function convertToPHPValue($value, AbstractPlatform $platform)
    {
        if ($value === null || $value === '') {
            return null;
        }

        if ($value instanceof UuidV4) {
            return $value;
        }

        try {
            $uuid = UuidV4::fromString($value);
        } catch (InvalidArgumentException $e) {
            throw ConversionException::conversionFailed($value, static::NAME);
        }

        return $uuid;
    }

    /**
     * {@inheritdoc}
     *
     * @param UuidV4|string|null $value
     * @param AbstractPlatform   $platform
     *
     * @return string|null
     *
     * @throws ConversionException
     */
    public function convertToDatabaseValue($value, AbstractPlatform $platform)
    {
        if ($value === null || $value === '') {
            return null;
        }

        if (
            $value instanceof UuidV4
            || (
                (is_string($value)
                    || method_exists($value, '__toString'))
                && Uuid::isValid((string)$value)
            )
        ) {
            return (string)$value;
        }

        throw ConversionException::conversionFailed($value, static::NAME);
    }

    /**
     * {@inheritdoc}
     *
     * @return string
     */
    public function getName()
    {
        return static::NAME;
    }
}
