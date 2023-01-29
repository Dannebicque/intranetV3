<?php
/*
 * Copyright (c) 2023. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Classes/SousCommission/SousCommissionApc.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 29/01/2023 10:01
 */

namespace App\Classes\SousCommission;

use App\Classes\Etudiant\EtudiantAbsences;
use App\Classes\Etudiant\EtudiantNotes;
use App\Classes\Matieres\TypeMatiereManager;
use App\DTO\EtudiantSousCommissionApc;
use App\DTO\StatitiquesBac;
use App\Entity\AnneeUniversitaire;
use App\Entity\ScolaritePromo;
use App\Entity\Semestre;
use App\Repository\ApcRessourceCompetenceRepository;
use App\Repository\ApcSaeCompetenceRepository;
use App\Repository\EtudiantRepository;
use App\Repository\UeRepository;
use Doctrine\ORM\EntityManagerInterface;

class SousCommissionApc extends AbstractSousCommission implements SousCommissionInterface
{
    final public const TEMPLATE_LIVE = 'liveApc.html.twig';
    final public const TEMPLATE_TRAVAIL = 'travailApc.html.twig';

    public function __construct(
        EntityManagerInterface $entityManager,
        EtudiantRepository $etudiantRepository,
        UeRepository $ueRepository,
        TypeMatiereManager $typeMatiereManager,
        EtudiantNotes $etudiantNotes,
        EtudiantAbsences $etudiantAbsences,
        private readonly ApcRessourceCompetenceRepository $apcRessourceCompetenceRepository,
        private readonly ApcSaeCompetenceRepository $apcSaeCompetenceRepository
    ) {
        parent::__construct($entityManager, $etudiantRepository, $ueRepository, $typeMatiereManager, $etudiantNotes,
            $etudiantAbsences);
    }

    public function calcul(Semestre $semestre, AnneeUniversitaire $anneeUniversitaire): void
    {
        $this->semestre = $semestre;
        $uesSemestrePrecedent = [];
        $ressources = $this->apcRessourceCompetenceRepository->findBySemestreArray($semestre);
        $saes = $this->apcSaeCompetenceRepository->findBySemestreArray($semestre);

        $this->anneeUniversitaire = $anneeUniversitaire;
        $this->initDataSousCommission();


        $this->sousCommissionEtudiant = [];
        if ($semestre->isPair()) {
            $uesSemestrePrecedent = $semestre->getPrecedent()?->getUes();
        }

        foreach ($this->etudiants as $etudiant) {
            $etudiantSousCommission = new EtudiantSousCommissionApc($etudiant, $semestre, $this->ues,
                $uesSemestrePrecedent);

            // récupérer les notes et calculer la moyenne des matières (sans pénalité)
            $this->etudiantNotes->setEtudiant($etudiant);
            $etudiantSousCommission->moyenneMatieres = $this->etudiantNotes->getMoyenneParMatiereParSemestresEtAnneeUniversitaire($this->matieres,
                $this->semestre,
                $anneeUniversitaire);
            // récupérer les pénalités d'absence par matière
            $this->etudiantAbsences->setEtudiant($etudiant);
            $this->etudiantAbsences->getPenalitesAbsencesParMatiere($this->matieres, $anneeUniversitaire,
                $etudiantSousCommission->moyenneMatieres);
            // calculer la moyenne des ues (avec et sans pénalité)
            $etudiantSousCommission->calculMoyenneUes($this->matieres, $ressources, $saes);
            $etudiantSousCommission->recupereScolarite();
            // calcul de la décision du semestre
            $etudiantSousCommission->calculDecision();

            if ($semestre->isPair()) {
                // semestre pair, on calcule le bilan de l'année
                $etudiantSousCommission->calculMoyennesAnnee();
                $etudiantSousCommission->calculDecisionAnnee();
            }

            $this->sousCommissionEtudiant[$etudiant->getId()] = $etudiantSousCommission;
        }
    }

    public function calculStats(array $bacs): array
    {
        $tStats = [];
        foreach ($bacs as $bac) {
            $tStats[$bac->getId()] = new StatitiquesBac();
        }
        $tStats['global'] = new StatitiquesBac();

        return $tStats;
    }

    public function getSousCommissionEtudiant(int $idEtudiant): ?EtudiantSousCommissionApc
    {
        return $this->sousCommissionEtudiant[$idEtudiant];
    }

    public function getBySemestreAnneeUniversitaire(
        Semestre $semestre,
        AnneeUniversitaire $anneeUniversitaire
    ): ?ScolaritePromo {
        return $this->entityManager->getRepository(ScolaritePromo::class)->findOneBy([
            'semestre' => $semestre->getId(),
            'anneeUniversitaire' => $anneeUniversitaire->getId(),
        ]);
    }
}
