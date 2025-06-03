<?php
/*
 * Copyright (c) 2025. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Entity/Adresse.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 03/06/2025 14:14
 */

namespace App\Entity;

use App\Entity\Traits\LifeCycleTrait;
use App\Repository\AdresseRepository;
use Doctrine\DBAL\Types\Types;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Serializer\Annotation\Groups;

#[ORM\Entity(repositoryClass: AdresseRepository::class)]
#[ORM\HasLifecycleCallbacks]
class Adresse extends BaseEntity
{
    use LifeCycleTrait;

    #[Groups(groups: ['adresse'])]
    #[ORM\Column(type: Types::STRING, length: 255, nullable: true)]
    private ?string $adresse1 = '';

    #[Groups(groups: ['adresse'])]
    #[ORM\Column(type: Types::STRING, length: 255, nullable: true)]
    private ?string $adresse2 = '';

    #[Groups(groups: ['adresse'])]
    #[ORM\Column(type: Types::STRING, length: 255, nullable: true)]
    private ?string $adresse3 = '';

    #[Groups(groups: ['adresse'])]
    #[ORM\Column(type: Types::STRING, length: 10, nullable: true)]
    private ?string $codePostal = '';

    #[Groups(groups: ['adresse'])]
    #[ORM\Column(type: Types::STRING, length: 100, nullable: true)]
    private ?string $ville = '';

    #[Groups(groups: ['adresse'])]
    #[ORM\Column(type: Types::STRING, length: 100, nullable: true)]
    private ?string $pays = 'France';

    #[ORM\OneToOne(mappedBy: 'adresseAlternance', targetEntity: Alternance::class, cascade: [
        'persist',
        'remove',
    ])]
    private ?Alternance $alternance = null;

    public function getDisplay(): ?string
    {
        if ('' !== $this->getAdresse1() && '' !== $this->getCodePostal() && '' !== $this->getVille()) {
            $html = $this->getAdresse1();
            if ('' !== $this->getAdresse2()) {
                $html .= ' <br />'.$this->getAdresse2();
            }

            if ('' !== $this->getAdresse3()) {
                $html .= ' <br />'.$this->getAdresse3();
            }

            $html .= ' <br />'.$this->getCodePostal().' '.$this->getVille();
            $html .= ' <br />'.$this->getPays();
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

    public function getPays(): ?string
    {
        return $this->pays;
    }

    public function setPays(?string $pays = 'France'): self
    {
        $this->pays = $pays;

        return $this;
    }

    public function updateFromApogee(?array $dataApogee): void
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

    public function getArray(): array
    {
        return [
            'adresse1' => $this->getAdresse1(),
            'adresse2' => $this->getAdresse2(),
            'adresse3' => $this->getAdresse3(),
            'codePostal' => $this->getCodePostal(),
            'ville' => $this->getVille(),
            'pays' => $this->getPays(),
        ];
    }
}
