<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Entity/MaterielCommunPret.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 28/06/2021 21:12
 */

namespace App\Entity;

use App\Repository\MaterielCommunPretRepository;
use Carbon\CarbonInterface;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass=MaterielCommunPretRepository::class)
 */
class MaterielCommunPret extends BaseEntity
{
    /**
     * @ORM\Column(type="datetime")
     */
    private ?CarbonInterface $dateEmprunt;

    /**
     * @ORM\ManyToOne(targetEntity=Personnel::class, inversedBy="materielCommunPrets")
     */
    private ?Personnel $personnel;

    /**
     * @ORM\ManyToOne(targetEntity=MaterielCommun::class, inversedBy="materielCommunPrets")
     */
    private ?MaterielCommun $materielCommun;

    /**
     * @ORM\Column(type="string", length=100)
     */
    private ?string $creneau;

    public function getDateEmprunt(): ?CarbonInterface
    {
        return $this->dateEmprunt;
    }

    public function setDateEmprunt(CarbonInterface $dateEmprunt): self
    {
        $this->dateEmprunt = $dateEmprunt;

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

    public function getMaterielCommun(): ?MaterielCommun
    {
        return $this->materielCommun;
    }

    public function setMaterielCommun(?MaterielCommun $materielCommun): self
    {
        $this->materielCommun = $materielCommun;

        return $this;
    }

    public function getCreneau(): ?string
    {
        return $this->creneau;
    }

    public function setCreneau(string $creneau): self
    {
        $this->creneau = $creneau;

        return $this;
    }
}
