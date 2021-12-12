<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Controller/superAdministration/enquete/EnqueteController.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 27/07/2021 09:38
 */

namespace App\Controller\superAdministration\enquete;

use App\Classes\Enquetes\MyEnquete;
use App\Classes\Previsionnel\PrevisionnelManager;
use App\Components\Questionnaire\Adapter\QuestionnaireQualiteAdapter;
use App\Components\Questionnaire\Adapter\SectionQualiteEntityAdapter;
use App\Components\Questionnaire\DTO\AbstractQuestionnaire;
use App\Components\Questionnaire\Questionnaire;
use App\Components\Questionnaire\Section\AbstractSection;
use App\Controller\BaseController;
use App\Entity\Constantes;
use App\Entity\QuestionnaireQualite;
use App\Entity\QuestionnaireQuestionnaireSection;
use App\Entity\Semestre;
use App\Repository\EtudiantRepository;
use App\Repository\QuestionnaireEtudiantReponseRepository;
use App\Repository\QuestionnaireEtudiantRepository;
use App\Table\EnqueteQualiteDiplomesTableType;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

#[Route("/administratif/enquete")]
class EnqueteController extends BaseController
{
    #[Route("/", name: "administratif_enquete_index", options: ['expose' => true])]
    public function index(Request $request, EtudiantRepository $etudiantRepository): Response
    {
        $effectifs = $etudiantRepository->statistiquesEtudiants();
        $table = $this->createTable(EnqueteQualiteDiplomesTableType::class, [
            'effectifs' => $effectifs,
        ]);
        $table->handleRequest($request);

        if ($table->isCallback()) {
            return $table->getCallbackResponse();
        }

        return $this->render('super-administration/enquete/index.html.twig', [
            'table' => $table,
        ]);
    }

    #[Route("/configuraiton/{id}", name: "administratif_enquete_modal_config", options: ['expose' => true])]
    public function modalConfig(
        Questionnaire $questionnaire,
        QuestionnaireQualite $questionnaireQualite): Response
    {
        $questionnaire->createQuestionnaire(QuestionnaireQualite::class,
            (new QuestionnaireQualiteAdapter($questionnaireQualite))->getQuestionnaire(),
            [
                'mode' => AbstractQuestionnaire::MODE_APERCU,
                'route' => 'administratif_enquete_show',
                'params' => ['questionnaireQualite' => $questionnaireQualite->getId()],
            ]);

        foreach ($questionnaireQualite->getSections() as $section) {
            $questionnaire->getOnlySectionConfigurable((new SectionQualiteEntityAdapter($section))->getSection());
        }

        return $this->render('super-administration/enquete/_modalConfig.html.twig', [
            'questionnaireQualite' => $questionnaireQualite,
            'sections' => $questionnaire->getSections()
        ]);
    }

    #[Route("/questionnaire/semestre/{semestre}", name: "administratif_enquete_semestre")]
    public function semestre(
        EtudiantRepository $etudiantRepository,
        QuestionnaireEtudiantRepository $quizzEtudiantRepository,
        Semestre $semestre
    ): Response {
        $stats = [];
        $etudiants = $etudiantRepository->findBySemestre($semestre);
        $quizzEtudiants = $quizzEtudiantRepository->findBySemestreArray($semestre);
        foreach ($semestre->getQualiteQuestionnaires() as $questionnaire) {
            $stats[$questionnaire->getId()]['nbReponses'] = $quizzEtudiantRepository->compteReponse($questionnaire);
        }

        return $this->render('super-administration/enquete/semestre.html.twig', [
            'semestre' => $semestre,
            'nbReponses' => $stats,
            'etudiants' => $etudiants,
            'quizzEtudiant' => $quizzEtudiants,
        ]);
    }

