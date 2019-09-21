<?php
/**
 * Copyright (C) 9 / 2019 | David annebicque | IUT de Troyes - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetv3/src/Event/CASAuthenticationFailureEvent.php
 * @author     David Annebicque
 * @project intranetv3
 * @date 21/09/2019 17:39
 * @lastUpdate 21/09/2019 17:39
 */

namespace App\Event;

use Symfony\Component\EventDispatcher\Event;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Security\Core\Exception\AuthenticationException;

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
    public function getResponse()
    {
        return $this->response;
    }

    /**
     * @param Response $response
     */
    public function setResponse(Response $response)
    {
        $this->response = $response;
    }

    /**
     * @return Request
     */
    public function getRequest()
    {
        return $this->request;
    }

    /**
     * @return AuthenticationException
     */
    public function getException()
    {
        return $this->exception;
    }

    /**
     * @return string
     */
    public function getExceptionType()
    {
        return get_class($this->exception);
    }
}
