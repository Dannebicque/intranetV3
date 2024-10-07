<?php
/*
 * Copyright (c) 2024. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Entity/Diplome.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 04/10/2024 21:31
 */

namespace App\Entity;

use ApiPlatform\Metadata\ApiResource;
use App\Entity\Traits\ApogeeTrait;
use App\Entity\Traits\LifeCycleTrait;
use App\Repository\DiplomeRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\DBAL\Types\Types;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\HttpFoundation\File\File;
use Symfony\Component\Serializer\Attribute\Groups;
use Vich\UploaderBundle\Mapping\Annotation as Vich;
use function chr;
use function ord;

#[Vich\Uploadable]
#[ORM\Entity(repositoryClass: DiplomeRepository::class)]
#[ORM\HasLifecycleCallbacks]
#[ApiResource(
    normalizationContext: ['groups' => ['diplome:read']],
    denormalizationContext: ['groups' => ['diplome:write']]
)]
class Diplome extends BaseEntity
{
    use ApogeeTrait;
    use LifeCycleTrait;

    #[ORM\Column(type: Types::STRING, length: 255)]
    #[Groups(['diplome:read', 'diplome:write'])]
    private ?string $libelle = null;

    #[ORM\ManyToOne(targetEntity: Personnel::class)]
    private ?Personnel $responsableDiplome = null;

    #[ORM\ManyToOne(targetEntity: Personnel::class)]
    private ?Personnel $assistantDiplome = null;

    #[ORM\ManyToOne(targetEntity: TypeDiplome::class, inversedBy: 'diplomes')]
    #[Groups(['diplome:read', 'diplome:write'])]
    private ?TypeDiplome $typeDiplome = null;

    #[ORM\Column(type: Types::INTEGER)]
    private int $optNbJoursSaisie = 15;

    #[ORM\Column(type: Types::BOOLEAN)]
    private bool $optDilpomeDecale = false;

    #[ORM\Column(type: Types::BOOLEAN)]
    private bool $optSupprAbsence = false;

    #[ORM\Column(type: Types::STRING, length: 10)]
    private string $optMethodeCalcul = Constantes::METHODE_CALCUL_MOY_MODULE;

    #[ORM\Column(type: Types::BOOLEAN)]
    private bool $optAnonymat = false;

    #[ORM\Column(type: Types::BOOLEAN)]
    private bool $optCommentairesReleve = false;

    #[ORM\Column(type: Types::BOOLEAN)]
    private bool $optEspacePersoVisible = true;

    #[ORM\Column(type: Types::INTEGER)]
    private int $volumeHoraire = 0;

    #[ORM\Column(type: Types::INTEGER)]
    private int $codeCelcatDepartement = 0;

    /**
     * @var Collection<int, Hrs>
     */
    #[ORM\OneToMany(mappedBy: 'diplome', targetEntity: Hrs::class)]
    private Collection $hrs;

    /**
     * @var Collection<int, Ppn>
     */
    #[ORM\OneToMany(mappedBy: 'diplome', targetEntity: Ppn::class)]
    private Collection $ppns;

    /**
     * @var Collection<int, Annee>
     */
    #[ORM\OneToMany(mappedBy: 'diplome', targetEntity: Annee::class)]
    #[ORM\OrderBy(value: ['ordre' => 'ASC', 'libelle' => 'ASC'])]
    private Collection $annees;

    #[ORM\Column(type: Types::STRING, length: 40)]
    #[Groups(['diplome:read', 'diplome:write'])]
    private ?string $sigle = null;

    #[ORM\Column(type: Types::BOOLEAN)]
    private bool $actif = true;

    #[ORM\ManyToOne(targetEntity: AnneeUniversitaire::class, inversedBy: 'diplomes')]
    /** @deprecated plus nécessaire de le gérer ici */
    private ?AnneeUniversitaire $anneeUniversitaire = null;

