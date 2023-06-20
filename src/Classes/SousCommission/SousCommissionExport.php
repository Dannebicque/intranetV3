<?php
/*
 * Copyright (c) 2023. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Classes/SousCommission/SousCommissionExport.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 20/06/2023 20:51
 */

namespace App\Classes\SousCommission;

use App\Classes\Apogee\ApogeeSousCommission;
use App\Classes\Excel\MyExcelRead;
use App\Classes\Excel\MyExcelWriter;
use App\Classes\Matieres\TypeMatiereManager;
use App\Classes\MyUpload;
use App\DTO\SousCommissionTravail;
use App\Entity\AnneeUniversitaire;
use App\Entity\Constantes;
use App\Entity\ScolaritePromo;
use App\Entity\Semestre;
use App\Entity\Ue;
use App\Exception\SemestreNotFoundException;
use Carbon\Carbon;
use PhpOffice\PhpSpreadsheet\Exception;
use PhpOffice\PhpSpreadsheet\Writer\Xlsx;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\StreamedResponse;
use Symfony\Component\HttpKernel\KernelInterface;
use function array_key_exists;
use function count;

class SousCommissionExport
{
    private const COULEURS = [
        'badge label-cool' => 'ffa9a9a9',
        'badge bg-danger' => 'ffff0000',
        'badge bg-success' => 'ff00ff00',
        'badge bg-warning' => 'ffffcc00',
        'notenormale' => 'ffffffff',
        'matiereAAnnuler' => 'ff926dde',
        'pasdenote' => 'ffbbbbbb',
        Constantes::PAS_OPTION => 'ff000000',
        '' => 'ffffff',
    ];

    private ?SousCommissionInterface $sousCommission = null;
    private readonly string $dir;

    /**
     * SousCommissionExport constructor.
     */
    public function __construct(
        private readonly SousCommissionManager $sousCommissionManager,
        KernelInterface                        $kernel,
        private readonly ApogeeSousCommission  $apogeeSousCommission,
        private readonly MyExcelWriter         $myExcelWriter,
        private readonly MyExcelRead           $myExcelRead,
        private readonly TypeMatiereManager    $typeMatiereManager,
        private readonly MyUpload              $myUpload
    )
    {
        $this->dir = $kernel->getProjectDir() . '/public/upload/temp/';
    }

    /**
     * @throws Exception
     */
    public function export(Semestre $semestre, AnneeUniversitaire $anneeUniversitaire): StreamedResponse
    {
        $this->sousCommission = $this->sousCommissionManager->getSousCommission($semestre);
        $this->sousCommission->calcul($semestre, $anneeUniversitaire);

        $this->myExcelWriter->createSheet('Sous Commission ' . $semestre->getLibelle());
        $this->myExcelWriter->setHeader();

        $ues = $this->sousCommission->getUes();
        $matieres = $this->sousCommission->getMatieres();
        $nbUes = count($ues);

        $this->myExcelWriter->writeCellName('B1', 'Sous commission ');
        $this->myExcelWriter->writeCellName('C1', $semestre->display());
        $this->myExcelWriter->writeCellName('B2', 'Année universitaire');
        $this->myExcelWriter->writeCellName('C2', $anneeUniversitaire->displayAnneeUniversitaire());
        $now = Carbon::now();
        $this->myExcelWriter->writeCellName('B3', 'Version du ');
        $this->myExcelWriter->writeCellName('C3', $now->format('d/m/Y H:i:s'));

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
            if (!$matiere->isSuspendu() && $matiere->nbNotes > 0) {
                $this->myExcelWriter->writeCellXY($colonne, $ligne, $matiere->codeMatiere);
                $this->myExcelWriter->writeCellXY($colonne, $ligne + 1, $matiere->coefficient);
                ++$colonne;
            }
        }

        $this->myExcelWriter->mergeCellsCaR($colonne, $ligne - 1, $colonne + $nbUes + 4, $ligne - 1);
        $this->myExcelWriter->writeCellXY($colonne, $ligne - 1, $semestre->getLibelle(),
            ['style' => 'HORIZONTAL_CENTER']);

        foreach ($ues as $ue) {
            $this->myExcelWriter->writeCellXY($colonne, $ligne,
                'UE ' . $ue->getNumeroUe());
            $this->myExcelWriter->writeCellXY($colonne, $ligne + 1,
                $ue->getCoefficient());
            ++$colonne;
        }

        $this->myExcelWriter->writeCellXY($colonne, $ligne, 'Moy.');
        ++$colonne;
        $this->myExcelWriter->writeCellXY($colonne, $ligne, 'Bonif.');
        ++$colonne;
        $this->myExcelWriter->writeCellXY($colonne, $ligne, 'Prop.');
        ++$colonne;

        $this->myExcelWriter->writeCellXY($colonne, $ligne, 'Décision');
        ++$colonne;

        $this->myExcelWriter->writeCellXY($colonne, $ligne, 'Abs.');
        ++$colonne;
        /* semestres précédent */

        foreach ($this->sousCommission->getSemestresScolarite() as $s) {
            // titre semestre
            $this->myExcelWriter->writeCellXY($colonne, $ligne - 1, $s->getLibelle(), ['style' => 'HORIZONTAL_CENTER']);
            $colFin = $colonne + (is_countable($s->getUes()) ? count($s->getUes()) : 0) + 1;
            $this->myExcelWriter->mergeCellsCaR($colonne, $ligne - 1, $colFin, $ligne - 1);
            /** @var Ue $ue */
            foreach ($s->getUes() as $ue) {
                $this->myExcelWriter->writeCellXY($colonne, $ligne, 'UE ' . $ue->getNumeroUe());
                $this->myExcelWriter->writeCellXY($colonne, $ligne + 1, $ue->getCoefficient());
                ++$colonne;
            }
            $this->myExcelWriter->writeCellXY($colonne, $ligne, 'Moy. ');
            ++$colonne;
            $this->myExcelWriter->writeCellXY($colonne, $ligne, 'Décis. ');
            ++$colonne;
        }

        $maxcolonne = $colonne;
        $colonne = 2;

        ++$ligne;
        ++$ligne;

