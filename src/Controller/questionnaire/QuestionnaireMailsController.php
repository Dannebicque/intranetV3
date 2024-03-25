<?php
/*
 * Copyright (c) 2024. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Controller/questionnaire/QuestionnaireMailsController.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 24/02/2024 08:10
 */

namespace App\Controller\questionnaire;

use App\Components\Questionnaire\QuestionnaireRegistry;
use App\Controller\BaseController;
use App\Entity\Constantes;
use App\Entity\QuestQuestionnaire;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\RedirectResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Attribute\Route;

/**
 * Class QualiteController.
 */
class QuestionnaireMailsController extends BaseController
{
    #[Route('/questionnaire/relance/global/{questionnaire}', name: 'administratif_enquete_relance')]
    public function relance(
        Request $request,
        QuestionnaireRegistry $questionnaireRegistry,
        QuestQuestionnaire $questionnaire
    ): RedirectResponse {
        $typeDest = $questionnaireRegistry->getTypeDestinataire($questionnaire->getTypeDestinataire());
        $typeDest->setQuestionnaire($questionnaire);

        $typeDest->sendRelance();

        $this->addFlashBag(Constantes::FLASHBAG_SUCCESS, 'Message de relance envoyé');

        return new RedirectResponse($request->headers->get('referer'));
    }

    #[Route('/questionnaire/relance/individuelle/{idChoix}/{idQuestionniaire}', name: 'enquete_relance_individuelle', options: ['expose' => true])]
    public function relanceIndividuelle(
        QuestionnaireRegistry $questionnaireRegistry,
        int $idChoix,
        QuestQuestionnaire $idQuestionniaire
    ): JsonResponse {
        $typeDest = $questionnaireRegistry->getTypeDestinataire($idQuestionniaire->getTypeDestinataire());
        $typeDest->setQuestionnaire($idQuestionniaire);

        $typeDest->sendRelanceIndividuelle($idChoix, $idQuestionniaire);

        return $this->json(true);
    }
}
