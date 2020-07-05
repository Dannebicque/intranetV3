<?php
// Copyright (c) 2020. | David Annebicque | IUT de Troyes  - All Rights Reserved
// @file /Users/davidannebicque/htdocs/intranetV3/src/Entity/ScolariteMoyenneMatiere.php
// @author davidannebicque
// @project intranetV3
// @lastUpdate 05/07/2020 08:09

namespace App\Entity;

use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass="App\Repository\ScolariteMoyenneMatiereRepository")
 */
class ScolariteMoyenneMatiere
{
    /**
     * @ORM\Id()
     * @ORM\GeneratedValue()
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\ManyToOne(targetEntity="App\Entity\Scolarite", inversedBy="scolariteMoyenneMatieres")
     */
    private $scolarite;

    /**
     * @ORM\ManyToOne(targetEntity="App\Entity\Matiere", inversedBy="scolariteMoyenneMatieres")
     */
    private $matiere;

    /**
     * @ORM\Column(type="float")
     */
    private $moyenne;

    /**
     * @ORM\Column(type="integer")
     */
    private $rang;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getScolarite(): ?Scolarite
    {
        return $this->scolarite;
    }

    public function setScolarite(?Scolarite $scolarite): self
    {
        $this->scolarite = $scolarite;

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

    public function getMoyenne(): ?float
    {
        return $this->moyenne;
    }

    public function setMoyenne(float $moyenne): self
    {
        $this->moyenne = $moyenne;

        return $this;
    }

    public function getRang(): ?int
    {
        return $this->rang;
    }

    public function setRang(int $rang): self
    {
        $this->rang = $rang;

        return $this;
    }
}
