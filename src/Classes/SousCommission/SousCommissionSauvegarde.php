<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Classes/SousCommission/SousCommissionSauvegarde.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 07/02/2021 11:11
 */

/*
 * Pull your hearder here, for exemple, Licence header.
 */

namespace App\Classes\SousCommission;

use App\DTO\SousCommissionTravail;
use App\Entity\AnneeUniversitaire;
use App\Entity\Matiere;
use App\Entity\Scolarite;
use App\Entity\ScolaritePromo;
use App\Entity\Semestre;
use App\Repository\ScolaritePromoRepository;
use App\Repository\ScolariteRepository;
use DateTime;
use Doctrine\ORM\EntityManagerInterface;

class SousCommissionSauvegarde
{
    private ScolaritePromoRepository $scolaritePromoRepository;

    private ScolariteRepository $scolariteRepository;

    private EntityManagerInterface $entityManager;

    /**
     * SousCommissionSauvegarde constructor.
     */
    public function __construct(
        ScolaritePromoRepository $scolaritePromoRepository,
        ScolariteRepository $scolariteRepository,
        EntityManagerInterface $entityManager
    ) {
        $this->scolaritePromoRepository = $scolaritePromoRepository;
        $this->scolariteRepository = $scolariteRepository;
        $this->entityManager = $entityManager;
    }

    public function sauvegardeTravail(SousCommission $sousCommission)
    {
        $semestre = $sousCommission->getSemestre();
        $anneeUniversitaire = $sousCommission->getAnneeUniversitaire();
        $ssComm = $this->scolaritePromoRepository->findOneBy([
            'anneeUniversitaire' => $anneeUniversitaire,
            'semestre'           => $semestre,
        ]);
        $etudiants = $semestre->getEtudiants();
        $ues = $semestre->getUes();
        $matieres = $this->entityManager->getRepository(Matiere::class)->findBySemestre($semestre);

        if (null === $ssComm) {
            //N'existe pas on ajoute
            $ssComm = new ScolaritePromo();
            $ssComm->setAnneeUniversitaire($anneeUniversitaire);
            $ssComm->setSemestre($semestre);
            $this->entityManager->persist($ssComm);

            //sauvegarde des données
            foreach ($etudiants as $etudiant) {
                $scEtudiant = $sousCommission->getSousCommissionEtudiant($etudiant->getId());
                if (null !== $scEtudiant) {
                    $scSemestre = $this->getOrCreateScolariteEtudiant($etudiant, $semestre, $anneeUniversitaire);
                    $scSemestre->setScolaritePromo($ssComm);
                    if (true === $semestre->isOptPenaliteAbsence()) {
                        $scSemestre->setMoyenne($scEtudiant->moyenneSemestrePenalisee);
                    } else {
                        $scSemestre->setMoyenne($scEtudiant->moyenneSemestre);
                    }

                    $scSemestre->setDecision($scEtudiant->decision);
                    $scSemestre->setProposition($scEtudiant->proposition);
                    $scSemestre->setNbAbsences($scEtudiant->nbAbsences());
                    $tUe = [];
                    foreach ($ues as $ue) {
                        if (true === $semestre->isOptPenaliteAbsence()) {
                            $tUe[$ue->getId()]['moyenne'] = $scEtudiant->moyenneUes[$ue->getNumeroUe()]->getMoyennePenalisee();
                            $tUe[$ue->getId()]['rang'] = -1;
                        } else {
                            $tUe[$ue->getId()]['moyenne'] = $scEtudiant->moyenneUes[$ue->getNumeroUe()]->getMoyenne();
                            $tUe[$ue->getId()]['rang'] = -1;
                        }
                    }
                    $scSemestre->setMoyennesUes($tUe);

                    $tMatiere = [];
                    foreach ($matieres as $matiere) {
                        if (\array_key_exists($matiere->getId(), $scEtudiant->moyenneMatieres)) {
                            if (true === $scEtudiant->moyenneMatieres[$matiere->getId()]->optionFaite) {
                                if (true === $semestre->isOptPenaliteAbsence()) {
                                    $tMatiere[$matiere->getId()]['moyenne'] = $scEtudiant->moyenneMatieres[$matiere->getId()]->getMoyennePenalisee();
                                    $tMatiere[$matiere->getId()]['rang'] = -1;
                                } else {
                                    $tMatiere[$matiere->getId()]['moyenne'] = $scEtudiant->moyenneMatieres[$matiere->getId()]->getMoyenne();
                                    $tMatiere[$matiere->getId()]['rang'] = -1;
                                }
                            } else {
                                $tMatiere[$matiere->getId()]['pasoption'] = true;
                                $tMatiere[$matiere->getId()]['rang'] = -1;
                            }
                        }
                    }
                    $scSemestre->setMoyennesMatieres($tMatiere);
                }
            }
            $this->entityManager->flush();
        }

        return new SousCommissionTravail($semestre, $anneeUniversitaire,
            $ues->getValues(), $matieres, $etudiants->getValues(), $ssComm);
    }

    private function getOrCreateScolariteEtudiant(
        $etudiant,
        Semestre $semestre,
        AnneeUniversitaire $anneeUniversitaire
    ) {
        $ssEtudiant = $this->scolariteRepository->findOneBy([
            'semestre'           => $semestre->getId(),
            'anneeUniversitaire' => $anneeUniversitaire->getId(),
        ]);
        if (null === $ssEtudiant) {
            $max = $this->entityManager->getRepository(Scolarite::class)->findOrdreMax($etudiant);
            ++$max;
            $ssEtudiant = new Scolarite($etudiant, $semestre, $anneeUniversitaire);
            $ssEtudiant->setOrdre($max);
            $this->entityManager->persist($ssEtudiant);
        }

        return $ssEtudiant;
    }

    public function efface(ScolaritePromo $ssComm)
    {
        foreach ($ssComm->getScolarites() as $scolarite) {
            $this->entityManager->remove($scolarite);
        }
        $this->entityManager->remove($ssComm);
        $this->entityManager->flush();
    }

    public function visibilite(ScolaritePromo $ssComm, $visibilite = true)
    {
        foreach ($ssComm->getScolarites() as $scolarite) {
            $scolarite->setDiffuse($visibilite);
        }
        $ssComm->setPublie($visibilite);
        if (false === $visibilite) {
            $ssComm->setDatePublication(null);
        } else {
            $ssComm->setDatePublication(new DateTime('now'));
        }

        $this->entityManager->flush();
    }
}
