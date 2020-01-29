<?php
// Copyright (C) 11 / 2019 | David annebicque | IUT de Troyes - All Rights Reserved
// @file /Users/davidannebicque/htdocs/intranetv3/src/Controller/administratif/enquete/EnqueteController.php
// @author     David Annebicque
// @project intranetv3
// @date 25/11/2019 10:20
// @lastUpdate 23/11/2019 09:14

namespace App\Controller\superAdministration\enquete;

use App\Entity\QualiteQuestionnaire;
use App\Entity\QualiteQuestionnaireSection;
use App\Entity\QuizzEtudiantReponse;
use App\Entity\QuizzQuestion;
use App\Entity\Semestre;
use App\MesClasses\Excel\MyExcelWriter;
use App\Repository\DiplomeRepository;
use App\Repository\EtudiantRepository;
use App\Repository\PrevisionnelRepository;
use App\Repository\QuizzEtudiantReponseRepository;
use App\Repository\QuizzEtudiantRepository;
use PhpOffice\PhpSpreadsheet\Exception;
use PhpOffice\PhpSpreadsheet\Style\Border;
use PhpOffice\PhpSpreadsheet\Style\NumberFormat;
use PhpOffice\PhpSpreadsheet\Writer\Xlsx;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\StreamedResponse;
use Symfony\Component\Routing\Annotation\Route;

/**
 * @Route("/administratif/enquete")
 */
