<?php
/*
 * Copyright (c) 2022. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Controller/questionnaire/administration/QuestionnaireQualiteController.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 24/10/2022 14:54
 */

namespace App\Controller\questionnaire\administration;

use App\Components\Questionnaire\QuestionnaireRegistry;
use App\Controller\BaseController;
use App\Entity\Constantes;
use App\Entity\QuestionnaireQualite;
use App\Entity\QuestQuestionnaire;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

#[Route('/{type}/questionnaire/qualite', name: 'adm_questionnaire_qualite_', requirements: ['type' => 'administratif|administration'], defaults: ['type' => 'administratif'])]
class QuestionnaireQualiteController extends BaseController
{
    /**
     * @throws \App\Exception\SemestreNotFoundException
     */
    #[Route('/{id}/detail', name: 'detail', methods: ['GET'])]
    public function detail(
        Request $request,
        QuestionnaireRegistry $questionnaireRegistry,
        QuestQuestionnaire $questionnaireQualite
    ): Response {
        // $this->denyAccessUnlessGranted('MINIMAL_ROLE_ASS', $this->getDepartement());

        if (null === $questionnaireQualite->getTypeDestinataire()) {
            $liste = [];
        } else {
            $liste = $questionnaireRegistry->getTypeDestinataire($questionnaireQualite->getTypeDestinataire())
                ->setQuestionnaire($questionnaireQualite)
                ->getListeDestinataire();
        }

        return $this->render('questionnaire/administration/questionnaire_qualite/detail.html.twig',
            [
                'liste' => $liste,
                'questionnaire' => $questionnaireQualite,
                'type' => $request->get('type'),
            ]);
    }

    #[Route('/{id}/duplicate', name: 'duplicate', methods: ['GET', 'POST'])]
    public function duplicate(
        Request $request,
        QuestQuestionnaire $questionnaire
    ): Response {
        $newQuestionnaireQualite = clone $questionnaire;
        $this->entityManager->persist($newQuestionnaireQualite);
        foreach ($questionnaire->getQuestSections() as $section) {
            $nSection = clone $section;
//            $newQuestionnaireQualite->addSection($nSection);
//            if (null !== $nSection->getConfig()) {
//                $t = explode('-', (string) $nSection->getConfig());
//                $nSection->setConfig($t[0].'-');
//            }
//            $nSection->setQuestionnaireQualite($newQuestionnaireQualite);
//            $this->entityManager->persist($nSection);
        }
        $this->entityManager->flush();
        $this->addFlash(Constantes::FLASHBAG_SUCCESS, 'questionnaire.duplicate.success.flashbag');

        return $this->redirectToRoute('adm_questionnaire_creation_index',
            ['questionnaire' => $questionnaire->getId(), 'type' => $request->get('type')]
        );
    }
//
//    #[Route('/{id}', name: 'delete', methods: ['POST'])]
//    public function delete(Request $request, QuestionnaireQualite $questionnaireQualite): Response
//    {
//        if ($this->isCsrfTokenValid('delete'.$questionnaireQualite->getId(),
//            $request->server->get('HTTP_X_CSRF_TOKEN'))) {
//            $this->entityManager->remove($questionnaireQualite);
//            $this->entityManager->flush();
//            $this->addFlashBag(Constantes::FLASHBAG_SUCCESS, 'questionnaire.delete.success.flash');
//        }
//
//        return $this->redirectToRoute('adm_questionnaire_qualite_index', ['type' => $request->get('type')],
//            Response::HTTP_SEE_OTHER);
//    }
}
