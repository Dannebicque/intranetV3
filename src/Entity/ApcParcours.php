<?php
/*
 * Copyright (c) 2022. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Entity/ApcParcours.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 26/05/2022 18:16
 */

namespace App\Entity;

use App\Entity\Traits\ApogeeTrait;
use App\Entity\Traits\LifeCycleTrait;
use App\Repository\ApcParcoursRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\DBAL\Types\Types;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: ApcParcoursRepository::class)]
#[ORM\HasLifecycleCallbacks]
class ApcParcours extends BaseEntity
{
    use LifeCycleTrait;
    use ApogeeTrait;

    #[ORM\Column(type: Types::STRING, length: 255)]
    private ?string $libelle = null;

    #[ORM\Column(type: Types::STRING, length: 10)]
    private ?string $code = null;

    /**
     * @var \Doctrine\Common\Collections\Collection<int, \App\Entity\ApcParcoursNiveau>
     */
    #[ORM\OneToMany(mappedBy: 'parcours', targetEntity: ApcParcoursNiveau::class)]
    private Collection $apcParcoursNiveaux;

    #[ORM\ManyToOne(targetEntity: Diplome::class, inversedBy: 'apcParcours')]
    private ?Diplome $diplome = null;

    #[ORM\Column(type: Types::BOOLEAN)]
    private bool $actif = true;

    public function __construct(Diplome $diplome)
    {
        $this->setDiplome($diplome);
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

    public function getCode(): ?string
    {
        return $this->code;
    }

    public function setCode(string $code): self
    {
        $this->code = trim($code);

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
            $apcParcoursNiveaux->setParcours($this);
        }

        return $this;
    }

    public function removeApcParcoursNiveau(ApcParcoursNiveau $apcParcoursNiveaux): self
    {
        // set the owning side to null (unless already changed)
        if ($this->apcParcoursNiveaux->removeElement($apcParcoursNiveaux) && $apcParcoursNiveaux->getParcours() === $this) {
            $apcParcoursNiveaux->setParcours(null);
        }

        return $this;
    }

    public function getDiplome(): ?Diplome
    {
        return $this->diplome;
    }

    public function setDiplome(?Diplome $diplome): self
    {
        $this->diplome = $diplome;

        return $this;
    }

    public function getActif(): ?bool
    {
        return $this->actif;
    }

    public function setActif(bool $actif): self
    {
        $this->actif = $actif;

        return $this;
    }
}
