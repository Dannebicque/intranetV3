<?php
/*
 * Copyright (c) 2024. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Controller/questionnaire/administration/QuestionnaireResultatController.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 16/02/2024 22:17
 */

namespace App\Controller\questionnaire\administration;

use App\Components\Questionnaire\Adapter\QuestionnaireQualiteAdapter;
use App\Components\Questionnaire\Adapter\SectionQualiteEntityAdapter;
use App\Components\Questionnaire\DTO\AbstractQuestionnaire;
use App\Components\Questionnaire\Questionnaire;
use App\Components\Questionnaire\QuestionnaireExportExcel;
use App\Components\Questionnaire\QuestionnaireExportExcelBrut;
use App\Components\Questionnaire\Section\AbstractSection;
use App\Controller\BaseController;
use App\Entity\QuestQuestionnaire;
use App\Repository\QuestChoixRepository;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;

#[Route('/{type}/questionnaire/qualite/resultats', name: 'adm_questionnaire_qualite_resultats_', requirements: ['type' => 'administratif|administration'], defaults: ['type' => 'administratif'])]
class QuestionnaireResultatController extends BaseController
{
    #[Route('/export/{id}.xlsx', name: 'export', methods: ['GET'])]
    public function exportExcel(
        QuestionnaireExportExcel $questionnaireExportExcel,
        QuestChoixRepository $questChoixRepository,
        Questionnaire $questionnaire,
        QuestQuestionnaire $questionnaireQualite
    ): Response {
        $reponsesEtudiants = $questChoixRepository->findByQuestionnaire($questionnaireQualite);
        foreach ($reponsesEtudiants as $reponse) {
            $questionnaire->addChoix($reponse);
        }

        $questionnaire->createQuestionnaire(QuestQuestionnaire::class,
            (new QuestionnaireQualiteAdapter($questionnaireQualite))->getQuestionnaire(),
            [
                'mode' => AbstractQuestionnaire::MODE_RESULTAT_EXCEL,
            ]);
        $questionnaire->AddSpecialSection(AbstractSection::INTRODUCTION);
        foreach ($questionnaireQualite->getQuestSections() as $section) {
            $questionnaire->addSection((new SectionQualiteEntityAdapter($section))->getSection());
        }

        $questionnaire->AddSpecialSection(AbstractSection::END);
        $questionnaire->calculResultats($questionnaire->getListeChoix());

        return $questionnaireExportExcel->exportExcel($questionnaire, $questionnaireQualite);
    }

    #[Route('/export-brut/{id}.xlsx', name: 'export_brut', methods: ['GET'])]
    public function exportExcelBrut(
        QuestionnaireExportExcelBrut $questionnaireExportExcel,
        QuestChoixRepository         $questChoixRepository,
        Questionnaire                $questionnaire,
        QuestQuestionnaire           $questionnaireQualite
    ): Response
    {
        $reponsesEtudiants = $questChoixRepository->findByQuestionnaire($questionnaireQualite);
        $tReponses = [];
        foreach ($reponsesEtudiants as $reponsesEtudiant) {
            if (!array_key_exists($reponsesEtudiant->getCleTypeDestinataire(), $tReponses)) {
                $tReponses[$reponsesEtudiant->getCleTypeDestinataire()] = [];
            }

            $tReponses[$reponsesEtudiant->getCleTypeDestinataire()][$reponsesEtudiant->getQuestion()?->getCle()] = $reponsesEtudiant;
        }


        $questionnaire->createQuestionnaire(QuestQuestionnaire::class,
            (new QuestionnaireQualiteAdapter($questionnaireQualite))->getQuestionnaire(),
            [
                'mode' => AbstractQuestionnaire::MODE_RESULTAT_EXCEL,
            ]);
        $questionnaire->AddSpecialSection(AbstractSection::INTRODUCTION);
        foreach ($questionnaireQualite->getQuestSections() as $section) {
            $questionnaire->addSection((new SectionQualiteEntityAdapter($section))->getSection());
        }

        $questionnaire->AddSpecialSection(AbstractSection::END);
        $questionnaire->calculResultats($questionnaire->getListeChoix());

        return $questionnaireExportExcel->exportExcel($questionnaire, $questionnaireQualite, $tReponses);
    }

    #[Route('/affiche-{type_view}/{id}', name: 'resultats', requirements: ['type_view' => 'graphiques|tableaux'], methods: ['GET'])]
    public function afficheResultats(
        Request $request,
        QuestChoixRepository $questChoixRepository,
        Questionnaire $questionnaire,
        QuestQuestionnaire $questionnaireQualite
    ): Response {
        $reponsesEtudiants = $questChoixRepository->findByQuestionnaire($questionnaireQualite);
        foreach ($reponsesEtudiants as $reponse) {
            $questionnaire->addChoix($reponse);
        }

        $questionnaire->createQuestionnaire(QuestQuestionnaire::class,
            (new QuestionnaireQualiteAdapter($questionnaireQualite))->getQuestionnaire(),
            [
                'mode' => 'graphiques' === $request->get('type_view') ? AbstractQuestionnaire::MODE_RESULTAT_GRAPHIQUE : AbstractQuestionnaire::MODE_RESULTAT_TABLEAU,
            ]);
        $questionnaire->AddSpecialSection(AbstractSection::INTRODUCTION);
        foreach ($questionnaireQualite->getQuestSections() as $section) {
            $questionnaire->addSection((new SectionQualiteEntityAdapter($section))->getSection());
        }

        $questionnaire->AddSpecialSection(AbstractSection::END);
        $questionnaire->calculResultats($questionnaire->getListeChoix());

        return $this->render('questionnaire/administration/questionnaire_resultats/affiche.html.twig', [
            'questionnaire' => $questionnaire->createView(),
            'questionnaireQualite' => $questionnaireQualite,
            'type' => $request->get('type'),
            'type_view' => $request->get('type_view'),
        ]);
    }
}
