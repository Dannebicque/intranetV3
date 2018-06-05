<?php

namespace App\Controller;

use Symfony\Component\HttpFoundation\RedirectResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\Security\Http\Authentication\AuthenticationUtils;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Security\Core\Encoder\UserPasswordEncoderInterface;
use Symfony\Component\Security\Core\Exception\CustomUserMessageAuthenticationException;

/**
 * Class SecurityController
 * @package App\Controller
 * @Route("/{_locale}",
 *     requirements={"_locale": "fr|en"},
 *     defaults={"_locale":"fr"})
 */
class SecurityController extends Controller
{
    private $encoder;

    public function __construct(UserPasswordEncoderInterface $encoder)
    {
        $this->encoder = $encoder;
    }

    /**
     * @Route("/login", name="security_login")
     * @param AuthenticationUtils $helper
     *
     * @return Response
     */
    public function login(AuthenticationUtils $helper): Response
    {
        return $this->render('security/login.html.twig', [
            // dernier username saisi (si il y en a un)
            'last_username' => $helper->getLastUsername(),
            // La derniere erreur de connexion (si il y en a une)
            'error' => $helper->getLastAuthenticationError(),
        ]);
    }

    /**
     * @Route("/logout", name="security_logout")
     */
    public function logout(): void
    {

    }

    /**
     * @Route("/password-lost", name="security_password_lost")
     */
    public function passwordLost(Request $request): Response
    {
        $submittedToken = $request->request->get('token');

        if ($request->isMethod('POST') && $this->isCsrfTokenValid('password-lost', $submittedToken)) {

            //todo: password-lost : token + mail
            return $this->render('security/passwordLostConfirm.html.twig');
        }

        return $this->render('security/passwordLost.html.twig');
    }

    /**
     * @Route("/lock", name="security_lock")
     * @param Request $request
     *
     * @return Response
     */
    public function lock(Request $request): Response
    {
        if ($request->isMethod('POST')) {
            $credential = $request->request->get('password');
            $isPasswordValid = $this->encoder->isPasswordValid($this->getUser(), $credential);

            if ($isPasswordValid) {
                return new RedirectResponse($this->generateUrl('default_index'));
            }

            throw new CustomUserMessageAuthenticationException('Invalid username or password');
            //todo: ca redirige vers le login, pas forcément top
        }

        return $this->render('security/lock.html.twig');
    }
}
