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
#[ORM\HasLifecycleCallbacks]
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

    #[ORM\Column(type: Types::JSON, nullable: true)]
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
        // Toujours renvoyer une structure normalisée (même si la BDD contient null ou une chaîne)
        return self::normalizeAdresse($this->adresse);
    }

    /**
     * Accepte un array, une string JSON, une string sérialisée PHP ou null.
     */
    public function setAdresse(mixed $adresse): static
    {
        $this->adresse = self::normalizeAdresse($adresse);

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

    /**
     * Normalize une adresse pour garantir les clés attendues par l'application.
     * Accepte en entrée : array, null, JSON string, PHP-serialized string.
     * Retourne toujours un tableau associatif avec les clés :
     * adresse1, adresse2, adresse3, codePostal, ville, pays
     */
    public static function normalizeAdresse(mixed $adresse): array
    {
        $defaults = [
            'adresse1'  => '',
            'adresse2'  => '',
            'adresse3'  => '',
            'codePostal'=> '',
            'ville'     => '',
            'pays'      => '',
        ];

        if ($adresse === null) {
            return $defaults;
        }

        // Si c'est déjà un array
        if (is_array($adresse)) {
            $raw = $adresse;
        } elseif (is_string($adresse)) {
            $trim = trim($adresse);

            // Tenter JSON
            $decodedJson = json_decode($trim, true);
            if (json_last_error() === JSON_ERROR_NONE && is_array($decodedJson)) {
                $raw = $decodedJson;
            } else {
                // Tenter unserialize (PHP serialize)
                $maybe = @unserialize($trim);
                if ($maybe !== false || $trim === serialize(false)) {
                    $raw = (array) $maybe;
                } else {
                    // Inconnu -> retour par défaut
                    return $defaults;
                }
            }
        } else {
            // Type inattendu -> retour par défaut
            return $defaults;
        }

        $out = $defaults;

        // Mappage simple des clés possibles
        if (array_key_exists('adresse1', $raw)) {
            $out['adresse1'] = (string) ($raw['adresse1'] ?? '');
        } elseif (array_key_exists('adresse', $raw)) {
            $out['adresse1'] = (string) ($raw['adresse'] ?? '');
        }

        if (array_key_exists('adresse2', $raw)) {
            $out['adresse2'] = (string) ($raw['adresse2'] ?? '');
        }

        if (array_key_exists('adresse3', $raw)) {
            $out['adresse3'] = (string) ($raw['adresse3'] ?? '');
        }

        // codePostal peut venir sous forme 'codePostal' ou 'code_postal'
        if (array_key_exists('codePostal', $raw)) {
            $out['codePostal'] = (string) ($raw['codePostal'] ?? '');
        } elseif (array_key_exists('code_postal', $raw)) {
            $out['codePostal'] = (string) ($raw['code_postal'] ?? '');
        }

        if (array_key_exists('ville', $raw)) {
            $out['ville'] = (string) ($raw['ville'] ?? '');
        }

        if (array_key_exists('pays', $raw)) {
            $out['pays'] = (string) ($raw['pays'] ?? '');
        }

        return $out;
    }

    /**
     * Lifecycle callbacks pour s'assurer que l'adresse est correctement structurée
     * avant la persistance et après le chargement depuis la BDD.
     */
    #[ORM\PrePersist]
    #[ORM\PreUpdate]
    public function ensureAdresseStructureBeforeSave(): void
    {
        // Normaliser avant sauvegarde (Doctrine acceptera alors array et convertira en JSON)
        $this->adresse = self::normalizeAdresse($this->adresse);
    }

    #[ORM\PostLoad]
    public function ensureAdresseStructureAfterLoad(): void
    {
        // Après chargement, s'assurer que la propriété adresse est un array structuré
        $this->adresse = self::normalizeAdresse($this->adresse);
    }
}
