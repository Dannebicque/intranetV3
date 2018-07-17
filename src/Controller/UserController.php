<?php

namespace App\Controller;

use App\Entity\Constantes;
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

/**
 * Class UserController
 * @package App\Controller
 * @Route({"fr":"utilisateur",
 *         "en":"user"})
 */
class UserController extends BaseController
{
    /**
     * @Route("/mon-profil/{onglet}", name="user_mon_profil")
     * @throws \LogicException
     */
    public function monProfil($onglet = ''): Response
    {
        return $this->render('user/mon-profil.html.twig', [
            'user'   => $this->getUser(),
            'onglet' => $onglet
        ]);
    }

    /**
     * @Route("/{type}/{slug}", name="user_profil", options={"expose": true})
     * @param EtudiantRepository  $etudiantRepository
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
     * @param Request $request
     *
     * @return Response
     */
    public function settings(Request $request): Response
    {
        $user = $this->getUser();
        if ($user instanceof Personnel) {
            $form = $this->createForm(PersonnelProfilType::class, $user,
                [
                    'attr' => [
                        'data-provide' => 'validation'
                    ]
                ]);
            $form->handleRequest($request);

            if ($form->isSubmitted() && $form->isValid()) {
                $this->entityManager->persist($user);
                $this->entityManager->flush();
                $this->addFlashBag(Constantes::FLASHBAG_SUCCESS, 'donnees.update.success.flash');
            }
        } else {
            $form = $this->createForm(EtudiantProfilType::class, $user, [
                'attr' =>
                    ['data-provide' => 'validation']
            ]);
            $form->handleRequest($request);

            if ($form->isSubmitted() && $form->isValid()) {
                $this->entityManager->persist($user);
                $this->entityManager->flush();
                $this->addFlashBag(Constantes::FLASHBAG_SUCCESS, 'donnees.update.success.flash');
            }
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
        $user = $etudiantRepository->findOneBySlug($request->request->get('user'));
        if ($user && $action === 'true') {
            $fav = new Favori($this->getUser(), $user);

            $this->entityManager->persist($fav);
            $this->entityManager->flush();

            return new Response('ok', Response::HTTP_OK);
        }

        if ($user && $action === 'false') {
            $fav = $favoriRepository->findBy(array(
                'etudiantDemandeur' => $this->getUser()->getId(),
                'etudiantDemande'   => $user->getId()
            ));
            foreach ($fav as $f) {
                $this->entityManager->remove($f);
            }
            $this->entityManager->flush();

            return new Response('ok', Response::HTTP_OK);

        }

        return new Response('nok', Response::HTTP_INTERNAL_SERVER_ERROR);
    }
}
