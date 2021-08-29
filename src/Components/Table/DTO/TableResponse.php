<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Components/Table/DTO/TableResponse.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 29/08/2021 12:22
 */

namespace App\Components\Table\DTO;

use Symfony\Component\HttpFoundation\JsonResponse;

class TableResponse extends JsonResponse
{
    public static function createError(string $error): TableResponse
    {
        return new self(['error' => $error], self::HTTP_INTERNAL_SERVER_ERROR);
    }

    public static function createSuccess(array $rowViews = [], array $paging = [])
    {
        return new self([
            'paging' => $paging,
            'data' => $rowViews,
        ]);
    }
}
