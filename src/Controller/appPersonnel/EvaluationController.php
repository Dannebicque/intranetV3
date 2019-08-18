<?php
/**
 * Copyright (C) 8 / 2019 | David annebicque | IUT de Troyes - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetv3/src/Controller/appPersonnel/EvaluationController.php
 * @author     David Annebicque
 * @project intranetv3
 * @date 18/08/2019 11:48
 * @lastUpdate 18/08/2019 11:47
 */

namespace App\Controller\appPersonnel;

use App\Controller\BaseController;
use App\Entity\Evaluation;
use App\MesClasses\MyEvaluation;
use App\Repository\EvaluationRepository;
use App\Repository\GroupeRepository;
use PhpOffice\PhpSpreadsheet\Exception;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\IsGranted;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\ParamConverter;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\StreamedResponse;
use Symfony\Component\Routing\Annotation\Route;
use Twig\Error\LoaderError;
use Twig\Error\RuntimeError;
use Twig\Error\SyntaxError;

/**
 * Class NotesController
 * @package App\Controller
 * @Route("/application/personnel/evaluation")
 * @IsGranted("ROLE_PERMANENT")
 */
class EvaluationController extends BaseController
{
    /**
     * @Route("/details/{uuid}", name="application_personnel_evaluation_show",
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
            'notes'      => $notes,
            'autorise'   => true //todo: a calculer
        ]);
    }

    /**
     * @Route("/update", name="application_personnel_evaluation_update", options={"expose"=true})
     * @param EvaluationRepository $evaluationRepository
     * @param Request              $request
     *
     * @return Response
     */
    public function updateEvaluation(EvaluationRepository $evaluationRepository, Request $request): Response
    {
        //mise à jour d'un champ d'une évaluation
        $evaluation = $evaluationRepository->findOneBy(['uuid' => $request->request->get('id')]);
        $name = $request->request->get('name');
        $value = $request->request->get('value');
        if ($evaluation) {
            $evaluation->updateData($name, $value);
            $this->entityManager->flush();

            return $this->json(true, Response::HTTP_OK);
        }

        return $this->json(false, Response::HTTP_INTERNAL_SERVER_ERROR);
    }

    /**
     * @Route("/export/{uuid}/{type}/{_format}", name="application_personnel_evaluation_export",
     *                                    requirements={"evaluation"="\d+","_format"="csv|xlsx|pdf"})
     * @ParamConverter("evaluation", options={"mapping": {"uuid": "uuid"}})
     * @param GroupeRepository $groupeRepository
     * @param MyEvaluation     $myEvaluation
     * @param Evaluation       $evaluation
     * @param                  $type
     * @param                  $_format
     *
     * @return StreamedResponse|null
     * @throws Exception
     * @throws LoaderError
     * @throws RuntimeError
     * @throws SyntaxError
     */
    public function exportEvaluation(
        GroupeRepository $groupeRepository,
        MyEvaluation $myEvaluation,
        Evaluation $evaluation,
        $type,
        $_format
    ): ?StreamedResponse {
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

        return $myEvaluation->setEvaluation($evaluation)->exportReleve($_format, $data,
            $this->dataUserSession->getDepartement());
    }
}
