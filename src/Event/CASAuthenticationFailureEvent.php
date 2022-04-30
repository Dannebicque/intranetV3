<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Event/CASAuthenticationFailureEvent.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 29/06/2021 17:30
 */

namespace App\Event;

use function get_class;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Security\Core\Exception\AuthenticationException;
use Symfony\Contracts\EventDispatcher\Event;

class CASAuthenticationFailureEvent extends Event
{
    public function __construct(private readonly Request $request, private readonly AuthenticationException $exception, private Response $response)
    {
    }

    public function getResponse(): Response
    {
        return $this->response;
    }

    public function setResponse(Response $response): void
    {
        $this->response = $response;
    }

    public function getRequest(): Request
    {
        return $this->request;
    }

    public function getException(): AuthenticationException
    {
        return $this->exception;
    }

    public function getExceptionType(): string
    {
        return $this->exception::class;
    }
}
