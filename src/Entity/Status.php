<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Entity/Status.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 25/05/2021 10:59
 */

namespace App\Entity;

use App\Repository\StatusRepository;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass=StatusRepository::class)
 */
class Status
{
    /**
     * @ORM\Id
     * @ORM\GeneratedValue
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\Column(type="string", length=50)
     */
    private $libelle;

    /**
     * @ORM\Column(type="string", length=10)
     */
    private $sigle;

    /**
     * @ORM\Column(type="float")
     */
    private $serviceStatus;

    /**
     * @ORM\Column(type="float")
     */
    private $tauxTd;

    /**
     * @ORM\Column(type="float")
     */
    private $tauxTp;

    /**
     * @ORM\Column(type="float")
     */
    private $tauxTdHC;

    /**
     * @ORM\Column(type="float")
     */
    private $tauxTpHC;

    public function getId(): ?int
    {
        return $this->id;
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

    public function getSigle(): ?string
    {
        return $this->sigle;
    }

    public function setSigle(string $sigle): self
    {
        $this->sigle = $sigle;

        return $this;
    }

    public function getServiceStatus(): ?float
    {
        return $this->serviceStatus;
    }

    public function setServiceStatus(float $serviceStatus): self
    {
        $this->serviceStatus = $serviceStatus;

        return $this;
    }

    public function getTauxTd(): ?float
    {
        return $this->tauxTd;
    }

    public function setTauxTd(float $tauxTd): self
    {
        $this->tauxTd = $tauxTd;

        return $this;
    }

    public function getTauxTp(): ?float
    {
        return $this->tauxTp;
    }

    public function setTauxTp(float $tauxTp): self
    {
        $this->tauxTp = $tauxTp;

        return $this;
    }

    public function getTauxTdHC(): ?float
    {
        return $this->tauxTdHC;
    }

    public function setTauxTdHC(float $tauxTdHC): self
    {
        $this->tauxTdHC = $tauxTdHC;

        return $this;
    }

    public function getTauxTpHC(): ?float
    {
        return $this->tauxTpHC;
    }

    public function setTauxTpHC(float $tauxTpHC): self
    {
        $this->tauxTpHC = $tauxTpHC;

        return $this;
    }
}
