<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Classes/Structure/ApogeeExport.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 03/06/2021 12:02
 */

namespace App\Classes\Structure;

use App\Classes\Excel\MyExcelWriter;
use App\Entity\Diplome;
use PhpOffice\PhpSpreadsheet\Writer\Xlsx;
use Symfony\Component\HttpFoundation\StreamedResponse;

class ApogeeExport
{
    protected MyExcelWriter $myExcelWriter;
    protected Diplome $diplome;

    public function __construct(MyExcelWriter $myExcelWriter)
    {
        $this->myExcelWriter = $myExcelWriter;
    }

    public function setDiplome(Diplome $diplome)
    {
        $this->diplome = $diplome;
    }

    public function export(string $nomFichier)
    {
        $this->genereFichierApogee();

        $writer = new Xlsx($this->myExcelWriter->getSpreadsheet());

        return new StreamedResponse(
            static function() use ($writer) {
                $writer->save('php://output');
            },
            200,
            [
                'Content-Type' => 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
                'Content-Disposition' => 'attachment;filename="' . $nomFichier . '"',
            ]
        );
    }

    private function genereFichierApogee()
    {
        /** @var \App\Entity\Semestre $semestre */
        foreach ($this->diplome->getSemestres() as $semestre) {
            $this->myExcelWriter->createSheet($semestre->getLibelle());

            $this->myExcelWriter->getSheet()->setCellValue('A1', 'Diplôme : ');
            $this->myExcelWriter->getSheet()->setCellValue('B1', $this->diplome->getDisplay());
            $this->myExcelWriter->getSheet()->setCellValue('C1', $this->diplome->getCodeDiplome());
            $this->myExcelWriter->getSheet()->setCellValue('D1', $this->diplome->getCodeEtape());
            $this->myExcelWriter->getSheet()->setCellValue('E1', $this->diplome->getCodeVersion());
            $this->myExcelWriter->getSheet()->setCellValue('F1', $this->diplome->getCodeDepartement());

            $this->myExcelWriter->getSheet()->setCellValue('A2', 'Année : ');
            $this->myExcelWriter->getSheet()->setCellValue('B2', $semestre->getAnnee()->getLibelle());
            $this->myExcelWriter->getSheet()->setCellValue('C2', $semestre->getAnnee()->getCodeEtape());

            $this->myExcelWriter->getSheet()->setCellValue('A3', 'Semestre : ');
            $this->myExcelWriter->getSheet()->setCellValue('B3', $semestre->getLibelle());
            $this->myExcelWriter->getSheet()->setCellValue('C3', $semestre->getCodeElement());

            $this->myExcelWriter->getSheet()->setCellValue('A5', 'UE : ');

            $ligne = 5;
            $this->myExcelWriter->getSheet()->setCellValueByColumnAndRow(1, $ligne, 'Numéro UE');
            $this->myExcelWriter->getSheet()->setCellValueByColumnAndRow(2, $ligne, 'Libellé');
            $this->myExcelWriter->getSheet()->setCellValueByColumnAndRow(3, $ligne, 'Code élément');
            $this->myExcelWriter->getSheet()->setCellValueByColumnAndRow(4, $ligne, 'ECTS');
            $this->myExcelWriter->getSheet()->setCellValueByColumnAndRow(5, $ligne, 'Libellé Compétence Court');
            $this->myExcelWriter->getSheet()->setCellValueByColumnAndRow(5, $ligne, 'Libellé Compétence Long');

            ++$ligne;
            /** @var \App\Entity\Ue $ue */
            foreach ($semestre->getUes() as $ue) {
                $this->myExcelWriter->getSheet()->setCellValueByColumnAndRow(1, $ligne, $ue->getNumeroUe());
                $this->myExcelWriter->getSheet()->setCellValueByColumnAndRow(2, $ligne, $ue->getLibelle());
                $this->myExcelWriter->getSheet()->setCellValueByColumnAndRow(3, $ligne, $ue->getCodeElement());
                $this->myExcelWriter->getSheet()->setCellValueByColumnAndRow(4, $ligne, $ue->getNbEcts());
                $this->myExcelWriter->getSheet()->setCellValueByColumnAndRow(5, $ligne,
                    $ue->getApcCompetence()->getNomCourt());
                $this->myExcelWriter->getSheet()->setCellValueByColumnAndRow(6, $ligne,
                    $ue->getApcCompetence()->getLibelle());
                ++$ligne;
            }
            ++$ligne;
            ++$ligne;
            $this->myExcelWriter->getSheet()->setCellValueByColumnAndRow(1, $ligne, 'UE "organisation Ressource"');
            $this->myExcelWriter->getSheet()->setCellValueByColumnAndRow(2, $ligne, 'Libellé');
            $this->myExcelWriter->getSheet()->setCellValueByColumnAndRow(3, $ligne, 'Code élément');
            $this->myExcelWriter->getSheet()->setCellValueByColumnAndRow(4, $ligne, '');
            $this->myExcelWriter->getSheet()->setCellValueByColumnAndRow(5, $ligne, 'UE "organisation SAE"');
            $this->myExcelWriter->getSheet()->setCellValueByColumnAndRow(6, $ligne, 'Libellé');
            $this->myExcelWriter->getSheet()->setCellValueByColumnAndRow(7, $ligne, 'Code élément');
            $this->myExcelWriter->getSheet()->setCellValueByColumnAndRow(8, $ligne, '');

            ++$ligne;
            /** @var \App\Entity\Ue $ue */
            foreach ($semestre->getUes() as $ue) {
                $this->myExcelWriter->getSheet()->setCellValueByColumnAndRow(1, $ligne,
                    'UE' . $ue->getNumeroUe() . 'Ressource');
                $this->myExcelWriter->getSheet()->setCellValueByColumnAndRow(2, $ligne,
                    'UE' . $ue->getNumeroUe() . 'Ressource');
                $this->myExcelWriter->getSheet()->setCellValueByColumnAndRow(3, $ligne,
                    $ue->getCodeElement() . 'R');
                $this->myExcelWriter->getSheet()->setCellValueByColumnAndRow(4, $ligne, '');
                $this->myExcelWriter->getSheet()->setCellValueByColumnAndRow(5, $ligne,
                    'UE' . $ue->getNumeroUe() . 'SAE');
                $this->myExcelWriter->getSheet()->setCellValueByColumnAndRow(6, $ligne,
                    'UE' . $ue->getNumeroUe() . 'SAE');
                $this->myExcelWriter->getSheet()->setCellValueByColumnAndRow(7, $ligne,
                    $ue->getCodeElement() . 'S');
                $this->myExcelWriter->getSheet()->setCellValueByColumnAndRow(8, $ligne, '');
                ++$ligne;
            }

            ++$ligne;
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
                    $ressource->getCodeElement()[5] === 'M' ? 'Mutualisée' : 'UE ' . $ressource->getCodeElement()[5]);
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
                    $sae->getCodeElement()[5] === 'M' ? 'Mutualisée' : 'UE ' . $sae->getCodeElement()[5]);
                ++$ligne;
            }
        }
    }
}
