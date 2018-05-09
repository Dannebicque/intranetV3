<?php

namespace App\Entity;

use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass="App\Repository\AdresseRepository")
 * @ORM\HasLifecycleCallbacks()
 */
class Adresse
{
    /**
     * @ORM\Id()
     * @ORM\GeneratedValue()
     * @ORM\Column(type="integer")
     */
    private $id;

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
    private $code_postal;

    /**
     * @ORM\Column(type="string", length=100)
     */
    private $ville;

    /**
     * @ORM\Column(type="string", length=100)
     */
    private $pays = 'France';

    public function getId()
    {
        return $this->id;
    }

    /**
     * @ORM\PreUpdate()
     * @ORM\PrePersist()
     */
    public function setUpdatedValue(): void
    {
        $this->updated = new \DateTime();
    }

    /**
     * @ORM\PrePersist()
     */
    public function setCreatedValue(): void
    {
        $this->created = new \DateTime();
    }

    public function getAdresse1(): ?string
    {
        return $this->adresse1;
    }

    public function setAdresse1(string $adresse1): self
    {
        $this->adresse1 = $adresse1;

        return $this;
    }

    public function getAdresse2(): ?string
    {
        return trim($this->adresse2);
    }

    public function setAdresse2( $adresse2): self
    {
        $this->adresse2 = $adresse2;

        return $this;
    }

    public function getAdresse3(): ?string
    {
        return trim($this->adresse3);
    }

    public function setAdresse3( $adresse3): self
    {
        $this->adresse3 = $adresse3;

        return $this;
    }

    public function getCodePostal(): ?string
    {
        return $this->code_postal;
    }

    public function setCodePostal(string $code_postal): self
    {
        $this->code_postal = $code_postal;

        return $this;
    }

    public function getVille(): ?string
    {
        return $this->ville;
    }

    public function setVille(string $ville): self
    {
        $this->ville = $ville;

        return $this;
    }

    public function getPays(): ?string
    {
        return $this->pays;
    }

    public function setPays(string $pays): self
    {
        $this->pays = $pays;

        return $this;
    }

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
