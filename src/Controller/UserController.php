<?php

namespace App\Controller;

use App\Entity\Personnel;
use App\Repository\EtudiantRepository;
use App\Repository\PersonnelRepository;
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
        $user = $this->getUser();
        if (is_a($user, Personnel::class))
        {
            return $this->render('user/mon-profil-personnel.html.twig', [
                'user' => $this->getUser()
            ]);
        }

        return $this->render('user/mon-profil-etudiant.html.twig', [
            'user' => $this->getUser()
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
    public function index(EtudiantRepository $etudiantRepository, PersonnelRepository $personnelRepository, $type, $slug)
    {
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
    public function settings()
    {
        return $this->render('user/settings.html.twig', [
        ]);
    }
}
