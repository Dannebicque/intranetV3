<?php
/*
 * Copyright (c) 2022. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Controller/questionnaire/QuestionnaireMailsController.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 15/12/2022 18:24
 */

namespace App\Controller\questionnaire;

use App\Classes\Enquetes\EnqueteRelance;
use App\Components\Questionnaire\Interfaces\QuestChoixInterface;
use App\Components\Questionnaire\QuestionnaireRegistry;
use App\Controller\BaseController;
use App\Entity\Constantes;
use App\Entity\QuestQuestionnaire;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\RedirectResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;

/**
 * Class QualiteController.
 */
class QuestionnaireMailsController extends BaseController
{
    #[Route('/questionnaire/relance/{questionnaire}', name: 'administratif_enquete_relance')]
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

    #[Route('/questionnaire/relance/{questChoix}', name: 'enquete_relance_individuelle', options: ['expose' => true])]
    public function relanceIndividuelle(
        EnqueteRelance $enqueteRelance,
        QuestChoixInterface $questChoix
    ): JsonResponse {
        $enqueteRelance->envoyerRelanceIndividuelle($questChoix);

        return $this->json(true);
    }
}
