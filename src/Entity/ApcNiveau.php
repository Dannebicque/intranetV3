<?php
/*
 * Copyright (c) 2023. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Entity/ApcNiveau.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 28/07/2023 15:35
 */

namespace App\Entity;

use App\Entity\Traits\LifeCycleTrait;
use App\Repository\ApcNiveauRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\DBAL\Types\Types;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: ApcNiveauRepository::class)]
#[ORM\HasLifecycleCallbacks]
class ApcNiveau extends BaseEntity
{
    use LifeCycleTrait;

    final public const NIVEAU_1 = 'Novice';
    final public const NIVEAU_2 = 'Intermédiaire';
    final public const NIVEAU_3 = 'Compétent';

    #[ORM\Column(type: Types::STRING, length: 255)]
    private ?string $libelle = null;

    #[ORM\ManyToOne(targetEntity: ApcCompetence::class, inversedBy: 'apcNiveaux')]
    private ?ApcCompetence $competence = null;

    #[ORM\Column(type: Types::INTEGER)]
    private ?int $ordre = null;

    #[ORM\ManyToOne(targetEntity: Annee::class, inversedBy: 'apcNiveaux')]
    /**
     * @deprecated("Ne pas utiliser ici. Eviter les liens APC/Structure et pas de sens avec la structiure en plusieurs diplôme => impliquerait plusieurs années. Filter par numéro d'ordre...")
     */
    private ?Annee $annee = null;

    /**
     * @var \Doctrine\Common\Collections\Collection<int, \App\Entity\ApcApprentissageCritique>
     */
    #[ORM\OneToMany(mappedBy: 'niveau', targetEntity: ApcApprentissageCritique::class, cascade: ['persist', 'remove'])]
    private Collection $apcApprentissageCritiques;

    /**
     * @var \Doctrine\Common\Collections\Collection<int, \App\Entity\ApcParcoursNiveau>
     */
    #[ORM\OneToMany(mappedBy: 'niveau', targetEntity: ApcParcoursNiveau::class, cascade: ['persist', 'remove'] )]
    private Collection $apcParcoursNiveaux;

    #[ORM\Column]
    private ?int $ordreAnnee = null;

    public function __construct(ApcCompetence $competence = null)
    {
        $this->setCompetence($competence);
        $this->apcApprentissageCritiques = new ArrayCollection();
        $this->apcParcoursNiveaux = new ArrayCollection();
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

    public function getOrdre(): ?int
    {
        return $this->ordre;
    }

    public function setOrdre(int $ordre): self
    {
        $this->ordre = $ordre;

        return $this;
    }

    /** @deprecated("Ne pas utiliser ici. Eviter les liens APC/Structure et pas de sens avec la structiure en plusieurs diplôme => impliquerait plusieurs années. Filter par numéro d'ordre...") */
    public function getAnnee(): ?Annee
    {
        return $this->annee;
    }

    /** @deprecated("Ne pas utiliser ici. Eviter les liens APC/Structure et pas de sens avec la structiure en plusieurs diplôme => impliquerait plusieurs années. Filter par numéro d'ordre...") */
    public function setAnnee(?Annee $annee): self
    {
        $this->annee = $annee;

        return $this;
    }

    /**
     * @return Collection|ApcApprentissageCritique[]
     */
    public function getApcApprentissageCritiques(): Collection
    {
        return $this->apcApprentissageCritiques;
    }

    public function addApcApprentissageCritique(ApcApprentissageCritique $apcApprentissageCritique): self
    {
        if (!$this->apcApprentissageCritiques->contains($apcApprentissageCritique)) {
            $this->apcApprentissageCritiques[] = $apcApprentissageCritique;
            $apcApprentissageCritique->setNiveau($this);
        }

        return $this;
    }

    public function removeApcApprentissageCritique(ApcApprentissageCritique $apcApprentissageCritique): self
    {
        if ($this->apcApprentissageCritiques->contains($apcApprentissageCritique)) {
            $this->apcApprentissageCritiques->removeElement($apcApprentissageCritique);
            // set the owning side to null (unless already changed)
            if ($apcApprentissageCritique->getNiveau() === $this) {
                $apcApprentissageCritique->setNiveau(null);
            }
        }

        return $this;
    }

    /**
     * @return Collection|ApcParcoursNiveau[]
     */
    public function getApcParcoursNiveaux(): Collection
    {
        return $this->apcParcoursNiveaux;
    }

    public function addApcParcoursNiveau(ApcParcoursNiveau $apcParcoursNiveaux): self
    {
        if (!$this->apcParcoursNiveaux->contains($apcParcoursNiveaux)) {
            $this->apcParcoursNiveaux[] = $apcParcoursNiveaux;
            $apcParcoursNiveaux->setNiveau($this);
        }

        return $this;
    }

    public function removeApcParcoursNiveau(ApcParcoursNiveau $apcParcoursNiveaux): self
    {
        // set the owning side to null (unless already changed)
        if ($this->apcParcoursNiveaux->removeElement($apcParcoursNiveaux) && $apcParcoursNiveaux->getNiveau() === $this) {
            $apcParcoursNiveaux->setNiveau(null);
        }

        return $this;
    }

    public function display(): string
    {
        $niv = match ($this->ordre) {
            1 => self::NIVEAU_1,
            2 => self::NIVEAU_2,
            3 => self::NIVEAU_3,
            default => null,
        };

        return $this->getCompetence()?->getNomCourt().' - Niveau '.$niv.'('.$this->ordre.')';
    }

    public function getCompetence(): ?ApcCompetence
    {
        return $this->competence;
    }

    public function setCompetence(?ApcCompetence $competence): self
    {
        $this->competence = $competence;

        return $this;
    }

    public function getOrdreAnnee(): ?int
    {
        return $this->ordreAnnee;
    }

    public function setOrdreAnnee(int $ordreAnnee): self
    {
        $this->ordreAnnee = $ordreAnnee;

        return $this;
    }
}
