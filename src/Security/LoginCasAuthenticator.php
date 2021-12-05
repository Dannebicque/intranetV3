<?php

namespace App\Security;

use App\Event\CASAuthenticationFailureEvent;
use phpCAS;
use Symfony\Component\DependencyInjection\ParameterBag\ParameterBagInterface;
use Symfony\Component\HttpFoundation\JsonResponse;
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
use Symfony\Component\Security\Http\Authenticator\Passport\PassportInterface;
use Symfony\Component\Security\Http\Authenticator\Passport\SelfValidatingPassport;

class LoginCasAuthenticator extends AbstractAuthenticator
{
    private UrlGeneratorInterface $urlGenerator;
    private RouterInterface $router;
    private ParameterBagInterface $parameterBag;

    public function __construct(ParameterBagInterface $parameterBag, RouterInterface $router, UrlGeneratorInterface $urlGenerator)
    {
        $this->router = $router;
        $this->parameterBag = $parameterBag;
        $this->urlGenerator = $urlGenerator;
    }
    public function supports(Request $request): ?bool
    {
        return '/sso/cas' === $request->getPathInfo();
    }

    public function authenticate(Request $request): PassportInterface
    {
        $username = $this->getCredentials();
        if (null === $username) {
            // The token header was empty, authentication fails with HTTP Status
            // Code 401 "Unauthorized"
            throw new CustomUserMessageAuthenticationException('Authentification CAS incorrecte. Utilisateur inconnu.');
        }

        return new SelfValidatingPassport(new UserBadge($username));
    }

    public function getCredentials()
    {
        $cas_host = $this->parameterBag->get('CAS_HOST');
        $cas_context = $this->parameterBag->get('CAS_CONTECT');
        $cas_port = $this->parameterBag->get('CAS_PORT');
        //todo: ajouter le certificat ?
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

        $def_response = new JsonResponse($data, 403);
        $event = new CASAuthenticationFailureEvent($request, $exception, $def_response);

        return $event->getResponse();
    }

    public function start(Request $request, AuthenticationException $authException = null): Response
    {
        return new RedirectResponse(
            $this->router->generate('security_login')
        );
    }
}
