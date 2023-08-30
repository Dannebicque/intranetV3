<?php
/*
 * Copyright (c) 2022. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Controller/administration/EvaluationController.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 14/09/2022 09:13
 */

namespace App\Controller\administration;

use App\Classes\Matieres\TypeMatiereManager;
use App\Classes\MyEvaluation;
use App\Controller\BaseController;
use App\Entity\Constantes;
use App\Entity\Evaluation;
use App\Entity\Semestre;
use App\Exception\MatiereNotFoundException;
use App\Form\EvaluationType;
use App\Repository\EvaluationRepository;
use Exception;
use Knp\Bundle\SnappyBundle\Snappy\Response\PdfResponse;
use Symfony\Bridge\Doctrine\Attribute\MapEntity;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\RedirectResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\StreamedResponse;
use Symfony\Component\Routing\Annotation\Route;
use Twig\Error\LoaderError;
use Twig\Error\RuntimeError;
use Twig\Error\SyntaxError;

/**
 * Class EvaluationController.
 */
#[Route(path: '/administration/evaluation')]
class EvaluationController extends BaseController
{
    #[Route(path: '/details/{uuid}', name: 'administration_evaluation_show', methods: ['GET', 'POST'])]
    public function show(TypeMatiereManager $typeMatiereManager, MyEvaluation $myEvaluation, #[MapEntity(mapping: ['uuid' => 'uuid'])]
    Evaluation                              $evaluation): Response
    {
        // $this->denyAccessUnlessGranted('MINIMAL_ROLE_SCOL', $evaluation->getSemestre());
        $notes = $myEvaluation->setEvaluation($evaluation)->getNotesTableau();

        return $this->render('administration/evaluation/show.html.twig', [
            'autorise' => true,
            'evaluation' => $evaluation,
            'semestre' => $evaluation->getSemestre(),
            'notes' => $notes,
            'matiere' => $typeMatiereManager->getMatiere($evaluation->getIdMatiere(), $evaluation->getTypeMatiere()),
        ]);
    }

    /**
     * @throws SyntaxError
     * @throws LoaderError
     * @throws RuntimeError
     * @throws MatiereNotFoundException
     */
    #[Route(path: '/export/{semestre}/{uuid}.{_format}', name: 'administration_evaluation_export', methods: 'GET')]
    public function exportEvaluation(MyEvaluation $myEvaluation, #[MapEntity(mapping: ['uuid' => 'uuid'])]
    Evaluation                                    $evaluation, string $_format, Semestre $semestre): StreamedResponse|PdfResponse|null
    {
        // todo: $semestre pourrait être supprimé s'il est dans évaluation
        $data = $evaluation->getTypeGroupe()->getGroupes();

        return $myEvaluation->setEvaluation($evaluation)->exportReleve($_format, $data,
            $semestre);
    }

    /**
     * @throws MatiereNotFoundException
     * @throws Exception
     */
    #[Route(path: '/ajouter/{matiere}/{semestre}', name: 'administration_evaluation_create', methods: ['GET', 'POST'])]
    public function create(TypeMatiereManager $typeMatiereManager, Request $request, string $matiere, Semestre $semestre): RedirectResponse|Response
    {
        $mat = $typeMatiereManager->getMatiereFromSelect($matiere);
        if (null === $mat) {
            throw new MatiereNotFoundException();
        }

        $this->denyAccessUnlessGranted('MINIMAL_ROLE_SCOL', $semestre);
        $evaluation = new Evaluation($this->getUser(), $mat, $semestre);
        $form = $this->createForm(
            EvaluationType::class,
            $evaluation,
            [
                'departement' => $this->dataUserSession->getDepartement(),
                'semestre' => $semestre,
                'matiereDisabled' => true,
                'personnelDisabled' => false,
                'autorise' => true,
                'locale' => $request->getLocale(),
                'attr' => [
                    'data-provide' => 'validation',
                ],
                'enfant' => $mat->isEnfant(),
                'groupeEnfant' => $mat->groupesEnfant(),
            ]
        );
        $form->handleRequest($request);
        if ($form->isSubmitted() && $form->isValid()) {
            $evaluation->setAnneeUniversitaire($this->dataUserSession->getAnneeUniversitaire());
            if ($mat->isEnfant()) {
                $evaluation->setTypeGroupe($mat->groupesEnfant()?->first()->getTypeGroupe()); // todo: en attendant mieux. Car peut y avoir plusieurs groupes, et donc plusieurs types groupes.
            }
            $this->entityManager->persist($evaluation);
            $this->entityManager->flush();
            $this->addFlashBag(Constantes::FLASHBAG_SUCCESS, 'evaluation.add.success.flash');

            return $this->redirectToRoute(
                'administration_note_saisie_2',
                ['uuid' => $evaluation->getUuidString()]
            );
        }

        return $this->render('administration/evaluation/create.html.twig', [
            'form' => $form,
            'matiere' => $mat,
            'semestre' => $semestre,
        ]);
    }

