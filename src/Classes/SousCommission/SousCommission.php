<?php
// Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
// @file /Users/davidannebicque/htdocs/intranetV3/src/Classes/SousCommission/SousCommission.php
// @author davidannebicque
// @project intranetV3
// @lastUpdate 19/01/2021 12:19

namespace App\Classes\SousCommission;


use App\Classes\Etudiant\EtudiantAbsences;
use App\Classes\Etudiant\EtudiantNotes;
use App\Classes\Tools;
use App\DTO\EtudiantSousCommission;
use App\DTO\MoyenneMatiere;
use App\DTO\MoyenneUe;
use App\Entity\AnneeUniversitaire;
use App\Entity\Constantes;
use App\Entity\Etudiant;
use App\Entity\Matiere;
use App\Entity\Scolarite;
use App\Entity\ScolaritePromo;
use App\Entity\Semestre;
use App\Entity\Ue;
use App\Repository\EtudiantRepository;
use App\Repository\MatiereRepository;
use App\Repository\UeRepository;
use Doctrine\ORM\EntityManagerInterface;

class SousCommission
{
    private EtudiantRepository $etudiantRepository;
    private UeRepository $ueRepository;
    private EtudiantNotes $etudiantNotes;
    private EtudiantAbsences $etudiantAbsences;

    private Semestre $semestre;

    private MatiereRepository $matiereRepository;

    /**
     * @var Matiere[]|mixed
     */
    private $matieres;

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
     *
     * @param EntityManagerInterface $entityManager
     * @param EtudiantRepository     $etudiantRepository
     * @param UeRepository           $ueRepository
     * @param MatiereRepository      $matiereRepository
     * @param EtudiantNotes          $etudiantNotes
     * @param EtudiantAbsences       $etudiantAbsences
     */
    public function __construct(
        EntityManagerInterface $entityManager,
        EtudiantRepository $etudiantRepository,
        UeRepository $ueRepository,
        MatiereRepository $matiereRepository,
        EtudiantNotes $etudiantNotes,
        EtudiantAbsences $etudiantAbsences
    ) {
        $this->entityManager = $entityManager;
        $this->etudiantRepository = $etudiantRepository;
        $this->matiereRepository = $matiereRepository;
        $this->ueRepository = $ueRepository;
        $this->etudiantNotes = $etudiantNotes;
        $this->etudiantAbsences = $etudiantAbsences;
    }

    public function calcul(Semestre $semestre, AnneeUniversitaire $anneeUniversitaire): void
    {
        $this->semestre = $semestre;
        $this->anneeUniversitaire = $anneeUniversitaire;
        $this->initDataSousCommission();

        $this->sousCommissionEtudiant = [];

        foreach ($this->etudiants as $etudiant) {
            $etudiantSousCommission = new EtudiantSousCommission($etudiant, $semestre);

            //récupérer les notes et calculer la moyenne des matières (sans pénalité)
            $this->etudiantNotes->setEtudiant($etudiant);
            $etudiantSousCommission->moyenneMatieres = $this->etudiantNotes->getMoyenneParMatiereParSemestresEtAnneeUniversitaire($semestre,
                $anneeUniversitaire);
            //récupérer les pénalités d'absence par matière
            $this->etudiantAbsences->setEtudiant($etudiant);
            $this->etudiantAbsences->getPenalitesAbsencesParMatiere($semestre, $anneeUniversitaire,
                $etudiantSousCommission->moyenneMatieres);

            //calculer la moyenne des ues (avec et sans pénalité)
            $etudiantSousCommission->moyenneUes = $this->calculMoyenneUes($etudiantSousCommission->moyenneMatieres);

            //calculer la moyenne générale selon l'option séléctionnée (avec et sans pénalité)
            if ($semestre->getDiplome() !== null) {
                if ($semestre->getDiplome()->getOptMethodeCalcul() === Constantes::MOYENNE_MODULES) {
                    $etudiantSousCommission->calculMoyenneSemestreMatiere();
                } elseif ($semestre->getDiplome()->getOptMethodeCalcul() === Constantes::MOYENNE_UES) {
                    $etudiantSousCommission->calculMoyenneSemestreUes();
                }
            }

            $etudiantSousCommission->recupereScolarite();

            //calcul de la décision du semestre
            $etudiantSousCommission->calculDecision();

            $this->sousCommissionEtudiant[$etudiant->getId()] = $etudiantSousCommission;
        }
    }

    public function initDataSousCommission()
    {
        $this->matieres = $this->matiereRepository->findBySemestre($this->semestre);
        $this->ues = $this->ueRepository->findBySemestre($this->semestre);
        $this->etudiants = $this->etudiantRepository->findBySemestre($this->semestre);

        //récupération des semestres précédents
        $sem = $this->semestre;
        while ($sem->getPrecedent() !== null) {
            $this->semestresScolarite[] = $sem->getPrecedent();
            $sem = $sem->getPrecedent();
        }
    }

    private function calculMoyenneUes(array $moyenneMatieres): array
    {
        $tabUes = [];
        foreach ($this->ues as $ue) {
            $tabUes[$ue->getId()] = new MoyenneUe($ue, $this->semestre->getOptPointPenaliteAbsence());
        }

        /** @var MoyenneMatiere $matiere */
        foreach ($moyenneMatieres as $matiere) {
            $idUe = $matiere->matiere->getUe()->getId();
            if (array_key_exists($idUe, $tabUes)) {
                $tabUes[$idUe]->addMatiere($matiere);
            }
        }
        return $tabUes;
    }

    /**
     * @return Matiere[]|mixed
     */
    public function getMatieres()
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
    public function getEtudiants()
    {
        return $this->etudiants;
    }

    /**
     * @return array
     */
    public function getSemestresScolarite(): array
    {
        return $this->semestresScolarite;
    }

    /**
     * @param $idEtudiant
     *
     * @return EtudiantSousCommission
     */
    public function getSousCommissionEtudiant($idEtudiant): EtudiantSousCommission
    {
        return $this->sousCommissionEtudiant[$idEtudiant];
    }

    /**
     * @return Semestre
     */
    public function getSemestre(): Semestre
    {
        return $this->semestre;
    }

    /**
     * @return AnneeUniversitaire
     */
    public function getAnneeUniversitaire(): AnneeUniversitaire
    {
        return $this->anneeUniversitaire;
    }

    public function updateScolarite(Scolarite $scolarite, $type, $field, $value)
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

    private function updateScolariteSemestre(Scolarite $scolarite, $field, $value)
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

    private function updateScolariteUe(Scolarite $scolarite, $field, $value)
    {
        [$code, $idUe] = explode('_', $field);
        switch ($code) {
            case 'moyenne':
                $scolarite->getMoyennesUes()[$idUe]['moyenne'] = Tools::convertToFloat($value);
                break;
        }
    }

    private function updateScolariteMatiere(Scolarite $scolarite, $field, $value)
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
        return $this->entityManager->getRepository(ScolaritePromo::class)->findOneBy(['semestre'           => $semestre->getId(),
                                                                                      'anneeUniversitaire' => $anneeUniversitaire->getId()
        ]);
    }
}
