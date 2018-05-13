<?php

namespace App\Controller\appEtudiant;

use App\Entity\Matiere;
use App\Entity\Note;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\IsGranted;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;

/**
 * Class QuizzController
 * @package App\Controller
 * @Route({"fr":"application/etudiant/quizz",
 *         "en":"application/student/quizzz"}
 *)
 * @IsGranted("ROLE_ETUDIANT")
 */
class QuizzController extends Controller
{
    /**
     * @Route("/", name="application_etudiant_quizz_index")
     */
    public function index()
    {
        return $this->render('appEtudiant/quizz/index.html.twig', []);
    }
}
