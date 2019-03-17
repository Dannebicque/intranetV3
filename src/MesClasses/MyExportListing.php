<?php
/**
 * Created by PhpStorm.
 * User: davidannebicque
 * Date: 12/07/2018
 * Time: 13:10
 */

namespace App\MesClasses;

use App\Entity\Constantes;
use App\Entity\Etudiant;
use App\Entity\Groupe;
use App\Entity\Matiere;
use App\Entity\TypeGroupe;
use App\MesClasses\Excel\MyExcelWriter;
use App\MesClasses\Pdf\MyPDF;
use App\Repository\TypeGroupeRepository;
use PhpOffice\PhpSpreadsheet\Worksheet\Drawing;
use PhpOffice\PhpSpreadsheet\Writer\Csv;
use PhpOffice\PhpSpreadsheet\Writer\Xlsx;
use Symfony\Component\HttpFoundation\StreamedResponse;
use Symfony\Component\HttpKernel\KernelInterface;

class MyExportListing
{
    private $colonnesEnTete = [];

    /** @var TypeGroupeRepository */
    protected $typeGroupeRepository;
    protected $groupes;
    private $name = '';
    private $ligne = 1;

    private $colonne = 1;

    private $exportTypeDocument;
    private $exportFormat;
    private $exportChamps;
    private $exportFiltre;
    /** @var Matiere */
    private $matiere;

    /** @var DataUserSession */
    private $dataUserSession;
    private $base;

    /** @var TypeGroupe */
    private $typeGroupe;

    /** @var MyExcelWriter */
    private $myExcelWriter;

    /** @var MyPDF */
    private $myPdf;
    private $titre = '';

    /**
     * MyExport constructor.
     *
     * @param TypeGroupeRepository $typeGroupeRepository
     * @param DataUserSession      $dataUserSession
     * @param KernelInterface      $kernel
     * @param MyExcelWriter        $myExcelWriter
     * @param MyPDF                $myPdf
     */
    public function __construct(
        TypeGroupeRepository $typeGroupeRepository,
        DataUserSession $dataUserSession,
        KernelInterface $kernel,
        MyExcelWriter $myExcelWriter,
        MyPDF $myPdf
    ) {
        $this->typeGroupeRepository = $typeGroupeRepository;
        $this->dataUserSession = $dataUserSession;
        $this->myExcelWriter = $myExcelWriter;
        $this->myPdf = $myPdf;
        $this->base = $kernel->getProjectDir() . '/../';
    }

    /**
     * @param              $exportTypeDocument
     * @param              $exportFormat
     * @param              $exportChamps
     * @param              $exportFiltre
     * @param Matiere|null $matiere
     *
     * @return null|StreamedResponse
     * @throws \PhpOffice\PhpSpreadsheet\Exception
     */
    public function genereFichier(
        $exportTypeDocument,
        $exportFormat,
        $exportChamps,
        $exportFiltre,
        ?Matiere $matiere = null
    ): ?StreamedResponse {
        $this->exportTypeDocument = $exportTypeDocument;
        $this->exportFormat = $exportFormat;
        $this->exportChamps = $exportChamps;
        $this->exportFiltre = $exportFiltre;
        $this->matiere = $matiere;

        $this->typeGroupe = $this->typeGroupeRepository->find($exportFiltre);

        if ($this->typeGroupe !== null) {
            $this->groupes = $this->typeGroupe->getGroupes();

            $this->prepareColonnes();

            switch ($exportFormat) {
                case Constantes::FORMAT_CSV_POINT_VIRGULE:
                    return $this->exportCsv(';');
                    break;
                case Constantes::FORMAT_CSV_VIRGULE:
                    return $this->exportCsv(',');
                    break;
                case Constantes::FORMAT_EXCEL:
                    return $this->exportExcel();
                    break;
                case Constantes::FORMAT_PDF:
                    return $this->exportPdf();
                    break;
            }
        }

        return false;
    }

    private function prepareColonnes(): void
    {
        $this->colonnesEnTete[] = '#';
        $this->colonnesEnTete[] = 'Nom';
        $this->colonnesEnTete[] = 'Prénom';

        foreach ($this->exportChamps as $ec) {
            $this->colonnesEnTete[] = $ec;
        }

        $semestre = $this->typeGroupe->getSemestre() ? $this->typeGroupe->getSemestre()->getLibelle() : 'sans-semestre';

        switch ($this->exportTypeDocument) {
            case Constantes::TYPEDOCUMENT_EMARGEMENT:
                $this->name = 'emargement-'.$semestre;
                $this->titre = 'FEUILLE D\'EMARGEMENT - Semestre ' . $semestre;
                for ($i = 0; $i < 5; $i++) {
                    $this->colonnesEnTete[] = '';
                }
                break;
            case Constantes::TYPEDOCUMENT_EVALUATION:
                $this->titre = 'FEUILLE D\'EVALUATION - Semestre ' . $semestre;
                $this->name = 'evaluation-'.$semestre;
                $this->colonnesEnTete[] = 'Place';
                $this->colonnesEnTete[] = 'Présence';
                $this->colonnesEnTete[] = 'Note';
                $this->colonnesEnTete[] = 'Remise Copie';
                break;
            case Constantes::TYPEDOCUMENT_LISTE:
                $this->titre = 'LISTING - Semestre ' . $semestre;
                $this->name = 'listing-'.$semestre;
                break;
        }
    }

    private function exportCsv($separateur): StreamedResponse
    {
        $writer = new Csv($this->myExcelWriter->getSpreadsheet());

        return new StreamedResponse(
            function() use ($writer) {
                $writer->save('php://output');
            },
            200,
            [
                'Content-Type'        => 'application/csv',
                'Content-Disposition' => 'attachment;filename="' . $this->name . '.csv"'
            ]
        );
    }