        foreach ($this->sousCommission->getEtudiants() as $etudiant) {
            $sousCommissionEtudiant = $this->sousCommission->getSousCommissionEtudiant($etudiant->getId());
            $this->myExcelWriter->writeCellXY($colonne, $ligne, $etudiant->getDisplay());
            $this->myExcelWriter->getColumnAutoSize($colonne);
            ++$colonne;

            $this->myExcelWriter->writeCellXY($colonne, $ligne, $etudiant->getNumetudiant());
            $this->myExcelWriter->getColumnAutoSize($colonne);
            ++$colonne;

            $this->myExcelWriter->writeCellXY($colonne, $ligne,
                null !== $etudiant->getBac() ? $etudiant->getBac()->getLibelle() : 'N.C.');
            $this->myExcelWriter->getColumnAutoSize($colonne);
            ++$colonne;

            $this->myExcelWriter->writeCellXY($colonne, $ligne, $etudiant->getAnneebac());
            $this->myExcelWriter->getColumnAutoSize($colonne);
            ++$colonne;

            $this->myExcelWriter->writeCellXY($colonne, $ligne, $etudiant->getCivilite());
            $this->myExcelWriter->getColumnAutoSize($colonne);
            ++$colonne;

            $this->myExcelWriter->writeCellXY($colonne, $ligne, $etudiant->getDatenaissance()->format('d/m/Y'));
            $this->myExcelWriter->getColumnAutoSize($colonne);
            ++$colonne;

            $this->myExcelWriter->writeCellXY($colonne, $ligne,
                $sousCommissionEtudiant->getNbSemestres());
            ++$colonne;

            foreach ($matieres as $matiere) {
                if ($matiere->nbNotes > 0 && false === $matiere->isSuspendu()) {
                    if (array_key_exists($matiere->getTypeIdMatiere(), $sousCommissionEtudiant->moyenneMatieres)) {
                        $moyenneMatiere = $sousCommissionEtudiant->moyenneMatieres[$matiere->getTypeIdMatiere()];
                        if (true === $matiere->bonification) {
                            if ($moyenneMatiere->getMoyenne() > 0) {
                                if (true === $semestre->isOptPenaliteAbsence()) {
                                    $this->myExcelWriter->writeCellXY($colonne, $ligne,
                                        $moyenneMatiere->getMoyennePenalisee(),
                                        ['style' => 'numerique']);
                                    $this->myExcelWriter->colorCellRange($colonne, $ligne,
                                        self::COULEURS[$moyenneMatiere->getStylePenalisee()]);
                                } else {
                                    $this->myExcelWriter->writeCellXY($colonne, $ligne,
                                        $moyenneMatiere->getMoyenne(),
                                        ['style' => 'numerique']);
                                    $this->myExcelWriter->colorCellRange($colonne, $ligne,
                                        self::COULEURS[$moyenneMatiere->getStyle()]);
                                }
                            } else {
                                $this->myExcelWriter->writeCellXY($colonne, $ligne, 'No PAC');
                                $this->myExcelWriter->colorCellRange($colonne, $ligne, self::COULEURS['pasoption']);
                            }
                        } elseif (false === $moyenneMatiere->optionFaite) {
                            $this->myExcelWriter->writeCellXY($colonne, $ligne, 'N.C.');
                            $this->myExcelWriter->colorCellRange($colonne, $ligne, self::COULEURS['pasoption']);
                        } elseif (true === $semestre->isOptPenaliteAbsence()) {
                            $this->myExcelWriter->writeCellXY($colonne, $ligne,
                                $moyenneMatiere->getMoyennePenalisee(),
                                ['style' => 'numerique']);
                            $this->myExcelWriter->colorCellRange($colonne, $ligne,
                                self::COULEURS[$moyenneMatiere->getStylePenalisee()]);
                        } else {
                            $this->myExcelWriter->writeCellXY($colonne, $ligne,
                                $moyenneMatiere->getMoyenne(),
                                ['style' => 'numerique']);
                        }
                        $this->myExcelWriter->colorCellRange($colonne, $ligne,
                            self::COULEURS[$moyenneMatiere->getStyle()]);
                    }
                    ++$colonne;
                }
                // note pas présente
            }

            foreach ($ues as $ue) {
                if (true === $semestre->isOptPenaliteAbsence()) {
                    $this->myExcelWriter->writeCellXY($colonne, $ligne,
                        $sousCommissionEtudiant->moyenneUes[$ue->getNumeroUe()]->getMoyennePenalisee(),
                        ['style' => 'numerique3']);
                    $this->myExcelWriter->colorCellRange($colonne, $ligne,
                        self::COULEURS[$sousCommissionEtudiant->moyenneUes[$ue->getNumeroUe()]->getStyleMoyennePenalisee()]);
                } else {
                    $this->myExcelWriter->writeCellXY($colonne, $ligne,
                        $sousCommissionEtudiant->moyenneUes[$ue->getNumeroUe()]->getMoyenne(),
                        ['style' => 'numerique3']);

                    $this->myExcelWriter->colorCellRange($colonne, $ligne,
                        self::COULEURS[$sousCommissionEtudiant->moyenneUes[$ue->getNumeroUe()]->getStyleMoyenne()]);
                }
                ++$colonne;
            }

            if (true === $semestre->isOptPenaliteAbsence()) {
                $this->myExcelWriter->writeCellXY($colonne, $ligne,
                    $sousCommissionEtudiant->moyenneSemestrePenalisee, ['style' => 'numerique3']);
                $this->myExcelWriter->colorCellRange($colonne, $ligne,
                    self::COULEURS[$sousCommissionEtudiant->getStyleMoyenneSemestrePenalisee()]);
            } else {
                $this->myExcelWriter->writeCellXY($colonne, $ligne,
                    $sousCommissionEtudiant->moyenneSemestre, ['style' => 'numerique3']);
                $this->myExcelWriter->colorCellRange($colonne, $ligne,
                    self::COULEURS[$sousCommissionEtudiant->getStyleMoyenneSemestre()]);
            }
            ++$colonne;

            $this->myExcelWriter->writeCellXY($colonne, $ligne, $sousCommissionEtudiant->bonif,
                ['style' => 'numerique']);
            ++$colonne;

            $this->myExcelWriter->writeCellXY($colonne, $ligne, $sousCommissionEtudiant->proposition);
            ++$colonne;

            $this->myExcelWriter->writeCellXY($colonne, $ligne, $sousCommissionEtudiant->decision);
            $this->myExcelWriter->colorCellRange($colonne, $ligne,
                Constantes::SS_COMM_DECISION_COULEUR[$sousCommissionEtudiant->decision]);
            ++$colonne;

            $this->myExcelWriter->writeCellXY($colonne, $ligne,
                $sousCommissionEtudiant->nbAbsences());
            ++$colonne;

            /* semestres précédent */
            foreach ($this->sousCommission->getSemestresScolarite() as $s) {
                foreach ($s->getUes() as $ue) {
                    if (isset($sousCommissionEtudiant->getScolarite()[$s->getOrdreLmd()]) &&
                        array_key_exists($ue->getNumeroUe(),
                            $sousCommissionEtudiant->getScolarite()[$s->getOrdreLmd()]->parcoursUe)
                    ) {
                        $this->myExcelWriter->writeCellXY($colonne, $ligne,
                            $sousCommissionEtudiant->getScolarite()[$s->getOrdreLmd()]->parcoursUe[$ue->getNumeroUe()]['moyenne'],
                            ['style' => 'numerique3']);
                        $this->myExcelWriter->colorCellRange($colonne, $ligne,
                            self::COULEURS[$sousCommissionEtudiant->getScolarite()[$s->getOrdreLmd()]->parcoursUe[$ue->getNumeroUe()]['style']]);
                    } else {
                        $this->myExcelWriter->writeCellXY($colonne, $ligne, ' - ');
                    }

                    ++$colonne;
                }
                if (isset($sousCommissionEtudiant->getScolarite()[$s->getOrdreLmd()])) {
                    $this->myExcelWriter->writeCellXY($colonne, $ligne,
                        $sousCommissionEtudiant->getScolarite()[$s->getOrdreLmd()]->moyenne,
                        ['style' => 'numerique3']);
                    ++$colonne;
                    $this->myExcelWriter->writeCellXY($colonne, $ligne,
                        $sousCommissionEtudiant->getScolarite()[$s->getOrdreLmd()]->decision);
                    $this->myExcelWriter->colorCellRange($colonne, $ligne,
                        Constantes::SS_COMM_DECISION_COULEUR[$sousCommissionEtudiant->getScolarite()[$s->getOrdreLmd()]->decision]);
                } else {
                    $this->myExcelWriter->writeCellXY($colonne, $ligne, ' - ');
                    ++$colonne;
                    $this->myExcelWriter->writeCellXY($colonne, $ligne, ' - ');
                }
                ++$colonne;
            }
            $this->myExcelWriter->getColumnDimension('H', 6);

            $colonne = 2;
            ++$ligne;
        }

