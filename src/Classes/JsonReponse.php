<?php
/*
 * Copyright (c) 2024. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Classes/JsonReponse.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 10/06/2023 15:54
 */

namespace App\Classes;

use Symfony\Component\HttpFoundation\Response;

class JsonReponse
{
    public function __construct(
        private int    $state,
        private string $message,
        private array  $array = []
    )
    {
    }

    public static function success(string $message): Response
    {
        return new Response(json_encode([
            'message' => $message,
        ], JSON_THROW_ON_ERROR), Response::HTTP_OK, ['Content-Type' => 'application/json']);
    }

    public static function error(string $message): Response
    {
        return new Response(json_encode([
            'message' => $message,
        ], JSON_THROW_ON_ERROR), Response::HTTP_INTERNAL_SERVER_ERROR, ['Content-Type' => 'application/json']);
    }

    public function getReponse(): Response
    {
        return new Response(json_encode([
            'message' => $this->message,
            'data' => $this->array
        ]), $this->state, ['Content-Type' => 'application/json']);
    }
}
