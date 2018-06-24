<?php

namespace App\Entity;

use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass="App\Repository\AdresseRepository")
 * @ORM\HasLifecycleCallbacks()
 */
class Adresse extends BaseEntity
{
    /**
     * @ORM\Column(type="string", length=255)
     */
    private $adresse1;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    private $adresse2;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    private $adresse3;

    /**
     * @ORM\Column(type="string", length=10)
     */
    private $codePostal;

    /**
     * @ORM\Column(type="string", length=100)
     */
    private $ville;

    /**
     * @ORM\Column(type="string", length=100)
     */
    private $pays = 'France';

    /**
     * @return null|string
     */
    public function getAdresse1(): ?string
    {
        return $this->adresse1;
    }

    /**
     * @param string $adresse1
     *
     * @return Adresse
     */
    public function setAdresse1(string $adresse1): self
    {
        $this->adresse1 = $adresse1;

        return $this;
    }

    /**
     * @return null|string
     */
    public function getAdresse2(): ?string
    {
        return trim($this->adresse2);
    }

    /**
     * @param $adresse2
     *
     * @return Adresse
     */
    public function setAdresse2( $adresse2): self
    {
        $this->adresse2 = $adresse2;

        return $this;
    }

    /**
     * @return null|string
     */
    public function getAdresse3(): ?string
    {
        return trim($this->adresse3);
    }

    /**
     * @param $adresse3
     *
     * @return Adresse
     */
    public function setAdresse3( $adresse3): self
    {
        $this->adresse3 = $adresse3;

        return $this;
    }

    /**
     * @return null|string
     */
    public function getCodePostal(): ?string
    {
        return $this->codePostal;
    }

    /**
     * @param string $codePostal
     *
     * @return Adresse
     */
    public function setCodePostal(string $codePostal): self
    {
        $this->codePostal = $codePostal;

        return $this;
    }

    /**
     * @return null|string
     */
    public function getVille(): ?string
    {
        return $this->ville;
    }

    /**
     * @param string $ville
     *
     * @return Adresse
     */
    public function setVille(string $ville): self
    {
        $this->ville = $ville;

        return $this;
    }

    /**
     * @return null|string
     */
    public function getPays(): ?string
    {
        return $this->pays;
    }

    /**
     * @param string $pays
     *
     * @return Adresse
     */
    public function setPays(string $pays): self
    {
        $this->pays = $pays;

        return $this;
    }

    /**
     * @return null|string
     */
    public function getDisplay(): ?string
    {
        $html = $this->getAdresse1();
        if ($this->getAdresse2() !== '') {
            $html .= '<br />' . $this->getAdresse2();
        }

        if ($this->getAdresse3() !== '') {
            $html .= '<br />' . $this->getAdresse3();
        }

        $html .= '<br />' . $this->getCodePostal() . ' ' . $this->getVille();
        $html .= '<br />' . $this->getPays();

        return $html;
    }
}
