<?php

namespace App\EventSubscriber;

use App\Controller\TokenAuthenticatedController;
use App\Entity\Etudiant;
use App\Entity\Formation;
use App\Entity\Personnel;
use App\Events;
use App\Repository\FormationRepository;
use Symfony\Component\EventDispatcher\EventDispatcherInterface;
use Symfony\Component\HttpFoundation\RedirectResponse;
use Symfony\Component\HttpFoundation\Session\SessionInterface;
use Symfony\Component\HttpKernel\Event\FilterControllerEvent;
use Symfony\Component\EventDispatcher\EventSubscriberInterface;
use Symfony\Component\HttpKernel\KernelEvents;
use Symfony\Component\Routing\RouterInterface;
use Symfony\Component\Security\Core\Authentication\Token\Storage\TokenStorageInterface;
use Symfony\Component\Security\Core\Authorization\AuthorizationCheckerInterface;

class TokenSubscriber implements EventSubscriberInterface
{
    private $user;

    /** @var Formation */
    private $formation;

    /** @var RouterInterface */
    private $router;

    private $formationRepository;
    private $session;
    private $eventDispatcher;
    private $authChecker;

    public function __construct(
        TokenStorageInterface $user,
        FormationRepository $formationRepository,
        EventDispatcherInterface $eventDispatcher,
        SessionInterface $session,
        RouterInterface $router,
        AuthorizationCheckerInterface $authChecker
    ) {
        $this->user = $user;
        $this->formationRepository = $formationRepository;
        $this->eventDispatcher = $eventDispatcher;
        $this->session = $session;
        $this->router = $router;
        $this->authChecker = $authChecker;
    }

    /**
     * @param FilterControllerEvent $event
     *
     * @throws \Doctrine\ORM\NonUniqueResultException
     */
    public function onKernelController(FilterControllerEvent $event)
    {
        $controller = $event->getController();

        /*
         * $controller passed can be either a class or a Closure.
         * This is not usual in Symfony but it may happen.
         * If it is a class, it comes in array format
         */
        if (!is_array($controller)) {
            return;
        }

        if ($controller[0] instanceof TokenAuthenticatedController) {

            if ($this->getUser() instanceof Etudiant) {
                $this->formation = $this->formationRepository->findFormationEtudiant($this->getUser());
                if ($this->formation === null) {
                    //On déclenche l'event
                    $event->setController(function() {
                        return new RedirectResponse($this->router->generate('security_login',
                            ['events' => Events::REDIRECT_TO_LOGIN, 'message' => 'pas-formation']));
                    });
                }
            } elseif ($this->getUser() instanceof Personnel) {
                if ($this->authChecker->isGranted('ROLE_PERMANENT')) {

                    if ($this->session->get('formation') !== null) {
                        $this->formation = $this->formationRepository->find($this->session->get('formation'));
                    }

                    if ($this->formation === null) {
                        echo 'pas de session';
                        $formations = $this->formationRepository->findFormationPersonnelDefaut($this->getUser());

                        if (count($formations) > 1) {
                            echo 'plus d une formation  par défaut';

                            $event->setController(function() {
                                return new RedirectResponse($this->router->generate('security_choix_formation'));
                            });
                        } elseif (count($formations) === 1) {
                            echo 'une formation par defaut';
                            $this->formation = $formations[0];
                            $this->session->set('formation', $this->formation->getId()); //on sauvegarde
                        } else {
                            echo 'pas de formation par defaut';
                            //pas de formation par défaut, ou pas de formation du tout.
                            $formations = $this->formationRepository->findFormationPersonnel($this->getUser());
                            if (count($formations) === 0) {
                                echo 'aucune formation';
                                //On déclenche l'event

                                $event->setController(function() {
                                    return new RedirectResponse($this->router->generate('security_login',
                                        ['events' => Events::REDIRECT_TO_LOGIN, 'message' => 'pas-formation']));
                                });
                            } else {
                                //donc il y a une formation, mais pas une par défaut.
                                echo 'des formations, mais pas par défaut';

                                $event->setController(function() {
                                    return new RedirectResponse($this->router->generate('security_choix_formation'));
                                });
                            }
                        }
                    }
                }
            } else {
                //ni étudiant, ni personnel... étrange
                $event->setController(function() {
                    return new RedirectResponse($this->router->generate('security_login',
                        ['events' => Events::REDIRECT_TO_LOGIN, 'message' => 'erreur-type-user']));
                });
            }
        }
    }

    private function getUser()
    {
        if ($this->user->getToken() !== null) {
            return $this->user->getToken()->getUser();
        }

        return null;
    }

    public static function getSubscribedEvents()
    {
        return [
            KernelEvents::CONTROLLER => 'onKernelController',
        ];
    }
}