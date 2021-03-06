<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Entity/Actualite.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 07/02/2021 10:49
 */

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
     * @Groups({"actualite_administration"})
     */
    private $titre;

    /**
     * @ORM\Column(type="text")
     * @Groups({"actualite_administration"})
     */
    private $texte;

    /**
     * @ORM\ManyToOne(targetEntity="App\Entity\Departement", inversedBy="actualites")
     * @MaxDepth(2)
     * @Groups({"actualite_administration"})
     */
    private $departement;

    /**
     * Actualite constructor.
     */
    public function __construct(Departement $departement)
    {
        $this->departement = $departement;
    }

    public function getTitre(): ?string
    {
        return $this->titre;
    }

    /**
     * @return Actualite
     */
    public function setTitre(string $titre): self
    {
        $this->titre = $titre;

        return $this;
    }

    public function getTexte(): ?string
    {
        return $this->texte;
    }

    /**
     * @return Actualite
     */
    public function setTexte(string $texte): self
    {
        $this->texte = $texte;

        return $this;
    }

    public function getDepartement(): ?Departement
    {
        return $this->departement;
    }

    /**
     * @return Actualite
     */
    public function setDepartement(?Departement $departement): self
    {
        $this->departement = $departement;

        return $this;
    }
}
