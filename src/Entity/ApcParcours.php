<?php
// Copyright (c) 2020. | David Annebicque | IUT de Troyes  - All Rights Reserved
// @file /Users/davidannebicque/htdocs/intranetV3/src/Entity/ApcParcours.php
// @author davidannebicque
// @project intranetV3
// @lastUpdate 13/12/2020 20:18

namespace App\Entity;

use App\Repository\ApcParcoursRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass=ApcParcoursRepository::class)
 */
class ApcParcours
{
    /**
     * @ORM\Id
     * @ORM\GeneratedValue
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $libelle;

    /**
     * @ORM\Column(type="string", length=10)
     */
    private $code;

    /**
     * @ORM\OneToMany(targetEntity=ApcParcoursNiveau::class, mappedBy="parcours")
     */
    private $apcParcoursNiveaux;

    /**
     * @ORM\ManyToOne(targetEntity=Diplome::class, inversedBy="apcParcours")
     */
    private $diplome;

    public function __construct(Diplome $diplome)
    {
        $this->setDiplome($diplome);
        $this->apcParcoursNiveaux = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
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
        $this->code = $code;

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
        if ($this->apcParcoursNiveaux->removeElement($apcParcoursNiveaux)) {
            // set the owning side to null (unless already changed)
            if ($apcParcoursNiveaux->getParcours() === $this) {
                $apcParcoursNiveaux->setParcours(null);
            }
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
}
