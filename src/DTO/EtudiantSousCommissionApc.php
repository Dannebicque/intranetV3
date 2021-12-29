<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/DTO/EtudiantSousCommission.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 08/10/2021 19:44
 */

namespace App\DTO;

use App\Entity\Constantes;
use App\Entity\Etudiant;
use App\Entity\Semestre;
use function array_key_exists;
use function count;
use function in_array;

class EtudiantSousCommissionApc
{
    /** @var MoyenneMatiere[] */
    public array $moyenneMatieres;

    /** @var \App\DTO\MoyenneUeApc[] */
    private array $moyenneUes;

    public float $bonif = 0;
    public string $decision = '';
    public string $conseil = '';//todo: information sur les enjeux du S"pair"
    public string $proposition = '';
    public array $scolarite = [];

    /**
     * EtudiantSousCommissionApc constructor.
     */
    public function __construct(
        public Etudiant $etudiant, public Semestre $semestre)
    {
    }


    public function calculDecision(): void
    {

    }

    //todo: extension twig ?
    private function styleMoyenne(float $note): string
    {
        if ($note <= Constantes::SEUIL_MOYENNE) {
            return 'badge badge-danger';
        }

        return '';
    }
//todo: extension twig ?
    public function getStyleMoyenneSemestrePenalisee()
    {
        return $this->styleMoyenne($this->moyenneSemestrePenalisee);
    }
//todo: extension twig ?
    public function getDecisionStyle(): string
    {
        return match ($this->decision) {
            Constantes::SEMESTRE_VALIDE => 'badge badge-success',
            Constantes::SEMESTRE_NON_VALIDE => 'badge badge-danger',
            Constantes::SEMESTRE_VCA, Constantes::SEMESTRE_VCJ => 'badge badge-warning',
            default => '',
        };
    }
//todo: extension twig ?
    public function getAbsencesStyle()
    {
        $nbAbsences = $this->nbAbsences();
        if ($nbAbsences < 5) {
            return '';
        }

        if ($nbAbsences < 10) {
            return 'badge badge-warning';
        }

        return 'badge badge-danger';
    }

    public function nbAbsences()
    {
        $nbAbsences = 0;
        foreach ($this->moyenneMatieres as $moyenneMatiere) {
            $nbAbsences += $moyenneMatiere->absences;
        }

        return $nbAbsences;
    }

    public function getNbSemestres()
    {
        return count($this->scolarite);
    }

    public function getScolarite(): array
    {
        return $this->scolarite;
    }

    public function recupereScolarite(): void
    {
        //on ne récupère la scolarité que par rapport au diplôme en cours
        foreach ($this->etudiant->getScolarites() as $scolarite) {
            if ($scolarite->getSemestre()->getDiplome() === $this->etudiant->getDiplome()) {
                $this->scolarite[$scolarite->getSemestre()->getOrdreLmd()] = new Scolarite($scolarite);
            }
        }
    }

    public function getMoyenneUes(): array
    {
        return $this->moyenneUes['ues'];
    }

    public function setMoyenneUes(array $calculMoyenneApcSemestre)
    {
        $this->moyenneUes = $calculMoyenneApcSemestre;
    }
}
