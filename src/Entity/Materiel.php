<?php
/**
 * Copyright (C) 7 / 2019 | David annebicque | IUT de Troyes - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetv3/src/Entity/Materiel.php
 * @author     David Annebicque
 * @project intranetv3
 * @date 7/12/19 11:23 AM
 * @lastUpdate 4/28/19 8:46 PM
 */

namespace App\Entity;

use DateTime;
use Doctrine\ORM\Mapping as ORM;
use Exception;
use Symfony\Component\HttpFoundation\File\File;
use Symfony\Component\HttpFoundation\File\UploadedFile;
use Vich\UploaderBundle\Mapping\Annotation as Vich;

/**
 * @ORM\Entity(repositoryClass="App\Repository\MaterielRepository")
 * @Vich\Uploadable
 */
class Materiel extends BaseEntity
{


    /**
     * @ORM\ManyToOne(targetEntity="App\Entity\TypeMateriel", inversedBy="materiels")
     */
    private $typeMateriel;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $libelle;

    /**
     * @ORM\Column(type="text")
     */
    private $description;

    /**
     * @var string
     *
     * @ORM\Column(type="string", length=50)
     */
    private $photoName;

    /**
     * @var UploadedFile
     *
     * @Vich\UploadableField(mapping="materiel", fileNameProperty="photoName")
     */
    private $photoFile;

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
     * @param File|null $document
     *
     * @throws Exception
     */
    public function setPhotoFile(?File $document = null): void
    {
        $this->photoFile = $document;

        if (null !== $document) {
            // It is required that at least one field changes if you are using doctrine
            // otherwise the event listeners won't be called and the file is lost
            $this->setUpdated(new DateTime());
        }
    }

    /**
     * @return null|File
     */
    public function getPhotoFile(): ?File
    {
        return $this->photoFile;
    }

    /**
     * @return string
     */
    public function getPhotoName(): ?string
    {
        return $this->photoName;
    }

    /**
     * @param string $photoName
     */
    public function setPhotoName(string $photoName): void
    {
        $this->photoName = $photoName;
    }


}
