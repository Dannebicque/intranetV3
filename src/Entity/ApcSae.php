<?php
/*
 * Copyright (c) 2023. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Entity/ApcSae.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 28/07/2023 15:35
 */

namespace App\Entity;

use App\Entity\Traits\LifeCycleTrait;
use App\Interfaces\MatiereEntityInterface;
use App\Repository\ApcSaeRepository;
use App\Utils\Tools;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\DBAL\Types\Types;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: ApcSaeRepository::class)]
#[ORM\HasLifecycleCallbacks]
class ApcSae extends AbstractMatiere implements MatiereEntityInterface
{
    use LifeCycleTrait;

    final public const SOURCE = 'sae';

    /**
     * @return \App\Entity\Semestre|null
     *
     */
    /** @deprecated */
    public function getSemestre(): ?Semestre
    {
        return $this->semestre;
    }

    //(reason: 'Une SAE peut être commune  à plusieurs parcours. Le plus simple serait d\'avoir une gestion manytomany')

    /** @deprecated */
    #[ORM\ManyToOne(targetEntity: Semestre::class, fetch: 'EAGER')]
    private ?Semestre $semestre = null;

    #[ORM\Column(type: Types::FLOAT)]
    private float $projetPpn = 0;

    #[ORM\Column(type: Types::FLOAT)]
    private float $projetFormation = 0;

    #[ORM\Column(type: Types::TEXT, nullable: true)]
    private ?string $livrables = null;

    /**
     * @var \Doctrine\Common\Collections\Collection<int, \App\Entity\ApcSaeCompetence>
     */
    #[ORM\OneToMany(mappedBy: 'sae', targetEntity: ApcSaeCompetence::class, cascade: ['persist', 'remove'])]
    private Collection $apcSaeCompetences;

    /**
     * @var \Doctrine\Common\Collections\Collection<int, \App\Entity\ApcSaeRessource>
     */
    #[ORM\OneToMany(mappedBy: 'sae', targetEntity: ApcSaeRessource::class, cascade: ['persist', 'remove'])]
    private Collection $apcSaeRessources;

    /**
     * @var \Doctrine\Common\Collections\Collection<int, \App\Entity\ApcSaeApprentissageCritique>
     */
    #[ORM\OneToMany(mappedBy: 'sae', targetEntity: ApcSaeApprentissageCritique::class, cascade: ['persist', 'remove'])]
    private Collection $apcSaeApprentissageCritiques;

    #[ORM\Column(type: Types::TEXT, nullable: true)]
    private ?string $exemples = null;

    #[ORM\Column(type: Types::BOOLEAN)]
    private bool $bonification = false;

    #[ORM\ManyToMany(targetEntity: Semestre::class, inversedBy: 'apcSemestresSaes')]
    private Collection $semestres;

    #[ORM\Column(type: Types::TEXT, nullable: true)]
    private ?string $objectifs = null;

    public function __construct()
    {
        $this->apcSaeCompetences = new ArrayCollection();
        $this->apcSaeRessources = new ArrayCollection();
        $this->apcSaeApprentissageCritiques = new ArrayCollection();
        $this->semestres = new ArrayCollection();
    }

    public function __clone()
    {
        $this->semestres = new ArrayCollection();
    }

    public function getLivrables(): ?string
    {
        return $this->livrables;
    }

    public function setLivrables(?string $livrables): self
    {
        $this->livrables = $livrables;

        return $this;
    }

    public function removeApcSaeCompetence(ApcSaeCompetence $apcSaeCompetence): self
    {
        // set the owning side to null (unless already changed)
        if ($this->apcSaeCompetences->removeElement($apcSaeCompetence) && $apcSaeCompetence->getSae() === $this) {
            $apcSaeCompetence->setSae(null);
        }

        return $this;
    }

    /**
     * @return Collection|ApcSaeRessource[]
     */
    public function getApcSaeRessources(): Collection
    {
        return $this->apcSaeRessources;
    }

    public function addApcSaeRessource(ApcSaeRessource $apcSaeRessource): self
    {
        if (!$this->apcSaeRessources->contains($apcSaeRessource)) {
            $this->apcSaeRessources[] = $apcSaeRessource;
            $apcSaeRessource->setSae($this);
        }

        return $this;
    }

    public function removeApcSaeRessource(ApcSaeRessource $apcSaeRessource): self
    {
        // set the owning side to null (unless already changed)
        if ($this->apcSaeRessources->removeElement($apcSaeRessource) && $apcSaeRessource->getSae() === $this) {
            $apcSaeRessource->setSae(null);
        }

        return $this;
    }

    public function getDiplome(): ?Diplome
    {
        if ($this->semestres->count() > 0) {
            return $this->semestres->first()->getDiplome();
        }

        return null;
    }

