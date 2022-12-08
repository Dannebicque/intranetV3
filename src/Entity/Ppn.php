<?php
/*
 * Copyright (c) 2022. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Entity/Ppn.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 20/11/2022 11:08
 */

namespace App\Entity;

use App\Entity\Traits\LifeCycleTrait;
use App\Repository\PpnRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\DBAL\Types\Types;
use Doctrine\ORM\Mapping as ORM;
use JetBrains\PhpStorm\Deprecated;

#[ORM\Entity(repositoryClass: PpnRepository::class)]
#[ORM\HasLifecycleCallbacks]
class Ppn extends BaseEntity
{
    use LifeCycleTrait;

    #[ORM\Column(type: Types::STRING, length: 255)]
    private string $libelle;

    #[ORM\Column(type: Types::INTEGER)]
    private int $annee;

    /**
     * @var \Doctrine\Common\Collections\Collection<int, \App\Entity\Matiere>
     */
    #[ORM\OneToMany(mappedBy: 'ppn', targetEntity: Matiere::class)]
    private Collection $matieres;

    #[ORM\ManyToOne(targetEntity: Diplome::class, inversedBy: 'ppns')]
    private ?Diplome $diplome = null;

    /**
     * @var \Doctrine\Common\Collections\Collection<int, \App\Entity\Semestre>
     */
    /** @Deprecated(['reason' => 'La gestion du PPN se fait en lien avec l\'annee universitaire']) */
    #[ORM\OneToMany(mappedBy: 'ppnActif', targetEntity: Semestre::class)]
    private Collection $semestres;

    /**
     * @var \Doctrine\Common\Collections\Collection<int, \App\Entity\AnneeUniversitaireSemestre>
     */
    #[ORM\OneToMany(mappedBy: 'ppn', targetEntity: AnneeUniversitaireSemestre::class)]
    private Collection $anneeUniversitaireSemestres;

    #[ORM\ManyToOne(inversedBy: 'ppns')]
    private ?ApcReferentiel $apcReferentiel = null;

    public function __construct()
    {
        $this->annee = (int) date('Y');
        $this->matieres = new ArrayCollection();
        $this->semestres = new ArrayCollection();
        $this->anneeUniversitaireSemestres = new ArrayCollection();
    }

    /**
     * @return string
     */
    public function getLibelle(): ?string
    {
        return $this->libelle;
    }

    public function setLibelle(string $libelle): void
    {
        $this->libelle = $libelle;
    }

    public function getAnnee(): int
    {
        return $this->annee;
    }

    public function setAnnee(int $annee): void
    {
        $this->annee = $annee;
    }

    /**
     * @return Collection|Matiere[]
     */
    public function getMatieres(): Collection
    {
        return $this->matieres;
    }

    public function addMatiere(Matiere $matiere): self
    {
        if (!$this->matieres->contains($matiere)) {
            $this->matieres[] = $matiere;
            $matiere->setPpn($this);
        }

        return $this;
    }

    public function removeMatiere(Matiere $matiere): self
    {
        if ($this->matieres->contains($matiere)) {
            $this->matieres->removeElement($matiere);
            // set the owning side to null (unless already changed)
            if ($matiere->getPpn() === $this) {
                $matiere->setPpn(null);
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

    /**
     * @return Collection|Semestre[]
     */
    public function getSemestres(): Collection
    {
        return $this->semestres;
    }

    public function addSemestre(Semestre $semestre): self
    {
        if (!$this->semestres->contains($semestre)) {
            $this->semestres[] = $semestre;
            $semestre->setPpnActif($this);
        }

        return $this;
    }

    public function removeSemestre(Semestre $semestre): self
    {
        if ($this->semestres->contains($semestre)) {
            $this->semestres->removeElement($semestre);
            // set the owning side to null (unless already changed)
            if ($semestre->getPpnActif() === $this) {
                $semestre->setPpnActif(null);
            }
        }

        return $this;
    }

    /**
     * @return Collection<int, AnneeUniversitaireSemestre>
     */
    public function getAnneeUniversitaireSemestres(): Collection
    {
        return $this->anneeUniversitaireSemestres;
    }

    public function addAnneeUniversitaireSemestre(AnneeUniversitaireSemestre $anneeUniversitaireSemestre): self
    {
        if (!$this->anneeUniversitaireSemestres->contains($anneeUniversitaireSemestre)) {
            $this->anneeUniversitaireSemestres[] = $anneeUniversitaireSemestre;
            $anneeUniversitaireSemestre->setPpn($this);
        }

        return $this;
    }

    public function removeAnneeUniversitaireSemestre(AnneeUniversitaireSemestre $anneeUniversitaireSemestre): self
    {
        // set the owning side to null (unless already changed)
        if ($this->anneeUniversitaireSemestres->removeElement($anneeUniversitaireSemestre) && $anneeUniversitaireSemestre->getPpn() === $this) {
            $anneeUniversitaireSemestre->setPpn(null);
        }

        return $this;
    }

    public function getApcReferentiel(): ?ApcReferentiel
    {
        return $this->apcReferentiel;
    }

    public function setApcReferentiel(?ApcReferentiel $apcReferentiel): self
    {
        $this->apcReferentiel = $apcReferentiel;

        return $this;
    }
}
