<?php
/*
 * Copyright (c) 2022. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Entity/Actualite.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 06/05/2022 20:32
 */

namespace App\Entity;

use App\Entity\Traits\LifeCycleTrait;
use App\Repository\ActualiteRepository;
use Doctrine\DBAL\Types\Types;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Serializer\Annotation\Groups;

#[ORM\Entity(repositoryClass: ActualiteRepository::class)]
#[ORM\HasLifecycleCallbacks]
class Actualite extends BaseEntity
{
    use LifeCycleTrait;

    #[Groups(groups: ['actualite_administration'])]
    #[ORM\Column(type: Types::STRING, length: 150)]
    private ?string $titre = null;

    #[Groups(groups: ['actualite_administration'])]
    #[ORM\Column(type: Types::TEXT)]
    private ?string $texte = null;

    #[ORM\ManyToOne(targetEntity: Departement::class, inversedBy: 'actualites')]
    #[Groups(groups: ['actualite_administration'])]
    private ?Departement $departement;

    public function __construct(?Departement $departement)
    {
        $this->departement = $departement;
    }

    public function getTitre(): ?string
    {
        return $this->titre;
    }

    public function setTitre(string $titre): self
    {
        $this->titre = $titre;

        return $this;
    }

    public function getTexte(): ?string
    {
        return $this->texte;
    }

    public function setTexte(string $texte): self
    {
        $this->texte = $texte;

        return $this;
    }

    public function getDepartement(): ?Departement
    {
        return $this->departement;
    }

    public function setDepartement(?Departement $departement): self
    {
        $this->departement = $departement;

        return $this;
    }
}
