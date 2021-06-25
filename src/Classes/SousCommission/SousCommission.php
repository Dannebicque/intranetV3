<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Classes/SousCommission/SousCommission.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 21/06/2021 18:28
 */

namespace App\Classes\SousCommission;

use App\Classes\Etudiant\EtudiantAbsences;
use App\Classes\Etudiant\EtudiantNotes;
use App\Classes\Matieres\TypeMatiereManager;
use App\DTO\EtudiantSousCommission;
use App\DTO\MoyenneMatiere;
use App\DTO\MoyenneUe;
use App\DTO\StatitiquesBac;
use App\Entity\AnneeUniversitaire;
use App\Entity\Constantes;
use App\Entity\Etudiant;
use App\Entity\Scolarite;
use App\Entity\ScolaritePromo;
use App\Entity\Semestre;
use App\Entity\Ue;
use App\Repository\EtudiantRepository;
use App\Repository\UeRepository;
use App\Utils\Tools;
use Doctrine\ORM\EntityManagerInterface;
use function array_key_exists;

class SousCommission
{
    private EtudiantRepository $etudiantRepository;
    private UeRepository $ueRepository;
    private EtudiantNotes $etudiantNotes;
    private EtudiantAbsences $etudiantAbsences;

    private Semestre $semestre;

    private TypeMatiereManager $typeMatiereManager;

    private array $matieres;

    /**
     * @var Ue[]
     */
    private array $ues;

    private AnneeUniversitaire $anneeUniversitaire;

    /**
     * @var Semestre[]
     */
    private array $semestresScolarite = [];

    /**
     * @var Etudiant[]|array
     */
    private array $etudiants;
    private array $sousCommissionEtudiant;

    private EntityManagerInterface $entityManager;

    /**
     * SousCommission constructor.
     */
    public function __construct(
        EntityManagerInterface $entityManager,
        EtudiantRepository $etudiantRepository,
        UeRepository $ueRepository,
        TypeMatiereManager $typeMatiereManager,
        EtudiantNotes $etudiantNotes,
        EtudiantAbsences $etudiantAbsences
    ) {
        $this->entityManager = $entityManager;
        $this->etudiantRepository = $etudiantRepository;
        $this->typeMatiereManager = $typeMatiereManager;
        $this->ueRepository = $ueRepository;
        $this->etudiantNotes = $etudiantNotes;
        $this->etudiantAbsences = $etudiantAbsences;
    }

    public function calcul(Semestre $semestre, AnneeUniversitaire $anneeUniversitaire): void
    {
        $this->semestre = $semestre;
        $this->anneeUniversitaire = $anneeUniversitaire;
        $this->initDataSousCommission();
        $matieres = $this->typeMatiereManager->findBySemestre($semestre);

        $this->sousCommissionEtudiant = [];

        foreach ($this->etudiants as $etudiant) {
            $etudiantSousCommission = new EtudiantSousCommission($etudiant, $semestre);

            //récupérer les notes et calculer la moyenne des matières (sans pénalité)
            $this->etudiantNotes->setEtudiant($etudiant);
            $etudiantSousCommission->moyenneMatieres = $this->etudiantNotes->getMoyenneParMatiereParSemestresEtAnneeUniversitaire($matieres,
                $this->semestre,
                $anneeUniversitaire);
            //récupérer les pénalités d'absence par matière
            $this->etudiantAbsences->setEtudiant($etudiant);
            $this->etudiantAbsences->getPenalitesAbsencesParMatiere($matieres, $anneeUniversitaire,
                $etudiantSousCommission->moyenneMatieres);
            //calculer la moyenne des ues (avec et sans pénalité)
            $etudiantSousCommission->moyenneUes = $this->calculMoyenneUes($etudiantSousCommission->moyenneMatieres);

            //calculer la moyenne générale selon l'option séléctionnée (avec et sans pénalité)
            if (null !== $semestre->getDiplome()) {
                if (Constantes::METHODE_CALCUL_MOY_MODULE === $semestre->getDiplome()->getOptMethodeCalcul()) {
                    $etudiantSousCommission->calculMoyenneSemestreMatiere();
                } elseif (Constantes::METHODE_CALCUL_MOY_UE === $semestre->getDiplome()->getOptMethodeCalcul()) {
                    $etudiantSousCommission->calculMoyenneSemestreUes();
                }
            }

            $etudiantSousCommission->recupereScolarite();

            //calcul de la décision du semestre
            $etudiantSousCommission->calculDecision();

            $this->sousCommissionEtudiant[$etudiant->getId()] = $etudiantSousCommission;
        }
    }

