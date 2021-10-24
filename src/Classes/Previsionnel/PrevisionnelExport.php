<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Classes/Previsionnel/PrevisionnelExport.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 23/10/2021 10:36
 */

namespace App\Classes\Previsionnel;

use App\Classes\Excel\MyExcelWriter;
use App\DTO\Matiere;
use App\Utils\Tools;
use App\Entity\Departement;
use PhpOffice\PhpSpreadsheet\Writer\Xlsx;
use Symfony\Component\HttpFoundation\StreamedResponse;

/**
 * Class Previsionnel d'export.
 */
class PrevisionnelExport
{
    private int $ligne = 0;

    private MyExcelWriter $myExcelWriter;

    public function __construct(MyExcelWriter $myExcelWriter)
    {
        $this->myExcelWriter = $myExcelWriter;
    }

    public function exportOmegaDepartement(
        array $previsionnels,
        array $hrs,
        Departement $departement
    ): StreamedResponse {
        $this->myExcelWriter->createSheet('omega');
        $this->myExcelWriter->writeHeader([
            'CODE VET',
            'LIBELLE VET',
            'CODE ELEMENT*',
            'LIBELLE ELEMENT',
            'CODE HARPEGE*',
            'NOM PRENOM',
            'H CM PREVU*',
            'GP CM PREVU*',
            'H TD PREVU*',
            'GP TD PREVU*',
            'H TP PREVU*',
            'GP TP PREVU*',
        ]);
        $this->ligne = 2;
        $this->ecritPrevisionnel($previsionnels);
        $this->ecritHRS($hrs);

        $writer = new Xlsx($this->myExcelWriter->getSpreadsheet());

        return new StreamedResponse(
            static function() use ($writer) {
                $writer->save('php://output');
            },
            200,
            [
                'Content-Type' => 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
                'Content-Disposition' => 'attachment;filename="export-omega' . $departement->getLibelle() . '.xlsx"',
            ]
        );
    }

    private function ecritPrevisionnel(
        $previsionnels
    ): void {
        /** @var \App\DTO\Previsionnel $previ */
        foreach ($previsionnels as $previ) {
            $colonne = 1;
            if (null !== $previ->matiere_id) {
                if ($previ->semestre_id !== null && $previ->annee_id !== null) {
                    //CODE VET
                    $this->myExcelWriter->writeCellXY($colonne, $this->ligne,
                        $previ->annee_code_etape);
                    ++$colonne;
                    //LIBELLE VET
                    $this->myExcelWriter->writeCellXY($colonne, $this->ligne,
                        $previ->annee_libelle_long);
                } else {
                    $this->myExcelWriter->writeCellXY($colonne, $this->ligne,
                        'ERR');
                    ++$colonne;
                    //LIBELLE VET
                    $this->myExcelWriter->writeCellXY($colonne, $this->ligne,
                        'ERR');
                }
                ++$colonne;
                //CODE ELEMENT*
                $this->myExcelWriter->writeCellXY($colonne, $this->ligne, $previ->matiere_code_element);
                ++$colonne;
                //LIBELLE ELEMENT
                $this->myExcelWriter->writeCellXY($colonne, $this->ligne, $previ->matiere_libelle);
                ++$colonne;
            } else {
                $this->myExcelWriter->writeCellXY($colonne, $this->ligne,
                    'ERR');
                ++$colonne;
                //LIBELLE VET
                $this->myExcelWriter->writeCellXY($colonne, $this->ligne,
                    'ERR');
                ++$colonne;
                //CODE ELEMENT*
                $this->myExcelWriter->writeCellXY($colonne, 'ERR');
                ++$colonne;
                //LIBELLE ELEMENT
                $this->myExcelWriter->writeCellXY($colonne, 'ERR');
                ++$colonne;
            }

            if (null !== $previ->personnel_id) {
                //CODE HARPEGE*
                $this->myExcelWriter->writeCellXY($colonne, $this->ligne,
                    $previ->personnel_numeroHarpege);
                ++$colonne;
                //NOM PRENOM
                $this->myExcelWriter->writeCellXY($colonne, $this->ligne,
                    mb_strtoupper(Tools::supprimeAccent($previ->personnel_nom)) . ' ' . mb_strtoupper(Tools::supprimeAccent($previ->personnel_prenom)));
            } else {
                $this->myExcelWriter->writeCellXY($colonne, $this->ligne, 'ERR-XXX');
                ++$colonne;
                $this->myExcelWriter->writeCellXY($colonne, $this->ligne,
                    'ERR-XXX');
            }
            ++$colonne;
            //H CM PREVU*
            $this->myExcelWriter->writeCellXY($colonne, $this->ligne, $previ->nbHCm);
            ++$colonne;
            //GP CM PREVU*
            $this->myExcelWriter->writeCellXY($colonne, $this->ligne, $previ->nbGrCm);
            ++$colonne;
            // H TD PREVU*
            $this->myExcelWriter->writeCellXY($colonne, $this->ligne, $previ->nbHTd);
            ++$colonne;
            //GP TD PREVU*
            $this->myExcelWriter->writeCellXY($colonne, $this->ligne, $previ->nbGrTd);
            ++$colonne;
            //H TP PREVU*
            $this->myExcelWriter->writeCellXY($colonne, $this->ligne, $previ->nbHTp);
            ++$colonne;
            //GP TP PREVU*
            $this->myExcelWriter->writeCellXY($colonne, $this->ligne, $previ->nbGrTp);
            ++$this->ligne;
        }
    }

