<?php

namespace App\Controller\appEtudiant;

use App\Entity\Note;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\IsGranted;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;

/**
 * Class NotesController
 * @package App\Controller
 * @Route({"fr":"application/etudiant/note",
 *         "en":"application/student/mark"}
 *)
 * @IsGranted("ROLE_ETUDIANT")
 */
class NoteController extends Controller
{
    /**
     * @param Note $note
     * @Route("/details/{id}", name="app_etudiant_note_detail")
     */
    public function details(Note $note)
    {

    }
}
