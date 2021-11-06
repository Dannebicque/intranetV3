<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Controller/TableController.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 29/08/2021 14:42
 */

namespace App\Controller;

use App\Components\Questionnaire\Adapter\QuestionnaireQualiteAdapter;
use App\Components\Questionnaire\Adapter\QuestionnaireQuestionAdapter;
use App\Components\Questionnaire\Adapter\QuestionnaireSectionAdapter;
use App\Components\Questionnaire\Adapter\SectionQualiteEntityAdapter;
use App\Components\Questionnaire\DTO\AbstractQuestionnaire;
use App\Components\Questionnaire\Questionnaire;
use App\Components\Questionnaire\QuestionnaireRegistry;
use App\Components\Questionnaire\Section\AbstractSection;
use App\Entity\QuestionnaireQualite;
use App\Repository\QuestionnaireQualiteRepository;
use App\Repository\QuestionnaireQuestionnaireSectionRepository;
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

    #[Route('/table-3/{questionnaireQualite}', name: 'table_3', options: ['expose' => true])]
    public function table3(
        Questionnaire $questionnaire,
        QuestionnaireQualite $questionnaireQualite
    ): Response {
        $questionnaire->createQuestionnaire(QuestionnaireQualite::class,
            (new QuestionnaireQualiteAdapter($questionnaireQualite))->getQuestionnaire(),
            ['mode' => AbstractQuestionnaire::MODE_EDITION]);
        $questionnaire->AddSpecialSection(AbstractSection::INTRODUCTION);
        foreach ($questionnaireQualite->getSections() as $section) {
            $questionnaire->addSection((new SectionQualiteEntityAdapter($section))->getSection());
        }
        $questionnaire->AddSpecialSection(AbstractSection::END);


        return $this->render('table/index-3.html.twig', [
            'questionnaire' => $questionnaire->createView(),
        ]);
    }

    #[Route('/wizard-page/', name: 'wizard_page', options: ['expose' => true])]
    public function wizardPage(
        QuestionnaireQualiteRepository $qualiteRepository,
        Questionnaire $questionnaire,
        Request $request
    ): Response {
        $ordreSection = (int)$request->query->get('page');
        $questionnaireQualite = $qualiteRepository->find($request->query->get('questionnaire'));
        if ($questionnaireQualite !== null) {
            $questionnaire->createQuestionnaire(QuestionnaireQualite::class,
                (new QuestionnaireQualiteAdapter($questionnaireQualite))->getQuestionnaire(),
                ['mode' => AbstractQuestionnaire::MODE_EDITION]);
            $questionnaire->AddSpecialSection(AbstractSection::INTRODUCTION);
            foreach ($questionnaireQualite->getSections() as $section) {
                $questionnaire->addSection((new SectionQualiteEntityAdapter($section))->getSection());
            }
            $questionnaire->AddSpecialSection(AbstractSection::END);
            $questionnaire->setQuestionsForSection($ordreSection);


            return $this->render('table/wizard-page.html.twig', [
                'section' => $questionnaire->getSection($ordreSection)
            ]);
        }
    }
}