    /**
     * @param $hrs
     */
    private function ecritHRS(array $hrs): void
    {
        foreach ($hrs as $previ) {
            $colonne = 1;
            //CODE VET
            if (null !== $previ->getSemestre() && null !== $previ->getSemestre()->getAnnee()) {
                $this->myExcelWriter->writeCellXY($colonne, $this->ligne,
                    $previ->getSemestre()->getAnnee()->getCodeEtape());
                ++$colonne;
                $this->myExcelWriter->writeCellXY($colonne, $this->ligne,
                    $previ->getSemestre()->getAnnee()->getLibelleLong());
            } elseif (null !== $previ->getDiplome()) {
                $this->myExcelWriter->writeCellXY($colonne, $this->ligne,
                    $previ->getDiplome()->getCodeDiplome());
                ++$colonne;
                $this->myExcelWriter->writeCellXY($colonne, $this->ligne,
                    $previ->getDiplome()->getLibelle());
            } else {
                $this->myExcelWriter->writeCellXY($colonne, $this->ligne, '');
                ++$colonne;
                $this->myExcelWriter->writeCellXY($colonne, $this->ligne, '');
            }
            ++$colonne;
            //CODE ELEMENT*
            $this->myExcelWriter->writeCellXY($colonne, $this->ligne,
                $previ->getTypeHrs() ? $previ->getTypeHrs()->getType() : 'non défini');
            ++$colonne;
            //LIBELLE ELEMENT
            if (null !== $previ->getTypeHrs()) {
                $this->myExcelWriter->writeCellXY($colonne, $this->ligne,
                    $previ->getTypeHrs()->getLibelle() . ' ' . $previ->getLibelle());
            } else {
                $this->myExcelWriter->writeCellXY($colonne, $this->ligne,
                    'ERR');
            }
            ++$colonne;

            if (null !== $previ->getPersonnel()) {
                //CODE HARPEGE*
                $this->myExcelWriter->writeCellXY($colonne, $this->ligne,
                    $previ->getPersonnel()->getNumeroHarpege());
                ++$colonne;
                //NOM PRENOM
                $this->myExcelWriter->writeCellXY($colonne, $this->ligne,
                    mb_strtoupper(Tools::supprimeAccent($previ->getPersonnel()->getNom())) . ' ' . mb_strtoupper(Tools::supprimeAccent($previ->getPersonnel()->getPrenom())));
            } else {
                $this->myExcelWriter->writeCellXY($colonne, $this->ligne, 'ERR-XXX');
                ++$colonne;
                $this->myExcelWriter->writeCellXY($colonne, $this->ligne,
                    'ERR-XXX');
            }
            ++$colonne;
            //H CM PREVU*
            $this->myExcelWriter->writeCellXY($colonne, $this->ligne, 0);
            ++$colonne;
            //GP CM PREVU*
            $this->myExcelWriter->writeCellXY($colonne, $this->ligne, 1);
            ++$colonne;
            // H TD PREVU*
            $this->myExcelWriter->writeCellXY($colonne, $this->ligne, $previ->getNbHeuresTd());
            ++$colonne;
            //GP TD PREVU*
            $this->myExcelWriter->writeCellXY($colonne, $this->ligne, 1);
            ++$colonne;
            //H TP PREVU*
            $this->myExcelWriter->writeCellXY($colonne, $this->ligne, 0);
            ++$colonne;
            //GP TP PREVU*
            $this->myExcelWriter->writeCellXY($colonne, $this->ligne, 1);
            ++$this->ligne;
        }
    }

    public function export(?Departement $getDepartement, $annee, Matiere $matiere, $_format): void
    {
        //todo: a faire.
    }
}
