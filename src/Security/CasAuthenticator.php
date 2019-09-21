<?php
/**
 * Copyright (C) 9 / 2019 | David annebicque | IUT de Troyes - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetv3/src/Security/CasAuthenticator.php
 * @author     David Annebicque
 * @project intranetv3
 * @date 21/09/2019 17:39
 * @lastUpdate 21/09/2019 17:38
 */

namespace App\Security;

use App\Event\CASAuthenticationFailureEvent;
use Symfony\Component\EventDispatcher\EventDispatcherInterface;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\RedirectResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Security\Core\Authentication\Token\TokenInterface;
use Symfony\Component\Security\Core\Exception\AuthenticationException;
use Symfony\Component\Security\Core\User\UserInterface;
use Symfony\Component\Security\Core\User\UserProviderInterface;
use Symfony\Component\Security\Guard\AbstractGuardAuthenticator;

class CasAuthenticator extends AbstractGuardAuthenticator
{
    protected $ticket = 'ticket';
    protected $server_login_url = 'https://cas.univ-reims.fr/cas/';
    protected $options;
    private $eventDispatcher;

    /**
     * Process configuration
     *
     * @param array $config
     */
    public function __construct(EventDispatcherInterface $eventDispatcher)
    {

        $this->eventDispatcher = $eventDispatcher;
    }

    public function supports(Request $request)
    {
        return '/fr/connexion/CAS' === $request->getPathInfo();


        //return (bool) $request->get($this->ticket);

    }

    public function getCredentials(Request $request)
    {
        // Full Hostname of your CAS Server
        $cas_host = 'cas.univ-reims.fr';
// Context of the CAS Server
        $cas_context = '/cas';
// Port of your CAS server. Normally for a https server it's 443
        $cas_port = 443;

        \phpCAS::setDebug();
        \phpCAS::setVerbose(true);
        \phpCAS::client(CAS_VERSION_2_0, $cas_host, $cas_port, $cas_context);

        return \phpCAS::forceAuthentication();

        //\phpCAS::getUser();
//        $url = $this->server_login_url . 'login?' . $this->ticket . '=' .
//            $request->get($this->ticket) . '&service=' . urlencode($this->removeCasTicket($request->getUri()));
//        dump($url);
//
//        return new RedirectResponse($url);
        //return [];
    }

    public function getUser($credentials, UserProviderInterface $userProvider)
    {
        // todo
    }

    public function checkCredentials($credentials, UserInterface $user)
    {
        // todo
    }

    public function onAuthenticationFailure(Request $request, AuthenticationException $exception)
    {
        // todo
        $data = [
            'message' => strtr($exception->getMessageKey(), $exception->getMessageData())
        ];

        $def_response = new JsonResponse($data, 403);
        $event = new CASAuthenticationFailureEvent($request, $exception, $def_response);
        $this->eventDispatcher->dispatch(CASAuthenticationFailureEvent::POST_MESSAGE, $event);

        return $event->getResponse();
    }

    public function onAuthenticationSuccess(Request $request, TokenInterface $token, $providerKey)
    {
        // todo
        // If authentication was successful, redirect to the current URI with
        // the ticket parameter removed so that it is hidden from end-users.
        if ($request->query->has($this->ticket)) {
            return new RedirectResponse($this->removeCasTicket($request->getUri()));
        } else {
            return null;
        }
    }

    public function start(Request $request, AuthenticationException $authException = null)
    {
        // todo
        return new RedirectResponse($this->server_login_url . 'login?service=' . urlencode($request->getUri()));

    }

    public function supportsRememberMe()
    {
        // todo
    }

    protected function removeCasTicket($uri)
    {
        $parsed_url = parse_url($uri);
        // If there are no query parameters, then there is nothing to do.
        if (empty($parsed_url['query'])) {
            return $uri;
        }
        parse_str($parsed_url['query'], $query_params);
        // If there is no 'ticket' parameter, there is nothing to do.
        if (!isset($query_params[$this->ticket])) {
            return $uri;
        }
        // Remove the ticket parameter and rebuild the query string.
        unset($query_params[$this->ticket]);
        if (empty($query_params)) {
            unset($parsed_url['query']);
        } else {
            $parsed_url['query'] = http_build_query($query_params);
        }
        // Rebuild the URI from the parsed components.
        // Source: https://secure.php.net/manual/en/function.parse-url.php#106731
        $scheme = isset($parsed_url['scheme']) ? $parsed_url['scheme'] . '://' : '';
        $host = isset($parsed_url['host']) ? $parsed_url['host'] : '';
        $port = isset($parsed_url['port']) ? ':' . $parsed_url['port'] : '';
        $user = isset($parsed_url['user']) ? $parsed_url['user'] : '';
        $pass = isset($parsed_url['pass']) ? ':' . $parsed_url['pass'] : '';
        $pass = ($user || $pass) ? "$pass@" : '';
        $path = isset($parsed_url['path']) ? $parsed_url['path'] : '';
        $query = isset($parsed_url['query']) ? '?' . $parsed_url['query'] : '';
        $fragment = isset($parsed_url['fragment']) ? '#' . $parsed_url['fragment'] : '';

        return "$scheme$user$pass$host$port$path$query$fragment";
    }
}
