<?php
/*
 * Copyright (c) 2024. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Security/AccessDeniedHandler.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 23/02/2024 21:40
 */

// src/Security/AccessDeniedHandler.php

namespace App\Security;

use App\Event\UnauthorizedDepartementEvent;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Security\Core\Exception\AccessDeniedException;
use Symfony\Component\Security\Http\Authorization\AccessDeniedHandlerInterface;
use Twig\Environment;
use Twig\Error\LoaderError;
use Twig\Error\RuntimeError;
use Twig\Error\SyntaxError;

class AccessDeniedHandler implements AccessDeniedHandlerInterface
{
    public function __construct(private Environment $twig)
    {
    }

    /**
     * @throws SyntaxError
     * @throws RuntimeError
     * @throws LoaderError
     */
    public function handle(Request $request, AccessDeniedException $accessDeniedException): ?Response
    {
        if (!$accessDeniedException->getSubject() instanceof UnauthorizedDepartementEvent) {
            return null;
        }

        $content = $this->twig->render('security/access_denied.html.twig', [
            'exception' => $accessDeniedException,
        ]);

        return new Response($content, Response::HTTP_FORBIDDEN);
    }
}
