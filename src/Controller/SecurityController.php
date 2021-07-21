<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Controller/SecurityController.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 29/06/2021 09:03
 */

namespace App\Controller;

use App\Classes\Mail\MailerFromTwig;
use App\Entity\Constantes;
use App\Entity\Departement;
use App\Entity\Personnel;
use App\Repository\EtudiantRepository;
use App\Repository\PersonnelDepartementRepository;
use App\Repository\PersonnelRepository;
use Doctrine\ORM\EntityManagerInterface;
use Exception;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\ParamConverter;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\RedirectResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\Session\Flash\FlashBagInterface;
use Symfony\Component\HttpFoundation\Session\SessionInterface;
use Symfony\Component\Mailer\Exception\TransportExceptionInterface;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Routing\Generator\UrlGeneratorInterface;
use Symfony\Component\Security\Core\Encoder\UserPasswordEncoderInterface;
use Symfony\Component\Security\Csrf\TokenGenerator\TokenGeneratorInterface;
use Symfony\Component\Security\Http\Authentication\AuthenticationUtils;
use Symfony\Contracts\Translation\TranslatorInterface;

class SecurityController extends AbstractController
{
    /**
     * @Route("/sso/redirect/cas", name="sso_cas")
     */
    public function redirectToCas(): RedirectResponse
    {
        return $this->redirect('https://cas.univ-reims.fr/cas?service=' . $this->generateUrl('cas_return', [],
                UrlGeneratorInterface::ABSOLUTE_URL));
    }

    /**
     * @Route("/deconnexion", name="security_logout")
     */
    public function logout(): RedirectResponse
    {
        return $this->redirectToRoute('security_login');
    }

    /**
     * @Route("/connexion/mot-de-passe-perdu", name="security_password_lost")
     *
     * @throws TransportExceptionInterface
     */
    public function passwordLost(
        Request $request,
        TokenGeneratorInterface $tokenGenerator,
        EntityManagerInterface $entityManager,
        MailerFromTwig $myMailer,
        PersonnelRepository $personnelRepository,
        EtudiantRepository $etudiantRepository
    ): Response {
        $submittedToken = $request->request->get('token');

        if ($request->isMethod('POST') && $this->isCsrfTokenValid('password-lost', $submittedToken)) {
            $email = $request->request->get('email');

            $etudiant = $etudiantRepository->findOneBy(['mailUniv' => $email]);
            $personnel = $personnelRepository->findOneBy(['mailUniv' => $email]);
            $user = null;
            if (null !== $personnel && null === $etudiant) {
                $user = $personnel;
            } elseif (null === $personnel && null !== $etudiant) {
                $user = $etudiant;
            }

            if (null === $user) {
                return $this->redirectToRoute('security_login', ['message' => 'Email Inconnu']);
            }
            $token = $tokenGenerator->generateToken();

            try {
                $user->setResetToken($token);
                $entityManager->flush();
            } catch (Exception $e) {
                return $this->redirectToRoute('security_login', ['message' => $e->getMessage()]);
            }

            $url = $this->generateUrl('security_reset_password', ['token' => $token],
                UrlGeneratorInterface::ABSOLUTE_URL);
            $myMailer->initEmail();
            $myMailer->setTemplate('mails/passwordLost.txt.twig', ['url' => $url, 'user' => $user]);
            $myMailer->sendMessage([$user->getMailUniv()], 'Mot de passe perdu');

            return $this->render('security/passwordLostConfirm.html.twig');
        }

        return $this->render('security/passwordLost.html.twig');
    }

    /**
     * @Route("/connexion/init-password/{user}", name="security_password_init", options={"expose"=true})
     *
     * @throws TransportExceptionInterface
     */
    public function initPassword(
        UserPasswordEncoderInterface $passwordEncoder,
        EntityManagerInterface $entityManager,
        MailerFromTwig $mailerFromTwig,
        Personnel $user
    ): JsonResponse {
        $password = mb_substr(md5(mt_rand()), 0, 10);
        $passwordEncode = $passwordEncoder->encodePassword($user, $password);

        $user->setPassword($passwordEncode);
        $entityManager->flush();

        $mailerFromTwig->initEmail();
        $mailerFromTwig->setTemplate('mails/security/initPassword.txt.twig', [
            'personnel' => $user,
            'password'  => $password,
        ]);
        $mailerFromTwig->sendMessage($user->getMails(), 'Initialisation de votre compte');

        $mailerFromTwig->initEmail();
        $mailerFromTwig->setTemplate('mails/security/initLogin.txt.twig', [
            'personnel' => $user,
        ]);

        $mailerFromTwig->sendMessage($user->getMails(), 'Confirmation de votre Login');

        return $this->json(true);
    }

