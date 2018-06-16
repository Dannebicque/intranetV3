<?php

namespace App\Controller;

use App\Entity\Favori;
use App\Entity\Personnel;
use App\Form\EtudiantProfilType;
use App\Form\PersonnelProfilType;
use App\Repository\EtudiantRepository;
use App\Repository\FavoriRepository;
use App\Repository\PersonnelRepository;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;

/**
 * Class UserController
 * @package App\Controller
 * @Route({"fr":"utilisateur",
 *         "en":"user"})
 */
class UserController extends Controller
{
    /**
     * @Route("/mon-profil", name="user_mon_profil")
     * @throws \LogicException
     */
    public function monProfil()
    {
        return $this->render('user/mon-profil.html.twig', [
            'user' => $this->getUser()
        ]);
    }

    /**
     * @Route("/{type}/{slug}", name="user_profil", options={"expose": true})
     * @param EtudiantRepository $etudiantRepository
     * @param PersonnelRepository $personnelRepository
     * @param                     $type
     * @param                     $slug
     *
     * @return \Symfony\Component\HttpFoundation\RedirectResponse|\Symfony\Component\HttpFoundation\Response
     * @throws \Doctrine\ORM\NonUniqueResultException
     * @throws \Doctrine\ORM\ORMException
     */
    public function index(
        EtudiantRepository $etudiantRepository,
        PersonnelRepository $personnelRepository,
        $type,
        $slug
    ) {
        if ($type === 'personnel') {
            $user = $personnelRepository->findOneBySlug($slug);

            return $this->render('user/profil-personnel.html.twig', [
                'user' => $user
            ]);
        }

        if ($type === 'etudiant') {
            $user = $etudiantRepository->findOneBySlug($slug);

            return $this->render('user/profil-etudiant.html.twig', [
                'user' => $user
            ]);
        }

        return $this->redirectToRoute('erreur_404');
    }


    /**
     * @Route("/settings", name="user_settings")
     */
    public function settings(Request $request)
    {
        $user = $this->getUser();
        if (is_a($user, Personnel::class)) {
            $form = $this->createForm(PersonnelProfilType::class, $user);
        } else {
            $form = $this->createForm(EtudiantProfilType::class, $user);
        }

        return $this->render('user/settings.html.twig', [
            'form' => $form->createView()
        ]);
    }

    /**
     * @param FavoriRepository   $favoriRepository
     * @param EtudiantRepository $etudiantRepository
     * @param Request            $request
     *
     * @return Response
     * @throws \Doctrine\ORM\NonUniqueResultException
     * @Route("/add-favori", name="user_add_favori", options={"expose":true})
     */
    public function addFavori(
        FavoriRepository $favoriRepository,
        EtudiantRepository $etudiantRepository,
        Request $request
    ): Response {
//todo: déplacer dans un contrôleur spécial ajax ?
        $action = $request->request->get('etat');
        $em = $this->getDoctrine()->getManager();
        $user = $etudiantRepository->findOneBySlug($request->request->get('user'));
        if ($user && $action === 'true') {
            $fav = new Favori($this->getUser(), $user);

            $em->persist($fav);
            $em->flush();

            return new Response('ok', Response::HTTP_OK);
        }

        if ($user && $action === 'false') {
            $fav = $favoriRepository->findBy(array(
                'etudiantDemandeur' => $this->getUser()->getId(),
                'etudiantDemande'   => $user->getId()
            ));
            foreach ($fav as $f) {
                $em->remove($f);
            }
            $em->flush();

            return new Response('ok', Response::HTTP_OK);

        }

        return new Response('nok', Response::HTTP_INTERNAL_SERVER_ERROR);
    }
}
