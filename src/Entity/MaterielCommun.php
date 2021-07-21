<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Entity/MaterielCommun.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 28/06/2021 21:12
 */

namespace App\Entity;

use App\Entity\Traits\LifeCycleTrait;
use App\Repository\MaterielCommunRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;
use Exception;
use Symfony\Component\HttpFoundation\File\File;
use Vich\UploaderBundle\Mapping\Annotation as Vich;

/**
 * @ORM\Entity(repositoryClass=MaterielCommunRepository::class)
 * @Vich\Uploadable
 */
class MaterielCommun extends BaseEntity
{
    use LifeCycleTrait;

    /**
     * @ORM\Column(type="string", length=150)
     */
    private ?string $designation;

    /**
     * @ORM\Column(type="text", nullable=true)
     */
    private ?string $description;

    /**
     * @ORM\ManyToOne(targetEntity=Personnel::class, inversedBy="materielCommuns")
     */
    private ?Personnel $contact;

    /**
     * @ORM\Column(type="string", length=50, nullable=true)
     */
    private ?string $photoName = 'noimage.png';

    /**
     *
     * @Vich\UploadableField(mapping="materiel_commun", fileNameProperty="photoName")
     */
    private $photoFile;

    /**
     * @ORM\OneToMany(targetEntity=MaterielCommunPret::class, mappedBy="materielCommun")
     */
    private Collection $materielCommunPrets;

    public function __construct()
    {
        $this->materielCommunPrets = new ArrayCollection();
    }

    public function getDesignation(): ?string
    {
        return $this->designation;
    }

    public function setDesignation(string $designation): self
    {
        $this->designation = $designation;

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

    public function getContact(): ?Personnel
    {
        return $this->contact;
    }

    public function setContact(?Personnel $contact): self
    {
        $this->contact = $contact;

        return $this;
    }

    public function getPhotoFile(): ?File
    {
        return $this->photoFile;
    }

    /**
     * @throws Exception
     */
    public function setPhotoFile(?File $document = null): void
    {
        $this->photoFile = $document;

        if (null !== $document) {
            // It is required that at least one field changes if you are using doctrine
            // otherwise the event listeners won't be called and the file is lost
            $this->setUpdatedValue();
        }
    }

    /**
     * @return string
     */
    public function getPhotoName(): ?string
    {
        return $this->photoName;
    }

    public function setPhotoName(string $photoName): void
    {
        $this->photoName = $photoName;
    }

    /**
     * @return Collection|MaterielCommunPret[]
     */
    public function getMaterielCommunPrets(): Collection
    {
        return $this->materielCommunPrets;
    }

    public function addMaterielCommunPret(MaterielCommunPret $materielCommunPret): self
    {
        if (!$this->materielCommunPrets->contains($materielCommunPret)) {
            $this->materielCommunPrets[] = $materielCommunPret;
            $materielCommunPret->setMaterielCommun($this);
        }

        return $this;
    }

    public function removeMaterielCommunPret(MaterielCommunPret $materielCommunPret): self
    {
        if ($this->materielCommunPrets->contains($materielCommunPret)) {
            $this->materielCommunPrets->removeElement($materielCommunPret);
            // set the owning side to null (unless already changed)
            if ($materielCommunPret->getMaterielCommun() === $this) {
                $materielCommunPret->setMaterielCommun(null);
            }
        }

        return $this;
    }
}
