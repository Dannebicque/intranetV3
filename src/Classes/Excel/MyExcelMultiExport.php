<?php
/*
 * Copyright (c) 2023. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Classes/Excel/MyExcelMultiExport.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 08/06/2023 08:03
 */

/*
 * Pull your hearder here, for exemple, Licence header.
 */

namespace App\Classes\Excel;

use App\Classes\MyAbsences;
use App\DTO\Matiere;
use App\Entity\Absence;
use App\Entity\Etudiant;
use App\Entity\Evaluation;
use App\Entity\Groupe;
use App\Entity\Semestre;
use Doctrine\Common\Collections\Collection;
use PhpOffice\PhpSpreadsheet\Worksheet\PageSetup;
use PhpOffice\PhpSpreadsheet\Writer\Csv;
use PhpOffice\PhpSpreadsheet\Writer\Pdf\Dompdf;
use PhpOffice\PhpSpreadsheet\Writer\Xlsx;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\StreamedResponse;
use function array_key_exists;
use function count;

/**
 * Class MyExcelMultiExport.
 */
class MyExcelMultiExport
{
    public function __construct(
        private readonly MyExcelWriter $myExcelWriter
    )
    {
    }

    public function saveXlsx(string $name): StreamedResponse
    {
        $this->pageSetup($name);
        $writer = new Xlsx($this->myExcelWriter->getSpreadsheet());

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

    public function pageSetup(string $name): void
    {
        $this->myExcelWriter->getSpreadsheet()->getProperties()->setTitle($name);
        $this->myExcelWriter->getSpreadsheet()->getActiveSheet()->getPageSetup()->setPaperSize(PageSetup::PAPERSIZE_A4);
        $this->myExcelWriter->getSpreadsheet()->getActiveSheet()->getPageSetup()->setOrientation(PageSetup::ORIENTATION_LANDSCAPE);
        $this->myExcelWriter->getSpreadsheet()->getActiveSheet()->setShowGridlines(true); // affichage de la grille
        $this->myExcelWriter->getSpreadsheet()->getActiveSheet()->setPrintGridlines(true); // affichage de la grille
        $this->myExcelWriter->getSpreadsheet()->getActiveSheet()->getPageSetup()->setRowsToRepeatAtTopByStartAndEnd(
            1,
            1
        ); // ligne a répéter en haut
        $this->myExcelWriter->getSpreadsheet()->getActiveSheet()->getHeaderFooter()
            ->setOddHeader('&C&HDocument généré depuis l\'Intranet !');
        $this->myExcelWriter->getSpreadsheet()->getActiveSheet()->getHeaderFooter()
            ->setOddFooter('&L&B' . $this->myExcelWriter->getSpreadsheet()->getProperties()->getTitle() . '&RPage &P of &N');
    }

    public function saveCsv(string $name): StreamedResponse
    {
        $this->pageSetup($name);
        $writer = new Csv($this->myExcelWriter->getSpreadsheet());

        return new StreamedResponse(
            static function () use ($writer) {
                $writer->save('php://output');
            },
            Response::HTTP_OK,
            [
                'Content-Type' => 'application/csv',
                'Content-Disposition' => 'attachment;filename="' . $name . '.csv"',
            ]
        );
    }

    public function savePdf(string $name): StreamedResponse
    {
        $this->pageSetup($name);

        $writer = new Dompdf($this->myExcelWriter->getSpreadsheet());

        return new StreamedResponse(
            static function () use ($writer) {
                $writer->save('php://output');
            },
            Response::HTTP_OK,
            [
                'Content-Type' => 'application/pdf',
                'Content-Disposition' => 'attachment;filename="' . $name . '.pdf"',
            ]
        );
    }

    public function genereExcelFromArray(array $data): self
    {
        $this->myExcelWriter->createSheet('onglet 1');
        $i = 1;
        $ligne = 1;
        foreach ($data as $row) {
            foreach ($row as $value) {
                $this->myExcelWriter->writeCellXY($i, $ligne, $value);
                ++$i;
            }
            ++$ligne;
            $i = 1;
        }
        $nbCol = is_countable($data[1]) ? count($data[1]) : 0;
        for ($j = 1; $j <= $nbCol; ++$j) {
            $this->myExcelWriter->getColumnAutoSize($j);
            $this->myExcelWriter->setCellEnteteStyle($j, 1);
        }

        return $this;
    }

    public function genereExcelAbsence(MyAbsences $myAbsences): void
    {
        $this->myExcelWriter->createSheet('absences');
        $this->myExcelWriter->writeHeader([
            'nom',
            'prenom',
            'nbCoursManques',
            'totalDuree',
            'nbNonJustifie',
            'nbJustifie',
        ]);
        $ligne = 2;
        $colonne = 1;
        foreach ($myAbsences->getEtudiants() as $etudiant) {
            $this->myExcelWriter->writeCellXY($colonne, $ligne, $etudiant->getNom());
            ++$colonne;
            $this->myExcelWriter->writeCellXY($colonne, $ligne, $etudiant->getPrenom());
            ++$colonne;
            $this->myExcelWriter->writeCellXY(
                $colonne,
                $ligne,
                $myAbsences->getStatistiques()[$etudiant->getId()]->nbCoursManques
            );
            ++$colonne;
            $this->myExcelWriter->writeCellXY(
                $colonne,
                $ligne,
                $myAbsences->getStatistiques()[$etudiant->getId()]->dureeCoursManques->format('H:i')
            );
            ++$colonne;
            $this->myExcelWriter->writeCellXY(
                $colonne,
                $ligne,
                $myAbsences->getStatistiques()[$etudiant->getId()]->nbNonJustifie
            );
            ++$colonne;
            $this->myExcelWriter->writeCellXY(
                $colonne,
                $ligne,
                $myAbsences->getStatistiques()[$etudiant->getId()]->nbJustifie
            );
            ++$ligne;
            $colonne = 1;
        }
    }

    public function genereModeleExcel(Semestre $semestre): void
    {
        $this->myExcelWriter->createSheet('import');

        $this->myExcelWriter->writeHeader(['num_etudiant', 'nom', 'prenom', 'note', 'commentaire'], 1, 1, false);
        $ligne = 2;
        $colonne = 1;
        /** @var Etudiant $etudiant */
        foreach ($semestre->getEtudiants() as $etudiant) {
            if (count($etudiant->getGroupes()) > 0) {
                // uniquement si l'étudiant est dans un groupe.
                $this->myExcelWriter->writeCellXY($colonne, $ligne, $etudiant->getNumEtudiant());
                ++$colonne;
                $this->myExcelWriter->writeCellXY($colonne, $ligne, $etudiant->getNom());
                ++$colonne;
                $this->myExcelWriter->writeCellXY($colonne, $ligne, $etudiant->getPrenom());
                ++$ligne;
                $colonne = 1;
            }
        }
    }

    public function genereReleveExcel(Evaluation $evaluation, array|Collection $groupes, array|Collection $notes, Matiere $matiere, Semestre $semestre): void
    {
        /** @var Groupe $groupe */
        foreach ($groupes as $groupe) {
            $this->myExcelWriter->createSheet($groupe->getLibelle());
            // todo: modifier en-tete pour ajouter les infos de l'évaluation. modele PDF. Sauf si CSV? Evaluation et Matiere inutiles ?
            if (true === $semestre->getAnnee()?->getDiplome()?->isOptAnonymat()) {
                $this->myExcelWriter->writeHeader(['num_etudiant', 'note', 'remise copie', 'commentaire']);
            } else {
                $this->myExcelWriter->writeHeader([
                    'num_etudiant',
                    'nom',
                    'prenom',
                    'note',
                    'remise copie',
                    'commentaire',
                ]);
            }
            $ligne = 2;
            $colonne = 1;

            /** @var Etudiant $etudiant */
            foreach ($groupe->getEtudiants() as $etudiant) {
                $this->myExcelWriter->writeCellXY($colonne, $ligne, $etudiant->getNumEtudiant());
                ++$colonne;
                if (false === $semestre->getAnnee()?->getDiplome()?->isOptAnonymat()) {
                    $this->myExcelWriter->writeCellXY($colonne, $ligne, $etudiant->getNom());
                    ++$colonne;
                    $this->myExcelWriter->writeCellXY($colonne, $ligne, $etudiant->getPrenom());
                    ++$colonne;
                }

                if (array_key_exists($etudiant->getId(), $notes)) {
                    $this->myExcelWriter->writeCellXY($colonne, $ligne, $notes[$etudiant->getId()]->getNote());
                    ++$colonne;
                    $this->myExcelWriter->writeCellXY($colonne, $ligne);
                    ++$colonne;
                    $this->myExcelWriter->writeCellXY($colonne, $ligne,
                        $notes[$etudiant->getId()]->getCommentaire());
                } else {
                    $this->myExcelWriter->writeCellXY($colonne, $ligne, '-');
                }

                $colonne = 1;
                ++$ligne;
            }
        }
    }

    public function genereReleveAbsencesMatiereExcel(array $absences): void
    {
        $this->myExcelWriter->createSheet('Absences');

        $this->myExcelWriter->writeHeader([
            'num_etudiant',
            'nom',
            'prenom',
            'date Absence',
            'heure Absence',
            'Saisie par',
            'Absence justifiée',
        ]);

        $ligne = 2;
        $colonne = 1;

        /** @var Absence $absence */
        foreach ($absences as $absence) {
            $etudiant = $absence->getEtudiant();
            $this->myExcelWriter->writeCellXY($colonne, $ligne, $etudiant->getNumEtudiant());
            ++$colonne;

            $this->myExcelWriter->writeCellXY($colonne, $ligne, $etudiant->getNom());
            ++$colonne;
            $this->myExcelWriter->writeCellXY($colonne, $ligne, $etudiant->getPrenom());
            ++$colonne;
            $this->myExcelWriter->writeCellXY($colonne, $ligne, $absence->getDateHeure()?->format('d/m/Y'));
            ++$colonne;
            $this->myExcelWriter->writeCellXY($colonne, $ligne, $absence->getDateHeure()?->format('H:i'));
            ++$colonne;
            $this->myExcelWriter->writeCellXY($colonne, $ligne, $absence->getPersonnel()?->getDisplayPr());
            ++$colonne;
            $this->myExcelWriter->writeCellXY($colonne, $ligne, true === $absence->getJustifie() ? 'Oui' : 'Non');
            $colonne = 1;
            ++$ligne;
        }
    }

    public function genereExcelJustificatifsAbsences(mixed $justificatifs): void
    {
        $this->myExcelWriter->createSheet('absences');
        $this->myExcelWriter->writeHeader([
            'num_etudiant',
            'nom',
            'prenom',
            'date debut',
            'heure début',
            'date fin',
            'heure fin',
            'motif',
            'etat justificatif',
            'date depot',
        ]);
        $ligne = 2;
        $colonne = 1;
        /** @var \App\Entity\AbsenceJustificatif $justificatif */
        foreach ($justificatifs as $justificatif) {
            $this->myExcelWriter->writeCellXY($colonne, $ligne, $justificatif->getEtudiant()?->getNumEtudiant());
            ++$colonne;
            $this->myExcelWriter->writeCellXY($colonne, $ligne, $justificatif->getEtudiant()?->getNom());
            ++$colonne;
            $this->myExcelWriter->writeCellXY($colonne, $ligne, $justificatif->getEtudiant()?->getPrenom());
            ++$colonne;
            $this->myExcelWriter->writeCellXY(
                $colonne,
                $ligne,
                $justificatif->getDateHeureDebut()?->format('d/m/Y')
            );
            ++$colonne;
            $this->myExcelWriter->writeCellXY(
                $colonne,
                $ligne,
                $justificatif->getDateHeureDebut()?->format('H:i')
            );
            ++$colonne;
            $this->myExcelWriter->writeCellXY(
                $colonne,
                $ligne,
                $justificatif->getDateHeureFin()?->format('d/m/Y')
            );
            ++$colonne;
            $this->myExcelWriter->writeCellXY(
                $colonne,
                $ligne,
                $justificatif->getDateHeureFin()?->format('H:i')
            );
            ++$colonne;
            $this->myExcelWriter->writeCellXY(
                $colonne,
                $ligne,
                $justificatif->getMotif()
            );
            ++$colonne;
            $this->myExcelWriter->writeCellXY(
                $colonne,
                $ligne,
                $justificatif->etatLong()
            );
            ++$colonne;
            $this->myExcelWriter->writeCellXY(
                $colonne,
                $ligne,
                $justificatif->getCreated()?->format('d/m/Y H:i')
            );
            ++$ligne;
            $colonne = 1;
        }
    }

    public function genereModeleExcelMutualise(Evaluation $evaluation, Matiere $matiere)
    {
        $this->myExcelWriter->createSheet('import');

        $this->myExcelWriter->writeHeader(['num_etudiant', 'nom', 'prenom', 'note', 'commentaire'], 1, 1, false);
        $ligne = 2;
        $colonne = 1;
        foreach ($matiere->getSemestres() as $semestre) {
            //todo: export brut => Trie selon les noms des étudiants + filtre selon le format des groupes (sens ??) ?
            /** @var Etudiant $etudiant */
            foreach ($semestre->getEtudiants() as $etudiant) {
                if (count($etudiant->getGroupes()) > 0) {
                    // uniquement si l'étudiant est dans un groupe.
                    $this->myExcelWriter->writeCellXY($colonne, $ligne, $etudiant->getNumEtudiant());
                    ++$colonne;
                    $this->myExcelWriter->writeCellXY($colonne, $ligne, $etudiant->getNom());
                    ++$colonne;
                    $this->myExcelWriter->writeCellXY($colonne, $ligne, $etudiant->getPrenom());
                    ++$ligne;
                    $colonne = 1;
                }
            }
        }
    }
}
