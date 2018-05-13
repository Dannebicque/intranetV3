<?php

namespace App\Entity;

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
    private $ordre;

    /**
     * @var string
     *
     * @ORM\Column(name="couleurCM", type="string", length=7,nullable=true)
     */
    private $couleur_cm;

    /**
     * @var string
     *
     * @ORM\Column(name="couleurTD", type="string", length=7,nullable=true)
     */
    private $couleur_td;

    /**
     * @var string
     *
     * @ORM\Column(name="couleurTP", type="string", length=7,nullable=true)
     */
    private $couleur_tp;

    /**
     * @var string
     *
     * @ORM\Column(name="couleurtexte", type="string", length=7,nullable=true)
     */
    private $couleur_texte;

    /**
     * @var string
     *
     * @ORM\Column(type="string", length=150, nullable=true)
     */
    private $libelle_long;

    /**
     * @ORM\Column(type="string", length=20)
     */
    private $code_apogee;

    /**
     * @ORM\Column(type="string", length=10)
     */
    private $code_version;

    /**
     * @ORM\Column(type="string", length=10)
     */
    private $code_departement;

    /**
     * @var boolean
     *
     * @ORM\Column(type="boolean")
     */
    private $opt_alternance = false;

    /**
     * @var Diplome
     * @ORM\ManyToOne(targetEntity="App\Entity\Diplome")
     */
    private $diplome;



    /**
     * @return mixed
     */
    public function getCodeApogee()
    {
        return $this->code_apogee;
    }

    /**
     * @param mixed $code_apogee
     */
    public function setCodeApogee($code_apogee): void
    {
        $this->code_apogee = $code_apogee;
    }

    /**
     * @return mixed
     */
    public function getCodeVersion()
    {
        return $this->code_version;
    }

    /**
     * @param mixed $code_version
     */
    public function setCodeVersion($code_version): void
    {
        $this->code_version = $code_version;
    }

    /**
     * @return mixed
     */
    public function getCodeDepartement()
    {
        return $this->code_departement;
    }

    /**
     * @param mixed $code_departement
     */
    public function setCodeDepartement($code_departement): void
    {
        $this->code_departement = $code_departement;
    }

    /**
     * @return Diplome
     */
    public function getDiplome(): ?Diplome
    {
        return $this->diplome;
    }

    /**
     * @param Diplome $diplome
     */
    public function setDiplome(Diplome $diplome): void
    {
        $this->diplome = $diplome;
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
    public function getOrdre(): int
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
        return $this->couleur_cm;
    }

    /**
     * @param string $couleur_cm
     */
    public function setCouleurCm(string $couleur_cm): void
    {
        $this->couleur_cm = $couleur_cm;
    }

    /**
     * @return string
     */
    public function getCouleurTd(): ?string
    {
        return $this->couleur_td;
    }

    /**
     * @param string $couleur_td
     */
    public function setCouleurTd(string $couleur_td): void
    {
        $this->couleur_td = $couleur_td;
    }

    /**
     * @return string
     */
    public function getCouleurTp(): ?string
    {
        return $this->couleur_tp;
    }

    /**
     * @param string $couleur_tp
     */
    public function setCouleurTp(string $couleur_tp): void
    {
        $this->couleur_tp = $couleur_tp;
    }

    /**
     * @return string
     */
    public function getCouleurTexte(): ?string
    {
        return $this->couleur_texte;
    }

    /**
     * @param string $couleur_texte
     */
    public function setCouleurTexte(string $couleur_texte): void
    {
        $this->couleur_texte = $couleur_texte;
    }

    /**
     * @return string
     */
    public function getLibelleLong(): ?string
    {
        return $this->libelle_long;
    }

    /**
     * @param string $libelle_long
     */
    public function setLibelleLong(string $libelle_long): void
    {
        $this->libelle_long = $libelle_long;
    }

    /**
     * @return bool
     */
    public function isOptAlternance(): bool
    {
        return $this->opt_alternance;
    }

    /**
     * @param bool $opt_alternance
     */
    public function setOptAlternance(bool $opt_alternance): void
    {
        $this->opt_alternance = $opt_alternance;
    }
}
