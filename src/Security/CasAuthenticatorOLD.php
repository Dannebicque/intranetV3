<?php
// Copyright (C) 11 / 2019 | David annebicque | IUT de Troyes - All Rights Reserved
// @file /Users/davidannebicque/htdocs/intranetv3/src/Security/CasAuthenticatorOLD.php
// @author     David Annebicque
// @project intranetv3
// @date 25/11/2019 10:21
// @lastUpdate 23/11/2019 09:14

namespace App\Security;

use App\Event\CASAuthenticationFailureEvent;
use App\Repository\DepartementRepository;
use App\Repository\EtudiantRepository;
use App\Repository\PersonnelRepository;
use phpCAS;
use Symfony\Component\EventDispatcher\EventDispatcherInterface;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\RedirectResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Session\SessionInterface;
use Symfony\Component\Routing\Generator\UrlGeneratorInterface;
use Symfony\Component\Security\Core\Authentication\Token\TokenInterface;
use Symfony\Component\Security\Core\Exception\AuthenticationException;
use Symfony\Component\Security\Core\User\UserInterface;
use Symfony\Component\Security\Core\User\UserProviderInterface;
use Symfony\Component\Security\Guard\AbstractGuardAuthenticator;

class CasAuthenticatorOLD extends AbstractGuardAuthenticator
{
    protected $ticket = 'ticket';
    protected $server_login_url = 'https://cas.univ-reims.fr/cas/';
    protected $options;
    private $eventDispatcher;
    private $etudiantRepository;
    private $personnelRepository;
    private $departementRepository;
    private $user;
    private $urlGenerator;
    private $session;


    /**
     * Process configuration
     *
     * @param EventDispatcherInterface $eventDispatcher
     * @param EtudiantRepository       $etudiantRepository
     * @param PersonnelRepository      $personnelRepository
     * @param UrlGeneratorInterface    $urlGenerator
     * @param DepartementRepository    $departementRepository
     * @param SessionInterface         $session
     */
    public function __construct(
        EventDispatcherInterface $eventDispatcher,
        EtudiantRepository $etudiantRepository,
        PersonnelRepository $personnelRepository,
        UrlGeneratorInterface $urlGenerator,
        DepartementRepository $departementRepository,
        SessionInterface $session
    ) {

        $this->eventDispatcher = $eventDispatcher;
        $this->personnelRepository = $personnelRepository;
        $this->etudiantRepository = $etudiantRepository;
        $this->urlGenerator = $urlGenerator;
        $this->departementRepository = $departementRepository;
        $this->session = $session;
    }

    public function supports(Request $request)
    {
        return !in_array($request->getPathInfo(), ['/', '/fr/', '/fr/connexion']);

        //return '/fr/connexion/CAS' === $request->getPathInfo();


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
        //dump($request->headers->get('referer'));
        phpCAS::setDebug();
        phpCAS::setVerbose(true);
        phpCAS::client(CAS_VERSION_2_0, $cas_host, $cas_port, $cas_context);

        if ($request->headers->get('referer') === null) {
            phpCAS::setFixedServiceURL('https://intranetv3.iut-troyes.univ-reims.fr');
        } else {
            phpCAS::setFixedServiceURL($request->headers->get('referer'));
        }
        phpCAS::setNoCasServerValidation();
        phpCAS::forceAuthentication();
        dump(phpCAS::getUser());

        if (phpCAS::getUser()) {
            return phpCAS::getUser();
        }

        //return null;
    }

