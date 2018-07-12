<?php

namespace App\Controller\appPersonnel;

use App\Controller\BaseController;
use App\Entity\Evaluation;
use App\MesClasses\MyEvaluation;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\IsGranted;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

/**
 * Class NotesController
 * @package App\Controller
 * @Route({"fr":"application/personnel/evaluation",
 *         "en":"application/team/mark"}
 *)
 * @IsGranted("ROLE_PERMANENT")
 */
class EvaluationController extends BaseController
{
    /**
     * @Route("/{evaluation}", name="application_personnel_evaluation_show",
     *                                    requirements={"evaluation"="\d+"})
     *
     * @param MyEvaluation $myEvaluation
     * @param Evaluation   $evaluation
     *
     * @return Response
     */
    public function detailsEvaluation(MyEvaluation $myEvaluation, Evaluation $evaluation): Response
    {
        $notes = $myEvaluation->setEvaluation($evaluation)->getNotesTableau();

        return $this->render('appPersonnel/note/saisie_2.html.twig', [
            'evaluation' => $evaluation,
            'notes'      => $notes
        ]);
    }

    /**
     * @Route("export/{_format}/{evaluation}", name="application_personnel_evaluation_export",
     *                                    requirements={"evaluation"="\d+","_format"="csv|xlsx|pdf"})
     *
     * @param MyEvaluation $myEvaluation
     * @param Evaluation   $evaluation
     *
     * @return Response
     */
    public function exportEvaluation(MyEvaluation $myEvaluation, Evaluation $evaluation): Response
    {
        $notes = $myEvaluation->setEvaluation($evaluation)->getNotesTableau();

        return null;

    }
}
