<?php
/**
 * Copyright (C) 7 / 2019 | David annebicque | IUT de Troyes - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetv3/src/Entity/Actualite.php
 * @author     David Annebicque
 * @project intranetv3
 * @date 7/12/19 11:23 AM
 * @lastUpdate 3/17/19 8:29 AM
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
     *
     * @param Departement $departement
     */
    public function __construct(Departement $departement)
    {
        $this->departement = $departement;
    }

    /**
     * @return null|string
     */
    public function getTitre(): ?string
    {
        return $this->titre;
    }

    /**
     * @param string $titre
     *
     * @return Actualite
     */
    public function setTitre(string $titre): self
    {
        $this->titre = $titre;

        return $this;
    }

    /**
     * @return null|string
     */
    public function getTexte(): ?string
    {
        return $this->texte;
    }

    /**
     * @param string $texte
     *
     * @return Actualite
     */
    public function setTexte(string $texte): self
    {
        $this->texte = $texte;

        return $this;
    }

    /**
     * @return Departement|null
     */
    public function getDepartement(): ?Departement
    {
        return $this->departement;
    }

    /**
     * @param Departement|null $departement
     *
     * @return Actualite
     */
    public function setDepartement(?Departement $departement): self
    {
        $this->departement = $departement;

        return $this;
    }
}
