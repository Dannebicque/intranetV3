<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Entity/Status.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 06/06/2021 09:30
 */

namespace App\Entity;

use App\Repository\StatusRepository;
use Doctrine\DBAL\Types\Types;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: StatusRepository::class)]
class Status extends BaseEntity
{
    #[ORM\Column(type: \Doctrine\DBAL\Types\Types::STRING, length: 50)]
    private ?string $libelle = null;

    #[ORM\Column(type: \Doctrine\DBAL\Types\Types::STRING, length: 10)]
    private ?string $sigle = null;

    #[ORM\Column(type: \Doctrine\DBAL\Types\Types::FLOAT)]
    private float $serviceStatus = 192;

    #[ORM\Column(type: \Doctrine\DBAL\Types\Types::FLOAT)]
    private ?float $tauxTd = 1;

    #[ORM\Column(type: \Doctrine\DBAL\Types\Types::FLOAT)]
    private ?float $tauxTp = 1;

    #[ORM\Column(type: \Doctrine\DBAL\Types\Types::FLOAT)]
    private ?float $tauxTdHC = 1;

    #[ORM\Column(type: \Doctrine\DBAL\Types\Types::FLOAT)]
    private ?float $tauxTpHC = 0.66;

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
