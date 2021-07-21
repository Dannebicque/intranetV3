<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Entity/Borne.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 29/06/2021 09:03
 */

namespace App\Entity;

use App\Entity\Traits\LifeCycleTrait;
use Carbon\Carbon;
use Carbon\CarbonInterface;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Serializer\Annotation\Groups;

/**
 * @ORM\Entity(repositoryClass="App\Repository\BorneRepository")
 * @ORM\HasLifecycleCallbacks()
 */
class Borne extends BaseEntity
{
    use LifeCycleTrait;

    public const ICONES = [
        'information' => 'fas fa-info-circle',
        'danger' => 'fas fa-exclamation-circle',
        'demande' => 'fas fa-question-circle',
    ];

    public const ICONES_CHOICE = [
        'fas fa-info-circle' => 'fas fa-info-circle',
        'fas fa-exclamation-circle' => 'fas fa-exclamation-circle',
        'fas fa-question-circle' => 'fas fa-question-circle',
    ];
    public const COULEURS = ['Rouge' => '#FF0000', 'Vert' => '#00FF00', 'Bleu' => '#0000FF'];

    /**
     * @ORM\Column(type="string", length=40)
     * @Groups({"bornes_administration"})
     */
    private ?string $icone;

    /**
     * @ORM\Column(type="string", length=20)
     * @Groups({"bornes_administration"})
     */
    private ?string $couleur;

    /**
     * @ORM\Column(type="text")
     * @Groups({"bornes_administration"})
     */
    private ?string $message;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     * @Groups({"bornes_administration"})
     */
    private ?string $url;

    /**
     * @ORM\Column(type="datetime")
     * @Groups({"bornes_administration"})
     */
    private ?CarbonInterface $dateDebutPublication;

    /**
     * @ORM\Column(type="datetime")
     * @Groups({"bornes_administration"})
     */
    private ?CarbonInterface $dateFinPublication;

    /**
     * @ORM\Column(type="boolean")
     * @Groups({"bornes_administration"})
     */
    private ?bool $visible = true;

    /**
     * @ORM\ManyToMany(targetEntity="App\Entity\Semestre", inversedBy="bornes")
     * @Groups({"bornes_administration"})
     */
    private Collection $semestres;

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
}
