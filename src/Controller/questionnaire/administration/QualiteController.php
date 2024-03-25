<?php
/*
 * Copyright (c) 2024. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Controller/questionnaire/administration/QualiteController.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 23/02/2024 21:35
 */

namespace App\Controller\questionnaire\administration;

use App\Components\Questionnaire\Adapter\QuestionnaireQualiteAdapter;
use App\Components\Questionnaire\Adapter\SectionQualiteEntityAdapter;
use App\Components\Questionnaire\DTO\AbstractQuestionnaire;
use App\Components\Questionnaire\Questionnaire;
use App\Components\Questionnaire\QuestionnaireRegistry;
use App\Components\Questionnaire\Section\AbstractSection;
use App\Controller\BaseController;
use App\Entity\QuestQuestionnaire;
use App\Table\QualiteTableType;
use JsonException;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;

/** todo: sujet du mail : titre de l'évaluation. Envoi du mail (manuel) ou automatique à l'heure d'ouverture si possible ? */
#[Route('/{type}/qualite', requirements: ['type' => 'administratif|administration'], defaults: ['type' => 'administratif'])]
class QualiteController extends BaseController
{
    /**
     * @throws JsonException
     */
    #[Route('/', name: 'administration_qualite_index', options: ['expose' => true], methods: ['GET', 'POST'])]
    public function index(Request $request): Response
    {
        $this->denyAccessUnlessGranted('MINIMAL_ROLE_ASS', $this->getDepartement());

        $table = $this->createTable(QualiteTableType::class, [
            'departement' => $this->getDepartement(),
        ]);
        $table->handleRequest($request);

        if ($table->isCallback()) {
            return $table->getCallbackResponse();
        }

        return $this->render('administration/qualite/index.html.twig',
            [
                'table' => $table,
            ]);
    }

    #[Route('/{id}/apercu', name: 'administration_qualite_apercu', methods: ['GET', 'POST'])]
    public function apercu(
        Request $request,
        QuestionnaireRegistry $questionnaireRegistry,
        Questionnaire $questionnaire,
        QuestQuestionnaire $questionnaireQualite
    ): Response {
        $typeDestinataire = $questionnaireRegistry->getTypeDestinataire($questionnaireQualite->getTypeDestinataire());
        // $this->denyAccessUnlessGranted('MINIMAL_ROLE_ASS', $this->getDepartement());
        $questionnaire->createQuestionnaire(QuestQuestionnaire::class,
            (new QuestionnaireQualiteAdapter($questionnaireQualite))->getQuestionnaire(),
            [
                'mode' => AbstractQuestionnaire::MODE_APERCU,
                'route' => 'administration_qualite_apercu',
                'params' => ['id' => $questionnaireQualite->getId(), 'type' => $request->get('type')],
            ]);
        $questionnaire->AddSpecialSection(AbstractSection::INTRODUCTION);
        foreach ($questionnaireQualite->getQuestSections() as $section) {
            $questionnaire->addSection((new SectionQualiteEntityAdapter($section))->getSection());
        }

        $questionnaire->AddSpecialSection(AbstractSection::END);

        if ($questionnaire->handleRequest($request)) {
            $questionnaire->setQuestionsForSection();

            return $questionnaire->wizardPage();
        }

        return $this->render('administration/qualite/apercu.html.twig', [
            'questionnaire' => $questionnaire->createView(),
            'semestre' => $questionnaireQualite->getSemestre(),
            'typeDestinataire' => $typeDestinataire::LABEL,
        ]);
    }
}
