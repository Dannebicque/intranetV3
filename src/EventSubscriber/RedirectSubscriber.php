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
            Events::CHOISIR_FORMATION_DEFAUT => 'onChoixFormationDefaut',
        ];
    }

    public function onRedirectToLogin($event)
    {
        //logout
        return new RedirectResponse($this->router->generate('security_login', ['message' => $event->getSubject()]));
    }

    public function onChoixFormationDefaut($event)
    {
        //logout
        return new RedirectResponse($this->router->generate('security_choix_formation', ['message' => $event->getSubject()]));
    }
}
