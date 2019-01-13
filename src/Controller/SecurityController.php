<?php

namespace App\Controller;

use App\Entity\Formation;
use App\Repository\FormationRepository;
use App\Repository\PersonnelFormationRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\RedirectResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Security\Http\Authentication\AuthenticationUtils;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Security\Core\Encoder\UserPasswordEncoderInterface;
use Symfony\Component\Security\Core\Exception\CustomUserMessageAuthenticationException;
use Symfony\Contracts\Translation\TranslatorInterface;

/**
 * Class SecurityController
 * @package App\Controller
 */
class SecurityController extends AbstractController
{
    private $encoder;

    /**
     * SecurityController constructor.
     *
     * @param UserPasswordEncoderInterface $encoder
     */
    public function __construct(UserPasswordEncoderInterface $encoder)
    {
        $this->encoder = $encoder;
    }


    /**
     * @Route("/connexion/{message}", name="security_login")
     * @param AuthenticationUtils $helper
     *
     * @param string              $message
     *
     * @return Response
     */
    public function login(AuthenticationUtils $helper, $message = ''): Response
    {
        return $this->render('security/login.html.twig', [
            'message' => $message,
            // dernier username saisi (si il y en a un)
            'last_username' => $helper->getLastUsername(),
            // La derniere erreur de connexion (si il y en a une)
            'error' => $helper->getLastAuthenticationError(),
        ]);
    }

    /**
     * @Route("/deconnexion", name="security_logout")
     */
    public function logout(): void
    {
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
