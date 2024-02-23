<?php
/*
 * Copyright (c) 2024. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Classes/Structure/ApogeeExport.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 23/02/2024 21:35
 */

namespace App\Classes\Structure;

use App\Classes\Excel\MyExcelWriter;
use App\Entity\Diplome;
use App\Entity\Semestre;
use App\Entity\Ue;
use PhpOffice\PhpSpreadsheet\Writer\Xlsx;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\StreamedResponse;

class ApogeeExport
{
    protected Diplome $diplome;

    public function __construct(protected MyExcelWriter $myExcelWriter)
    {
    }

    public function setDiplome(Diplome $diplome): void
    {
        $this->diplome = $diplome;
    }

    public function export(string $nomFichier): StreamedResponse
    {
        $this->genereFichierApogee();

        $writer = new Xlsx($this->myExcelWriter->getSpreadsheet());

        return new StreamedResponse(
            static function () use ($writer) {
                $writer->save('php://output');
            },
            Response::HTTP_OK,
            [
                'Content-Type' => 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
                'Content-Disposition' => 'attachment;filename="'.$nomFichier.'"',
            ]
        );
    }

    private function genereFichierApogee(): void
    {
        /** @var Semestre $semestre */
        foreach ($this->diplome->getSemestres() as $semestre) {
            $this->myExcelWriter->createSheet($semestre->getLibelle());
            $this->myExcelWriter->writeCellXY(1, 1, 'B.U.T. : ', [
                'color' => 'bb1e10',
                'font-size' => 12,
                'font-weight' => 'bold',
                'style' => 'HORIZONTAL_CENTER',
            ]);
            $this->myExcelWriter->writeCellXY(2, 1, $this->diplome->getSigle(), [
                'color' => 'bb1e10',
                'font-size' => 12,
                'font-weight' => 'bold',
                'style' => 'HORIZONTAL_CENTER',
            ]);

            $this->myExcelWriter->writeCellName('A2', $semestre->getAnnee()->getLibelle());
            $this->myExcelWriter->writeCellName('A3', 'IUT de Troyes');
            $this->myExcelWriter->writeCellXY(1, 4, 'Code diplôme', [
                'color' => 'bb1e10',
                'font-size' => 12,
                'font-weight' => 'bold',
                'style' => 'HORIZONTAL_CENTER',
            ]);

            $this->myExcelWriter->writeCellName('A5',
                $this->diplome->getCodeDiplome().' '.$this->diplome->getCodeVersion());

            $this->myExcelWriter->writeCellXY(1, 6, 'Code étape', [
                'color' => 'bb1e10',
                'font-size' => 12,
                'font-weight' => 'bold',
                'style' => 'HORIZONTAL_CENTER',
            ]);

            $this->myExcelWriter->writeCellName('A7',
                $semestre->getAnnee()->getCodeEtape().' '.$semestre->getAnnee()->getCodeVersion());

            $this->myExcelWriter->writeCellXY(1, 9, 'Niveau 1', [
                'color' => 'bb1e10',
                'font-size' => 12,
                'font-weight' => 'bold',
                'style' => 'HORIZONTAL_CENTER',
            ]);
            $this->myExcelWriter->writeCellName('A10', 'SEMESTRE');

            $this->myExcelWriter->writeCellName('B9', 'SEMESTRE :');
            $this->myExcelWriter->writeCellName('B10', $semestre->getOrdreLmd());
            $this->myExcelWriter->writeCellName('C9', 'Code Apogée');
            $this->myExcelWriter->writeCellName('C10', $semestre->getCodeElement());

            $this->myExcelWriter->writeCellXY(1, 12, 'Niveau 2', [
                'color' => 'bb1e10',
                'font-size' => 12,
                'font-weight' => 'bold',
                'style' => 'HORIZONTAL_CENTER',
            ]);
            $this->myExcelWriter->writeCellName('A13', 'UE');

            $colonne = 2;
            $this->myExcelWriter->writeCellName('B12', 'Libellé UE');
            $this->myExcelWriter->writeCellName('C12', 'UE');
            $this->myExcelWriter->writeCellName('D12', 'Code Apogée');
            $this->myExcelWriter->writeCellName('E12', 'ECTS');

            $ligne = 13;
            /** @var Ue $ue */
            foreach ($semestre->getUes() as $ue) {
                $this->myExcelWriter->writeCellXY($colonne, $ligne, $ue->getApcCompetence()->getNomCourt());
                ++$colonne;
                $this->myExcelWriter->writeCellXY($colonne, $ligne, $ue->getNumeroUe());
                ++$colonne;
                $this->myExcelWriter->writeCellXY($colonne, $ligne, $ue->getCodeElement());
                ++$colonne;
                $this->myExcelWriter->writeCellXY($colonne, $ligne, $ue->getNbEcts());
                $colonne = 2;
                ++$ligne;
            }
            ++$ligne;
            ++$ligne;
            $this->myExcelWriter->writeCellXY(1, $ligne, 'Niveau 3', [
                'color' => 'bb1e10',
                'font-size' => 12,
                'font-weight' => 'bold',
                'style' => 'HORIZONTAL_CENTER',
            ]);
            ++$ligne;

            $this->myExcelWriter->getSheet()->setCellValueByColumnAndRow(1, $ligne, 'Ressource');
            $this->myExcelWriter->getSheet()->setCellValueByColumnAndRow(2, $ligne, 'Libellé');
            $this->myExcelWriter->getSheet()->setCellValueByColumnAndRow(3, $ligne, 'Libellé Court');
            $this->myExcelWriter->getSheet()->setCellValueByColumnAndRow(4, $ligne, 'Code élément');
            ++$ligne;

            foreach ($semestre->getApcRessources() as $ressource) {
                $this->myExcelWriter->getSheet()->setCellValueByColumnAndRow(1, $ligne, $ressource->getCodeMatiere());
                $this->myExcelWriter->getSheet()->setCellValueByColumnAndRow(2, $ligne, $ressource->getLibelle());
                $this->myExcelWriter->getSheet()->setCellValueByColumnAndRow(3, $ligne, $ressource->getLibelleCourt());
                $this->myExcelWriter->getSheet()->setCellValueByColumnAndRow(4, $ligne, $ressource->getCodeElement());
                $this->myExcelWriter->getSheet()->setCellValueByColumnAndRow(5, $ligne,
                    'M' === $ressource->getCodeElement()[5] ? 'Mutualisée' : 'UE '.$ressource->getCodeElement()[5]);
                ++$ligne;
            }

            ++$ligne;
            ++$ligne;
            $this->myExcelWriter->getSheet()->setCellValueByColumnAndRow(1, $ligne, 'SAE');
            $this->myExcelWriter->getSheet()->setCellValueByColumnAndRow(2, $ligne, 'Libellé');
            $this->myExcelWriter->getSheet()->setCellValueByColumnAndRow(3, $ligne, 'Libellé Court');
            $this->myExcelWriter->getSheet()->setCellValueByColumnAndRow(4, $ligne, 'Code élément');
            ++$ligne;

            foreach ($semestre->getApcSaes() as $sae) {
                $this->myExcelWriter->getSheet()->setCellValueByColumnAndRow(1, $ligne, $sae->getCodeMatiere());
                $this->myExcelWriter->getSheet()->setCellValueByColumnAndRow(2, $ligne, $sae->getLibelle());
                $this->myExcelWriter->getSheet()->setCellValueByColumnAndRow(3, $ligne, $sae->getLibelleCourt());
                $this->myExcelWriter->getSheet()->setCellValueByColumnAndRow(4, $ligne, $sae->getCodeElement());
                $this->myExcelWriter->getSheet()->setCellValueByColumnAndRow(5, $ligne,
                    'M' === $sae->getCodeElement()[5] ? 'Mutualisée' : 'UE '.$sae->getCodeElement()[5]);
                ++$ligne;
            }
            $this->myExcelWriter->getColumnsAutoSize('A', 'I');
        }
    }
}
