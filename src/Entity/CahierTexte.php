<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Entity/CahierTexte.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 09/05/2021 14:41
 */

namespace App\Entity;

use App\Entity\Traits\LifeCycleTrait;
use DateTimeInterface;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Serializer\Annotation\Groups;

/**
 * @ORM\Entity(repositoryClass="App\Repository\CahierTexteRepository")
 * @ORM\HasLifecycleCallbacks()
 */
class CahierTexte extends BaseEntity
{
    use LifeCycleTrait;

    /**
     * @ORM\Column(type="string", length=150)
     * @Groups({"carnet_personnel"})
     */
    private $libelle;

    /**
     * @ORM\Column(type="text")
     * @Groups({"carnet_personnel"})
     */
    private $description;

    /**
     * @ORM\Column(type="datetime")
     * @Groups({"carnet_personnel"})
     */
    private $dateRetour;

    /**
     * @ORM\ManyToOne(targetEntity="App\Entity\Personnel", inversedBy="cahierTextes")
     * @Groups({"carnet_personnel"})
     */
    private $personnel;

    /**
     * @ORM\ManyToMany(targetEntity="App\Entity\Fichier", inversedBy="cahierTextes")
     */
    private $fichiers;

    /**
     * @ORM\ManyToOne(targetEntity="App\Entity\Semestre", inversedBy="cahierTextes")
     * @Groups({"carnet_personnel"})
     */
    private $semestre;

    /**
     * @ORM\ManyToOne(targetEntity="App\Entity\Matiere")
     * @Groups({"carnet_personnel"})
     */
    private $matiere;

    public function __construct()
    {
        $this->fichiers = new ArrayCollection();
    }

    public function getLibelle(): ?string
    {
        return $this->libelle;
    }

    public function setLibelle(string $libelle): self
    {
        $this->libelle = $libelle;

        return $this;
    }

    public function getDescription(): ?string
    {
        return $this->description;
    }

    public function setDescription(string $description): self
    {
        $this->description = $description;

        return $this;
    }

    public function getDateRetour(): ?DateTimeInterface
    {
        return $this->dateRetour;
    }

    public function setDateRetour(DateTimeInterface $dateRetour): self
    {
        $this->dateRetour = $dateRetour;

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

    /**
     * @return Collection|Fichier[]
     */
    public function getFichiers(): Collection
    {
        return $this->fichiers;
    }

    public function addFichier(Fichier $fichier): self
    {
        if (!$this->fichiers->contains($fichier)) {
            $this->fichiers[] = $fichier;
        }

        return $this;
    }

    public function removeFichier(Fichier $fichier): self
    {
        if ($this->fichiers->contains($fichier)) {
            $this->fichiers->removeElement($fichier);
        }

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

    public function getMatiere(): ?Matiere
    {
        return $this->matiere;
    }

    public function setMatiere(?Matiere $matiere): self
    {
        $this->matiere = $matiere;

        return $this;
    }
}