    /**
     * @Route("/connexion/reset-password/{token}", name="security_reset_password")
     */
    public function resetPassword(
        Request $request,
        string $token,
        PersonnelRepository $personnelRepository,
        EtudiantRepository $etudiantRepository,
        UserPasswordEncoderInterface $passwordEncoder,
        EntityManagerInterface $entityManager
    ): Response {
        if ($request->isMethod('POST')) {
            $etudiant = $etudiantRepository->findOneBy(['resetToken' => $token]);
            $personnel = $personnelRepository->findOneBy(['resetToken' => $token]);

            $user = null;
            if (null !== $personnel && null === $etudiant) {
                $user = $personnel;
            } elseif (null === $personnel && null !== $etudiant) {
                $user = $etudiant;
            }

            if (null === $user) {
                return $this->redirectToRoute('security_login', ['message' => 'Token Inconnu']);
            }

            $user->setResetToken(null);
            $user->setPassword($passwordEncoder->encodePassword($user, $request->request->get('inputPassword')));
            $entityManager->flush();

            return $this->redirectToRoute('security_login', ['message' => 'Mot de passe mis à jour']);
        }

        return $this->render('security/reset_password.html.twig', ['token' => $token]);
    }

    /**
     * @Route("/change-departement/{departement}", name="security_change_departement")
     * @ParamConverter("departement", options={"mapping": {"departement": "uuid"}})
     */
    public function changeDepartement(
        Request $request,
        SessionInterface $session,
        Departement $departement
    ): Response {
        $session->set('departement', $departement->getUuidString());

        return $this->redirect($request->headers->get('referer'));
    }

    /**
     * @Route("/choix-departement", name="security_choix_departement")
     */
    public function choixDepartement(
        TranslatorInterface $translator,
        FlashBagInterface $flashBag,
        SessionInterface $session,
        Request $request,
        PersonnelDepartementRepository $personnelDepartementRepository
    ): Response {
        $user = $this->getUser();
        $departements = $personnelDepartementRepository->findByPersonnel($user);
        $update = null;
        if ('POST' === $request->getMethod()) {
            foreach ($departements as $departement) {
                if (null !== $departement->getDepartement()) {
                    if ($departement->getDepartement()->getId() !== (int)$request->request->get('departement')) {
                        $departement->setDefaut(false);
                    } elseif ($departement->getDepartement()->getId() === (int)$request->request->get('departement')) {
                        $departement->setDefaut(true);
                        $update = $departement;
                    }
                }
            }

            $em = $this->getDoctrine()->getManager();
            $em->flush();
            if (null !== $update && null !== $update->getDepartement()) {
                $flashBag->add(Constantes::FLASHBAG_SUCCESS, $translator->trans('formation.par.defaut.sauvegarde'));
                $session->set('departement', $update->getDepartement()->getUuid()); //on sauvegarde

                return $this->redirectToRoute('default_homepage');
            }

            $flashBag->add(Constantes::FLASHBAG_ERROR, $translator->trans('formation.par.defaut.erreur'));

            return $this->render('security/choix-departement.html.twig',
                ['departements' => $departements, 'user' => $user]);
        }

        return $this->render('security/choix-departement.html.twig',
            ['departements' => $departements, 'user' => $user]);
    }

    /**
     * @Route("/connexion/{message}", name="security_login")
     *
     */
    public function login(AuthenticationUtils $authenticationUtils, string $message = ''): Response
    {
        // get the login error if there is one
        $error = $authenticationUtils->getLastAuthenticationError();
        // last username entered by the user
        $lastUsername = $authenticationUtils->getLastUsername();

        return $this->render('security/login.html.twig',
            ['message' => $message, 'last_username' => $lastUsername, 'error' => $error]);
    }
}
