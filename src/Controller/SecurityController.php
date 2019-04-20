<?php

namespace App\Controller;

use Sensio\Bundle\FrameworkExtraBundle\Configuration\ParamConverter;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\Session\SessionInterface;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Security\Core\Encoder\PasswordEncoderInterface;
use Symfony\Component\Security\Core\Encoder\UserPasswordEncoderInterface;
use Symfony\Component\Security\Http\Authentication\AuthenticationUtils;
use App\Entity\Departement;
use App\Repository\PersonnelDepartementRepository;
use Symfony\Component\HttpFoundation\RedirectResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Security\Core\Exception\CustomUserMessageAuthenticationException;
use Symfony\Contracts\Translation\TranslatorInterface;

class SecurityController extends AbstractController
{
    /**
     * @Route("/connexion/{message}", name="security_login")
     * @param AuthenticationUtils $authenticationUtils
     * @param string              $message
     *
     * @return Response
     */
    public function login(AuthenticationUtils $authenticationUtils, $message = ''): Response
    {
        // get the login error if there is one
        $error = $authenticationUtils->getLastAuthenticationError();
        // last username entered by the user
        $lastUsername = $authenticationUtils->getLastUsername();

        return $this->render('security/login.html.twig', ['message' => $message, 'last_username' => $lastUsername, 'error' => $error]);
    }

    /**
     * @Route("/deconnexion", name="security_logout")
     */
    public function logout(): RedirectResponse
    {
        return $this->redirectToRoute('security_login');
    }

    /**
     * @Route("/mot-de-passe-perdu", name="security_password_lost")
     * @param Request $request
     *
     * @return Response
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
     * @Route("/verouiller", name="security_lock")
     * @param Request $request
     *
     * @return Response
     */
    public function lock(Request $request, UserPasswordEncoderInterface $passwordEncoder): Response
    {
        if ($request->isMethod('POST')) {
            $credential = $request->request->get('password');
            $isPasswordValid = $passwordEncoder->isPasswordValid($this->getUser(), $credential);

            if ($isPasswordValid) {
                return new RedirectResponse($this->generateUrl('default_homepage')); //todo: gérer selon le rôle...
            }

            throw new CustomUserMessageAuthenticationException('Invalid username or password');
            //todo: ca redirige vers le login, pas forcément top
        }

        return $this->render('security/lock.html.twig');
    }

    /**
     * @Route("/change-departement/{departement}", name="security_change_departement")
     * @ParamConverter("departement", options={"mapping": {"departement": "uuid"}})

     * @param Departement $departement
     *
     * @return Response
     */
    public function changeDepartement(
        SessionInterface $session,
        Departement $departement): Response
    {
        $session->set('departement', $departement->getUuidString());
        return $this->redirectToRoute('default_homepage');
    }

    /**
     * @Route("/choix-departement", name="security_choix_departement")
     * @param TranslatorInterface            $translator
     * @param Request                        $request
     * @param PersonnelDepartementRepository $personnelDepartementRepository
     *
     * @return Response
     */
    public function choixDepartement(
        TranslatorInterface $translator,
        Request $request,
        PersonnelDepartementRepository $personnelDepartementRepository
    ): Response {
        $user = $this->getUser();
        $departements = $personnelDepartementRepository->findByPersonnel($user);

        if ($request->getMethod() === 'POST') {
            $departement = $personnelDepartementRepository->find($request->request->get('departement'));
            if ($departement !== null) {

                $departement->setDefaut(true);
                $this->getDoctrine()->getManager()->persist($departement);
                $this->getDoctrine()->getManager()->flush();
                $this->addFlash('success', $translator->trans('formation.par.defaut.sauvegarde'));

                return $this->redirectToRoute('default_homepage');
            } else {
                //todo: plusieurs ??
            }

        }

        return $this->render('security/choix-departement.html.twig', ['departements' => $departements, 'user' => $user]);
    }
}
