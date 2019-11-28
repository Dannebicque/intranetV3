<?php
// Copyright (C) 11 / 2019 | David annebicque | IUT de Troyes - All Rights Reserved
// @file /Users/davidannebicque/htdocs/intranetv3/src/MesClasses/MySousCommission.php
// @author     David Annebicque
// @project intranetv3
// @date 25/11/2019 10:20
// @lastUpdate 23/11/2019 09:14

/**
 * Created by PhpStorm.
 * User: davidannebicque
 * Date: 24/12/2018
 * Time: 14:41
 */

namespace App\MesClasses;

use App\Entity\AnneeUniversitaire;
use App\Entity\Etudiant;
use App\Entity\Matiere;
use App\Entity\Semestre;
use App\Entity\Ue;
use App\MesClasses\Excel\MyExcelWriter;
use App\Repository\EtudiantRepository;
use App\Repository\MatiereRepository;
use App\Repository\NoteRepository;
use App\Repository\ScolariteRepository;
use App\Repository\UeRepository;
use PhpOffice\PhpSpreadsheet\Exception;
use PhpOffice\PhpSpreadsheet\Writer\Xlsx;
use Symfony\Component\HttpFoundation\StreamedResponse;

/**
 * @property Ue[] ues
 */
class MySousCommission
{

    /** @var EtudiantRepository */
    private $etudiantRepository;

    /** @var MatiereRepository */
    private $matiereRepository;

    /** @var UeRepository */
    private $ueRepository;

    /** @var NoteRepository */
    private $noteRepository;

    /** @var ScolariteRepository */
    private $scolariteRepository;

    /** @var Etudiant[] */
    private $etudiants = [];

    /** @var Ue[] */
    private $ues = [];

    /** @var Matiere[] */
    private $matieres = [];

    /** @var Semestre[] */
    private $semestres = [];

    /** @var Semestre */
    private $semestre;

    /** @var MyEtudiantSousCommission[] */
    private $sousCommissionEtudiants = [];

    /** @var MyExcelWriter */
    private $myExcelWriter;

    /**
     * SousComissionController constructor.
     *
     * @param EtudiantRepository  $etudiantRepository
     * @param MatiereRepository   $matiereRepository
     * @param MyExcelWriter       $myExcelWriter
     * @param UeRepository        $ueRepository
     * @param NoteRepository      $noteRepository
     * @param ScolariteRepository $scolariteRepository
     */
    public function __construct(
        EtudiantRepository $etudiantRepository,
        MatiereRepository $matiereRepository,
        MyExcelWriter $myExcelWriter,
        UeRepository $ueRepository,
        NoteRepository $noteRepository,
        ScolariteRepository $scolariteRepository
    ) {
        $this->etudiantRepository = $etudiantRepository;
        $this->matiereRepository = $matiereRepository;
        $this->ueRepository = $ueRepository;
        $this->myExcelWriter = $myExcelWriter;
        $this->noteRepository = $noteRepository;
        $this->scolariteRepository = $scolariteRepository;
    }

    /**
     * @param Semestre $semestre
     * @param          $annee
     */
    public function init(Semestre $semestre, AnneeUniversitaire $annee): void
    {
        //récupérer les notes du semestre.
        //faire un tableau etudiant/matieres/notes
        $this->semestre = $semestre;
        $this->etudiants = $this->etudiantRepository->findBySemestre($semestre);
        $this->matieres = $this->matiereRepository->findBySemestre($semestre);
        $this->ues = $this->ueRepository->findBySemestre($semestre);

        //récupération des semestres précédents
        $sem = $semestre;
        while ($sem->getPrecedent() !== null) {
            $this->semestres[] = $sem->getPrecedent();
            $sem = $sem->getPrecedent();
        }

        $notes = $this->noteRepository->findByEtudiantSemestreArray($semestre, $annee, $this->etudiants);

        foreach ($this->etudiants as $etudiant) {
            $etuId = $etudiant->getId();
            $this->sousCommissionEtudiants[$etuId] = new MyEtudiantSousCommission($this->scolariteRepository, $etudiant,
                $semestre, $this->matieres, $notes[$etuId]);
        }
    }

