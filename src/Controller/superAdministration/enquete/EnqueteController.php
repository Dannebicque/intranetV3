<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Controller/superAdministration/enquete/EnqueteController.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 27/07/2021 09:38
 */

namespace App\Controller\superAdministration\enquete;

use App\Classes\Enquetes\EnqueteRelance;
use App\Classes\Enquetes\MyEnquete;
use App\Classes\Previsionnel\PrevisionnelManager;
use App\Entity\Constantes;
use App\Entity\QuestionnaireQualite;
use App\Entity\QuestionnaireQuestionnaireSection;
use App\Entity\Semestre;
use App\Repository\DiplomeRepository;
use App\Repository\EtudiantRepository;
use App\Repository\QuestionnaireEtudiantReponseRepository;
use App\Repository\QuestionnaireEtudiantRepository;
use Doctrine\ORM\EntityManagerInterface;
use Doctrine\ORM\NonUniqueResultException;
use Doctrine\ORM\NoResultException;
use PhpOffice\PhpSpreadsheet\Exception;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\Session\Flash\FlashBagInterface;
use Symfony\Component\Routing\Annotation\Route;

/**
 * @Route("/administratif/enquete")
 */
class EnqueteController extends AbstractController
{
    private EntityManagerInterface $entityManager;
    private FlashBagInterface $flashBag;

    /**
     * EnqueteController constructor.
     */
    public function __construct(EntityManagerInterface $entityManager, FlashBagInterface $flashBag)
    {
        $this->entityManager = $entityManager;
        $this->flashBag = $flashBag;
    }

    /**
     * @Route("/", name="administratif_enquete_index")
     */
    public function index(EtudiantRepository $etudiantRepository, DiplomeRepository $diplomeRepository): Response
    {
        $effectifs = $etudiantRepository->statistiquesEtudiants();

        return $this->render('super-administration/enquete/index.html.twig', [
            'diplomes' => $diplomeRepository->findActifs(),
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
            'semestre' => $semestre,
            'nbReponses' => $stats,
            'quizzEtudiant' => $quizzEtudiants,
        ]);
    }

    /**
     * @Route("/questionnaire/relance/{questionnaire}", name="administratif_enquete_relance")
     */
    public function relance(
        FlashBagInterface $flashBag,
        EnqueteRelance $enqueteRelance,
        EtudiantRepository $etudiantRepository,
        QuestionnaireEtudiantRepository $quizzEtudiantRepository,
        QuestionnaireQualite $questionnaire
    ) {
        $reponses = $quizzEtudiantRepository->findByQuestionnaireQualite($questionnaire);
        $etudiants = $etudiantRepository->findBySemestre($questionnaire->getSemestre());

        $enqueteRelance->envoyerRelance($questionnaire, $reponses, $etudiants);
        $flashBag->add(Constantes::FLASHBAG_SUCCESS, 'Message de relance envoyé');

        return $this->redirectToRoute('administratif_enquete_semestre',
            ['semestre' => $questionnaire->getSemestre()->getId()]);
    }

    /**
     * @Route("/questionnaire/create/{semestre}/{step}/{questionnaire}", name="administratif_enquete_semestre_new")
     */
    public function create(Semestre $semestre, int $step = 1, QuestionnaireQualite $questionnaire = null): Response
    {
        return $this->render('super-administration/enquete/create.html.twig', [
            'questionnaire' => $questionnaire,
            'semestre' => $semestre,
            'step' => $step,
        ]);
    }

    /**
     * @Route("/questionnaire/edit/{questionnaire}/{step}", name="administratif_enquete_edit")
     */
    public function edit(
        PrevisionnelManager $previsionnelManager,
        QuestionnaireQualite $questionnaire,
        int $step = 1
    ): Response {
        if (2 === $step) {
            //etape 2 on récupère le prévisionnel
            $previsionnels = $previsionnelManager->getPrevisionnelAnnee($questionnaire->getSemestre()->getAnnee(),
                $questionnaire->getSemestre()->getAnneeUniversitaire()->getAnnee());
        } else {
            $previsionnels = null;
        }

        return $this->render('super-administration/enquete/edit.html.twig', [
            'questionnaire' => $questionnaire,
            'semestre' => $questionnaire->getSemestre(),
            'step' => $step,
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

    public function section(
        PrevisionnelManager $previsionnelManager,
        QuestionnaireQuestionnaireSection $qualiteQuestionnaireSection,
        Semestre $semestre,
        int $onglet = 1
    ): Response {
        //todo: a généraliser avec SAE, Ressources
        return $this->render('appEtudiant/qualite/section.html.twig', [
            'ordre' => $qualiteQuestionnaireSection->getOrdre(),
            'config' => $qualiteQuestionnaireSection,
            'section' => $qualiteQuestionnaireSection->getSection(),
            'tPrevisionnel' => $previsionnelManager->getPrevisionnelAnneeArray($semestre->getAnnee(),
                $semestre->getAnneeUniversitaire()->getAnnee()),
            'reponses' => [],
            'onglet' => $onglet,
            'typeQuestionnaire' => 'qualite',
            'apercu' => true,
        ]);
    }

    /**
     * @Route("/questionnaire/apercu/{questionnaire}", name="administratif_enquete_show")
     */
    public function show(QuestionnaireQualite $questionnaire): Response
    {
        return $this->render('super-administration/enquete/show.html.twig', [
            'questionnaireSections' => $questionnaire->getSections(),
            'questionnaire' => $questionnaire,
            'typeQuestionnaire' => 'qualite',
            'semestre' => $questionnaire->getSemestre(),
            'apercu' => true,
        ]);
    }

    /**
     * @Route("/questionnaire/export/{questionnaire}", name="administratif_enquete_export")
     *
     * @throws Exception
     */
    public function export(
        MyEnquete $myEnquete,
        PrevisionnelManager $previsionnelManager,
        QuestionnaireQualite $questionnaire
    ): Response {
        $previsionnel = $previsionnelManager->getPrevisionnelAnneeArray($questionnaire->getSemestre()->getAnnee(),
            $questionnaire->getSemestre()->getDiplome()->getAnneeUniversitaire()->getAnnee());

        return $myEnquete->exportExcel($questionnaire, $previsionnel);
    }

    /**
     * @Route("/questionnaire/{questionnaire}", name="administratif_enquete_delete", methods={"DELETE"})
     */
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
            $this->flashBag->add(Constantes::FLASHBAG_SUCCESS, 'questionnaire.delete.success.flash');

            return $this->json($id, Response::HTTP_OK);
        }
        $this->flashBag->add(Constantes::FLASHBAG_SUCCESS, 'questionnaire.delete.success.flash');

        return $this->json(false, Response::HTTP_INTERNAL_SERVER_ERROR);
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
