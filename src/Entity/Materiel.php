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
use App\Repository\MaterielRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\DBAL\Types\Types;
use Doctrine\ORM\Mapping as ORM;
use Exception;
use Symfony\Component\HttpFoundation\File\File;
use Vich\UploaderBundle\Mapping\Annotation as Vich;

/**
 * @Vich\Uploadable
 */
#[ORM\Entity(repositoryClass: MaterielRepository::class)]
class Materiel extends BaseEntity
{
    use LifeCycleTrait;

    #[ORM\ManyToOne(targetEntity: TypeMateriel::class, inversedBy: 'materiels')]
    private ?TypeMateriel $typeMateriel = null;

    #[ORM\Column(type: Types::STRING, length: 255)]
    private ?string $libelle = null;

    #[ORM\Column(type: Types::TEXT)]
    private ?string $description = null;

    #[ORM\Column(type: Types::STRING, length: 50, nullable: true)]
    private ?string $photoName = 'noimage.png';

    /**
     * @Vich\UploadableField(mapping="materiel", fileNameProperty="photoName")
     */
    private ?File $photoFile;

    #[ORM\Column(type: Types::STRING, length: 50, nullable: true)]
    private ?string $codebarre = null;

    #[ORM\Column(type: Types::BOOLEAN)]
    private ?bool $empruntable = true;

    /**
     * @var \Doctrine\Common\Collections\Collection<int, \App\Entity\EmpruntMateriel>
     */
    #[ORM\OneToMany(mappedBy: 'materiel', targetEntity: EmpruntMateriel::class)]
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
