<?php
/*
 * Copyright (c) 2022. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Security/LoginCasAuthenticator.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 10/12/2022 10:25
 */

namespace App\Security;

use App\Event\CASAuthenticationFailureEvent;
use phpCAS;
use Symfony\Component\DependencyInjection\ParameterBag\ParameterBagInterface;
use Symfony\Component\HttpFoundation\RedirectResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Generator\UrlGeneratorInterface;
use Symfony\Component\Routing\RouterInterface;
use Symfony\Component\Security\Core\Authentication\Token\TokenInterface;
use Symfony\Component\Security\Core\Exception\AuthenticationException;
use Symfony\Component\Security\Core\Exception\CustomUserMessageAuthenticationException;
use Symfony\Component\Security\Http\Authenticator\AbstractAuthenticator;
use Symfony\Component\Security\Http\Authenticator\Passport\Badge\UserBadge;
use Symfony\Component\Security\Http\Authenticator\Passport\Passport;
use Symfony\Component\Security\Http\Authenticator\Passport\SelfValidatingPassport;

class LoginCasAuthenticator extends AbstractAuthenticator
{
    public function __construct(private readonly ParameterBagInterface $parameterBag, private readonly RouterInterface $router, private readonly UrlGeneratorInterface $urlGenerator)
    {
    }

    public function supports(Request $request): ?bool
    {
        return '/sso/cas' === $request->getPathInfo();
    }

    public function authenticate(Request $request): Passport
    {
        $username = $this->getCredentials();
        if (null === $username) {
            // The token header was empty, authentication fails with HTTP Status
            // Code 401 "Unauthorized"
            throw new CustomUserMessageAuthenticationException('Authentification CAS incorrecte. Utilisateur inconnu.');
        }

        return new SelfValidatingPassport(new UserBadge($username));
    }

    public function getCredentials(): ?string
    {
        $cas_host = $this->parameterBag->get('CAS_HOST');
        $cas_context = $this->parameterBag->get('CAS_CONTEXT');
        $cas_port = (int)$this->parameterBag->get('CAS_PORT');
        $client_service_name = $this->parameterBag->get('CAS_CLIENT_SERVICE_NAME');
        phpCAS::setVerbose(true);
        phpCAS::client(CAS_VERSION_2_0, $cas_host, $cas_port, $cas_context, $client_service_name);
        phpCAS::setFixedServiceURL($this->urlGenerator->generate('cas_return', [],
            UrlGeneratorInterface::ABSOLUTE_URL));
        phpCAS::setNoCasServerValidation();
        phpCAS::forceAuthentication();

        if (phpCAS::getUser()) {
            return phpCAS::getUser();
        }

        return null;
    }

    public function onAuthenticationSuccess(Request $request, TokenInterface $token, string $firewallName): ?Response
    {
        return new RedirectResponse(
            $this->router->generate('default_homepage')
        );
    }

    public function onAuthenticationFailure(Request $request, AuthenticationException $exception): ?Response
    {
        $data = [
            'message' => strtr($exception->getMessageKey(), $exception->getMessageData()),
        ];

        $def_response = new RedirectResponse(
            $this->router->generate('security_login', ['message' => $data])
        ); // new JsonResponse($data, Response::HTTP_FORBIDDEN);

        return (new CASAuthenticationFailureEvent($request, $exception, $def_response))->getResponse();
    }

    public function start(Request $request, AuthenticationException $authException = null): Response
    {
        return new RedirectResponse(
            $this->router->generate('security_login')
        );
    }
}
