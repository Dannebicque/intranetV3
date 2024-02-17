<?php
/*
 * Copyright (c) 2024. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Entity/Etudiant.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 16/02/2024 23:15
 */

namespace App\Entity;

use App\Entity\Traits\LifeCycleTrait;
use App\Entity\Traits\UuidTrait;
use App\Interfaces\UtilisateurInterface;
use App\Repository\EtudiantRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\DBAL\Types\Types;
use Doctrine\ORM\Mapping as ORM;
use Exception;
use Ramsey\Uuid\Uuid;
use Ramsey\Uuid\UuidInterface;
use Symfony\Component\HttpFoundation\File\File;
use Symfony\Component\Serializer\Annotation\Groups;
use Vich\UploaderBundle\Mapping\Annotation as Vich;

#[Vich\Uploadable]
#[ORM\Entity(repositoryClass: EtudiantRepository::class)]
#[ORM\HasLifecycleCallbacks]
class Etudiant extends Utilisateur implements UtilisateurInterface
{
    use LifeCycleTrait;
    use UuidTrait;

    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column(type: Types::INTEGER)]
    private mixed $id;

    #[ORM\Column(type: Types::STRING, length: 50)]
    private ?string $photoName = 'noimage.png';

    #[Vich\UploadableField(mapping: 'etudiant', fileNameProperty: 'photoName')]
    private ?File $photoFile = null;

    #[Groups(groups: ['etudiants_administration'])]
    #[ORM\ManyToOne(targetEntity: Semestre::class, inversedBy: 'etudiants')]
    private ?Semestre $semestre = null;

    /**
     * @var Collection<int, \App\Entity\Note>
     */
    #[ORM\OneToMany(mappedBy: 'etudiant', targetEntity: Note::class)]
    private Collection $notes;

    #[Groups(groups: ['etudiants_administration'])]
    #[ORM\Column(type: Types::STRING, length: 20)]
    private ?string $numEtudiant = null;

    #[ORM\Column(type: Types::STRING, length: 20, nullable: true)]
    private ?string $numIne = null;

    #[ORM\Column(type: Types::INTEGER, nullable: true)]
    private ?int $anneeBac;

    /**
     * @var Collection<int, Absence>
     */
    #[ORM\OneToMany(mappedBy: 'etudiant', targetEntity: Absence::class)]
    #[ORM\OrderBy(value: ['dateHeure' => 'desc'])]
    private Collection $absences;

    #[ORM\OneToOne(targetEntity: Adresse::class, cascade: ['persist', 'remove'])]
    private ?Adresse $adresseParentale = null;

    /**
     * @var Collection<int, Rattrapage>
     */
    #[ORM\OneToMany(mappedBy: 'etudiant', targetEntity: Rattrapage::class)]
    private Collection $rattrapages;

    /**
     * @var Collection<int, Favori>
     */
    #[ORM\OneToMany(mappedBy: 'etudiantDemandeur', targetEntity: Favori::class)]
    private Collection $etudiantDemande;

    /**
     * @var Collection<int, Favori>
     */
    #[ORM\OneToMany(mappedBy: 'etudiantDemande', targetEntity: Favori::class)]
    private Collection $etudiantDemandeur;

    /**
     * @var Collection<int, Scolarite>
     */
    #[ORM\OneToMany(mappedBy: 'etudiant', targetEntity: Scolarite::class)]
    #[ORM\OrderBy(value: ['ordre' => 'ASC'])]
    private Collection $scolarites;

    /**
     * @var Collection<int, Notification>
     */
    #[ORM\OneToMany(mappedBy: 'etudiant', targetEntity: Notification::class)]
    #[ORM\OrderBy(value: ['created' => 'desc'])]
    private Collection $notifications;

    #[ORM\Column(type: Types::BOOLEAN)]
    private bool $boursier = false;

    #[ORM\Column(type: Types::BOOLEAN)]
    private bool $demandeurEmploi = false;

    #[ORM\ManyToMany(targetEntity: Groupe::class, inversedBy: 'etudiants')]
    private Collection $groupes;

    /**
     * @var Collection<int, MessageDestinataireEtudiant>
     */
    #[ORM\OneToMany(mappedBy: 'etudiant', targetEntity: MessageDestinataireEtudiant::class)]
    private Collection $messageDestinataireEtudiants;

    /**
     * @var Collection<int,AbsenceJustificatif>
     */
    #[ORM\OneToMany(mappedBy: 'etudiant', targetEntity: AbsenceJustificatif::class)]
    private Collection $absenceJustificatifs;

    /**
     * @var Collection<int, StageEtudiant>
     */
    #[ORM\OneToMany(mappedBy: 'etudiant', targetEntity: StageEtudiant::class)]
    private Collection $stageEtudiants;

    /**
     * @var Collection<int, Alternance>
     */
    #[ORM\OneToMany(mappedBy: 'etudiant', targetEntity: Alternance::class)]
    private Collection $alternances;

    #[ORM\Column(type: Types::BOOLEAN)]
    private bool $deleted = false;

    #[ORM\Column(type: Types::TEXT, nullable: true)]
    private ?string $amenagementsParticuliers = null;

    #[ORM\Column(type: Types::INTEGER)]
    private ?int $promotion;

    #[ORM\ManyToOne(targetEntity: Bac::class)]
    private ?Bac $bac = null;

    #[ORM\Column(type: Types::STRING, length: 255, nullable: true)]
    private ?string $intituleSecuriteSociale = null;

    #[ORM\Column(type: Types::STRING, length: 255, nullable: true)]
    private ?string $adresseSecuriteSociale = null;

    #[ORM\Column(type: Types::INTEGER)]
    private int $anneeSortie = 0;

    #[ORM\ManyToOne(targetEntity: Departement::class, inversedBy: 'etudiants')]
    private ?Departement $departement = null;

    #[ORM\Column(type: Types::STRING, length: 50, nullable: true)]
    private ?string $loginSpecifique = null;

    #[ORM\Column(type: Types::BOOLEAN)]
    private bool $formationContinue = false;

    /**
     * @var Collection<int, DocumentFavoriEtudiant>
     */
    #[ORM\OneToMany(mappedBy: 'etudiant', targetEntity: DocumentFavoriEtudiant::class)]
    private Collection $documentsFavoris;

    #[ORM\ManyToMany(targetEntity: ProjetEtudiant::class, mappedBy: 'etudiants')]
    private Collection $projetEtudiants;

    /**
     * @var Collection<int, Commentaire>
     */
    #[ORM\OneToMany(mappedBy: 'etudiant', targetEntity: Commentaire::class)]
    private Collection $commentaires;

    #[ORM\OneToMany(mappedBy: 'etudiant', targetEntity: ConpereEtudiant::class)]
    private Collection $conpereEtudiants;

    #[ORM\Column(length: 255, nullable: true)]
    private ?string $idEduSign = null;

    /**
     * @throws Exception
     */
    public function __construct()
    {
        parent::__construct();
        $this->setUuid(Uuid::uuid4());
        $this->notes = new ArrayCollection();
        $this->absences = new ArrayCollection();
        $this->rattrapages = new ArrayCollection();
        $this->etudiantDemande = new ArrayCollection();
        $this->etudiantDemandeur = new ArrayCollection();
        $this->scolarites = new ArrayCollection();
        $this->notifications = new ArrayCollection();
        $this->groupes = new ArrayCollection();
        $this->messageDestinataireEtudiants = new ArrayCollection();
        $this->absenceJustificatifs = new ArrayCollection();
        $this->stageEtudiants = new ArrayCollection();
        $this->alternances = new ArrayCollection();
        $this->documentsFavoris = new ArrayCollection();

        $this->promotion = (int) date('Y');
        $this->anneeBac = (int) date('Y');
        $this->typeUser = 'ETU';
        $this->projetEtudiants = new ArrayCollection();
        $this->commentaires = new ArrayCollection();
        $this->conpereEtudiants = new ArrayCollection();
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

    public function getId(): ?int
    {
        return $this->id;
    }

    /**
     * @return Collection|Note[]
     */
    public function getNotes(): Collection
    {
        return $this->notes;
    }

    public function addNote(Note $note): self
    {
        if (!$this->notes->contains($note)) {
            $this->notes[] = $note;
            $note->setEtudiant($this);
        }

        return $this;
    }

    public function removeNote(Note $note): self
    {
        if ($this->notes->contains($note)) {
            $this->notes->removeElement($note);
            // set the owning side to null (unless already changed)
            if ($note->getEtudiant() === $this) {
                $note->setEtudiant(null);
            }
        }

        return $this;
    }

    public function getNumEtudiant(): ?string
    {
        return $this->numEtudiant;
    }

    public function setNumEtudiant(string $numEtudiant): self
    {
        $this->numEtudiant = $numEtudiant;

        return $this;
    }

    public function getNumIne(): ?string
    {
        return $this->numIne;
    }

    public function setNumIne(string $numIne): self
    {
        $this->numIne = $numIne;

        return $this;
    }

    public function getAnneeBac(): ?int
    {
        return $this->anneeBac;
    }

    public function setAnneeBac(?int $anneeBac): self
    {
        $this->anneeBac = $anneeBac;

        return $this;
    }

    /**
     * @return Collection|Absence[]
     */
    public function getAbsences(): Collection
    {
        return $this->absences;
    }

    public function addAbsence(Absence $absence): self
    {
        if (!$this->absences->contains($absence)) {
            $this->absences[] = $absence;
            $absence->setEtudiant($this);
        }

        return $this;
    }

    public function removeAbsence(Absence $absence): self
    {
        if ($this->absences->contains($absence)) {
            $this->absences->removeElement($absence);
            // set the owning side to null (unless already changed)
            if ($absence->getEtudiant() === $this) {
                $absence->setEtudiant(null);
            }
        }

        return $this;
    }

    public function getAdresseParentale(): ?Adresse
    {
        return $this->adresseParentale;
    }

    public function setAdresseParentale(?Adresse $adresseParentale): self
    {
        $this->adresseParentale = $adresseParentale;

        return $this;
    }

    /**
     * @return Collection|Rattrapage[]
     */
    public function getRattrapages(): Collection
    {
        return $this->rattrapages;
    }

    public function addRattrapage(Rattrapage $rattrapage): self
    {
        if (!$this->rattrapages->contains($rattrapage)) {
            $this->rattrapages[] = $rattrapage;
            $rattrapage->setEtudiant($this);
        }

        return $this;
    }

    public function removeRattrapage(Rattrapage $rattrapage): self
    {
        if ($this->rattrapages->contains($rattrapage)) {
            $this->rattrapages->removeElement($rattrapage);
            // set the owning side to null (unless already changed)
            if ($rattrapage->getEtudiant() === $this) {
                $rattrapage->setEtudiant(null);
            }
        }

        return $this;
    }

    /**
     * @return Collection|Favori[]
     */
    public function getEtudiantDemande(): Collection
    {
        return $this->etudiantDemande;
    }

    public function addEtudiantDemande(Favori $etudiantDemande): self
    {
        if (!$this->etudiantDemande->contains($etudiantDemande)) {
            $this->etudiantDemande[] = $etudiantDemande;
            $etudiantDemande->setEtudiantDemandeur($this);
        }

        return $this;
    }

    public function removeEtudiantDemande(Favori $etudiantDemande): self
    {
        if ($this->etudiantDemande->contains($etudiantDemande)) {
            $this->etudiantDemande->removeElement($etudiantDemande);
            // set the owning side to null (unless already changed)
            if ($etudiantDemande->getEtudiantDemandeur() === $this) {
                $etudiantDemande->setEtudiantDemandeur(null);
            }
        }

        return $this;
    }

    /**
     * @return Collection|Favori[]
     */
    public function getEtudiantDemandeur(): Collection
    {
        return $this->etudiantDemandeur;
    }

    public function addEtudiantDemandeur(Favori $etudiantDemandeur): self
    {
        if (!$this->etudiantDemandeur->contains($etudiantDemandeur)) {
            $this->etudiantDemandeur[] = $etudiantDemandeur;
            $etudiantDemandeur->setEtudiantDemande($this);
        }

        return $this;
    }

    public function removeEtudiantDemandeur(Favori $etudiantDemandeur): self
    {
        if ($this->etudiantDemandeur->contains($etudiantDemandeur)) {
            $this->etudiantDemandeur->removeElement($etudiantDemandeur);
            // set the owning side to null (unless already changed)
            if ($etudiantDemandeur->getEtudiantDemande() === $this) {
                $etudiantDemandeur->setEtudiantDemande(null);
            }
        }

        return $this;
    }

    /**
     * @return Collection|Scolarite[]
     */
    public function getScolarites(): Collection
    {
        return $this->scolarites;
    }

    public function addScolarite(Scolarite $scolarite): self
    {
        if (!$this->scolarites->contains($scolarite)) {
            $this->scolarites[] = $scolarite;
            $scolarite->setEtudiant($this);
        }

        return $this;
    }

    public function removeScolarite(Scolarite $scolarite): self
    {
        if ($this->scolarites->contains($scolarite)) {
            $this->scolarites->removeElement($scolarite);
            // set the owning side to null (unless already changed)
            if ($scolarite->getEtudiant() === $this) {
                $scolarite->setEtudiant(null);
            }
        }

        return $this;
    }

    /**
     * @return Collection|Notification[]
     */
    public function getNotifications(): Collection
    {
        return $this->notifications;
    }

    public function addNotification(Notification $notification): self
    {
        if (!$this->notifications->contains($notification)) {
            $this->notifications[] = $notification;
            $notification->setEtudiant($this);
        }

        return $this;
    }

    public function removeNotification(Notification $notification): self
    {
        if ($this->notifications->contains($notification)) {
            $this->notifications->removeElement($notification);
            // set the owning side to null (unless already changed)
            if ($notification->getEtudiant() === $this) {
                $notification->setEtudiant(null);
            }
        }

        return $this;
    }

    public function __serialize(): array
    {
        // Ajouté pour le problème de connexion avec le usernametoken
        return [
            $this->id,
            $this->password,
            $this->username,
        ];
    }

    public function __unserialize($data): void
    {
        // Ajouté pour le problème de connexion avec le usernametoken
        [
            $this->id,
            $this->password,
            $this->username
        ] = $data;
    }

    public function getBoursier(): ?bool
    {
        return $this->boursier;
    }

    public function setBoursier(bool $boursier): self
    {
        $this->boursier = $boursier;

        return $this;
    }

    public function getDemandeurEmploi(): ?bool
    {
        return $this->demandeurEmploi;
    }

    public function setDemandeurEmploi(bool $demandeurEmploi): self
    {
        $this->demandeurEmploi = $demandeurEmploi;

        return $this;
    }

    /**
     * @return Collection|Groupe[]
     */
    public function getGroupes(): Collection
    {
        return $this->groupes;
    }

    public function addGroupe(Groupe $groupe): self
    {
        if (!$this->groupes->contains($groupe)) {
            $this->groupes[] = $groupe;
        }

        return $this;
    }

    public function removeGroupe(Groupe $groupe): self
    {
        if ($this->groupes->contains($groupe)) {
            $this->groupes->removeElement($groupe);
        }

        return $this;
    }

    /**
     * @return Collection|MessageDestinataireEtudiant[]
     */
    public function getMessageDestinataireEtudiants(): Collection
    {
        return $this->messageDestinataireEtudiants;
    }

    public function addMessageDestinataireEtudiant(MessageDestinataireEtudiant $messageDestinataireEtudiant): self
    {
        if (!$this->messageDestinataireEtudiants->contains($messageDestinataireEtudiant)) {
            $this->messageDestinataireEtudiants[] = $messageDestinataireEtudiant;
            $messageDestinataireEtudiant->setEtudiant($this);
        }

        return $this;
    }

    public function removeMessageDestinataireEtudiant(MessageDestinataireEtudiant $messageDestinataireEtudiant): self
    {
        if ($this->messageDestinataireEtudiants->contains($messageDestinataireEtudiant)) {
            $this->messageDestinataireEtudiants->removeElement($messageDestinataireEtudiant);
            // set the owning side to null (unless already changed)
            if ($messageDestinataireEtudiant->getEtudiant() === $this) {
                $messageDestinataireEtudiant->setEtudiant(null);
            }
        }

        return $this;
    }

    /**
     * @return Collection|AbsenceJustificatif[]
     */
    public function getAbsenceJustificatifs(): Collection
    {
        return $this->absenceJustificatifs;
    }

    public function addAbsenceJustificatif(AbsenceJustificatif $absenceJustificatif): self
    {
        if (!$this->absenceJustificatifs->contains($absenceJustificatif)) {
            $this->absenceJustificatifs[] = $absenceJustificatif;
            $absenceJustificatif->setEtudiant($this);
        }

        return $this;
    }

    public function removeAbsenceJustificatif(AbsenceJustificatif $absenceJustificatif): self
    {
        if ($this->absenceJustificatifs->contains($absenceJustificatif)) {
            $this->absenceJustificatifs->removeElement($absenceJustificatif);
            // set the owning side to null (unless already changed)
            if ($absenceJustificatif->getEtudiant() === $this) {
                $absenceJustificatif->setEtudiant(null);
            }
        }

        return $this;
    }

    /**
     * @return Collection|StageEtudiant[]
     */
    public function getStageEtudiants(): Collection
    {
        return $this->stageEtudiants;
    }

    public function addStageEtudiant(StageEtudiant $stageEtudiant): self
    {
        if (!$this->stageEtudiants->contains($stageEtudiant)) {
            $this->stageEtudiants[] = $stageEtudiant;
            $stageEtudiant->setEtudiant($this);
        }

        return $this;
    }

    public function removeStageEtudiant(StageEtudiant $stageEtudiant): self
    {
        if ($this->stageEtudiants->contains($stageEtudiant)) {
            $this->stageEtudiants->removeElement($stageEtudiant);
            // set the owning side to null (unless already changed)
            if ($stageEtudiant->getEtudiant() === $this) {
                $stageEtudiant->setEtudiant(null);
            }
        }

        return $this;
    }

    /**
     * @return Collection|Alternance[]
     */
    public function getAlternances(): Collection
    {
        return $this->alternances;
    }

    public function addAlternance(Alternance $alternance): self
    {
        if (!$this->alternances->contains($alternance)) {
            $this->alternances[] = $alternance;
            $alternance->setEtudiant($this);
        }

        return $this;
    }

    public function removeAlternance(Alternance $alternance): self
    {
        if ($this->alternances->contains($alternance)) {
            $this->alternances->removeElement($alternance);
            // set the owning side to null (unless already changed)
            if ($alternance->getEtudiant() === $this) {
                $alternance->setEtudiant(null);
            }
        }

        return $this;
    }

    public function getDiplome(): ?Diplome
    {
        if (null !== $this->getSemestre() && null !== $this->getSemestre()->getAnnee() && null !== $this->getSemestre()->getAnnee()->getDiplome()) {
            return $this->getSemestre()->getAnnee()->getDiplome();
        }

        return null;
    }

    public function getSemestre(): ?Semestre
    {
        return $this->semestre;
    }

    public function setSemestre(?Semestre $semestre): void
    {
        $this->semestre = $semestre;
    }

    public function getAnnee(): ?Annee
    {
        if (null !== $this->getSemestre() && null !== $this->getSemestre()->getAnnee()) {
            return $this->getSemestre()->getAnnee();
        }

        return null;
    }

    public function getDeleted(): ?bool
    {
        return $this->deleted;
    }

    public function setDeleted(bool $deleted): self
    {
        $this->deleted = $deleted;

        return $this;
    }

    public function getAmenagementsParticuliers(): ?string
    {
        return $this->amenagementsParticuliers;
    }

    public function setAmenagementsParticuliers(string $amenagementsParticuliers): self
    {
        $this->amenagementsParticuliers = $amenagementsParticuliers;

        return $this;
    }

    public function getPromotion(): ?int
    {
        return $this->promotion;
    }

    public function setPromotion(int $promotion): self
    {
        $this->promotion = $promotion;

        return $this;
    }

    public function getBac(): ?Bac
    {
        return $this->bac;
    }

    public function setBac(?Bac $bac): self
    {
        $this->bac = $bac;

        return $this;
    }

    public function getAnneeUniversitaire(): ?AnneeUniversitaire
    {
        return $this->getSemestre()?->getAnneeUniversitaire();
    }

    public function getIntituleSecuriteSociale(): ?string
    {
        return $this->intituleSecuriteSociale;
    }

    public function setIntituleSecuriteSociale(?string $intituleSecuriteSociale): self
    {
        $this->intituleSecuriteSociale = $intituleSecuriteSociale;

        return $this;
    }

    public function getAdresseSecuriteSociale(): ?string
    {
        return $this->adresseSecuriteSociale;
    }

    public function setAdresseSecuriteSociale(?string $adresseSecuriteSociale): self
    {
        $this->adresseSecuriteSociale = $adresseSecuriteSociale;

        return $this;
    }

    public function getPhotoFile(): ?File
    {
        return $this->photoFile;
    }

    /**
     * If manually uploading a file (i.e. not using Symfony Form) ensure an instance
     * of 'UploadedFile' is injected into this setter to trigger the  update. If this
     * bundle's configuration parameter 'inject_on_load' is set to 'true' this setter
     * must be able to accept an instance of 'File' as the bundle will inject one here
     * during Doctrine hydration.
     */
    public function setPhotoFile(?File $photo = null): void
    {
        $this->photoFile = $photo;

        if (null !== $photo) {
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

    public function setPhotoName(?string $photoName): void
    {
        $this->photoName = $photoName;
    }

    public function getAnneeSortie(): ?int
    {
        return $this->anneeSortie;
    }

    public function setAnneeSortie(int $anneeSortie): self
    {
        $this->anneeSortie = $anneeSortie;

        return $this;
    }

    /**
     * @throws \JsonException
     */
    public function updateFromApogee(?array $dataApogee): void
    {
        $this->setRoles(['ROLE_ETUDIANT']);
        foreach ($dataApogee as $key => $value) {
            if (method_exists($this, $key)) {
                $this->$key($value);
            }
        }
    }

    public function updateFromLdap(array $ldap): void
    {
        $this->setMailUniv($ldap['mail']);
        $this->setUsername($ldap['login']);
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

    public function getLoginSpecifique(): ?string
    {
        return $this->loginSpecifique;
    }

    public function setLoginSpecifique(?string $loginSpecifique): self
    {
        $this->loginSpecifique = $loginSpecifique;

        return $this;
    }

    public function getFormationContinue(): ?bool
    {
        return $this->formationContinue;
    }

    public function setFormationContinue(bool $formationContinue = false): self
    {
        $this->formationContinue = $formationContinue;

        return $this;
    }

    /**
     * @return Collection|DocumentFavoriEtudiant[]
     */
    public function getDocumentsFavoris(): Collection
    {
        return $this->documentsFavoris;
    }

    public function addDocumentsFavori(DocumentFavoriEtudiant $documentsFavori): self
    {
        if (!$this->documentsFavoris->contains($documentsFavori)) {
            $this->documentsFavoris[] = $documentsFavori;
            $documentsFavori->setEtudiant($this);
        }

        return $this;
    }

    public function removeDocumentsFavori(DocumentFavoriEtudiant $documentsFavori): self
    {
        if ($this->documentsFavoris->contains($documentsFavori)) {
            $this->documentsFavoris->removeElement($documentsFavori);
            // set the owning side to null (unless already changed)
            if ($documentsFavori->getEtudiant() === $this) {
                $documentsFavori->setEtudiant(null);
            }
        }

        return $this;
    }

    /**
     * @return Collection|ProjetEtudiant[]
     */
    public function getProjetEtudiants(): Collection
    {
        return $this->projetEtudiants;
    }

    public function addProjetEtudiant(ProjetEtudiant $projetEtudiant): self
    {
        if (!$this->projetEtudiants->contains($projetEtudiant)) {
            $this->projetEtudiants[] = $projetEtudiant;
            $projetEtudiant->addEtudiant($this);
        }

        return $this;
    }

    public function removeProjetEtudiant(ProjetEtudiant $projetEtudiant): self
    {
        if ($this->projetEtudiants->contains($projetEtudiant)) {
            $this->projetEtudiants->removeElement($projetEtudiant);
            $projetEtudiant->removeEtudiant($this);
        }

        return $this;
    }

    /**
     * @return Collection|Commentaire[]
     */
    public function getCommentaires(): Collection
    {
        return $this->commentaires;
    }

    public function addCommentaire(Commentaire $commentaire): self
    {
        if (!$this->commentaires->contains($commentaire)) {
            $this->commentaires[] = $commentaire;
            $commentaire->setEtudiant($this);
        }

        return $this;
    }

    public function removeCommentaire(Commentaire $commentaire): self
    {
        // set the owning side to null (unless already changed)
        if ($this->commentaires->removeElement($commentaire) && $commentaire->getEtudiant() === $this) {
            $commentaire->setEtudiant(null);
        }

        return $this;
    }

    /**
     * @return Collection<int, ConpereEtudiant>
     */
    public function getConpereEtudiants(): Collection
    {
        return $this->conpereEtudiants;
    }

    public function addConpereEtudiant(ConpereEtudiant $conpereEtudiant): self
    {
        if (!$this->conpereEtudiants->contains($conpereEtudiant)) {
            $this->conpereEtudiants->add($conpereEtudiant);
            $conpereEtudiant->setEtudiant($this);
        }

        return $this;
    }

    public function removeConpereEtudiant(ConpereEtudiant $conpereEtudiant): self
    {
        if ($this->conpereEtudiants->removeElement($conpereEtudiant)) {
            // set the owning side to null (unless already changed)
            if ($conpereEtudiant->getEtudiant() === $this) {
                $conpereEtudiant->setEtudiant(null);
            }
        }

        return $this;
    }

    public function getIdEduSign(): ?string
    {
        return $this->idEduSign;
    }

    public function setIdEduSign(?string $idEduSign): static
    {
        $this->idEduSign = $idEduSign;

        return $this;
    }
}
