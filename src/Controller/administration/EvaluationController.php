<?php

namespace App\Controller\administration;

use App\Controller\BaseController;
use App\Entity\Constantes;
use App\Entity\Evaluation;
use App\Entity\Semestre;
use App\Repository\EvaluationRepository;
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
     * @param          $etat
     * @param Semestre $semestre
     *
     * @return \Symfony\Component\HttpFoundation\RedirectResponse
     * @Route("/visibilite/semestre/{semestre}/{etat}", name="administration_evaluation_visibilite_all",
     *                                                  methods={"GET"})
     */
    public function visibiliteAll(EvaluationRepository $evaluationRepository, $etat, Semestre $semestre)
    {
        $evals = $evaluationRepository->findBySemestre($semestre);


        /** @var Evaluation $eval */
        foreach ($evals as $eval) {
            $eval->setVisible($etat === 'visible');
            $this->entityManager->persist($eval);
        }

        $this->entityManager->flush();

        $this->addFlashBag(Constantes::FLASHBAG_SUCCESS, 'Modification de la visibilité des notes effectuées');

        return $this->redirectToRoute('administration_notes_semestre_index', ['semestre' => $semestre->getId()]);
    }

    /**
     * @param          $etat
     * @param Semestre $semestre
     *
     * @return \Symfony\Component\HttpFoundation\RedirectResponse
     * @Route("/modifiable/semestre/{semestre}/{etat}", name="administration_evaluation_modifiable_all",
     *                                                  methods={"GET"})
     */
    public function modifiableAll(EvaluationRepository $evaluationRepository, $etat, Semestre $semestre)
    {
        $evals = $evaluationRepository->findBySemestre($semestre);

        /** @var Evaluation $eval */
        foreach ($evals as $eval) {
            $eval->setModifiable($etat === 'autorise');
            $this->entityManager->persist($eval);
        }

        $this->entityManager->flush();

        $this->addFlashBag(Constantes::FLASHBAG_SUCCESS, 'Autorisation de modification des notes effectuée');

        return $this->redirectToRoute('administration_notes_semestre_index', ['semestre' => $semestre->getId()]);
    }

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
