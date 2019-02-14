<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Security\Http\Authentication\AuthenticationUtils;
use App\Entity\Formation;
use App\Repository\PersonnelFormationRepository;
use Symfony\Component\HttpFoundation\RedirectResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Security\Core\Exception\CustomUserMessageAuthenticationException;
use Symfony\Contracts\Translation\TranslatorInterface;

class SecurityController extends AbstractController
{
    /**
     * @Route("/connexion/{message}", name="security_login")
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
    public function logout()
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
    public function lock(Request $request): Response
    {
        if ($request->isMethod('POST')) {
            $credential = $request->request->get('password');
            $isPasswordValid = $this->encoder->isPasswordValid($this->getUser(), $credential);

            if ($isPasswordValid) {
                return new RedirectResponse($this->generateUrl('default_homepage')); //todo: gérer selon le rôle...
            }

            throw new CustomUserMessageAuthenticationException('Invalid username or password');
            //todo: ca redirige vers le login, pas forcément top
        }

        return $this->render('security/lock.html.twig');
    }

    /**
     * @Route("/change-formation/{formation}", name="security_change_formation")
     * @param Request   $request
     *
     * @param Formation $formation
     * @return Response
     */
    public function changeFormation(Request $request, Formation $formation): Response
    {

    }

    /**
     * @Route("/choix-formation", name="security_choix_formation")
     * @param TranslatorInterface          $translator
     * @param Request                      $request
     * @param PersonnelFormationRepository $personnelFormationRepository
     * @return Response
     */
    public function choixFormation(
        TranslatorInterface $translator,
        Request $request,
        PersonnelFormationRepository $personnelFormationRepository
    ): Response {
        $user = $this->getUser();
        $formations = $personnelFormationRepository->findByPersonnel($user);

        if ($request->getMethod() === 'POST') {
            $formation = $personnelFormationRepository->find($request->request->get('formation'));
            if ($formation !== null) {

                $formation->setDefaut(true);
                $this->getDoctrine()->getManager()->persist($formation);
                $this->getDoctrine()->getManager()->flush();
                $this->addFlash('success', $translator->trans('formation.par.defaut.sauvegarde'));

                return $this->redirectToRoute('default_homepage');
            } else {
                //todo: plusieurs ??
            }

        }

        return $this->render('security/choix-formation.html.twig', ['formations' => $formations, 'user' => $user]);


    }
}
