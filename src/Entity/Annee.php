<?php
// Copyright (c) 2020. | David Annebicque | IUT de Troyes  - All Rights Reserved
// @file /Users/davidannebicque/htdocs/intranetV3/src/Entity/Annee.php
// @author davidannebicque
// @project intranetV3
// @lastUpdate 26/09/2020 08:52

namespace App\Entity;

use App\Classes\Tools;
use App\Entity\Traits\ApogeeTrait;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Serializer\Annotation\Groups;

/**
 * @ORM\Entity(repositoryClass="App\Repository\AnneeRepository")
 * @ORM\HasLifecycleCallbacks()
 */
class Annee extends BaseEntity
{
    use ApogeeTrait;

    /**
     * @ORM\Column(type="string", length=255)
     * @Groups({"annee"})
     */
    private $libelle;

    /**
     * @var integer
     *
     * @ORM\Column(name="ordre", type="integer")
     */
    private $ordre = 1;

    /**
     * @var string
     *
     * @ORM\Column(name="couleurCM", type="string", length=7,nullable=true)
     */
    private $couleurCm;

    /**
     * @var string
     *
     * @ORM\Column(name="couleurTD", type="string", length=7,nullable=true)
     */
    private $couleurTd;

    /**
     * @var string
     *
     * @ORM\Column(name="couleurTP", type="string", length=7,nullable=true)
     */
    private $couleurTp;

    /**
     * @var string
     *
     * @ORM\Column(name="couleurtexte", type="string", length=7,nullable=true)
     */
    private $couleurTexte;

    /**
     * @var string
     *
     * @ORM\Column(type="string", length=150, nullable=true)
     * @Groups({"annee"})
     */
    private $libelleLong;

    /**
     * @var boolean
     *
     * @ORM\Column(type="boolean")
     */
    private $optAlternance = false;

    /**
     * @ORM\ManyToOne(targetEntity="App\Entity\Diplome", inversedBy="annees")
     */
    private $diplome;

    /**
     * @ORM\OneToMany(targetEntity="App\Entity\Semestre", mappedBy="annee")
     * @ORM\OrderBy({"ordreLmd"="ASC"})
     */
    private $semestres;

    /**
     * @ORM\Column(type="boolean")
     */
    private $actif = true;

    /**
     * @ORM\OneToMany(targetEntity="App\Entity\Alternance", mappedBy="annee")
     */
    private $alternances;

    /**
     * @ORM\Column(type="string", length=30)
     */
    private $couleur;

    public function __construct()
    {
        $this->semestres = new ArrayCollection();
        $this->alternances = new ArrayCollection();
    }

    /**
     * @return string
     */
    public function getLibelle(): ?string
    {
        return $this->libelle;
    }

    /**
     * @param mixed $libelle
     */
    public function setLibelle($libelle): void
    {
        $this->libelle = $libelle;
    }

    /**
     * @return int
     */
    public function getOrdre(): ?int
    {
        return $this->ordre;
    }

    /**
     * @param int $ordre
     */
    public function setOrdre(int $ordre): void
    {
        $this->ordre = $ordre;
    }

    /**
     * @return string
     */
    public function getCouleurCm(): ?string
    {
        return $this->couleurCm;
    }

    /**
     * @param string $couleurCm
     */
    public function setCouleurCm(string $couleurCm): void
    {
        $this->couleurCm = $couleurCm;
    }

    /**
     * @return string
     */
    public function getCouleurTd(): ?string
    {
        return $this->couleurTd;
    }

    /**
     * @param string $couleurTd
     */
    public function setCouleurTd(string $couleurTd): void
    {
        $this->couleurTd = $couleurTd;
    }

    /**
     * @return string
     */
    public function getCouleurTp(): ?string
    {
        return $this->couleurTp;
    }

    /**
     * @param string $couleurTp
     */
    public function setCouleurTp(string $couleurTp): void
    {
        $this->couleurTp = $couleurTp;
    }

    /**
     * @return string
     */
    public function getCouleurTexte(): ?string
    {
        return $this->couleurTexte;
    }

    /**
     * @param string $couleurTexte
     */
    public function setCouleurTexte(string $couleurTexte): void
    {
        $this->couleurTexte = $couleurTexte;
    }

    /**
     * @return string
     */
    public function getLibelleLong(): ?string
    {
        return $this->libelleLong;
    }

    /**
     * @param string $libelleLong
     */
    public function setLibelleLong(string $libelleLong): void
    {
        $this->libelleLong = $libelleLong;
    }

    /**
     * @return bool
     */
    public function isOptAlternance(): bool
    {
        return $this->optAlternance;
    }

    /**
     * @param bool $optAlternance
     */
    public function setOptAlternance(bool $optAlternance): void
    {
        $this->optAlternance = $optAlternance;
    }

    /**
     * @param $name
     * @param $value
     */
    public function update($name, $value): void
    {
        Tools::updateFields($name, $value, $this);
    }

    /**
     * @return Diplome|null
     */
    public function getDiplome(): ?Diplome
    {
        return $this->diplome;
    }

    /**
     * @param Diplome|null $diplome
     *
     * @return Annee
     */
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

    /**
     * @param Semestre $semestre
     *
     * @return Annee
     */
    public function addSemestre(Semestre $semestre): self
    {
        if (!$this->semestres->contains($semestre)) {
            $this->semestres[] = $semestre;
            $semestre->setAnnee($this);
        }

        return $this;
    }

    /**
     * @param Semestre $semestre
     *
     * @return Annee
     */
    public function removeSemestre(Semestre $semestre): self
    {
        if ($this->semestres->contains($semestre)) {
            $this->semestres->removeElement($semestre);
            // set the owning side to null (unless already changed)
            if ($semestre->getAnnee() === $this) {
                $semestre->setAnnee(null);
            }
        }

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

    /**
     * @return Collection|Alternance[]
     */
    public function getAlternances(): Collection
    {
        return $this->alternances;
    }

    public function addAlternance(Alternance $alternance): self
    {
        if (!$this->alternances->contains($alternance)) {
            $this->alternances[] = $alternance;
            $alternance->setAnnee($this);
        }

        return $this;
    }

    public function removeAlternance(Alternance $alternance): self
    {
        if ($this->alternances->contains($alternance)) {
            $this->alternances->removeElement($alternance);
            // set the owning side to null (unless already changed)
            if ($alternance->getAnnee() === $this) {
                $alternance->setAnnee(null);
            }
        }

        return $this;
    }

    public function getAnneeUniversitaire() {
        if ($this->getDiplome() !== null && $this->getDiplome()->getAnneeUniversitaire() !== null) {
            return $this->getDiplome()->getAnneeUniversitaire()->getAnnee();
        }

        return 0;
    }

    public function getCouleur(): ?string
    {
        return $this->couleur;
    }

    public function setCouleur(string $couleur): self
    {
        $this->couleur = $couleur;

        return $this;
    }

    public function getOptAlternance(): ?bool
    {
        return $this->optAlternance;
    }
}