        $this->myExcelWriter->borderCellsRange(1, 6, $maxcolonne, $ligne);

        $writer = new Xlsx($this->myExcelWriter->getSpreadsheet());

        return new StreamedResponse(
            static function () use ($writer) {
                $writer->save('php://output');
            },
            Response::HTTP_OK,
            [
                'Content-Type' => 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
                'Content-Disposition' => 'attachment;filename="Sous Commission ' . $semestre->getLibelle() . '.xlsx"',
            ]
        );
    }

    public function exportApc(Semestre $semestre, AnneeUniversitaire $anneeUniversitaire): StreamedResponse
    {
        $this->sousCommission = $this->sousCommissionManager->getSousCommission($semestre);
        $this->sousCommission->calcul($semestre, $anneeUniversitaire);
        $semPrec = $this->sousCommission->semestrePrecedent;
        $this->myExcelWriter->createSheet('Sous Commission ' . $semestre->getLibelle());
        $this->myExcelWriter->setHeader();

        $ues = $this->sousCommission->getUes();
        $matieres = $this->sousCommission->getMatieres();
        $nbUes = count($ues);

        $this->myExcelWriter->writeCellName('B1', 'Sous commission B.U.T.');
        $this->myExcelWriter->writeCellName('C1', $semestre->display());
        $this->myExcelWriter->writeCellName('B2', 'Année universitaire');
        $this->myExcelWriter->writeCellName('C2', $anneeUniversitaire->displayAnneeUniversitaire());
        $now = Carbon::now();
        $this->myExcelWriter->writeCellName('B3', 'Version du ');
        $this->myExcelWriter->writeCellName('C3', $now->format('d/m/Y H:i:s'));

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
            if (!$matiere->isSuspendu() && $matiere->nbNotes > 0) {
                $this->myExcelWriter->writeCellXY($colonne, $ligne, $matiere->codeMatiere);
//                $this->myExcelWriter->writeCellXY($colonne, $ligne + 1, $matiere->coefficient);
                ++$colonne;
            }
        }

        $this->myExcelWriter->mergeCellsCaR($colonne, $ligne - 1, $colonne + ($nbUes * 2) + 3, $ligne - 1);
        $this->myExcelWriter->writeCellXY($colonne, $ligne - 1, $semestre->getLibelle(),
            ['style' => 'HORIZONTAL_CENTER']);

        foreach ($ues as $ue) {
            $this->myExcelWriter->writeCellXY($colonne, $ligne,
                'UE ' . $ue->getNumeroUe());
            $this->myExcelWriter->mergeCellsCaR($colonne, $ligne, $colonne + 1, $ligne);
            $this->myExcelWriter->writeCellXY($colonne, $ligne + 1,
                'Moy.');
            $this->myExcelWriter->writeCellXY($colonne + 1, $ligne + 1,
                'Dec.');
            ++$colonne;
            ++$colonne;
        }

        $this->myExcelWriter->writeCellXY($colonne, $ligne, 'Bonif.');
        ++$colonne;
        $this->myExcelWriter->writeCellXY($colonne, $ligne, 'Prop.');
        ++$colonne;

        $this->myExcelWriter->writeCellXY($colonne, $ligne, 'Décision');
        ++$colonne;

        $this->myExcelWriter->writeCellXY($colonne, $ligne, 'Abs.');
        ++$colonne;
        /* semestres précédent */
        if ($semestre->isPair()) {
            foreach ($this->sousCommission->getUes() as $ue) {
                // titre semestre
                $this->myExcelWriter->writeCellXY($colonne, $ligne - 1, 'UE ' . $ue->getNumeroUe(),
                    ['style' => 'HORIZONTAL_CENTER']);
                $colFin = $colonne + 5;
                $this->myExcelWriter->mergeCellsCaR($colonne, $ligne - 1, $colFin, $ligne - 1);
                $this->myExcelWriter->writeCellXY($colonne, $ligne, 'S1', ['style' => 'HORIZONTAL_CENTER']);
                $this->myExcelWriter->writeCellXY($colonne, $ligne + 1, 'Moy.', ['style' => 'HORIZONTAL_CENTER']);
                $this->myExcelWriter->writeCellXY($colonne + 1, $ligne + 1, 'Déc.', ['style' => 'HORIZONTAL_CENTER']);
                $this->myExcelWriter->mergeCellsCaR($colonne, $ligne, $colonne + 1, $ligne);
                $colonne += 2;
                $this->myExcelWriter->writeCellXY($colonne, $ligne, 'S2', ['style' => 'HORIZONTAL_CENTER']);
                $this->myExcelWriter->writeCellXY($colonne, $ligne + 1, 'Moy.', ['style' => 'HORIZONTAL_CENTER']);
                $this->myExcelWriter->writeCellXY($colonne + 1, $ligne + 1, 'Déc.', ['style' => 'HORIZONTAL_CENTER']);
                $this->myExcelWriter->mergeCellsCaR($colonne, $ligne, $colonne + 1, $ligne);
                $colonne += 2;
                $this->myExcelWriter->writeCellXY($colonne, $ligne, 'Année', ['style' => 'HORIZONTAL_CENTER']);
                $this->myExcelWriter->writeCellXY($colonne, $ligne + 1, 'Moy.', ['style' => 'HORIZONTAL_CENTER']);
                $this->myExcelWriter->writeCellXY($colonne + 1, $ligne + 1, 'Déc.', ['style' => 'HORIZONTAL_CENTER']);
                $this->myExcelWriter->mergeCellsCaR($colonne, $ligne, $colonne + 1, $ligne);
                $colonne = $colFin + 1;
            }

            $this->myExcelWriter->writeCellXY($colonne, $ligne - 1, 'B.U.T.', ['style' => 'HORIZONTAL_CENTER']);
            $this->myExcelWriter->writeCellXY($colonne, $ligne + 1, 'S1', ['style' => 'HORIZONTAL_CENTER']);
            $this->myExcelWriter->writeCellXY($colonne + 1, $ligne + 1, 'S2', ['style' => 'HORIZONTAL_CENTER']);
            $this->myExcelWriter->writeCellXY($colonne + 2, $ligne + 1, 'Année', ['style' => 'HORIZONTAL_CENTER']);
            $this->myExcelWriter->writeCellXY($colonne + 3, $ligne + 1, 'Prop.', ['style' => 'HORIZONTAL_CENTER']);
            $colFin = $colonne + 3;
            $this->myExcelWriter->mergeCellsCaR($colonne, $ligne - 1, $colFin, $ligne - 1);
        }

        $maxcolonne = $colonne + 3;
        $colonne = 2;

        ++$ligne;
        ++$ligne;

        foreach ($this->sousCommission->getEtudiants() as $etudiant) {
            $sousCommissionEtudiant = $this->sousCommission->getSousCommissionEtudiant($etudiant->getId());
            $this->myExcelWriter->writeCellXY($colonne, $ligne, $etudiant->getDisplay());
            $this->myExcelWriter->getColumnAutoSize($colonne);
            ++$colonne;

            $this->myExcelWriter->writeCellXY($colonne, $ligne, $etudiant->getNumetudiant());
            $this->myExcelWriter->getColumnAutoSize($colonne);
            ++$colonne;

            $this->myExcelWriter->writeCellXY($colonne, $ligne,
                null !== $etudiant->getBac() ? $etudiant->getBac()->getLibelle() : 'N.C.');
            $this->myExcelWriter->getColumnAutoSize($colonne);
            ++$colonne;

            $this->myExcelWriter->writeCellXY($colonne, $ligne, $etudiant->getAnneebac());
            $this->myExcelWriter->getColumnAutoSize($colonne);
            ++$colonne;

            $this->myExcelWriter->writeCellXY($colonne, $ligne, $etudiant->getCivilite());
            $this->myExcelWriter->getColumnAutoSize($colonne);
            ++$colonne;

            $this->myExcelWriter->writeCellXY($colonne, $ligne,
                null !== $etudiant->getDatenaissance() ? $etudiant->getDatenaissance()->format('d/m/Y') : 'err');
            $this->myExcelWriter->getColumnAutoSize($colonne);
            ++$colonne;

            $this->myExcelWriter->writeCellXY($colonne, $ligne,
                $sousCommissionEtudiant->getNbSemestres());
            ++$colonne;

            foreach ($matieres as $matiere) {
                if ($matiere->nbNotes > 0 && false === $matiere->isSuspendu()) {
                    if (array_key_exists($matiere->getTypeIdMatiere(), $sousCommissionEtudiant->moyenneMatieres)) {
                        $moyenneMatiere = $sousCommissionEtudiant->moyenneMatieres[$matiere->getTypeIdMatiere()];
                        if (true === $matiere->bonification) {
                            if ($moyenneMatiere->getMoyenne() > 0) {
                                if (true === $semestre->isOptPenaliteAbsence()) {
                                    $this->myExcelWriter->writeCellXY($colonne, $ligne,
                                        $moyenneMatiere->getMoyennePenalisee(),
                                        ['style' => 'numerique']);
                                    $this->myExcelWriter->colorCellRange($colonne, $ligne,
                                        self::COULEURS[$moyenneMatiere->getStylePenalisee()]);
                                } else {
                                    $this->myExcelWriter->writeCellXY($colonne, $ligne,
                                        $moyenneMatiere->getMoyenne(),
                                        ['style' => 'numerique']);
                                    $this->myExcelWriter->colorCellRange($colonne, $ligne,
                                        self::COULEURS[$moyenneMatiere->getStyle()]);
                                }
                            } else {
                                $this->myExcelWriter->writeCellXY($colonne, $ligne, 'No PAC');
                                $this->myExcelWriter->colorCellRange($colonne, $ligne, self::COULEURS['pasoption']);
                            }
                        } elseif (true === $moyenneMatiere->matiereAAnnuler) {
                            $this->myExcelWriter->writeCellXY($colonne, $ligne, 'Abs. Just');
                            $this->myExcelWriter->colorCellRange($colonne, $ligne, self::COULEURS['matiereAAnnuler']);
                        } elseif (false === $moyenneMatiere->optionFaite) {
                            $this->myExcelWriter->writeCellXY($colonne, $ligne, 'N.C.');
                            $this->myExcelWriter->colorCellRange($colonne, $ligne, self::COULEURS['pasoption']);
                        } elseif (true === $semestre->isOptPenaliteAbsence()) {
                            $this->myExcelWriter->writeCellXY($colonne, $ligne,
                                $moyenneMatiere->getMoyennePenalisee(),
                                ['style' => 'numerique']);
                            $this->myExcelWriter->colorCellRange($colonne, $ligne,
                                self::COULEURS[$moyenneMatiere->getStylePenalisee()]);
                        } else {
                            $this->myExcelWriter->writeCellXY($colonne, $ligne,
                                $moyenneMatiere->getMoyenne(),
                                ['style' => 'numerique']);
                            $this->myExcelWriter->colorCellRange($colonne, $ligne,
                                self::COULEURS[$moyenneMatiere->getStyle()]);
                        }
                    }
                    ++$colonne;
                }
                // note pas présente
            }

            foreach ($ues as $ue) {
                if (true === $semestre->isOptPenaliteAbsence()) {
                    $this->myExcelWriter->writeCellXY($colonne, $ligne,
                        $sousCommissionEtudiant->moyenneUes[$ue->getId()]->moyennePacPenalisee,
                        ['style' => 'numerique3']);
                    $this->myExcelWriter->colorCellRange($colonne, $ligne,
                        $this->getStyleMoyenneUe($sousCommissionEtudiant->moyenneUes[$ue->getId()]->moyennePacPenalisee));
                    ++$colonne;
                    $this->myExcelWriter->writeCellXY($colonne, $ligne,
                        $sousCommissionEtudiant->moyenneUes[$ue->getId()]->decisionPenalisee);
                    $this->myExcelWriter->colorCellRange($colonne, $ligne,
                        $this->getStyleDecisionUe($sousCommissionEtudiant->moyenneUes[$ue->getId()]->decisionPenalisee));
                } else {
                    $this->myExcelWriter->writeCellXY($colonne, $ligne,
                        $sousCommissionEtudiant->moyenneUes[$ue->getId()]->moyennePac,
                        ['style' => 'numerique3']);
                    $this->myExcelWriter->colorCellRange($colonne, $ligne,
                        $this->getStyleMoyenneUe($sousCommissionEtudiant->moyenneUes[$ue->getId()]->moyennePac));
                    ++$colonne;
                    $this->myExcelWriter->writeCellXY($colonne, $ligne,
                        $sousCommissionEtudiant->moyenneUes[$ue->getId()]->decision);
                    $this->myExcelWriter->colorCellRange($colonne, $ligne,
                        $this->getStyleDecisionUe($sousCommissionEtudiant->moyenneUes[$ue->getId()]->decision));
                }
                ++$colonne;
            }

            $this->myExcelWriter->writeCellXY($colonne, $ligne, $sousCommissionEtudiant->bonification,
                ['style' => 'numerique']);
            ++$colonne;

            $this->myExcelWriter->writeCellXY($colonne, $ligne, $sousCommissionEtudiant->proposition);
            ++$colonne;

            $this->myExcelWriter->writeCellXY($colonne, $ligne, $sousCommissionEtudiant->decision);
            $this->myExcelWriter->colorCellRange($colonne, $ligne,
                Constantes::SS_COMM_DECISION_COULEUR[$sousCommissionEtudiant->decision]);
            ++$colonne;

            $this->myExcelWriter->writeCellXY($colonne, $ligne,
                $sousCommissionEtudiant->nbAbsences());
            ++$colonne;

            if ($semestre->isPair()) {
                foreach ($this->sousCommission->getUes() as $ue) {
                    if (array_key_exists($semPrec->getOrdreLmd(),
                            $sousCommissionEtudiant->scolarite) && array_key_exists($ue->getNumeroUe(),
                            $sousCommissionEtudiant->scolarite[$semPrec->getOrdreLmd()]->moyenneUes)) {
                        // $this->myExcelWriter->writeCellXY($colonne, $ligne, 'S1', ['style' => 'HORIZONTAL_CENTER']);
                        $this->myExcelWriter->writeCellXY($colonne, $ligne,
                            $sousCommissionEtudiant->scolarite[$semPrec->getOrdreLmd()]->moyenneUes[$ue->getNumeroUe()]['moyenne'],
                            ['style' => 'numerique3']);
                        $this->myExcelWriter->writeCellXY($colonne + 1, $ligne,
                            $sousCommissionEtudiant->scolarite[$semPrec->getOrdreLmd()]->moyenneUes[$ue->getNumeroUe()]['decision'],
                            ['style' => 'HORIZONTAL_CENTER']);
                        $this->myExcelWriter->colorCellRange($colonne + 1, $ligne,
                            $this->getStyleDecisionUe($sousCommissionEtudiant->scolarite[$semPrec->getOrdreLmd()]->moyenneUes[$ue->getNumeroUe()]['decision']));
                        $colonne += 2;
                        //  $this->myExcelWriter->writeCellXY($colonne, $ligne, 'S2', ['style' => 'HORIZONTAL_CENTER']);
                        $this->myExcelWriter->writeCellXY($colonne, $ligne,
                            $sousCommissionEtudiant->moyenneUes[$ue->getId()]->moyennePacPenalisee,
                            ['style' => 'numerique3']);
                        $this->myExcelWriter->writeCellXY($colonne + 1, $ligne,
                            $sousCommissionEtudiant->moyenneUes[$ue->getId()]->decisionPenalisee,
                            ['style' => 'HORIZONTAL_CENTER']);
                        $this->myExcelWriter->colorCellRange($colonne + 1, $ligne,
                            $this->getStyleDecisionUe($sousCommissionEtudiant->moyenneUes[$ue->getId()]->decisionPenalisee));
                        $colonne += 2;
                        // $this->myExcelWriter->writeCellXY($colonne, $ligne, 'Année', ['style' => 'HORIZONTAL_CENTER']);
                        $this->myExcelWriter->writeCellXY($colonne, $ligne,
                            $sousCommissionEtudiant->moyenneAnneeUes[$ue->getNumeroUe()]->moyenneAnnee(),
                            ['style' => 'numerique3']);
                        $this->myExcelWriter->writeCellXY($colonne + 1, $ligne,
                            $sousCommissionEtudiant->moyenneAnneeUes[$ue->getNumeroUe()]->decisionAnnee(),
                            ['style' => 'HORIZONTAL_CENTER']);
                        $this->myExcelWriter->colorCellRange($colonne + 1, $ligne,
                            $this->getStyleDecisionUe($sousCommissionEtudiant->moyenneAnneeUes[$ue->getNumeroUe()]->decisionAnnee()));
                        $colonne += 2;
                    } else {
                        $colonne += 5;
                    }
                }

//            $this->myExcelWriter->writeCellXY($colonne, $ligne - 1, 'B.U.T.', ['style' => 'HORIZONTAL_CENTER']);
                if (array_key_exists($semPrec->getOrdreLmd(), $sousCommissionEtudiant->scolarite)) {
                    $this->myExcelWriter->writeCellXY($colonne, $ligne,
                        $sousCommissionEtudiant->scolarite[$semPrec->getOrdreLmd()]->decision,
                        ['style' => 'HORIZONTAL_CENTER']);
                    $this->myExcelWriter->colorCellRange($colonne, $ligne,
                        $this->getStyleDecisionUe($sousCommissionEtudiant->scolarite[$semPrec->getOrdreLmd()]->decision));
                } else {
                    $this->myExcelWriter->writeCellXY($colonne, $ligne,
                        'Sans Info.',
                        ['style' => 'HORIZONTAL_CENTER']);
                    $this->myExcelWriter->colorCellRange($colonne, $ligne, 'Sans Info.');
                }
                $this->myExcelWriter->writeCellXY($colonne + 1, $ligne, $sousCommissionEtudiant->decision,
                    ['style' => 'HORIZONTAL_CENTER']);
                $this->myExcelWriter->colorCellRange($colonne + 1, $ligne,
                    $this->getStyleDecisionUe($sousCommissionEtudiant->decision));
                $this->myExcelWriter->writeCellXY($colonne + 2, $ligne, $sousCommissionEtudiant->decisionAnnee,
                    ['style' => 'HORIZONTAL_CENTER']);
                $this->myExcelWriter->colorCellRange($colonne + 2, $ligne,
                    $this->getStyleDecisionUe($sousCommissionEtudiant->decisionAnnee));
                $this->myExcelWriter->writeCellXY($colonne + 3, $ligne, $sousCommissionEtudiant->propositionAnnee,
                    ['style' => 'HORIZONTAL_CENTER']);
            }
            $colonne = 2;
            ++$ligne;
        }
        $this->myExcelWriter->getColumnDimension('H', 6);

        $this->myExcelWriter->borderCellsRange(1, 6, $maxcolonne, $ligne);

        $writer = new Xlsx($this->myExcelWriter->getSpreadsheet());

        return new StreamedResponse(
            static function () use ($writer) {
                $writer->save('php://output');
            },
            Response::HTTP_OK,
            [
                'Content-Type' => 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
                'Content-Disposition' => 'attachment;filename="Sous Commission ' . $semestre->getLibelle() . '.xlsx"',
            ]
        );
    }

    /**
     * @throws \App\Exception\SemestreNotFoundException
     */
    public function exportGrandJuryApc(
        ScolaritePromo     $scolaritePromo,
        AnneeUniversitaire $anneeUniversitaire
    ): StreamedResponse
    {
        $semestre = $scolaritePromo->getSemestre();

        if (null === $semestre) {
            throw new SemestreNotFoundException();
        }
        $ues = $semestre->getUes();
        $etudiants = $semestre->getEtudiants();
        $matieres = $this->typeMatiereManager->findBySemestreAndReferentiel($semestre,
            $semestre->getDiplome()?->getReferentiel());

        $ssCommTravail = new SousCommissionTravail($semestre, $anneeUniversitaire,
            $ues->getValues(), $matieres, $etudiants->getValues(), $scolaritePromo);

        $this->myExcelWriter->createSheet('Grand Jury ' . $semestre->getLibelle());

        $ligne = 4;
        $nbUe = $ues->count();
        $this->myExcelWriter->mergeCellsCaR(7, 3, 7 + ($nbUe * 2), 3);
        $this->myExcelWriter->writeCellXY(7, 3, 'Semestre ' . $semestre->getOrdreLmd());
        $this->myExcelWriter->borderCellsRange(7, 3, 7 + ($nbUe * 2), 3);
        $this->myExcelWriter->ecritLigne([
            'N° APOGEE',
            'Nom Prénom',
            'D. de N.',
            'Sexe',
            'Bac',
            'Année Bac',
            'Nb Semestre',
        ], 1, 4);
        $colonne = 7;
        foreach ($ues as $ue) {
            $this->myExcelWriter->writeCellXY($colonne, $ligne, 'Moy. ' . $ue->getLibelle());
            ++$colonne;
            $this->myExcelWriter->writeCellXY($colonne, $ligne, 'Dec. ' . $ue->getLibelle());
            ++$colonne;
        }

        $this->myExcelWriter->writeCellXY($colonne, $ligne, 'Valid.');
        ++$colonne;
        $this->myExcelWriter->writeCellXY($colonne, $ligne, 'Décision');
        ++$colonne;

        foreach ($matieres as $m) {
            $this->myExcelWriter->writeCellXY($colonne, $ligne, $m->codeMatiere);
            ++$colonne;
        }

        ++$ligne;

        foreach ($etudiants as $etu) {
            if (0 === $etu->getAnneeSortie() && null !== $ssCommTravail->etudiant($etu->getId())) {
                $colonne = 1;
                $this->myExcelWriter->ecritLigne([
                    $etu->getNumEtudiant(),
                    ucfirst($etu->getNom()) . ' ' . ucfirst($etu->getPrenom()),
                    $etu->getDateNaissance()->format('d/m/Y'),
                    $etu->getCivilite(),
                    null !== $etu->getBac() ? $etu->getBac()->getLibelle() : 'err',
                    $etu->getAnneeBac(),
                ], $colonne, $ligne);
                $colonne = 7;

                $this->myExcelWriter->writeCellXY($colonne, $ligne,
                    count($ssCommTravail->recupereScolarite($etu)));

                foreach ($ues as $ue) {
                    $this->myExcelWriter->writeCellXY($colonne, $ligne,
                        number_format($ssCommTravail->ue($etu->getId(), $ue->getId())['moyenne'], 3),
                        ['style' => 'numerique3']);
                    ++$colonne;
                    $this->myExcelWriter->writeCellXY($colonne, $ligne,
                        $ssCommTravail->ue($etu->getId(), $ue->getId())['decision']);
                    ++$colonne;
                }
                $this->myExcelWriter->writeCellXY($colonne, $ligne,
                    $ssCommTravail->etudiant($etu->getId())->getDecision());
                ++$colonne;
                $this->myExcelWriter->writeCellXY($colonne, $ligne,
                    $ssCommTravail->etudiant($etu->getId())->getProposition());

                ++$colonne;

                foreach ($matieres as $m) {
                    if (null !== $ssCommTravail->matiere($etu->getId(), $m->getTypeIdMatiere())) {
                        if (array_key_exists('pasoption',
                            $ssCommTravail->matiere($etu->getId(), $m->getTypeIdMatiere()))) {
                            $this->myExcelWriter->writeCellXY($colonne, $ligne, 'N.C.');
                        } else {
                            $this->myExcelWriter->writeCellXY($colonne, $ligne,
                                number_format($ssCommTravail->matiere($etu->getId(),
                                    $m->getTypeIdMatiere())['moyenne'], 2),
                                ['style' => 'numerique']);
                        }
                    }
                    ++$colonne;
                }

                ++$ligne;
            }
        }

        for ($i = 0; $i < 100; ++$i) {
            $this->myExcelWriter->getColumnAutoSize($i);
        }

        $this->myExcelWriter->writeCellName('A1', 'DUT : ');
        $this->myExcelWriter->writeCellName('B1',
            $semestre->getAnnee()->getDiplome()->getDepartement()->getLibelle());

        $writer = new Xlsx($this->myExcelWriter->getSpreadsheet());

        return new StreamedResponse(
            static function () use ($writer) {
                $writer->save('php://output');
            },
            Response::HTTP_OK,
            [
                'Content-Type' => 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
                'Content-Disposition' => 'attachment;filename="Export Grand Jury ' . $semestre->getLibelle() . '.xlsx"',
            ]
        );
    }

    /**
     * @throws \PhpOffice\PhpSpreadsheet\Exception
     * @throws \PhpOffice\PhpSpreadsheet\Writer\Exception
     * @throws \PhpOffice\PhpSpreadsheet\Reader\Exception
     */
    public function exportApogee(
        Semestre           $semestre,
                           $file,
        AnneeUniversitaire $anneeUniversitaire
    ): StreamedResponse|string|null
    {
        $this->sousCommission = $this->sousCommissionManager->getSousCommission($semestre);

        $fichier = $this->myUpload->upload($file, 'temp');
        $this->myExcelRead->readFile($fichier);

        $ligne = 18;

        /* récupère les étudiants */
        $tEtudiant = [];
        while ('' != $this->myExcelRead->getCellColLigne(1, $ligne)) {
            $tEtudiant[$ligne] = trim($this->myExcelRead->getCellColLigne(1, $ligne));
            ++$ligne;
        }

        /* récupère les modules */
        $tModule = [];
        $colonne = 5;
        while ('' != $this->myExcelRead->getCellColLigne($colonne, 14)) {
            $val = explode('-', (string)$this->myExcelRead->getCellColLigne($colonne, 14));
            $tModule[$colonne] = trim($val[0]);
            $colonne += 2; // 3 si colonne résultat
        }

        $etudiants = $semestre->getEtudiants();
        $ues = $semestre->getUes();
        if ($semestre->getDiplome()->isApc()) {
            $matieres = $this->typeMatiereManager->findBySemestreAndReferentiel($semestre,
                $semestre->getDiplome()->getReferentiel());
        } else {
            $matieres = $this->typeMatiereManager->findBySemestre($semestre);
        }
        $matApogee = [];
        foreach ($matieres as $matiere) {
            $matApogee[$matiere->codeElement] = $matiere->getTypeIdMatiere();
        }
        $etuApogee = [];
        foreach ($etudiants as $etudiant) {
            $etuApogee[$etudiant->getNumEtudiant()] = $etudiant->getId();
        }

        $ssComm = $this->sousCommission->getBySemestreAnneeUniversitaire($semestre, $anneeUniversitaire);
        if (null !== $ssComm) {
            $ssCommTravail = new SousCommissionTravail($semestre, $anneeUniversitaire,
                $ues->getValues(), $matieres, $etudiants->getValues(), $ssComm);

            foreach ($tEtudiant as $keyTe => $valueTe) {
                foreach ($tModule as $keyTm => $valueTm) {
                    if (array_key_exists($valueTe, $etuApogee) &&
                        array_key_exists($valueTm, $matApogee)
                    ) {
                        if (null !== $ssCommTravail->matiere($etuApogee[$valueTe],
                                $matApogee[$valueTm]) && array_key_exists('moyenne',
                                $ssCommTravail->matiere($etuApogee[$valueTe], $matApogee[$valueTm]))) {
                            $moyenne = $ssCommTravail->matiere($etuApogee[$valueTe], $matApogee[$valueTm])['moyenne'];
                            $this->myExcelRead->writeCellColLigne($keyTm, $keyTe,
                                number_format($moyenne, 2));
                        }
                        $this->myExcelRead->writeCellColLigne($keyTm + 1, $keyTe, 20);
                    }
                }
            }

            // EXPORT
            unlink($fichier);
            $this->myExcelRead->sauvegarde($this->dir . 'temp.xls');

            $nom = explode('.', (string)$file->getClientOriginalName());
            $stream = $this->apogeeSousCommission->transformeApogeeTexte($this->dir . 'temp.xls', $nom[0]);

            unlink($this->dir . 'temp.xls');

            return $stream;
        }

        return Constantes::PAS_DE_SOUS_COMM;
    }

    public function exportGrandJury(
        ScolaritePromo     $scolaritePromo,
        AnneeUniversitaire $anneeUniversitaire
    ): StreamedResponse
    {
        $semestre = $scolaritePromo->getSemestre();

        if (null === $semestre) {
            throw new SemestreNotFoundException();
        }
        $ues = $semestre->getUes();
        $etudiants = $semestre->getEtudiants();
        $matieres = $this->typeMatiereManager->findBySemestre($semestre);

        $ssCommTravail = new SousCommissionTravail($semestre, $anneeUniversitaire,
            $ues->getValues(), $matieres, $etudiants->getValues(), $scolaritePromo);

        $this->myExcelWriter->createSheet('Grand Jury ' . $semestre->getLibelle());

        $colonne = 1;
        $ligne = 4;

        $this->myExcelWriter->mergeCellsCaR(7, 3, 13, 3);
        $this->myExcelWriter->writeCellXY(7, 3, 'Semestre ' . $semestre->getOrdreLmd());
        $this->myExcelWriter->borderCellsRange(7, 3, 13, 3);
        $this->myExcelWriter->ecritLigne([
            'N° APOGEE',
            'Nom Prénom',
            'D. de N.',
            'Sexe',
            'Bac',
            'Année Bac',
            'Nb Semestre',
            'UE1',
            'UE2',
            'UE3',
            'UE4',
            'UE5', // todo: rendre flexible
            'Moyenne',
            'Valid.',
            'Décision',
        ], $colonne, $ligne);

        $colonne = 15;

        foreach ($matieres as $m) {
            $this->myExcelWriter->writeCellXY($colonne, $ligne, $m->codeMatiere);
            ++$colonne;
        }

        $tsem = [];
        $precedent = $semestre->getPrecedent();
        while (null !== $precedent) {
            $tsem[] = $precedent;
            $precedent = $precedent->getPrecedent();
        }

        /*foreach ($tsem as $prec) {
            $coldebut = $colonne;
            $this->myExcel->ecritLigne(array('UE1', 'UE2', 'UE3', 'UE4', 'Moyenne', 'Valid.', 'Décision'), $colonne,
                $ligne);
            $colonne = $coldebut + 6;

            $this->myExcel->mergeCellsCaR($coldebut, 3, $colonne, 3);
            $this->myExcel->ecritCelluleCaR($coldebut, 3, 'Semestre ' . $prec->getOrdre());
            $this->myExcel->bordureCellsCaR($coldebut, 3, $colonne, 3);
            $colonne++;
        }*/

        ++$ligne;

        foreach ($etudiants as $etu) {
            if (0 === $etu->getAnneeSortie() && null !== $ssCommTravail->etudiant($etu->getId())) {
                $colonne = 1;
                $this->myExcelWriter->ecritLigne([
                    $etu->getNumEtudiant(),
                    ucfirst($etu->getNom()) . ' ' . ucfirst($etu->getPrenom()),
                    $etu->getDateNaissance()->format('d/m/Y'),
                    $etu->getCivilite(),
                    null !== $etu->getBac() ? $etu->getBac()->getLibelle() : 'err',
                    $etu->getAnneeBac(),
                ], $colonne, $ligne);
                $colonne = 7;

                $this->myExcelWriter->writeCellXY($colonne, $ligne,
                    count($ssCommTravail->recupereScolarite($etu)));

                foreach ($ues as $ue) {
                    ++$colonne;
                    $this->myExcelWriter->writeCellXY($colonne, $ligne,
                        number_format($ssCommTravail->ue($etu->getId(), $ue->getId())['moyenne'], 3),
                        ['style' => 'numerique3']);
                }

                $colonne = 12;
                $this->myExcelWriter->writeCellXY($colonne, $ligne,
                    number_format($ssCommTravail->etudiant($etu->getId())->getMoyenne(), 3),
                    ['style' => 'numerique3']);
                ++$colonne;
                $this->myExcelWriter->writeCellXY($colonne, $ligne,
                    $ssCommTravail->etudiant($etu->getId())->getDecision());
                ++$colonne;
                $this->myExcelWriter->writeCellXY($colonne, $ligne,
                    $ssCommTravail->etudiant($etu->getId())->getProposition());

                $colonne = 15;

                foreach ($matieres as $m) {
                    if (null !== $ssCommTravail->matiere($etu->getId(), $m->getTypeIdMatiere())) {
                        if (array_key_exists('pasoption',
                            $ssCommTravail->matiere($etu->getId(), $m->getTypeIdMatiere()))) {
                            $this->myExcelWriter->writeCellXY($colonne, $ligne, 'N.C.');
                        } else {
                            $this->myExcelWriter->writeCellXY($colonne, $ligne,
                                number_format($ssCommTravail->matiere($etu->getId(),
                                    $m->getTypeIdMatiere())['moyenne'], 2),
                                ['style' => 'numerique']);
                        }
                    }
                    ++$colonne;
                }

                /* foreach ($tsem as $prec) {
                     if (array_key_exists($prec->getOrdre(), $this->parcours[$etu->getId()])) {
                         $coldebut = $colonne;

                         /** @var UE $ue */
                /*foreach ($prec->getUes() as $ue) {
                    if (array_key_exists($ue->getNumeroue(), $this->parcours[$etu->getId()][$prec->getOrdre()]['ue']) && $this->parcours[$etu->getId()][$prec->getOrdre()]['ue'][$ue->getNumeroue()] !== null) {
                        $this->myExcel->ecritCelluleCaR($colonne, $ligne,
                            number_format($this->parcours[$etu->getId()][$prec->getOrdre()]['ue'][$ue->getNumeroue()]->getMoyenne(),
                                3), 'numerique3');
                        $colonne++;
                    } else
                    {
                        $this->myExcel->ecritCelluleCaR($colonne, $ligne,
                            number_format(0,
                                3), 'numerique3');
                        $colonne++;
                    }
                }

                $colonne = $coldebut + 4;
                $this->myExcel->ecritCelluleCaR($colonne, $ligne,
                    number_format($this->parcours[$etu->getId()][$prec->getOrdre()]['parcours']->getMoyenne(), 3),
                    'numerique3');
                $colonne++;
                $this->myExcel->ecritCelluleCaR($colonne, $ligne,
                    $this->parcours[$etu->getId()][$prec->getOrdre()]['parcours']->getDecision());
                $colonne++;
                $this->myExcel->ecritCelluleCaR($colonne, $ligne,
                    $this->parcours[$etu->getId()][$prec->getOrdre()]['parcours']->getSuite());
                $colonne++;
                } else {
                $colonne = $colonne + 7;
                }*/
                // }

                ++$ligne;
            }
        }

        for ($i = 0; $i < 100; ++$i) {
            $this->myExcelWriter->getColumnAutoSize($i);
        }

        $this->myExcelWriter->writeCellName('A1', 'DUT : ');
        $this->myExcelWriter->writeCellName('B1',
            $semestre->getAnnee()->getDiplome()->getDepartement()->getLibelle());

        $writer = new Xlsx($this->myExcelWriter->getSpreadsheet());

        return new StreamedResponse(
            static function () use ($writer) {
                $writer->save('php://output');
            },
            Response::HTTP_OK,
            [
                'Content-Type' => 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
                'Content-Disposition' => 'attachment;filename="Export Grand Jury ' . $semestre->getLibelle() . '.xlsx"',
            ]
        );
    }

    private function getStyleMoyenneUe($moyenne): string
    {
        if ($moyenne < 8) {
            return self::COULEURS['badge bg-danger'];
        }

        if ($moyenne < 10) {
            return self::COULEURS['badge bg-warning'];
        }

        return self::COULEURS['badge bg-success'];
    }

    private function getStyleDecisionUe($decision): string
    {
        if (Constantes::UE_NON_VALIDE === $decision) {
            return self::COULEURS['badge bg-danger'];
        }

        if (Constantes::UE_VALIDE === $decision) {
            return self::COULEURS['badge bg-success'];
        }

        return '';
    }
}
