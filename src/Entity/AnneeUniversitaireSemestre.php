<?php

namespace App\Entity;

use App\Repository\AnneeUniversitaireSemestreRepository;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: AnneeUniversitaireSemestreRepository::class)]
class AnneeUniversitaireSemestre extends BaseEntity
{
    #[ORM\ManyToOne(targetEntity: AnneeUniversitaire::class, inversedBy: 'anneeUniversitaireSemestres')]
    private ?AnneeUniversitaire $anneeUniversitaire;

    #[ORM\ManyToOne(targetEntity: Semestre::class, inversedBy: 'anneeUniversitaireSemestres')]
    private ?Semestre $semestre;

    #[ORM\ManyToOne(targetEntity: Ppn::class, inversedBy: 'anneeUniversitaireSemestres')]
    private ?Ppn $ppn;

    #[ORM\Column(type: 'string', length: 255, nullable: true)]
    private ?string $commentaire = '';

    public function getId(): ?int
    {
        return $this->id;
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

    public function getSemestre(): ?Semestre
    {
        return $this->semestre;
    }

    public function setSemestre(?Semestre $semestre): self
    {
        $this->semestre = $semestre;

        return $this;
    }

    public function getPpn(): ?Ppn
    {
        return $this->ppn;
    }

    public function setPpn(?Ppn $ppn): self
    {
        $this->ppn = $ppn;

        return $this;
    }

    public function getCommentaire(): ?string
    {
        return $this->commentaire;
    }

    public function setCommentaire(?string $commentaire): self
    {
        $this->commentaire = $commentaire;

        return $this;
    }
}
