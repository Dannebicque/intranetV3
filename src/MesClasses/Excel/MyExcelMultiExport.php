<?php
/**
 * Copyright (C) 7 / 2019 | David annebicque | IUT de Troyes - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetv3/src/MesClasses/Excel/MyExcelMultiExport.php
 * @author     David Annebicque
 * @project intranetv3
 * @date 30/07/2019 08:40
 * @lastUpdate 30/07/2019 08:17
 */

/**
 * Created by PhpStorm.
 * User: davidannebicque
 * Date: 21/06/2018
 * Time: 07:33
 */

namespace App\MesClasses\Excel;

use App\Entity\Etudiant;
use App\Entity\Semestre;
use App\MesClasses\MyAbsences;
use App\MesClasses\MySerializer;
use PhpOffice\PhpSpreadsheet\Exception;
use PhpOffice\PhpSpreadsheet\Worksheet\PageSetup;
use PhpOffice\PhpSpreadsheet\Writer\Csv;
use PhpOffice\PhpSpreadsheet\Writer\Pdf\Dompdf;
use PhpOffice\PhpSpreadsheet\Writer\Xlsx;
use Symfony\Component\HttpFoundation\StreamedResponse;
use Symfony\Contracts\Translation\TranslatorInterface;
use function is_array;

/**
 * Class MyExcelMultiExport
 * @package App\MesClasses\Excel
 */
class MyExcelMultiExport
{
    /** @var MySerializer */
    private $serializer;

    /** @var MyExcelWriter */
    private $myExcelWriter;

    /** @var TranslatorInterface */
    private $translator;

    public function __construct(TranslatorInterface $translator, MySerializer $mySerializer, MyExcelWriter $myExcelWriter)
    {
        $this->serializer = $mySerializer;
        $this->myExcelWriter = $myExcelWriter;
        $this->translator = $translator;
    }

    /**
     * @param $name
     *
     * @return StreamedResponse
     * @throws Exception
     */
    public function saveXlsx($name): StreamedResponse
    {
        $this->pageSetup($name);
        $writer = new Xlsx($this->myExcelWriter->getSpreadsheet());

        return new StreamedResponse(
            static function() use ($writer) {
                $writer->save('php://output');
            },
            200,
            [
                'Content-Type'        => 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
                'Content-Disposition' => 'attachment;filename="' . $name . '.xlsx"'
            ]
        );
    }

    /**
     * @param $name
     *
     * @throws Exception
     */
    public function pageSetup($name): void
    {
        $this->myExcelWriter->getSpreadsheet()->getProperties()->setTitle($name);
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

    /**
     * @param       $name
     * @param array $options
     *
     * @return StreamedResponse
     * @throws Exception
     */
    public function saveCsv($name, array $options = []): StreamedResponse
    {
        $this->pageSetup($name);
        $writer = new Csv($this->myExcelWriter->getSpreadsheet());

        return new StreamedResponse(
            static function() use ($writer) {
                $writer->save('php://output');
            },
            200,
            [
                'Content-Type'        => 'application/csv',
                'Content-Disposition' => 'attachment;filename="' . $name . '.csv"'
            ]
        );
    }

    /**
     * @param       $name
     *
     * @return StreamedResponse
     * @throws Exception
     */
    public function savePdf($name): StreamedResponse
    {
        $this->pageSetup($name);

        $writer = new Dompdf($this->myExcelWriter->getSpreadsheet());

        return new StreamedResponse(
            static function() use ($writer) {
                $writer->save('php://output');
            },
            200,
            [
                'Content-Type'        => 'application/pdf',
                'Content-Disposition' => 'attachment;filename="' . $name . '.pdf"'
            ]
        );
    }

    /**
     * @param $data
     * @param $modele
     * @param $colonne
     *
     * @throws Exception
     */
    public function genereExcelFromSerialization($data, $modele, $colonne): void
    {
        $this->myExcelWriter->createSheet('onglet 1');
        //serialize les data
        $dataJson = $this->serializer->serialize($data, $modele);

        $tabData = json_decode($dataJson, true);
        //header
        $i = 1;
        $ligne = 1;
        foreach ($colonne as $value) {
            if (is_array($value)) {
                foreach ($value as $col) {

                    $this->myExcelWriter->getSheet()->setCellValueByColumnAndRow(
                        $i,
                        $ligne,
                        $col
                    );
                    //todo: utiliser translate pour générer les en-têtes de colonnes
                    $i++;
                }
            } else {
                $this->myExcelWriter->getSheet()->setCellValueByColumnAndRow($i, $ligne, $value);
                $i++;
            }
        }
        $i = 1;
        $ligne++;
        foreach ($tabData as $row) {
            foreach ($colonne as $key => $value) {
                if (is_array($value)) {
                    foreach ($value as $col) {
                        $this->myExcelWriter->getSheet()->setCellValueByColumnAndRow($i, $ligne, $row[$key][$col]);
                        $i++;
                    }
                } else {
                    $this->myExcelWriter->getSheet()->setCellValueByColumnAndRow($i, $ligne, $row[$value]);
                    $i++;
                }
            }

            $i = 1;
            $ligne++;
        }
    }

    /**
     * @param $myAbsences
     */
    public function genereExcelAbsence(MyAbsences $myAbsences): void
    {
        $this->myExcelWriter->writeHeader(['nom', 'prenom', 'nbCoursManques', 'totalDuree', 'nbNonJustifie', 'nbJustifie']);
        $ligne = 2;
        //todo: en param ?
        $colonne = 1;
        foreach ($myAbsences->getEtudiants() as $etudiant) {
            $this->myExcelWriter->writeCellXY($colonne, $ligne, $etudiant->getNom());
            $colonne++;
            $this->myExcelWriter->writeCellXY($colonne, $ligne, $etudiant->getPrenom());
            $colonne++;
            $this->myExcelWriter->writeCellXY(
                $colonne,
                $ligne,
                $myAbsences->getStatistiques()[$etudiant->getId()]['nbCoursManques']
            );
            $colonne++;
            $this->myExcelWriter->writeCellXY(
                $colonne,
                $ligne,
                $myAbsences->getStatistiques()[$etudiant->getId()]['totalDuree']->format('H:i')
            );
            $colonne++;
            $this->myExcelWriter->writeCellXY(
                $colonne,
                $ligne,
                $myAbsences->getStatistiques()[$etudiant->getId()]['nbNonJustifie']
            );
            $colonne++;
            $this->myExcelWriter->writeCellXY(
                $colonne,
                $ligne,
                $myAbsences->getStatistiques()[$etudiant->getId()]['nbJustifie']
            );
            $ligne++;
            $colonne = 1;
        }
    }

    /**
     * @param Semestre $semestre
     */
    public function genereModeleExcel(Semestre $semestre)
    {
        $this->myExcelWriter->createSheet('import');

        $this->myExcelWriter->writeHeader(['num_etudiant', 'nom', 'prenom', 'note', 'commentaire']);
        $ligne = 2;
        //todo: en param ?
        $colonne = 1;
        /** @var Etudiant $etudiant */
        //todo: peut être a améliorer avec un filtre des étudiants?
        foreach ($semestre->getEtudiants() as $etudiant) {
            $this->myExcelWriter->writeCellXY($colonne, $ligne, $etudiant->getNumEtudiant());
            $colonne++;
            $this->myExcelWriter->writeCellXY($colonne, $ligne, $etudiant->getNom());
            $colonne++;
            $this->myExcelWriter->writeCellXY($colonne, $ligne, $etudiant->getPrenom());
            $ligne++;
            $colonne = 1;
        }
    }
}
