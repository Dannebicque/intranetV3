<?php
// Copyright (c) 2020. | David Annebicque | IUT de Troyes  - All Rights Reserved
// @file /Users/davidannebicque/htdocs/intranetV3/src/Controller/administration/EvaluationController.php
// @author davidannebicque
// @project intranetV3
// @lastUpdate 05/07/2020 08:09

namespace App\Controller\administration;

use App\Controller\BaseController;
use App\Entity\Constantes;
use App\Entity\Evaluation;
use App\Entity\Matiere;
use App\Entity\Semestre;
use App\Form\EvaluationType;
use App\MesClasses\MyEvaluation;
use App\Repository\EvaluationRepository;
use Exception;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\ParamConverter;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\RedirectResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

/**
 * Class EvaluationController
 * @package App\Controller\administration
 * @Route("/administration/evaluation")
 */
class EvaluationController extends BaseController
{
    /**
     * @Route("/details/{uuid}", name="administration_evaluation_show", methods="GET|POST")
     * @ParamConverter("evaluation", options={"mapping": {"uuid": "uuid"}})
     * @param Request      $request
     * @param MyEvaluation $myEvaluation
     * @param Evaluation   $evaluation
     *
     * @return RedirectResponse|Response
     */
    public function show(Request $request, MyEvaluation $myEvaluation, Evaluation $evaluation)
    {
        $notes = $myEvaluation->setEvaluation($evaluation)->getNotesTableau();
        $form = $this->createForm(
            EvaluationType::class,
            $evaluation,
            [
                'departement'     => $this->dataUserSession->getDepartement(),
                'semestre'        => $evaluation->getSemestre(),
                'matiereDisabled' => true,
                'locale'          => $request->getLocale(),
                'attr'            => [
                    'data-provide' => 'validation'
                ]
            ]
        );
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $this->entityManager->flush();
            $this->addFlashBag(Constantes::FLASHBAG_SUCCESS, 'evaluation.edit.success.flash');

            return $this->redirectToRoute('administration_evaluation_show', ['uuid' => $evaluation->getUuidString()]);
        }

        return $this->render('administration/evaluation/show.html.twig', [
            'evaluation' => $evaluation,
            'form'       => $form->createView(),
            'notes'      => $notes
        ]);
    }

    /**
     * @Route("/ajouter/{matiere}", name="administration_evaluation_create", methods="GET|POST")
     * @param Request      $request
     * @param MyEvaluation $myEvaluation
     *
     * @param Matiere      $matiere
     *
     * @return RedirectResponse|Response
     * @throws Exception
     */
    public function create(Request $request, MyEvaluation $myEvaluation, Matiere $matiere)
    {
        $evaluation = new Evaluation($this->getConnectedUser(), $matiere, $this->dataUserSession->getDepartement());
        $form = $this->createForm(
            EvaluationType::class,
            $evaluation,
            [
                'departement'     => $this->dataUserSession->getDepartement(),
                'semestre'        => $matiere->getSemestre(),
                'matiereDisabled' => true,
                'locale'          => $request->getLocale(),
                'attr'            => [
                    'data-provide' => 'validation'
                ]
            ]
        );
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $evaluation->setAnneeUniversitaire($this->dataUserSession->getAnneeUniversitaire());
            $this->entityManager->persist($evaluation);
            $this->entityManager->flush();
            $this->addFlashBag(Constantes::FLASHBAG_SUCCESS, 'evaluation.add.success.flash');

            return $this->redirectToRoute(
                'administration_note_saisie_2',
                ['uuid' => $evaluation->getUuidString()]
            );
        }

        return $this->render('administration/evaluation/create.html.twig', [
            'form'    => $form->createView(),
            'matiere' => $matiere
        ]);
    }

    /**
     * @Route("/saisie/etape-2/{uuid}", name="administration_note_saisie_2")
     * @param MyEvaluation $myEvaluation
     * @param Evaluation   $evaluation
     * @ParamConverter("evaluation", options={"mapping": {"uuid": "uuid"}})
     *
     * @return Response
     */
    public function saisieNotes(MyEvaluation $myEvaluation, Evaluation $evaluation): Response
    {
        $notes = $myEvaluation->setEvaluation($evaluation)->getNotesTableau();

        return $this->render('administration/evaluation/saisie_2.html.twig', [
            'evaluation' => $evaluation,
            'notes'      => $notes,
            'autorise'   => true
        ]);
    }

    /**
     * @param EvaluationRepository $evaluationRepository
     * @param                      $etat
     * @param Semestre             $semestre
     *
     * @return RedirectResponse
     * @Route("/visibilite/semestre/{semestre}/{etat}", name="administration_evaluation_visibilite_all",
     *                                                  methods={"GET"})
     */
    public function visibiliteAll(
        EvaluationRepository $evaluationRepository,
        $etat,
        Semestre $semestre
    ): RedirectResponse {
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
     * @param EvaluationRepository $evaluationRepository
     * @param                      $etat
     * @param Semestre             $semestre
     *
     * @return RedirectResponse
     * @Route("/modifiable/semestre/{semestre}/{etat}", name="administration_evaluation_modifiable_all",
     *                                                  methods={"GET"})
     */
    public function modifiableAll(
        EvaluationRepository $evaluationRepository,
        $etat,
        Semestre $semestre
    ): RedirectResponse {
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
     * @Route("/modifiable/{uuid}", name="administration_evaluation_modifiable", methods={"GET"},
     *                                    options={"expose":true})
     * @ParamConverter("evaluation", options={"mapping": {"uuid": "uuid"}})
     */
    public function modifiable(Evaluation $evaluation): Response
    {
        $evaluation->setModifiable(!$evaluation->getModifiable());
        $this->entityManager->flush();

        return new JsonResponse($evaluation->getModifiable(), Response::HTTP_OK);
    }

    /**
     *
     * @param Evaluation $evaluation
     * @ParamConverter("evaluation", options={"mapping": {"uuid": "uuid"}})
     *
     * @return Response
     * @Route("/visibilite/{uuid}", name="administration_evaluation_visibilite", methods={"GET"},
     *                                    options={"expose":true})
     */
    public function visibilite(Evaluation $evaluation): Response
    {
        $evaluation->setVisible(!$evaluation->getVisible());
        $this->entityManager->flush();

        return new JsonResponse($evaluation->getVisible(), Response::HTTP_OK);
    }

    /**
     * @Route("/{uuid}", name="administration_evaluation_delete", methods="DELETE")
     * @param MyEvaluation $myEvaluation
     * @param Request      $request
     * @param Evaluation   $evaluation
     *
     * @return Response
     * @ParamConverter("evaluation", options={"mapping": {"uuid": "uuid"}})
     *
     */
    public function delete(MyEvaluation $myEvaluation, Request $request, Evaluation $evaluation): Response
    {
        $id = $evaluation->getUuidString();
        if ($this->isCsrfTokenValid('delete' . $id, $request->request->get('_token'))) {
            $myEvaluation->setEvaluation($evaluation)->delete();

            return $this->json($id, Response::HTTP_OK);
        }

        return $this->json(false, Response::HTTP_INTERNAL_SERVER_ERROR);
    }
}