    /**
     * @return StreamedResponse
     * @throws \PhpOffice\PhpSpreadsheet\Exception
     */
    private function exportExcel(): StreamedResponse
    {
        /** @var Groupe $groupe */
        foreach ($this->groupes as $groupe) {
            $this->myExcelWriter->createSheet($groupe->getLibelle());
            $this->writeSpecialHeader($groupe);
            $this->myExcelWriter->writeHeader($this->colonnesEnTete, 1, 15);
            $this->newLine();

            $id = 0;
            /** @var Etudiant $etudiant */
            foreach ($groupe->getEtudiants() as $etudiant) {
                $id++;
                $this->myExcelWriter->writeCellXY($this->colonne, $this->ligne, $id);
                $this->newColonne();
                $this->myExcelWriter->writeCellXY($this->colonne, $this->ligne, strtoupper($etudiant->getNom()));
                $this->newColonne();
                $this->myExcelWriter->writeCellXY($this->colonne, $this->ligne, strtoupper($etudiant->getPrenom()));
                $this->newLine();
            }

            $this->myExcelWriter->writeCellName('A11', $id);

            $this->myExcelWriter->borderCells('A12:H' . (string)$this->ligne);

            $this->myExcelWriter->getColumnDimension('A', 3);
            $this->myExcelWriter->getColumnAutoSize('B');
            $this->myExcelWriter->getColumnAutoSize('C');
            $this->myExcelWriter->getColumnDimension('E', 15);
            $this->myExcelWriter->getColumnDimension('F', 15);
            $this->myExcelWriter->getColumnDimension('G', 15);

            $this->setMiseEnPage();
        }

        $writer = new Xlsx($this->myExcelWriter->getSpreadsheet());

        return new StreamedResponse(
            function() use ($writer) {
                $writer->save('php://output');
            },
            200,
            [
                'Content-Type'        => 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
                'Content-Disposition' => 'attachment;filename="' . $this->name . '.xlsx"'
            ]
        );
    }

    /**
     * @param Groupe $groupe
     *
     * @throws \PhpOffice\PhpSpreadsheet\Exception
     */
    private function writeSpecialHeader(Groupe $groupe): void
    {
        //gérer les infos par le diplôme
        $dbt = $groupe->getTypeGroupe()->getSemestre()->getAnneeUniversitaire();
        $fin = $dbt + 1;

        $this->myExcelWriter->writeCellName('H1', 'Année Universitaire - ' . $dbt . ' - ' . $fin,
            ['style' => ['HORIZONTAL_RIGHT']]);
        $this->myExcelWriter->writeCellName('H2', 'IUT de Troyes - ' . $this->dataUserSession->getDepartement()->getLibelle(),
            ['style' => ['HORIZONTAL_RIGHT']]);
        $this->myExcelWriter->writeCellName('H4', $this->titre, ['style' => ['HORIZONTAL_RIGHT']]);

        $base = $this->base . 'public/upload/';

        //todo: dans le writer ?
        $objDrawing = new Drawing();
        $objDrawing->setName('Logo Departement');
        $objDrawing->setDescription('Logo Departement');
        $objDrawing->setPath($base . 'logo/' . $this->dataUserSession->getDepartement()->getLogoName());
        $objDrawing->setHeight(120);
        $objDrawing->setCoordinates('A1');
        $objDrawing->setWorksheet($this->myExcelWriter->getSheet());

        switch ($this->exportTypeDocument) {
            case Constantes::TYPEDOCUMENT_EMARGEMENT:

                break;
            case Constantes::TYPEDOCUMENT_EVALUATION:
                $this->myExcelWriter->writeCellName(
                    'H5',
                    'Date de l\'évaluation : .......................................',
                    ['style' => ['HORIZONTAL_RIGHT']]
                );
                $this->myExcelWriter->writeCellName('A8', 'NOM DE L\'ENSEIGNANT :');
                $this->myExcelWriter->mergeCells('A8:C8');

                $this->myExcelWriter->writeCellName('A9', 'SURVEILLANT :');
                $this->myExcelWriter->mergeCells('A9:C9');

                $this->myExcelWriter->writeCellName('A10', 'MATIERE EVALUEE :');
                $this->myExcelWriter->writeCellName('D10', $this->matiere->getLibelle());

                $this->myExcelWriter->mergeCells('A10:C10');

                $this->myExcelWriter->mergeCells('B14:C14');
                $this->myExcelWriter->writeCellName('B14', 'Groupe ' . $groupe->getLibelle(),
                    ['style' => ['HORIZONTAL_RIGHT']]);
                break;
            case Constantes::TYPEDOCUMENT_LISTE:

                break;
        }
    }

    private function newLine(): void
    {
        $this->ligne++;
        $this->colonne = 1;
    }

    private function newColonne(): void
    {
        $this->colonne++;
    }

    private function setMiseEnPage(): void
    {
        $this->myExcelWriter->getSheet()->getHeaderFooter()->setOddHeader('&C&H' . $this->titre);
        $this->myExcelWriter->getSheet()->getHeaderFooter()->setOddFooter('&L&BDépartement | ' . $this->name . ' | Généré depuis l\'intranet le ' . date('d/m/Y') . '&RPage &P sur &N');
        $this->myExcelWriter->getSheet()->getPageSetup()->setFitToPage(true);
    }

    private function exportPdf()
    {
        $this->myPdf::generePdf('pdf/listing.html.twig', ['typeGroupe' => $this->typeGroupe], $this->name);

        return null;
    }
}
