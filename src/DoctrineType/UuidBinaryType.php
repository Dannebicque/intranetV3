<?php


namespace App\DoctrineType;


use InvalidArgumentException;
use Symfony\Component\Uid\UuidV4;
use Doctrine\DBAL\Types\ConversionException;
use Doctrine\DBAL\Types\Type;
use Doctrine\DBAL\Platforms\AbstractPlatform;

/**
 * Field type mapping for the Doctrine Database Abstraction Layer (DBAL).
 *
 * UUID fields will be stored as a string in the database and converted back to
 * the Uuid value object when querying.
 */
class UuidBinaryType extends Type
{
    /**
     * @var string
     */
    const NAME = 'uuid_binary';

    /**
     * {@inheritdoc}
     *
     * @param array            $fieldDeclaration
     * @param AbstractPlatform $platform
     */
    public function getSQLDeclaration(array $fieldDeclaration, AbstractPlatform $platform)
    {
        return $platform->getBinaryTypeDeclarationSQL(
            [
                'length' => '16',
                'fixed'  => true,
            ]
        );
    }

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
        if ($value === null || trim($value) === '') {
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

        if ($value instanceof UuidV4) {
            return $value->toBinary();
        }

        try {
            if (is_string($value) || method_exists($value, '__toString')) {
                return UuidV4::fromString((string)$value)->toBinary();
            }
        } catch (InvalidArgumentException $e) {
            // Ignore the exception and pass through.
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

    /**
     * {@inheritdoc}
     *
     * @param AbstractPlatform $platform
     *
     * @return bool
     */
    public function requiresSQLCommentHint(AbstractPlatform $platform)
    {
        return true;
    }
}
