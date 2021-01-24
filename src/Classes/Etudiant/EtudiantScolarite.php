<?php
// Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
// @file /Users/davidannebicque/htdocs/intranetV3/src/Classes/Etudiant/EtudiantScolarite.php
// @author davidannebicque
// @project intranetV3
// @lastUpdate 24/01/2021 17:35

namespace App\Classes\Etudiant;


use App\Entity\AnneeUniversitaire;
use App\Entity\Constantes;
use App\Entity\Etudiant;
use App\Entity\Scolarite;
use App\Entity\Semestre;
use App\Repository\ScolariteRepository;
use Doctrine\ORM\EntityManagerInterface;

class EtudiantScolarite
{

    private Etudiant $etudiant;
    private ?Semestre $semestre;
    private AnneeUniversitaire $anneeUniversitaire;
    private EtudiantGroupes $etudiantsGroupes;
    private EntityManagerInterface $entityManger;
    private ScolariteRepository $scolariteRepository;

    /**
     * EtudiantScolarite constructor.
     *
     * @param EtudiantGroupes        $etudiantsGroupes
     * @param EntityManagerInterface $entityManger
     */
    public function __construct(
        EtudiantGroupes $etudiantsGroupes,
        EntityManagerInterface $entityManger,
        ScolariteRepository $scolariteRepository
    ) {
        $this->etudiantsGroupes = $etudiantsGroupes;
        $this->entityManger = $entityManger;
        $this->scolariteRepository = $scolariteRepository;
    }

    /**
     * @param Semestre $semestre
     */
    public function setSemestre(Semestre $semestre): void
    {
        $this->semestre = $semestre;
    }

    /**
     * @param AnneeUniversitaire $anneeUniversitaire
     */
    public function setAnneeUniversitaire(AnneeUniversitaire $anneeUniversitaire): void
    {
        $this->anneeUniversitaire = $anneeUniversitaire;
    }


    public function setEtudiant(Etudiant $etudiant): void
    {
        $this->etudiant = $etudiant;
        $this->semestre = $etudiant->getSemestre();
    }

    public function changeEtat($etat): void
    {

        switch ($etat) {
            case Constantes::SCOLARITE_DIPLOME:
            case Constantes::SEMESTRE_DEMISSIONNAIRE:
            case Constantes::SEMESTRE_REORIENTE:
            $this->updateScolarite($etat);
            $this->finFormation();
                break;
            case 'erreur':
                $this->etudiant->setSemestre(null);
                $this->etudiant->setDepartement(null);
                $this->etudiantsGroupes->setEtudiant($this->etudiant);
                $this->etudiantsGroupes->suppressionGroupes();
                break;
        }

        $this->entityManger->persist($this->etudiant);
        $this->entityManger->flush();

    }

    private function finFormation(): void
    {
        $this->etudiant->setSemestre(null);
        $this->etudiant->setAnneeSortie(date('Y'));
        $this->etudiantsGroupes->setEtudiant($this->etudiant);
        $this->etudiantsGroupes->suppressionGroupes();
    }

    public function updateScolarite(
        $etat
    ) {
        if ($this->semestre !== null) {
            $scolarite = $this->scolariteRepository->findOneBy([
                'semestre'           => $this->semestre->getId(),
                'anneeUniversitaire' => $this->anneeUniversitaire->getId(),
                'etudiant'           => $this->etudiant->getId()
            ]);

            if ($scolarite === null) {
                //si non ??? Créer mais comment associer à une sous-comm?
                $scolarite = new Scolarite($this->etudiant, $this->semestre, $this->anneeUniversitaire);
            }

            $scolarite->setDecision($this->getDecisionFromEtat($etat));
            $scolarite->setProposition($etat);
            $this->entityManger->persist($scolarite);
        }
    }

    private function getDecisionFromEtat($etat)
    {
        if ($etat === Constantes::SCOLARITE_DIPLOME) {
            return Constantes::SEMESTRE_VALIDE;
        }

        return Constantes::SEMESTRE_NON_VALIDE;
    }
}
