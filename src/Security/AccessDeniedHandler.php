<?php
/*
 * Copyright (c) 2022. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Security/AccessDeniedHandler.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 14/05/2022 10:52
 */

// src/Security/AccessDeniedHandler.php

namespace App\Security;

use App\Event\UnauthorizedDepartementEvent;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Security\Core\Exception\AccessDeniedException;
use Symfony\Component\Security\Http\Authorization\AccessDeniedHandlerInterface;
use Twig\Environment;

class AccessDeniedHandler implements AccessDeniedHandlerInterface
{
    public function __construct(private readonly Environment $twig)
    {
    }

    /**
     * @throws \Twig\Error\SyntaxError
     * @throws \Twig\Error\RuntimeError
     * @throws \Twig\Error\LoaderError
     */
    public function handle(Request $request, AccessDeniedException $accessDeniedException): ?Response
    {
        if (!$accessDeniedException->getSubject() instanceof UnauthorizedDepartementEvent) {
            return null;
        }

        $content = $this->twig->render('security/access_denied.html.twig', [
            'exception' => $accessDeniedException,
        ]);

        return new Response($content, \Symfony\Component\HttpFoundation\Response::HTTP_FORBIDDEN);
    }
}
