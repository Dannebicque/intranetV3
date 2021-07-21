<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Controller/superAdministration/enquete/EnqueteCreationController.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 29/06/2021 09:03
 */

namespace App\Controller\superAdministration\enquete;

use App\Controller\BaseController;
use App\Entity\Constantes;
use App\Entity\QuestionnaireQualite;
use App\Entity\Semestre;
use App\Form\QualiteQuestionnaireType;
use App\Repository\QuestionnaireQuestionRepository;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

/**
 * @Route("/administratif/enquete-creation")
 */
class EnqueteCreationController extends BaseController
{
    /**
     * @Route("/wizard-1/{action}/{semestre}/{qualiteQuestionnaire}", name="administratif_enquete_wizard_1")
     *
     */
    public function wizard1(
        Request $request,
        Semestre $semestre,
        string $action = 'create',
        QuestionnaireQualite $qualiteQuestionnaire = null
    ): Response {
        if (null === $qualiteQuestionnaire) {
            $qualiteQuestionnaire = new QuestionnaireQualite($semestre);
        }

        $form = $this->createForm(QualiteQuestionnaireType::class, $qualiteQuestionnaire, [
            'attr'   => [
                'data-provide' => 'validation',
            ],
            'action' => $this->generateUrl('administratif_enquete_wizard_1',
                [
                    'semestre'             => $semestre->getId(),
                    'action'               => $action,
                    'qualiteQuestionnaire' => $qualiteQuestionnaire->getId(),
                ]),
        ]);

        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $this->entityManager->persist($qualiteQuestionnaire);
            $this->entityManager->flush();
            $this->addFlashBag(Constantes::FLASHBAG_SUCCESS, 'qualiteQuestionnaire.add.success.flash');

            if ('edit' === $action) {
                return $this->redirectToRoute('administratif_enquete_edit',
                    ['questionnaire' => $qualiteQuestionnaire->getId(), 'step' => 2]);
            }

            return $this->redirectToRoute('administratif_enquete_semestre_new', ['semestre' => $semestre->getId(), 'step' => 2, 'questionnaire' => $qualiteQuestionnaire->getId()]);
        }

        return $this->render('super-administration/enqueteCreation/wizard1.html.twig', [
            'form' => $form->createView(),
        ]);
    }

    /**
     * @Route("/wizard-2/{action}/{semestre}/{qualiteQuestionnaire}", name="administratif_enquete_wizard_2")
     *
     */
    public function wizard2(
        QuestionnaireQuestionRepository $quizzQuestionRepository,
        string $action = 'create',
        QuestionnaireQualite $qualiteQuestionnaire = null
    ): Response {
        $questions = $quizzQuestionRepository->findByUser($this->getConnectedUser());

        return $this->render('super-administration/enqueteCreation/wizard2.html.twig', [
            'questionnaire' => $qualiteQuestionnaire,
            'questions'     => $questions,
        ]);
    }
}