    #[ORM\Column(type: Types::INTEGER)]
    private int $optSemainesVisibles = 2;

    #[ORM\Column(type: Types::BOOLEAN)]
    private bool $optCertifieQualite = false;

    #[ORM\ManyToOne(targetEntity: Personnel::class)]
    private ?Personnel $optResponsableQualite = null;

    #[ORM\Column(type: Types::BOOLEAN)]
    private ?bool $optUpdateCelcat = false;

    #[ORM\ManyToOne(targetEntity: self::class, inversedBy: 'enfants')]
    private ?Diplome $parent;

    #[ORM\OneToMany(mappedBy: 'parent', targetEntity: self::class)]
    private Collection $enfants;

    #[ORM\ManyToOne(targetEntity: ApcReferentiel::class, inversedBy: 'diplomes')]
    private ?ApcReferentiel $referentiel;

    #[ORM\ManyToOne(targetEntity: ApcParcours::class, inversedBy: 'diplomes')]
    private ?ApcParcours $apcParcours = null;

    #[ORM\OneToMany(mappedBy: 'diplome', targetEntity: TypeGroupe::class)]
    private Collection $typeGroupes;

    #[ORM\OneToMany(mappedBy: 'diplome', targetEntity: EdtPlanning::class)]
    private Collection $edtPlannings;

    #[ORM\Column(length: 255, nullable: true)]
    private ?string $logoPartenaire = null;

    #[Vich\UploadableField(mapping: 'logo', fileNameProperty: 'logoPartenaire')]
    private ?File $logoFile = null;

    #[ORM\Column(length: 255, nullable: true)]
    private ?string $keyEduSign = null;

    #[ORM\Column(nullable: true)]
    private ?bool $saisieCmAutorise = true;

