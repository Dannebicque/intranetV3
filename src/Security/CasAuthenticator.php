<?php
/**
 * Copyright (C) 9 / 2019 | David annebicque | IUT de Troyes - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetv3/src/Security/CasAuthenticator.php
 * @author     David Annebicque
 * @project intranetv3
 * @date 30/09/2019 16:26
 * @lastUpdate 30/09/2019 16:26
 */

namespace App\Security;

use phpCAS;
use Symfony\Component\HttpFoundation\RedirectResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Security\Core\Authentication\Token\TokenInterface;
use Symfony\Component\Security\Core\Exception\AuthenticationException;
use Symfony\Component\Security\Core\User\UserInterface;
use Symfony\Component\Security\Core\User\UserProviderInterface;
use Symfony\Component\Security\Guard\AbstractGuardAuthenticator;

class CasAuthenticator extends AbstractGuardAuthenticator
{
    public function supports(Request $request)
    {
        return !in_array($request->getPathInfo(), ['/', '/fr/', '/fr/connexion']);
    }

    public function getCredentials(Request $request)
    {
        $cas_host = 'cas.univ-reims.fr';
        // Context of the CAS Server
        $cas_context = '/cas';
        // Port of your CAS server. Normally for a https server it's 443
        $cas_port = 443;
        //dump($request->headers->get('referer'));
        phpCAS::setDebug();
        phpCAS::setVerbose(true);
        phpCAS::client(CAS_VERSION_2_0, $cas_host, $cas_port, $cas_context);
        phpCAS::setFixedServiceURL('https://intranetv3.iut-troyes.univ-reims.fr/fr/tableau-de-bord');

        phpCAS::setNoCasServerValidation();
        phpCAS::forceAuthentication();
        dump(phpCAS::getUser());

        if (phpCAS::getUser()) {
            return phpCAS::getUser();
        }

        return null;

    }

    public function getUser($credentials, UserProviderInterface $userProvider)
    {
        dump($credentials);
        return $userProvider->loadUserByUsername($credentials);
    }

    public function checkCredentials($credentials, UserInterface $user)
    {
        return true;
    }

    public function onAuthenticationFailure(Request $request, AuthenticationException $exception)
    {
        // todo
    }

    public function onAuthenticationSuccess(Request $request, TokenInterface $token, $providerKey)
    {
        // todo
    }

    public function start(Request $request, AuthenticationException $authException = null)
    {
        dump($request->headers->get('referer'));

        return new RedirectResponse('cas.univ-reims.fr/cas/login?service=' . ($request->headers->get('referer')));
    }

    public function supportsRememberMe()
    {
        return false;
    }
}
