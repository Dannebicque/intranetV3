<?php
/*
 * Copyright (c) 2024. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Components/Questionnaire/QuestionnaireExportExcel.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 24/02/2024 08:59
 */

namespace App\Components\Questionnaire;

use App\Classes\Configuration;
use App\Classes\Excel\MyExcelWriter;
use App\Components\Questionnaire\DTO\Reponse;
use App\Components\Questionnaire\Exceptions\TypeQuestionNotFoundException;
use App\Components\Questionnaire\Section\AbstractSection;
use App\Components\Questionnaire\Section\EndSection;
use App\Components\Questionnaire\Section\Section;
use App\Components\Questionnaire\Section\StartSection;
use App\Components\Questionnaire\TypeDestinataire\Etudiant;
use App\Components\Questionnaire\TypeDestinataire\Exterieur;
use App\Components\Questionnaire\TypeDestinataire\Personnel;
use App\Components\Questionnaire\TypeQuestion\AbstractQuestion;
use App\Components\Questionnaire\TypeQuestion\TypeChainee;
use App\Components\Questionnaire\TypeQuestion\TypeEchelle;
use App\Components\Questionnaire\TypeQuestion\TypeLibre;
use App\Components\Questionnaire\TypeQuestion\TypeOuiNon;
use App\Components\Questionnaire\TypeQuestion\TypeQcm;
use App\Components\Questionnaire\TypeQuestion\TypeQcu;
use App\Components\Questionnaire\TypeQuestion\TypeSlider;
use App\Entity\QuestQuestion;
use App\Entity\QuestQuestionnaire;
use PhpOffice\PhpSpreadsheet\Exception;
use PhpOffice\PhpSpreadsheet\Style\Border;
use PhpOffice\PhpSpreadsheet\Style\NumberFormat;
use PhpOffice\PhpSpreadsheet\Worksheet\PageSetup;
use PhpOffice\PhpSpreadsheet\Writer\Xlsx;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\StreamedResponse;


class QuestionnaireExportExcel
{
    final public const SEUIL = 65;
    final public const COLOR_QUALITE = 'bb1e10';
    private array $resultatQuestion = [];
    private int $ligne;

    private int|float $nbReponses = 0;

    private int|float $sommePourcentage = 0;

    public function __construct(
        private readonly QuestionnaireRegistry $questionnaireRegistry,
        private readonly MyExcelWriter $myExcelWriter,
        private readonly Configuration $configuration
    ) {
    }

