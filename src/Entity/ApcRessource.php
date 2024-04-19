<?php
/*
 * Copyright (c) 2024. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Entity/ApcRessource.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 19/04/2024 17:48
 */

namespace App\Entity;

use App\Classes\Editable\EditableInterface;
use App\Entity\Traits\LifeCycleTrait;
use App\Interfaces\MatiereEntityInterface;
use App\Repository\ApcRessourceRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\DBAL\Types\Types;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: ApcRessourceRepository::class)]
#[ORM\HasLifecycleCallbacks]
class ApcRessource extends AbstractMatiere implements MatiereEntityInterface, EditableInterface
{
    use LifeCycleTrait;

    final public const SOURCE = 'ressource';

    #[ORM\Column(type: Types::TEXT, nullable: true)]
    private ?string $preRequis = null;

    #[ORM\Column(type: Types::TEXT, nullable: true)]
    private ?string $motsCles = null;

    /**
     * @var Collection<int, ApcRessourceCompetence>
     */
    #[ORM\OneToMany(mappedBy: 'ressource', targetEntity: ApcRessourceCompetence::class, cascade: ['persist', 'remove'])]
    private Collection $apcRessourceCompetences;

    /**
     * @var Collection<int, ApcRessourceApprentissageCritique>
     */
    #[ORM\OneToMany(mappedBy: 'ressource', targetEntity: ApcRessourceApprentissageCritique::class, cascade: ['persist', 'remove'])]
    private Collection $apcRessourceApprentissageCritiques;

    /**
     * @var Collection<int, ApcSaeRessource>
     */
    #[ORM\OneToMany(mappedBy: 'ressource', targetEntity: ApcSaeRessource::class, cascade: ['persist', 'remove'])]
    private Collection $apcSaeRessources;

    #[ORM\Column(type: Types::BOOLEAN)]
    private ?bool $ressourceParent = false;

    /**
     * @var Collection<int, ApcRessourceEnfants>
     */
    #[ORM\OneToMany(mappedBy: 'apcRessourceParent', targetEntity: ApcRessourceEnfants::class, cascade: ['persist', 'remove'])]
    private Collection $apcRessourceParentEnfants;

    /**
     * @var Collection<int, ApcRessourceEnfants>
     */
    #[ORM\OneToMany(mappedBy: 'apcRessourceEnfant', targetEntity: ApcRessourceEnfants::class, cascade: ['persist', 'remove'])]
    private Collection $apcRessourceEnfantEnfants;

    #[ORM\ManyToMany(targetEntity: Semestre::class, inversedBy: 'apcSemestresRessources', fetch: 'EXTRA_LAZY')]
    private Collection $semestres;

    #[ORM\ManyToMany(targetEntity: self::class, inversedBy: 'ressourcesAvecPreRequis')]
    private Collection $ressourcesPreRequises;

    #[ORM\ManyToMany(targetEntity: self::class, mappedBy: 'ressourcesPreRequises')]
    private Collection $ressourcesAvecPreRequis;

    public function __construct()
    {
        $this->apcRessourceCompetences = new ArrayCollection();
        $this->apcRessourceApprentissageCritiques = new ArrayCollection();
        $this->apcSaeRessources = new ArrayCollection();
        $this->apcRessourceParentEnfants = new ArrayCollection();
        $this->apcRessourceEnfantEnfants = new ArrayCollection();
        $this->semestres = new ArrayCollection();
        $this->ressourcesPreRequises = new ArrayCollection();
        $this->ressourcesAvecPreRequis = new ArrayCollection();
    }

    public function __clone()
    {
        $this->semestres = new ArrayCollection();
    }

    public function getPreRequis(): ?string
    {
        return $this->preRequis;
    }

    public function setPreRequis(?string $preRequis): self
    {
        $this->preRequis = $preRequis;

        return $this;
    }

    public function getMotsCles(): ?string
    {
        return $this->motsCles;
    }

    public function setMotsCles(?string $motsCles): self
    {
        $this->motsCles = $motsCles;

        return $this;
    }

