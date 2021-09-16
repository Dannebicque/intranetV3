<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Entity/Adresse.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 16/09/2021 09:25
 */

namespace App\Entity;

use App\Entity\Traits\LifeCycleTrait;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Serializer\Annotation\Groups;

/**
 * @ORM\Entity(repositoryClass="App\Repository\AdresseRepository")
 * @ORM\HasLifecycleCallbacks()
 */
class Adresse extends BaseEntity
{
    use LifeCycleTrait;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     * @Groups({"adresse"})
     */
    private ?string $adresse1 = '';

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     * @Groups({"adresse"})
     */
    private ?string $adresse2 = '';

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     * @Groups({"adresse"})
     */
    private ?string $adresse3 = '';

    /**
     * @ORM\Column(type="string", length=10, nullable=true)
     * @Groups({"adresse"})
     */
    private ?string $codePostal = '';

    /**
     * @ORM\Column(type="string", length=100, nullable=true)
     * @Groups({"adresse"})
     */
    private ?string $ville = '';

    /**
     * @ORM\Column(type="string", length=100, nullable=true)
     * @Groups({"adresse"})
     */
    private ?string $pays = 'France';

    /**
     * @ORM\OneToOne(targetEntity="App\Entity\Alternance", mappedBy="adresseAlternance", cascade={"persist", "remove"})
     */
    private ?Alternance $alternance;

    /**
     * Adresse constructor.
     */
    public function __construct()
    {
    }

    public function getDisplay(): ?string
    {
        if ('' !== $this->getAdresse1() && '' !== $this->getCodePostal() && '' !== $this->getVille()) {
            $html = $this->getAdresse1();
            if ('' !== $this->getAdresse2()) {
                $html .= ' <br />' . $this->getAdresse2();
            }

            if ('' !== $this->getAdresse3()) {
                $html .= ' <br />' . $this->getAdresse3();
            }

            $html .= ' <br />' . $this->getCodePostal() . ' ' . $this->getVille();
            $html .= ' <br />' . $this->getPays();
        } else {
            $html = '';
        }

        return $html;
    }

    public function getAdresse1(): ?string
    {
        return $this->adresse1;
    }

    public function setAdresse1(?string $adresse1 = ''): self
    {
        $this->adresse1 = $adresse1;

        return $this;
    }

    public function getAdresse2(): ?string
    {
        return trim($this->adresse2);
    }

    public function setAdresse2(?string $adresse2 = ''): self
    {
        $this->adresse2 = $adresse2;

        return $this;
    }

    public function getAdresse3(): ?string
    {
        return trim($this->adresse3);
    }

    public function setAdresse3(?string $adresse3 = ''): self
    {
        $this->adresse3 = $adresse3;

        return $this;
    }

    public function getCodePostal(): ?string
    {
        return $this->codePostal;
    }

    public function setCodePostal(?string $codePostal = ''): self
    {
        $this->codePostal = $codePostal;

        return $this;
    }

    public function getVille(): ?string
    {
        return $this->ville;
    }

    public function setVille(?string $ville = ''): self
    {
        $this->ville = $ville;

        return $this;
    }

    public function getPays(): ?string
    {
        return $this->pays;
    }

    public function setPays(?string $pays = 'France'): self
    {
        $this->pays = $pays;

        return $this;
    }

    /**
     * @param $dataApogee
     */
    public function updateFromApogee($dataApogee): void
    {
        foreach ($dataApogee as $key => $value) {
            if (method_exists($this, $key)) {
                $this->$key($value);
            }
        }
    }

    public function getAlternance(): ?Alternance
    {
        return $this->alternance;
    }

    public function setAlternance(?Alternance $alternance): self
    {
        $this->alternance = $alternance;

        // set (or unset) the owning side of the relation if necessary
        $newAdresseAlternance = null === $alternance ? null : $this;
        if ($alternance->getAdresseAlternance() !== $newAdresseAlternance) {
            $alternance->setAdresseAlternance($newAdresseAlternance);
        }

        return $this;
    }
}
