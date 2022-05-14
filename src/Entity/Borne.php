<?php
/*
 * Copyright (c) 2022. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Entity/Borne.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 14/05/2022 10:52
 */

namespace App\Entity;

use App\Entity\Traits\LifeCycleTrait;
use App\Repository\BorneRepository;
use Carbon\Carbon;
use Carbon\CarbonInterface;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\DBAL\Types\Types;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Serializer\Annotation\Groups;

#[ORM\Entity(repositoryClass: BorneRepository::class)]
#[ORM\HasLifecycleCallbacks]
class Borne extends BaseEntity
{
    use LifeCycleTrait;

    // todo: mettre Enum...
    final public const ICONES = [
        'information' => 'fas fa-info-circle',
        'danger' => 'fas fa-exclamation-circle',
        'demande' => 'fas fa-question-circle',
    ];

    final public const ICONES_CHOICE = [
        'fas fa-info-circle' => 'fas fa-info-circle',
        'fas fa-exclamation-circle' => 'fas fa-exclamation-circle',
        'fas fa-question-circle' => 'fas fa-question-circle',
    ];

    final public const COULEURS = ['Rouge' => '#FF0000', 'Vert' => '#00FF00', 'Bleu' => '#0000FF'];

    #[Groups(groups: ['bornes_administration'])]
    #[ORM\Column(type: Types::STRING, length: 40)]
    private ?string $icone = null;

    #[Groups(groups: ['bornes_administration'])]
    #[ORM\Column(type: Types::STRING, length: 20)]
    private ?string $couleur = null;

    #[Groups(groups: ['bornes_administration'])]
    #[ORM\Column(type: Types::TEXT)]
    private ?string $message = null;

    #[Groups(groups: ['bornes_administration'])]
    #[ORM\Column(type: Types::STRING, length: 255, nullable: true)]
    private ?string $url = null;

    #[Groups(groups: ['bornes_administration'])]
    #[ORM\Column(type: Types::DATETIME_MUTABLE)]
    private ?CarbonInterface $dateDebutPublication;

    #[Groups(groups: ['bornes_administration'])]
    #[ORM\Column(type: Types::DATETIME_MUTABLE)]
    private ?CarbonInterface $dateFinPublication;

    #[Groups(groups: ['bornes_administration'])]
    #[ORM\Column(type: Types::BOOLEAN)]
    private ?bool $visible = true;

    #[Groups(groups: ['bornes_administration'])]
    #[ORM\ManyToMany(targetEntity: Semestre::class, inversedBy: 'bornes')]
    private Collection $semestres;

    #[ORM\ManyToOne(targetEntity: Departement::class, inversedBy: 'bornes')]
    private ?Departement $departement = null;

    public function __construct()
    {
        $this->semestres = new ArrayCollection();
        $this->dateDebutPublication = Carbon::now();
        $this->dateFinPublication = Carbon::now();
    }

    public function getIcone(): ?string
    {
        return $this->icone;
    }

    public function setIcone(string $icone): self
    {
        $this->icone = $icone;

        return $this;
    }

    public function getCouleur(): ?string
    {
        return $this->couleur;
    }

    public function setCouleur(string $couleur): self
    {
        $this->couleur = $couleur;

        return $this;
    }

    public function getMessage(): ?string
    {
        return $this->message;
    }

    public function setMessage(string $message): self
    {
        $this->message = $message;

        return $this;
    }

    public function getUrl(): ?string
    {
        return $this->url;
    }

    public function setUrl(string $url): self
    {
        $this->url = $url;

        return $this;
    }

    public function getDateDebutPublication(): ?CarbonInterface
    {
        return $this->dateDebutPublication;
    }

    public function setDateDebutPublication(CarbonInterface $dateDebutPublication): self
    {
        $this->dateDebutPublication = $dateDebutPublication;

        return $this;
    }

    public function getDateFinPublication(): ?CarbonInterface
    {
        return $this->dateFinPublication;
    }

    public function setDateFinPublication(CarbonInterface $dateFinPublication): self
    {
        $this->dateFinPublication = $dateFinPublication;

        return $this;
    }

    public function getVisible(): ?bool
    {
        return $this->visible;
    }

    public function setVisible(bool $visible): self
    {
        $this->visible = $visible;

        return $this;
    }

    /**
     * @return Collection|Semestre[]
     */
    public function getSemestres(): Collection
    {
        return $this->semestres;
    }

    public function addSemestre(Semestre $semestre): self
    {
        if (!$this->semestres->contains($semestre)) {
            $this->semestres[] = $semestre;
        }

        return $this;
    }

    public function removeSemestre(Semestre $semestre): self
    {
        if ($this->semestres->contains($semestre)) {
            $this->semestres->removeElement($semestre);
        }

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
}