    public function removeApcRessourceCompetence(ApcRessourceCompetence $apcRessourceCompetence): self
    {
        // set the owning side to null (unless already changed)
        if ($this->apcRessourceCompetences->removeElement($apcRessourceCompetence) && $apcRessourceCompetence->getRessource() === $this) {
            $apcRessourceCompetence->setRessource(null);
        }

        return $this;
    }

    /**
     * @return Collection|ApcRessourceApprentissageCritique[]
     */
    public function getApcRessourceApprentissageCritiques(): Collection
    {
        return $this->apcRessourceApprentissageCritiques;
    }

    public function addApcRessourceApprentissageCritique(
        ApcRessourceApprentissageCritique $apcRessourceApprentissageCritique
    ): self {
        if (!$this->apcRessourceApprentissageCritiques->contains($apcRessourceApprentissageCritique)) {
            $this->apcRessourceApprentissageCritiques[] = $apcRessourceApprentissageCritique;
            $apcRessourceApprentissageCritique->setRessource($this);
        }

        return $this;
    }

    public function removeApcRessourceApprentissageCritique(
        ApcRessourceApprentissageCritique $apcRessourceApprentissageCritique
    ): self {
        // set the owning side to null (unless already changed)
        if ($this->apcRessourceApprentissageCritiques->removeElement($apcRessourceApprentissageCritique) && $apcRessourceApprentissageCritique->getRessource() === $this) {
            $apcRessourceApprentissageCritique->setRessource(null);
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
            $apcSaeRessource->setRessource($this);
        }

        return $this;
    }

    public function removeApcSaeRessource(ApcSaeRessource $apcSaeRessource): self
    {
        // set the owning side to null (unless already changed)
        if ($this->apcSaeRessources->removeElement($apcSaeRessource) && $apcSaeRessource->getRessource() === $this) {
            $apcSaeRessource->setRessource(null);
        }

        return $this;
    }

    /**
     * @return Collection|ApcCompetence[]
     */
    public function getCompetences(): Collection
    {
        $comptences = new ArrayCollection();

        foreach ($this->getApcRessourceCompetences() as $apcRessourceCompetence) {
            $comptences->add($apcRessourceCompetence->getCompetence());
        }

        return $comptences;
    }

    /**
     * @return Collection|ApcRessourceCompetence[]
     */
    public function getApcRessourceCompetences(): Collection
    {
        return $this->apcRessourceCompetences;
    }

    /**
     * @return $this
     */
    public function addCompetence(ApcCompetence $competence): self
    {
        $apcRessourceCompetence = new ApcRessourceCompetence($this, $competence);
        $this->addApcRessourceCompetence($apcRessourceCompetence);

        return $this;
    }

    public function addApcRessourceCompetence(ApcRessourceCompetence $apcRessourceCompetence): self
    {
        if (!$this->apcRessourceCompetences->contains($apcRessourceCompetence)) {
            $this->apcRessourceCompetences[] = $apcRessourceCompetence;
            $apcRessourceCompetence->setRessource($this);
        }

        return $this;
    }

    /**
     * @return $this
     */
    public function removeCompetence(ApcCompetence $competence): self
    {
        foreach ($this->apcRessourceCompetences as $apcRessourceCompetence) {
            if ($apcRessourceCompetence->getCompetence() === $competence) {
                $this->apcRessourceCompetences->removeElement($apcRessourceCompetence);
            }
        }

        return $this;
    }

    public function getNiveau(): ?int
    {
        if (count($this->apcRessourceApprentissageCritiques) > 0) {
            $ac = $this->apcRessourceApprentissageCritiques[0]->getApprentissageCritique();

            return null !== $ac ? $ac->getNiveau()->getOrdre() : 0;
        }

        return null;
    }

    public function getJson(): array
    {
        return $this->initTabJson();
    }

    public function getRessourceParent(): ?bool
    {
        return $this->ressourceParent;
    }

    public function setRessourceParent(bool $ressourceParent): self
    {
        $this->ressourceParent = $ressourceParent;

        return $this;
    }

    /**
     * @return Collection<int, ApcRessourceEnfants>
     */
    public function getApcRessourceEnfantEnfants(): Collection
    {
        return $this->apcRessourceEnfantEnfants;
    }

