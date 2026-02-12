<?php

/*
 * This file is part of the Symfony package.
 *
 * (c) Fabien Potencier <fabien@symfony.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

namespace App\Entity;

use App\Repository\EvenementRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\DBAL\Types\Types;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: EvenementRepository::class)]
class Evenement
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column(length: 255)]
    private ?string $libelle = null;

    #[ORM\Column(type: Types::DATE_MUTABLE)]
    private ?\DateTime $date = null;

    #[ORM\Column(type: Types::TIME_MUTABLE)]
    private ?\DateTime $debut = null;

    #[ORM\Column(type: Types::TIME_MUTABLE, nullable: true)]
    private ?\DateTime $fin = null;

    #[ORM\Column(type: Types::ARRAY, nullable: true)]
    private ?array $adresse = null;

    #[ORM\Column(type: Types::TEXT, nullable: true)]
    private ?string $description = null;

    /**
     * @var Collection<int, EtudiantEvenement>
     */
    #[ORM\OneToMany(mappedBy: 'evenement', targetEntity: EtudiantEvenement::class, orphanRemoval: true)]
    private Collection $etudiantEvenements;

    #[ORM\Column]
    private ?bool $geoloc = null;

    public function __construct()
    {
        $this->etudiantEvenements = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getLibelle(): ?string
    {
        return $this->libelle;
    }

    public function setLibelle(string $libelle): static
    {
        $this->libelle = $libelle;

        return $this;
    }

    public function getDate(): ?\DateTime
    {
        return $this->date;
    }

    public function setDate(\DateTime $date): static
    {
        $this->date = $date;

        return $this;
    }

    public function getDebut(): ?\DateTime
    {
        return $this->debut;
    }

    public function setDebut(\DateTime $debut): static
    {
        $this->debut = $debut;

        return $this;
    }

    public function getFin(): ?\DateTime
    {
        return $this->fin;
    }

    public function setFin(?\DateTime $fin): static
    {
        $this->fin = $fin;

        return $this;
    }

    public function getAdresse(): ?array
    {
        return $this->adresse;
    }

    public function setAdresse(?array $adresse): static
    {
        $this->adresse = $adresse;

        return $this;
    }

    public function getDescription(): ?string
    {
        return $this->description;
    }

    public function setDescription(?string $description): static
    {
        $this->description = $description;

        return $this;
    }

    /**
     * @return Collection<int, EtudiantEvenement>
     */
    public function getEtudiantEvenements(): Collection
    {
        return $this->etudiantEvenements;
    }

    public function addEtudiantEvenement(EtudiantEvenement $etudiantEvenement): static
    {
        if (!$this->etudiantEvenements->contains($etudiantEvenement)) {
            $this->etudiantEvenements->add($etudiantEvenement);
            $etudiantEvenement->setEvenement($this);
        }

        return $this;
    }

    public function removeEtudiantEvenement(EtudiantEvenement $etudiantEvenement): static
    {
        if ($this->etudiantEvenements->removeElement($etudiantEvenement)) {
            // set the owning side to null (unless already changed)
            if ($etudiantEvenement->getEvenement() === $this) {
                $etudiantEvenement->setEvenement(null);
            }
        }

        return $this;
    }

    public function isGeoloc(): ?bool
    {
        return $this->geoloc;
    }

    public function setGeoloc(bool $geoloc): static
    {
        $this->geoloc = $geoloc;

        return $this;
    }
}
