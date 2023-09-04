<?php
/*
 * Copyright (c) 2023. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Classes/Etudiant/EtudiantScolarite.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 04/09/2023 19:25
 */

/*
 * Pull your hearder here, for exemple, Licence header.
 */

namespace App\Classes\Etudiant;

use App\Entity\AnneeUniversitaire;
use App\Entity\Constantes;
use App\Entity\Etudiant;
use App\Entity\Scolarite;
use App\Entity\Semestre;
use App\Enums\DecisionSemestreEnum;
use App\Repository\ScolariteRepository;
use Doctrine\ORM\EntityManagerInterface;

class EtudiantScolarite
{
    private Etudiant $etudiant;
    private ?Semestre $semestre = null;
    private ?AnneeUniversitaire $anneeUniversitaire = null;

    /**
     * EtudiantScolarite constructor.
     */
    public function __construct(private readonly EtudiantGroupes $etudiantsGroupes, private readonly EntityManagerInterface $entityManger, private readonly ScolariteRepository $scolariteRepository)
    {
    }

    public function setSemestre(Semestre $semestre): void
    {
        $this->semestre = $semestre;
    }

    public function setAnneeUniversitaire(AnneeUniversitaire $anneeUniversitaire): void
    {
        $this->anneeUniversitaire = $anneeUniversitaire;
    }

    public function setEtudiant(Etudiant $etudiant): void
    {
        $this->etudiant = $etudiant;
        $this->semestre = $etudiant->getSemestre();
    }

    public function changeEtat(string $etat): void
    {
        switch ($etat) {
            case Constantes::SEMESTRE_REORIENTE:
                $this->updateScolarite($etat);
                $this->finFormation();
                break;
            case Constantes::SEMESTRE_DEMISSIONNAIRE:
            case Constantes::SCOLARITE_DIPLOME:
                $this->finFormation();
                break;
            case 'erreur':
                $this->etudiant->setSemestre(null);
                $this->etudiant->setDepartement(null);
                $this->etudiantsGroupes->setEtudiant($this->etudiant);
                $this->etudiantsGroupes->suppressionGroupes();
                break;
            case Constantes::SUPPRIMER_FORMATION:
                $this->etudiant->setSemestre(null);
                $this->etudiant->setDepartement(null);
                $this->etudiant->setAnneeSortie((int) date('Y'));
                $this->etudiantsGroupes->setEtudiant($this->etudiant);
                $this->etudiantsGroupes->suppressionGroupes();
                // todo: supprimer les scolarités
                break;
        }

        $this->entityManger->persist($this->etudiant);
        $this->entityManger->flush();
    }

    private function finFormation(): void
    {
        $this->etudiant->setSemestre(null);
        $this->etudiant->setAnneeSortie((int) date('Y'));
        $this->etudiantsGroupes->setEtudiant($this->etudiant);
        $this->etudiantsGroupes->suppressionGroupes();
    }

    public function updateScolarite(
        string $etat
    ): void {
        if (null !== $this->semestre) {
            $scolarite = $this->scolariteRepository->findOneBy([
                'semestre' => $this->semestre->getId(),
                'anneeUniversitaire' => $this->anneeUniversitaire->getId(),
                'etudiant' => $this->etudiant->getId(),
            ]);

            if (null === $scolarite) {
                // si non ??? Créer mais comment associer à une sous-comm?
                $scolarite = new Scolarite($this->etudiant, $this->semestre, $this->anneeUniversitaire);
            }
//todo: possible de manipuler DecisionEnum tout le long ?
            $scolarite->setDecision(DecisionSemestreEnum::tryFrom($this->getDecisionFromEtat($etat)));
            $scolarite->setProposition($etat);
            $this->entityManger->persist($scolarite);
        }
    }

    private function getDecisionFromEtat(string $etat): string
    {
        if (Constantes::SCOLARITE_DIPLOME === $etat) {
            return Constantes::SEMESTRE_VALIDE;
        }

        return Constantes::SEMESTRE_NON_VALIDE;
    }
}
