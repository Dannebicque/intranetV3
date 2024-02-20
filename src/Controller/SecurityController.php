<?php
/*
 * Copyright (c) 2024. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Controller/SecurityController.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 16/02/2024 22:17
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
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\RedirectResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\RequestStack;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Mailer\Exception\TransportExceptionInterface;
use Symfony\Component\PasswordHasher\Hasher\UserPasswordHasherInterface;
use Symfony\Component\Routing\Attribute\Route;
use Symfony\Component\Routing\Generator\UrlGeneratorInterface;
use Symfony\Component\Security\Csrf\TokenGenerator\TokenGeneratorInterface;
use Symfony\Component\Security\Http\Authentication\AuthenticationUtils;
use Symfony\Contracts\Translation\TranslatorInterface;

class SecurityController extends AbstractController
{
    #[Route(path: '/sso/redirect/cas', name: 'sso_cas')]
    public function redirectToCas(): RedirectResponse
    {
        return $this->redirect('https://cas.univ-reims.fr/cas?service='.$this->generateUrl('cas_return', [],
                UrlGeneratorInterface::ABSOLUTE_URL));
    }

    #[Route(path: '/deconnexion', name: 'security_logout')]
    public function logout(): RedirectResponse
    {
        return $this->redirectToRoute('security_login');
    }

    /**
     * @throws TransportExceptionInterface
     */
    #[Route(path: '/connexion/mot-de-passe-perdu', name: 'security_password_lost')]
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
            if ('' === trim($email) || false === filter_var($email, FILTER_VALIDATE_EMAIL)) {
                return $this->redirectToRoute('security_login', ['message' => 'Vous devez saisir un email valide']);
            }
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
            $myMailer->setTemplate('mails/security/passwordLost.html.twig', ['url' => $url, 'user' => $user]);
            $myMailer->sendMessage([$user->getMailUniv()], 'Mot de passe perdu');

            return $this->render('security/passwordLostConfirm.html.twig');
        }

        return $this->render('security/passwordLost.html.twig');
    }

    /**
     * @throws TransportExceptionInterface
     * @throws \Exception
     */
    #[Route(path: '/connexion/init-password/{user}', name: 'security_password_init', options: ['expose' => true])]
    public function initPassword(
        UserPasswordHasherInterface $passwordEncoder,
        EntityManagerInterface $entityManager,
        MailerFromTwig $mailerFromTwig,
        Personnel $user
    ): JsonResponse {
        $password = mb_substr(md5(time()), 0, 10);
        $passwordEncode = $passwordEncoder->hashPassword($user, $password);
        $user->setPassword($passwordEncode);
        $entityManager->flush();
        $mailerFromTwig->initEmail();
        $mailerFromTwig->setTemplate('mails/security/initPassword.txt.twig', [
            'personnel' => $user,
            'password' => $password,
        ]);
        $mailerFromTwig->sendMessage($user->getMails(), 'Initialisation de votre compte');

        $mailerFromTwig->initEmail();
        $mailerFromTwig->setTemplate('mails/security/initLogin.txt.twig', [
            'personnel' => $user,
        ]);
        $mailerFromTwig->sendMessage($user->getMails(), 'Confirmation de votre Login');

        return $this->json(true);
    }

    #[Route(path: '/connexion/reset-password/{token}', name: 'security_reset_password')]
    public function resetPassword(
        Request $request,
        string $token,
        PersonnelRepository $personnelRepository,
        EtudiantRepository $etudiantRepository,
        UserPasswordHasherInterface $passwordEncoder,
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
            $user->setPassword($passwordEncoder->hashPassword($user, $request->request->get('inputPassword')));
            $entityManager->flush();

            return $this->redirectToRoute('security_login', ['message' => 'Mot de passe mis à jour']);
        }

        return $this->render('security/reset_password.html.twig', ['token' => $token]);
    }

    #[Route(path: '/change-departement/{departement}', name: 'security_change_departement', options: ['expose' => true])]
    public function changeDepartement(Request $request, RequestStack $session, #[\Symfony\Bridge\Doctrine\Attribute\MapEntity(mapping: ['departement' => 'uuid'])]
    Departement                               $departement): Response
    {
        $session->getSession()->set('departement', $departement->getUuidString());

        return $this->redirect($request->headers->get('referer'));
    }

    #[Route(path: '/choix-departement', name: 'security_choix_departement')]
    public function choixDepartement(
        EntityManagerInterface $entityManager,
        TranslatorInterface $translator,
        RequestStack $session,
        Request $request,
        PersonnelDepartementRepository $personnelDepartementRepository
    ): Response {
        $user = $this->getUser();
        if (!$user instanceof Personnel) {
            return $this->redirectToRoute('security_login', ['message' => 'Vous devez être intervenant ou enseignant pour accéder à cette page.']);
        }

        $departements = $personnelDepartementRepository->findByPersonnel($user);
        $update = null;
        if ('POST' === $request->getMethod()) {
            foreach ($departements as $departement) {
                if (null !== $departement->getDepartement()) {
                    if ($departement->getDepartement()->getId() !== (int) $request->request->get('departement')) {
                        $departement->setDefaut(false);
                    } elseif ($departement->getDepartement()->getId() === (int) $request->request->get('departement')) {
                        $departement->setDefaut(true);
                        $update = $departement;
                    }
                }
            }

            $entityManager->flush();
            if (null !== $update && null !== $update->getDepartement()) {
                $this->addFlash(Constantes::FLASHBAG_SUCCESS, $translator->trans('formation.par.defaut.sauvegarde'));
                $session->getSession()->set('departement', $update->getDepartement()->getUuid()); // on sauvegarde

                return $this->redirectToRoute('default_homepage');
            }

            $this->addFlash(Constantes::FLASHBAG_ERROR, $translator->trans('formation.par.defaut.erreur'));

            return $this->render('security/choix-departement.html.twig',
                ['departements' => $departements, 'user' => $user]);
        }

        return $this->render('security/choix-departement.html.twig',
            ['departements' => $departements, 'user' => $user]);
    }

    #[Route(path: '/connexion/{message}', name: 'security_login')]
    public function login(AuthenticationUtils $authenticationUtils, string $message = ''): Response
    {
        return $this->render('security/login.html.twig',
            [
                'message' => $message,
                'last_username' => $authenticationUtils->getLastUsername(),
                'error' => $authenticationUtils->getLastAuthenticationError(),
            ]);
    }
}
