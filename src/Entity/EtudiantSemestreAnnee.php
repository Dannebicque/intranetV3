<?php
/*
 * Copyright (c) 2026. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Entity/EtudiantSemestreAnnee.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 28/08/2026 10:14
 */

namespace App\Entity;

use App\Repository\EtudiantSemestreAnneeRepository;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: EtudiantSemestreAnneeRepository::class)]
#[ORM\Table(name: 'etudiant_semestre_annee')]
#[ORM\UniqueConstraint(name: 'UNIQ_ETU_SEM_ANN', columns: ['etudiant_id', 'semestre_id', 'annee_universitaire_id'])]
class EtudiantSemestreAnnee extends BaseEntity
{
    #[ORM\ManyToOne(targetEntity: Etudiant::class, inversedBy: 'etudiantSemestreAnnees')]
    #[ORM\JoinColumn(nullable: false, onDelete: 'CASCADE')]
    private ?Etudiant $etudiant = null;

    #[ORM\ManyToOne(targetEntity: Semestre::class, inversedBy: 'etudiantSemestreAnnees')]
    #[ORM\JoinColumn(nullable: false, onDelete: 'CASCADE')]
    private ?Semestre $semestre = null;

    #[ORM\ManyToOne(targetEntity: AnneeUniversitaire::class)]
    #[ORM\JoinColumn(nullable: false)]
    private ?AnneeUniversitaire $anneeUniversitaire = null;

    public function getEtudiant(): ?Etudiant
    {
        return $this->etudiant;
    }

    public function setEtudiant(?Etudiant $etudiant): self
    {
        $this->etudiant = $etudiant;

        return $this;
    }

    public function getSemestre(): ?Semestre
    {
        return $this->semestre;
    }

    public function setSemestre(?Semestre $semestre): self
    {
        $this->semestre = $semestre;

        return $this;
    }

    public function getAnneeUniversitaire(): ?AnneeUniversitaire
    {
        return $this->anneeUniversitaire;
    }

    public function setAnneeUniversitaire(?AnneeUniversitaire $anneeUniversitaire): self
    {
        $this->anneeUniversitaire = $anneeUniversitaire;

        return $this;
    }
}
