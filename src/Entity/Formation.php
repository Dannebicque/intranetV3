<?php

namespace App\Entity;

use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\HttpFoundation\File\UploadedFile;
use Symfony\Component\HttpFoundation\File\File;
use Vich\UploaderBundle\Mapping\Annotation as Vich;

/**
 * @ORM\Entity(repositoryClass="App\Repository\FormationRepository")
 * @ORM\HasLifecycleCallbacks()
 * @Vich\Uploadable
 */
class Formation extends BaseEntity
{
    /**
     * @ORM\Column(type="string", length=255)
     */
    private $libelle;

    /**
     * @var Site
     * @ORM\ManyToOne(targetEntity="App\Entity\Site")
     */
    private $site;

    /**
     * @var string
     *
     * @ORM\Column(type="string", length=50)
     */
    private $logoName;

    /**
     * @var UploadedFile
     *
     * @Vich\UploadableField(mapping="logo", fileNameProperty="logoName")
     */
    private $logoFile;

    /**
     * @var integer
     *
     * @ORM\Column(type="integer")
     */
    private $annee_courante = 0;

    /**
     * @var string
     *
     * @ORM\Column(type="string", length=16, nullable=true)
     */
    private $tel_contact;

    /**
     * @var string
     *
     * @ORM\Column(name="fax", type="string", length=16, nullable=true)
     */
    private $fax;

    /**
     * @var string
     *
     * @ORM\Column(name="couleur", type="string", length=16, nullable=true)
     */
    private $couleur;

    /**
     * @var string
     *
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    private $site_web;

    /**
     * @var string
     *
     * @ORM\Column(type="text", nullable=true)
     */
    private $description;

    /**
     * @var boolean
     *
     * @ORM\Column(type="boolean")
     */
    private $opt_update_celcat = false;

    /**
     * @var boolean
     *
     * @ORM\Column(type="boolean")
     */
    private $opt_agence = false;

    /**
     * @var boolean
     *
     * @ORM\Column(type="boolean")
     */
    private $opt_materiel = false;

    /**
     * @var boolean
     *
     * @ORM\Column(type="boolean")
     */
    private $opt_edt = true;

    /**
     * @var boolean
     *
     * @ORM\Column(type="boolean")
     */
    private $opt_stage = true;

    /**
     * @var boolean
     *
     * @ORM\Column(type="boolean")
     */
    private $opt_synthese = true;

    /**
     * @var boolean
     *
     * @ORM\Column(type="boolean")
     */
    private $opt_messagerie = true;

    /**
     * @var boolean
     *
     * @ORM\Column(type="boolean")
     */
    private $opt_RI = false;

    /**
     * @var boolean
     *
     * @ORM\Column(type="boolean")
     */
    private $opt_Infos = false;

    /**
     * @var Personnel
     * @ORM\ManyToOne(targetEntity="App\Entity\Personnel", fetch="EAGER")
     */
    private $respri;

    /**
     * @var integer
     *
     * @ORM\Column(type="integer")
     */
    private $opt_annee_previsionnel = 0;

    /**
     * @ORM\OneToMany(targetEntity="App\Entity\TypeDocument", mappedBy="formation")
     */
    private $typeDocuments;

    /**
     * @ORM\OneToMany(targetEntity="App\Entity\PersonnelFormation", mappedBy="formation")
     */
    private $personnelFormations;

    /**
     * @ORM\OneToMany(targetEntity="App\Entity\Actualite", mappedBy="formation")
     */
    private $actualites;

    public function __construct()
    {
        $this->typeDocuments = new ArrayCollection();
        $this->personnelFormations = new ArrayCollection();
        $this->actualites = new ArrayCollection();
    }

    /**
     * @return Site
     */
    public function getSite(): ?Site
    {
        return $this->site;
    }

    /**
     * @param Site $site
     */
    public function setSite(Site $site): void
    {
        $this->site = $site;
    }

    /**
     * @return string
     */
    public function getLibelle(): ?string
    {
        return $this->libelle;
    }

