<?php
// Copyright (c) 2020. | David Annebicque | IUT de Troyes  - All Rights Reserved
// @file /Users/davidannebicque/htdocs/intranetV3/src/Entity/CovidCreneauPresence.php
// @author davidannebicque
// @project intranetV3
// @lastUpdate 08/12/2020 09:22

namespace App\Entity;

use App\Repository\CovidCreneauPresenceRepository;
use Carbon\Carbon;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass=CovidCreneauPresenceRepository::class)
 */
class CovidCreneauPresence
{
    /**
     * @ORM\Id
     * @ORM\GeneratedValue
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\Column(type="date")
     */
    private $date;

    /**
     * @ORM\Column(type="time")
     */
    private $heureArrivee;

    /**
     * @ORM\Column(type="time")
     */
    private $heureDepart;

    /**
     * @ORM\ManyToOne(targetEntity=CovidAttestationPersonnel::class, inversedBy="covidCreneauPresences")
     */
    private $attestation;

    public function __construct()
    {
        $this->date = new Carbon();
        $this->date->addDays(2);
        $this->heureArrivee = new Carbon('08:00');
        $this->heureDepart = new Carbon('12:00');
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getDate(): ?\DateTimeInterface
    {
        return $this->date;
    }

    public function setDate(\DateTimeInterface $date): self
    {
        $this->date = $date;

        return $this;
    }

    public function getHeureArrivee(): ?\DateTimeInterface
    {
        return $this->heureArrivee;
    }

    public function setHeureArrivee(\DateTimeInterface $heureArrivee): self
    {
        $this->heureArrivee = $heureArrivee;

        return $this;
    }

    public function getHeureDepart(): ?\DateTimeInterface
    {
        return $this->heureDepart;
    }

    public function setHeureDepart(\DateTimeInterface $heureDepart): self
    {
        $this->heureDepart = $heureDepart;

        return $this;
    }

    public function getAttestation(): ?CovidAttestationPersonnel
    {
        return $this->attestation;
    }

    public function setAttestation(?CovidAttestationPersonnel $attestation): self
    {
        $this->attestation = $attestation;

        return $this;
    }

    public function display()
    {
        return $this->date->format('d/m/Y') . ' de ' . $this->heureArrivee->format('H:i') . ' à ' . $this->heureDepart->format('H:i');
    }
}
