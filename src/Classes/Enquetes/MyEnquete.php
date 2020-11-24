<?php
// Copyright (c) 2020. | David Annebicque | IUT de Troyes  - All Rights Reserved
// @file /Users/davidannebicque/htdocs/intranetV3/src/Classes/Enquetes/MyEnquete.php
// @author davidannebicque
// @project intranetV3
// @lastUpdate 24/11/2020 11:40

namespace App\Classes\Enquetes;


use App\Classes\Configuration;
use App\Classes\Excel\MyExcelWriter;
use App\Classes\Tools;
use App\Entity\Previsionnel;
use App\Entity\QuestionnaireQualite;
use App\Entity\QuestionnaireSection;
use App\Entity\QuestionnaireEtudiantReponse;
use App\Entity\QuestionnaireQuestion;
use App\Repository\QuestionnaireEtudiantReponseRepository;
use App\Repository\QuestionnaireEtudiantRepository;
use PhpOffice\PhpSpreadsheet\Exception;
use PhpOffice\PhpSpreadsheet\Style\Border;
use PhpOffice\PhpSpreadsheet\Style\NumberFormat;
use PhpOffice\PhpSpreadsheet\Writer\Xlsx;
use Symfony\Component\HttpFoundation\StreamedResponse;

class MyEnquete
{

    const SEUIL = 65;
    private QuestionnaireEtudiantReponseRepository $quizzEtudiantReponseRepository;

    private QuestionnaireEtudiantRepository $quizzEtudiantRepository;
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
     * @var Configuration
     */
    private Configuration $configuration;

    /**
     * MyEnquete constructor.
     *
     * @param QuestionnaireEtudiantReponseRepository $quizzEtudiantReponseRepository
     * @param QuestionnaireEtudiantRepository        $quizzEtudiantRepository
     * @param MyExcelWriter                          $myExcelWriter
     */
    public function __construct(
        QuestionnaireEtudiantReponseRepository $quizzEtudiantReponseRepository,
        QuestionnaireEtudiantRepository $quizzEtudiantRepository,
        MyExcelWriter $myExcelWriter,
        Configuration $configuration
    ) {
        $this->quizzEtudiantReponseRepository = $quizzEtudiantReponseRepository;
        $this->quizzEtudiantRepository = $quizzEtudiantRepository;
        $this->myExcelWriter = $myExcelWriter;
        $this->configuration = $configuration;
    }

