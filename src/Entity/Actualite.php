<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Entity/Actualite.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 05/06/2021 15:51
 */

namespace App\Entity;

use App\Entity\Traits\LifeCycleTrait;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Serializer\Annotation\Groups;
use Symfony\Component\Serializer\Annotation\MaxDepth;

/**
 * @ORM\Entity(repositoryClass="App\Repository\ActualiteRepository")
 * @ORM\HasLifecycleCallbacks()
 */
class Actualite extends BaseEntity
{
    use LifeCycleTrait;

    /**
     * @ORM\Column(type="string", length=150)
     * @Groups({"actualite_administration"})
     */
    private ?string $titre;

    /**
     * @ORM\Column(type="text")
     * @Groups({"actualite_administration"})
     */
    private ?string $texte;

    /**
     * @ORM\ManyToOne(targetEntity="App\Entity\Departement", inversedBy="actualites")
     * @MaxDepth(2)
     * @Groups({"actualite_administration"})
     */
    private Departement $departement;

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

    public function getDepartement(): ?Departement
    {
        return $this->departement;
    }

    public function setDepartement(Departement $departement): self
    {
        $this->departement = $departement;

        return $this;
    }
}
