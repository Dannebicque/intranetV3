<?php
/**
 * *
 *  *  Copyright (C) $month.$year | David annebicque | IUT de Troyes - All Rights Reserved
 *  *
 *  *
 *  * @file /Users/davidannebicque/htdocs/intranetv3/src/Security/LoginFormAuthenticator.php
 *  * @author     David annebicque
 *  * @project intranetv3
 *  * @date 4/30/19 3:06 PM
 *  * @lastUpdate 4/30/19 3:05 PM
 *  *
 *
 */

namespace App\Security;

use App\Entity\Departement;
use App\Entity\Etudiant;
use App\Entity\Personnel;
use App\Events;
use App\Repository\DepartementRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\HttpFoundation\RedirectResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Session\SessionInterface;
use Symfony\Component\Routing\Generator\UrlGeneratorInterface;
use Symfony\Component\Security\Core\Authentication\Token\TokenInterface;
use Symfony\Component\Security\Core\Encoder\UserPasswordEncoderInterface;
use Symfony\Component\Security\Core\Exception\CustomUserMessageAuthenticationException;
use Symfony\Component\Security\Core\Exception\InvalidCsrfTokenException;
use Symfony\Component\Security\Core\Security;
use Symfony\Component\Security\Core\User\UserInterface;
use Symfony\Component\Security\Core\User\UserProviderInterface;
use Symfony\Component\Security\Csrf\CsrfToken;
use Symfony\Component\Security\Csrf\CsrfTokenManagerInterface;
use Symfony\Component\Security\Guard\Authenticator\AbstractFormLoginAuthenticator;
use Symfony\Component\Security\Http\Util\TargetPathTrait;
use function in_array;

class LoginFormAuthenticator extends AbstractFormLoginAuthenticator
{
    use TargetPathTrait;

    private $entityManager;
    private $urlGenerator;
    private $csrfTokenManager;
    private $passwordEncoder;
    private $session;
    private $user;

    /** @var DepartementRepository */
    private $departementRepository;

    public function __construct(
        EntityManagerInterface $entityManager,
        UrlGeneratorInterface $urlGenerator,
        CsrfTokenManagerInterface $csrfTokenManager,
        UserPasswordEncoderInterface $passwordEncoder,
        DepartementRepository $departementRepository,
        SessionInterface $session

    ) {
        $this->entityManager = $entityManager;
        $this->urlGenerator = $urlGenerator;
        $this->csrfTokenManager = $csrfTokenManager;
        $this->passwordEncoder = $passwordEncoder;
        $this->departementRepository = $departementRepository;
        $this->session = $session;
    }

    public function supports(Request $request): bool
    {
        return 'security_login' === $request->attributes->get('_route')
            && $request->isMethod('POST');
    }

    public function getCredentials(Request $request)
    {
        $credentials = [
            'username' => $request->request->get('username'),
            'password' => $request->request->get('password'),
            'csrf_token' => $request->request->get('_csrf_token'),
        ];
        $request->getSession()->set(
            Security::LAST_USERNAME,
            $credentials['username']
        );

        return $credentials;
    }

    public function getUser($credentials, UserProviderInterface $userProvider)
    {
        $token = new CsrfToken('authenticate', $credentials['csrf_token']);
        if (!$this->csrfTokenManager->isTokenValid($token)) {
            throw new InvalidCsrfTokenException();
        }

        $userPersonnel = $this->entityManager->getRepository(Personnel::class)->findOneBy(['username' => $credentials['username']]);
        $userEtudiant = $this->entityManager->getRepository(Etudiant::class)->findOneBy(['username' => $credentials['username']]);

        if (!$userPersonnel && !$userEtudiant) {
            // fail authentication with a custom error
            throw new CustomUserMessageAuthenticationException('Username could not be found.');
        }

        if ($userPersonnel !== null && $userEtudiant === null) {
            $this->user = $userPersonnel;
            return $userPersonnel;
        }

        if ($userPersonnel === null && $userEtudiant !== null) {
            $this->user = $userEtudiant;
            return $userEtudiant;
        }
            return null;

    }

    public function checkCredentials($credentials, UserInterface $user): bool
    {
        return $this->passwordEncoder->isPasswordValid($user, $credentials['password']);
    }

    public function onAuthenticationSuccess(Request $request, TokenInterface $token, $providerKey)
    {
        if ($targetPath = $this->getTargetPath($request->getSession(), $providerKey)) {
            return new RedirectResponse($targetPath);
        }

        $roles = $token->getRoleNames();

        $rolesTab = array_map(static function($role) {
            return $role->getRole();
        }, $roles);

        if (in_array('ROLE_SUPER_ADMIN', $rolesTab, true)) {
            // c'est un super administrateur : on le rediriger vers l'espace super-admin
            $redirection = new RedirectResponse($this->urlGenerator->generate('super_admin_homepage'));
        } elseif (in_array('ROLE_ADMINISTRATIF', $rolesTab, true)) {
            // c'est un administratif : on le rediriger vers l'espace administration
            $redirection = new RedirectResponse($this->urlGenerator->generate('administratif_homepage'));
        } elseif (in_array('ROLE_PERMANENT', $rolesTab, true) || in_array('ROLE_ETUDIANT', $rolesTab, true)) {
            // c'est un utilisaeur étudiant ou prof : on le rediriger vers l'accueil

            if (in_array('ROLE_PERMANENT', $rolesTab, true)) {
                //init de la session departement
                $departements = $this->departementRepository->findDepartementPersonnelDefaut($this->user);
                if (count($departements) > 1) {
                    return new RedirectResponse($this->urlGenerator->generate('security_choix_departement'));
                }

                if (count($departements) === 1) {
                    /** @var Departement $departement */
                    $departement = $departements[0];
                    $this->session->set('departement', $departement->getUuidString()); //on sauvegarde
                } else {
                    echo 'pas de departement par defaut';
                    //pas de departement par défaut, ou pas de departement du tout.
                    $departements = $this->departementRepository->findDepartementPersonnel($this->user);
                    if (count($departements) === 0) {
                        return new RedirectResponse($this->urlGenerator->generate('security_login',
                            ['events' => Events::REDIRECT_TO_LOGIN, 'message' => 'pas-departement']));
                    }
                    //donc il y a une departement, mais pas une par défaut.
                    return new RedirectResponse($this->urlGenerator->generate('security_choix_departement'));
                }
            }

            $redirection = new RedirectResponse($this->urlGenerator->generate('default_homepage'));
        } else {
            //c'est aucun des rôles...
            $redirection = new RedirectResponse($this->urlGenerator->generate('security_login',
                ['message' => 'erreur_role']));
        }

        return $redirection;
    }

    protected function getLoginUrl(): string
    {
        return $this->urlGenerator->generate('security_login');
    }
}
