<?php

namespace App\Entity;

use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Serializer\Annotation\Groups;
use Symfony\Component\Serializer\Annotation\MaxDepth;

/**
 * @ORM\Entity(repositoryClass="App\Repository\ActualiteRepository")
 */
class Actualite extends BaseEntity
{
    /**
     * @ORM\Column(type="string", length=150)
     * @Groups({"acutalite_administration"})
     */
    private $titre;

    /**
     * @ORM\Column(type="text")
     * @Groups({"acutalite_administration"})
     */
    private $texte;

    /**
     * @ORM\ManyToOne(targetEntity="App\Entity\Formation", inversedBy="actualites")
     * @MaxDepth(2)
     * @Groups({"acutalite_administration"})
     */
    private $formation;

    public function __construct(Formation $formation)
    {
        $this->formation = $formation;
    }

    public function getTitre(): ?string
    {
        return $this->titre;
    }

    public function setTitre(string $titre): self
    {
        $this->titre = $titre;

        return $this;
    }

    public function getTexte(): ?string
    {
        return $this->texte;
    }

    public function setTexte(string $texte): self
    {
        $this->texte = $texte;

        return $this;
    }

    public function getFormation(): ?Formation
    {
        return $this->formation;
    }

    public function setFormation(?Formation $formation): self
    {
        $this->formation = $formation;

        return $this;
    }

}
