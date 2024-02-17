<?php
/*
 * Copyright (c) 2024. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Entity/Departement.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 16/02/2024 23:13
 */

namespace App\Entity;

use App\Entity\Traits\LifeCycleTrait;
use App\Entity\Traits\UuidTrait;
use App\Repository\DepartementRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\DBAL\Types\Types;
use Doctrine\ORM\Mapping as ORM;
use Exception;
use Ramsey\Uuid\Uuid;
use Ramsey\Uuid\UuidInterface;
use Symfony\Component\HttpFoundation\File\File;
use Symfony\Component\Serializer\Annotation\Groups;
use Symfony\Component\Serializer\Annotation\MaxDepth;
use Vich\UploaderBundle\Mapping\Annotation as Vich;
use function chr;
use function ord;

#[Vich\Uploadable]
#[ORM\Entity(repositoryClass: DepartementRepository::class)]
#[ORM\HasLifecycleCallbacks]
class Departement extends BaseEntity
{
    use UuidTrait;
    use LifeCycleTrait;

    #[Groups(groups: ['actualite_administration'])]
    #[ORM\Column(type: Types::STRING, length: 255)]
    private ?string $libelle = null;

    #[ORM\ManyToOne(targetEntity: Ufr::class, inversedBy: 'departements')]
    private ?Ufr $ufr = null;

    #[ORM\Column(type: Types::STRING, length: 50)]
    private ?string $logoName = '';

    #[Vich\UploadableField(mapping: 'logo', fileNameProperty: 'logoName')]
    private ?File $logoFile = null;

    #[ORM\Column(type: Types::STRING, length: 16, nullable: true)]
    private ?string $telContact = null;

    #[ORM\Column(name: 'fax', type: Types::STRING, length: 16, nullable: true)]
    private ?string $fax = null;

    #[ORM\Column(name: 'couleur', type: Types::STRING, length: 16, nullable: true)]
    private ?string $couleur = null;

    #[ORM\Column(type: Types::STRING, length: 255, nullable: true)]
    private ?string $siteWeb = null;

    #[ORM\Column(type: Types::TEXT, nullable: true)]
    private ?string $description = null;

    /**
     * @deprecated
     */
    #[ORM\Column(type: Types::BOOLEAN)]
    private bool $optUpdateCelcat = false;

    #[ORM\Column(type: Types::BOOLEAN)]
    private bool $optAgence = false;

    #[ORM\Column(type: Types::BOOLEAN)]
    private bool $optMateriel = false;

    #[ORM\Column(type: Types::BOOLEAN)]
    private bool $optEdt = true;

    #[ORM\Column(type: Types::BOOLEAN)]
    private bool $optStage = true;

    #[ORM\Column(type: Types::BOOLEAN)]
    private bool $optSynthese = true;

    #[ORM\Column(type: Types::BOOLEAN)]
    private bool $optMessagerie = true;

    #[ORM\ManyToOne(targetEntity: Personnel::class)]
    private ?Personnel $respri = null;

    /**
     * @deprecated
     */
    #[ORM\Column(type: Types::INTEGER)]
    private int $optAnneePrevisionnel;

    /**
     * @var \Doctrine\Common\Collections\Collection<int, \App\Entity\TypeDocument>
     */
    #[MaxDepth(1)]
    #[ORM\OneToMany(mappedBy: 'departement', targetEntity: TypeDocument::class)]
    private Collection $typeDocuments;

    /**
     * @var \Doctrine\Common\Collections\Collection<int, \App\Entity\PersonnelDepartement>
     */
    #[ORM\OneToMany(mappedBy: 'departement', targetEntity: PersonnelDepartement::class)]
    private Collection $personnelDepartements;

    /**
     * @var \Doctrine\Common\Collections\Collection<int, \App\Entity\Actualite>
     */
    #[ORM\OneToMany(mappedBy: 'departement', targetEntity: Actualite::class)]
    private Collection $actualites;

    /**
     * @var \Doctrine\Common\Collections\Collection<int, \App\Entity\Diplome>
     */
    #[ORM\OneToMany(mappedBy: 'departement', targetEntity: Diplome::class)]
    #[ORM\OrderBy(value: ['libelle' => 'ASC', 'actif' => 'DESC'])]
    private Collection $diplomes;

    /**
     * @var \Doctrine\Common\Collections\Collection<int, \App\Entity\SalleExamen>
     */
    #[ORM\OneToMany(mappedBy: 'departement', targetEntity: SalleExamen::class)]
    private Collection $salleExamens;

