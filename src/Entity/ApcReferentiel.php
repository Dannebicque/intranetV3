<?php
/*
 * Copyright (c) 2024. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Entity/ApcReferentiel.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 24/02/2024 08:48
 */

namespace App\Entity;

use App\Entity\Traits\LifeCycleTrait;
use App\Repository\ApcReferentielRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: ApcReferentielRepository::class)]
class ApcReferentiel extends BaseEntity
{
    use LifeCycleTrait;

    #[ORM\Column(type: 'string', length: 255)]
    private ?string $libelle;

    #[ORM\Column(type: 'text', nullable: true)]
    private ?string $description;

    #[ORM\Column(type: 'integer')]
    private ?int $anneePublication;

    #[ORM\ManyToOne(targetEntity: TypeDiplome::class, inversedBy: 'apcReferentiels')]
    private ?TypeDiplome $type_diplome;

    /**
     * @var Collection<int, ApcCompetence>
     */
    #[ORM\OneToMany(mappedBy: 'apcReferentiel', targetEntity: ApcCompetence::class)]
    private Collection $apcComptences;

    /**
     * @var Collection<int, ApcParcours>
     */
    #[ORM\OneToMany(mappedBy: 'apcReferentiel', targetEntity: ApcParcours::class)]
    private Collection $apcParcours;

    #[ORM\OneToMany(mappedBy: 'referentiel', targetEntity: Diplome::class)]
    private Collection $diplomes;

    #[ORM\ManyToOne(targetEntity: Departement::class, inversedBy: 'diplomes')]
    private ?Departement $departement;

    #[ORM\Column(length: 10)]
    private ?string $type_structure = null;

    #[ORM\OneToMany(mappedBy: 'apcReferentiel', targetEntity: Ppn::class)]
    private Collection $ppns;

    #[ORM\Column(length: 2, nullable: true)]
    private ?string $lettreDiplome = null;

    public function __construct()
    {
        $this->apcComptences = new ArrayCollection();
        $this->apcParcours = new ArrayCollection();
        $this->diplomes = new ArrayCollection();
        $this->ppns = new ArrayCollection();
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

    public function getDescription(): ?string
    {
        return $this->description;
    }

    public function setDescription(?string $description): self
    {
        $this->description = $description;

        return $this;
    }

    public function getAnneePublication(): ?int
    {
        return $this->anneePublication;
    }

    public function setAnneePublication(int $anneePublication): self
    {
        $this->anneePublication = $anneePublication;

        return $this;
    }

    public function getTypeDiplome(): ?TypeDiplome
    {
        return $this->type_diplome;
    }

    public function setTypeDiplome(?TypeDiplome $type_diplome): self
    {
        $this->type_diplome = $type_diplome;

        return $this;
    }

    public function getDepartement(): ?Departement
    {
        return $this->departement;
    }

    public function setDepartement(?Departement $departement): self
    {
        $this->departement = $departement;

        return $this;
    }

    /**
     * @return Collection|ApcCompetence[]
     */
    public function getApcComptences(): Collection
    {
        return $this->apcComptences;
    }

    public function addApcComptence(ApcCompetence $apcComptence): self
    {
        if (!$this->apcComptences->contains($apcComptence)) {
            $this->apcComptences[] = $apcComptence;
            $apcComptence->setApcReferentiel($this);
        }

        return $this;
    }

    public function removeApcComptence(ApcCompetence $apcComptence): self
    {
        if ($this->apcComptences->contains($apcComptence)) {
            $this->apcComptences->removeElement($apcComptence);
            // set the owning side to null (unless already changed)
            if ($apcComptence->getApcReferentiel() === $this) {
                $apcComptence->setApcReferentiel(null);
            }
        }

        return $this;
    }

    /**
     * @return Collection|ApcParcours[]
     */
    public function getApcParcours(): Collection
    {
        return $this->apcParcours;
    }

    public function addApcParcour(ApcParcours $apcParcour): self
    {
        if (!$this->apcParcours->contains($apcParcour)) {
            $this->apcParcours[] = $apcParcour;
            $apcParcour->setApcReferentiel($this);
        }

        return $this;
    }

    public function removeApcParcour(ApcParcours $apcParcour): self
    {
        // set the owning side to null (unless already changed)
        if ($this->apcParcours->removeElement($apcParcour) && $apcParcour->getApcReferentiel() === $this) {
            $apcParcour->setApcReferentiel(null);
        }

        return $this;
    }

    /**
     * @return Collection<int, Diplome>
     */
    public function getDiplomes(): Collection
    {
        return $this->diplomes;
    }

    public function addDiplome(Diplome $diplome): self
    {
        if (!$this->diplomes->contains($diplome)) {
            $this->diplomes[] = $diplome;
            $diplome->setReferentiel($this);
        }

        return $this;
    }

    public function removeDiplome(Diplome $diplome): self
    {
        // set the owning side to null (unless already changed)
        if ($this->diplomes->removeElement($diplome) && $diplome->getReferentiel() === $this) {
            $diplome->setReferentiel(null);
        }

        return $this;
    }

    public function getTypeStructure(): ?string
    {
        return $this->type_structure;
    }

    public function setTypeStructure(string $type_structure): self
    {
        $this->type_structure = $type_structure;

        return $this;
    }

    /**
     * @return Collection<int, Ppn>
     */
    public function getPpns(): Collection
    {
        return $this->ppns;
    }

    public function addPpn(Ppn $ppn): self
    {
        if (!$this->ppns->contains($ppn)) {
            $this->ppns[] = $ppn;
            $ppn->setApcReferentiel($this);
        }

        return $this;
    }

    public function removePpn(Ppn $ppn): self
    {
        // set the owning side to null (unless already changed)
        if ($this->ppns->removeElement($ppn) && $ppn->getApcReferentiel() === $this) {
            $ppn->setApcReferentiel(null);
        }

        return $this;
    }

    public function getLettreDiplome(): ?string
    {
        return $this->lettreDiplome;
    }

    public function setLettreDiplome(?string $lettreDiplome): self
    {
        $this->lettreDiplome = $lettreDiplome;

        return $this;
    }
}