    public function initDataSousCommission(): void
    {
        $this->matieres = $this->typeMatiereManager->findBySemestre($this->semestre);
        $this->ues = $this->ueRepository->findBySemestre($this->semestre);
        $this->etudiants = $this->etudiantRepository->findBySemestre($this->semestre);

        //récupération des semestres précédents
        $sem = $this->semestre;
        while (null !== $sem->getPrecedent()) {
            $this->semestresScolarite[] = $sem->getPrecedent();
            $sem = $sem->getPrecedent();
        }
    }

    private function calculMoyenneUes(array $moyenneMatieres): array
    {
        //todo: attention notion d'UE différente...

        $tabUes = [];
        foreach ($this->ues as $ue) {
            $tabUes[$ue->getNumeroUe()] = new MoyenneUe($ue, $this->semestre->getOptPointPenaliteAbsence());
        }

        /** @var MoyenneMatiere $matiere */
        foreach ($moyenneMatieres as $matiere) {
            $idUe = $matiere->matiere->ue_numero;
            if (array_key_exists($idUe, $tabUes)) {
                $tabUes[$idUe]->addMatiere($matiere);
            }
        }

        return $tabUes;
    }

    public function getMatieres(): array
    {
        return $this->matieres;
    }

    /**
     * @return Ue[]
     */
    public function getUes(): array
    {
        return $this->ues;
    }

    /**
     * @return Etudiant[]|array
     */
    public function getEtudiants(): array
    {
        return $this->etudiants;
    }

    public function getSemestresScolarite(): array
    {
        return $this->semestresScolarite;
    }

    /**
     * @param $idEtudiant
     *
     * @return EtudiantSousCommission
     */
    public function getSousCommissionEtudiant($idEtudiant): ?EtudiantSousCommission
    {
        return $this->sousCommissionEtudiant[$idEtudiant];
    }

    public function getSemestre(): Semestre
    {
        return $this->semestre;
    }

    public function getAnneeUniversitaire(): AnneeUniversitaire
    {
        return $this->anneeUniversitaire;
    }

    public function updateScolarite(Scolarite $scolarite, $type, $field, $value): void
    {
        switch ($type) {
            case 'semestre':
                $this->updateScolariteSemestre($scolarite, $field, $value);
                break;
            case 'ue':
                $this->updateScolariteUe($scolarite, $field, $value);
                break;
            case 'matiere':
                $this->updateScolariteMatiere($scolarite, $field, $value);
                break;
        }
        $this->entityManager->flush();
    }

    private function updateScolariteSemestre(Scolarite $scolarite, $field, $value): void
    {
        switch ($field) {
            case 'decision':
                $scolarite->setDecision($value);
                break;
            case 'proposition':
                $scolarite->setProposition($value);
                break;
            case 'moyenne':
                $scolarite->setMoyenne(Tools::convertToFloat($value));
                break;
        }
    }

    private function updateScolariteUe(Scolarite $scolarite, $field, $value): void
    {
        [$code, $idUe] = explode('_', $field);
        switch ($code) {
            case 'moyenne':
                $scolarite->getMoyennesUes()[$idUe]['moyenne'] = Tools::convertToFloat($value);
                break;
        }
    }

    private function updateScolariteMatiere(Scolarite $scolarite, $field, $value): void
    {
        [$code, $idMatiere] = explode('_', $field);
        switch ($code) {
            case 'moyenne':
                $scolarite->getMoyennesMatieres()[$idMatiere]['moyenne'] = Tools::convertToFloat($value);
                break;
        }
    }

    public function getBySemestreAnneeUniversitaire(Semestre $semestre, AnneeUniversitaire $anneeUniversitaire)
    {
        return $this->entityManager->getRepository(ScolaritePromo::class)->findOneBy([
            'semestre' => $semestre->getId(),
            'anneeUniversitaire' => $anneeUniversitaire->getId(),
        ]);
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
}
