<?php
/*
 * Copyright (c) 2022. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Controller/questionnaire/CreationController.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 12/12/2022 16:40
 */

namespace App\Controller\questionnaire;

use App\Components\Questionnaire\QuestionnaireRegistry;
use App\Components\Questionnaire\Section\Section;
use App\Controller\BaseController;
use App\Entity\QuestQuestionnaire;
use App\Entity\QuestSection;
use App\Form\QuestionnaireIntroType;
use App\Repository\QuestQuestionnaireRepository;
use App\Repository\QuestQuestionRepository;
use App\Repository\QuestSectionRepository;
use App\Repository\SemestreRepository;
use App\Utils\JsonRequest;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

#[Route('/{type}/questionnaire/creation', name: 'adm_questionnaire_creation_', requirements: ['type' => 'administratif|administration'], defaults: ['type' => 'administratif'])]
class CreationController extends BaseController
{
    #[Route('/', name: 'index')]
    public function index(
        SemestreRepository $semestreRepository,
        QuestQuestionnaireRepository $questionnaireRepository,
        Request $request
    ): Response {
        if ($request->query->has('questionnaire')) {
            $questionnaire = $questionnaireRepository->find($request->query->get('questionnaire'));
        } else {
            $questionnaire = new QuestQuestionnaire();
            $questionnaire->setLibelle('Définir un libellé');
            $questionnaire->setTitre('Définir un titre');
            $questionnaire->setDepartement($this->getDepartement());
            $questionnaire->setAuteur($this->getUser());

            if ($request->query->has('semestre')) {
                $semestre = $semestreRepository->find($request->query->get('semestre'));
                $questionnaire->setSemestre($semestre);
            }

            $this->entityManager->persist($questionnaire);
            $this->entityManager->flush();
        }

        return $this->render('questionnaire/creation/index.html.twig', [
            'step' => 'intro',
            'questionnaire' => $questionnaire,
            'type' => $request->get('type'),
        ]);
    }

    #[Route('/save/{questionnaire}', name: 'save', methods: ['POST'])]
    public function save(
        Request $request,
        QuestQuestionnaire $questionnaire
    ): Response {
        $data = $request->request->all();
        $step = $request->query->get('step');

        if ('intro' === $step) {
            $questionnaire->setLibelle($data['questionnaire_intro']['libelle']);
            $questionnaire->setTitre($data['questionnaire_intro']['titre']);
            $questionnaire->setTexteDebut($data['questionnaire_intro']['texteDebut']);
            $questionnaire->setTexteExplication($data['questionnaire_intro']['texteExplication']);
            $questionnaire->setTypeDestinataire($data['questionnaire_intro']['typeDestinataire']);
            $this->entityManager->flush();

            return $this->json(true);
        }

        return $this->json(false);
    }

    #[Route('/{questionnaire}', name: 'step')]
    public function step(
        Request $request,
        QuestionnaireRegistry $questionnaireRegistry,
        QuestSectionRepository $questionnaireSectionRepository,
        QuestQuestionRepository $questionnaireQuestionRepository,
        QuestQuestionnaire $questionnaire
    ): Response {
        $step = $request->query->get('step');
        $form = null;
        $liste = null;
        $elt = null;
        switch ($step) {
            case 'addSection':
                $liste = $questionnaireSectionRepository->findByDepartementOrNull($this->getDepartement());
                break;
            case 'intro':
                $form = $this->createForm(QuestionnaireIntroType::class, $questionnaire, [
                    'listeDestinataires' => $questionnaireRegistry->getAllTypeDestinataires(),
                ]);
                break;
            case 'section':
                $idSection = $request->query->get('section');
                $elt = $questionnaireSectionRepository->find($idSection);
                $liste = $questionnaireQuestionRepository->findByDepartementOrNull($this->getDepartement());
                break;
            case 'newSection':
                $idSection = $request->query->get('section');
                $ordre = $questionnaireSectionRepository->getMaxOrdre($questionnaire) + 1;
                if ('new' === $idSection) {
                    $elt = new QuestSection();
                    $elt->setQuestionnaire($questionnaire);
                    $elt->setTitre('Nouvelle section');
                    $elt->setOrdre($ordre);
                    $elt->setTypeSection(Section::class);
                    $this->entityManager->persist($elt);
                } else {
                    $section = $questionnaireSectionRepository->find($idSection);
                    if (null !== $section) {
                        $elt = clone $section;
                        $elt->setTitre('Nouvelle Section ' . $ordre);
                        $elt->setOrdre($ordre);
                        $elt->setQuestionnaire($questionnaire);
                        $this->entityManager->persist($elt);
                    }
                }
                $this->entityManager->flush();
                $liste = $questionnaireQuestionRepository->findByDepartementOrNull($this->getDepartement());
                $step = 'section';
                break;
        }

        return $this->renderForm('questionnaire/creation/step/_step.html.twig', [
            'step' => $step,
            'questionnaire' => $questionnaire,
            'form' => $form,
            'liste' => $liste,
            'sections' => $questionnaire->getQuestSections(),
            'element' => $elt,
            'type' => $request->get('type'),
        ]);
    }

    #[Route('/modal/configurer/{questionnaire}', name: 'modal_configurer')]
    public function configurer(
        QuestQuestionnaire $questionnaire
    ): Response {
        return $this->render('questionnaire/creation/_modalConfig.html.twig', [
            'questionnaire' => $questionnaire,
        ]);
    }

    #[Route('/modal/lancer/{questionnaire}', name: 'modal_lancer')]
    public function lancer(
        Request $request,
        QuestionnaireRegistry $questionnaireRegistry,
        QuestQuestionnaire $questionnaire
    ): Response {
        $typeDest = $questionnaireRegistry->getTypeDestinataire($questionnaire->getTypeDestinataire());
        $typeDest->setQuestionnaire($questionnaire);

        return $this->render('questionnaire/creation/_lancer.html.twig', [
            'questionnaire' => $questionnaire,
            'typeDestinataire' => $typeDest::LABEL,
            'type' => $request->get('type'),
            'liste' => $typeDest->getListe(),
            // todo: la liste devrait fusionner le questionnaire et la liste des étudiants
        ]);
    }

    #[Route('/modal/sauvegarde-lancer/{questionnaire}', name: 'sauvegarde_lancer')]
    public function sauvegardeLancer(
        Request $request,
        QuestionnaireRegistry $questionnaireRegistry,
        QuestQuestionnaire $questionnaire
    ): Response {
        switch ($request->query->get('action')) {
            case 'send':
                $liste = JsonRequest::getValueFromRequest($request, 'liste'); // $request->request->get('liste');
                $typeDest = $questionnaireRegistry->getTypeDestinataire($questionnaire->getTypeDestinataire());
                $typeDest->setQuestionnaire($questionnaire);
                $typeDest->send($liste);
                break;
            case 'save':
                break;
        }

        return $this->json(true);
    }

    #[Route('/modal/add-exterieur/{questionnaire}', name: 'add_exterieur')]
    public function addExterieur(
        Request $request,
        QuestionnaireRegistry $questionnaireRegistry,
        QuestQuestionnaire $questionnaire
    ): Response {
        $typeDest = $questionnaireRegistry->getTypeDestinataire($questionnaire->getTypeDestinataire());
        $typeDest->setQuestionnaire($questionnaire);

        $typeDest->addExterieur(JsonRequest::getFromRequest($request));

        return $this->render('questionnaire/creation/_addExterieur.html.twig', [
            'liste' => $typeDest->getListe()
        ]);
    }
}
