<?php

namespace App\Listener;

use Symfony\Component\HttpFoundation\RedirectResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\RouterInterface;
use Symfony\Component\Security\Core\Authentication\Token\TokenInterface;
use Symfony\Component\Security\Http\Authentication\AuthenticationSuccessHandlerInterface;

/**
 * Class AfterLoginRedirect
 *
 * @package App\AppListener
 */
class AfterLoginRedirect implements AuthenticationSuccessHandlerInterface
{
    private $router;

    /**
     * AfterLoginRedirection constructor.
     *
     * @param RouterInterface $router
     */
    public function __construct(RouterInterface $router)
    {
        $this->router = $router;
    }

    /**
     * @param Request        $request
     *
     * @param TokenInterface $token
     *
     * @return RedirectResponse
     */
    public function onAuthenticationSuccess(Request $request, TokenInterface $token)
    {
        $roles = $token->getRoles();

        $rolesTab = array_map(function ($role) {
            return $role->getRole();
        }, $roles);

        if (in_array('ROLE_SUPER_ADMIN', $rolesTab, true)) {
            // c'est un super administrateur : on le rediriger vers l'espace super-admin
            $redirection = new RedirectResponse($this->router->generate('super_admin_homepage'));
        } else if (in_array('ROLE_ADMINISTRATIF', $rolesTab, true)) {
            // c'est un administratif : on le rediriger vers l'espace administration
            $redirection = new RedirectResponse($this->router->generate('administratif_homepage'));

        } else {
            // c'est un utilisaeur étudiant ou prof : on le rediriger vers l'accueil
            $redirection = new RedirectResponse($this->router->generate('default_homepage'));
        }

        return $redirection;
    }
}