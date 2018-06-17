<?php

namespace App\Controller\appEtudiant;

use App\Controller\BaseController;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\IsGranted;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

/**
 * Class QuizzController
 * @package App\Controller
 * @Route({"fr":"application/etudiant/quizz",
 *         "en":"application/student/quizzz"}
 *)
 * @IsGranted("ROLE_ETUDIANT")
 */
class QuizzController extends BaseController
{
    /**
     * @Route("/", name="application_etudiant_quizz_index")
     */
    public function index(): Response
    {
        return $this->render('appEtudiant/quizz/index.html.twig', []);
    }
}
