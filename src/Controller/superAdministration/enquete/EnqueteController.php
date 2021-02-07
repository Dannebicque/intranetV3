<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Controller/superAdministration/enquete/EnqueteController.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 07/02/2021 11:20
 */

namespace App\Controller\superAdministration\enquete;

use App\Classes\Enquetes\MyEnquete;
use App\Entity\Constantes;
use App\Entity\QuestionnaireQualite;
use App\Entity\QuestionnaireQuestionnaireSection;
use App\Entity\Semestre;
use App\Repository\DiplomeRepository;
use App\Repository\EtudiantRepository;
use App\Repository\PrevisionnelRepository;
use App\Repository\QuestionnaireEtudiantRepository;
use Doctrine\ORM\EntityManagerInterface;
use Doctrine\ORM\NonUniqueResultException;
use Doctrine\ORM\NoResultException;
use PhpOffice\PhpSpreadsheet\Exception;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

/**
 * @Route("/administratif/enquete")
 */
class EnqueteController extends AbstractController
{
    private EntityManagerInterface $entityManager;

    /**
     * EnqueteController constructor.
     */
    public function __construct(EntityManagerInterface $entityManager)
    {
        $this->entityManager = $entityManager;
    }

    /**
     * @Route("/", name="administratif_enquete_index")
     */
    public function index(EtudiantRepository $etudiantRepository, DiplomeRepository $diplomeRepository): Response
    {
        $effectifs = $etudiantRepository->statistiquesEtudiants();

        return $this->render('super-administration/enquete/index.html.twig', [
            'diplomes'  => $diplomeRepository->findActifs(),
            'effectifs' => $effectifs,
        ]);
    }

    /**
     * @Route("/questionnaire/semestre/{semestre}", name="administratif_enquete_semestre")
     *
     * @throws NoResultException
     * @throws NonUniqueResultException
     */
    public function semestre(QuestionnaireEtudiantRepository $quizzEtudiantRepository, Semestre $semestre): Response
    {
        $stats = [];
        $quizzEtudiants = $quizzEtudiantRepository->findBySemestreArray($semestre);
        foreach ($semestre->getQualiteQuestionnaires() as $questionnaire) {
            $stats[$questionnaire->getId()]['nbReponses'] = $quizzEtudiantRepository->compteReponse($questionnaire);
        }

        return $this->render('super-administration/enquete/semestre.html.twig', [
            'semestre'      => $semestre,
            'nbReponses'    => $stats,
            'quizzEtudiant' => $quizzEtudiants,
        ]);
    }

    /**
     * @Route("/questionnaire/create/{semestre}/{step}/{questionnaire}", name="administratif_enquete_semestre_new")
     *
     * @param int $step
     */
    public function create(Semestre $semestre, $step = 1, QuestionnaireQualite $questionnaire = null): Response
    {
        return $this->render('super-administration/enquete/create.html.twig', [
            'questionnaire' => $questionnaire,
            'semestre'      => $semestre,
            'step'          => $step,
        ]);
    }

    /**
     * @Route("/questionnaire/edit/{questionnaire}/{step}", name="administratif_enquete_edit")
     *
     * @param int $step
     */
    public function edit(
        PrevisionnelRepository $previsionnelRepository,
        QuestionnaireQualite $questionnaire,
        $step = 1
    ): Response {
        if (2 === $step) {
            //etape 2 on récupère le prévisionnel
            $previsionnels = $previsionnelRepository->findPrevisionnelAnnee($questionnaire->getSemestre(),
                $questionnaire->getSemestre()->getAnneeUniversitaire()->getAnnee());
        } else {
            $previsionnels = null;
        }

        return $this->render('super-administration/enquete/edit.html.twig', [
            'questionnaire' => $questionnaire,
            'semestre'      => $questionnaire->getSemestre(),
            'step'          => $step,
            'previsionnels' => $previsionnels,
        ]);
    }

    /**
     * @Route("/questionnaire/duplicate/{questionnaire}", name="administratif_enquete_duplicate")
     */
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

        return $this->redirectToRoute('administratif_enquete_edit',
            ['questionnaire' => $newQuestionnaireQualite->getId()]);
    }

    /**
     * @param int $onglet
     */
    public function section(
        PrevisionnelRepository $previsionnelRepository,
        QuestionnaireQuestionnaireSection $qualiteQuestionnaireSection,
        Semestre $semestre,
        $onglet = 1
    ): Response {
        return $this->render('appEtudiant/qualite/section.html.twig', [
            'ordre'             => $qualiteQuestionnaireSection->getOrdre(),
            'config'            => $qualiteQuestionnaireSection,
            'section'           => $qualiteQuestionnaireSection->getSection(),
            'tPrevisionnel'     => $previsionnelRepository->findByDiplomeArray($semestre->getDiplome(),
                $semestre->getAnneeUniversitaire()),
            'reponses'          => [],
            'onglet'            => $onglet,
            'typeQuestionnaire' => 'qualite',
            'apercu'            => true,
        ]);
    }

    /**
     * @Route("/questionnaire/apercu/{questionnaire}", name="administratif_enquete_show")
     */
    public function show(QuestionnaireQualite $questionnaire): Response
    {
        return $this->render('super-administration/enquete/show.html.twig', [
            'questionnaireSections' => $questionnaire->getSections(),
            'questionnaire'         => $questionnaire,
            'typeQuestionnaire'     => 'qualite',
            'semestre'              => $questionnaire->getSemestre(),
            'apercu'                => true,
        ]);
    }

    /**
     * @Route("/questionnaire/reponses/{questionnaire}", name="administratif_enquete_reponses")
     */
    public function reponses(MyEnquete $myEnquete, QuestionnaireQualite $questionnaire): Response
    {
        $reponses = $myEnquete->getReponseFromQuestionnaire($questionnaire);

        return $this->render('super-administration/enquete/reponses.html.twig', [
            'questionnaire' => $questionnaire,
            'reponses'      => $reponses = null,
        ]);
    }

    /**
     * @Route("/questionnaire/export/{questionnaire}", name="administratif_enquete_export")
     *
     * @throws Exception
     */
    public function export(
        MyEnquete $myEnquete,
        PrevisionnelRepository $previsionnelRepository,
        QuestionnaireQualite $questionnaire
    ): Response {
        $previsionnel = $previsionnelRepository->findByDiplomeArray($questionnaire->getSemestre()->getDiplome(),
            $questionnaire->getSemestre()->getDiplome()->getAnneeUniversitaire());

        return $myEnquete->exportExcel($questionnaire, $previsionnel);
    }

    /**
     * @Route("/questionnaire/{questionnaire}", name="administratif_enquete_delete", methods={"DELETE"})
     */
    public function delete(Request $request, QuestionnaireQualite $questionnaire): Response
    {
        //suppression de l'enquete
        //suppression des liens enquetes sections
    }

    /**
     * @Route("/questionnaire/ajax/{section}", name="administratif_enquete_config_ajax_save", options={"expose":true})
     */
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
