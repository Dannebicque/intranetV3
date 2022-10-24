<?php
/*
 * Copyright (c) 2022. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Classes/Enquetes/MyEnquete.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 14/09/2022 14:28
 */

namespace App\Classes\Enquetes;

use App\Classes\Configuration;
use App\Classes\Excel\MyExcelWriter;
use App\Components\Questionnaire\TypeQuestion\TypeEchelle;
use App\Components\Questionnaire\TypeQuestion\TypeLibre;
use App\Components\Questionnaire\TypeQuestion\TypeOuiNon;
use App\Components\Questionnaire\TypeQuestion\TypeQcm;
use App\Components\Questionnaire\TypeQuestion\TypeQcu;
use App\Entity\Previsionnel;
use App\Entity\QuestionnaireEtudiantReponse;
use App\Entity\QuestionnaireQualite;
use App\Entity\QuestionnaireQuestion;
use App\Entity\QuestionnaireSection;
use App\Repository\QuestionnaireEtudiantReponseRepository;
use App\Repository\QuestionnaireEtudiantRepository;
use App\Utils\Tools;
use function array_key_exists;
use function count;
use function in_array;
use function is_int;
use PhpOffice\PhpSpreadsheet\Exception;
use PhpOffice\PhpSpreadsheet\Style\Border;
use PhpOffice\PhpSpreadsheet\Style\NumberFormat;
use PhpOffice\PhpSpreadsheet\Worksheet\PageSetup;
use PhpOffice\PhpSpreadsheet\Writer\Xlsx;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\StreamedResponse;

class MyEnquete
{
    final public const SEUIL = 65;
    final public const COLOR_QUALITE = 'bb1e10';
    private array $resultatQuestion = [];
    private int $ligne;

    /** @var Previsionnel[] */
    private array $previsionnel;

    private int|float $nbReponses = 0;

    private int|float $sommePourcentage = 0;

    /**
     * MyEnquete constructor.
     * todo: a revoir et exploiter le composant ?
     */
    public function __construct(private readonly QuestionnaireEtudiantReponseRepository $quizzEtudiantReponseRepository, private readonly QuestionnaireEtudiantRepository $quizzEtudiantRepository, private readonly MyExcelWriter $myExcelWriter, private readonly Configuration $configuration)
    {
    }

