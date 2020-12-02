<?php
// Copyright (c) 2020. | David Annebicque | IUT de Troyes  - All Rights Reserved
// @file /Users/davidannebicque/htdocs/intranetV3/src/Classes/SousCommission/SousCommissionExport.php
// @author davidannebicque
// @project intranetV3
// @lastUpdate 02/12/2020 11:57

namespace App\Classes\SousCommission;


use App\Classes\Excel\MyExcelWriter;
use App\Entity\AnneeUniversitaire;
use App\Entity\Constantes;
use App\Entity\Semestre;
use App\Entity\Ue;
use PhpOffice\PhpSpreadsheet\Exception;
use PhpOffice\PhpSpreadsheet\Writer\Xlsx;
use Symfony\Component\HttpFoundation\StreamedResponse;

class SousCommissionExport
{
    private SousCommission $sousCommission;
    private MyExcelWriter $myExcelWriter;

    /**
     * SousCommissionExport constructor.
     *
     * @param SousCommission $sousCommission
     * @param MyExcelWriter  $myExcelWriter
     */
    public function __construct(SousCommission $sousCommission, MyExcelWriter $myExcelWriter)
    {
        $this->sousCommission = $sousCommission;
        $this->myExcelWriter = $myExcelWriter;
    }


    /**
     * @param Semestre           $semestre
     * @param AnneeUniversitaire $anneeUniversitaire
     *
     * @return StreamedResponse
     * @throws Exception
     */
    public function export(Semestre $semestre, AnneeUniversitaire $anneeUniversitaire): StreamedResponse
    {
        $this->sousCommission->calcul($semestre, $anneeUniversitaire);

        $this->myExcelWriter->createSheet('Sous Commission ' . $semestre->getLibelle());
        $this->myExcelWriter->setHeader();

        $tCouleur = [
            'badge label-cool'     => 'ffa9a9a9',
            'badge badge-danger'   => 'ffff0000',
            'badge badge-warning'  => 'ffffcc00',
            'notenormale'          => 'ffffffff',
            'pasdenote'            => 'ffbbbbbb',
            Constantes::PAS_OPTION => 'ff000000',
            ''                     => 'ffffff'
        ];


        $ues = $this->sousCommission->getUes();
        $matieres = $this->sousCommission->getMatieres();
        $nbUes = count($ues);

        $this->myExcelWriter->writeCellName('B8', 'Etudiant');
        $this->myExcelWriter->writeCellName('C8', 'N° Etu.');
        $this->myExcelWriter->writeCellName('D8', 'Bac');
        $this->myExcelWriter->writeCellName('E8', 'Obt.');
        $this->myExcelWriter->writeCellName('F8', 'Sexe');
        $this->myExcelWriter->writeCellName('G8', 'D. de N.');
        $this->myExcelWriter->writeCellName('H8', 'Nb de S.');

        $ligne = 7;
        $colonne = 9;

        foreach ($this->sousCommission->getMatieres() as $matiere) {
            if (!$matiere->isSuspendu() && $matiere->getNbnotes() > 0) {
                $this->myExcelWriter->writeCellXY($colonne, $ligne, $matiere->getCodeMatiere());
                $this->myExcelWriter->writeCellXY($colonne, $ligne + 1, $matiere->getCoefficient());
                $colonne++;
            }
        }

        $this->myExcelWriter->mergeCellsCaR($colonne, $ligne - 1, $colonne + $nbUes + 3, $ligne - 1);
        $this->myExcelWriter->writeCellXY($colonne, $ligne - 1, $semestre->getLibelle(), 'HORIZONTAL_CENTER');

        foreach ($ues as $ue) {
            $this->myExcelWriter->writeCellXY($colonne, $ligne, 'UE ' . $ue->getNumeroUe());
            $colonne++;
        }

        $this->myExcelWriter->writeCellXY($colonne, $ligne, 'Moy.');
        $colonne++;
        $this->myExcelWriter->writeCellXY($colonne, $ligne, 'Bonif.');
        $colonne++;
        $this->myExcelWriter->writeCellXY($colonne, $ligne, 'Prop.');
        $colonne++;

        $this->myExcelWriter->writeCellXY($colonne, $ligne, 'Décision');
        $colonne++;

        $this->myExcelWriter->writeCellXY($colonne, $ligne, 'Abs.');
        $colonne++;
        /* semestres précédent */

        foreach ($this->sousCommission->getSemestresScolarite() as $s) {
            /** @var Ue $ue */
            foreach ($s->getUes() as $ue) {
                $this->myExcelWriter->writeCellXY($colonne, $ligne, 'UE ' . $ue->getNumeroUe());
                $colonne++;
            }
            $this->myExcelWriter->writeCellXY($colonne, $ligne, 'Moy. ');
            $colonne++;
            $this->myExcelWriter->writeCellXY($colonne, $ligne, 'Décis. ');
            $colonne++;
        }

        $maxcolonne = $colonne;
        $colonne = 2;

        $ligne++;
        $ligne++;


        foreach ($this->sousCommission->getEtudiants() as $etudiant) {
            $sousCommissionEtudiant = $this->sousCommission->getSousCommissionEtudiant($etudiant->getId());
            $this->myExcelWriter->writeCellXY($colonne, $ligne, $etudiant->getDisplay());
            $this->myExcelWriter->getColumnAutoSize($colonne);
            $colonne++;

            $this->myExcelWriter->writeCellXY($colonne, $ligne, $etudiant->getNumetudiant());
            $this->myExcelWriter->getColumnAutoSize($colonne);
            $colonne++;

            $this->myExcelWriter->writeCellXY($colonne, $ligne,
                $etudiant->getBac() !== null ? $etudiant->getBac()->getLibelle() : 'N.C.');
            $this->myExcelWriter->getColumnAutoSize($colonne);
            $colonne++;

            $this->myExcelWriter->writeCellXY($colonne, $ligne, $etudiant->getAnneebac());
            $this->myExcelWriter->getColumnAutoSize($colonne);
            $colonne++;

            $this->myExcelWriter->writeCellXY($colonne, $ligne, $etudiant->getCivilite());
            $this->myExcelWriter->getColumnAutoSize($colonne);
            $colonne++;

            $this->myExcelWriter->writeCellXY($colonne, $ligne, $etudiant->getDatenaissance()->format('d/m/Y'));
            $this->myExcelWriter->getColumnAutoSize($colonne);
            $colonne++;

            $this->myExcelWriter->writeCellXY($colonne, $ligne,
                $sousCommissionEtudiant->getNbSemestres());
            $colonne++;

            foreach ($matieres as $matiere) {

                if ($matiere->getNbnotes() > 0 && $matiere->isSuspendu() === false) {
                    if (array_key_exists($matiere->getId(), $sousCommissionEtudiant->moyenneMatieres)) {
                        $moyenneMatiere = $sousCommissionEtudiant->moyenneMatieres[$matiere->getId()];
                        if ($matiere->isPac() === true) {
                            if ($moyenneMatiere->getMoyenne() !== '-0.01'
                                && $moyenneMatiere->getMoyenne() > 0
                            ) {
                                if ($semestre->isOptPenaliteAbsence() === true) {
                                    $this->myExcelWriter->writeCellXY($colonne, $ligne,
                                        $moyenneMatiere->getMoyennePenalisee(),
                                        'numerique');
                                    $this->myExcelWriter->colorCellRange($colonne, $ligne,
                                        $tCouleur[$moyenneMatiere->getStylePenalisee()]);
                                } else {
                                    $this->myExcelWriter->writeCellXY($colonne, $ligne,
                                        $moyenneMatiere->getMoyenne(),
                                        'numerique');
                                    $this->myExcelWriter->colorCellRange($colonne, $ligne,
                                        $tCouleur[$moyenneMatiere->getStyle()]);
                                }

                            } else {
                                $this->myExcelWriter->writeCellXY($colonne, $ligne, 'No PAC');
                                $this->myExcelWriter->colorCellRange($colonne, $ligne, $tCouleur['pasoption']);
                            }

                        } elseif ($moyenneMatiere->optionFaite === false) {
                            $this->myExcelWriter->writeCellXY($colonne, $ligne, 'N.C.');
                            $this->myExcelWriter->colorCellRange($colonne, $ligne, $tCouleur['pasoption']);

                        } elseif ($semestre->isOptPenaliteAbsence() === true) {
                            $this->myExcelWriter->writeCellXY($colonne, $ligne,
                                $moyenneMatiere->getMoyennePenalisee(),
                                'numerique');
                            $this->myExcelWriter->colorCellRange($colonne, $ligne,
                                $tCouleur[$moyenneMatiere->getStylePenalisee()]);
                        } else {
                            $this->myExcelWriter->writeCellXY($colonne, $ligne,
                                $moyenneMatiere->getMoyenne(),
                                'numerique');
                        }
                        $this->myExcelWriter->colorCellRange($colonne, $ligne,
                            $tCouleur[$moyenneMatiere->getStyle()]);
                    }
                    $colonne++;
                } else {
                    //note pas présente
                }

            }


            foreach ($ues as $ue) {
                if ($semestre->isOptPenaliteAbsence() === true) {
                    $this->myExcelWriter->writeCellXY($colonne, $ligne,
                        $sousCommissionEtudiant->moyenneUes[$ue->getId()]->getMoyennePenalisee(),
                        'numerique3');
                    $this->myExcelWriter->colorCellRange($colonne, $ligne,
                        $tCouleur[$sousCommissionEtudiant->moyenneUes[$ue->getId()]->getStyleMoyennePenalisee()]);

                } else {
                    $this->myExcelWriter->writeCellXY($colonne, $ligne,
                        $sousCommissionEtudiant->moyenneUes[$ue->getId()]->getMoyenne(), 'numerique3');

                    $this->myExcelWriter->colorCellRange($colonne, $ligne,
                        $tCouleur[$sousCommissionEtudiant->moyenneUes[$ue->getId()]->getStyleMoyenne()]);
                }
                $colonne++;
            }

            if ($semestre->isOptPenaliteAbsence() === true) {
                $this->myExcelWriter->writeCellXY($colonne, $ligne,
                    $sousCommissionEtudiant->moyenneSemestrePenalisee, 'numerique3');
                $this->myExcelWriter->colorCellRange($colonne, $ligne,
                    $tCouleur[$sousCommissionEtudiant->getStyleMoyenneSemestrePenalisee()]);
            } else {
                $this->myExcelWriter->writeCellXY($colonne, $ligne,
                    $sousCommissionEtudiant->moyenneSemestre, 'numerique3');
                $this->myExcelWriter->colorCellRange($colonne, $ligne,
                    $tCouleur[$sousCommissionEtudiant->getStyleMoyenneSemestre()]);
            }
            $colonne++;

            $this->myExcelWriter->writeCellXY($colonne, $ligne, $sousCommissionEtudiant->bonif, 'numerique');
            $colonne++;

            $this->myExcelWriter->writeCellXY($colonne, $ligne, $sousCommissionEtudiant->proposition);
            $colonne++;


            $this->myExcelWriter->writeCellXY($colonne, $ligne, $sousCommissionEtudiant->decision);
            $this->myExcelWriter->colorCellRange($colonne, $ligne,
                Constantes::SS_COMM_DECISION_COULEUR[$sousCommissionEtudiant->decision]);
            $colonne++;

            $this->myExcelWriter->writeCellXY($colonne, $ligne,
                $sousCommissionEtudiant->nbAbsences());
            $colonne++;

            /* semestres précédent */
            foreach ($this->sousCommission->getSemestresScolarite() as $s) {
                foreach ($s->getUes() as $ue) {
                    if (isset($sousCommissionEtudiant->getScolarite()[$s->getOrdreLmd()])) {
                        $this->myExcelWriter->writeCellXY($colonne, $ligne,
                            $sousCommissionEtudiant->getScolarite()[$s->getOrdreLmd()]->getParcoursUe()[$ue->getId()]['moyenne'],
                            'numerique3');
                    } else {
                        $this->myExcelWriter->writeCellXY($colonne, $ligne, ' - ');
                    }


                    $colonne++;
                }
                if (isset($sousCommissionEtudiant->getScolarite()[$s->getOrdreLmd()])) {
                    $this->myExcelWriter->writeCellXY($colonne, $ligne,
                        $sousCommissionEtudiant->getScolarite()[$s->getOrdreLmd()]->getMoyenne(),
                        'numerique3');
                    $colonne++;
                    $this->myExcelWriter->writeCellXY($colonne, $ligne,
                        $sousCommissionEtudiant->getScolarite()[$s->getOrdreLmd()]->getDecision());
                    $colonne++;
                } else {
                    $this->myExcelWriter->writeCellXY($colonne, $ligne, ' - ');
                    $colonne++;
                    $this->myExcelWriter->writeCellXY($colonne, $ligne, ' - ');
                    $colonne++;
                }
            }
            $this->myExcelWriter->getColumnDimension('H', 6);

            $colonne = 2;
            $ligne++;
        }

        $this->myExcelWriter->borderCellsRange(1, 6, $maxcolonne, $ligne);


        $writer = new Xlsx($this->myExcelWriter->getSpreadsheet());

        return new StreamedResponse(
            static function() use ($writer) {
                $writer->save('php://output');
            },
            200,
            [
                'Content-Type'        => 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
                'Content-Disposition' => 'attachment;filename="Sous Commission ' . $semestre->getLibelle() . '.xlsx"'
            ]
        );
    }
}
