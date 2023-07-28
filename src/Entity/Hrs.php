<?php
/*
 * Copyright (c) 2023. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Entity/Hrs.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 26/07/2023 15:53
 */

namespace App\Entity;

use App\Entity\Traits\LifeCycleTrait;
use App\Repository\HrsRepository;
use Doctrine\DBAL\Types\Types;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Serializer\Annotation\Groups;

#[ORM\Entity(repositoryClass: HrsRepository::class)]
class Hrs extends BaseEntity
{
    use LifeCycleTrait;

    #[Groups(groups: ['hrs_administration'])]
    #[ORM\Column(type: Types::FLOAT)]
    private ?float $nbHeuresTd = 0.0;

    #[Groups(groups: ['hrs_administration'])]
    #[ORM\Column(type: Types::STRING, length: 150)]
    private ?string $libelle = null;

    #[Groups(groups: ['hrs_administration'])]
    #[ORM\ManyToOne(targetEntity: Semestre::class, inversedBy: 'hrs')]
    private ?Semestre $semestre = null;

    #[ORM\ManyToOne(targetEntity: Diplome::class, inversedBy: 'hrs')]
    private ?Diplome $diplome = null;

    #[Groups(groups: ['hrs_administration'])]
    #[ORM\ManyToOne(targetEntity: Personnel::class, inversedBy: 'hrs')]
    private ?Personnel $personnel = null;

    #[Groups(groups: ['hrs_administration'])]
    #[ORM\ManyToOne(targetEntity: TypeHrs::class, inversedBy: 'hrs')]
    private ?TypeHrs $typeHrs = null;

    #[ORM\Column(type: Types::STRING, length: 255, nullable: true)]
    private ?string $commentaire = null;

    public function __construct(#[ORM\ManyToOne(targetEntity: Departement::class, inversedBy: 'hrs')] private ?Departement $departement, #[ORM\Column(type: Types::INTEGER)] private ?int $annee)
    {
    }

    public function getNbHeuresTd(): ?float
    {
        return $this->nbHeuresTd;
    }

    public function setNbHeuresTd(float $nbHeuresTd): self
    {
        $this->nbHeuresTd = $nbHeuresTd;

        return $this;
    }

    public function getPersonnel(): ?Personnel
    {
        return $this->personnel;
    }

    public function setPersonnel(?Personnel $personnel): self
    {
        $this->personnel = $personnel;

        return $this;
    }

    public function getTypeHrs(): ?TypeHrs
    {
        return $this->typeHrs;
    }

    public function setTypeHrs(?TypeHrs $typeHrs): self
    {
        $this->typeHrs = $typeHrs;

        return $this;
    }

    public function getLibelle(): ?string
    {
        return $this->libelle;
    }

    public function setLibelle(?string $libelle = '-'): void
    {
        $this->libelle = $libelle;
    }

    public function getAnnee(): ?int
    {
        return $this->annee;
    }

    public function setAnnee(int $annee): self
    {
        $this->annee = $annee;

        return $this;
    }

    public function getDepartement(): ?Departement
    {
        return $this->departement;
    }

    public function setDepartement(?Departement $departement): self
    {
        $this->departement = $departement;

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

    public function semestreOrDiplome(): ?string
    {
        if (null !== $this->getDiplome() && null === $this->getSemestre()) {
            return $this->getDiplome()->getDisplay();
        }

        if (null === $this->getDiplome() && null !== $this->getSemestre()) {
            return $this->getSemestre()->getLibelle();
        }

        return '-err-';
    }

    public function getDiplome(): ?Diplome
    {
        return $this->diplome;
    }

    public function setDiplome(?Diplome $diplome): self
    {
        $this->diplome = $diplome;

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
}
