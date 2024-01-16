<?php
/*
 * Copyright (c) 2024. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Components/Questionnaire/QuestionnaireExportExcelBrut.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 16/01/2024 13:28
 */

namespace App\Components\Questionnaire;

use App\Classes\Configuration;
use App\Classes\Excel\MyExcelWriter;
use App\Components\Questionnaire\Section\EndSection;
use App\Components\Questionnaire\Section\StartSection;
use App\Components\Questionnaire\TypeQuestion\AbstractQuestion;
use App\Entity\QuestChoix;
use App\Entity\QuestQuestion;
use App\Entity\QuestQuestionnaire;
use PhpOffice\PhpSpreadsheet\Exception;
use PhpOffice\PhpSpreadsheet\Worksheet\PageSetup;
use PhpOffice\PhpSpreadsheet\Writer\Xlsx;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\StreamedResponse;


class QuestionnaireExportExcelBrut
{
    final public const SEUIL = 65;
    final public const COLOR_QUALITE = 'bb1e10';
    private array $resultatQuestion = [];
    private int $ligne;

    private int|float $nbReponses = 0;

    private int|float $sommePourcentage = 0;

    public function __construct(
        private readonly QuestionnaireRegistry $questionnaireRegistry,
        private readonly MyExcelWriter         $myExcelWriter,
        private readonly Configuration         $configuration
    )
    {
    }

    /**
     * @throws Exception
     */
    public function exportExcel(Questionnaire $questionnaire, QuestQuestionnaire $questQuestionnaire, $reponses): StreamedResponse
    {
        //dump($questionnaire);
        $typeDestinataire = $this->questionnaireRegistry->getTypeDestinataire($questQuestionnaire->getTypeDestinataire());
        $typeDestinataire->setQuestionnaire($questQuestionnaire);

        // export

        $this->myExcelWriter->createSheet(mb_substr('Export Réponses', 0, 31));
        $this->myExcelWriter->getSheet()->getPageSetup()->setPaperSize(PageSetup::PAPERSIZE_A4);
        $this->myExcelWriter->getSheet()->getPageSetup()->setScale(91);

        $ligne = 1;
        $col = 2;

        $this->myExcelWriter->writeCellXY(1, $ligne, 'Id');

        foreach ($questionnaire->getSections() as $questSection) {
            if ($questSection->typeSection !== StartSection::class && $questSection->typeSection !== EndSection::class) {
                foreach ($questSection->getQuestions() as $questQuestion) {
                    $this->myExcelWriter->writeCellXY($col, $ligne, $questQuestion->libelle);
                }
                ++$col;
            }
        }
        $ligne++;
        foreach ($reponses as $key => $reponse) {

            $col = 2;
            $this->myExcelWriter->writeCellXY(1, $ligne, $key);
            foreach ($questionnaire->getSections() as $questSection) {
                if ($questSection->typeSection !== StartSection::class && $questSection->typeSection !== EndSection::class) {
                    foreach ($questSection->getQuestions() as $questQuestion) {
                        if (array_key_exists($questQuestion->cle, $reponse)) {
                            $this->myExcelWriter->writeCellXY($col, $ligne, $this->writeExcelReponses($questQuestion, $reponse[$questQuestion->cle]));
                        } else {
                            $this->myExcelWriter->writeCellXY($col, $ligne, 'erreur?');
                        }
                    }
                    ++$col;
                }
            }

            $ligne++;
        }

        $writer = new Xlsx($this->myExcelWriter->getSpreadsheet());

        return new StreamedResponse(
            static function () use ($writer) {
                $writer->save('php://output');
            },
            Response::HTTP_OK,
            [
                'Content-Type' => 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
                'Content-Disposition' => 'attachment;filename="' . $questQuestionnaire->getLibelle() . '.xlsx"',
            ]
        );
    }

    private function writeExcelReponses(
        QuestQuestion|AbstractQuestion $question,
        QuestChoix                     $reponse
    ): string
    {
        if (is_array($reponse->getValeur())) {
            return implode(',', $reponse->getValeur());
        }
//        dump($question->getReponsesArray());
//        dd($reponse);
        $tCleReponse = explode('_', $reponse->getCleReponse());
        //récupérer le dernier element du tableau
        $cleReponse = $tCleReponse[count($tCleReponse) - 1];

        if (array_key_exists($cleReponse, $question->getReponsesArray())) {
            return $question->getReponsesArray()[$cleReponse];
        }

        return $reponse->getValeur();
    }

}
