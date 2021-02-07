<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Security/CasAuthenticator.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 07/02/2021 11:10
 */

namespace App\Security;

use App\Event\CASAuthenticationFailureEvent;
use App\Repository\DepartementRepository;
use phpCAS;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\Session\SessionInterface;
use Symfony\Component\Routing\Generator\UrlGeneratorInterface;
use Symfony\Component\Security\Core\Authentication\Token\TokenInterface;
use Symfony\Component\Security\Core\Exception\AuthenticationException;
use Symfony\Component\Security\Core\User\UserInterface;
use Symfony\Component\Security\Core\User\UserProviderInterface;
use Symfony\Component\Security\Guard\AbstractGuardAuthenticator;

class CasAuthenticator extends AbstractGuardAuthenticator
{
    private $urlGenerator;
    private $user;
    private $session;

    /** @var DepartementRepository */
    private $departementRepository;

    public function __construct(
        UrlGeneratorInterface $urlGenerator,
        DepartementRepository $departementRepository,
        SessionInterface $session
    ) {
        $this->urlGenerator = $urlGenerator;
        $this->departementRepository = $departementRepository;
        $this->session = $session;
    }

    public function supports(Request $request): bool
    {
        return '/sso/cas' === $request->getPathInfo();
    }

    public function getCredentials(Request $request)
    {
        $cas_host = 'cas.univ-reims.fr';
        // Context of the CAS Server
        $cas_context = '/cas';
        // Port of your CAS server. Normally for a https server it's 443
        $cas_port = 443;

        phpCAS::setDebug();
        phpCAS::setVerbose(true);
        phpCAS::client(CAS_VERSION_2_0, $cas_host, $cas_port, $cas_context);
        phpCAS::setFixedServiceURL($this->urlGenerator->generate('cas_return', [],
            UrlGeneratorInterface::ABSOLUTE_URL));
        phpCAS::setNoCasServerValidation();
        phpCAS::forceAuthentication();

        if (phpCAS::getUser()) {
            return phpCAS::getUser();
        }

        return null;
    }

    public function getUser($credentials, UserProviderInterface $userProvider): ?UserInterface
    {
        $this->user = $userProvider->loadUserByUsername($credentials);

        return $this->user;
    }

    public function checkCredentials($credentials, UserInterface $user): bool
    {
        return true;
    }

    public function onAuthenticationFailure(Request $request, AuthenticationException $exception)
    {
        $data = [
            'message' => strtr($exception->getMessageKey(), $exception->getMessageData()),
        ];

        $def_response = new JsonResponse($data, 403);
        $event = new CASAuthenticationFailureEvent($request, $exception, $def_response);

        return $event->getResponse();
    }

    /**
     * @param string $providerKey
     */
    public function onAuthenticationSuccess(Request $request, TokenInterface $token, $providerKey): ?Response
    {
        return AbstractAuthenticator::onAuthenticationSuccess(
            $this->urlGenerator,
            $this->session,
            $token->getRoleNames(),
            $this->departementRepository,
            $this->user);
    }

    public function supportsRememberMe(): bool
    {
        return false;
    }

    public function start(Request $request, AuthenticationException $authException = null)
    {
    }
}
