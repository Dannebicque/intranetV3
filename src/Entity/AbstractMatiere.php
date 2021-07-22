<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Entity/AbstractMatiere.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 22/07/2021 15:44
 */

namespace App\Entity;

use App\Utils\Tools;
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
     * @ORM\Column(type="string", length=20)
     */
    private ?string $codeElement;

    /**
     * @ORM\Column(type="boolean")
     * @Groups({"matiere_administration"})
     */
    private bool $suspendu = false;

    /**
     * @ORM\Column(type="string", length=25, nullable=true)
     */
    private ?string $libelleCourt;

    public function getCmPpn(): float
    {
        return $this->cmPpn;
    }

    public function setCmPpn(mixed $cmPpn): void
    {
        $this->cmPpn = Tools::convertToFloat($cmPpn);
    }

    public function getTdPpn(): float
    {
        return $this->tdPpn;
    }

    public function setTdPpn(mixed $tdPpn): void
    {
        $this->tdPpn = Tools::convertToFloat($tdPpn);
    }

    public function getTpPpn(): float
    {
        return $this->tpPpn;
    }

    public function setTpPpn(mixed $tpPpn): void
    {
        $this->tpPpn = Tools::convertToFloat($tpPpn);
    }

    public function getCmFormation(): float
    {
        return $this->cmFormation;
    }

    public function setCmFormation(mixed $cmFormation): void
    {
        $this->cmFormation = Tools::convertToFloat($cmFormation);
    }

    public function getTdFormation(): float
    {
        return $this->tdFormation;
    }

    public function setTdFormation(mixed $tdFormation): void
    {
        $this->tdFormation = Tools::convertToFloat($tdFormation);
    }

    public function getTpFormation(): float
    {
        return $this->tpFormation;
    }

    public function setTpFormation(mixed $tpFormation): void
    {
        $this->tpFormation = Tools::convertToFloat($tpFormation);
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

    public function getCodeMatiere(): ?string
    {
        return $this->codeMatiere;
    }

    public function setCodeMatiere(string $codeMatiere): void
    {
        $this->codeMatiere = trim($codeMatiere);
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

    public function getLibelleCourt(): ?string
    {
        return $this->libelleCourt;
    }

    public function setLibelleCourt(?string $libelleCourt): self
    {
        $this->libelleCourt = $libelleCourt;

        return $this;
    }

    public function initTabJson()
    {
        $t = [];
        $t['id'] = $this->getId();
        $t['libelle'] = $this->getLibelle();
        $t['display'] = '-';
        $t['cmFormation'] = $this->getCmFormation();
        $t['tdFormation'] = $this->getTdFormation();
        $t['tpFormation'] = $this->getTpFormation();
        $t['cmPpn'] = $this->getCmPpn();
        $t['tdPpn'] = $this->getTdPpn();
        $t['tpPpn'] = $this->getTpPpn();
        $t['ptutFormation'] = null;
        $t['ptutPpn'] = null;

        return $t;
    }
}
