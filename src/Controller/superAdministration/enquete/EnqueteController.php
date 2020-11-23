<?php
// Copyright (c) 2020. | David Annebicque | IUT de Troyes  - All Rights Reserved
// @file /Users/davidannebicque/htdocs/intranetV3/src/Controller/superAdministration/enquete/EnqueteController.php
// @author davidannebicque
// @project intranetV3
// @lastUpdate 23/11/2020 17:55

namespace App\Controller\superAdministration\enquete;

use App\Entity\QuestionnaireQualite;
use App\Entity\QuestionnaireQuestionnaireSection;
use App\Entity\Semestre;
use App\Classes\Enquetes\MyEnquete;
use App\Repository\DiplomeRepository;
use App\Repository\EtudiantRepository;
use App\Repository\PrevisionnelRepository;
use App\Repository\QuestionnaireEtudiantRepository;
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
    /**
     * @Route("/", name="administratif_enquete_index")
     * @param EtudiantRepository $etudiantRepository
     * @param DiplomeRepository  $diplomeRepository
     *
     * @return Response
     */
    public function index(EtudiantRepository $etudiantRepository, DiplomeRepository $diplomeRepository): Response
    {
        $effectifs = $etudiantRepository->statistiquesEtudiants();

        return $this->render('super-administration/enquete/index.html.twig', [
            'diplomes'  => $diplomeRepository->findActifs(),
            'effectifs' => $effectifs
        ]);
    }

    /**
     * @Route("/questionnaire/semestre/{semestre}", name="administratif_enquete_semestre")
     *
     * @param QuestionnaireEtudiantRepository $quizzEtudiantRepository
     * @param Semestre                        $semestre
     *
     * @return Response
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
            'quizzEtudiant' => $quizzEtudiants
        ]);
    }

    /**
     * @Route("/questionnaire/create/{semestre}/{step}/{questionnaire}", name="administratif_enquete_semestre_new")
     *
     * @param Semestre                  $semestre
     *
     * @param int                       $step
     *
     * @param QuestionnaireQualite|null $questionnaire
     *
     * @return Response
     */
    public function create(Semestre $semestre, $step = 1, QuestionnaireQualite $questionnaire = null): Response
    {
        return $this->render('super-administration/enquete/create.html.twig', [
            'questionnaire' => $questionnaire,
            'semestre'      => $semestre,
            'step'          => $step
        ]);
    }

    /**
     * @Route("/questionnaire/edit/{questionnaire}/{step}", name="administratif_enquete_edit")
     *
     * @param QuestionnaireQualite $questionnaire
     * @param int                  $step
     *
     * @return Response
     */
    public function edit(QuestionnaireQualite $questionnaire, $step = 1): Response
    {
        return $this->render('super-administration/enquete/edit.html.twig', [
            'questionnaire' => $questionnaire,
            'semestre'      => $questionnaire->getSemestre(),
            'step'          => $step
        ]);
    }

    /**
     * @Route("/questionnaire/duplicate/{questionnaire}", name="administratif_enquete_duplicate")
     *
     * @param QuestionnaireQualite $questionnaire
     *
     * @return Response
     */
    public function duplicate(QuestionnaireQualite $questionnaire): Response
    {
        return $this->render('super-administration/enquete/edit.html.twig', [
            'questionnaire' => $questionnaire,
            'semestre'      => $questionnaire->getSemestre()
        ]);
    }

    /**
     * @param PrevisionnelRepository            $previsionnelRepository
     * @param QuestionnaireQuestionnaireSection $qualiteQuestionnaireSection
     *
     * @param Semestre                          $semestre
     *
     * @return Response
     */
    public function section(
        PrevisionnelRepository $previsionnelRepository,
        QuestionnaireQuestionnaireSection $qualiteQuestionnaireSection,
        Semestre $semestre
    ): Response {

        return $this->render('appEtudiant/qualite/section.html.twig', [
            'ordre'         => $qualiteQuestionnaireSection->getOrdre(),
            'section'       => $qualiteQuestionnaireSection->getSection(),
            'tPrevisionnel' => $previsionnelRepository->findByDiplomeArray($semestre->getDiplome(),
                $semestre->getAnneeUniversitaire()),
            'reponses' => []
        ]);
    }

    /**
     * @Route("/questionnaire/apercu/{questionnaire}", name="administratif_enquete_show")
     *
     * @param QuestionnaireQualite $questionnaire
     *
     * @return Response
     */
    public function show(QuestionnaireQualite $questionnaire): Response
    {
        return $this->render('super-administration/enquete/show.html.twig', [
            'questionnaire' => $questionnaire,
            'semestre'      => $questionnaire->getSemestre()
        ]);
    }

    /**
     * @Route("/questionnaire/reponses/{questionnaire}", name="administratif_enquete_reponses")
     *
     * @param MyEnquete            $myEnquete
     * @param QuestionnaireQualite $questionnaire
     *
     * @return Response
     */
    public function reponses(MyEnquete $myEnquete, QuestionnaireQualite $questionnaire): Response
    {
        $reponses = $myEnquete->getReponseFromQuestionnaire($questionnaire);

        return $this->render('super-administration/enquete/reponses.html.twig', [
            'questionnaire' => $questionnaire,
            'reponses'      => $reponses = null
        ]);
    }

    /**
     * @Route("/questionnaire/export/{questionnaire}", name="administratif_enquete_export")
     *
     * @param MyEnquete              $myEnquete
     * @param PrevisionnelRepository $previsionnelRepository
     * @param QuestionnaireQualite   $questionnaire
     *
     * @return Response
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
     *
     * @param Request              $request
     * @param QuestionnaireQualite $questionnaire
     *
     * @return Response
     */
    public function delete(Request $request, QuestionnaireQualite $questionnaire): Response
    {

    }
}
