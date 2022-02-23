<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Classes/Csv/CsvWrite.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 29/06/2021 17:30
 */

/*
 * Pull your hearder here, for exemple, Licence header.
 */

namespace App\Classes\Csv;

use function get_class;
use function is_object;
use function is_string;

/**
 * Class CsvWrite.
 */
abstract class CsvWrite
{
    public const FORMAT_DATETIME = 'DateTime';
    public const FORMAT_STRING = 'string';
    public const ECHAPPEMENT = '"';

    public static function writeField(mixed $value, string $key = ''): string
    {
        $field = $key;

        if (is_string($value)) {
            $field .= self::ECHAPPEMENT.$value.self::ECHAPPEMENT;
        } elseif (is_object($value)) {
            if (self::FORMAT_DATETIME === get_class($value)) {
                $field .= $value->format('d-m-Y');
            }
        } else {
            $field .= $value;
        }

        return $field;
    }
}
