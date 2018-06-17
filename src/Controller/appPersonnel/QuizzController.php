<?php

namespace App\Controller\appPersonnel;

use App\Controller\BaseController;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\IsGranted;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

/**
 * Class QuizzController
 * @package App\Controller
 * @Route({"fr":"application/personnel/quizz",
 *         "en":"application/team/quizzz"}
 *)
 * @IsGranted("ROLE_PERMANENT")
 */
class QuizzController extends BaseController
{
    /**
     * @Route("/", name="application_personnel_quizz_index")
     */
    public function index(): Response
    {
        return $this->render('appPersonnel/quizz/index.html.twig', []);
    }
}