    #[Route("/questionnaire/duplicate/{questionnaire}", name: "administratif_enquete_duplicate")]
    public function duplicate(QuestionnaireQualite $questionnaire): Response
    {
        $newQuestionnaireQualite = clone $questionnaire;
        $this->entityManager->persist($newQuestionnaireQualite);
        foreach ($questionnaire->getSections() as $section) {
            $nSection = clone $section;
            $newQuestionnaireQualite->addSection($nSection);
            if (null !== $nSection->getConfig()) {
                $t = explode('-', $nSection->getConfig());
                $nSection->setConfig($t[0] . '-');
            }
            $nSection->setQuestionnaireQualite($newQuestionnaireQualite);
            $this->entityManager->persist($nSection);
        }
        $this->entityManager->flush();
        $this->addFlash(Constantes::FLASHBAG_SUCCESS, 'questionnaire.duplicate.success.flashbag');

        return $this->redirectToRoute('sadm_questionnaire_qualite_edit',
            ['id' => $newQuestionnaireQualite->getId()]);
    }

    #[Route("/questionnaire/apercu/{questionnaireQualite}", name: "administratif_enquete_show")]
    public function show(
        Request $request,
        Questionnaire $questionnaire,
        QuestionnaireQualite $questionnaireQualite
    ): Response {
        $questionnaire->createQuestionnaire(QuestionnaireQualite::class,
            (new QuestionnaireQualiteAdapter($questionnaireQualite))->getQuestionnaire(),
            [
                'mode' => AbstractQuestionnaire::MODE_APERCU,
                'route' => 'administratif_enquete_show',
                'params' => ['questionnaireQualite' => $questionnaireQualite->getId()],
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

        return $this->render('super-administration/enquete/show.html.twig', [
            'questionnaire' => $questionnaire->createView(),
            'semestre' => $questionnaireQualite->getSemestre(),
        ]);
    }


    #[Route("/questionnaire/export/{questionnaire}", name: "administratif_enquete_export")]
    public function export(
        MyEnquete $myEnquete,
        PrevisionnelManager $previsionnelManager,
        QuestionnaireQualite $questionnaire
    ): Response {
        $previsionnel = $previsionnelManager->getPrevisionnelAnneeArray($questionnaire->getSemestre()->getAnnee(),
            $questionnaire->getSemestre()->getDiplome()->getAnneeUniversitaire()->getAnnee());

        return $myEnquete->exportExcel($questionnaire, $previsionnel);
    }

    #[Route("/questionnaire/{questionnaire}", name: "administratif_enquete_delete", methods: ["DELETE"])]
    public function delete(
        QuestionnaireEtudiantReponseRepository $quizzEtudiantReponseRepository,
        Request $request,
        QuestionnaireQualite $questionnaire
    ): Response {
        $id = $questionnaire->getId();
        if ($this->isCsrfTokenValid('delete' . $id, $request->request->get('_token'))) {
            //suppression des réponses
            $reponses = $reponsesEtudiants = $quizzEtudiantReponseRepository->findByQuestionnaire($questionnaire);
            foreach ($reponses as $reponse) {
                $this->entityManager->remove($reponse);
            }

            //suppression de l'enquete
            //suppression des liens enquetes sections
            $this->entityManager->remove($questionnaire);
            $this->entityManager->flush();
            $this->addFlashBag(Constantes::FLASHBAG_SUCCESS, 'questionnaire.delete.success.flash');

            return $this->json($id, Response::HTTP_OK);
        }
        $this->addFlashBag(Constantes::FLASHBAG_SUCCESS, 'questionnaire.delete.success.flash');

        return $this->json(false, Response::HTTP_INTERNAL_SERVER_ERROR);
    }

    #[Route("/questionnaire/ajax/{section}", name: "administratif_enquete_config_ajax_save", options: ["expose" => true])]
    public function saveConfig(
        Request $request,
        QuestionnaireQuestionnaireSection $section
    ): Response {
        $previs = $request->request->get('previs');
        $str = implode(',', $previs);
        $section->setConfig('BCL:MATIERE-' . $str);
        $this->entityManager->flush();

        return $this->json(true);
    }
}
