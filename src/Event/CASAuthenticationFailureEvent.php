<?php
// Copyright (C) 11 / 2019 | David annebicque | IUT de Troyes - All Rights Reserved
// @file /Users/davidannebicque/htdocs/intranetv3/src/Event/CASAuthenticationFailureEvent.php
// @author     David Annebicque
// @project intranetv3
// @date 25/11/2019 10:20
// @lastUpdate 23/11/2019 09:14

namespace App\Event;

use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Security\Core\Exception\AuthenticationException;
use Symfony\Contracts\EventDispatcher\Event;

class CASAuthenticationFailureEvent extends Event
{

    const POST_MESSAGE = 'cas_auth.authentication.failure';
    private $request;
    private $exception;
    private $response;

    public function __construct(Request $request, AuthenticationException $exception, Response $response)
    {
        $this->request = $request;
        $this->exception = $exception;
        $this->response = $response;
    }

    /**
     * @return Response
     */
    public function getResponse(): Response
    {
        return $this->response;
    }

    /**
     * @param Response $response
     */
    public function setResponse(Response $response): void
    {
        $this->response = $response;
    }

    /**
     * @return Request
     */
    public function getRequest(): Request
    {
        return $this->request;
    }

    /**
     * @return AuthenticationException
     */
    public function getException(): AuthenticationException
    {
        return $this->exception;
    }

    /**
     * @return string
     */
    public function getExceptionType(): string
    {
        return get_class($this->exception);
    }
}
