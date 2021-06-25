<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Entity/Materiel.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 06/06/2021 12:28
 */

namespace App\Entity;

use App\Entity\Traits\LifeCycleTrait;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;
use Exception;
use Symfony\Component\HttpFoundation\File\File;
use Vich\UploaderBundle\Mapping\Annotation as Vich;

/**
 * @ORM\Entity(repositoryClass="App\Repository\MaterielRepository")
 * @Vich\Uploadable
 */
class Materiel extends BaseEntity
{
    use LifeCycleTrait;

    /**
     * @ORM\ManyToOne(targetEntity="App\Entity\TypeMateriel", inversedBy="materiels")
     */
    private ?TypeMateriel $typeMateriel;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private ?string $libelle;

    /**
     * @ORM\Column(type="text")
     */
    private ?string $description;

    /**
     *
     * @ORM\Column(type="string", length=50, nullable=true)
     */
    private ?string $photoName = 'noimage.png';

    /**
     *
     * @Vich\UploadableField(mapping="materiel", fileNameProperty="photoName")
     */
    private $photoFile;

    /**
     * @ORM\Column(type="string", length=50, nullable=true)
     */
    private ?string $codebarre;

    /**
     * @ORM\Column(type="boolean")
     */
    private ?bool $empruntable = true;

    /**
     * @ORM\OneToMany(targetEntity="App\Entity\EmpruntMateriel", mappedBy="materiel")
     */
    private Collection $empruntMateriels;

    public function __construct()
    {
        $this->empruntMateriels = new ArrayCollection();
    }

    public function getTypeMateriel(): ?TypeMateriel
    {
        return $this->typeMateriel;
    }

    public function setTypeMateriel(?TypeMateriel $typeMateriel): self
    {
        $this->typeMateriel = $typeMateriel;

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

    public function getDescription(): ?string
    {
        return $this->description;
    }

    public function setDescription(string $description): self
    {
        $this->description = $description;

        return $this;
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

    public function getPhotoFile(): ?File
    {
        return $this->photoFile;
    }

    public function getPhotoName(): ?string
    {
        return $this->photoName;
    }

    public function setPhotoName(string $photoName): void
    {
        $this->photoName = $photoName;
    }

    public function getCodebarre(): ?string
    {
        return $this->codebarre;
    }

    public function setCodebarre(?string $codebarre): self
    {
        $this->codebarre = $codebarre;

        return $this;
    }

    public function getEmpruntable(): ?bool
    {
        return $this->empruntable;
    }

    public function setEmpruntable(bool $empruntable): self
    {
        $this->empruntable = $empruntable;

        return $this;
    }

    /**
     * @return Collection|EmpruntMateriel[]
     */
    public function getEmpruntMateriels(): Collection
    {
        return $this->empruntMateriels;
    }

    public function addEmpruntMateriel(EmpruntMateriel $empruntMateriel): self
    {
        if (!$this->empruntMateriels->contains($empruntMateriel)) {
            $this->empruntMateriels[] = $empruntMateriel;
            $empruntMateriel->setMateriel($this);
        }

        return $this;
    }

    public function removeEmpruntMateriel(EmpruntMateriel $empruntMateriel): self
    {
        if ($this->empruntMateriels->contains($empruntMateriel)) {
            $this->empruntMateriels->removeElement($empruntMateriel);
            // set the owning side to null (unless already changed)
            if ($empruntMateriel->getMateriel() === $this) {
                $empruntMateriel->setMateriel(null);
            }
        }

        return $this;
    }
}
