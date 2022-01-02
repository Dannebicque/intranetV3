<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Utils/Tools.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 08/10/2021 19:11
 */

/*
 * Pull your hearder here, for exemple, Licence header.
 */

namespace App\Utils;

use Carbon\Carbon;
use Carbon\CarbonInterface;
use Exception;
use RuntimeException;
use function chr;
use function ord;

abstract class Tools
{
    /**
     * @throws Exception
     */
    public static function convertDateToObject(string $date): CarbonInterface
    {
        if (!str_contains($date, '/')) {
            $d = Carbon::createFromFormat('Y-m-d', $date);
        } else {
            $d = Carbon::createFromFormat('d/m/Y', $date);
        }

        return Carbon::createMidnightDate($d->year, $d->month, $d->day);
    }

    /**
     * @throws Exception
     */
    public static function convertTimeToObject(string $heure): CarbonInterface
    {
        return Carbon::createFromTimeString($heure);
    }

    public static function convertToFloat(mixed $value): ?float
    {
        $value = trim($value);
        $value = str_replace([',', '.'], '.', $value);

        return (float)$value;
    }

    public static function convertToBool(string $texte): bool
    {
        return 'true' === $texte;
    }

    public static function telFormat(?string $number): string
    {
        if (null === $number) {
            return '';
        }

        str_replace(['.', '-', ' '], '', $number);

        if (str_starts_with($number, '33')) {
            $number = '0' . mb_substr($number, 2, mb_strlen($number));
        }

        if (str_starts_with($number, '+33')) {
            $number = '0' . mb_substr($number, 3, mb_strlen($number));
        }

        if (9 === mb_strlen($number)) {
            $number = '0' . $number;
        }

        if (10 === mb_strlen($number)) {
            $str = chunk_split($number, 2, ' ');
        } else {
            $str = str_replace('.', ' ', $number);
        }

        return $str;
    }

    public static function supprimeAccent(string $texte): string
    {
        $search = explode(',',
            'À,Á,Â,à,Ä,Å,à,á,â,à,ä,å,Ò,Ó,Ô,Õ,Ö,Ø,ò,ó,ô,õ,ö,ø,È,É,Ê,Ë,è,é,ê,ë,Ç,ç,Ì,Í,Î,Ï,ì,í,î,ï,Ù,Ú,Û,Ü,ù,ú,û,ü,ÿ,Ñ,ñ');
        $replace = explode(',',
            'a,a,a,a,a,a,a,a,a,a,a,a,o,o,o,o,o,o,o,o,o,o,o,o,e,e,e,e,e,e,e,e,c,c,i,i,i,i,i,i,i,i,u,u,u,u,u,u,u,u,y,n,n');

        return str_replace($search, $replace, $texte);
    }

    public static function slug(string $texte): array|string|null
    {
        /* Get rid of accented characters */
        $search = explode(',', 'ç,æ,œ,á,é,í,ó,ú,à,è,ì,ò,ù,ä,ë,ï,ö,ü,ÿ,â,ê,î,ô,û,å,e,i,ø,u');
        $replace = explode(',', 'c,ae,oe,a,e,i,o,u,a,e,i,o,u,a,e,i,o,u,y,a,e,i,o,u,a,e,i,o,u');
        $texte = str_replace($search, $replace, $texte);

        /* Lowercase all the characters */
        $texte = mb_strtolower($texte);

        /* Avoid whitespace at the beginning and the ending */
        $texte = trim($texte);

        /* Replace all the characters that are not in a-z or 0-9 by a hyphen */
        $texte = preg_replace('/[^a-z0-9]/', '-', $texte);

        /* Remove hyphen anywhere it's more than one */

        return preg_replace("/[\-]+/", '-', $texte);
    }

    public static function personnaliseTexte(string $texte, array $config): string
    {

        foreach ($config as $key => $elt) {
            $texte = str_replace('{{' . $key . '}}', $elt, $texte);
        }

        return $texte;
    }

    public static function convertDateHeureToObject(string $dateString, string $heureString): Carbon
    {
        if (!str_contains($dateString, '/')) {
            $date = Carbon::createFromFormat('Y-m-d', trim($dateString));
        } else {
            $date = Carbon::createFromFormat('d/m/Y', trim($dateString));
        }
        $heure = Carbon::createFromTimeString($heureString);

        return Carbon::create($date->year, $date->month, $date->day, $heure->hour, $heure->minute);
    }

    public static function updateFields(string $name, mixed $value, object $obj): void
    {
        $t = explode('_', $name);
        $name = $t[0];
        $name[0] = chr(ord($name[0]) - 32);

        $method = 'set' . $name;
        if (method_exists($obj, $method)) {
            $obj->$method($value);
        }
    }

    public static function checkDirectoryExist(string $dir): bool
    {
        if (!mkdir($dir) && !is_dir($dir)) {
            throw new RuntimeException(sprintf('Directory "%s" was not created', $dir));
        }

        return true;
    }

    public static function convertToInt(mixed $int): int|string
    {
        $int = trim($int);
        if ('' === $int) {
            $int = 0;
        }

        return $int;
    }

    public static function convertApogeeDateToObject(string $date): CarbonInterface
    {
        if (!str_contains($date, '/')) {
            $d = Carbon::createFromFormat('y-m-d', $date);
        } else {
            $d = Carbon::createFromFormat('d/m/y', $date);
        }

        return Carbon::createMidnightDate($d->year, $d->month, $d->day);
    }
}