    /**
     * @throws Exception
     * @throws TypeQuestionNotFoundException
     */
    public function exportExcel(Questionnaire $questionnaire, QuestQuestionnaire $questQuestionnaire): StreamedResponse
    {
        //dump($questionnaire);
        $typeDestinataire = $this->questionnaireRegistry->getTypeDestinataire($questQuestionnaire->getTypeDestinataire());
        $typeDestinataire->setQuestionnaire($questQuestionnaire);
        $nbDestinataires = $typeDestinataire->getNbDestinataires();
        $this->nbReponses = $typeDestinataire->getNbDestinatairesRepondus();
        $pourcentageReponses = $this->nbReponses / $nbDestinataires;
        // export
        $this->myExcelWriter->createSheet(mb_substr('Export Réponses', 0, 31));
        $this->myExcelWriter->getSheet()->getPageSetup()->setPaperSize(PageSetup::PAPERSIZE_A4);
        $this->myExcelWriter->getSheet()->getPageSetup()->setScale(91);
        $this->myExcelWriter->getColumnDimension('A', 60);
        $this->myExcelWriter->getColumnDimension('B', 15);
        $this->myExcelWriter->getColumnDimension('C', 20);
        $this->myExcelWriter->mergeCellsCaR(1, 1, 3, 1);
        $this->myExcelWriter->mergeCellsCaR(1, 2, 3, 2);
        $this->myExcelWriter->writeCellXY(1, 1, $questQuestionnaire->getTitre(),
            [
                'color' => $this->configuration->get('COLOR_IUT'),
                'font-size' => 16,
                'font-weight' => 'bold',
                'style' => 'HORIZONTAL_CENTER',
            ]);

        switch ($questQuestionnaire->getTypeDestinataire()) {
            case Etudiant::class:
                $this->myExcelWriter->writeCellXY(1, 2,
                    $questQuestionnaire->getSemestre()?->getAnneeUniversitaire()?->displayAnneeUniversitaire(),
                    [
                        'color' => $this->configuration->get('COLOR_IUT'),
                        'font-size' => 16,
                        'font-weight' => 'bold',
                        'style' => 'HORIZONTAL_CENTER',
                    ]);
                break;
            case Exterieur::class:
                $this->myExcelWriter->writeCellXY(1, 2,
                    'Exterieurs',
                    [
                        'color' => $this->configuration->get('COLOR_IUT'),
                        'font-size' => 16,
                        'font-weight' => 'bold',
                        'style' => 'HORIZONTAL_CENTER',
                    ]);
                break;
            case Personnel::class:
                $this->myExcelWriter->writeCellXY(1, 2,
                    'Personnels',
                    [
                        'color' => $this->configuration->get('COLOR_IUT'),
                        'font-size' => 16,
                        'font-weight' => 'bold',
                        'style' => 'HORIZONTAL_CENTER',
                    ]);
                break;
        }


        $this->myExcelWriter->borderBottomCellsRange(1, 3, 3, 3,
            ['color' => $this->configuration->get('COLOR_IUT'), 'size' => Border::BORDER_MEDIUM]);

        $this->myExcelWriter->writeCellXY(1, 5, 'Nombre de questionnaires envoyés :');
        $this->myExcelWriter->writeCellXY(2, 5, $nbDestinataires, ['style' => 'HORIZONTAL_CENTER']);
        $this->myExcelWriter->writeCellXY(1, 6, 'Nombre de questionnaires retournés :');
        $this->myExcelWriter->writeCellXY(2, 6, $this->nbReponses, ['style' => 'HORIZONTAL_CENTER']);
        $this->myExcelWriter->writeCellXY(1, 7, 'Pourcentage de retours :');
        $this->myExcelWriter->writeCellXY(2, 7, $pourcentageReponses,
            ['style' => 'HORIZONTAL_CENTER', 'number_format' => NumberFormat::FORMAT_PERCENTAGE]);
        $this->myExcelWriter->borderBottomCellsRange(1, 8, 3, 8,
            ['color' => $this->configuration->get('COLOR_IUT'), 'size' => Border::BORDER_MEDIUM]);

        $this->ligne = 11;
        foreach ($questionnaire->getSections() as $questSection) {
            if ($questSection->typeSection !== StartSection::class && $questSection->typeSection !== EndSection::class) {

                $this->myExcelWriter->writeCellXY(1, $this->ligne,
                    $questSection->ordre . '. ' . $questSection->titre,
                    ['color' => $this->configuration->get('COLOR_IUT'), 'font-size' => 10, 'font-weight' => 'bold']);
                $this->ligne += 2;
                if (AbstractSection::AFFICHE_GROUPE === $questSection->options['type_calcul']) {
                    $this->writeConfigSectionGroupe($questSection);
                } else {

                    foreach ($questSection->getQuestions() as $questQuestion) {
                        $this->writeExcelQuestion($questQuestion,
                            $questSection);
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
            static function() use ($writer) {
                $writer->save('php://output');
            },
            Response::HTTP_OK,
            [
                'Content-Type' => 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
                'Content-Disposition' => 'attachment;filename="' . $questQuestionnaire->getLibelle() . '.xlsx"',
            ]
        );
    }

    private function writeExcelQuestion(
        AbstractQuestion $question,
        Section $section,
    ): void {
        ++$this->ligne;
        $this->myExcelWriter->mergeCellsCaR(1, $this->ligne, 3, $this->ligne);
        $this->myExcelWriter->writeCellXY(1, $this->ligne, $question->libelle,
            ['wrap' => true, 'font-weight' => 'bold', 'style' => 'HORIZONTAL_CENTER', 'valign' => 'VERTICAL_TOP']);
        if (mb_strlen($question->libelle) > 92) {
            $this->myExcelWriter->getRowDimension($this->ligne, 30);
        }
        ++$this->ligne;

        if ('' !== $question->help) {
            $this->myExcelWriter->mergeCellsCaR(1, $this->ligne, 3, $this->ligne);
            $this->myExcelWriter->writeCellXY(1, $this->ligne, $question->help,
                ['wrap' => true, 'font-italic' => true, 'style' => 'HORIZONTAL_CENTER', 'valign' => 'VERTICAL_TOP']);
            ++$this->ligne;
        }

        ++$this->ligne;


        if (!$question instanceof TypeChainee) {
            // si QCU/QCM
            $this->writeExcelReponses($question, $section);
        } else {
            $this->sommePourcentage = 0;
            $nbQuestionsPourcentage = 0;
            foreach ($question->questions as $subQuestion) {
                ++$this->ligne;
                if (AbstractSection::AFFICHE_GROUPE === $section->options['type_calcul']) {
                    $this->myExcelWriter->writeCellXY(1, $this->ligne, $subQuestion->getLibelle(),
                        ['wrap' => true, 'style' => $subQuestion->alignement]);
                } elseif (AbstractSection::AFFICHE_DETAIL === $section->options['type_calcul']) {
                    $this->myExcelWriter->mergeCellsCaR(1, $this->ligne, 3, $this->ligne);
                    $this->myExcelWriter->writeCellXY(1, $this->ligne, $subQuestion->getLibelle(),
                        ['wrap' => true, 'font-weight' => 'bold', 'style' => 'HORIZONTAL_CENTER']);
                    ++$this->ligne;
                }
                // si QCU/QCM
                $this->writeExcelReponses($subQuestion, $section, $question);
            }
        }
    }

    private function writeExcelReponses(
        QuestQuestion|AbstractQuestion $question,
        Section $section,
        QuestQuestion|AbstractQuestion $questionParent = null
    ): void {
        $retire = null;
        if (null === $questionParent) {
            $questionParent = $question;
        }


        $satisfaction = 0;
        $nbProps = 0;
        $nbReponses = 0;
        if ($question instanceof TypeSlider || $question instanceof TypeEchelle || $question instanceof TypeQcm || $question instanceof TypeQcu || $question instanceof TypeOuiNon) {
            if (AbstractSection::AFFICHE_DETAIL === $section->options['type_calcul']) {
                $this->myExcelWriter->writeCellXY(1, $this->ligne, 'Réponse', ['style' => 'HORIZONTAL_CENTER']);
                $this->myExcelWriter->writeCellXY(2, $this->ligne, 'Décompte', ['style' => 'HORIZONTAL_CENTER']);
                $this->myExcelWriter->writeCellXY(3, $this->ligne, 'Pourcentage', ['style' => 'HORIZONTAL_CENTER']);
                ++$this->ligne;
            }

            if ($question instanceof TypeSlider) {
                $params = $question->parametres;
                $listeReponses = [];
                for ($i = $params['min']; $i <= $params['max']; $i += $params['pas']) {
                    $rep = new Reponse($i, $i, $i, $i);
                    $listeReponses[] = $rep;
                }
            } else {
                $listeReponses = $questionParent->getReponses();
            }


            $cleQ = $question->cle;
            $nbTotalReponseQuestion = 0;

            foreach ($listeReponses as $reponse) {

                $nbReponses = 0;
                $cleR = $reponse->valeur;
                if ($question instanceof TypeQcm) {
                    $cleR = '["' . $cleR . '"]';
                }
                ++$nbProps;
                if (isset($question->choix->totalReponses[$cleR])) {
                    $nbReponses = $question->choix->totalReponses[$cleR];

                    if (is_int($question->choix->totalReponses[$cleR]) && $question->choix->nbReponsesTotal > 0) {
                        $pourcentage = $nbReponses / $question->choix->nbReponsesTotal;

                        if (is_int((int)$reponse->valeur)) {
                            $totRep = $nbReponses * (int)$reponse->valeur;
                            $nbTotalReponseQuestion += $nbReponses;
                            $satisfaction += $totRep;
                        }
                    } else {
                        $pourcentage = 0;
                    }
                } else {
                    $pourcentage = 0;
                }


                $retire = 0;
                if ('Je n\'ai pas suivi ce cours' === $reponse->libelle) {
                    //todo: revoir pour le NC ??
                    --$nbProps;
                    $retire = $nbReponses;
                }
                // version détaillée, on affiche tout.
                if (AbstractSection::AFFICHE_DETAIL === $section->options['type_calcul']) {

                    $this->myExcelWriter->writeCellXY(1, $this->ligne, $reponse->libelle,
                        ['style' => 'HORIZONTAL_LEFT']);
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
                //todo: est-ce encore bon ?
                if (array_key_exists($cleQ . '_autre',
                        $this->resultatQuestion) && 'CHX:OTHER' === $reponse->valeur) {
                    foreach ($this->resultatQuestion[$cleQ . '_autre']['totalReponse'] as $key => $value) {
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

            if ($question instanceof TypeEchelle || $question instanceof TypeQcu) {
                $div = ($nbProps * ($nbTotalReponseQuestion - $retire));
                if (0 !== $div) {
                    $total = $satisfaction / ($nbProps * ($nbTotalReponseQuestion - $retire));
                } else {
                    $total = 0;
                }

                if (AbstractSection::AFFICHE_DETAIL === $section->options['type_calcul']) {
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
                } elseif (AbstractSection::AFFICHE_GROUPE === $section->options['type_calcul']) {
                    $this->sommePourcentage += $total;
                    $this->myExcelWriter->writeCellXY(3, $this->ligne, $total,
                        ['style' => 'HORIZONTAL_CENTER', 'number_format' => NumberFormat::FORMAT_PERCENTAGE]);
                }
            }
        } elseif ($question instanceof TypeLibre) {
            $this->myExcelWriter->writeCellXY(1, $this->ligne, 'Réponse', ['style' => 'HORIZONTAL_CENTER']);
            $lgRep = $this->ligne;
            $nbRep = 0;
            ++$this->ligne;
            $cleQ = 'quizz_question_text_q' . $question->id;
            if ($question->choix !== null) {
                // liste les réponses
                foreach ($question->choix->totalReponses as $key => $rep) {
                    $this->myExcelWriter->writeCellXY(1, $this->ligne, $key,
                        ['wrap' => true, 'style' => 'HORIZONTAL_LEFT', 'valign' => 'VERTICAL_TOP']);
                    $nbCar = mb_strlen($key);
                    if ($nbCar > 55) {
                        $n = ceil($nbCar / 55);
                        $this->myExcelWriter->getRowDimension($this->ligne, 15 * $n);
                    }
                    ++$this->ligne;
                }

                $p = number_format($question->choix->nbReponsesTotal / $this->nbReponses * 100);
                $this->myExcelWriter->writeCellXY(2, $lgRep, $question->choix->nbReponsesTotal,
                    ['style' => 'HORIZONTAL_CENTER']);
                $this->myExcelWriter->writeCellXY(3, $lgRep, $p . '%', ['style' => 'HORIZONTAL_CENTER']);
            } else {
                $this->myExcelWriter->writeCellXY(2, $lgRep, 0,
                    ['style' => 'HORIZONTAL_CENTER']);
                $this->myExcelWriter->writeCellXY(3, $lgRep, '0%', ['style' => 'HORIZONTAL_CENTER']);
            }
        }
    }

    private function writeConfigSectionGroupe(mixed $questSection): void
    {
        $this->myExcelWriter->writeCellXY(3, $this->ligne, '% satisfaction',
            ['wrap' => true, 'style' => 'HORIZONTAL_CENTER']);
        ++$this->ligne;
        $nbQuestions = 0;
        $totalPourcentageQuestion = 0;
        foreach ($questSection->getQuestions() as $question) {
            ++$nbQuestions;
            $this->myExcelWriter->writeCellXY(1, $this->ligne, $question->libelle,
                ['wrap' => true, 'valign' => 'VERTICAL_TOP']);
            if (mb_strlen($question->libelle) > 92) {
                $this->myExcelWriter->getRowDimension($this->ligne, 30);
            }

            //calcul du taux par question
            $nbProps = 0;
            $satisfaction = 0;
            $nbTotalReponseQuestion = 0;
            if ($question instanceof TypeSlider) {
                $params = $question->parametres;
                $listeReponses = [];
                for ($i = $params['min']; $i <= $params['max']; $i += $params['pas']) {
                    $rep = new Reponse($i, $i, $i, $i);
                    $listeReponses[] = $rep;
                }
            } else {
                $listeReponses = $question->getReponses();
            }
            $nbReponses = 0;

            foreach ($listeReponses as $reponse) {
                ++$nbProps;

                $cleR = $reponse->valeur;
                if ($question instanceof TypeQcm) {
                    $cleR = '["' . $cleR . '"]';
                }
                if (isset($question->choix->totalReponses[$cleR])) {
                    $nbReponses = $question->choix->totalReponses[$cleR];
                    if (is_int((int)$reponse->valeur)) {
                        $totRep = $nbReponses * (int)$reponse->valeur;
                        $nbTotalReponseQuestion += $nbReponses;
                        $satisfaction += $totRep;

                    }
//
//
//                    $retire = 0;
//                    if ('Je n\'ai pas suivi ce cours' === $reponse->libelle) {
//                        //todo: revoir pour le NC ??
//                        --$nbProps;
//                        $retire = $nbReponses;
//                    }
                }
            }
            if ($nbProps * $nbTotalReponseQuestion > 0) {
                $pourcentage = $satisfaction / ($nbProps * $nbTotalReponseQuestion);
            } else {
                $pourcentage = 0;
            }
            $totalPourcentageQuestion += $pourcentage;
            if ($pourcentage * 100 <= self::SEUIL) {
                $this->myExcelWriter->writeCellXY(3, $this->ligne, $pourcentage,
                    [
                        'wrap' => true,
                        'style' => 'HORIZONTAL_CENTER',
                        'color' => self::COLOR_QUALITE,
                        'number_format' => NumberFormat::FORMAT_PERCENTAGE,
                    ]);
            } else {

                $this->myExcelWriter->writeCellXY(3, $this->ligne, $pourcentage,
                    [
                        'wrap' => true,
                        'style' => 'HORIZONTAL_CENTER',
                        'number_format' => NumberFormat::FORMAT_PERCENTAGE,
                    ]);
            }

            //calcul du taux global à la section

            ++$this->ligne;
        }
        $moyenne = $totalPourcentageQuestion / $nbQuestions;
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
        $this->myExcelWriter->borderBottomCellsRange(1, $this->ligne, 3, $this->ligne,
            ['color' => '000000', 'size' => Border::BORDER_THIN]);
        $this->ligne += 2;
    }

}
