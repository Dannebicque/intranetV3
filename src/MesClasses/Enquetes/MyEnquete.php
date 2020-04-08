<?php


namespace App\MesClasses\Enquetes;


use App\Entity\Previsionnel;
use App\Entity\QualiteQuestionnaire;
use App\Entity\QuizzEtudiant;
use App\Entity\QuizzEtudiantReponse;
use App\Entity\QuizzQuestion;
use App\MesClasses\Excel\MyExcelWriter;
use App\MesClasses\Tools;
use App\Repository\QuizzEtudiantReponseRepository;
use App\Repository\QuizzEtudiantRepository;
use PhpOffice\PhpSpreadsheet\Exception;
use PhpOffice\PhpSpreadsheet\Style\Border;
use PhpOffice\PhpSpreadsheet\Style\NumberFormat;
use PhpOffice\PhpSpreadsheet\Writer\Xlsx;
use Symfony\Component\HttpFoundation\StreamedResponse;

class MyEnquete
{
    private $questionnaire;

    /** @var QuizzEtudiantReponseRepository */
    private $quizzEtudiantReponseRepository;

    /** @var QuizzEtudiantRepository */
    private $quizzEtudiantRepository;
    /**
     * @var QuizzEtudiant[]
     */
    private $quizzEtudiants;
    /**
     * @var int
     */
    private $nbQuizzEtudiants = 0;
    private $resultatQuestion = [];
    /**
     * @var array
     */
    private $reponsesEtudiants;
    private $myExcelWriter;
    /**
     * @var int
     */
    private $ligne;

    /** @var Previsionnel[] */
    private $previsionnel;
    /**
     * @var float|int
     */
    private $nbReponses = 0;

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
    public function ExportExcel(QualiteQuestionnaire $questionnaire, $previsionnel): StreamedResponse
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
            ['style' => 'HORIZONTAL_CENTER', 'number_format' => NumberFormat::FORMAT_PERCENTAGE_00]);
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
                            $this->writeExcelQuestion($qualiteSectionQuestion->getQuestion(), '_c' . $config);
                        }
                        $this->ligne++;
                        $this->myExcelWriter->borderBottomCellsRange(1, $this->ligne, 3, $this->ligne,
                            ['color' => '000000', 'size' => Border::BORDER_THIN]);
                        $this->ligne += 2;
                    }
                } else {
                    foreach ($qualiteQuestionnaireSection->getSection()->getQualiteSectionQuestions() as $qualiteSectionQuestion) {
                        $this->writeExcelQuestion($qualiteSectionQuestion->getQuestion());
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
        $this->questionnaire = $questionnaire;
        $this->quizzEtudiants = $this->quizzEtudiantRepository->findBy(['questionnaire' => $questionnaire->getId()]);
        $this->nbQuizzEtudiants = count($this->quizzEtudiants);
        $this->reponsesEtudiants = $this->quizzEtudiantReponseRepository->findByQuestionnaire($questionnaire);

        /** @var QuizzEtudiantReponse $reponse */
        foreach ($this->reponsesEtudiants as $reponse) {
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
     * @param QuizzQuestion $question
     * @param string        $config
     *
     * @throws Exception
     */
    private function writeExcelQuestion(QuizzQuestion $question, $config = ''): void
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
        $this->myExcelWriter->mergeCellsCaR(1, $this->ligne, 3, $this->ligne);
        $this->myExcelWriter->writeCellXY(1, $this->ligne, $libQuestion,
            ['wrap' => true, 'font-weight' => 'bold', 'style' => 'HORIZONTAL_CENTER']);
        $this->ligne++;

        if ($question->getQuestionParent() === null && count($question->getQuestionsEnfants()) === 0) {

            //si QCU/QCM
            $this->writeExcelReponses($question, $config);

        } else {
            foreach ($question->getQuestionsEnfants() as $subQuestion) {
                $this->ligne++;
                $this->myExcelWriter->mergeCellsCaR(1, $this->ligne, 3, $this->ligne);
                $this->myExcelWriter->writeCellXY(1, $this->ligne, $subQuestion->getLibelle(),
                    ['wrap' => true, 'font-weight' => 'bold', 'style' => 'HORIZONTAL_CENTER']);
                $this->ligne++;

                //si QCU/QCM
                $this->writeExcelReponses($subQuestion, $config, $question);
            }

        }

    }

    /**
     * @param QuizzQuestion      $question
     * @param string             $config
     * @param QuizzQuestion|null $questionParent
     */
    private function writeExcelReponses(
        QuizzQuestion $question,
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
            $this->myExcelWriter->writeCellXY(1, $this->ligne, 'Réponse', ['style' => 'HORIZONTAL_CENTER']);
            $this->myExcelWriter->writeCellXY(2, $this->ligne, 'Décompte', ['style' => 'HORIZONTAL_CENTER']);
            $this->myExcelWriter->writeCellXY(3, $this->ligne, 'Pourcentage', ['style' => 'HORIZONTAL_CENTER']);

            $this->ligne++;
            $cleQ = $question->getCle() . $config;
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
                $this->myExcelWriter->writeCellXY(1, $this->ligne, $reponse->getLibelle());
                $this->myExcelWriter->writeCellXY(2, $this->ligne, $nbReponses,
                    ['style' => 'HORIZONTAL_CENTER']);
                $this->myExcelWriter->writeCellXY(3, $this->ligne, $pourcentage, [
                    'style'         => 'HORIZONTAL_CENTER',
                    'number_format' => NumberFormat::FORMAT_PERCENTAGE_00
                ]);
                $this->myExcelWriter->writeCellXY(4, $this->ligne, $totRep, [
                    'style' => 'HORIZONTAL_CENTER'
                ]);
                $this->ligne++;
                //si autre, énumérer les réponses autres
            }
            $this->ligne++;
            if ($question->getType() === QuizzQuestion::QUESTION_TYPE_ECHELLE) {
                //si échelle ... tôt de satisfaction
                $total = $satisfaction / ($nbProps * ($this->nbReponses - $retire));
                $this->ligne++;
                $this->myExcelWriter->writeCellXY(5, $this->ligne, ($nbProps * ($this->nbReponses - $retire)),
                    ['align' => 'center']);
                $this->myExcelWriter->writeCellXY(6, $this->ligne, $satisfaction, ['align' => 'center']);
                $this->myExcelWriter->writeCellXY(1, $this->ligne, 'soit');
                $this->myExcelWriter->writeCellXY(2, $this->ligne, $total,
                    ['align' => 'center', 'number_format' => NumberFormat::FORMAT_PERCENTAGE_00]);
                $this->myExcelWriter->writeCellXY(3, $this->ligne, 'de satisfaction', ['align' => 'center']);
                $this->ligne++;
            }
        } elseif ($question->getType() === QuizzQuestion::QUESTION_TYPE_LIBRE) {
            $this->myExcelWriter->writeCellXY(1, $this->ligne, 'Réponse', ['style' => 'HORIZONTAL_CENTER']);
            $cleQ = 'quizz_question_text_q' . $question->getId();
            if (array_key_exists($cleQ, $this->resultatQuestion)) {
                //liste les réponses
                foreach ($this->resultatQuestion[$cleQ]['totalReponse'] as $key => $rep) {
                    $this->myExcelWriter->writeCellXY(1, $this->ligne, $key, ['style' => 'HORIZONTAL_LEFT']);
                    $this->ligne++;
                }
            }


        }
    }
}
