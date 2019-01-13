<?php

namespace App\Entity;

use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;
use Ramsey\Uuid\Uuid;
use Symfony\Component\HttpFoundation\File\UploadedFile;
use Symfony\Component\HttpFoundation\File\File;
use Symfony\Component\Serializer\Annotation\Groups;
use Symfony\Component\Serializer\Annotation\MaxDepth;
use Vich\UploaderBundle\Mapping\Annotation as Vich;

/**
 * @ORM\Entity(repositoryClass="App\Repository\FormationRepository")
 * @ORM\HasLifecycleCallbacks()
 * @Vich\Uploadable
 */
class Formation extends BaseEntity
{
    /**
     * @var \Ramsey\Uuid\UuidInterface
     *
     * @ORM\Column(type="uuid_binary", unique=true)
     */
    protected $uuid;

    /**
     * @return \Ramsey\Uuid\UuidInterface
     */
    public function getUuid(): \Ramsey\Uuid\UuidInterface
    {
        return $this->uuid;
    }

    /**
     * @return \Ramsey\Uuid\UuidInterface
     */
    public function getUuidString(): string
    {
        return $this->getUuid()->toString();
    }

    /**
     * @ORM\Column(type="string", length=255)
     * @Groups({"actualite_administration"})
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
     * @var string
     *
     * @ORM\Column(type="string", length=16, nullable=true)
     */
    private $telContact;

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
    private $siteWeb;

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
    private $optUpdateCelcat = false;

    /**
     * @var boolean
     *
     * @ORM\Column(type="boolean")
     */
    private $optAgence = false;

    /**
     * @var boolean
     *
     * @ORM\Column(type="boolean")
     */
    private $optMateriel = false;

    /**
     * @var boolean
     *
     * @ORM\Column(type="boolean")
     */
    private $optEdt = true;

    /**
     * @var boolean
     *
     * @ORM\Column(type="boolean")
     */
    private $optStage = true;

    /**
     * @var boolean
     *
     * @ORM\Column(type="boolean")
     */
    private $optSynthese = true;

    /**
     * @var boolean
     *
     * @ORM\Column(type="boolean")
     */
    private $optMessagerie = true;

    /**
     * @var boolean
     *
     * @ORM\Column(type="boolean")
     */
    private $optInfos = false;

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
    private $optAnneePrevisionnel;

    /**
     * @ORM\OneToMany(targetEntity="App\Entity\TypeDocument", mappedBy="formation")
     * @MaxDepth(1)
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

    /**
     * @ORM\OneToMany(targetEntity="App\Entity\TrelloTache", mappedBy="formation")
     */
    private $trelloTaches;

    /**
     * @ORM\OneToMany(targetEntity="App\Entity\Diplome", mappedBy="formation")
     */
    private $diplomes;

    /**
     * @ORM\OneToMany(targetEntity="App\Entity\SalleExamen", mappedBy="formation")
     */
    private $salleExamens;

    /**
     * @ORM\OneToMany(targetEntity="App\Entity\Hrs", mappedBy="formation")
     */
    private $hrs;

    /**
     * @ORM\OneToMany(targetEntity="App\Entity\TypeMateriel", mappedBy="formation")
     */
    private $typeMateriels;

    /**
     * @ORM\OneToMany(targetEntity="App\Entity\MaterielPret", mappedBy="formation")
     */
    private $materielPrets;

    /**
     * @ORM\Column(type="boolean")
     */
    private $actif = true;

