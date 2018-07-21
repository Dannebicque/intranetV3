<?php

namespace App\Controller\administration;

use App\Controller\BaseController;
use App\Entity\Evaluation;
use App\Entity\Semestre;
use App\MesClasses\MyEvaluations;
use App\MesClasses\MyExport;
use App\Repository\NoteRepository;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

/**
 * Class EvaluationController
 * @package App\Controller\administration
 * @Route({"fr":"administration/evaluation",
 *         "en":"administration/evaluation"}
 *)
 */
class EvaluationController extends BaseController
{
    /**
     *
     * @param Evaluation $evaluation
     *
     * @return Response
     * @Route("/modifiable/{evaluation}", name="administration_evaluation_modifiable", methods={"GET"},
     *                                    options={"expose":true})
     */
    public function modifiable(Evaluation $evaluation)
    {
        $evaluation->setModifiable(!$evaluation->getModifiable());
        $this->entityManager->flush();

        return new JsonResponse($evaluation->getModifiable(), Response::HTTP_OK);
    }

    /**
     *
     * @param Evaluation $evaluation
     *
     * @return Response
     * @Route("/visibilite/{evaluation}", name="administration_evaluation_visibilite", methods={"GET"},
     *                                    options={"expose":true})
     */
    public function visibilite(Evaluation $evaluation)
    {
        $evaluation->setVisible(!$evaluation->getVisible());
        $this->entityManager->flush();

        return new JsonResponse($evaluation->getVisible(), Response::HTTP_OK);
    }
}
