<?php
// Copyright (C) 11 / 2019 | David annebicque | IUT de Troyes - All Rights Reserved
// @file /Users/davidannebicque/htdocs/intranetv3/src/Controller/administratif/enquete/EnqueteCreationController.php
// @author     David Annebicque
// @project intranetv3
// @date 25/11/2019 10:20
// @lastUpdate 23/11/2019 09:14

namespace App\Controller\superAdministration\enquete;

use App\Controller\BaseController;
use App\Entity\Constantes;
use App\Entity\QualiteQuestionnaire;
use App\Entity\QuizzQuestion;
use App\Entity\Semestre;
use App\Form\QualiteQuestionnaireType;
use App\Repository\QuizzQuestionRepository;
use App\Repository\SemestreRepository;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

/**
 * @Route("/super-administration/enquete-creation")
 */
class EnqueteCreationController extends BaseController
{
    /**
     * @Route("/wizard-1/{action}/{semestre}/{qualiteQuestionnaire}", name="administratif_enquete_wizard_1")
     * @param Request                   $request
     * @param Semestre                  $semestre
     *
     * @param string                    $action
     * @param QualiteQuestionnaire|null $qualiteQuestionnaire
     *
     * @return Response
     */
    public function wizard1(Request $request, Semestre $semestre, $action = 'create', QualiteQuestionnaire $qualiteQuestionnaire = null): Response
    {
        if ($qualiteQuestionnaire === null) {
            $qualiteQuestionnaire = new QualiteQuestionnaire($semestre);
        }

        $form = $this->createForm(QualiteQuestionnaireType::class, $qualiteQuestionnaire, [
            'attr' => [
                'data-provide' => 'validation'
            ],
            'action' => $this->generateUrl('administratif_enquete_wizard_1', ['semestre' => $semestre-> getId(), 'action' => $action])
        ]);

        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $this->entityManager->persist($qualiteQuestionnaire);
            $this->entityManager->flush();
            $this->addFlashBag(Constantes::FLASHBAG_SUCCESS, 'qualiteQuestionnaire.add.success.flash');

            if ($action === 'edit') {
                return $this->redirectToRoute('administratif_enquete_edit', ['questionnaire' => $qualiteQuestionnaire->getId(), 'step' => 2]);
            }
            return $this->redirectToRoute('administratif_enquete_semestre_new', ['semestre' => $semestre->getId(), 'step' => 2, 'questionnaire' => $qualiteQuestionnaire->getId()]);
        }

        return $this->render('super-administration/enqueteCreation/wizard1.html.twig', [
            'form' => $form->createView()
        ]);
    }

    /**
     * @Route("/wizard-2/{action}/{semestre}/{qualiteQuestionnaire}", name="administratif_enquete_wizard_2")
     *
     * @param string                    $action
     * @param QualiteQuestionnaire|null $qualiteQuestionnaire
     *
     * @return Response
     */
    public function wizard2(QuizzQuestionRepository $quizzQuestionRepository, $action = 'create', QualiteQuestionnaire $qualiteQuestionnaire = null): Response
    {
        $questions = $quizzQuestionRepository->findByUser($this->getConnectedUser());

        return $this->render('super-administration/enqueteCreation/wizard2.html.twig', [
            'questionnaire' => $qualiteQuestionnaire,
            'questions' => $questions
        ]);
    }
}
