<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Classes/Csv/CsvWrite.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 07/02/2021 11:11
 */

/*
 * Pull your hearder here, for exemple, Licence header.
 */

namespace App\Classes\Csv;

/**
 * Class CsvWrite.
 */
abstract class CsvWrite
{
    public const FORMAT_DATETIME = 'DateTime';
    public const FORMAT_STRING = 'string';
    public const ECHAPPEMENT = '"';

    /**
     * @param        $value
     * @param string $key
     */
    public static function writeField($value, $key = ''): string
    {
        $field = '';
        $field .= $key;

        if (\is_string($value)) {
            $field .= self::ECHAPPEMENT . $value . self::ECHAPPEMENT;
        } elseif (\is_object($value)) {
            if (self::FORMAT_DATETIME === \get_class($value)) {
                $field .= $value->format('d-m-Y');
            }
        } else {
            $field .= $value;
        }

        return $field;
    }
}
