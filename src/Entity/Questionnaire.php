<?php
/*
 * Copyright (c) 2022. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Entity/Questionnaire.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 26/05/2022 18:23
 */

namespace App\Entity;

use App\Entity\Traits\UuidTrait;
use Carbon\Carbon;
use Carbon\CarbonInterface;
use Doctrine\DBAL\Types\Types;
use Doctrine\ORM\Mapping as ORM;
use Ramsey\Uuid\Uuid;

#[ORM\MappedSuperclass]
#[ORM\HasLifecycleCallbacks]
/** @deprecated Utiliser QuestQuestionnaire' */
abstract class Questionnaire extends BaseEntity
{
    use UuidTrait;

    #[ORM\Column(type: Types::STRING, length: 255)]
    private ?string $libelle = null;

    #[ORM\Column(type: Types::DATETIME_MUTABLE, nullable: true)]
    private ?CarbonInterface $dateOuverture = null;

    #[ORM\Column(type: Types::DATETIME_MUTABLE, nullable: true)]
    private ?CarbonInterface $dateFermeture = null;

    #[ORM\Column(type: Types::STRING, length: 150)]
    private ?string $titre = null;

    #[ORM\Column(type: Types::TEXT, nullable: true)]
    private ?string $texteExplication = null;

    #[ORM\Column(type: Types::TEXT, nullable: true)]
    private ?string $texteDebut = null;

    #[ORM\Column(type: Types::TEXT, nullable: true)]
    private ?string $textFin = null;

    #[ORM\ManyToOne]
    private ?Departement $departement = null;

    public function __construct()
    {
        $this->setUuid(Uuid::uuid4());
    }

    public function __clone()
    {
        $this->setUuid(Uuid::uuid4());
    }

    public function getLibelle(): ?string
    {
        return $this->libelle;
    }

    public function setLibelle(string $libelle): self
    {
        $this->libelle = $libelle;

        return $this;
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

    public function getTexteExplication(): ?string
    {
        return $this->texteExplication;
    }

    public function setTexteExplication(?string $texteExplication): self
    {
        $this->texteExplication = $texteExplication;

        return $this;
    }

    public function getTexteDebut(): ?string
    {
        return $this->texteDebut;
    }

    public function setTexteDebut(?string $texteDebut): self
    {
        $this->texteDebut = $texteDebut;

        return $this;
    }

    public function getTextFin(): ?string
    {
        return $this->textFin;
    }

    public function setTextFin(?string $textFin): self
    {
        $this->textFin = $textFin;

        return $this;
    }

    public function isOuvert(): bool
    {
        $today = Carbon::now();

        return $today >= $this->getDateOuverture() && $today <= $this->getDateFermeture();
    }

    public function getDateOuverture(): ?CarbonInterface
    {
        return $this->dateOuverture;
    }

    public function setDateOuverture(?CarbonInterface $dateOuverture): self
    {
        $this->dateOuverture = $dateOuverture;

        return $this;
    }

    public function getDateFermeture(): ?CarbonInterface
    {
        return $this->dateFermeture;
    }

    public function setDateFermeture(?CarbonInterface $dateFermeture): self
    {
        $this->dateFermeture = $dateFermeture;

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