    /**
     * @var \Doctrine\Common\Collections\Collection<int, \App\Entity\Hrs>
     */
    #[ORM\OneToMany(mappedBy: 'departement', targetEntity: Hrs::class)]
    private Collection $hrs;

    #[ORM\Column(type: Types::BOOLEAN)]
    private bool $actif = true;

    #[ORM\Column(type: Types::BOOLEAN)]
    private bool $preparationAnnee = false;

    #[ORM\ManyToOne(targetEntity: AnneeUniversitaire::class, inversedBy: 'departements')]
    private ?AnneeUniversitaire $anneeUniversitairePrepare = null;

    #[ORM\ManyToOne(targetEntity: Personnel::class, inversedBy: 'departements')]
    private ?Personnel $respMateriel = null;

    /**
     * @var \Doctrine\Common\Collections\Collection<int, \App\Entity\Etudiant>
     */
    #[ORM\OneToMany(mappedBy: 'departement', targetEntity: Etudiant::class)]
    private Collection $etudiants;
    /**
     * @var \Doctrine\Common\Collections\Collection<\App\Entity\BCDemande>
     */
    #[ORM\OneToMany(mappedBy: 'departement', targetEntity: BCDemande::class)]
    private Collection $bCDemandes;

    /**
     * @var \Doctrine\Common\Collections\Collection<\App\Entity\Borne>
     */
    #[ORM\OneToMany(mappedBy: 'departement', targetEntity: Borne::class)]
    private Collection $bornes;

    /**
     * @throws Exception
     */
    public function __construct()
    {
        $this->setUuid(Uuid::uuid4());
        $this->optAnneePrevisionnel = (int) date('Y');
        $this->typeDocuments = new ArrayCollection();
        $this->personnelDepartements = new ArrayCollection();
        $this->actualites = new ArrayCollection();
        $this->diplomes = new ArrayCollection();
        $this->salleExamens = new ArrayCollection();
        $this->hrs = new ArrayCollection();
        $this->etudiants = new ArrayCollection();
        $this->bCDemandes = new ArrayCollection();
        $this->bornes = new ArrayCollection();
    }

    public function setUuid(UuidInterface $uuid): self
    {
        $this->uuid = $uuid;

        return $this;
    }

    public function __clone()
    {
        $this->setUuid(Uuid::uuid4());
    }

    /**
     * @return Ufr
     */
    public function getUfr(): ?Ufr
    {
        return $this->ufr;
    }

    public function setUfr(?Ufr $ufr): void
    {
        $this->ufr = $ufr;
    }

    /**
     * @return string
     */
    public function getLibelle(): ?string
    {
        return $this->libelle;
    }

    public function setLibelle(?string $libelle): void
    {
        $this->libelle = $libelle;
    }

    public function getTelContact(): ?string
    {
        return $this->telContact;
    }

    public function setTelContact(string $telContact): void
    {
        $this->telContact = $telContact;
    }

    public function getFax(): ?string
    {
        return $this->fax;
    }

    public function setFax(string $fax): void
    {
        $this->fax = $fax;
    }

    public function getCouleur(): ?string
    {
        return $this->couleur;
    }

    public function setCouleur(string $couleur): void
    {
        $this->couleur = $couleur;
    }

    public function getSiteWeb(): ?string
    {
        return $this->siteWeb;
    }

    public function setSiteWeb(string $siteWeb): void
    {
        $this->siteWeb = $siteWeb;
    }

    public function getDescription(): ?string
    {
        return $this->description;
    }

    public function setDescription(string $description): void
    {
        $this->description = $description;
    }

    public function isOptAgence(): bool
    {
        return $this->optAgence;
    }

    public function getOptAgence(): ?bool
    {
        return $this->optAgence;
    }

    public function setOptAgence(bool $optAgence): void
    {
        $this->optAgence = $optAgence;
    }

    public function isOptMateriel(): bool
    {
        return $this->optMateriel;
    }

    public function getOptMateriel(): ?bool
    {
        return $this->optMateriel;
    }

    public function setOptMateriel(bool $optMateriel): void
    {
        $this->optMateriel = $optMateriel;
    }

    public function isOptEdt(): bool
    {
        return $this->optEdt;
    }

    public function getOptEdt(): ?bool
    {
        return $this->optEdt;
    }

