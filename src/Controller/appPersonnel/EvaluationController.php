<?php

namespace App\Controller\appPersonnel;

use App\Controller\BaseController;
use App\Entity\Evaluation;
use App\MesClasses\MyEvaluation;
use App\Repository\GroupeRepository;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\IsGranted;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\ParamConverter;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

/**
 * Class NotesController
 * @package App\Controller
 * @Route("/application/personnel/evaluation")
 * @IsGranted("ROLE_PERMANENT")
 */
class EvaluationController extends BaseController
{
    /**
     * @Route("/{uuid}", name="application_personnel_evaluation_show",
     *                                    requirements={"evaluation"="\d+"})
     * @ParamConverter("evaluation", options={"mapping": {"uuid": "uuid"}})
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
     * @Route("export/{uuid}/{type}/{_format}", name="application_personnel_evaluation_export",
     *                                    requirements={"evaluation"="\d+","_format"="csv|xlsx|pdf"})
     * @ParamConverter("evaluation", options={"mapping": {"uuid": "uuid"}})
     * @param GroupeRepository $groupeRepository
     * @param MyEvaluation     $myEvaluation
     * @param Evaluation       $evaluation
     * @param                  $type
     * @param                  $_format
     */
    public function exportEvaluation(
        GroupeRepository $groupeRepository,
        MyEvaluation $myEvaluation, Evaluation $evaluation, $type, $_format): void
    {
        $t = explode('_', $type);
        if ($t[0] === 'groupe') {
            $grp = $groupeRepository->find($t[1]);
            $data = [$grp];
        } elseif ($t[0] === 'all' && $evaluation->getTypeGroupe() !== null) {
            $data = $evaluation->getTypeGroupe()->getGroupes();
        } else {
            //todo: groupe par défaut ?
            $data = [];
        }

        $myEvaluation->setEvaluation($evaluation)->exportReleve($_format, $data);
    }
}
