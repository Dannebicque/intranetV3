<?php

namespace App\EventSubscriber;

use App\Controller\TokenAuthenticatedController;
use App\Entity\Etudiant;
use App\Entity\Departement;
use App\Entity\Personnel;
use App\Events;
use App\Repository\DepartementRepository;
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

    /** @var Departement */
    private $departement;

    /** @var RouterInterface */
    private $router;

    private $departementRepository;
    private $session;
    private $eventDispatcher;
    private $authChecker;

    public function __construct(
        TokenStorageInterface $user,
        DepartementRepository $departementRepository,
        EventDispatcherInterface $eventDispatcher,
        SessionInterface $session,
        RouterInterface $router,
        AuthorizationCheckerInterface $authChecker
    ) {
        $this->user = $user;
        $this->departementRepository = $departementRepository;
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
                $this->departement = $this->departementRepository->findDepartementEtudiant($this->getUser());
                if ($this->departement === null) {
                    //On déclenche l'event
                    $event->setController(function() {
                        return new RedirectResponse($this->router->generate('security_login',
                            ['events' => Events::REDIRECT_TO_LOGIN, 'message' => 'pas-departement']));
                    });
                }
            } elseif ($this->getUser() instanceof Personnel) {
                if ($this->authChecker->isGranted('ROLE_PERMANENT')) {

                    if ($this->session->get('departement') !== null) {
                        $this->departement = $this->departementRepository->find($this->session->get('departement'));
                    }

                    if ($this->departement === null) {
                        echo 'pas de session';
                        $departements = $this->departementRepository->findDepartementPersonnelDefaut($this->getUser());

                        if (count($departements) > 1) {
                            echo 'plus d une departement  par défaut';

                            $event->setController(function() {
                                return new RedirectResponse($this->router->generate('security_choix_departement'));
                            });
                        } elseif (count($departements) === 1) {
                            echo 'une departement par defaut';
                            $this->departement = $departements[0];
                            $this->session->set('departement', $this->departement->getId()); //on sauvegarde
                        } else {
                            echo 'pas de departement par defaut';
                            //pas de departement par défaut, ou pas de departement du tout.
                            $departements = $this->departementRepository->findDepartementPersonnel($this->getUser());
                            if (count($departements) === 0) {
                                echo 'aucune departement';
                                //On déclenche l'event

                                $event->setController(function() {
                                    return new RedirectResponse($this->router->generate('security_login',
                                        ['events' => Events::REDIRECT_TO_LOGIN, 'message' => 'pas-departement']));
                                });
                            } else {
                                //donc il y a une departement, mais pas une par défaut.
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
