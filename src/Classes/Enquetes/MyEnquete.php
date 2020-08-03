<?php
// Copyright (c) 2020. | David Annebicque | IUT de Troyes  - All Rights Reserved
// @file /Users/davidannebicque/htdocs/intranetV3/src/Classes/Enquetes/MyEnquete.php
// @author davidannebicque
// @project intranetV3
// @lastUpdate 03/08/2020 16:52

namespace App\Classes\Enquetes;


use App\Entity\Previsionnel;
use App\Entity\QualiteQuestionnaire;
use App\Entity\QualiteSection;
use App\Entity\QuizzEtudiant;
use App\Entity\QuizzEtudiantReponse;
use App\Entity\QuizzQuestion;
use App\Classes\Excel\MyExcelWriter;
use App\Classes\Tools;
use App\Repository\QuizzEtudiantReponseRepository;
use App\Repository\QuizzEtudiantRepository;
use PhpOffice\PhpSpreadsheet\Exception;
use PhpOffice\PhpSpreadsheet\Style\Border;
use PhpOffice\PhpSpreadsheet\Style\NumberFormat;
use PhpOffice\PhpSpreadsheet\Writer\Xlsx;
use Symfony\Component\HttpFoundation\StreamedResponse;

class MyEnquete
{

    private QuizzEtudiantReponseRepository $quizzEtudiantReponseRepository;

    private QuizzEtudiantRepository $quizzEtudiantRepository;
    private array $resultatQuestion = [];
    private MyExcelWriter $myExcelWriter;
    private int $ligne;

    /** @var Previsionnel[] */
    private array $previsionnel;

    /**
     * @var float|int
     */
    private $nbReponses = 0;

    /**
     * @var float|int
     */
    private $sommePourcentage = 0;

    /**
     * MyEnquete constructor.
     *
     * @param QuizzEtudiantReponseRepository $quizzEtudiantReponseRepository
     * @param QuizzEtudiantRepository        $quizzEtudiantRepository
     * @param MyExcelWriter                  $myExcelWriter
     */
    public function __construct(
        QuizzEtudiantReponseRepository $quizzEtudiantReponseRepository,
        QuizzEtudiantRepository $quizzEtudiantRepository,
        MyExcelWriter $myExcelWriter
    ) {
        $this->quizzEtudiantReponseRepository = $quizzEtudiantReponseRepository;
        $this->quizzEtudiantRepository = $quizzEtudiantRepository;
        $this->myExcelWriter = $myExcelWriter;
    }

