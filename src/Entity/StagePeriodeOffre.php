<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Entity/StagePeriodeOffre.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 05/06/2021 11:26
 */

namespace App\Entity;

use App\Entity\Traits\LifeCycleTrait;
use DateTime;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;
use Exception;
use Symfony\Component\HttpFoundation\File\File;
use Symfony\Component\HttpFoundation\File\UploadedFile;
use Symfony\Component\Serializer\Annotation\Groups;
use Vich\UploaderBundle\Mapping\Annotation as Vich;

/**
 * @ORM\Entity(repositoryClass="App\Repository\StagePeriodeOffreRepository")
 * @Vich\Uploadable
 * @ORM\HasLifecycleCallbacks()
 */
class StagePeriodeOffre extends BaseEntity
{
    use LifeCycleTrait;

    /**
     * @ORM\ManyToMany(targetEntity="App\Entity\StagePeriode", inversedBy="stagePeriodeOffres")
     */
    private $stagePeriodes;

    /**
     * @ORM\Column(type="string", length=255)
     * @Groups({"stage_offre_administration"})
     */
    private $libelle;

    /**
     * @ORM\Column(type="string", length=255)
     * @Groups({"stage_offre_administration"})
     */
    private $entreprise;

    /**
     * @ORM\Column(type="string", length=255)
     * @Groups({"stage_offre_administration"})
     */
    private $ville;

    /**
     * @var string
     *
     * @ORM\Column(type="string", length=50)
     */
    private $documentName;

    /**
     * @var UploadedFile
     *
     * @Vich\UploadableField(mapping="offreStage", fileNameProperty="documentName")
     */
    private $documentFile;

    public function __construct(StagePeriode $stagePeriode)
    {
        $this->stagePeriodes = new ArrayCollection();
        $this->addStagePeriode($stagePeriode);
    }

    /**
     * @return Collection|StagePeriode[]
     */
    public function getStagePeriodes(): Collection
    {
        return $this->stagePeriodes;
    }

    public function addStagePeriode(StagePeriode $stagePeriode): self
    {
        if (!$this->stagePeriodes->contains($stagePeriode)) {
            $this->stagePeriodes[] = $stagePeriode;
        }

        return $this;
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

    public function getDocumentFile(): ?File
    {
        return $this->documentFile;
    }

    /**
     * @return string
     */
    public function getDocumentName(): ?string
    {
        return $this->documentName;
    }

    public function setDocumentName(string $documentName): void
    {
        $this->documentName = $documentName;
    }
}