    public function addApcRessourceEnfantEnfant(ApcRessourceEnfants $apcRessourceEnfant): self
    {
        if (!$this->apcRessourceEnfantEnfants->contains($apcRessourceEnfant)) {
            $this->apcRessourceEnfantEnfants[] = $apcRessourceEnfant;
            $apcRessourceEnfant->setApcRessourceEnfant($this);
        }

        return $this;
    }

    public function removeApcRessourceEnfantEnfant(ApcRessourceEnfants $apcRessourceEnfant): self
    {
        // set the owning side to null (unless already changed)
        if ($this->apcRessourceEnfantEnfants->removeElement($apcRessourceEnfant) && $apcRessourceEnfant->getApcRessourceEnfant() === $this) {
            $apcRessourceEnfant->setApcRessourceEnfant(null);
        }

        return $this;
    }

    /**
     * @return Collection<int, ApcRessourceEnfants>
     */
    public function getApcRessourceParentEnfants(): Collection
    {
        return $this->apcRessourceParentEnfants;
    }

    public function addApcRessourceParentEnfant(ApcRessourceEnfants $apcRessourceEnfant): self
    {
        if (!$this->apcRessourceParentEnfants->contains($apcRessourceEnfant)) {
            $this->apcRessourceParentEnfants[] = $apcRessourceEnfant;
            $apcRessourceEnfant->setApcRessourceParent($this);
        }

        return $this;
    }

    public function removeApcRessourceParentEnfant(ApcRessourceEnfants $apcRessourceEnfant): self
    {
        // set the owning side to null (unless already changed)
        if ($this->apcRessourceParentEnfants->removeElement($apcRessourceEnfant) && $apcRessourceEnfant->getApcRessourceParent() === $this) {
            $apcRessourceEnfant->setApcRessourceParent(null);
        }

        return $this;
    }

    public function isEnfant(): bool
    {
        return $this->getApcRessourceEnfantEnfants()->count() > 0;
    }

    public function isParent(): bool
    {
        return $this->getRessourceParent();
    }

    public function groupesEnfant(): ?Collection
    {
        if ($this->isEnfant()) {
            return $this->getApcRessourceEnfantEnfants()->first()->getGroupes();
        }

        return null;
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

    public function getDiplome(): ?Diplome
    {
        if ($this->semestres->count() > 0) {
            return $this->semestres->first()->getDiplome();
        }

        return null;
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

    /**
     * @return Collection<int, self>
     */
    public function getRessourcesPreRequises(): Collection
    {
        return $this->ressourcesPreRequises;
    }

    public function addRessourcesPreRequise(self $ressourcesPreRequise): self
    {
        if (!$this->ressourcesPreRequises->contains($ressourcesPreRequise)) {
            $this->ressourcesPreRequises[] = $ressourcesPreRequise;
        }

        return $this;
    }

    public function removeRessourcesPreRequise(self $ressourcesPreRequise): self
    {
        $this->ressourcesPreRequises->removeElement($ressourcesPreRequise);

        return $this;
    }

    /**
     * @return Collection<int, self>
     */
    public function getRessourcesAvecPreRequis(): Collection
    {
        return $this->ressourcesAvecPreRequis;
    }

    public function addRessourcesAvecPreRequi(self $ressourcesAvecPreRequi): self
    {
        if (!$this->ressourcesAvecPreRequis->contains($ressourcesAvecPreRequi)) {
            $this->ressourcesAvecPreRequis[] = $ressourcesAvecPreRequi;
            $ressourcesAvecPreRequi->addRessourcesPreRequise($this);
        }

        return $this;
    }

    public function removeRessourcesAvecPreRequi(self $ressourcesAvecPreRequi): self
    {
        if ($this->ressourcesAvecPreRequis->removeElement($ressourcesAvecPreRequi)) {
            $ressourcesAvecPreRequi->removeRessourcesPreRequise($this);
        }

        return $this;
    }

    public function updateEditable(string $name, $value): bool
    {
        $method = 'set' . $name;
        if (method_exists($this, $method)) {
            $this->$method($value);

            return true;
        }

        return false;
    }
}
