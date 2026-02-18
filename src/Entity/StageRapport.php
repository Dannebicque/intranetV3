<?php

/*
 * Copyright (c) 2026. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Entity/StageRapport.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 29/01/2026 10:38
 */

namespace App\Entity;

use App\Entity\Traits\LifeCycleTrait;
use App\Repository\StageRapportRepository;
use Doctrine\DBAL\Types\Types;
use Doctrine\ORM\Mapping as ORM;
use Exception;
use Symfony\Component\HttpFoundation\File\File;
use Vich\UploaderBundle\Mapping\Annotation as Vich;

#[Vich\Uploadable]
#[ORM\Entity(repositoryClass: StageRapportRepository::class)]
#[ORM\HasLifecycleCallbacks]
class StageRapport extends BaseEntity
{
    use LifeCycleTrait;

    #[ORM\ManyToOne(inversedBy: 'stageRapports')]
    private ?StageEtudiant $stageEtudiant = null;

    #[ORM\Column(length: 255)]
    private ?string $titreRapport = null;

    #[ORM\Column(length: 255, nullable: true)]
    private ?string $groupeEntreprise = null;

    #[ORM\Column(type: Types::TEXT)]
    private ?string $resumeRapport = null;

    #[ORM\Column(length: 255)]
    private ?string $motsCles = null;

    #[ORM\Column]
    private ?bool $confidentialite = null;

    #[ORM\Column(type: Types::STRING, length: 255, nullable: true)]
    private ?string $documentName = '';

    #[Vich\UploadableField(mapping: 'rapportStage', fileNameProperty: 'documentName')]
    private ?File $documentFile = null;

    #[ORM\Column(length: 255, nullable: true)]
    private ?string $lienFichier = null;

    public function __construct(StageEtudiant $stageEtudiant)
    {
        $this->stageEtudiant = $stageEtudiant;
    }

    public function getStageEtudiant(): ?StageEtudiant
    {
        return $this->stageEtudiant;
    }

    public function setStageEtudiant(?StageEtudiant $stageEtudiant): static
    {
        $this->stageEtudiant = $stageEtudiant;

        return $this;
    }

    public function getTitreRapport(): ?string
    {
        return $this->titreRapport;
    }

    public function setTitreRapport(string $titreRapport): static
    {
        $this->titreRapport = $titreRapport;

        return $this;
    }

    public function getGroupeEntreprise(): ?string
    {
        return $this->groupeEntreprise;
    }

    public function setGroupeEntreprise(?string $groupeEntreprise): static
    {
        $this->groupeEntreprise = $groupeEntreprise;

        return $this;
    }

    public function getResumeRapport(): ?string
    {
        return $this->resumeRapport;
    }

    public function setResumeRapport(string $resumeRapport): static
    {
        $this->resumeRapport = $resumeRapport;

        return $this;
    }

    public function getMotsCles(): ?string
    {
        return $this->motsCles;
    }

    public function setMotsCles(string $motsCles): static
    {
        $this->motsCles = $motsCles;

        return $this;
    }

    public function isConfidentialite(): ?bool
    {
        return $this->confidentialite;
    }

    public function setConfidentialite(bool $confidentialite): static
    {
        $this->confidentialite = $confidentialite;

        return $this;
    }

    public function getFichier(): ?string
    {
        return $this->fichier;
    }

    public function setFichier(?string $fichier): static
    {
        $this->fichier = $fichier;

        return $this;
    }

    public function getLienFichier(): ?string
    {
        return $this->lienFichier;
    }

    public function setLienFichier(?string $lienFichier): static
    {
        $this->lienFichier = $lienFichier;

        return $this;
    }

    public function getDocumentFile(): ?File
    {
        return $this->documentFile;
    }

    /**
     * @throws Exception
     */
    public function setDocumentFile(?File $document = null): void
    {
        $this->documentFile = $document;

        if (null !== $document) {
            // It is required that at least one field changes if you are using doctrine
            // otherwise the event listeners won't be called and the file is lost
            $this->setUpdatedValue();
        }
    }

    /**
     * @return string
     */
    public function getDocumentName(): ?string
    {
        return $this->documentName;
    }

    public function setDocumentName(?string $documentName): void
    {
        $this->documentName = $documentName;
    }
}
