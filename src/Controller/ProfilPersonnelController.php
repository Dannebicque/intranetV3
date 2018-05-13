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
class ProfilPersonnelController extends Controller
{
    /**
     * @Route("/mon-profil/timeline", name="profil_personnel_timeline")
     * @throws \LogicException
     */
    public function timeline()
    {
       return $this->render('user/composants/timeline.html.twig', [

       ]);
    }

    /**
     * @Route("/mon-profil/about", name="profil_personnel_about")
     * @throws \LogicException
     */
    public function about()
    {
        return $this->render('user/composants/about.html.twig', [

        ]);
    }

    /**
     * @Route("/mon-profil/previsionnel", name="profil_personnel_previsionnel")
     * @throws \LogicException
     */
    public function previsionnel()
    {
        return $this->render('user/composants/previsionnel.html.twig', [

        ]);
    }


}