    /**
     * @throws Exception
     */
    public function exportExcel(QuestionnaireQualite $questionnaire, $previsionnel): StreamedResponse
    {
        $quizzEtudiants = $this->quizzEtudiantRepository->findBy(['questionnaireQualite' => $questionnaire->getId()]);
        $this->previsionnel = $previsionnel;
        // data
        $this->getReponseFromQuestionnaire($questionnaire);
        $nbEtudiants = null === $questionnaire->getSemestre()?->getEtudiants() ? 0 : count($questionnaire->getSemestre()?->getEtudiants());
        $this->nbReponses = count($quizzEtudiants);
        $pourcentageReponses = $this->nbReponses / $nbEtudiants;
        // export
        $this->myExcelWriter->createSheet(mb_substr('Exp '.$questionnaire->getLibelle(), 0, 31));
        $this->myExcelWriter->getSheet()->getPageSetup()->setPaperSize(PageSetup::PAPERSIZE_A4);
        $this->myExcelWriter->getSheet()->getPageSetup()->setScale(91);
        $this->myExcelWriter->getColumnDimension('A', 60);
        $this->myExcelWriter->getColumnDimension('B', 15);
        $this->myExcelWriter->getColumnDimension('C', 20);
        $this->myExcelWriter->mergeCellsCaR(1, 1, 3, 1);
        $this->myExcelWriter->mergeCellsCaR(1, 2, 3, 2);
        $this->myExcelWriter->writeCellXY(1, 1, $questionnaire->getTitre(),
            [
                'color' => $this->configuration->get('COLOR_IUT'),
                'font-size' => 16,
                'font-weight' => 'bold',
                'style' => 'HORIZONTAL_CENTER',
            ]);
        $this->myExcelWriter->writeCellXY(1, 2,
            $questionnaire->getSemestre()?->getDiplome()?->getDisplay().' - '.$questionnaire->getSemestre()?->getAnneeUniversitaire()?->displayAnneeUniversitaire(),
            [
                'color' => $this->configuration->get('COLOR_IUT'),
                'font-size' => 16,
                'font-weight' => 'bold',
                'style' => 'HORIZONTAL_CENTER',
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
        foreach ($questionnaire->getSections() as $qualiteQuestionnaireSection) {
            if (null !== $qualiteQuestionnaireSection->getSection()) {
                $this->myExcelWriter->writeCellXY(1, $this->ligne,
                    $qualiteQuestionnaireSection->getOrdre().'. '.$qualiteQuestionnaireSection->getSection()->getTitre(),
                    ['color' => $this->configuration->get('COLOR_IUT'), 'font-size' => 10, 'font-weight' => 'bold']);
                $this->ligne += 2;
                if (null !== $qualiteQuestionnaireSection->getConfig() && array_key_exists('valeurs', $qualiteQuestionnaireSection->getConfig())) {
                    $arrayConfig = $qualiteQuestionnaireSection->getConfig()['valeurs'];
                    foreach ($arrayConfig as $config) {
                        foreach ($qualiteQuestionnaireSection->getSection()->getQualiteSectionQuestions() as $qualiteSectionQuestion) {
                            $this->writeExcelQuestion($qualiteSectionQuestion->getQuestion(),
                                $qualiteQuestionnaireSection->getSection(), '_c'.$config);
                        }
                        ++$this->ligne;
                        $this->myExcelWriter->borderBottomCellsRange(1, $this->ligne, 3, $this->ligne,
                            ['color' => '000000', 'size' => Border::BORDER_THIN]);
                        $this->ligne += 2;
                    }
                } else {
                    foreach ($qualiteQuestionnaireSection->getSection()->getQualiteSectionQuestions() as $qualiteSectionQuestion) {
                        $this->writeExcelQuestion($qualiteSectionQuestion->getQuestion(),
                            $qualiteQuestionnaireSection->getSection());
                    }
                    ++$this->ligne;
                    $this->myExcelWriter->borderBottomCellsRange(1, $this->ligne, 3, $this->ligne,
                        ['color' => '000000', 'size' => Border::BORDER_THIN]);
                    $this->ligne += 2;
                }
            }
        }

        $writer = new Xlsx($this->myExcelWriter->getSpreadsheet());

        return new StreamedResponse(
            static function () use ($writer) {
                $writer->save('php://output');
            },
            Response::HTTP_OK,
            [
                'Content-Type' => 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
                'Content-Disposition' => 'attachment;filename="'.$questionnaire->getLibelle().'.xlsx"',
            ]
        );
    }

    public function getReponseFromQuestionnaire(QuestionnaireQualite $questionnaire): void
    {
        $reponsesEtudiants = $this->quizzEtudiantReponseRepository->findByQuestionnaire($questionnaire);

        /** @var QuestionnaireEtudiantReponse $reponse */
        foreach ($reponsesEtudiants as $reponse) {
            $cle = $reponse->getCleQuestion();
            if (!array_key_exists($cle, $this->resultatQuestion)) {
                $this->resultatQuestion[$cle]['nbreponse'] = 0;
                $this->resultatQuestion[$cle]['totalReponse'] = [];
                $this->resultatQuestion[$cle]['autre'] = [];
            }
            ++$this->resultatQuestion[$cle]['nbreponse'];
            $cleR = $reponse->getValeur();
            if (!array_key_exists($cleR, $this->resultatQuestion[$cle]['totalReponse'])) {
                $this->resultatQuestion[$cle]['totalReponse'][$cleR] = 0;
            }

            ++$this->resultatQuestion[$cle]['totalReponse'][$cleR];
        }
    }

    private function writeExcelQuestion(
        QuestionnaireQuestion $question,
        QuestionnaireSection $section,
        string $config = ''
    ): void {
        $libQuestion = '';
        if ('' === $config) {
            $libQuestion = $question->getLibelle();
        } else {
            $c = mb_substr($config, 2, mb_strlen($config));
            if (array_key_exists($c, $this->previsionnel)) {
                $libQuestion = Tools::personnaliseTexte($question->getLibelle(),
                    $this->previsionnel[$c]);
            }
        }
        ++$this->ligne;
        $this->myExcelWriter->mergeCellsCaR(1, $this->ligne, 3, $this->ligne);
        $this->myExcelWriter->writeCellXY(1, $this->ligne, $libQuestion,
            ['wrap' => true, 'font-weight' => 'bold', 'style' => 'HORIZONTAL_CENTER', 'valign' => 'VERTICAL_TOP']);
        if (mb_strlen($libQuestion) > 92) {
            $this->myExcelWriter->getRowDimension($this->ligne, 30);
        }
        ++$this->ligne;

        if ('' !== $question->getHelp()) {
            $this->myExcelWriter->mergeCellsCaR(1, $this->ligne, 3, $this->ligne);
            $this->myExcelWriter->writeCellXY(1, $this->ligne, $question->getHelp(),
                ['wrap' => true, 'font-italic' => true, 'style' => 'HORIZONTAL_CENTER', 'valign' => 'VERTICAL_TOP']);
            ++$this->ligne;
        }

        ++$this->ligne;

        if (QuestionnaireSection::GROUPE === $section->getTypeCalcul()) {
            $this->myExcelWriter->writeCellXY(3, $this->ligne, '% satisfaction',
                ['wrap' => true, 'style' => 'HORIZONTAL_CENTER']);
            ++$this->ligne;
        }

        if (null === $question->getQuestionParent() && 0 === count($question->getQuestionsEnfants())) {
            // si QCU/QCM
            $this->writeExcelReponses($question, $section, $config);
        } else {
            $this->sommePourcentage = 0;
            $nbQuestionsPourcentage = 0;
            foreach ($question->getQuestionsEnfants() as $subQuestion) {
                ++$this->ligne;
                if (QuestionnaireSection::GROUPE === $section->getTypeCalcul()) {
                    $this->myExcelWriter->writeCellXY(1, $this->ligne, $subQuestion->getLibelle(),
                        ['wrap' => true, 'style' => $subQuestion->getAlignement()]);
                } elseif (QuestionnaireSection::DETAIL === $section->getTypeCalcul()) {
                    $this->myExcelWriter->mergeCellsCaR(1, $this->ligne, 3, $this->ligne);
                    $this->myExcelWriter->writeCellXY(1, $this->ligne, $subQuestion->getLibelle(),
                        ['wrap' => true, 'font-weight' => 'bold', 'style' => 'HORIZONTAL_CENTER']);
                    ++$this->ligne;
                }
                // si QCU/QCM
                ++$nbQuestionsPourcentage;
                $this->writeExcelReponses($subQuestion, $section, $config, $question);
            }
            if (QuestionnaireSection::GROUPE === $section->getTypeCalcul()) {
                $moyenne = $this->sommePourcentage / $nbQuestionsPourcentage;
                $this->myExcelWriter->writeCellXY(1, $this->ligne, 'Satisfaction globale =',
                    ['wrap' => true, 'font-weight' => 'bold', 'style' => 'HORIZONTAL_CENTER']);
                if ($moyenne * 100 < self::SEUIL) {
                    $this->myExcelWriter->writeCellXY(3, $this->ligne, $moyenne,
                        [
                            'wrap' => true,
                            'font-weight' => 'bold',
                            'style' => 'HORIZONTAL_CENTER',
                            'color' => self::COLOR_QUALITE,
                            'number_format' => NumberFormat::FORMAT_PERCENTAGE,
                        ]);
                } else {
                    $this->myExcelWriter->writeCellXY(3, $this->ligne, $moyenne,
                        [
                            'wrap' => true,
                            'font-weight' => 'bold',
                            'style' => 'HORIZONTAL_CENTER',
                            'number_format' => NumberFormat::FORMAT_PERCENTAGE,
                        ]);
                }
                ++$this->ligne;
            }
        }
    }

    private function writeExcelReponses(
        QuestionnaireQuestion $question,
        QuestionnaireSection $section,
        string $config = '',
        QuestionnaireQuestion $questionParent = null
    ): void {
        $retire = null;
        if (null === $questionParent) {
            $questionParent = $question;
        }
        $satisfaction = 0;
        $nbProps = 0;
        if (in_array($question->getType(), [
            TypeEchelle::class,
            TypeQcm::class,
            TypeQcu::class,
            TypeOuiNon::class,
        ], true)) {
            if (QuestionnaireSection::DETAIL === $section->getTypeCalcul()) {
                $this->myExcelWriter->writeCellXY(1, $this->ligne, 'Réponse', ['style' => 'HORIZONTAL_CENTER']);
                $this->myExcelWriter->writeCellXY(2, $this->ligne, 'Décompte', ['style' => 'HORIZONTAL_CENTER']);
                $this->myExcelWriter->writeCellXY(3, $this->ligne, 'Pourcentage', ['style' => 'HORIZONTAL_CENTER']);
                ++$this->ligne;
            }

            $cleQ = $question->getCle().$config;
            $nbTotalReponseQuestion = 0;
            foreach ($questionParent->getQuizzReponses() as $reponse) {
                $cleR = $reponse->getValeur();
                ++$nbProps;
                if (array_key_exists($cleQ, $this->resultatQuestion) && array_key_exists($cleR,
                        $this->resultatQuestion[$cleQ]['totalReponse'])) {
                    $nbReponses = $this->resultatQuestion[$cleQ]['totalReponse'][$cleR];

                    if (is_int($this->resultatQuestion[$cleQ]['totalReponse'][$cleR])) {
                        $pourcentage = $this->resultatQuestion[$cleQ]['totalReponse'][$cleR] / $this->resultatQuestion[$cleQ]['nbreponse'];

                        if (is_int((int) $reponse->getLibelle())) {
                            $totRep = $nbReponses * (int) $reponse->getLibelle();
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

                $retire = 0;
                if ('Je n\'ai pas suivi ce cours' === $reponse->getLibelle()) {
                    --$nbProps;
                    $retire = $nbReponses;
                }
                // version détaillée, on affiche tout.
                if (QuestionnaireSection::DETAIL === $section->getTypeCalcul()) {
                    $this->myExcelWriter->writeCellXY(1, $this->ligne, $reponse->getLibelle(),
                        ['style' => $reponse->getAlignement()]);
                    $this->myExcelWriter->writeCellXY(2, $this->ligne, $nbReponses,
                        ['style' => 'HORIZONTAL_CENTER']);
                    $this->sommePourcentage += $pourcentage;
                    $this->myExcelWriter->writeCellXY(3, $this->ligne, $pourcentage, [
                        'style' => 'HORIZONTAL_CENTER',
                        'number_format' => NumberFormat::FORMAT_PERCENTAGE,
                    ]);
                    ++$this->ligne;
                }
                // si autre, énumérer les réponses autres
                if (array_key_exists($cleQ.'_autre',
                        $this->resultatQuestion) && 'CHX:OTHER' === $reponse->getValeur()) {
                    foreach ($this->resultatQuestion[$cleQ.'_autre']['totalReponse'] as $key => $value) {
                        $this->myExcelWriter->writeCellXY(1, $this->ligne, $key,
                            ['wrap' => true, 'style' => 'HORIZONTAL_LEFT', 'valign' => 'VERTICAL_TOP']);
                        $nbCar = mb_strlen($key);
                        if ($nbCar > 55) {
                            $n = ceil($nbCar / 55);
                            $this->myExcelWriter->getRowDimension($this->ligne, 15 * $n);
                        }
                        ++$this->ligne;
                    }
                }
            }

            if ((array_key_exists('type', $question->getConfiguration()) && 'echelle' === $question->getConfiguration()['type']) || TypeEchelle::class === $question->getType()) {
                // si échelle ... tôt de satisfaction
                $div = ($nbProps * ($nbTotalReponseQuestion - $retire));
                if (0 !== $div) {
                    $total = $satisfaction / ($nbProps * ($nbTotalReponseQuestion - $retire));
                } else {
                    $total = 0;
                }

                if (QuestionnaireSection::DETAIL === $section->getTypeCalcul()) {
                    $this->myExcelWriter->writeCellXY(1, $this->ligne, 'soit',
                        ['font-weight' => 'bold', 'style' => 'HORIZONTAL_CENTER']);
                    $this->myExcelWriter->writeCellXY(2, $this->ligne, $total,
                        [
                            'font-weight' => 'bold',
                            'style' => 'HORIZONTAL_CENTER',
                            'number_format' => NumberFormat::FORMAT_PERCENTAGE,
                        ]);
                    $this->myExcelWriter->writeCellXY(3, $this->ligne, 'de satisfaction',
                        ['font-weight' => 'bold', 'style' => 'HORIZONTAL_CENTER']);
                    ++$this->ligne;
                } elseif (QuestionnaireSection::GROUPE === $section->getTypeCalcul()) {
                    $this->sommePourcentage += $total;
                    $this->myExcelWriter->writeCellXY(3, $this->ligne, $total,
                        ['style' => 'HORIZONTAL_CENTER', 'number_format' => NumberFormat::FORMAT_PERCENTAGE]);
                }
            }
        } elseif (TypeLibre::class === $question->getType()) {
            $this->myExcelWriter->writeCellXY(1, $this->ligne, 'Réponse', ['style' => 'HORIZONTAL_CENTER']);

            $lgRep = $this->ligne;
            $nbRep = 0;
            ++$this->ligne;
            $cleQ = 'quizz_question_text_q'.$question->getId();
            if (array_key_exists($cleQ, $this->resultatQuestion)) {
                // liste les réponses
                foreach ($this->resultatQuestion[$cleQ]['totalReponse'] as $key => $rep) {
                    ++$nbRep;
                    $this->myExcelWriter->writeCellXY(1, $this->ligne, $key,
                        ['wrap' => true, 'style' => 'HORIZONTAL_LEFT', 'valign' => 'VERTICAL_TOP']);
                    $nbCar = mb_strlen($key);
                    if ($nbCar > 55) {
                        $n = ceil($nbCar / 55);
                        $this->myExcelWriter->getRowDimension($this->ligne, 15 * $n);
                    }
                    ++$this->ligne;
                }
            }
            $p = number_format($nbRep / $this->nbReponses * 100);
            $this->myExcelWriter->writeCellXY(2, $lgRep, $nbRep, ['style' => 'HORIZONTAL_CENTER']);
            $this->myExcelWriter->writeCellXY(3, $lgRep, $p.'%', ['style' => 'HORIZONTAL_CENTER']);
        }
    }
}
