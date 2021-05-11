<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Entity/AbstractMatiere.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 11/05/2021 08:46
 */

namespace App\Entity;

use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Serializer\Annotation\Groups;

/**
 * Class AbstractMatiere.
 *
 * @ORM\MappedSuperclass
 */
abstract class AbstractMatiere extends BaseEntity
{
    /**
     * @ORM\Column(type="string", length=255)
     * @Groups({"matiere"})
     */
    private string $libelle;

    /**
     * @ORM\Column(type="text", nullable=true)
     */
    private ?string $description;

    /**
     * @ORM\Column(type="float")
     * @Groups({"matiere_administration"})
     */
    private float $cmPpn = 0;

    /**
     * @ORM\Column(type="float")
     * @Groups({"matiere_administration"})
     */
    private float $tdPpn = 0;

    /**
     * @ORM\Column(type="float")
     * @Groups({"matiere_administration"})
     */
    private float $tpPpn = 0;

    /**
     * @ORM\Column(type="float")
     * @Groups({"matiere_administration"})
     */
    private float $cmFormation = 0;

    /**
     * @ORM\Column(type="float")
     * @Groups({"matiere_administration"})
     */
    private float $tdFormation = 0;

    /**
     * @ORM\Column(type="float")
     * @Groups({"matiere_administration"})
     */
    private float $tpFormation = 0;

    /**
     * @ORM\Column(type="text",nullable=true)
     */
    private ?string $commentaire = '';

    /**
     * @ORM\Column(type="string", length=20)
     * @Groups({"matiere"})
     */
    private ?string $codeMatiere;

    /**
     * @ORM\Column(type="integer")
     * @Groups({"matiere_administration"})
     */
    private int $nbNotes = 2;

    /**
     * @ORM\Column(type="float")
     * @Groups({"matiere_administration"})
     */
    private float $coefficient = 1;

    /**
     * @ORM\Column(type="string", length=20)
     */
    private ?string $codeElement;

    /**
     * @ORM\Column(type="boolean")
     * @Groups({"matiere_administration"})
     */
    private bool $suspendu = false;

    public function getCmPpn(): float
    {
        return $this->cmPpn;
    }

    public function setCmPpn(float $cmPpn): void
    {
        $this->cmPpn = $cmPpn;
    }

    public function getTdPpn(): float
    {
        return $this->tdPpn;
    }

    public function setTdPpn(float $tdPpn): void
    {
        $this->tdPpn = $tdPpn;
    }

    public function getTpPpn(): float
    {
        return $this->tpPpn;
    }

    public function setTpPpn(float $tpPpn): void
    {
        $this->tpPpn = $tpPpn;
    }

    public function getCmFormation(): float
    {
        return $this->cmFormation;
    }

    public function setCmFormation(float $cmFormation): void
    {
        $this->cmFormation = $cmFormation;
    }

    public function getTdFormation(): float
    {
        return $this->tdFormation;
    }

    public function setTdFormation(float $tdFormation): void
    {
        $this->tdFormation = $tdFormation;
    }

    public function getTpFormation(): float
    {
        return $this->tpFormation;
    }

    public function setTpFormation(float $tpFormation): void
    {
        $this->tpFormation = $tpFormation;
    }

    /**
     * @return string
     */
    public function getCommentaire(): ?string
    {
        return $this->commentaire;
    }

    public function setCommentaire(?string $commentaire): void
    {
        $this->commentaire = $commentaire;
    }

    public function getNbNotes(): int
    {
        return $this->nbNotes;
    }

    public function setNbNotes(int $nbNotes): void
    {
        $this->nbNotes = $nbNotes;
    }

    public function getCoefficient(): float
    {
        return $this->coefficient;
    }

    public function setCoefficient(float $coefficient): void
    {
        $this->coefficient = $coefficient;
    }

    public function isSuspendu(): bool
    {
        return $this->suspendu;
    }

    public function setSuspendu(bool $suspendu): self
    {
        $this->suspendu = $suspendu;

        return $this;
    }

    public function getDisplay(): string
    {
        return $this->getCodeMatiere() . ' | ' . $this->getLibelle();
    }

    /**
     * @return string
     */
    public function getCodeMatiere(): ?string
    {
        return $this->codeMatiere;
    }

    public function setCodeMatiere(string $codeMatiere): void
    {
        $this->codeMatiere = $codeMatiere;
    }

    public function getLibelle(): string
    {
        return $this->libelle;
    }

    public function setLibelle($libelle): void
    {
        $this->libelle = $libelle;
    }

    public function getCodeElement(): ?string
    {
        return $this->codeElement;
    }

    public function setCodeElement(string $codeElement): self
    {
        $this->codeElement = $codeElement;

        return $this;
    }

    public function getDescription(): ?string
    {
        return $this->description;
    }

    public function setDescription(?string $description): self
    {
        $this->description = $description;

        return $this;
    }
}
