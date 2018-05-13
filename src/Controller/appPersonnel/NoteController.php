<?php

namespace App\Controller\appPersonnel;

use App\Entity\Matiere;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\IsGranted;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;

/**
 * Class NotesController
 * @package App\Controller
 * @Route({"fr":"application/personnel/note",
 *         "en":"application/team/mark"}
 *)
 * @IsGranted("ROLE_PERMANENT")
 */
class NoteController extends Controller
{
    /**
     * @Route("/{matiere}", name="application_personnel_note_index", requirements={"matiere"="\d+"})
     * @param Matiere $matiere
     *
     * @return Response
     */
    public function index(Matiere $matiere) :Response
    {
        return $this->render('appPersonnel/note/index.html.twig', [
            'matiere' => $matiere
        ]);
    }

    /**
     * @Route("/saisie/{matiere}", name="application_personnel_note_saisie", requirements={"matiere"="\d+"})
     */
    public function saisie()
    {
        return $this->render('appPersonnel/note/saisie.html.twig', [

        ]);
    }

    /**
     * @Route("/aide", name="application_personnel_note_help", methods="GET")
     */
    public function help(): Response
    {
        return new Response('', 200);
    }

    /**
     * @Route("/save/{evaluation}", name="application_personnel_note_save", methods="GET")
     */
    public function save(): Response
    {
        //save en csv
        return new Response('', 200);
    }

    /**
     * @Route("/imprimer/{evaluation}", name="application_personnel_note_imprimer", methods="GET")
     */
    public function imprimer(): Response
    {
        //print (pdf)
        return new Response('', 200);
    }

    /**
     * @Route("/{id}", name="application_personnel_Note_delete", methods="DELETE")
     */
    public function supprimer(): Response
    {
        return new Response('', 200);
    }
}
