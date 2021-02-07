<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Entity/Borne.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 07/02/2021 11:20
 */

namespace App\Entity;

use DateTime;
use DateTimeInterface;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Serializer\Annotation\Groups;

/**
 * @ORM\Entity(repositoryClass="App\Repository\BorneRepository")
 */
class Borne extends BaseEntity
{
    public const ICONES = [
        'information' => 'fas fa-info-circle',
        'danger'      => 'fas fa-exclamation-circle',
        'demande'     => 'fas fa-question-circle',
    ];
    public const COULEURS = ['Rouge' => '#FF0000', 'Vert' => '#00FF00', 'Bleu' => '#0000FF'];

    /**
     * @ORM\Column(type="string", length=20)
     * @Groups({"bornes_administration"})
     */
    private $icone;

    /**
     * @ORM\Column(type="string", length=20)
     * @Groups({"bornes_administration"})
     */
    private $couleur;

    /**
     * @ORM\Column(type="text")
     * @Groups({"bornes_administration"})
     */
    private $message;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     * @Groups({"bornes_administration"})
     */
    private $url;

    /**
     * @ORM\Column(type="datetime")
     * @Groups({"bornes_administration"})
     */
    private $dateDebutPublication;

    /**
     * @ORM\Column(type="datetime")
     * @Groups({"bornes_administration"})
     */
    private $dateFinPublication;

    /**
     * @ORM\Column(type="boolean")
     * @Groups({"bornes_administration"})
     */
    private $visible;

    /**
     * @ORM\ManyToMany(targetEntity="App\Entity\Semestre", inversedBy="bornes")
     * @Groups({"bornes_administration"})
     */
    private $semestres;

    public function __construct()
    {
        $this->semestres = new ArrayCollection();
        $this->dateDebutPublication = new DateTime();
        $this->dateFinPublication = new DateTime();
    }

    public function getIcone(): ?string
    {
        return $this->icone;
    }

    /**
     * @return Borne
     */
    public function setIcone(string $icone): self
    {
        $this->icone = $icone;

        return $this;
    }

    public function getCouleur(): ?string
    {
        return $this->couleur;
    }

    /**
     * @return Borne
     */
    public function setCouleur(string $couleur): self
    {
        $this->couleur = $couleur;

        return $this;
    }

    public function getMessage(): ?string
    {
        return $this->message;
    }

    /**
     * @return Borne
     */
    public function setMessage(string $message): self
    {
        $this->message = $message;

        return $this;
    }

    public function getUrl(): ?string
    {
        return $this->url;
    }

    /**
     * @return Borne
     */
    public function setUrl(string $url): self
    {
        $this->url = $url;

        return $this;
    }

    public function getDateDebutPublication(): ?DateTimeInterface
    {
        return $this->dateDebutPublication;
    }

    /**
     * @return Borne
     */
    public function setDateDebutPublication(DateTimeInterface $dateDebutPublication): self
    {
        $this->dateDebutPublication = $dateDebutPublication;

        return $this;
    }

    public function getDateFinPublication(): ?DateTimeInterface
    {
        return $this->dateFinPublication;
    }

    /**
     * @return Borne
     */
    public function setDateFinPublication(DateTimeInterface $dateFinPublication): self
    {
        $this->dateFinPublication = $dateFinPublication;

        return $this;
    }

    public function getVisible(): ?bool
    {
        return $this->visible;
    }

    /**
     * @return Borne
     */
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

    /**
     * @return Borne
     */
    public function addSemestre(Semestre $semestre): self
    {
        if (!$this->semestres->contains($semestre)) {
            $this->semestres[] = $semestre;
        }

        return $this;
    }

    /**
     * @return Borne
     */
    public function removeSemestre(Semestre $semestre): self
    {
        if ($this->semestres->contains($semestre)) {
            $this->semestres->removeElement($semestre);
        }

        return $this;
    }
}
