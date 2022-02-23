<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Entity/CreneauBloque.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 07/02/2021 10:49
 */

namespace App\Entity;

use App\Repository\CreneauBloqueRepository;
use Doctrine\DBAL\Types\Types;
use Doctrine\ORM\Mapping as ORM;
use JetBrains\PhpStorm\Deprecated;

#[ORM\Entity(repositoryClass: CreneauBloqueRepository::class)]
#[Deprecated(reason: "N'est pas utilisé... a supprimer")]
class CreneauBloque
{
    //tous les créneaux bloqués, hors vacances, récupérés depuis Date ?
    public const TAB_VACANCES = 'va';
    public const TAB_FERIE = 'fe';
    public const TAB_OBLIGATOIRE = 'ob';
    public const TAB_AUTRE = 'au';

    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column(type: Types::INTEGER)]
    private ?int $id = null;

    #[ORM\ManyToOne(targetEntity: CreneauCours::class, inversedBy: 'creneauBloques')]
    private ?CreneauCours $creneau = null;

    #[ORM\ManyToOne(targetEntity: Calendrier::class, inversedBy: 'creneauBloques')]
    private ?Calendrier $semaine = null;

    #[ORM\Column(type: Types::STRING, length: 255, nullable: true)]
    private ?string $texte = null;

    #[ORM\Column(type: Types::BOOLEAN)]
    private bool $obligatoire = true;

    #[ORM\Column(type: Types::STRING, length: 2)]
    private ?string $type = null;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getCreneau(): ?CreneauCours
    {
        return $this->creneau;
    }

    public function setCreneau(?CreneauCours $creneau): self
    {
        $this->creneau = $creneau;

        return $this;
    }

    public function getSemaine(): ?Calendrier
    {
        return $this->semaine;
    }

    public function setSemaine(?Calendrier $semaine): self
    {
        $this->semaine = $semaine;

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

    public function getObligatoire(): ?bool
    {
        return $this->obligatoire;
    }

    public function setObligatoire(bool $obligatoire): self
    {
        $this->obligatoire = $obligatoire;

        return $this;
    }

    public function getType(): ?string
    {
        return $this->type;
    }

    public function setType(string $type): self
    {
        $this->type = $type;

        return $this;
    }
}