class EnqueteController extends AbstractController
{
    /**
     * @Route("/", name="administratif_enquete_index")
     * @param DiplomeRepository $diplomeRepository
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
     * @param QuizzEtudiantRepository $quizzEtudiantRepository
     * @param Semestre                $semestre
     *
     * @return Response
     */
    public function semestre(QuizzEtudiantRepository $quizzEtudiantRepository, Semestre $semestre): Response
    {
        $quizzEtudiants = $quizzEtudiantRepository->findBySemestreArray($semestre);

        return $this->render('super-administration/enquete/semestre.html.twig', [
            'semestre'   => $semestre,
            'nbReponses' => $quizzEtudiantRepository->compteReponse($semestre),
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
     * @param QualiteQuestionnaire|null $questionnaire
     *
     * @return Response
     */
    public function create(Semestre $semestre, $step = 1, QualiteQuestionnaire $questionnaire = null): Response
    {
        return $this->render('super-administration/enquete/create.html.twig', [
            'questionnaire' => $questionnaire,
            'semestre' => $semestre,
            'step' => $step
        ]);
    }

    /**
     * @Route("/questionnaire/edit/{questionnaire}/{step}", name="administratif_enquete_edit")
     *
     * @param QualiteQuestionnaire $questionnaire
     * @param int                  $step
     *
     * @return Response
     */
    public function edit(QualiteQuestionnaire $questionnaire, $step = 1): Response
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
     * @param QualiteQuestionnaire $questionnaire
     *
     * @return Response
     */
    public function duplicate(QualiteQuestionnaire $questionnaire): Response
    {
        return $this->render('super-administration/enquete/edit.html.twig', [
            'questionnaire' => $questionnaire,
            'semestre'      => $questionnaire->getSemestre()
        ]);
    }

    /**
     * @param PrevisionnelRepository         $previsionnelRepository
     * @param QualiteQuestionnaireSection    $qualiteQuestionnaireSection
     *
     * @param Semestre                       $semestre
     *
     * @return Response
     */
    public function section(
        PrevisionnelRepository $previsionnelRepository,
        QualiteQuestionnaireSection $qualiteQuestionnaireSection,
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
     * @param QualiteQuestionnaire $questionnaire
     *
     * @return Response
     */
    public function show(QualiteQuestionnaire $questionnaire): Response
    {
        return $this->render('super-administration/enquete/show.html.twig', [
            'questionnaire' => $questionnaire,
            'semestre'      => $questionnaire->getSemestre()
        ]);
    }

    /**
     * @Route("/questionnaire/reponses/{questionnaire}", name="administratif_enquete_reponses")
     *
     * @param QualiteQuestionnaire $questionnaire
     *
     * @return Response
     */
    public function reponses(QualiteQuestionnaire $questionnaire): Response
    {
        $reponses = $questionnaire->getQuizzEtudiantReponses();

        return $this->render('super-administration/enquete/reponses.html.twig', [
            'questionnaire' => $questionnaire,
            'reponses'      => $reponses
        ]);
    }

    /**
     * @Route("/questionnaire/export/{questionnaire}", name="administratif_enquete_export")
     *
     * @param MyExcelWriter        $myExcelWriter
     * @param QualiteQuestionnaire $questionnaire
     *
     * @return Response
     * @throws Exception
     */
    public function export(MyExcelWriter $myExcelWriter, QualiteQuestionnaire $questionnaire): Response
    {
        //data
        $nbEtudiants = count($questionnaire->getSemestre()->getEtudiants());
        $nbReponses = count($questionnaire->getQuizzEtudiants());
        $pourcentageReponses = $nbReponses / $nbEtudiants;
        //export
        $myExcelWriter->createSheet('Export enquete '.$questionnaire->getLibelle());
        $myExcelWriter->getColumnDimension('A', 60);
        $myExcelWriter->getColumnDimension('B', 15);
        $myExcelWriter->getColumnDimension('C', 20);
        $myExcelWriter->mergeCellsCaR(1,1,3,1);
        $myExcelWriter->mergeCellsCaR(1,2,3,2);
        $myExcelWriter->writeCellXY(1,1, $questionnaire->getTitre(), ['color' => 'B8007F', 'font-size' => 16, 'font-weight' => 'bold', 'style' => 'HORIZONTAL_CENTER']);
        $myExcelWriter->writeCellXY(1,2, $questionnaire->getSemestre()->getDiplome()->getDisplay(). ' - '.$questionnaire->getSemestre()->getAnneeUniversitaire()->displayAnneeUniversitaire(), ['color' => 'B8007F', 'font-size' => 16, 'font-weight' => 'bold', 'style' => 'HORIZONTAL_CENTER']);

        $myExcelWriter->borderBottomCellsRange(1,3,3,3, ['color' => 'B8007F', 'size' => Border::BORDER_MEDIUM]);

        $myExcelWriter->writeCellXY(1,5, 'Nombre de questionnaires envoyés :');
        $myExcelWriter->writeCellXY(2,5, $nbEtudiants, ['style' => 'HORIZONTAL_CENTER']);
        $myExcelWriter->writeCellXY(1,6, 'Nombre de questionnaires retournés :');
        $myExcelWriter->writeCellXY(2,6, $nbReponses, ['style' => 'HORIZONTAL_CENTER']);
        $myExcelWriter->writeCellXY(1,7, 'Pourcentage de retours :');
        $myExcelWriter->writeCellXY(2,7, $pourcentageReponses, ['style' => 'HORIZONTAL_CENTER', 'number_format' => NumberFormat::FORMAT_PERCENTAGE_00]);
        $myExcelWriter->borderBottomCellsRange(1,8,3,8, ['color' => 'B8007F', 'size' => Border::BORDER_MEDIUM]);

        $ligne = 11;
        foreach($questionnaire->getQualiteQuestionnaireSections() as $qualiteQuestionnaireSection) {
            $myExcelWriter->writeCellXY(1,$ligne, $qualiteQuestionnaireSection->getOrdre().'. '.$qualiteQuestionnaireSection->getSection()->getTitre(), ['color' => 'B8007F', 'font-size' => 10, 'font-weight' => 'bold']);
            $ligne +=2;
            foreach ($qualiteQuestionnaireSection->getSection()->getQualiteSectionQuestions() as $qualiteSectionQuestion)
            {
                $myExcelWriter->mergeCellsCaR(1,$ligne,3,$ligne);
                $myExcelWriter->writeCellXY(1,$ligne, $qualiteSectionQuestion->getQuestion()->getLibelle(), ['wrap' => true,'font-weight' => 'bold', 'style' => 'HORIZONTAL_CENTER']);
                $ligne++;
                if ($qualiteSectionQuestion->getQuestion()->getType() === QuizzQuestion::QUESTION_TYPE_ECHELLE || $qualiteSectionQuestion->getQuestion()->getType() === QuizzQuestion::QUESTION_TYPE_QCM || $qualiteSectionQuestion->getQuestion()->getType() === QuizzQuestion::QUESTION_TYPE_QCU || $qualiteSectionQuestion->getQuestion()->getType() === QuizzQuestion::QUESTION_TYPE_YESNO) {
                    //si QCU/QCM
                    $myExcelWriter->writeCellXY(1, $ligne, 'Réponse', ['style' => 'HORIZONTAL_CENTER']);
                    $myExcelWriter->writeCellXY(2, $ligne, 'Décompte', ['style' => 'HORIZONTAL_CENTER']);
                    $myExcelWriter->writeCellXY(3, $ligne, 'Pourcentage', ['style' => 'HORIZONTAL_CENTER']);
                    $ligne++;
                    foreach ($qualiteSectionQuestion->getQuestion()->getQuizzReponses() as $reponse) {
                        $myExcelWriter->writeCellXY(1, $ligne, $reponse->getLibelle());
                        $myExcelWriter->writeCellXY(2, $ligne, '0000', ['style' => 'HORIZONTAL_CENTER']);
                        $myExcelWriter->writeCellXY(3, $ligne, 0, ['style' => 'HORIZONTAL_CENTER', 'number_format' => NumberFormat::FORMAT_PERCENTAGE_00]);
                        $ligne++;
                        //si autre, énumérer les réponses autres
                    }
                    $ligne++;
                    if ($qualiteSectionQuestion->getQuestion()->getType() === QuizzQuestion::QUESTION_TYPE_ECHELLE) {
                        //si échelle ... tôt de satisfaction
                        $ligne++;
                        $myExcelWriter->writeCellXY(1, $ligne, 'soit');
                        $myExcelWriter->writeCellXY(1, $ligne, 0, ['align' => 'center','number_format' => NumberFormat::FORMAT_PERCENTAGE_00]);
                        $myExcelWriter->writeCellXY(1, $ligne, 'de satisfaction', ['align' => 'center']);
                        $ligne++;
                    }
                } elseif ($qualiteSectionQuestion->getQuestion()->getType() === QuizzQuestion::QUESTION_TYPE_LIBRE) {
                    $myExcelWriter->writeCellXY(1, $ligne, 'Réponse', ['style' => 'HORIZONTAL_CENTER']);
                    $myExcelWriter->writeCellXY(2, $ligne, '0000', ['style' => 'HORIZONTAL_CENTER']); //nb réponses
                    $myExcelWriter->writeCellXY(3, $ligne, '000%', ['style' => 'HORIZONTAL_CENTER']); //pourcentage sur nb total
                    $ligne++;
                    //liste les réponses
                }
            }
            $ligne++;
            $myExcelWriter->borderBottomCellsRange(1,$ligne,3,$ligne, ['color' => '000000', 'size' => Border::BORDER_THIN]);
            $ligne+=2;
        }

        $writer = new Xlsx($myExcelWriter->getSpreadsheet());

        return new StreamedResponse(
            static function() use ($writer) {
                $writer->save('php://output');
            },
            200,
            [
                'Content-Type'        => 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
                'Content-Disposition' => 'attachment;filename="' . $questionnaire->getLibelle() . '.xlsx"'
            ]
        );
    }

    /**
     * @Route("/questionnaire/{questionnaire}", name="administratif_enquete_delete", methods={"DELETE"})
     *
     * @param QualiteQuestionnaire $questionnaire
     *
     * @return Response
     */
    public function delete(Request $request, QualiteQuestionnaire $questionnaire): Response
    {

    }
}
