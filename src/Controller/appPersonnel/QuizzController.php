<?php

namespace App\Controller\appPersonnel;

use App\Entity\Matiere;
use App\Entity\Note;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\IsGranted;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;

/**
 * Class QuizzController
 * @package App\Controller
 * @Route({"fr":"application/personnel/quizz",
 *         "en":"application/team/quizzz"}
 *)
 * @IsGranted("ROLE_PERMANENT")
 */
class QuizzController extends Controller
{
    /**
     * @Route("/", name="application_personnel_quizz_index")
     */
    public function index()
    {
        return $this->render('appPersonnel/quizz/index.html.twig', []);
    }
}