    /**
     * @param mixed $libelle
     */
    public function setLibelle($libelle): void
    {
        $this->libelle = $libelle;
    }

    /**
     * @return int
     */
    public function getAnneeCourante(): ?int
    {
        return $this->annee_courante;
    }

    /**
     * @param int $annee_courante
     */
    public function setAnneeCourante(int $annee_courante): void
    {
        $this->annee_courante = $annee_courante;
    }

    /**
     * @return string
     */
    public function getTelContact(): ?string
    {
        return $this->tel_contact;
    }

    /**
     * @param string $tel_contact
     */
    public function setTelContact(string $tel_contact): void
    {
        $this->tel_contact = $tel_contact;
    }

    /**
     * @return string
     */
    public function getFax(): ?string
    {
        return $this->fax;
    }

    /**
     * @param string $fax
     */
    public function setFax(string $fax): void
    {
        $this->fax = $fax;
    }

    /**
     * @return string
     */
    public function getCouleur(): ?string
    {
        return $this->couleur;
    }

    /**
     * @param string $couleur
     */
    public function setCouleur(string $couleur): void
    {
        $this->couleur = $couleur;
    }

    /**
     * @return string
     */
    public function getSiteWeb(): ?string
    {
        return $this->site_web;
    }

    /**
     * @param string $site_web
     */
    public function setSiteWeb(string $site_web): void
    {
        $this->site_web = $site_web;
    }

    /**
     * @return string
     */
    public function getDescription(): ?string
    {
        return $this->description;
    }

    /**
     * @param string $description
     */
    public function setDescription(string $description): void
    {
        $this->description = $description;
    }

    /**
     * @return bool
     */
    public function isOptUpdateCelcat(): bool
    {
        return $this->opt_update_celcat;
    }

    /**
     * @param bool $opt_update_celcat
     */
    public function setOptUpdateCelcat(bool $opt_update_celcat): void
    {
        $this->opt_update_celcat = $opt_update_celcat;
    }

    /**
     * @return bool
     */
    public function isOptAgence(): bool
    {
        return $this->opt_agence;
    }

    /**
     * @param bool $opt_agence
     */
    public function setOptAgence(bool $opt_agence): void
    {
        $this->opt_agence = $opt_agence;
    }

    /**
     * @return bool
     */
    public function isOptMateriel(): bool
    {
        return $this->opt_materiel;
    }

    /**
     * @param bool $opt_materiel
     */
    public function setOptMateriel(bool $opt_materiel): void
    {
        $this->opt_materiel = $opt_materiel;
    }

    /**
     * @return bool
     */
    public function isOptEdt(): bool
    {
        return $this->opt_edt;
    }

    /**
     * @param bool $opt_edt
     */
    public function setOptEdt(bool $opt_edt): void
    {
        $this->opt_edt = $opt_edt;
    }

    /**
     * @return bool
     */
    public function isOptStage(): bool
    {
        return $this->opt_stage;
    }

    /**
     * @param bool $opt_stage
     */
    public function setOptStage(bool $opt_stage): void
    {
        $this->opt_stage = $opt_stage;
    }

    /**
     * @return bool
     */
    public function isOptSynthese(): bool
    {
        return $this->opt_synthese;
    }

    /**
     * @param bool $opt_synthese
     */
    public function setOptSynthese(bool $opt_synthese): void
    {
        $this->opt_synthese = $opt_synthese;
    }

    /**
     * @return bool
     */
    public function isOptMessagerie(): bool
    {
        return $this->opt_messagerie;
    }

    /**
     * @param bool $opt_messagerie
     */
    public function setOptMessagerie(bool $opt_messagerie): void
    {
        $this->opt_messagerie = $opt_messagerie;
    }

    /**
     * @return bool
     */
    public function isOptRI(): bool
    {
        return $this->opt_RI;
    }

    /**
     * @param bool $opt_RI
     */
    public function setOptRI(bool $opt_RI): void
    {
        $this->opt_RI = $opt_RI;
    }

    /**
     * @return bool
     */
    public function isOptInfos(): bool
    {
        return $this->opt_Infos;
    }

