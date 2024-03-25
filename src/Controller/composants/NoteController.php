<?php
/*
 * Copyright (c) 2024. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Controller/composants/NoteController.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 16/02/2024 22:17
 */

namespace App\Controller\composants;

use App\Classes\Matieres\TypeMatiereManager;
use App\Controller\BaseController;
use App\Entity\Constantes;
use App\Entity\Evaluation;
use App\Exception\MatiereNotFoundException;
use App\Form\EvaluationType;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;
use Symfony\Component\Security\Http\Attribute\IsGranted;

/**
 * Class NotesController.
 */
#[Route(path: '/composant')]
#[IsGranted('ROLE_PERMANENT')]
class NoteController extends BaseController
{
    /**
     * @throws MatiereNotFoundException
     */
    #[Route(path: '/edit-form-evaluation/{evaluation}/{source}', name: 'composant_edit_form_evaluation')]
    public function editFormEvaluation(TypeMatiereManager $typeMatiereManager, Request $request, Evaluation $evaluation, string $source): Response
    {
        $matiere = $typeMatiereManager->getMatiere($evaluation->getIdMatiere(), $evaluation->getTypeMatiere());
        if (null === $matiere) {
            throw new MatiereNotFoundException();
        }

        $form = $this->createForm(
            EvaluationType::class,
            $evaluation,
            [
                'action' => $this->generateUrl('composant_edit_form_evaluation',
                    ['evaluation' => $evaluation->getId(), 'source' => $source]),
                'departement' => $this->getDepartement(),
                'matiereDisabled' => !('app' === $source),
                'autorise' => $evaluation->getAutorise($this->getUser()->getId(), $this->dataUserSession),
                'locale' => $request->getLocale(),
                'semestre' => $evaluation->getSemestre(),
                'attr' => [
                    'data-provide' => 'validation',
                ],
            ]
        );
        $form->handleRequest($request);
        if ($form->isSubmitted() && $form->isValid()) {
            $this->entityManager->flush();
            $this->addFlashBag(Constantes::FLASHBAG_SUCCESS, 'evaluation.edit.success.flash');
            if ('admin' === $source) {
                return $this->redirectToRoute('administration_evaluation_show',
                    ['uuid' => $evaluation->getUuidString()]);
            }

            return $this->redirectToRoute('application_personnel_evaluation_show',
                ['uuid' => $evaluation->getUuidString()]);
        }

        return $this->render('composants/_edit_eval.html.twig', [
            'evaluation' => $evaluation,
            'form' => $form,
            'autorise' => $evaluation->getAutorise($this->getUser()->getId(), $this->dataUserSession),
            'source' => $source,
        ]);
    }
}