    /**
     * @return Ue[]
     */
    public function getUes(): array
    {
        return $this->ues;
    }

    /**
     * @return Etudiant[]
     */
    public function getEtudiants(): array
    {
        return $this->etudiants;
    }

    /**
     * @return Matiere[]
     */
    public function getMatieres(): array
    {
        return $this->matieres;
    }

    /**
     * @return Semestre[]
     */
    public function getSemestres(): array
    {
        return $this->semestres;
    }

    /**
     * @return MyEtudiantSousCommission[]
     */
    public function getSousCommissionEtudiants(): array
    {
        return $this->sousCommissionEtudiants;
    }

    public function sauvegardeTravail(): void
    {
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
        $this->init($semestre, $anneeUniversitaire);

        $this->myExcelWriter->createSheet('Sous Commission ' . $semestre->getLibelle());
        $this->myExcelWriter->setHeader();
        $this->ligne = 5;


        $tCouleur = [
            'badge label-cool'    => 'ffa9a9a9',
            'badge badge-danger'  => 'ffff0000',
            'badge badge-warning' => 'ffffcc00',
            'notenormale'         => 'ffffffff',
            'pasdenote'           => 'ffbbbbbb',
            'pasoption'           => 'ff000000',
        ];

        $tdecisioncouleur = [
            'V'   => 'ff00cc00',
            'NV'  => 'ffff0000',
            'MNC' => 'ff701118',
            'VCA' => 'fff0a300',
            ''    => 'ffffff'
        ]; //todo: code couleur a revoir


        $this->myExcelWriter->writeCellName('B8', 'Etudiant');
        $this->myExcelWriter->writeCellName('C8', 'N° Etu.');
        $this->myExcelWriter->writeCellName('D8', 'Bac');
        $this->myExcelWriter->writeCellName('E8', 'Obt.');
        $this->myExcelWriter->writeCellName('F8', 'Sexe');
        $this->myExcelWriter->writeCellName('G8', 'D. de N.');
        $this->myExcelWriter->writeCellName('H8', 'Nb de S.');

        $ligne = 7;
        $colonne = 9;

        /** @var Matiere $matiere */
        foreach ($this->matieres as $matiere) {
            if ($matiere->getUE()->getSemestre()->getId() == $semestre->getId() && $matiere->getNbnotes() != 0) {
                $this->myExcelWriter->writeCellXY($colonne, $ligne, $matiere->getCodeMatiere());
                $this->myExcelWriter->writeCellXY($colonne, $ligne + 1, $matiere->getCoefficient());
                $colonne++;
            }
        }

        $this->myExcelWriter->mergeCellsCaR($colonne, $ligne - 1, $colonne + count($this->ues) + 3, $ligne - 1);
        $this->myExcelWriter->writeCellXY($colonne, $ligne - 1, $semestre->getLibelle(), 'HORIZONTAL_CENTER');

        /** @var Ue $ue */
        foreach ($this->ues as $ue) {
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

        /** @var Semestre $s */
        foreach ($this->semestres as $s) {
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

        /** @var Etudiant $etudiant */
        foreach ($this->etudiants as $etudiant) {
            $moyennes = $this->sousCommissionEtudiants[$etudiant->getId()];
            $this->myExcelWriter->writeCellXY($colonne, $ligne, $etudiant->getDisplay());
            $this->myExcelWriter->getColumnAutoSize($colonne);
            $colonne++;

            $this->myExcelWriter->writeCellXY($colonne, $ligne, $etudiant->getNumetudiant());
            $this->myExcelWriter->getColumnAutoSize($colonne);
            $colonne++;

            $this->myExcelWriter->writeCellXY($colonne, $ligne, $etudiant->getBac()->getLibelle());
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
                $moyennes->getNbSemestres());
            $colonne++;

            /** @var Matiere $matiere */
            foreach ($this->matieres as $matiere) {
                $moyenneMatiere = $moyennes->getMoyenneMatieres()[$matiere->getId()];
                if ($matiere->getSemestre()->getId() === $semestre->getId() && $matiere->getNbnotes() != 0) {
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

                    } elseif ($moyenneMatiere->isPasOption() === true) {
                        $this->myExcelWriter->writeCellXY($colonne, $ligne, 'N.C.');
                        $this->myExcelWriter->colorCellRange($colonne, $ligne, $tCouleur['pasoption']);

                    } else if ($semestre->isOptPenaliteAbsence() === true) {
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
                    $colonne++;
                }
            }

            foreach ($this->ues as $ue) {
                if ($semestre->isOptPenaliteAbsence() === true) {
                    $this->myExcelWriter->writeCellXY($colonne, $ligne,
                        $moyennes->getMoyenneUES()[$ue->getNumeroue()]->getMoyennePenalisee(),
                        'numerique3');
                    $this->myExcelWriter->colorCellRange($colonne, $ligne,
                        $tCouleur[$moyennes->getMoyenneUES()[$ue->getNumeroue()]->getStyleMoyennePenalisee()]);

                } else {
                    $this->myExcelWriter->writeCellXY($colonne, $ligne,
                        $moyennes->getMoyenneUES()[$ue->getNumeroue()]->getMoyenne(), 'numerique3');
                    $this->myExcelWriter->colorCellRange($colonne, $ligne,
                        $tCouleur[$moyennes->getMoyenneUES()[$ue->getNumeroue()]->getStyleMoyenne()]);
                }
                $colonne++;
            }

            if ($semestre->isOptPenaliteAbsence() === true) {
                $this->myExcelWriter->writeCellXY($colonne, $ligne,
                    $moyennes->getMoyenneSemestre()->getMoyennePenalisee(), 'numerique3');
                $this->myExcelWriter->colorCellRange($colonne, $ligne,
                    $tCouleur[$moyennes->getMoyenneSemestre()->getStyleMoyennePenalisee()]);
            } else {
                $this->myExcelWriter->writeCellXY($colonne, $ligne,
                    $moyennes->getMoyenneSemestre()->getMoyenne(), 'numerique3');
                $this->myExcelWriter->colorCellRange($colonne, $ligne,
                    $tCouleur[$moyennes->getMoyenneSemestre()->getStyleMoyenne()]);
            }
            $colonne++;

            $this->myExcelWriter->writeCellXY($colonne, $ligne, $moyennes->getMoyenneSemestre()->getBonif(), 'numerique');
            $colonne++;

            $this->myExcelWriter->writeCellXY($colonne, $ligne, $moyennes->getMoyenneSemestre()->getProposition());
            $colonne++;


            $this->myExcelWriter->writeCellXY($colonne, $ligne, $moyennes->getMoyenneSemestre()->getDecision());
            $this->myExcelWriter->colorCellRange($colonne, $ligne,
                $tdecisioncouleur[$moyennes->getMoyenneSemestre()->getDecision()]);
            $colonne++;

            $this->myExcelWriter->writeCellXY($colonne, $ligne,
                $moyennes->getAbsences()['deminonjustifiees']);
            $colonne++;

            /* semestres précédent */
            foreach ($this->semestres as $s) {
                foreach ($s->getUes() as $ue) {
                    if (isset($moyennes->getParcours()[$s->getOrdreLmd()])) {
                        $this->myExcelWriter->writeCellXY($colonne, $ligne,
                            $moyennes->getParcours()[$s->getOrdreLmd()]->getParcoursUe()[$ue->getNumeroue()]['moyenne'],
                            'numerique3');
                    } else {
                        $this->myExcelWriter->writeCellXY($colonne, $ligne, ' - ');
                    }


                    $colonne++;
                }
                if (isset($moyennes->getParcours()[$s->getOrdreLmd()])) {
                    $this->myExcelWriter->writeCellXY($colonne, $ligne,
                        $moyennes->getParcours()[$s->getOrdreLmd()]->getMoyenne(),
                        'numerique3');
                    $colonne++;
                    $this->myExcelWriter->writeCellXY($colonne, $ligne,
                        $moyennes->getParcours()[$s->getOrdreLmd()]->getDecision());
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