    /**
     * @param QuestionnaireQualite $questionnaire
     * @param                      $previsionnel
     *
     * @return StreamedResponse
     * @throws Exception
     */
    public function exportExcel(QuestionnaireQualite $questionnaire, $previsionnel): StreamedResponse
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
            [
                'color'       => $this->configuration->get('COLOR_IUT'),
                'font-size'   => 16,
                'font-weight' => 'bold',
                'style'       => 'HORIZONTAL_CENTER'
            ]);
        $this->myExcelWriter->writeCellXY(1, 2,
            $questionnaire->getSemestre()->getDiplome()->getDisplay() . ' - ' . $questionnaire->getSemestre()->getAnneeUniversitaire()->displayAnneeUniversitaire(),
            [
                'color'       => $this->configuration->get('COLOR_IUT'),
                'font-size'   => 16,
                'font-weight' => 'bold',
                'style'       => 'HORIZONTAL_CENTER'
            ]);

        $this->myExcelWriter->borderBottomCellsRange(1, 3, 3, 3,
            ['color' => $this->configuration->get('COLOR_IUT'), 'size' => Border::BORDER_MEDIUM]);

        $this->myExcelWriter->writeCellXY(1, 5, 'Nombre de questionnaires envoyés :');
        $this->myExcelWriter->writeCellXY(2, 5, $nbEtudiants, ['style' => 'HORIZONTAL_CENTER']);
        $this->myExcelWriter->writeCellXY(1, 6, 'Nombre de questionnaires retournés :');
        $this->myExcelWriter->writeCellXY(2, 6, $this->nbReponses, ['style' => 'HORIZONTAL_CENTER']);
        $this->myExcelWriter->writeCellXY(1, 7, 'Pourcentage de retours :');
        $this->myExcelWriter->writeCellXY(2, 7, $pourcentageReponses,
            ['style' => 'HORIZONTAL_CENTER', 'number_format' => NumberFormat::FORMAT_PERCENTAGE]);
        $this->myExcelWriter->borderBottomCellsRange(1, 8, 3, 8,
            ['color' => $this->configuration->get('COLOR_IUT'), 'size' => Border::BORDER_MEDIUM]);

        $this->ligne = 11;
        foreach ($questionnaire->getQualiteQuestionnaireSections() as $qualiteQuestionnaireSection) {
            if ($qualiteQuestionnaireSection->getSection() !== null) {
                $this->myExcelWriter->writeCellXY(1, $this->ligne,
                    $qualiteQuestionnaireSection->getOrdre() . '. ' . $qualiteQuestionnaireSection->getSection()->getTitre(),
                    ['color' => $this->configuration->get('COLOR_IUT'), 'font-size' => 10, 'font-weight' => 'bold']);
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
     * @param QuestionnaireQualite $questionnaire
     */
    public function getReponseFromQuestionnaire(QuestionnaireQualite $questionnaire): void
    {
        $quizzEtudiants = $this->quizzEtudiantRepository->findBy(['questionnaire' => $questionnaire->getId()]);
        //todo: a modifier, dépend du type de questionnaire
        $reponsesEtudiants = $this->quizzEtudiantReponseRepository->findByQuestionnaire($questionnaire);

        /** @var QuestionnaireEtudiantReponse $reponse */
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
     * @param QuestionnaireQuestion $question
     * @param QuestionnaireSection  $section
     * @param string                $config
     *
     * @throws Exception
     */
    private function writeExcelQuestion(
        QuestionnaireQuestion $question,
        QuestionnaireSection $section,
        $config = ''
    ): void {
        if ($config === '') {
            $libQuestion = $question->getLibelle();
        } else {
            $c = substr($config, 2, strlen($config));
            if (array_key_exists($c, $this->previsionnel)) {
                $libQuestion = Tools::personnaliseTexte($question->getLibelle(),
                    $this->previsionnel[$c]);
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
        $this->ligne++;

        if ($section->getTypeCalcul() === QuestionnaireSection::GROUPE) {
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
                if ($section->getTypeCalcul() === QuestionnaireSection::GROUPE) {
                    $this->myExcelWriter->writeCellXY(1, $this->ligne, $subQuestion->getLibelle(),
                        ['wrap' => true, 'style' => $subQuestion->getAlignement()]);
                } elseif ($section->getTypeCalcul() === QuestionnaireSection::DETAIL) {
                    $this->myExcelWriter->mergeCellsCaR(1, $this->ligne, 3, $this->ligne);
                    $this->myExcelWriter->writeCellXY(1, $this->ligne, $subQuestion->getLibelle(),
                        ['wrap' => true, 'font-weight' => 'bold', 'style' => 'HORIZONTAL_CENTER']);
                    $this->ligne++;
                }
                //si QCU/QCM
                $nbQuestionsPourcentage++;
                $this->writeExcelReponses($subQuestion, $section, $config, $question);
            }
            if ($section->getTypeCalcul() === QuestionnaireSection::GROUPE) {
                $moyenne = $this->sommePourcentage / $nbQuestionsPourcentage;
                $this->myExcelWriter->writeCellXY(1, $this->ligne, 'Satisfaction globale =',
                    ['wrap' => true, 'font-weight' => 'bold', 'style' => 'HORIZONTAL_CENTER']);
                if ($moyenne * 100 < self::SEUIL) {
                    $this->myExcelWriter->writeCellXY(3, $this->ligne, $moyenne,
                        [
                            'wrap'          => true,
                            'font-weight'   => 'bold',
                            'style'         => 'HORIZONTAL_CENTER',
                            'color'         => 'bb1e10',
                            'number_format' => NumberFormat::FORMAT_PERCENTAGE
                        ]);
                } else {
                    $this->myExcelWriter->writeCellXY(3, $this->ligne, $moyenne,
                        [
                            'wrap'          => true,
                            'font-weight'   => 'bold',
                            'style'         => 'HORIZONTAL_CENTER',
                            'number_format' => NumberFormat::FORMAT_PERCENTAGE
                        ]);
                }
                $this->ligne++;
            }

        }

    }

    /**
     * @param QuestionnaireQuestion      $question
     * @param QuestionnaireSection       $section
     * @param string                     $config
     * @param QuestionnaireQuestion|null $questionParent
     */
    private function writeExcelReponses(
        QuestionnaireQuestion $question,
        QuestionnaireSection $section,
        $config = '',
        QuestionnaireQuestion $questionParent = null
    ): void {
        if ($questionParent === null) {
            $questionParent = $question;
        }
        $satisfaction = 0;
        $nbProps = 0;

        if (in_array($question->getType(), [
            QuestionnaireQuestion::QUESTION_TYPE_ECHELLE,
            QuestionnaireQuestion::QUESTION_TYPE_QCM,
            QuestionnaireQuestion::QUESTION_TYPE_QCU,
            QuestionnaireQuestion::QUESTION_TYPE_YESNO
        ], true)) {
            if ($section->getTypeCalcul() === QuestionnaireSection::DETAIL) {
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
                if ($section->getTypeCalcul() === QuestionnaireSection::DETAIL) {
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
            if ($question->getType() === QuestionnaireQuestion::QUESTION_TYPE_ECHELLE) {
                //si échelle ... tôt de satisfaction
                $total = $satisfaction / ($nbProps * ($nbTotalReponseQuestion - $retire));
                if ($section->getTypeCalcul() === QuestionnaireSection::DETAIL) {
                    $this->myExcelWriter->writeCellXY(1, $this->ligne, 'soit',
                        ['font-weight' => 'bold', 'style' => 'HORIZONTAL_CENTER']);
                    $this->myExcelWriter->writeCellXY(2, $this->ligne, $total,
                        [
                            'font-weight'   => 'bold',
                            'style'         => 'HORIZONTAL_CENTER',
                            'number_format' => NumberFormat::FORMAT_PERCENTAGE
                        ]);
                    $this->myExcelWriter->writeCellXY(3, $this->ligne, 'de satisfaction',
                        ['font-weight' => 'bold', 'style' => 'HORIZONTAL_CENTER']);
                    $this->ligne++;
                } elseif ($section->getTypeCalcul() === QuestionnaireSection::GROUPE) {
                    $this->sommePourcentage += $total;
                    $this->myExcelWriter->writeCellXY(3, $this->ligne, $total,
                        ['style' => 'HORIZONTAL_CENTER', 'number_format' => NumberFormat::FORMAT_PERCENTAGE]);
                }
            }
        } elseif ($question->getType() === QuestionnaireQuestion::QUESTION_TYPE_LIBRE) {
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
