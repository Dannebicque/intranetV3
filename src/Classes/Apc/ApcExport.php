<?php
/*
 * Copyright (c) 2024. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Classes/Apc/ApcExport.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 12/05/2024 19:45
 */

namespace App\Classes\Apc;

use App\Classes\Configuration;
use App\Classes\DataUserSession;
use App\Classes\Excel\MyExcelWriter;
use App\Entity\ApcSae;
use App\Entity\Diplome;
use PhpOffice\PhpSpreadsheet\Writer\Xlsx;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\StreamedResponse;

class ApcExport
{
    public function __construct(
        protected DataUserSession      $dataUserSession,
        protected Configuration        $configuration,
        private readonly MyExcelWriter $myExcelWriter,
    )
    {
    }

    public function exportProgramme(
        array   $ressources,
        array   $saes,
        Diplome $diplome,
    ): Response
    {


        foreach ($this->dataUserSession->semestresByDiplome($diplome->getId()) as $semestre) {
            $this->myExcelWriter->createSheet($semestre->getLibelle() . " - SAE");

            $this->myExcelWriter->writeCellName('A1', 'Code SAE');
            $this->myExcelWriter->writeCellName('B1', 'Code Element');
            $this->myExcelWriter->writeCellName('C1', 'Libellé');
            $this->myExcelWriter->writeCellName('D1', 'Compétences');
            $this->myExcelWriter->writeCellName('E1', 'Mutualisée?');
            $this->myExcelWriter->writeCellName('F1', 'Suspendu?');
            $this->myExcelWriter->writeCellName('G1', 'Bonification');
            $this->myExcelWriter->writeCellName('H1', 'Heures CM IUT');
            $this->myExcelWriter->writeCellName('I1', 'Heures TD IUT');
            $this->myExcelWriter->writeCellName('J1', 'Heures TP IUT');
            $this->myExcelWriter->writeCellName('K1', 'Heures Prj IUT');
            $this->myExcelWriter->writeCellName('L1', 'Nb Notes');

            $ligne = 2;

            /** @var ApcSae $sae */
            foreach ($saes as $sae) {
                if ($sae->getSemestres()->contains($semestre)) {
                    $this->myExcelWriter->writeCellName('A' . $ligne, $sae->getCodeMatiere());
                    $this->myExcelWriter->writeCellName('B' . $ligne, $sae->getCodeElement());
                    $this->myExcelWriter->writeCellName('C' . $ligne, $sae->getLibelle());
                    $this->myExcelWriter->writeCellName('D' . $ligne, $this->displayCompetences($sae->getCompetences()));
                    $this->myExcelWriter->writeCellName('E' . $ligne, $sae->getMutualisee() ? 'Oui' : 'Non');
                    $this->myExcelWriter->writeCellName('F' . $ligne, $sae->isSuspendu() ? 'Oui' : 'Non');
                    $this->myExcelWriter->writeCellName('G' . $ligne, $sae->getBonification() ? 'Oui' : 'Non');
                    $this->myExcelWriter->writeCellName('H' . $ligne, $sae->getCmFormation());
                    $this->myExcelWriter->writeCellName('I' . $ligne, $sae->getTdFormation());
                    $this->myExcelWriter->writeCellName('J' . $ligne, $sae->getTpFormation());
                    $this->myExcelWriter->writeCellName('K' . $ligne, $sae->getTpFormation());
                    $this->myExcelWriter->writeCellName('L' . $ligne, $sae->getNbNotes());
                    $ligne++;
                }
            }

            $this->myExcelWriter->createSheet($semestre->getLibelle() . " - Ressources");

            $this->myExcelWriter->writeCellName('A1', 'Code Ressource');
            $this->myExcelWriter->writeCellName('B1', 'Code Element');
            $this->myExcelWriter->writeCellName('C1', 'Libellé');
            $this->myExcelWriter->writeCellName('D1', 'Compétences');
            $this->myExcelWriter->writeCellName('E1', 'Mutualisée?');
            $this->myExcelWriter->writeCellName('F1', 'Suspendu?');
            $this->myExcelWriter->writeCellName('G1', 'Heures CM IUT');
            $this->myExcelWriter->writeCellName('H1', 'Heures TD IUT');
            $this->myExcelWriter->writeCellName('I1', 'Heures TP IUT');
            $this->myExcelWriter->writeCellName('J1', 'Nb Notes');

            $ligne = 2;

            foreach ($ressources as $ressource) {
                if ($ressource->getSemestres()->contains($semestre)) {
                    $this->myExcelWriter->writeCellName('A' . $ligne, $ressource->getCodeMatiere());
                    $this->myExcelWriter->writeCellName('B' . $ligne, $ressource->getCodeElement());
                    $this->myExcelWriter->writeCellName('C' . $ligne, $ressource->getLibelle());
                    $this->myExcelWriter->writeCellName('D' . $ligne, $this->displayCompetences($ressource->getCompetences()));
                    $this->myExcelWriter->writeCellName('E' . $ligne, $ressource->getMutualisee() ? 'Oui' : 'Non');
                    $this->myExcelWriter->writeCellName('F' . $ligne, $ressource->isSuspendu() ? 'Oui' : 'Non');
                    $this->myExcelWriter->writeCellName('G' . $ligne, $ressource->getCmFormation());
                    $this->myExcelWriter->writeCellName('H' . $ligne, $ressource->getTdFormation());
                    $this->myExcelWriter->writeCellName('I' . $ligne, $ressource->getTpFormation());
                    $this->myExcelWriter->writeCellName('J' . $ligne, $ressource->getNbNotes());
                    $ligne++;
                }
            }
        }

        $writer = new Xlsx($this->myExcelWriter->getSpreadsheet());

        $name = 'export_apc_' . $diplome->getLibelle() . '_' . date('YmdHis');
        return new StreamedResponse(
            static function () use ($writer) {
                $writer->save('php://output');
            },
            Response::HTTP_OK,
            [
                'Content-Type' => 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
                'Content-Disposition' => 'attachment;filename="' . $name . '.xlsx"',
            ]
        );
    }

    private function displayCompetences($competences): string
    {
        $str = '';
        foreach ($competences as $competence) {
            $str .= $competence->getNomCourt() . "; ";
        }

        return $str;
    }
}