    /**
     * Formation constructor.
     * @throws \Exception
     */
    public function __construct()
    {
        $this->uuid = Uuid::uuid4();
        $this->optAnneePrevisionnel = (int)date('Y');
        $this->typeDocuments = new ArrayCollection();
        $this->personnelFormations = new ArrayCollection();
        $this->actualites = new ArrayCollection();
        $this->trelloTaches = new ArrayCollection();
        $this->diplomes = new ArrayCollection();
        $this->salleExamens = new ArrayCollection();
        $this->hrs = new ArrayCollection();
        $this->typeMateriels = new ArrayCollection();
        $this->materielPrets = new ArrayCollection();
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

//    /**
//     * @return int
//     */
//    public function getAnneeCourante(): ?int
//    {
//        return $this->anneeCourante;
//    }
//
//    /**
//     * @param int $anneeCourante
//     */
//    public function setAnneeCourante(int $anneeCourante): void
//    {
//        $this->anneeCourante = $anneeCourante;
//    }

    /**
     * @return string
     */
    public function getTelContact(): ?string
    {
        return $this->telContact;
    }

    /**
     * @param string $telContact
     */
    public function setTelContact(string $telContact): void
    {
        $this->telContact = $telContact;
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
        return $this->siteWeb;
    }

    /**
     * @param string $siteWeb
     */
    public function setSiteWeb(string $siteWeb): void
    {
        $this->siteWeb = $siteWeb;
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
        return $this->optUpdateCelcat;
    }

    /**
     * @param bool $optUpdateCelcat
     */
    public function setOptUpdateCelcat(bool $optUpdateCelcat): void
    {
        $this->optUpdateCelcat = $optUpdateCelcat;
    }

    /**
     * @return bool
     */
    public function isOptAgence(): bool
    {
        return $this->optAgence;
    }

    /**
     * @param bool $optAgence
     */
    public function setOptAgence(bool $optAgence): void
    {
        $this->optAgence = $optAgence;
    }

    /**
     * @return bool
     */
    public function isOptMateriel(): bool
    {
        return $this->optMateriel;
    }

    /**
     * @param bool $optMateriel
     */
    public function setOptMateriel(bool $optMateriel): void
    {
        $this->optMateriel = $optMateriel;
    }

    /**
     * @return bool
     */
    public function isOptEdt(): bool
    {
        return $this->optEdt;
    }

    /**
     * @param bool $optEdt
     */
    public function setOptEdt(bool $optEdt): void
    {
        $this->optEdt = $optEdt;
    }

    /**
     * @return bool
     */
    public function isOptStage(): bool
    {
        return $this->optStage;
    }

    /**
     * @param bool $optStage
     */
    public function setOptStage(bool $optStage): void
    {
        $this->optStage = $optStage;
    }

    /**
     * @return bool
     */
    public function isOptSynthese(): bool
    {
        return $this->optSynthese;
    }

    /**
     * @param bool $optSynthese
     */
    public function setOptSynthese(bool $optSynthese): void
    {
        $this->optSynthese = $optSynthese;
    }

    /**
     * @return bool
     */
    public function isOptMessagerie(): bool
    {
        return $this->optMessagerie;
    }

    /**
     * @param bool $optMessagerie
     */
    public function setOptMessagerie(bool $optMessagerie): void
    {
        $this->optMessagerie = $optMessagerie;
    }

    /**
     * @return bool
     */
    public function isOptInfos(): bool
    {
        return $this->optInfos;
    }

    /**
     * @param bool $optInfos
     */
    public function setOptInfos(bool $optInfos): void
    {
        $this->optInfos = $optInfos;
    }

    /**
     * @return Personnel
     */
    public function getRespri(): ?Personnel
    {
        return $this->respri;
    }

    /**
     * @param Personnel|null $respri
     */
    public function setRespri($respri): void
    {
        $this->respri = $respri;
    }

    /**
     * @return int
     */
    public function getOptAnneePrevisionnel(): int
    {
        return $this->optAnneePrevisionnel;
    }

    /**
     * @param int $optAnneePrevisionnel
     */
    public function setOptAnneePrevisionnel(int $optAnneePrevisionnel): void
    {
        $this->optAnneePrevisionnel = $optAnneePrevisionnel;
    }

    /**
     * @return Collection|TypeDocument[]
     */
    public function getTypeDocuments(): Collection
    {
        return $this->typeDocuments;
    }

    /**
     * @param TypeDocument $typeDocument
     *
     * @return Formation
     */
    public function addTypeDocument(TypeDocument $typeDocument): self
    {
        if (!$this->typeDocuments->contains($typeDocument)) {
            $this->typeDocuments[] = $typeDocument;
            $typeDocument->setFormation($this);
        }

        return $this;
    }

    /**
     * @param TypeDocument $typeDocument
     *
     * @return Formation
     */
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
     * @return null|File
     */
    public function getLogoFile(): ?File
    {
        return $this->logoFile;
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

    /**
     * @param PersonnelFormation $personnelFormation
     *
     * @return Formation
     */
    public function addPersonnelFormation(PersonnelFormation $personnelFormation): self
    {
        if (!$this->personnelFormations->contains($personnelFormation)) {
            $this->personnelFormations[] = $personnelFormation;
            $personnelFormation->setFormation($this);
        }

        return $this;
    }

    /**
     * @param PersonnelFormation $personnelFormation
     *
     * @return Formation
     */
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

    /**
     * @param Actualite $actualite
     *
     * @return Formation
     */
    public function addActualite(Actualite $actualite): self
    {
        if (!$this->actualites->contains($actualite)) {
            $this->actualites[] = $actualite;
            $actualite->setFormation($this);
        }

        return $this;
    }

    /**
     * @param Actualite $actualite
     *
     * @return Formation
     */
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

    /**
     * @param $name
     * @param $value
     */
    public function update($name, $value): void
    {
        $name[0] = \chr(\ord($name[0]) - 32);
        $method = 'set' . $name;
        if (method_exists($this, $method)) {
            $this->$method($value);
        }
    }

    /**
     * @return Collection|TrelloTache[]
     */
    public function getTrelloTaches(): Collection
    {
        return $this->trelloTaches;
    }

    /**
     * @param TrelloTache $trelloTach
     *
     * @return Formation
     */
    public function addTrelloTach(TrelloTache $trelloTach): self
    {
        if (!$this->trelloTaches->contains($trelloTach)) {
            $this->trelloTaches[] = $trelloTach;
            $trelloTach->setFormation($this);
        }

        return $this;
    }

    /**
     * @param TrelloTache $trelloTach
     *
     * @return Formation
     */
    public function removeTrelloTach(TrelloTache $trelloTach): self
    {
        if ($this->trelloTaches->contains($trelloTach)) {
            $this->trelloTaches->removeElement($trelloTach);
            // set the owning side to null (unless already changed)
            if ($trelloTach->getFormation() === $this) {
                $trelloTach->setFormation(null);
            }
        }

        return $this;
    }

    /**
     * @return Collection|Diplome[]
     */
    public function getDiplomes(): Collection
    {
        return $this->diplomes;
    }

    /**
     * @param Diplome $diplome
     *
     * @return Formation
     */
    public function addDiplome(Diplome $diplome): self
    {
        if (!$this->diplomes->contains($diplome)) {
            $this->diplomes[] = $diplome;
            $diplome->setFormation($this);
        }

        return $this;
    }

    /**
     * @param Diplome $diplome
     *
     * @return Formation
     */
    public function removeDiplome(Diplome $diplome): self
    {
        if ($this->diplomes->contains($diplome)) {
            $this->diplomes->removeElement($diplome);
            // set the owning side to null (unless already changed)
            if ($diplome->getFormation() === $this) {
                $diplome->setFormation(null);
            }
        }

        return $this;
    }

    /**
     * @return Collection|SalleExamen[]
     */
    public function getSalleExamens(): Collection
    {
        return $this->salleExamens;
    }

    public function addSalleExamen(SalleExamen $salleExamen): self
    {
        if (!$this->salleExamens->contains($salleExamen)) {
            $this->salleExamens[] = $salleExamen;
            $salleExamen->setFormation($this);
        }

        return $this;
    }

    public function removeSalleExamen(SalleExamen $salleExamen): self
    {
        if ($this->salleExamens->contains($salleExamen)) {
            $this->salleExamens->removeElement($salleExamen);
            // set the owning side to null (unless already changed)
            if ($salleExamen->getFormation() === $this) {
                $salleExamen->setFormation(null);
            }
        }

        return $this;
    }

    /**
     * @return Collection|Hrs[]
     */
    public function getHrs(): Collection
    {
        return $this->hrs;
    }

    public function addHr(Hrs $hr): self
    {
        if (!$this->hrs->contains($hr)) {
            $this->hrs[] = $hr;
            $hr->setFormation($this);
        }

        return $this;
    }

    public function removeHr(Hrs $hr): self
    {
        if ($this->hrs->contains($hr)) {
            $this->hrs->removeElement($hr);
            // set the owning side to null (unless already changed)
            if ($hr->getFormation() === $this) {
                $hr->setFormation(null);
            }
        }

        return $this;
    }

    /**
     * @return Collection|TypeMateriel[]
     */
    public function getTypeMateriels(): Collection
    {
        return $this->typeMateriels;
    }

    public function addTypeMateriel(TypeMateriel $typeMateriel): self
    {
        if (!$this->typeMateriels->contains($typeMateriel)) {
            $this->typeMateriels[] = $typeMateriel;
            $typeMateriel->setFormation($this);
        }

        return $this;
    }

    public function removeTypeMateriel(TypeMateriel $typeMateriel): self
    {
        if ($this->typeMateriels->contains($typeMateriel)) {
            $this->typeMateriels->removeElement($typeMateriel);
            // set the owning side to null (unless already changed)
            if ($typeMateriel->getFormation() === $this) {
                $typeMateriel->setFormation(null);
            }
        }

        return $this;
    }

    /**
     * @return Collection|MaterielPret[]
     */
    public function getMaterielPrets(): Collection
    {
        return $this->materielPrets;
    }

    public function addMaterielPret(MaterielPret $materielPret): self
    {
        if (!$this->materielPrets->contains($materielPret)) {
            $this->materielPrets[] = $materielPret;
            $materielPret->setFormation($this);
        }

        return $this;
    }

    public function removeMaterielPret(MaterielPret $materielPret): self
    {
        if ($this->materielPrets->contains($materielPret)) {
            $this->materielPrets->removeElement($materielPret);
            // set the owning side to null (unless already changed)
            if ($materielPret->getFormation() === $this) {
                $materielPret->setFormation(null);
            }
        }

        return $this;
    }

    public function getActif(): ?bool
    {
        return $this->actif;
    }

    public function setActif(bool $actif): self
    {
        $this->actif = $actif;

        return $this;
    }
}