    /**
     * @param QualiteQuestionnaire $questionnaire
     * @param                      $previsionnel
     *
     * @return StreamedResponse
     * @throws Exception
     */
    public function exportExcel(QualiteQuestionnaire $questionnaire, $previsionnel): StreamedResponse
    {
        $this->previsionnel = $previsionnel;
        //data
        $this->getReponseFromQuestionnaire($questionnaire);
        $nbEtudiants = count($questionnaire->getSemestre()->getEtudiants());
        $this->nbReponses = count($questionnaire->getQuizzEtudiants());
        $pourcentageReponses = $this->nbReponses / $nbEtudiants;
        //export
        $this->myExcelWriter->createSheet(substr('Exp ' . $questionnaire->getLibelle(), 0, 31));
        $this->myExcelWriter->getColumnDimension('A', 60);
        $this->myExcelWriter->getColumnDimension('B', 15);
        $this->myExcelWriter->getColumnDimension('C', 20);
        $this->myExcelWriter->mergeCellsCaR(1, 1, 3, 1);
        $this->myExcelWriter->mergeCellsCaR(1, 2, 3, 2);
        $this->myExcelWriter->writeCellXY(1, 1, $questionnaire->getTitre(),
            ['color' => 'B8007F', 'font-size' => 16, 'font-weight' => 'bold', 'style' => 'HORIZONTAL_CENTER']);
        $this->myExcelWriter->writeCellXY(1, 2,
            $questionnaire->getSemestre()->getDiplome()->getDisplay() . ' - ' . $questionnaire->getSemestre()->getAnneeUniversitaire()->displayAnneeUniversitaire(),
            ['color' => 'B8007F', 'font-size' => 16, 'font-weight' => 'bold', 'style' => 'HORIZONTAL_CENTER']);

        $this->myExcelWriter->borderBottomCellsRange(1, 3, 3, 3,
            ['color' => 'B8007F', 'size' => Border::BORDER_MEDIUM]);

        $this->myExcelWriter->writeCellXY(1, 5, 'Nombre de questionnaires envoyés :');
        $this->myExcelWriter->writeCellXY(2, 5, $nbEtudiants, ['style' => 'HORIZONTAL_CENTER']);
        $this->myExcelWriter->writeCellXY(1, 6, 'Nombre de questionnaires retournés :');
        $this->myExcelWriter->writeCellXY(2, 6, $this->nbReponses, ['style' => 'HORIZONTAL_CENTER']);
        $this->myExcelWriter->writeCellXY(1, 7, 'Pourcentage de retours :');
        $this->myExcelWriter->writeCellXY(2, 7, $pourcentageReponses,
            ['style' => 'HORIZONTAL_CENTER', 'number_format' => NumberFormat::FORMAT_PERCENTAGE]);
        $this->myExcelWriter->borderBottomCellsRange(1, 8, 3, 8,
            ['color' => 'B8007F', 'size' => Border::BORDER_MEDIUM]);

        $this->ligne = 11;
        foreach ($questionnaire->getQualiteQuestionnaireSections() as $qualiteQuestionnaireSection) {
            if ($qualiteQuestionnaireSection->getSection() !== null) {
                $this->myExcelWriter->writeCellXY(1, $this->ligne,
                    $qualiteQuestionnaireSection->getOrdre() . '. ' . $qualiteQuestionnaireSection->getSection()->getTitre(),
                    ['color' => 'B8007F', 'font-size' => 10, 'font-weight' => 'bold']);
                $this->ligne += 2;
                if ($qualiteQuestionnaireSection->getSection()->getConfig() !== null && $qualiteQuestionnaireSection->getSection()->getConfig() !== '') {
                    $arrayConfig = explode('-', $qualiteQuestionnaireSection->getSection()->getConfig());
                    $arrayConfig = explode(',', $arrayConfig[1]);
                    foreach ($arrayConfig as $config) {
                        foreach ($qualiteQuestionnaireSection->getSection()->getQualiteSectionQuestions() as $qualiteSectionQuestion) {
                            $this->writeExcelQuestion($qualiteSectionQuestion->getQuestion(),
                                $qualiteQuestionnaireSection->getSection(), '_c' . $config);
                        }
                        $this->ligne++;
                        $this->myExcelWriter->borderBottomCellsRange(1, $this->ligne, 3, $this->ligne,
                            ['color' => '000000', 'size' => Border::BORDER_THIN]);
                        $this->ligne += 2;
                    }
                } else {
                    foreach ($qualiteQuestionnaireSection->getSection()->getQualiteSectionQuestions() as $qualiteSectionQuestion) {
                        $this->writeExcelQuestion($qualiteSectionQuestion->getQuestion(),
                            $qualiteQuestionnaireSection->getSection());
                    }
                    $this->ligne++;
                    $this->myExcelWriter->borderBottomCellsRange(1, $this->ligne, 3, $this->ligne,
                        ['color' => '000000', 'size' => Border::BORDER_THIN]);
                    $this->ligne += 2;
                }
            }
        }

        $writer = new Xlsx($this->myExcelWriter->getSpreadsheet());

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
     * @param QualiteQuestionnaire $questionnaire
     */
    public function getReponseFromQuestionnaire(QualiteQuestionnaire $questionnaire): void
    {
        $questionnaire1 = $questionnaire;
        $quizzEtudiants = $this->quizzEtudiantRepository->findBy(['questionnaire' => $questionnaire->getId()]);
        $nbQuizzEtudiants = count($quizzEtudiants);
        $reponsesEtudiants = $this->quizzEtudiantReponseRepository->findByQuestionnaire($questionnaire);

        /** @var QuizzEtudiantReponse $reponse */
        foreach ($reponsesEtudiants as $reponse) {
            $cle = $reponse->getCleQuestion();
            if (!array_key_exists($cle, $this->resultatQuestion)) {
                $this->resultatQuestion[$cle]['nbreponse'] = 0;
                $this->resultatQuestion[$cle]['totalReponse'] = [];
                $this->resultatQuestion[$cle]['autre'] = [];
            }
            $this->resultatQuestion[$cle]['nbreponse']++;
            $cleR = $reponse->getValeur();
            if (!array_key_exists($cleR, $this->resultatQuestion[$cle]['totalReponse'])) {
                $this->resultatQuestion[$cle]['totalReponse'][$cleR] = 0;
            }

            $this->resultatQuestion[$cle]['totalReponse'][$cleR]++;


        }
    }

    /**
     * @param QuizzQuestion  $question
     * @param QualiteSection $section
     * @param string         $config
     *
     * @throws Exception
     */
    private function writeExcelQuestion(QuizzQuestion $question, QualiteSection $section, $config = ''): void
    {
        if ($config === '') {
            $libQuestion = $question->getLibelle();
        } else {
            $c = substr($config, 2, strlen($config));
            if (array_key_exists($c, $this->previsionnel)) {
                $libQuestion = Tools::personnaliseTexte($question->getLibelle(), [
                    'matiere'   => $this->previsionnel[$c]->getMatiere()->getLibelle(),
                    'personnel' => $this->previsionnel[$c]->getPersonnel()->getDisplayPr()
                ]);
            }
        }
        $this->ligne++;
        $this->myExcelWriter->mergeCellsCaR(1, $this->ligne, 3, $this->ligne);
        $this->myExcelWriter->writeCellXY(1, $this->ligne, $libQuestion,
            ['wrap' => true, 'font-weight' => 'bold', 'style' => 'HORIZONTAL_CENTER', 'valign' => 'VERTICAL_TOP']);
        if (strlen($libQuestion) > 92) {
            $this->myExcelWriter->getRowDimension($this->ligne, 30);
        }
        $this->ligne++;
        //texte d'aide de la question
        $this->myExcelWriter->mergeCellsCaR(1, $this->ligne, 3, $this->ligne);
        $this->myExcelWriter->writeCellXY(1, $this->ligne, $question->getHelp(),
            ['wrap' => true, 'font-italic' => true, 'style' => 'HORIZONTAL_CENTER']);
        $this->ligne++;

        if ($section->getTypeCalcul() === QualiteSection::GROUPE) {
            $this->myExcelWriter->writeCellXY(3, $this->ligne, '% satisfaction',
                ['wrap' => true, 'style' => 'HORIZONTAL_CENTER']);
            $this->ligne++;
        }

        if ($question->getQuestionParent() === null && count($question->getQuestionsEnfants()) === 0) {

            //si QCU/QCM
            $this->writeExcelReponses($question, $section, $config);

        } else {
            $this->sommePourcentage = 0;
            $nbQuestionsPourcentage = 0;
            foreach ($question->getQuestionsEnfants() as $subQuestion) {

                $this->ligne++;
                if ($section->getTypeCalcul() === QualiteSection::GROUPE) {
                    $this->myExcelWriter->writeCellXY(1, $this->ligne, $subQuestion->getLibelle(),
                        ['wrap' => true, 'style' => $subQuestion->getAlignement()]);
                } elseif ($section->getTypeCalcul() === QualiteSection::DETAIL) {
                    $this->myExcelWriter->mergeCellsCaR(1, $this->ligne, 3, $this->ligne);
                    $this->myExcelWriter->writeCellXY(1, $this->ligne, $subQuestion->getLibelle(),
                        ['wrap' => true, 'font-weight' => 'bold', 'style' => 'HORIZONTAL_CENTER']);
                    $this->ligne++;
                }
                //si QCU/QCM
                $nbQuestionsPourcentage++;
                $this->writeExcelReponses($subQuestion, $section, $config, $question);
            }
            if ($section->getTypeCalcul() === QualiteSection::GROUPE) {
                $moyenne = $this->sommePourcentage / $nbQuestionsPourcentage;
                $this->myExcelWriter->writeCellXY(1, $this->ligne, 'Satisfaction globale =',
                    ['wrap' => true, 'font-weight' => 'bold', 'style' => 'HORIZONTAL_CENTER']);
                $this->myExcelWriter->writeCellXY(3, $this->ligne, $moyenne,
                    ['wrap'          => true,
                     'font-weight'   => 'bold',
                     'style'         => 'HORIZONTAL_CENTER',
                     'number_format' => NumberFormat::FORMAT_PERCENTAGE
                    ]);
                $this->ligne++;
            }

        }

    }

    /**
     * @param QuizzQuestion      $question
     * @param QualiteSection     $section
     * @param string             $config
     * @param QuizzQuestion|null $questionParent
     */
    private function writeExcelReponses(
        QuizzQuestion $question,
        QualiteSection $section,
        $config = '',
        QuizzQuestion $questionParent = null
    ): void
    {
        if ($questionParent === null) {
            $questionParent = $question;
        }
        $satisfaction = 0;
        $nbProps = 0;

        if (in_array($question->getType(), [
            QuizzQuestion::QUESTION_TYPE_ECHELLE,
            QuizzQuestion::QUESTION_TYPE_QCM,
            QuizzQuestion::QUESTION_TYPE_QCU,
            QuizzQuestion::QUESTION_TYPE_YESNO
        ], true)) {
            if ($section->getTypeCalcul() === QualiteSection::DETAIL) {
                $this->myExcelWriter->writeCellXY(1, $this->ligne, 'Réponse', ['style' => 'HORIZONTAL_CENTER']);
                $this->myExcelWriter->writeCellXY(2, $this->ligne, 'Décompte', ['style' => 'HORIZONTAL_CENTER']);
                $this->myExcelWriter->writeCellXY(3, $this->ligne, 'Pourcentage', ['style' => 'HORIZONTAL_CENTER']);
                $this->ligne++;
            }

            $cleQ = $question->getCle() . $config;
            $nbTotalReponseQuestion = 0;
            foreach ($questionParent->getQuizzReponses() as $reponse) {
                $cleR = $reponse->getValeur();
                $nbProps++;
                $totRep = 0;
                if (array_key_exists($cleQ, $this->resultatQuestion) && array_key_exists($cleR,
                        $this->resultatQuestion[$cleQ]['totalReponse'])) {
                    $nbReponses = $this->resultatQuestion[$cleQ]['totalReponse'][$cleR];

                    if (is_int($this->resultatQuestion[$cleQ]['totalReponse'][$cleR])) {
                        $pourcentage = $this->resultatQuestion[$cleQ]['totalReponse'][$cleR] / $this->resultatQuestion[$cleQ]['nbreponse'];

                        if (is_int((int)$reponse->getLibelle())) {
                            $totRep = $nbReponses * (int)$reponse->getLibelle();
                            $nbTotalReponseQuestion += $nbReponses;
                            $satisfaction += $totRep;
                        }

                    } else {
                        $pourcentage = 0;
                    }
                } else {
                    $nbReponses = 0;
                    $pourcentage = 0;
                }

                if ($reponse->getLibelle() == 'Je n\'ai pas suivi ce cours') {
                    $nbProps--;
                    $retire = $nbReponses;
                } else {
                    $retire = 0;
                }
                //version détaillée, on affiche tout.
                if ($section->getTypeCalcul() === QualiteSection::DETAIL) {
                    $this->myExcelWriter->writeCellXY(1, $this->ligne, $reponse->getLibelle(),
                        ['style' => $reponse->getAlignement()]);
                    $this->myExcelWriter->writeCellXY(2, $this->ligne, $nbReponses,
                        ['style' => 'HORIZONTAL_CENTER']);
                    $this->sommePourcentage += $pourcentage;
                    $this->myExcelWriter->writeCellXY(3, $this->ligne, $pourcentage, [
                        'style'         => 'HORIZONTAL_CENTER',
                        'number_format' => NumberFormat::FORMAT_PERCENTAGE
                    ]);
                    $this->ligne++;
                }
                //si autre, énumérer les réponses autres
                if (array_key_exists($cleQ . '_autre',
                        $this->resultatQuestion) && $reponse->getValeur() === 'CHX:OTHER') {
                    foreach ($this->resultatQuestion[$cleQ . '_autre']['totalReponse'] as $key => $value) {
                        $this->myExcelWriter->writeCellXY(1, $this->ligne, $key,
                            ['wrap' => true, 'style' => 'HORIZONTAL_LEFT', 'valign' => 'VERTICAL_TOP']);
                        $nbCar = strlen($key);
                        if ($nbCar > 55) {
                            $n = ceil($nbCar / 55);
                            $this->myExcelWriter->getRowDimension($this->ligne, 15 * $n);
                        }
                        $this->ligne++;
                    }
                }

            }
            if ($question->getType() === QuizzQuestion::QUESTION_TYPE_ECHELLE) {
                //si échelle ... tôt de satisfaction
                $total = $satisfaction / ($nbProps * ($nbTotalReponseQuestion - $retire));
                if ($section->getTypeCalcul() === QualiteSection::DETAIL) {
                    $this->myExcelWriter->writeCellXY(1, $this->ligne, 'soit',
                        ['font-weight' => 'bold', 'style' => 'HORIZONTAL_CENTER']);
                    $this->myExcelWriter->writeCellXY(2, $this->ligne, $total,
                        ['font-weight'   => 'bold',
                         'style'         => 'HORIZONTAL_CENTER',
                         'number_format' => NumberFormat::FORMAT_PERCENTAGE
                        ]);
                    $this->myExcelWriter->writeCellXY(3, $this->ligne, 'de satisfaction',
                        ['font-weight' => 'bold', 'style' => 'HORIZONTAL_CENTER']);
                    $this->ligne++;
                } elseif ($section->getTypeCalcul() === QualiteSection::GROUPE) {
                    $this->sommePourcentage += $total;
                    $this->myExcelWriter->writeCellXY(3, $this->ligne, $total,
                        ['style' => 'HORIZONTAL_CENTER', 'number_format' => NumberFormat::FORMAT_PERCENTAGE]);
                }
            }
        } elseif ($question->getType() === QuizzQuestion::QUESTION_TYPE_LIBRE) {
            $this->myExcelWriter->writeCellXY(1, $this->ligne, 'Réponse', ['style' => 'HORIZONTAL_CENTER']);

            $lgRep = $this->ligne;
            $nbRep = 0;
            $this->ligne++;
            $cleQ = 'quizz_question_text_q' . $question->getId();
            if (array_key_exists($cleQ, $this->resultatQuestion)) {
                //liste les réponses
                foreach ($this->resultatQuestion[$cleQ]['totalReponse'] as $key => $rep) {
                    $nbRep++;
                    $this->myExcelWriter->writeCellXY(1, $this->ligne, $key,
                        ['wrap' => true, 'style' => 'HORIZONTAL_LEFT', 'valign' => 'VERTICAL_TOP']);
                    $nbCar = strlen($key);
                    if ($nbCar > 55) {
                        $n = ceil($nbCar / 55);
                        $this->myExcelWriter->getRowDimension($this->ligne, 15 * $n);
                    }
                    $this->ligne++;
                }
            }
            $p = number_format($nbRep / $this->nbReponses * 100);
            $this->myExcelWriter->writeCellXY(2, $lgRep, $nbRep, ['style' => 'HORIZONTAL_CENTER']);
            $this->myExcelWriter->writeCellXY(3, $lgRep, $p . '%', ['style' => 'HORIZONTAL_CENTER']);
        }
    }
}
