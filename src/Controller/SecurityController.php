<?php
// Copyright (c) 2020. | David Annebicque | IUT de Troyes  - All Rights Reserved
// @file /Users/davidannebicque/htdocs/intranetV3/src/Controller/SecurityController.php
// @author davidannebicque
// @project intranetV3
// @lastUpdate 03/09/2020 07:47

namespace App\Controller;

use App\Entity\Departement;
use App\Classes\Mail\MyMailer;
use App\Repository\EtudiantRepository;
use App\Repository\PersonnelDepartementRepository;
use App\Repository\PersonnelRepository;
use Doctrine\ORM\EntityManagerInterface;
use Exception;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\ParamConverter;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\RedirectResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\Session\Flash\FlashBagInterface;
use Symfony\Component\HttpFoundation\Session\SessionInterface;
use Symfony\Component\Mailer\Exception\TransportExceptionInterface;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Routing\Generator\UrlGeneratorInterface;
use Symfony\Component\Security\Core\Encoder\UserPasswordEncoderInterface;
use Symfony\Component\Security\Core\Exception\CustomUserMessageAuthenticationException;
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
        return $this->redirect('https://cas.univ-reims.fr/cas?service='.$this->generateUrl('cas_return', [], UrlGeneratorInterface::ABSOLUTE_URL));
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
     * @param Request                 $request
     *
     * @param TokenGeneratorInterface $tokenGenerator
     * @param EntityManagerInterface  $entityManager
     *
     * @param MyMailer                $myMailer
     * @param PersonnelRepository     $personnelRepository
     * @param EtudiantRepository      $etudiantRepository
     *
     * @return Response
     * @throws TransportExceptionInterface
     */
    public function passwordLost(
        Request $request,
        TokenGeneratorInterface $tokenGenerator,
        EntityManagerInterface $entityManager,
        MyMailer $myMailer,
        PersonnelRepository $personnelRepository,
        EtudiantRepository $etudiantRepository
    ): Response {
        $submittedToken = $request->request->get('token');

        if ($request->isMethod('POST') && $this->isCsrfTokenValid('password-lost', $submittedToken)) {

            $email = $request->request->get('email');

            $etudiant = $etudiantRepository->findOneBy(['mailUniv' => $email]);
            $personnel = $personnelRepository->findOneBy(['mailUniv' => $email]);
            $user = null;
            if ($personnel !== null && $etudiant === null) {
                $user = $personnel;
            } else if ($personnel === null && $etudiant !== null) {
                $user = $etudiant;
            }

            if ($user === null) {
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

            $myMailer->setTemplate('mails/passwordLost.txt.twig', ['url' => $url, 'user' => $user]);
            $myMailer->sendMessage([$user->getMailUniv()], 'Mot de passe perdu');


            return $this->render('security/passwordLostConfirm.html.twig');
        }

        return $this->render('security/passwordLost.html.twig');
    }

    /**
     * @Route("/connexion/reset-password/{token}", name="security_reset_password")
     * @param Request                      $request
     *
     * @param string                       $token
     * @param PersonnelRepository          $personnelRepository
     * @param EtudiantRepository           $etudiantRepository
     * @param UserPasswordEncoderInterface $passwordEncoder
     *
     * @param EntityManagerInterface       $entityManager
     *
     * @return Response
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
            if ($personnel !== null && $etudiant === null) {
                $user = $personnel;
            } else if ($personnel === null && $etudiant !== null) {
                $user = $etudiant;
            }

            if ($user === null) {
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
     * @Route("/verouiller", name="security_lock")
     * @param Request                      $request
     *
     * @param UserPasswordEncoderInterface $passwordEncoder
     *
     * @return Response
     */
    public function lock(Request $request, UserPasswordEncoderInterface $passwordEncoder): Response
    {
        if ($request->isMethod('POST')) {
            $credential = $request->request->get('password');
            $isPasswordValid = $passwordEncoder->isPasswordValid($this->getUser(), $credential);

            if ($isPasswordValid && $this->getUser() !== null) {
                if (in_array('ROLE_SUPER_ADMIN', $this->getUser()->getRoles()) || in_array('ROLE_SCOLARITE',
                        $this->getUser()->getRoles())) {
                    return new RedirectResponse($this->generateUrl('super_admin_homepage'));
                }

                return new RedirectResponse($this->generateUrl('default_homepage'));
            }

            throw new CustomUserMessageAuthenticationException('Invalid username or password');
        }

        return $this->render('security/lock.html.twig');
    }

    /**
     * @Route("/change-departement/{departement}", name="security_change_departement")
     * @ParamConverter("departement", options={"mapping": {"departement": "uuid"}})
     * @param SessionInterface $session
     * @param Departement      $departement
     *
     * @return Response
     */
    public function changeDepartement(
        SessionInterface $session,
        Departement $departement
    ): Response {
        $session->set('departement', $departement->getUuidString());

        return $this->redirectToRoute('default_homepage');
    }

    /**
     * @Route("/choix-departement", name="security_choix_departement")
     * @param TranslatorInterface            $translator
     * @param FlashBagInterface              $flashBag
     * @param SessionInterface               $session
     * @param Request                        $request
     * @param PersonnelDepartementRepository $personnelDepartementRepository
     *
     * @return Response
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

        if ($request->getMethod() === 'POST') {
            $departement = $personnelDepartementRepository->findOneBy(['departement' => $request->request->get('departement')]);
            if ($departement !== null) {

                $departement->setDefaut(true);
                $em = $this->getDoctrine()->getManager();
                $em->persist($departement);
                $em->flush();
                if ($departement->getDepartement() !== null) {
                    $flashBag->add('success', $translator->trans('formation.par.defaut.sauvegarde'));
                    $session->set('departement', $departement->getDepartement()->getUuidString()); //on sauvegarde

                    return $this->redirectToRoute('default_homepage');
                }

                $flashBag->add('error', $translator->trans('formation.par.defaut.erreur'));

                return $this->render('security/choix-departement.html.twig',
                    ['departements' => $departements, 'user' => $user]);
            }

            return $this->render('security/choix-departement.html.twig',
                ['departements' => $departements, 'user' => $user]);
        }

        return $this->render('security/choix-departement.html.twig',
            ['departements' => $departements, 'user' => $user]);
    }

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


        return $this->render('security/login.html.twig',
            ['message' => $message, 'last_username' => $lastUsername, 'error' => $error]);
    }
}