    /**
     * @throws MatiereNotFoundException
     */
    #[Route(path: '/saisie/etape-2/{uuid}', name: 'administration_note_saisie_2')]
    public function saisieNotes(TypeMatiereManager $typeMatiereManager, MyEvaluation $myEvaluation, #[MapEntity(mapping: ['uuid' => 'uuid'])]
    Evaluation                                     $evaluation): Response
    {
        $matiere = $typeMatiereManager->getMatiere($evaluation->getIdMatiere(), $evaluation->getTypeMatiere());
        if (null === $matiere) {
            throw new MatiereNotFoundException();
        }

        $this->denyAccessUnlessGranted('MINIMAL_ROLE_SCOL', $evaluation->getSemestre());
        $notes = $myEvaluation->setEvaluation($evaluation)->getNotesTableau();

        return $this->render('administration/evaluation/saisie_2.html.twig', [
            'evaluation' => $evaluation,
            'notes' => $notes,
            'semestre' => $evaluation->getSemestre(),
            'matiere' => $matiere,
            'autorise' => true,
        ]);
    }

    #[Route(path: '/visibilite/semestre/{semestre}/{etat}', name: 'administration_evaluation_visibilite_all', methods: ['GET'])]
    public function visibiliteAll(EvaluationRepository $evaluationRepository, string $etat, Semestre $semestre): RedirectResponse
    {
        $this->denyAccessUnlessGranted('MINIMAL_ROLE_SCOL', $semestre);
        $evals = $evaluationRepository->findBySemestre($semestre, $this->dataUserSession->getAnneeUniversitaire());
        /** @var Evaluation $eval */
        foreach ($evals as $eval) {
            $eval->setVisible('visible' === $etat);
            $this->entityManager->persist($eval);
        }
        $this->entityManager->flush();
        $this->addFlashBag(Constantes::FLASHBAG_SUCCESS, 'Modification de la visibilité des notes effectuées');

        return $this->redirectToRoute('administration_notes_semestre_index', ['semestre' => $semestre->getId()]);
    }

    #[Route(path: '/modifiable/semestre/{semestre}/{etat}', name: 'administration_evaluation_modifiable_all', methods: ['GET'])]
    public function modifiableAll(EvaluationRepository $evaluationRepository, string $etat, Semestre $semestre): RedirectResponse
    {
        $this->denyAccessUnlessGranted('MINIMAL_ROLE_SCOL', $semestre);
        $evals = $evaluationRepository->findBySemestre($semestre, $this->dataUserSession->getAnneeUniversitaire());
        /** @var Evaluation $eval */
        foreach ($evals as $eval) {
            $eval->setModifiable('autorise' === $etat);
            $this->entityManager->persist($eval);
        }
        $this->entityManager->flush();
        $this->addFlashBag(Constantes::FLASHBAG_SUCCESS, 'Autorisation de modification des notes effectuée');

        return $this->redirectToRoute('administration_notes_semestre_index', ['semestre' => $semestre->getId()]);
    }

    #[Route(path: '/modifiable/{uuid}', name: 'administration_evaluation_modifiable', options: ['expose' => true], methods: ['GET'])]
    public function modifiable(#[MapEntity(mapping: ['uuid' => 'uuid'])]
                               Evaluation $evaluation): Response
    {
        $evaluation->setModifiable(!$evaluation->getModifiable());
        $this->entityManager->flush();

        return new JsonResponse($evaluation->getModifiable(), Response::HTTP_OK);
    }

    #[Route(path: '/visibilite/{uuid}', name: 'administration_evaluation_visibilite', options: ['expose' => true], methods: ['GET'])]
    public function visibilite(#[MapEntity(mapping: ['uuid' => 'uuid'])]
                               Evaluation $evaluation): Response
    {
        $evaluation->setVisible(!$evaluation->getVisible());
        $this->entityManager->flush();

        return new JsonResponse($evaluation->getVisible(), Response::HTTP_OK);
    }

    #[Route(path: '/{uuid}', name: 'administration_evaluation_delete', methods: 'DELETE')]
    public function delete(MyEvaluation $myEvaluation, Request $request, #[MapEntity(mapping: ['uuid' => 'uuid'])]
    Evaluation                          $evaluation): Response
    {
        $id = $evaluation->getUuidString();
        if ($this->isCsrfTokenValid('delete'.$id, $request->server->get('HTTP_X_CSRF_TOKEN'))) {
            $myEvaluation->setEvaluation($evaluation)->delete();

            return $this->json($id, Response::HTTP_OK);
        }

        return $this->json(false, Response::HTTP_INTERNAL_SERVER_ERROR);
    }
}
