<?php
/*
 * Copyright (c) 2024. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Utils/JsonRequest.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 23/02/2024 21:35
 */

namespace App\Utils;

use JsonException;
use Symfony\Component\HttpFoundation\Request;

abstract class JsonRequest
{
    /**
     * @throws JsonException
     */
    public static function getFromRequest(Request $request): array
    {
        $parametersAsArray = [];
        if ($content = $request->getContent()) {
            $parametersAsArray = json_decode($content, true, 512, JSON_THROW_ON_ERROR);
        }

        return $parametersAsArray;
    }

    /**
     * @throws JsonException
     */
    public static function getValueFromRequest(Request $request, string $value): mixed
    {
        $parametersAsArray = self::getFromRequest($request);

        return $parametersAsArray[$value] ?? null;
    }
}