    /**
     * @param bool $opt_Infos
     */
    public function setOptInfos(bool $opt_Infos): void
    {
        $this->opt_Infos = $opt_Infos;
    }

    /**
     * @return Personnel
     */
    public function getRespri(): ?Personnel
    {
        return $this->respri;
    }

    /**
     * @param Personnel $respri
     */
    public function setRespri(Personnel $respri): void
    {
        $this->respri = $respri;
    }

    /**
     * @return int
     */
    public function getOptAnneePrevisionnel(): ?int
    {
        return $this->opt_annee_previsionnel;
    }

    /**
     * @param int $opt_annee_previsionnel
     */
    public function setOptAnneePrevisionnel(int $opt_annee_previsionnel): void
    {
        $this->opt_annee_previsionnel = $opt_annee_previsionnel;
    }

    /**
     * @return Collection|TypeDocument[]
     */
    public function getTypeDocuments(): Collection
    {
        return $this->typeDocuments;
    }

    public function addTypeDocument(TypeDocument $typeDocument): self
    {
        if (!$this->typeDocuments->contains($typeDocument)) {
            $this->typeDocuments[] = $typeDocument;
            $typeDocument->setFormation($this);
        }

        return $this;
    }

    public function removeTypeDocument(TypeDocument $typeDocument): self
    {
        if ($this->typeDocuments->contains($typeDocument)) {
            $this->typeDocuments->removeElement($typeDocument);
            // set the owning side to null (unless already changed)
            if ($typeDocument->getFormation() === $this) {
                $typeDocument->setFormation(null);
            }
        }

        return $this;
    }

    /**
     * If manually uploading a file (i.e. not using Symfony Form) ensure an instance
     * of 'UploadedFile' is injected into this setter to trigger the  update. If this
     * bundle's configuration parameter 'inject_on_load' is set to 'true' this setter
     * must be able to accept an instance of 'File' as the bundle will inject one here
     * during Doctrine hydration.
     *
     * @param null|File $logo
     */
    public function setLogoFile(?File $logo = null): void
    {
        $this->logoFile = $logo;

        if (null !== $logo) {
            // It is required that at least one field changes if you are using doctrine
            // otherwise the event listeners won't be called and the file is lost
            $this->setUpdated(new \DateTime());
        }
    }

    public function getLogoFile(): ?File
    {
        return $this->logoFile;
    }

    /**
     * @return string
     */
    public function getLogoName(): ?string
    {
        return $this->logoName;
    }

    /**
     * @param string $logoName
     */
    public function setLogoName(string $logoName): void
    {
        $this->logoName = $logoName;
    }

    /**
     * @return Collection|PersonnelFormation[]
     */
    public function getPersonnelFormations(): Collection
    {
        return $this->personnelFormations;
    }

    public function addPersonnelFormation(PersonnelFormation $personnelFormation): self
    {
        if (!$this->personnelFormations->contains($personnelFormation)) {
            $this->personnelFormations[] = $personnelFormation;
            $personnelFormation->setFormation($this);
        }

        return $this;
    }

    public function removePersonnelFormation(PersonnelFormation $personnelFormation): self
    {
        if ($this->personnelFormations->contains($personnelFormation)) {
            $this->personnelFormations->removeElement($personnelFormation);
            // set the owning side to null (unless already changed)
            if ($personnelFormation->getFormation() === $this) {
                $personnelFormation->setFormation(null);
            }
        }

        return $this;
    }

    /**
     * @return Collection|Actualite[]
     */
    public function getActualites(): Collection
    {
        return $this->actualites;
    }

    public function addActualite(Actualite $actualite): self
    {
        if (!$this->actualites->contains($actualite)) {
            $this->actualites[] = $actualite;
            $actualite->setFormation($this);
        }

        return $this;
    }

    public function removeActualite(Actualite $actualite): self
    {
        if ($this->actualites->contains($actualite)) {
            $this->actualites->removeElement($actualite);
            // set the owning side to null (unless already changed)
            if ($actualite->getFormation() === $this) {
                $actualite->setFormation(null);
            }
        }

        return $this;
    }
}
