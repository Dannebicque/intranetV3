<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Entity/IndisponibilitePersonnel.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 07/02/2021 10:49
 */

namespace App\Entity;

use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass="App\Repository\IndisponibilitePersonnelRepository")
 */
class IndisponibilitePersonnel
{
    /**
     * @ORM\Id()
     * @ORM\GeneratedValue()
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\ManyToOne(targetEntity="App\Entity\CreneauCours", inversedBy="indisponibilitePersonnels")
     */
    private $creneau;

    /**
     * @ORM\ManyToOne(targetEntity="App\Entity\Calendrier", inversedBy="indisponibilitePersonnels")
     */
    private $semaine;

    /**
     * @ORM\ManyToOne(targetEntity="App\Entity\Personnel", inversedBy="indisponibilitePersonnels")
     */
    private $personnel;

    /**
     * @ORM\Column(type="integer")
     */
    private $priorite;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getCreneau(): ?CreneauCours
    {
        return $this->creneau;
    }

    public function setCreneau(?CreneauCours $creneau): self
    {
        $this->creneau = $creneau;

        return $this;
    }

    public function getSemaine(): ?Calendrier
    {
        return $this->semaine;
    }

    public function setSemaine(?Calendrier $semaine): self
    {
        $this->semaine = $semaine;

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

    public function getPriorite(): ?int
    {
        return $this->priorite;
    }

    public function setPriorite(int $priorite): self
    {
        $this->priorite = $priorite;

        return $this;
    }
}
