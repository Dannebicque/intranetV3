<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Classes/SousCommission/SousCommissionExport.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 09/02/2021 12:03
 */

/*
 * Pull your hearder here, for exemple, Licence header.
 */

namespace App\Classes\SousCommission;

use App\Classes\Apogee\MyApogee;
use App\Classes\Excel\MyExcelRead;
use App\Classes\Excel\MyExcelWriter;
use App\Classes\MyUpload;
use App\DTO\SousCommissionTravail;
use App\Entity\AnneeUniversitaire;
use App\Entity\Constantes;
use App\Entity\ScolaritePromo;
use App\Entity\Semestre;
use App\Entity\Ue;
use App\Repository\MatiereRepository;
use DateTime;
use PhpOffice\PhpSpreadsheet\Exception;
use PhpOffice\PhpSpreadsheet\Writer\Xlsx;
use Symfony\Component\HttpFoundation\StreamedResponse;
use Symfony\Component\HttpKernel\KernelInterface;

class SousCommissionExport
{
    private SousCommission $sousCommission;
    private MyExcelWriter $myExcelWriter;
    private MyExcelRead $myExcelRead;
    private MyUpload $myUpload;
    private MyApogee $myApogee;
    private string $dir;
    private MatiereRepository $matiereRepository;

    /**
     * SousCommissionExport constructor.
     */
    public function __construct(
        SousCommission $sousCommission,
        KernelInterface $kernel,
        MyApogee $myApogee,
        MyExcelWriter $myExcelWriter,
        MyExcelRead $myExcelRead,
        MatiereRepository $matiereRepository,
        MyUpload $myUpload
    ) {
        $this->sousCommission = $sousCommission;
        $this->myExcelWriter = $myExcelWriter;
        $this->myExcelRead = $myExcelRead;
        $this->myUpload = $myUpload;
        $this->myApogee = $myApogee;
        $this->matiereRepository = $matiereRepository;
        $this->dir = $kernel->getProjectDir() . '/public/upload/temp/';
    }

