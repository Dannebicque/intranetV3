<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Utils/HtmlUtils.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 09/10/2021 10:02
 */

namespace App\Utils;

use RuntimeException;
use function function_exists;
use function is_object;
use function is_string;
use function ord;
use function strlen;

abstract class HtmlUtils
{
    public static function type_class_to_id(string $typeClass): string
    {
        $ns = preg_replace('/Type$/', '', $typeClass);
        $name = str_replace('\\', '_', $ns);

        return function_exists('mb_strtolower') && preg_match('//u', $name) ? mb_strtolower($name,
            'UTF-8') : strtolower($name);
    }

    public static function humanize(string $text): string
    {
        return ucfirst(strtolower(trim(preg_replace(['/([A-Z])/', '/[_\s]+/'], ['_$1', ' '], $text))));
    }

    public static function to_attr(array $attributes): string
    {
        $html = '';
        foreach ($attributes as $key => $value) {
            $html .= sprintf('%s="%s" ', $key, htmlspecialchars($value));
        }

        return $html;
    }
}
