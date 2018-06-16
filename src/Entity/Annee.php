<?php

namespace App\Entity;

use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass="App\Repository\AnneeRepository")
 * @ORM\HasLifecycleCallbacks()
 */
class Annee extends BaseEntity
{
    /**
     * @ORM\Column(type="string", length=255)
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
     */
    private $libelleLong;

    /**
     * @ORM\Column(type="string", length=20)
     */
    private $codeApogee;

    /**
     * @ORM\Column(type="string", length=10)
     */
    private $codeVersion;

    /**
     * @ORM\Column(type="string", length=10)
     */
    private $codeDepartement;

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
     */
    private $semestres;

    public function __construct()
    {
        $this->semestres = new ArrayCollection();
    }


    /**
     * @return mixed
     */
    public function getCodeApogee()
    {
        return $this->codeApogee;
    }

    /**
     * @param mixed $codeApogee
     */
    public function setCodeApogee($codeApogee): void
    {
        $this->codeApogee = $codeApogee;
    }

    /**
     * @return mixed
     */
    public function getCodeVersion()
    {
        return $this->codeVersion;
    }

    /**
     * @param mixed $codeVersion
     */
    public function setCodeVersion($codeVersion): void
    {
        $this->codeVersion = $codeVersion;
    }

    /**
     * @return mixed
     */
    public function getCodeDepartement()
    {
        return $this->codeDepartement;
    }

    /**
     * @param mixed $codeDepartement
     */
    public function setCodeDepartement($codeDepartement): void
    {
        $this->codeDepartement = $codeDepartement;
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

    public function update($name, $value): void
    {
        $t = explode('_', $name);
        $name = $t[0];
        $name[0] = \chr(\ord($name[0]) - 32);

        $method = 'set' . $name;
        if (method_exists($this, $method)) {
            $this->$method($value);
        }
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
            $semestre->setAnnee($this);
        }

        return $this;
    }

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
}
