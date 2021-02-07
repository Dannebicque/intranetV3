<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Controller/composants/NoteController.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 07/02/2021 11:11
 */

namespace App\Controller\composants;

use App\Controller\BaseController;
use App\Entity\Constantes;
use App\Entity\Evaluation;
use App\Form\EvaluationType;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\IsGranted;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

/**
 * Class NotesController.
 *
 * @Route("/composant")
 * @IsGranted("ROLE_PERMANENT")
 */
class NoteController extends BaseController
{
    /**
     * @param $autorise
     * @param $source
     *
     * @Route("/edit-form-evaluation/{evaluation}/{autorise}/{source}", name="composant_edit_form_evaluation")
     */
    public function editFormEvaluation(Request $request, Evaluation $evaluation, $autorise, $source): Response
    {
        $form = $this->createForm(
            EvaluationType::class,
            $evaluation,
            [
                'action'          => $this->generateUrl('composant_edit_form_evaluation',
                    ['evaluation' => $evaluation->getId(), 'source' => $source, 'autorise' => $autorise]),
                'departement'     => $this->dataUserSession->getDepartement(),
                'semestre'        => $evaluation->getSemestre(),
                'matiereDisabled' => !('app' === $source),
                'autorise'        => $autorise,
                'locale'          => $request->getLocale(),
                'attr'            => [
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
            'form'       => $form->createView(),
            'autorise'   => $autorise,
            'source'     => $source,
        ]);
    }
}
