<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Controller/TableController.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 29/08/2021 14:42
 */

namespace App\Controller;

use App\Components\Questionnaire\Adpapter\QuestionnaireQualiteAdapter;
use App\Components\Questionnaire\Adpapter\QuestionnaireQuestionAdapter;
use App\Components\Questionnaire\Adpapter\QuestionnaireSectionAdapter;
use App\Components\Questionnaire\DTO\AbstractQuestionnaire;
use App\Components\Questionnaire\Questionnaire;
use App\Entity\QuestionnaireQualite;
use App\Table\TestTable;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class TableController extends BaseController
{
    #[Route('/table', name: 'table')]
    public function index(): Response
    {
        return $this->render('table/index.html.twig', [
        ]);
    }

    #[Route('/table-2', name: 'table_2', options: ['expose' => true])]
    public function table2(Request $request): Response
    {
        $tableau = $this->createTable(TestTable::class);

        $tableau->handleRequest($request);
        if ($tableau->isCallback()) {
            return $tableau->getCallbackResponse();
        }

        return $this->render('table/index-2.html.twig', [
            'tableau' => $tableau->createView(),
        ]);
    }

    #[Route('/table-3/{questionnaireQualite}', name: 'table_3', options: ['expose' => true])]
    public function table3(
        Request $request,
        QuestionnaireQuestionAdapter $questionnaireQuestionAdapter,
        Questionnaire $questionnaire,
        QuestionnaireQualite $questionnaireQualite
    ): Response {
        $questionnaire->createQuestionnaire(QuestionnaireQualite::class,
            (new QuestionnaireQualiteAdapter($questionnaireQualite))->getQuestionnaire(),
            ['mode' => AbstractQuestionnaire::MODE_EDITION]);

        foreach ($questionnaireQualite->getSections() as $section) {
            $questionnaire->addSection((new QuestionnaireSectionAdapter($section))->getSection());

            foreach ($section->getSection()->getQualiteSectionQuestions() as $question) {
                $questionnaire->addQuestionSection($questionnaireQuestionAdapter->createFromEntity($question,
                    ['mode' => AbstractQuestionnaire::MODE_EDITION])->getQuestion(), $section->getOrdre());
            }
        }

        return $this->render('table/index-3.html.twig', [
            'questionnaire' => $questionnaire->createView(),
        ]);
    }
}
