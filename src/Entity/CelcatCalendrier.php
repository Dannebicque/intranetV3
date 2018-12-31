<?php

namespace App\Entity;

use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass="App\Repository\CelcatCalendrierRepository")
 */
class CelcatCalendrier extends BaseEntity
{
    /**
     * @ORM\Column(type="integer")
     */
    private $semaineFormation;

    /**
     * @ORM\Column(type="integer")
     */
    private $semaineReelle;

    /**
     * @ORM\Column(type="datetime")
     */
    private $dateLundi;

    public function getSemaineFormation(): ?int
    {
        return $this->semaineFormation;
    }

    public function setSemaineFormation(int $semaineFormation): self
    {
        $this->semaineFormation = $semaineFormation;

        return $this;
    }

    public function getSemaineReelle(): ?int
    {
        return $this->semaineReelle;
    }

    public function setSemaineReelle(int $semaineReelle): self
    {
        $this->semaineReelle = $semaineReelle;

        return $this;
    }

    public function getDateLundi(): ?\DateTimeInterface
    {
        return $this->dateLundi;
    }

    public function setDateLundi(\DateTimeInterface $dateLundi): self
    {
        $this->dateLundi = $dateLundi;

        return $this;
    }
}