    public function __construct(#[ORM\ManyToOne(targetEntity: Departement::class, inversedBy: 'diplomes')] private ?Departement $departement, ?Diplome $diplome = null)
    {
        $this->hrs = new ArrayCollection();
        $this->ppns = new ArrayCollection();
        $this->annees = new ArrayCollection();
        $this->enfants = new ArrayCollection();
        $this->parent = $diplome;
        $this->typeGroupes = new ArrayCollection();
        $this->edtPlannings = new ArrayCollection();
    }

    public function getLogoFile(): ?File
    {
        return $this->logoFile;
    }

    public function setLogoFile(?File $logo = null): void
    {
        $this->logoFile = $logo;

        if (null !== $logo) {
            // It is required that at least one field changes if you are using doctrine
            // otherwise the event listeners won't be called and the file is lost
            $this->setUpdatedValue();
        }
    }

    public function getDisplay(): ?string
    {
        if (null !== $this->getTypeDiplome()) {
            return $this->getTypeDiplome()->getSigle().' '.$this->libelle;
        }

        return $this->libelle;
    }

    public function getTypeDiplome(): ?TypeDiplome
    {
        return $this->typeDiplome;
    }

    public function setTypeDiplome(?TypeDiplome $typeDiplome): void
    {
        $this->typeDiplome = $typeDiplome;
    }

    public function getDisplayCourt(): ?string
    {
        if (null !== $this->getTypeDiplome()) {
            return $this->getTypeDiplome()->getSigle().' '.$this->sigle;
        }

        return $this->sigle;
    }

    /**
     * @return Personnel
     */
    public function getResponsableDiplome(): ?Personnel
    {
        return $this->responsableDiplome;
    }

    public function setResponsableDiplome(Personnel $responsableDiplome): void
    {
        $this->responsableDiplome = $responsableDiplome;
    }

    /**
     * @return Personnel
     */
    public function getAssistantDiplome(): ?Personnel
    {
        return $this->assistantDiplome;
    }

    public function setAssistantDiplome(Personnel $assistantDiplome): void
    {
        $this->assistantDiplome = $assistantDiplome;
    }

    public function getOptNbJoursSaisie(): int
    {
        return $this->optNbJoursSaisie;
    }

    public function setOptNbJoursSaisie(int $optNbJoursSaisie): void
    {
        $this->optNbJoursSaisie = $optNbJoursSaisie;
    }

    public function isOptDilpomeDecale(): bool
    {
        return $this->optDilpomeDecale;
    }

    public function getOptDilpomeDecale(): ?bool
    {
        return $this->optDilpomeDecale;
    }

    public function setOptDilpomeDecale(bool $optDilpomeDecale): void
    {
        $this->optDilpomeDecale = $optDilpomeDecale;
    }

    public function getOptMethodeCalcul(): string
    {
        return $this->optMethodeCalcul;
    }

    public function setOptMethodeCalcul(string $optMethodeCalcul): void
    {
        $this->optMethodeCalcul = $optMethodeCalcul;
    }

    public function isOptAnonymat(): bool
    {
        return $this->optAnonymat;
    }

    public function getOptAnonymat(): ?bool
    {
        return $this->optAnonymat;
    }

    public function setOptAnonymat(bool $optAnonymat): void
    {
        $this->optAnonymat = $optAnonymat;
    }

    public function isOptCommentairesReleve(): bool
    {
        return $this->optCommentairesReleve;
    }

    public function getOptCommentairesReleve(): ?bool
    {
        return $this->optCommentairesReleve;
    }

    public function setOptCommentairesReleve(bool $optCommentairesReleve): void
    {
        $this->optCommentairesReleve = $optCommentairesReleve;
    }

    public function isOptEspacePersoVisible(): bool
    {
        return $this->optEspacePersoVisible;
    }

    public function getOptEspacePersoVisible(): ?bool
    {
        return $this->optEspacePersoVisible;
    }

    public function setOptEspacePersoVisible(bool $optEspacePersoVisible): void
    {
        $this->optEspacePersoVisible = $optEspacePersoVisible;
    }

    public function getVolumeHoraire(): int
    {
        return $this->volumeHoraire;
    }

    public function setVolumeHoraire(int $volumeHoraire): void
    {
        $this->volumeHoraire = $volumeHoraire;
    }

    public function getCodeCelcatDepartement(): int
    {
        return $this->codeCelcatDepartement;
    }

    public function setCodeCelcatDepartement(int $codeCelcatDepartement = 0): void
    {
        $this->codeCelcatDepartement = $codeCelcatDepartement;
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
            $hr->setDiplome($this);
        }

        return $this;
    }

    public function removeHr(Hrs $hr): self
    {
        if ($this->hrs->contains($hr)) {
            $this->hrs->removeElement($hr);
            // set the owning side to null (unless already changed)
            if ($hr->getDiplome() === $this) {
                $hr->setDiplome(null);
            }
        }

        return $this;
    }

    /**
     * @return Collection|Ppn[]
     */
    public function getPpns(): Collection
    {
        return $this->ppns;
    }

    public function addPpn(Ppn $ppn): self
    {
        if (!$this->ppns->contains($ppn)) {
            $this->ppns[] = $ppn;
            $ppn->setDiplome($this);
        }

        return $this;
    }

    public function removePpn(Ppn $ppn): self
    {
        if ($this->ppns->contains($ppn)) {
            $this->ppns->removeElement($ppn);
            // set the owning side to null (unless already changed)
            if ($ppn->getDiplome() === $this) {
                $ppn->setDiplome(null);
            }
        }

        return $this;
    }

    public function update(string $name, mixed $value): bool
    {
        $name[0] = chr(ord($name[0]) - 32);
        $method = 'set'.$name;
        if (method_exists($this, $method)) {
            $this->$method($value);

            return true;
        }

        return false;
    }

    public function getDepartement(): ?Departement
    {
        return $this->departement;
    }

    public function setDepartement(?Departement $departement): self
    {
        $this->departement = $departement;

        return $this;
    }