    /**
     * @return Collection|ApcCompetence[]
     */
    public function getCompetences(): Collection
    {
        $comptences = new ArrayCollection();

        foreach ($this->getApcSaeCompetences() as $apcSaeCompetence) {
            $comptences->add($apcSaeCompetence->getCompetence());
        }

        return $comptences;
    }

    /**
     * @return Collection|ApcSaeCompetence[]
     */
    public function getApcSaeCompetences(): Collection
    {
        return $this->apcSaeCompetences;
    }

    /**
     * @return $this
     */
    public function addCompetence(ApcCompetence $competence): self
    {
        $apcSaeCompetence = new ApcSaeCompetence($this, $competence);
        $this->addApcSaeCompetence($apcSaeCompetence);

        return $this;
    }

    public function addApcSaeCompetence(ApcSaeCompetence $apcSaeCompetence): self
    {
        if (!$this->apcSaeCompetences->contains($apcSaeCompetence)) {
            $this->apcSaeCompetences[] = $apcSaeCompetence;
            $apcSaeCompetence->setSae($this);
        }

        return $this;
    }

    /**
     * @return $this
     */
    public function removeCompetence(ApcCompetence $competence): self
    {
        foreach ($this->apcSaeCompetences as $apcSaeCompetence) {
            if ($apcSaeCompetence->getCompetence() === $competence) {
                $this->apcSaeCompetences->removeElement($apcSaeCompetence);
            }
        }

        return $this;
    }

    /**
     * @return Collection|ApcSaeApprentissageCritique[]
     */
    public function getApcSaeApprentissageCritiques(): Collection
    {
        return $this->apcSaeApprentissageCritiques;
    }

    public function addApcSaeApprentissageCritique(ApcSaeApprentissageCritique $apcSaeApprentissageCritique): self
    {
        if (!$this->apcSaeApprentissageCritiques->contains($apcSaeApprentissageCritique)) {
            $this->apcSaeApprentissageCritiques[] = $apcSaeApprentissageCritique;
            $apcSaeApprentissageCritique->setSae($this);
        }

        return $this;
    }

    public function removeApcSaeApprentissageCritique(ApcSaeApprentissageCritique $apcSaeApprentissageCritique): self
    {
        // set the owning side to null (unless already changed)
        if ($this->apcSaeApprentissageCritiques->removeElement($apcSaeApprentissageCritique) && $apcSaeApprentissageCritique->getSae() === $this) {
            $apcSaeApprentissageCritique->setSae(null);
        }

        return $this;
    }

    public function getExemples(): ?string
    {
        return $this->exemples;
    }

    public function setExemples(?string $exemples): self
    {
        $this->exemples = $exemples;

        return $this;
    }

    public function getJson(): array
    {
        $t = $this->initTabJson();
        $t['ptutFormation'] = $this->getProjetFormation();
        $t['ptutPpn'] = $this->getProjetPpn();

        return $t;
    }

    public function getProjetFormation(): ?float
    {
        return $this->projetFormation;
    }

    public function setProjetFormation(mixed $projetFormation): self
    {
        $this->projetFormation = Tools::convertToFloat($projetFormation);

        return $this;
    }

    public function getProjetPpn(): ?float
    {
        return $this->projetPpn;
    }

    public function setProjetPpn(mixed $projetPpn): self
    {
        $this->projetPpn = Tools::convertToFloat($projetPpn);

        return $this;
    }

    public function getBonification(): ?bool
    {
        return $this->bonification;
    }

    public function setBonification(bool $bonification): self
    {
        $this->bonification = $bonification;

        return $this;
    }

    /**
     * @return Collection<int, Semestre>
     */
    public function getSemestres(): Collection
    {
        return $this->semestres;
    }

    public function addSemestre(Semestre $semestre): self
    {
        if (!$this->semestres->contains($semestre)) {
            $this->semestres[] = $semestre;
        }

        return $this;
    }

    public function removeSemestre(Semestre $semestre): self
    {
        $this->semestres->removeElement($semestre);

        return $this;
    }

    public function hasSemestre(Semestre $semestre): bool
    {
        return $this->getSemestres()->contains($semestre);
    }

    /**
     * @param \App\Entity\Semestre|null $semestre
     */
    /** @deprecated */
    public function setSemestre(?Semestre $semestre): void
    {
        $this->semestre = $semestre;
    }

    public function getParcours(): array
    {
        $parcours = [];
        foreach ($this->getSemestres() as $semestre) {
            if (null !== $semestre->getDiplome()) {
                $parcours[] = $semestre->getDiplome()->getApcParcours();
            }
        }

        return $parcours;
    }

    public function getObjectifs(): ?string
    {
        return $this->objectifs;
    }

    public function setObjectifs(?string $objectifs): self
    {
        $this->objectifs = $objectifs;

        return $this;
    }
}
