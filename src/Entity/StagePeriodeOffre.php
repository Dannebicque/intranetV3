<?php
/*
 * Copyright (c) 2022. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Entity/StagePeriodeOffre.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 13/12/2022 20:30
 */

namespace App\Entity;

use App\Entity\Traits\LifeCycleTrait;
use App\Repository\StagePeriodeOffreRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\DBAL\Types\Types;
use Doctrine\ORM\Mapping as ORM;
use Exception;
use Symfony\Component\HttpFoundation\File\File;
use Symfony\Component\Serializer\Annotation\Groups;
use Vich\UploaderBundle\Mapping\Annotation as Vich;

#[Vich\Uploadable]
#[ORM\Entity(repositoryClass: StagePeriodeOffreRepository::class)]
#[ORM\HasLifecycleCallbacks]
class StagePeriodeOffre extends BaseEntity
{
    use LifeCycleTrait;

    #[ORM\ManyToMany(targetEntity: StagePeriode::class, inversedBy: 'stagePeriodeOffres')]
    private Collection $stagePeriodes;

    #[Groups(['stage_offre_administration'])]
    #[ORM\Column(type: Types::STRING, length: 255)]
    private ?string $libelle = null;

    #[Groups(['stage_offre_administration'])]
    #[ORM\Column(type: Types::STRING, length: 255)]
    private ?string $entreprise = null;

    #[Groups(['stage_offre_administration'])]
    #[ORM\Column(type: Types::STRING, length: 255)]
    private ?string $ville = null;

    #[ORM\Column(type: Types::STRING, length: 50, nullable: true)]
    private ?string $documentName = '';

    #[Vich\UploadableField(mapping: 'offreStage', fileNameProperty: 'documentName')]
    private ?File $documentFile = null;

    public function __construct(StagePeriode $stagePeriode)
    {
        $this->stagePeriodes = new ArrayCollection();
        $this->addStagePeriode($stagePeriode);
    }

    public function addStagePeriode(StagePeriode $stagePeriode): self
    {
        if (!$this->stagePeriodes->contains($stagePeriode)) {
            $this->stagePeriodes[] = $stagePeriode;
        }

        return $this;
    }

    /**
     * @return Collection|StagePeriode[]
     */
    public function getStagePeriodes(): Collection
    {
        return $this->stagePeriodes;
    }

    public function removeStagePeriode(StagePeriode $stagePeriode): self
    {
        if ($this->stagePeriodes->contains($stagePeriode)) {
            $this->stagePeriodes->removeElement($stagePeriode);
        }

        return $this;
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

    public function getEntreprise(): ?string
    {
        return $this->entreprise;
    }

    public function setEntreprise(string $entreprise): self
    {
        $this->entreprise = $entreprise;

        return $this;
    }

    public function getVille(): ?string
    {
        return $this->ville;
    }

    public function setVille(string $ville): self
    {
        $this->ville = $ville;

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
