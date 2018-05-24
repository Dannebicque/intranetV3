<?php

namespace App\Controller;

use App\Entity\Personnel;
use App\Form\EtudiantProfilType;
use App\Form\PersonnelProfilType;
use App\Repository\EtudiantRepository;
use App\Repository\PersonnelRepository;
use App\Repository\ScolariteRepository;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;

/**
 * Class UserController
 * @package App\Controller
 * @Route({"fr":"utilisateur",
 *         "en":"user"})
 */
class ProfilController extends Controller
{
    /**
     * @Route("/mon-profil/timeline", name="profil_timeline")
     * @throws \LogicException
     */
    public function timeline()
    {
       return $this->render('user/composants/timeline.html.twig', [

       ]);
    }

    /**
     * @Route("/mon-profil/actions", name="profil_action")
     * @throws \LogicException
     */
    public function actions()
    {
        return $this->render('user/composants/actions.html.twig', [

        ]);
    }

    /**
     * @Route("/mon-profil/scolarite", name="profil_scolarite")
     * @throws \LogicException
     */
    public function scolarite(ScolariteRepository $scolariteRepository)
    {
        $scolarite = $scolariteRepository->findBy(array('etudiant' => $this->getUser()));

        return $this->render('user/composants/scolarite.html.twig', [
            'scolarite' => $scolarite
        ]);
    }

    /**
     * @Route("/mon-profil/notes", name="profil_notes")
     * @throws \LogicException
     */
    public function notes()
    {
        return $this->render('user/composants/notes.html.twig', [
            'notes' => $this->getUser()->getNotes()
        ]);
    }

    /**
     * @Route("/mon-profil/absences", name="profil_absences")
     * @throws \LogicException
     */
    public function absences()
    {
        return $this->render('user/composants/absences.html.twig', [
            'absences' => $this->getUser()->getAbsences()
        ]);
    }

    /**
     * @Route("/mon-profil/stages", name="profil_stages")
     * @throws \LogicException
     */
    public function stages()
    {
        return $this->render('user/composants/stages.html.twig', [
            'stages' => $this->getUser()->getAbsences()
        ]);
    }

    /**
     * @Route("/mon-profil/about", name="profil_about")
     * @throws \LogicException
     */
    public function about(Request $request)
    {
        $user = $this->getUser();
        if (is_a($user, Personnel::class)) {
            $form = $this->createForm(PersonnelProfilType::class, $user);
        } else {
            $form = $this->createForm(EtudiantProfilType::class, $user);
        }

        return $this->render('user/composants/about.html.twig', [
            'user' => $user,
            'form' => $form->createView()
        ]);
    }

    /**
     * @Route("/mon-profil/previsionnel", name="profil_previsionnel")
     * @throws \LogicException
     */
    public function previsionnel()
    {
        return $this->render('user/composants/previsionnel.html.twig', [

        ]);
    }


}
