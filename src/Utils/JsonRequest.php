<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Utils/JsonRequest.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 23/07/2021 08:57
 */

namespace App\Utils;

abstract class JsonRequest
{
    public static function getFromRequest($request)
    {
        $parametersAsArray = [];
        if ($content = $request->getContent()) {
            $parametersAsArray = json_decode($content, true);
        }

        return $parametersAsArray;
    }
}
