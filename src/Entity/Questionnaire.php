<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Entity/Questionnaire.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 12/03/2021 19:15
 */

namespace App\Entity;

use App\Entity\Traits\LifeCycleTrait;
use App\Entity\Traits\UuidTrait;
use DateTime;
use DateTimeInterface;
use Doctrine\ORM\Mapping as ORM;
use Ramsey\Uuid\Uuid;

/**
 * @ORM\MappedSuperclass
 * @ORM\HasLifecycleCallbacks()
 */
abstract class Questionnaire extends BaseEntity
{
    use UuidTrait;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private ?string $libelle;

    /**
     * @ORM\Column(type="datetime")
     */
    private ?DateTimeInterface $dateOuverture;

    /**
     * @ORM\Column(type="datetime")
     */
    private ?DateTimeInterface $dateFermeture;

    /**
     * @ORM\Column(type="string", length=150)
     */
    private ?string $titre;

    /**
     * @ORM\Column(type="text", nullable=true)
     */
    private ?string $texteExplication;

    /**
     * @ORM\Column(type="text", nullable=true)
     */
    private ?string $texteDebut;

    /**
     * @ORM\Column(type="text", nullable=true)
     */
    private ?string $textFin;

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

    public function getDateOuverture(): ?DateTimeInterface
    {
        return $this->dateOuverture;
    }

    public function setDateOuverture(DateTimeInterface $dateOuverture): self
    {
        $this->dateOuverture = $dateOuverture;

        return $this;
    }

    public function getDateFermeture(): ?DateTimeInterface
    {
        return $this->dateFermeture;
    }

    public function setDateFermeture(DateTimeInterface $dateFermeture): self
    {
        $this->dateFermeture = $dateFermeture;

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
        $today = new DateTime('now');

        return $today >= $this->getDateOuverture() && $today <= $this->getDateFermeture();
    }
}
