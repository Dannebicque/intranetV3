<?php
/**
 * Copyright (C) 7 / 2019 | David annebicque | IUT de Troyes - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetv3/src/Entity/ProgressionPedagogique.php
 * @author     David Annebicque
 * @project intranetv3
 * @date 7/12/19 11:23 AM
 * @lastUpdate 4/18/19 9:03 AM
 */

namespace App\Entity;

use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass="App\Repository\ProgressionPedagogiqueRepository")
 */
class ProgressionPedagogique
{
    /**
     * @ORM\Id()
     * @ORM\GeneratedValue()
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\ManyToOne(targetEntity="App\Entity\Personnel", inversedBy="progressionPedagogiques")
     */
    private $personnel;

    /**
     * @ORM\ManyToOne(targetEntity="App\Entity\Matiere", inversedBy="progressionPedagogiques")
     */
    private $matiere;

    /**
     * @ORM\ManyToOne(targetEntity="App\Entity\AnneeUniversitaire", inversedBy="progressionPedagogiques")
     */
    private $anneeUniversitaire;

    /**
     * @ORM\Column(type="integer")
     */
    private $semaine;

    /**
     * @ORM\Column(type="string", length=5)
     */
    private $typeCours;

    /**
     * @ORM\Column(type="integer")
     */
    private $nbSeance;

    public function getId(): ?int
    {
        return $this->id;
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

    public function getMatiere(): ?Matiere
    {
        return $this->matiere;
    }

    public function setMatiere(?Matiere $matiere): self
    {
        $this->matiere = $matiere;

        return $this;
    }

    public function getAnneeUniversitaire(): ?AnneeUniversitaire
    {
        return $this->anneeUniversitaire;
    }

    public function setAnneeUniversitaire(?AnneeUniversitaire $anneeUniversitaire): self
    {
        $this->anneeUniversitaire = $anneeUniversitaire;

        return $this;
    }

    public function getSemaine(): ?int
    {
        return $this->semaine;
    }

    public function setSemaine(int $semaine): self
    {
        $this->semaine = $semaine;

        return $this;
    }

    public function getTypeCours(): ?string
    {
        return $this->typeCours;
    }

    public function setTypeCours(string $typeCours): self
    {
        $this->typeCours = $typeCours;

        return $this;
    }

    public function getNbSeance(): ?int
    {
        return $this->nbSeance;
    }

    public function setNbSeance(int $nbSeance): self
    {
        $this->nbSeance = $nbSeance;

        return $this;
    }
}
