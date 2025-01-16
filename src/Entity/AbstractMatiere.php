<?php
/*
 * Copyright (c) 2025. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Entity/AbstractMatiere.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 16/01/2025 17:01
 */

namespace App\Entity;

use App\Utils\Tools;
use Doctrine\DBAL\Types\Types;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Serializer\Annotation\Groups;

/**
 * Class AbstractMatiere.
 */
#[ORM\MappedSuperclass]
abstract class AbstractMatiere extends BaseEntity
{
    #[Groups(groups: ['matiere'])]
    #[ORM\Column(type: Types::STRING, length: 255)]
    private string $libelle;

    #[ORM\Column(type: Types::TEXT, nullable: true)]
    private ?string $description = null;

    #[Groups(groups: ['matiere_administration'])]
    #[ORM\Column(type: Types::FLOAT)]
    private float $cmPpn = 0;

    #[Groups(groups: ['matiere_administration'])]
    #[ORM\Column(type: Types::FLOAT)]
    private float $tdPpn = 0;

    #[Groups(groups: ['matiere_administration'])]
    #[ORM\Column(type: Types::FLOAT)]
    private float $tpPpn = 0;

    #[Groups(groups: ['matiere_administration'])]
    #[ORM\Column(type: Types::FLOAT)]
    private float $cmFormation = 0;

    #[Groups(groups: ['matiere_administration'])]
    #[ORM\Column(type: Types::FLOAT)]
    private float $tdFormation = 0;

    #[Groups(groups: ['matiere_administration'])]
    #[ORM\Column(type: Types::FLOAT)]
    private float $tpFormation = 0;

    #[ORM\Column(type: Types::TEXT, nullable: true)]
    private ?string $commentaire = '';

    #[Groups(groups: ['matiere'])]
    #[ORM\Column(type: Types::STRING, length: 20)]
    private ?string $codeMatiere = null;

    #[Groups(groups: ['matiere_administration'])]
    #[ORM\Column(type: Types::INTEGER)]
    private int $nbNotes = 2;

    #[ORM\Column(type: Types::STRING, length: 20)]
    private ?string $codeElement = null;

    #[Groups(groups: ['matiere_administration'])]
    #[ORM\Column(type: Types::BOOLEAN)]
    private bool $suspendu = false;

    #[ORM\Column(type: Types::STRING, length: 25, nullable: true)]
    private ?string $libelleCourt = null;

    #[ORM\Column(type: Types::BOOLEAN)]
    private ?bool $mutualisee = false;

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
        return $this->getCodeMatiere() . ' - ' . $this->getLibelle();
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

    public function setLibelle(?string $libelle): void
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

    public function initTabJson(): array
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

    public function getMutualisee(): ?bool
    {
        return $this->mutualisee;
    }

    public function setMutualisee(bool $mutualisee): self
    {
        $this->mutualisee = $mutualisee;

        return $this;
    }
}
