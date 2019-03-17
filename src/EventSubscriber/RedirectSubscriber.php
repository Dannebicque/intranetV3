<?php

namespace App\EventSubscriber;

use App\Events;
use Symfony\Component\EventDispatcher\EventSubscriberInterface;
use Symfony\Component\HttpFoundation\RedirectResponse;
use Symfony\Component\Routing\RouterInterface;

class RedirectSubscriber implements EventSubscriberInterface
{
    /** @var RouterInterface */
    private $router;

    /**
     *
     * @param RouterInterface $router
     */
    public function __construct(
        RouterInterface $router
    ) {
        $this->router = $router;
    }

    public static function getSubscribedEvents()
    {
        return [
            Events::REDIRECT_TO_LOGIN => 'onRedirectToLogin',
            Events::CHOISIR_DEPARTEMENT_DEFAUT => 'onChoixDepartementDefaut',
        ];
    }

    public function onRedirectToLogin($event)
    {
        //logout
        return new RedirectResponse($this->router->generate('security_login', ['message' => $event->getSubject()]));
    }

    public function onChoixDepartementDefaut($event)
    {
        //logout
        return new RedirectResponse($this->router->generate('security_choix_departement', ['message' => $event->getSubject()]));
    }
}
