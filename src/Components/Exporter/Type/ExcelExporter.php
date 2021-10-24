<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Components/Exporter/Type/ExcelExporter.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 23/10/2021 10:41
 */

namespace App\Components\Exporter\Type;

use App\Classes\Excel\MyExcelWriter;
use App\Components\Exporter\SourceIterator\SourceInterface;
use PhpOffice\PhpSpreadsheet\Cell\Coordinate;
use PhpOffice\PhpSpreadsheet\Worksheet\PageSetup;
use PhpOffice\PhpSpreadsheet\Writer\Xlsx;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\StreamedResponse;
use Symfony\Contracts\Translation\TranslatorInterface;

class ExcelExporter extends AbstractExporter implements ExporterInterface
{
    protected SourceInterface $datas;
    protected string $nomFichier;
    private MyExcelWriter $myExcelWriter;
    private TranslatorInterface $translatable;

    public function __construct(MyExcelWriter $myExcelWriter, TranslatorInterface $translatable)
    {
        $this->myExcelWriter = $myExcelWriter;
        $this->translatable = $translatable;
    }

    public function export(SourceInterface $datas, string $nomFichier)
    {
        $this->nomFichier = $this->checkNomFichier($nomFichier, 'xlsx');
        $this->datas = $datas;
        //prépare le fichier
        $this->myExcelWriter->createSheet('onglet 1');
        $ligne = 1;
        $colonne = 1;
        foreach ($this->datas->getFields() as $label => $type) {
            $this->myExcelWriter->getSheet()->setCellValueByColumnAndRow(
                $colonne,
                $ligne,
                $this->translatable->trans($label, [], 'export')
            );
            $this->myExcelWriter->setCellEnteteStyle($colonne, $ligne);
            ++$colonne;
        }
        foreach ($this->datas->getDatas() as $data) {
            ++$ligne;
            $colonne = 1;
            foreach ($this->datas->getFields() as $label => $type) {
                if (!array_key_exists($label, $data)) {
                    $this->myExcelWriter->getSheet()->setCellValueByColumnAndRow(
                        $colonne,
                        $ligne,
                        '-'
                    );
                } else {
                    $this->myExcelWriter->getSheet()->setCellValueByColumnAndRow(
                        $colonne,
                        $ligne,
                        $data[$label]
                    );
                }
                ++$colonne;
            }

            $this->myExcelWriter->getColumnsAutoSize('A', Coordinate::stringFromColumnIndex($colonne));
        }
    }

    //gérer le sens, la taille ?
    //le footer par défaut

    public function genereFichier(): Response
    {
        $this->pageSetup();
        $writer = new Xlsx($this->myExcelWriter->getSpreadsheet());

        return new StreamedResponse(
            static function() use ($writer) {
                $writer->save('php://output');
            },
            200,
            [
                'Content-Type' => 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
                'Content-Disposition' => 'attachment;filename="' . $this->nomFichier . '"',
            ]
        );
    }

    public function pageSetup(): void
    {
        $this->myExcelWriter->getSpreadsheet()->getProperties()->setTitle($this->nomFichier);
        $this->myExcelWriter->getSpreadsheet()->getActiveSheet()->getPageSetup()->setPaperSize(PageSetup::PAPERSIZE_A4);
        $this->myExcelWriter->getSpreadsheet()->getActiveSheet()->getPageSetup()->setOrientation(PageSetup::ORIENTATION_LANDSCAPE);
        $this->myExcelWriter->getSpreadsheet()->getActiveSheet()->setShowGridlines(true); //affichage de la grille
        $this->myExcelWriter->getSpreadsheet()->getActiveSheet()->setPrintGridlines(true); //affichage de la grille
        $this->myExcelWriter->getSpreadsheet()->getActiveSheet()->getPageSetup()->setRowsToRepeatAtTopByStartAndEnd(
            1,
            1
        ); //ligne a répéter en haut
        $this->myExcelWriter->getSpreadsheet()->getActiveSheet()->getHeaderFooter()
            ->setOddHeader('&C&HDocument généré depuis l\'Intranet !');
        $this->myExcelWriter->getSpreadsheet()->getActiveSheet()->getHeaderFooter()
            ->setOddFooter('&L&B' . $this->myExcelWriter->getSpreadsheet()->getProperties()->getTitle() . '&RPage &P of &N');
    }
}
