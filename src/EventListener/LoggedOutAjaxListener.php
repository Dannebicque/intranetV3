<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/EventListener/LoggedOutAjaxListener.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 12/10/2021 20:44
 */

namespace App\EventListener;

use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpKernel\Event\ExceptionEvent;
use Symfony\Component\Security\Core\Exception\AccessDeniedException;
use Symfony\Component\Security\Core\Security;

//https://backbeat.tech/blog/logged-out-ajax-requests-in-symfony-applications
class LoggedOutAjaxListener
{
    private $security;

    public function __construct(Security $security)
    {
        $this->security = $security;
    }

    public function onKernelException(ExceptionEvent $event)
    {
        $request = $event->getRequest();
        if (($request->getAcceptableContentTypes()[0] ?? '') !== 'application/json') {
            // Not an ajax request
            return;
        }

        if (!$event->getThrowable() instanceof AccessDeniedException) {
            // Pass all other exceptions to the next exception listener
            return;
        }

        if ($this->security->isGranted('ROLE_USER')) {
            // The user is logged in already, the access denied exception is for something else
            return;
        }

        $event->setResponse(new JsonResponse([
            'message' => "You're not logged in! Use another tab to login, then try the request again.",
        ]));
    }
}