    /**
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
            ''                     => 'ffffff',
        ];

        $ues = $this->sousCommission->getUes();
        $matieres = $this->sousCommission->getMatieres();
        $nbUes = \count($ues);

        $this->myExcelWriter->writeCellName('B1', 'Sous commission ');
        $this->myExcelWriter->writeCellName('C1', $semestre->display());
        $this->myExcelWriter->writeCellName('B2', 'Année universitaire');
        $this->myExcelWriter->writeCellName('C2', $anneeUniversitaire->displayAnneeUniversitaire());
        $now = new DateTime('now');
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
            if (!$matiere->isSuspendu() && $matiere->getNbnotes() > 0) {
                $this->myExcelWriter->writeCellXY($colonne, $ligne, $matiere->getCodeMatiere());
                $this->myExcelWriter->writeCellXY($colonne, $ligne + 1, $matiere->getCoefficient());
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
            //titre semestre
            $this->myExcelWriter->writeCellXY($colonne, $ligne - 1, $s->getLibelle(), ['style' => 'HORIZONTAL_CENTER']);
            $colFin = $colonne + \count($s->getUes()) + 1;
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
                if ($matiere->getNbnotes() > 0 && false === $matiere->isSuspendu()) {
                    if (\array_key_exists($matiere->getId(), $sousCommissionEtudiant->moyenneMatieres)) {
                        $moyenneMatiere = $sousCommissionEtudiant->moyenneMatieres[$matiere->getId()];
                        if (true === $matiere->isPac()) {
                            if ($moyenneMatiere->getMoyenne() > 0) {
                                if (true === $semestre->isOptPenaliteAbsence()) {
                                    $this->myExcelWriter->writeCellXY($colonne, $ligne,
                                        $moyenneMatiere->getMoyennePenalisee(),
                                        ['style' => 'numerique']);
                                    $this->myExcelWriter->colorCellRange($colonne, $ligne,
                                        $tCouleur[$moyenneMatiere->getStylePenalisee()]);
                                } else {
                                    $this->myExcelWriter->writeCellXY($colonne, $ligne,
                                        $moyenneMatiere->getMoyenne(),
                                        ['style' => 'numerique']);
                                    $this->myExcelWriter->colorCellRange($colonne, $ligne,
                                        $tCouleur[$moyenneMatiere->getStyle()]);
                                }
                            } else {
                                $this->myExcelWriter->writeCellXY($colonne, $ligne, 'No PAC');
                                $this->myExcelWriter->colorCellRange($colonne, $ligne, $tCouleur['pasoption']);
                            }
                        } elseif (false === $moyenneMatiere->optionFaite) {
                            $this->myExcelWriter->writeCellXY($colonne, $ligne, 'N.C.');
                            $this->myExcelWriter->colorCellRange($colonne, $ligne, $tCouleur['pasoption']);
                        } elseif (true === $semestre->isOptPenaliteAbsence()) {
                            $this->myExcelWriter->writeCellXY($colonne, $ligne,
                                $moyenneMatiere->getMoyennePenalisee(),
                                ['style' => 'numerique']);
                            $this->myExcelWriter->colorCellRange($colonne, $ligne,
                                $tCouleur[$moyenneMatiere->getStylePenalisee()]);
                        } else {
                            $this->myExcelWriter->writeCellXY($colonne, $ligne,
                                $moyenneMatiere->getMoyenne(),
                                ['style' => 'numerique']);
                        }
                        $this->myExcelWriter->colorCellRange($colonne, $ligne,
                            $tCouleur[$moyenneMatiere->getStyle()]);
                    }
                    ++$colonne;
                }
                //note pas présente
            }

            foreach ($ues as $ue) {
                if (true === $semestre->isOptPenaliteAbsence()) {
                    $this->myExcelWriter->writeCellXY($colonne, $ligne,
                        $sousCommissionEtudiant->moyenneUes[$ue->getNumeroUe()]->getMoyennePenalisee(),
                        ['style' => 'numerique3']);
                    $this->myExcelWriter->colorCellRange($colonne, $ligne,
                        $tCouleur[$sousCommissionEtudiant->moyenneUes[$ue->getNumeroUe()]->getStyleMoyennePenalisee()]);
                } else {
                    $this->myExcelWriter->writeCellXY($colonne, $ligne,
                        $sousCommissionEtudiant->moyenneUes[$ue->getNumeroUe()]->getMoyenne(),
                        ['style' => 'numerique3']);

                    $this->myExcelWriter->colorCellRange($colonne, $ligne,
                        $tCouleur[$sousCommissionEtudiant->moyenneUes[$ue->getNumeroUe()]->getStyleMoyenne()]);
                }
                ++$colonne;
            }

            if (true === $semestre->isOptPenaliteAbsence()) {
                $this->myExcelWriter->writeCellXY($colonne, $ligne,
                    $sousCommissionEtudiant->moyenneSemestrePenalisee, ['style' => 'numerique3']);
                $this->myExcelWriter->colorCellRange($colonne, $ligne,
                    $tCouleur[$sousCommissionEtudiant->getStyleMoyenneSemestrePenalisee()]);
            } else {
                $this->myExcelWriter->writeCellXY($colonne, $ligne,
                    $sousCommissionEtudiant->moyenneSemestre, ['style' => 'numerique3']);
                $this->myExcelWriter->colorCellRange($colonne, $ligne,
                    $tCouleur[$sousCommissionEtudiant->getStyleMoyenneSemestre()]);
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
                        \array_key_exists($ue->getNumeroUe(),
                            $sousCommissionEtudiant->getScolarite()[$s->getOrdreLmd()]->parcoursUe)
                    ) {
                        $this->myExcelWriter->writeCellXY($colonne, $ligne,
                            $sousCommissionEtudiant->getScolarite()[$s->getOrdreLmd()]->parcoursUe[$ue->getNumeroUe()]['moyenne'],
                            ['style' => 'numerique3']);
                        $this->myExcelWriter->colorCellRange($colonne, $ligne,
                            $tCouleur[$sousCommissionEtudiant->getScolarite()[$s->getOrdreLmd()]->parcoursUe[$ue->getNumeroUe()]['style']]);
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
                    ++$colonne;
                } else {
                    $this->myExcelWriter->writeCellXY($colonne, $ligne, ' - ');
                    ++$colonne;
                    $this->myExcelWriter->writeCellXY($colonne, $ligne, ' - ');
                    ++$colonne;
                }
            }
            $this->myExcelWriter->getColumnDimension('H', 6);

            $colonne = 2;
            ++$ligne;
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
                'Content-Disposition' => 'attachment;filename="Sous Commission ' . $semestre->getLibelle() . '.xlsx"',
            ]
        );
    }

    public function exportGrandJury(ScolaritePromo $scolaritePromo, AnneeUniversitaire $anneeUniversitaire)
    {
        $semestre = $scolaritePromo->getSemestre();
        if (null !== $semestre) {
            $ues = $semestre->getUes();
            $etudiants = $semestre->getEtudiants();
            $matieres = $this->matiereRepository->findBySemestre($semestre);

            $ssCommTravail = new SousCommissionTravail($semestre, $anneeUniversitaire,
                $ues->getValues(), $matieres, $etudiants->getValues(), $scolaritePromo);

            $this->myExcelWriter->createSheet('Grand Jury ' . $semestre->display());

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
                'UE5', //todo: rendre flexible
                'Moyenne',
                'Valid.',
                'Décision',
            ], $colonne, $ligne);

            $colonne = 15;

            foreach ($matieres as $m) {
                $this->myExcelWriter->writeCellXY($colonne, $ligne, $m->getCodeMatiere());
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
                        \count($ssCommTravail->recupereScolarite($etu)));

                    foreach ($ues as $ue) {
                        ++$colonne;
                        $this->myExcelWriter->writeCellXY($colonne, $ligne,
                            number_format($ssCommTravail->ue($etu->getId(), $ue->getId())['moyenne'], 3), 'numerique3');
                    }

                    $colonne = 12;
                    $this->myExcelWriter->writeCellXY($colonne, $ligne,
                        number_format($ssCommTravail->etudiant($etu->getId())->getMoyenne(), 3),
                        'numerique3');
                    ++$colonne;
                    $this->myExcelWriter->writeCellXY($colonne, $ligne,
                        $ssCommTravail->etudiant($etu->getId())->getDecision());
                    ++$colonne;
                    $this->myExcelWriter->writeCellXY($colonne, $ligne,
                        $ssCommTravail->etudiant($etu->getId())->getProposition());

                    $colonne = 15;

                    foreach ($matieres as $m) {
                        if (null !== $ssCommTravail->matiere($etu->getId(), $m->getId())) {
                            if (\array_key_exists('pasoption', $ssCommTravail->matiere($etu->getId(), $m->getId()))) {
                                $this->myExcelWriter->writeCellXY($colonne, $ligne, 'N.C.');
                            } else {
                                $this->myExcelWriter->writeCellXY($colonne, $ligne,
                                    number_format($ssCommTravail->matiere($etu->getId(), $m->getId())['moyenne'], 2),
                                    'numerique');
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
                    //}

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
                static function() use ($writer) {
                    $writer->save('php://output');
                },
                200,
                [
                    'Content-Type'        => 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
                    'Content-Disposition' => 'attachment;filename="Export Grand Jury ' . $semestre->getLibelle() . '.xlsx"',
                ]
            );
        }
    }

    public function exportApogee(Semestre $semestre, $file, AnneeUniversitaire $anneeUniversitaire)
    {
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
            $val = explode('-', $this->myExcelRead->getCellColLigne($colonne, 14));
            $tModule[$colonne] = trim($val[0]);
            $colonne += 2; //3 si colonne résultat
        }

        $etudiants = $semestre->getEtudiants();
        $ues = $semestre->getUes();
        $matieres = $this->matiereRepository->findBySemestre($semestre);
        $matApogee = [];
        foreach ($matieres as $matiere) {
            $matApogee[$matiere->getCodeElement()] = $matiere->getId();
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
                    if (\array_key_exists($valueTe, $etuApogee) &&
                        \array_key_exists($valueTm, $matApogee)
                    ) {
                        if (null !== $ssCommTravail->matiere($etuApogee[$valueTe],
                                $matApogee[$valueTm]) && \array_key_exists('moyenne',
                                $ssCommTravail->matiere($etuApogee[$valueTe], $matApogee[$valueTm]))) {
                            $moyenne = $ssCommTravail->matiere($etuApogee[$valueTe], $matApogee[$valueTm])['moyenne'];
                            $this->myExcelRead->writeCellColLigne($keyTm, $keyTe,
                                number_format($moyenne, 2));
                        }
                        $this->myExcelRead->writeCellColLigne($keyTm + 1, $keyTe, 20);
                    }
                }
            }

            //EXPORT
            unlink($fichier);
            $this->myExcelRead->sauvegarde($this->dir . 'temp.xls');

            $nom = explode('.', $file->getClientOriginalName());
            $stream = $this->myApogee->transformeApogeeTexte($this->dir . 'temp.xls', $nom[0]);

            unlink($this->dir . 'temp.xls');

            return $stream;
        }

        return Constantes::PAS_DE_SOUS_COMM;
    }
}