    public function setOptEdt(bool $optEdt): void
    {
        $this->optEdt = $optEdt;
    }

    public function isOptMessagerie(): bool
    {
        return $this->optMessagerie;
    }

    public function getOptMessagerie(): ?bool
    {
        return $this->optMessagerie;
    }

    public function setOptMessagerie(bool $optMessagerie): void
    {
        $this->optMessagerie = $optMessagerie;
    }

    public function getRespri(): ?Personnel
    {
        return $this->respri;
    }

    public function setRespri(?Personnel $respri): void
    {
        $this->respri = $respri;
    }

    /** @deprecated */
    public function getOptAnneePrevisionnel(): int
    {
        return $this->optAnneePrevisionnel;
    }

    /** @deprecated */
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

    public function addTypeDocument(TypeDocument $typeDocument): self
    {
        if (!$this->typeDocuments->contains($typeDocument)) {
            $this->typeDocuments[] = $typeDocument;
            $typeDocument->setDepartement($this);
        }

        return $this;
    }

    public function removeTypeDocument(TypeDocument $typeDocument): self
    {
        if ($this->typeDocuments->contains($typeDocument)) {
            $this->typeDocuments->removeElement($typeDocument);
            // set the owning side to null (unless already changed)
            if ($typeDocument->getDepartement() === $this) {
                $typeDocument->setDepartement(null);
            }
        }

        return $this;
    }

    public function getLogoFile(): ?File
    {
        return $this->logoFile;
    }

    /**
     * @throws Exception
     */
    public function setLogoFile(?File $logo = null): void
    {
        $this->logoFile = $logo;

        if (null !== $logo) {
            // It is required that at least one field changes if you are using doctrine
            // otherwise the event listeners won't be called and the file is lost
            $this->setUpdatedValue();
        }
    }

    public function getLogoName(): ?string
    {
        return $this->logoName;
    }

    public function setLogoName(string $logoName): void
    {
        $this->logoName = $logoName;
    }

    /**
     * @return Collection|PersonnelDepartement[]
     */
    public function getPersonnelDepartements(): Collection
    {
        return $this->personnelDepartements;
    }

    public function addPersonnelDepartement(PersonnelDepartement $personnelDepartement): self
    {
        if (!$this->personnelDepartements->contains($personnelDepartement)) {
            $this->personnelDepartements[] = $personnelDepartement;
            $personnelDepartement->setDepartement($this);
        }

        return $this;
    }

