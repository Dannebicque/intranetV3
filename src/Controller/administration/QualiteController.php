<?php
/*
 * Copyright (c) 2022. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Controller/administration/QualiteController.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 24/10/2022 14:54
 */

namespace App\Controller\administration;

use App\Components\Questionnaire\Adapter\QuestionnaireQualiteAdapter;
use App\Components\Questionnaire\Adapter\SectionQualiteEntityAdapter;
use App\Components\Questionnaire\DTO\AbstractQuestionnaire;
use App\Components\Questionnaire\Questionnaire;
use App\Components\Questionnaire\Section\AbstractSection;
use App\Controller\BaseController;
use App\Entity\QuestionnaireQualite;
use App\Exception\SemestreNotFoundException;
use App\Repository\QuestionnaireEtudiantRepository;
use App\Table\QualiteTableType;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

#[Route('/administration/qualite')]
class QualiteController extends BaseController
{
    /**
     * @throws \JsonException
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

    #[Route('/creation', name: 'administration_qualite_index_creation', methods: ['GET'])]
    public function creation(): Response
    {
        $this->denyAccessUnlessGranted('MINIMAL_ROLE_ASS', $this->getDepartement());

        return $this->render('administration/qualite/creation.html.twig',
            [
            ]);
    }

    /**
     * @throws \App\Exception\SemestreNotFoundException
     */
    #[Route('/{id}/detail', name: 'administration_qualite_show', methods: ['GET'])]
    public function show(
        QuestionnaireEtudiantRepository $quizzEtudiantRepository,
        QuestionnaireQualite $questionnaireQualite
    ): Response {
        $this->denyAccessUnlessGranted('MINIMAL_ROLE_ASS', $this->getDepartement());

        $semestre = $questionnaireQualite->getSemestre();
        if (null === $semestre) {
            throw new SemestreNotFoundException();
        }

        $etudiants = $semestre->getEtudiants();
        $quizzEtudiants = $quizzEtudiantRepository->findBySemestreArray($semestre);

        return $this->render('administration/qualite/show.html.twig',
            [
                'semestre' => $semestre,
                'etudiants' => $etudiants,
                'questionnaire' => $questionnaireQualite,
                'quizzEtudiant' => $quizzEtudiants,
            ]);
    }

    #[Route('/{id}/apercu', name: 'administration_qualite_apercu', methods: ['GET', 'POST'])]
    public function apercu(
        Request $request,
        Questionnaire $questionnaire,
        QuestionnaireQualite $questionnaireQualite
    ): Response {
        $this->denyAccessUnlessGranted('MINIMAL_ROLE_ASS', $this->getDepartement());
        $questionnaire->createQuestionnaire(QuestionnaireQualite::class,
            (new QuestionnaireQualiteAdapter($questionnaireQualite))->getQuestionnaire(),
            [
                'mode' => AbstractQuestionnaire::MODE_APERCU,
                'route' => 'administration_qualite_apercu',
                'params' => ['id' => $questionnaireQualite->getId()],
            ]);
        $questionnaire->AddSpecialSection(AbstractSection::INTRODUCTION);
        foreach ($questionnaireQualite->getSections() as $section) {
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
        ]);
    }
}