    public function addAnnee(Annee $annee): self
    {
        if (!$this->annees->contains($annee)) {
            $this->annees[] = $annee;
            $annee->setDiplome($this);
        }

        return $this;
    }

    public function removeAnnee(Annee $annee): self
    {
        if ($this->annees->contains($annee)) {
            $this->annees->removeElement($annee);
            // set the owning side to null (unless already changed)
            if ($annee->getDiplome() === $this) {
                $annee->setDiplome(null);
            }
        }

        return $this;
    }

    public function getSigle(): ?string
    {
        return $this->sigle;
    }

    public function setSigle(string $sigle): self
    {
        $this->sigle = $sigle;

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

    /** @deprecated plus nécessaire de le gérer ici ? Passé par l'année de l'étudiant ou de l'enseignant ?*/
    public function displayAnneeUniversitaire(): string
    {
        return null !== $this->getAnneeUniversitaire() ? $this->getAnneeUniversitaire()->displayAnneeUniversitaire() : 'err';
    }

    /** @deprecated plus nécessaire de le gérer ici ? Passé par l'année de l'étudiant ou de l'enseignant ?*/
    public function getAnneeUniversitaire(): ?AnneeUniversitaire
    {
        return $this->anneeUniversitaire;
    }

    /** @deprecated plus nécessaire de le gérer ici ? Passé par l'année de l'étudiant ou de l'enseignant ?*/
    public function setAnneeUniversitaire(?AnneeUniversitaire $anneeUniversitaire): self
    {
        $this->anneeUniversitaire = $anneeUniversitaire;

        return $this;
    }

    public function getOptSemainesVisibles(): ?int
    {
        return $this->optSemainesVisibles;
    }

    public function setOptSemainesVisibles(int $optSemainesVisibles): self
    {
        $this->optSemainesVisibles = $optSemainesVisibles;

        return $this;
    }

    public function getLibelleLong(): string
    {
        if (null !== $this->getTypeDiplome()) {
            return $this->getTypeDiplome()->getSigle().' '.$this->getLibelle();
        }

        return $this->getLibelle();
    }

    public function getLibelle(): ?string
    {
        return $this->libelle;
    }

    public function setLibelle(string $libelle): void
    {
        $this->libelle = $libelle;
    }

    public function getSemestres(): array
    {
        $semestres = [];
        foreach ($this->getAnnees() as $annee) {
            foreach ($annee->getSemestres() as $semestre) {
                $semestres[] = $semestre;
            }
        }

        return $semestres;
    }

    /**
     * @return Collection|Annee[]
     */
    public function getAnnees(): Collection
    {
        return $this->annees;
    }

    public function getOptSupprAbsence(): ?bool
    {
        return $this->optSupprAbsence;
    }

    public function isOptSupprAbsence(): bool
    {
        return $this->optSupprAbsence;
    }

    public function setOptSupprAbsence(bool $optSupprAbsence): void
    {
        $this->optSupprAbsence = $optSupprAbsence;
    }

    public function getOptCertifieQualite(): ?bool
    {
        return $this->optCertifieQualite;
    }

    public function setOptCertifieQualite(bool $certifieQualite): self
    {
        $this->optCertifieQualite = $certifieQualite;

        return $this;
    }

    public function getOptResponsableQualite(): ?Personnel
    {
        return $this->optResponsableQualite;
    }

    public function setOptResponsableQualite(?Personnel $responsableQualite): self
    {
        $this->optResponsableQualite = $responsableQualite;

        return $this;
    }

    public function __serialize(): array
    {
        // Ajouté pour le problème de connexion avec le usernametoken
        return [
            $this->getId(),
            $this->getLibelle(),
        ];
    }

    public function __unserialize(array $data): void
    {
    }

    public function isOptUpdateCelcat(): ?bool
    {
        return $this->optUpdateCelcat;
    }

    public function setOptUpdateCelcat(bool $optUpdateCelcat): self
    {
        $this->optUpdateCelcat = $optUpdateCelcat;

        return $this;
    }

    public function getTypeStructure(): ?string
    {
        return $this->getReferentiel()?->getTypeStructure();
    }

    public function getParent(): ?self
    {
        return $this->parent;
    }

    public function setParent(?self $parent): self
    {
        $this->parent = $parent;

        return $this;
    }

    /**
     * @return Collection<int, self>
     */
    public function getEnfants(): Collection
    {
        return $this->enfants;
    }

    public function addEnfant(self $enfant): self
    {
        if (!$this->enfants->contains($enfant)) {
            $this->enfants[] = $enfant;
            $enfant->setParent($this);
        }

        return $this;
    }

    public function removeEnfant(self $enfant): self
    {
        // set the owning side to null (unless already changed)
        if ($this->enfants->removeElement($enfant) && $enfant->getParent() === $this) {
            $enfant->setParent(null);
        }

        return $this;
    }

    public function getReferentiel(): ?ApcReferentiel
    {
        return $this->referentiel;
    }

    public function setReferentiel(?ApcReferentiel $referentiel): self
    {
        $this->referentiel = $referentiel;

        return $this;
    }

    public function getApcParcours(): ?ApcParcours
    {
        return $this->apcParcours;
    }

    public function setApcParcours(?ApcParcours $apcParcours): self
    {
        $this->apcParcours = $apcParcours;

        return $this;
    }

    /**
     * @return Collection<int, TypeGroupe>
     */
    public function getTypeGroupes(): Collection
    {
        return $this->typeGroupes;
    }

    public function addTypeGroupe(TypeGroupe $typeGroupe): self
    {
        if (!$this->typeGroupes->contains($typeGroupe)) {
            $this->typeGroupes[] = $typeGroupe;
            $typeGroupe->setDiplome($this);
        }

        return $this;
    }

    public function removeTypeGroupe(TypeGroupe $typeGroupe): self
    {
        // set the owning side to null (unless already changed)
        if ($this->typeGroupes->removeElement($typeGroupe) && $typeGroupe->getDiplome() === $this) {
            $typeGroupe->setDiplome(null);
        }

        return $this;
    }

    public function isApc(): bool
    {
        return null !== $this->getTypeDiplome() ? $this->getTypeDiplome()->getApc() : false;
    }

    /**
     * @return Collection<int, EdtPlanning>
     */
    public function getEdtPlannings(): Collection
    {
        return $this->edtPlannings;
    }

    public function addEdtPlanning(EdtPlanning $edtPlanning): self
    {
        if (!$this->edtPlannings->contains($edtPlanning)) {
            $this->edtPlannings[] = $edtPlanning;
            $edtPlanning->setDiplome($this);
        }

        return $this;
    }

    public function removeEdtPlanning(EdtPlanning $edtPlanning): self
    {
        // set the owning side to null (unless already changed)
        if ($this->edtPlannings->removeElement($edtPlanning) && $edtPlanning->getDiplome() === $this) {
            $edtPlanning->setDiplome(null);
        }

        return $this;
    }

    public function getLogoPartenaire(): ?string
    {
        return $this->logoPartenaire;
    }

    public function setLogoPartenaire(?string $logoPartenaire): self
    {
        $this->logoPartenaire = $logoPartenaire;

        return $this;
    }

    public function getKeyEduSign(): ?string
    {
        return $this->keyEduSign;
    }

    public function setKeyEduSign(?string $keyEduSign): static
    {
        $this->keyEduSign = $keyEduSign;

        return $this;
    }

    public function getSaisieCmAutorise(): ?bool
    {
        return $this->saisieCmAutorise ?? true;
    }

    public function setSaisieCmAutorise(?bool $saisieCmAutorise): static
    {
        $this->saisieCmAutorise = $saisieCmAutorise;

        return $this;
    }
}