    public function removePersonnelDepartement(PersonnelDepartement $personnelDepartement): self
    {
        if ($this->personnelDepartements->contains($personnelDepartement)) {
            $this->personnelDepartements->removeElement($personnelDepartement);
            // set the owning side to null (unless already changed)
            if ($personnelDepartement->getDepartement() === $this) {
                $personnelDepartement->setDepartement(null);
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
            $actualite->setDepartement($this);
        }

        return $this;
    }

    public function removeActualite(Actualite $actualite): self
    {
        if ($this->actualites->contains($actualite)) {
            $this->actualites->removeElement($actualite);
            // set the owning side to null (unless already changed)
            if ($actualite->getDepartement() === $this) {
                $actualite->setDepartement(null);
            }
        }

        return $this;
    }

    public function update(string $name, mixed $value): void
    {
        $name[0] = chr(ord($name[0]) - 32);
        $method = 'set'.$name;
        if (method_exists($this, $method)) {
            $this->$method($value);
        }
    }

    /**
     * @return Collection|Diplome[]
     */
    public function getDiplomes(): Collection
    {
        return $this->diplomes;
    }

    public function addDiplome(Diplome $diplome): self
    {
        if (!$this->diplomes->contains($diplome)) {
            $this->diplomes[] = $diplome;
            $diplome->setDepartement($this);
        }

        return $this;
    }

    public function removeDiplome(Diplome $diplome): self
    {
        if ($this->diplomes->contains($diplome)) {
            $this->diplomes->removeElement($diplome);
            // set the owning side to null (unless already changed)
            if ($diplome->getDepartement() === $this) {
                $diplome->setDepartement(null);
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
            $salleExamen->setDepartement($this);
        }

        return $this;
    }

    public function removeSalleExamen(SalleExamen $salleExamen): self
    {
        if ($this->salleExamens->contains($salleExamen)) {
            $this->salleExamens->removeElement($salleExamen);
            // set the owning side to null (unless already changed)
            if ($salleExamen->getDepartement() === $this) {
                $salleExamen->setDepartement(null);
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
            $hr->setDepartement($this);
        }

        return $this;
    }

    public function removeHr(Hrs $hr): self
    {
        if ($this->hrs->contains($hr)) {
            $this->hrs->removeElement($hr);
            // set the owning side to null (unless already changed)
            if ($hr->getDepartement() === $this) {
                $hr->setDepartement(null);
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

    public function getPreparationAnnee(): ?bool
    {
        return $this->preparationAnnee;
    }

    public function setPreparationAnnee(bool $preparationAnnee): self
    {
        $this->preparationAnnee = $preparationAnnee;

        return $this;
    }

    public function getAnneeUniversitairePrepare(): ?AnneeUniversitaire
    {
        return $this->anneeUniversitairePrepare;
    }

    public function setAnneeUniversitairePrepare(?AnneeUniversitaire $anneeUniversitairePrepare): self
    {
        $this->anneeUniversitairePrepare = $anneeUniversitairePrepare;

        return $this;
    }

    public function getRespMateriel(): ?Personnel
    {
        return $this->respMateriel;
    }

    public function setRespMateriel(?Personnel $respMateriel): self
    {
        $this->respMateriel = $respMateriel;

        return $this;
    }

    public function getOptUpdateCelcat(): ?bool
    {
        return $this->optUpdateCelcat;
    }

    /**
     * @deprecated
     */
    public function isOptUpdateCelcat(): bool
    {
        return $this->optUpdateCelcat;
    }

    /**
     * @deprecated
     */
    public function setOptUpdateCelcat(bool $optUpdateCelcat): void
    {
        $this->optUpdateCelcat = $optUpdateCelcat;
    }

    public function getOptStage(): ?bool
    {
        return $this->optStage;
    }

    public function isOptStage(): bool
    {
        return $this->optStage;
    }

    public function setOptStage(bool $optStage): void
    {
        $this->optStage = $optStage;
    }

    public function getOptSynthese(): ?bool
    {
        return $this->optSynthese;
    }

    public function isOptSynthese(): bool
    {
        return $this->optSynthese;
    }

    public function setOptSynthese(bool $optSynthese): void
    {
        $this->optSynthese = $optSynthese;
    }

    /**
     * @return Collection|Etudiant[]
     */
    public function getEtudiants(): Collection
    {
        return $this->etudiants;
    }

    public function addEtudiant(Etudiant $etudiant): self
    {
        if (!$this->etudiants->contains($etudiant)) {
            $this->etudiants[] = $etudiant;
            $etudiant->setDepartement($this);
        }

        return $this;
    }

    public function removeEtudiant(Etudiant $etudiant): self
    {
        if ($this->etudiants->contains($etudiant)) {
            $this->etudiants->removeElement($etudiant);
            // set the owning side to null (unless already changed)
            if ($etudiant->getDepartement() === $this) {
                $etudiant->setDepartement(null);
            }
        }

        return $this;
    }

    public function libelleInitiales(): array|string|null
    {
        return str_replace(' ', '<br>', $this->libelle);
    }

    /**
     * @return Collection|BCDemande[]
     */
    public function getBCDemands(): Collection
    {
        return $this->bCDemandes;
    }

    public function addBCDemand(BCDemande $bCDemand): self
    {
        if (!$this->bCDemandes->contains($bCDemand)) {
            $this->bCDemandes[] = $bCDemand;
            $bCDemand->setDepartement($this);
        }

        return $this;
    }

    public function removeBCDemand(BCDemande $bCDemand): self
    {
        // set the owning side to null (unless already changed)
        if ($this->bCDemandes->removeElement($bCDemand) && $bCDemand->getDepartement() === $this) {
            $bCDemand->setDepartement(null);
        }

        return $this;
    }

    /**
     * @return Collection|Borne[]
     */
    public function getBornes(): Collection
    {
        return $this->bornes;
    }

    public function addBorne(Borne $borne): self
    {
        if (!$this->bornes->contains($borne)) {
            $this->bornes[] = $borne;
            $borne->setDepartement($this);
        }

        return $this;
    }

    public function removeBorne(Borne $borne): self
    {
        // set the owning side to null (unless already changed)
        if ($this->bornes->removeElement($borne) && $borne->getDepartement() === $this) {
            $borne->setDepartement(null);
        }

        return $this;
    }
}
