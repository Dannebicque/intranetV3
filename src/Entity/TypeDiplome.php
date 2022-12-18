<?php
/*
 * Copyright (c) 2022. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Entity/TypeDiplome.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 18/12/2022 11:12
 */

namespace App\Entity;

use App\Entity\Traits\LifeCycleTrait;
use App\Repository\TypeDiplomeRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\DBAL\Types\Types;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Serializer\Annotation\Groups;

#[ORM\Entity(repositoryClass: TypeDiplomeRepository::class)]
#[ORM\HasLifecycleCallbacks]
class TypeDiplome extends BaseEntity
{
    use LifeCycleTrait;

    /**
     * @var \Doctrine\Common\Collections\Collection<int, \App\Entity\Diplome>
     */
    #[ORM\OneToMany(mappedBy: 'typeDiplome', targetEntity: Diplome::class)]
    private Collection $diplomes;

    #[Groups(['type_diplome_administration'])]
    #[ORM\Column(type: Types::STRING, length: 255)]
    private ?string $libelle = null;

    #[Groups(['type_diplome_administration'])]
    #[ORM\Column(type: Types::STRING, length: 20)]
    private ?string $sigle = null;

    #[Groups(['type_diplome_administration'])]
    #[ORM\Column(type: Types::INTEGER)]
    private int $nbSemestres = 2;

    #[Groups(['type_diplome_administration'])]
    #[ORM\Column(type: Types::INTEGER)]
    private int $niveauEntree = 0;

    #[Groups(['type_diplome_administration'])]
    #[ORM\Column(type: Types::INTEGER)]
    private int $niveauSortie = 3;

    #[ORM\Column(type: Types::BOOLEAN)]
    private bool $apc = false;

    #[ORM\OneToMany(mappedBy: 'type_diplome', targetEntity: ApcReferentiel::class)]
    private Collection $apcReferentiels;

    #[ORM\OneToMany(mappedBy: 'type_diplome', targetEntity: MccTypeEpreuve::class)]
    private Collection $mccTypeEpreuves;

    public function __construct()
    {
        $this->diplomes = new ArrayCollection();
        $this->apcReferentiels = new ArrayCollection();
        $this->mccTypeEpreuves = new ArrayCollection();
    }

    public function getLibelle(): ?string
    {
        return $this->libelle;
    }

    public function setLibelle(?string $libelle): void
    {
        $this->libelle = $libelle;
    }

    public function getSigle(): ?string
    {
        return $this->sigle;
    }

    public function setSigle(string $sigle): void
    {
        $this->sigle = $sigle;
    }

    public function getNbSemestres(): int
    {
        return $this->nbSemestres;
    }

    public function setNbSemestres(int $nbSemestres): void
    {
        $this->nbSemestres = $nbSemestres;
    }

    public function getNiveauEntree(): int
    {
        return $this->niveauEntree;
    }

    public function setNiveauEntree(int $niveauEntree): void
    {
        $this->niveauEntree = $niveauEntree;
    }

    public function getNiveauSortie(): int
    {
        return $this->niveauSortie;
    }

    public function setNiveauSortie(int $niveauSortie): void
    {
        $this->niveauSortie = $niveauSortie;
    }

    /**
     * @return Collection|Diplome[]
     */
    public function getDiplomes(): Collection
    {
        return $this->diplomes;
    }

    public function addDiplome(Diplome $diplome): self
    {
        if (!$this->diplomes->contains($diplome)) {
            $this->diplomes[] = $diplome;
            $diplome->setTypeDiplome($this);
        }

        return $this;
    }

    public function removeDiplome(Diplome $diplome): self
    {
        if ($this->diplomes->contains($diplome)) {
            $this->diplomes->removeElement($diplome);
            // set the owning side to null (unless already changed)
            if ($diplome->getTypeDiplome() === $this) {
                $diplome->setTypeDiplome(null);
            }
        }

        return $this;
    }

    public function getApc(): ?bool
    {
        return $this->apc;
    }

    public function setApc(bool $apc): self
    {
        $this->apc = $apc;

        return $this;
    }

    /**
     * @return Collection<int, ApcReferentiel>
     */
    public function getApcReferentiels(): Collection
    {
        return $this->apcReferentiels;
    }

    public function addApcReferentiel(ApcReferentiel $apcReferentiel): self
    {
        if (!$this->apcReferentiels->contains($apcReferentiel)) {
            $this->apcReferentiels[] = $apcReferentiel;
            $apcReferentiel->setTypeDiplome($this);
        }

        return $this;
    }

    public function removeApcReferentiel(ApcReferentiel $apcReferentiel): self
    {
        if ($this->apcReferentiels->removeElement($apcReferentiel)) {
            // set the owning side to null (unless already changed)
            if ($apcReferentiel->getTypeDiplome() === $this) {
                $apcReferentiel->setTypeDiplome(null);
            }
        }

        return $this;
    }

    /**
     * @return Collection<int, MccTypeEpreuve>
     */
    public function getMccTypeEpreuves(): Collection
    {
        return $this->mccTypeEpreuves;
    }

    public function addMccTypeEpreufe(MccTypeEpreuve $mccTypeEpreufe): self
    {
        if (!$this->mccTypeEpreuves->contains($mccTypeEpreufe)) {
            $this->mccTypeEpreuves->add($mccTypeEpreufe);
            $mccTypeEpreufe->setTypeDiplome($this);
        }

        return $this;
    }

    public function removeMccTypeEpreufe(MccTypeEpreuve $mccTypeEpreufe): self
    {
        if ($this->mccTypeEpreuves->removeElement($mccTypeEpreufe)) {
            // set the owning side to null (unless already changed)
            if ($mccTypeEpreufe->getTypeDiplome() === $this) {
                $mccTypeEpreufe->setTypeDiplome(null);
            }
        }

        return $this;
    }
}