    public function getUser($credentials, UserProviderInterface $userProvider)
    {
        dump($credentials);

        return $userProvider->loadUserByUsername($credentials);
//        dump($credentials);
//        $userPersonnel = $this->personnelRepository->findOneBy(['username' => $credentials['username']]);
//        $userEtudiant = $this->etudiantRepository->findOneBy(['username' => $credentials['username']]);
//
//        if (!$userPersonnel && !$userEtudiant) {
//            // fail authentication with a custom error
//            throw new CustomUserMessageAuthenticationException('Username could not be found.');
//        }
//
//        if ($userPersonnel !== null && $userEtudiant === null) {
//            $this->user = $userPersonnel;
//
//            return $userPersonnel;
//        }
//
//        if ($userPersonnel === null && $userEtudiant !== null) {
//            $this->user = $userEtudiant;
//
//            return $userEtudiant;
//        }
    }

    public function checkCredentials($credentials, UserInterface $user)
    {
        // todo
        return true;
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
        if (phpCAS::isInitialized()) {
            $token->setAttributes(phpCAS::getAttributes());
        }

//        dump('authentifié');
//        dump('ok');
//        dump($this->removeCasTicket($request->getUri()));
//
//        $rolesTab = $token->getRoleNames();
//
//        if (in_array('ROLE_SUPER_ADMIN', $rolesTab, true)) {
//            // c'est un super administrateur : on le rediriger vers l'espace super-admin
//            $redirection = new RedirectResponse($this->urlGenerator->generate('super_admin_homepage'));
//        } elseif (in_array('ROLE_ADMINISTRATIF', $rolesTab, true)) {
//            // c'est un administratif : on le rediriger vers l'espace administration
//            $redirection = new RedirectResponse($this->urlGenerator->generate('administratif_homepage'));
//        } elseif (in_array('ROLE_PERMANENT', $rolesTab, true) || in_array('ROLE_ETUDIANT', $rolesTab, true)) {
//            // c'est un utilisaeur étudiant ou prof : on le rediriger vers l'accueil
//
//            if (in_array('ROLE_PERMANENT', $rolesTab, true)) {
//                //init de la session departement
//                $departements = $this->departementRepository->findDepartementPersonnelDefaut($this->user);
//                if (count($departements) > 1) {
//                    return new RedirectResponse($this->urlGenerator->generate('security_choix_departement'));
//                }
//
//                if (count($departements) === 1) {
//                    /** @var Departement $departement */
//                    $departement = $departements[0];
//                    $this->session->set('departement', $departement->getUuidString()); //on sauvegarde
//                } else {
//                    echo 'pas de departement par defaut';
//                    //pas de departement par défaut, ou pas de departement du tout.
//                    $departements = $this->departementRepository->findDepartementPersonnel($this->user);
//                    if (count($departements) === 0) {
//                        return new RedirectResponse($this->urlGenerator->generate('security_login',
//                            ['events' => Events::REDIRECT_TO_LOGIN, 'message' => 'pas-departement']));
//                    }
//
//                    //donc il y a une departement, mais pas une par défaut.
//                    return new RedirectResponse($this->urlGenerator->generate('security_choix_departement'));
//                }
//            }
//
////            if ($targetPath = $this->getTargetPath($request->getSession(), $providerKey)) {
////                return new RedirectResponse($targetPath);
////            }
//
//            $redirection = new RedirectResponse($this->urlGenerator->generate('default_homepage'));
//        } else {
//            //c'est aucun des rôles...
//            $redirection = new RedirectResponse($this->urlGenerator->generate('security_login',
//                ['message' => 'erreur_role']));
//        }
//
//        return $redirection;


        // If authentication was successful, redirect to the current URI with
        // the ticket parameter removed so that it is hidden from end-users.
//        if ($request->query->has($this->ticket)) {
//            dump('ok');
//            dump($this->removeCasTicket($request->getUri()));
//            //return new RedirectResponse($this->removeCasTicket($request->getUri()));
//        } else {
//            return null;
//        }
    }

    public function start(Request $request, AuthenticationException $authException = null)
    {
        return new RedirectResponse($this->server_login_url . 'login?service=' . ($request->headers->get('referer')));
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

    protected function getDefaultSuccessRedirectUrl()
    {
        return $this->urlGenerator->generate('default_homepage');
    }
}
