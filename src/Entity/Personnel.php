<?php
/*
 * Copyright (c) 2022. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Entity/Personnel.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 18/09/2022 13:23
 */

namespace App\Entity;

use App\Entity\Traits\LifeCycleTrait;
use App\Interfaces\UtilisateurInterface;
use App\Repository\PersonnelRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\DBAL\Types\Types;
use Doctrine\ORM\Mapping as ORM;
use JsonException;
use Symfony\Component\HttpFoundation\File\File;
use Symfony\Component\HttpFoundation\File\UploadedFile;
use Symfony\Component\Serializer\Annotation\Groups;
use Vich\UploaderBundle\Mapping\Annotation as Vich;

#[Vich\Uploadable]
#[ORM\Entity(repositoryClass: PersonnelRepository::class)]
#[ORM\HasLifecycleCallbacks]
class Personnel extends Utilisateur implements UtilisateurInterface
{
    use LifeCycleTrait;

    final public const PERMANENT = 'permanent';
    final public const VACATAIRE = 'vacataire';
    final public const CONTRACTUEL = 'contractuel';
    final public const MCF = 'MCF';
    final public const PU = 'PU';
    final public const PRAG = 'PRAG';
    final public const PRCE = 'PRCE';
    final public const ATER = 'ATER';
    final public const ASSISTANTE = 'ASS';
    final public const ADMINISTRATIF = 'ADM';
    final public const TECHNICIEN = 'TEC';

    #[ORM\Column(type: Types::STRING, length: 15)]
    #[Groups(['personnel:read'])]
    protected ?string $statut = null;

    #[ORM\Column(type: Types::STRING, length: 10, nullable: true)]
    protected ?string $posteInterne = null;

    #[ORM\Column(type: Types::STRING, length: 20, nullable: true)]
    protected ?string $telBureau = null;

    #[ORM\Column(type: Types::TEXT, nullable: true)]
    protected ?string $responsabilites = null;

    #[ORM\Column(type: Types::TEXT, nullable: true)]
    protected ?string $domaines = null;

    #[ORM\Column(type: Types::STRING, length: 255, nullable: true)]
    protected ?string $entreprise = null;

    #[ORM\Column(type: Types::STRING, length: 20, nullable: true)]
    protected ?string $bureau1 = null;

    #[ORM\Column(type: Types::STRING, length: 20, nullable: true)]
    protected ?string $bureau2 = null;

    #[ORM\Column(type: Types::INTEGER, nullable: true)]
    protected ?string $numeroHarpege = null;

    #[ORM\Column(type: Types::STRING, length: 10, nullable: true)]
    protected ?string $initiales = null;

    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column(type: Types::INTEGER)]
    private mixed $id;

    #[ORM\Column(type: Types::STRING, length: 50, nullable: true)]
    private ?string $cvName = '';

    #[Vich\UploadableField(mapping: 'cv', fileNameProperty: 'cvName')]
    private ?File $cvFile = null;

    #[ORM\Column(type: Types::STRING, length: 50)]
    private ?string $photoName = 'noimage.png';

    #[Vich\UploadableField(mapping: 'personnel', fileNameProperty: 'photoName')]
    private ?File $photoFile = null;

    /**
     * @var \Doctrine\Common\Collections\Collection<int, \App\Entity\Hrs>
     */
    #[ORM\OneToMany(mappedBy: 'personnel', targetEntity: Hrs::class)]
    private Collection $hrs;

    /**
     * @var \Doctrine\Common\Collections\Collection<int, \App\Entity\Previsionnel>
     */
    #[ORM\OneToMany(mappedBy: 'personnel', targetEntity: Previsionnel::class)]
    private Collection $previsionnels;

    /**
     * @var \Doctrine\Common\Collections\Collection<int, \App\Entity\Evaluation>
     */
    #[ORM\OneToMany(mappedBy: 'personnelAuteur', targetEntity: Evaluation::class)]
    private Collection $evaluationsAuteur;

    #[ORM\ManyToMany(targetEntity: Evaluation::class, mappedBy: 'personnelAutorise')]
    private Collection $evaluationsAutorise;

    /**
     * @var \Doctrine\Common\Collections\Collection<int, \App\Entity\ModificationNote>
     */
    #[ORM\OneToMany(mappedBy: 'personnel', targetEntity: ModificationNote::class)]
    private Collection $modificationNotes;

    /**
     * @var \Doctrine\Common\Collections\Collection<int, \App\Entity\PersonnelDepartement>
     */
    #[ORM\OneToMany(mappedBy: 'personnel', targetEntity: PersonnelDepartement::class)]
    private Collection $personnelDepartements;

    #[ORM\Column(type: Types::FLOAT)]
    private float $nbHeuresService = 192;

    /**
     * @var \Doctrine\Common\Collections\Collection<int, \App\Entity\CahierTexte>
     */
    #[ORM\OneToMany(mappedBy: 'personnel', targetEntity: CahierTexte::class)]
    private Collection $cahierTextes;

    /**
     * @var \Doctrine\Common\Collections\Collection<int, \App\Entity\Notification>
     */
    #[ORM\OneToMany(mappedBy: 'personnel', targetEntity: Notification::class)]
    #[ORM\OrderBy(value: ['created' => 'DESC'])]
    private Collection $notifications;

    /**
     * @var \Doctrine\Common\Collections\Collection<int, \App\Entity\Message>
     */
    #[ORM\OneToMany(mappedBy: 'expediteur', targetEntity: Message::class)]
    private Collection $messages;

    /**
     * @var \Doctrine\Common\Collections\Collection<int, \App\Entity\MessageDestinatairePersonnel>
     */
    #[ORM\OneToMany(mappedBy: 'personnel', targetEntity: MessageDestinatairePersonnel::class)]
    private Collection $messageDestinatairePersonnels;

    #[ORM\ManyToMany(targetEntity: StagePeriode::class, mappedBy: 'responsables')]
    private Collection $stagePeriodes;

    /**
     * @var \Doctrine\Common\Collections\Collection<int, \App\Entity\StageEtudiant>
     */
    #[ORM\OneToMany(mappedBy: 'tuteurUniversitaire', targetEntity: StageEtudiant::class)]
    private Collection $stageEtudiants;

    /**
     * @var \Doctrine\Common\Collections\Collection<int, \App\Entity\Alternance>
     */
    #[ORM\OneToMany(mappedBy: 'tuteurUniversitaire', targetEntity: Alternance::class)]
    private Collection $alternances;

    #[ORM\Column(type: Types::BOOLEAN)]
    private bool $deleted = false;

    #[ORM\Column(type: Types::STRING, length: 20, nullable: true)]
    private ?string $couleur = null;

    /**
     * @var \Doctrine\Common\Collections\Collection<int, \App\Entity\EmpruntPersonnel>
     */
    #[ORM\OneToMany(mappedBy: 'personnel', targetEntity: EmpruntPersonnel::class)]
    private Collection $emprunts;

    /**
     * @var \Doctrine\Common\Collections\Collection<int, \App\Entity\Departement>
     */
    #[ORM\OneToMany(mappedBy: 'respMateriel', targetEntity: Departement::class)]
    private Collection $departements;

    /**
     * @var \Doctrine\Common\Collections\Collection<int, \App\Entity\QuestionnaireQuestion>
     */
    #[ORM\OneToMany(mappedBy: 'auteur', targetEntity: QuestionnaireQuestion::class)]
    private Collection $quizzQuestions;

    /**
     * @var \Doctrine\Common\Collections\Collection<int, \App\Entity\ArticleLikePersonnel>
     */
    #[ORM\OneToMany(mappedBy: 'personnel', targetEntity: ArticleLikePersonnel::class)]
    private Collection $articlesLike;

    /**
     * @var \Doctrine\Common\Collections\Collection<int, \App\Entity\DocumentFavoriPersonnel>
     */
    #[ORM\OneToMany(mappedBy: 'personnel', targetEntity: DocumentFavoriPersonnel::class)]
    private Collection $documentsFavoris;

    #[ORM\ManyToMany(targetEntity: ProjetPeriode::class, mappedBy: 'responsables')]
    private Collection $projetPeriodes;

    /**
     * @var \Doctrine\Common\Collections\Collection<int, \App\Entity\MaterielCommun>
     */
    #[ORM\OneToMany(mappedBy: 'contact', targetEntity: MaterielCommun::class)]
    private Collection $materielCommuns;

    /**
     * @var \Doctrine\Common\Collections\Collection<int, \App\Entity\MaterielCommunPret>
     */
    #[ORM\OneToMany(mappedBy: 'personnel', targetEntity: MaterielCommunPret::class)]
    private Collection $materielCommunPrets;

    #[ORM\Column(type: Types::STRING, length: 50, nullable: true)]
    private ?string $signatureElectronique = null;

    /**
     * @var \Doctrine\Common\Collections\Collection<int, \App\Entity\CovidAttestationPersonnel>
     */
    #[ORM\OneToMany(mappedBy: 'personnel', targetEntity: CovidAttestationPersonnel::class)]
    private Collection $covidAttestationPersonnels;

    /**
     * @var \Doctrine\Common\Collections\Collection<int, \App\Entity\AbsenceEtatAppel>
     */
    #[ORM\OneToMany(mappedBy: 'personnel', targetEntity: AbsenceEtatAppel::class)]
    private Collection $absenceEtatAppels;

    #[ORM\ManyToOne(targetEntity: AnneeUniversitaire::class, inversedBy: 'personnels')]
    private ?AnneeUniversitaire $anneeUniversitaire = null;

    #[ORM\Column(type: Types::TEXT, nullable: true)]
    private ?string $configuration = null;

    /**
     * @var \Doctrine\Common\Collections\Collection<\App\Entity\BCDemande>
     */
    #[ORM\OneToMany(mappedBy: 'responsable', targetEntity: BCDemande::class)]
    private Collection $bcDemandesResponsable;

    /**
     * @var \Doctrine\Common\Collections\Collection<\App\Entity\BCDemande>
     */
    #[ORM\OneToMany(mappedBy: 'signataireCompta', targetEntity: BCDemande::class)]
    private Collection $bcDemandeSignataireCompta;
    /**
     * @var \Doctrine\Common\Collections\Collection<\App\Entity\BCServiceFait>
     */
    #[ORM\OneToMany(mappedBy: 'receptionnisteMigo', targetEntity: BCServiceFait::class)]
    private Collection $bcServiceFaitReceptionniste;

    /**
     * @var \Doctrine\Common\Collections\Collection<\App\Entity\BCServiceFait>
     */
    #[ORM\OneToMany(mappedBy: 'responsableSignataire', targetEntity: BCServiceFait::class)]
    private Collection $bcServiceFaitResponsableSignataire;

    /**
     * @var \Doctrine\Common\Collections\Collection<int, \App\Entity\QuestionnairePersonnel>
     */
    #[ORM\OneToMany(mappedBy: 'personnel', targetEntity: QuestionnairePersonnel::class)]
    private Collection $quizzPersonnels;

//    #[ORM\OneToMany(mappedBy: 'intervenant', targetEntity: PlanCours::class)]
//    private Collection $planCours;

    #[ORM\Column]
    private ?bool $accessOriginaux = false;

    #[ORM\OneToMany(mappedBy: 'enseignant', targetEntity: PlanCoursHistoriqueEdt::class)]
    private Collection $planCoursHistoriqueEdts;

    #[ORM\OneToMany(mappedBy: 'personnel', targetEntity: EdtCelcat::class)]
    private Collection $edtCelcats;

    /**
     * @throws JsonException
     */
    public function __construct()
    {
        parent::__construct();
        $this->setRoles(['ROLE_PERMANENT']);
        $this->hrs = new ArrayCollection();
        $this->previsionnels = new ArrayCollection();
        $this->evaluationsAuteur = new ArrayCollection();
        $this->evaluationsAutorise = new ArrayCollection();
        $this->modificationNotes = new ArrayCollection();
        $this->cahierTextes = new ArrayCollection();
        $this->notifications = new ArrayCollection();
        $this->personnelDepartements = new ArrayCollection();
        $this->messages = new ArrayCollection();
        $this->messageDestinatairePersonnels = new ArrayCollection();
        $this->stagePeriodes = new ArrayCollection();
        $this->stageEtudiants = new ArrayCollection();
        $this->alternances = new ArrayCollection();
        $this->departements = new ArrayCollection();
        $this->quizzQuestions = new ArrayCollection();
        $this->emprunts = new ArrayCollection();
        $this->articlesLike = new ArrayCollection();
        $this->documentsFavoris = new ArrayCollection();
        $this->projetPeriodes = new ArrayCollection();
        $this->materielCommuns = new ArrayCollection();
        $this->materielCommunPrets = new ArrayCollection();
        $this->covidAttestationPersonnels = new ArrayCollection();
        $this->absenceEtatAppels = new ArrayCollection();
        $this->bcDemandesResponsable = new ArrayCollection();
        $this->bcDemandeSignataireCompta = new ArrayCollection();
        $this->bcServiceFaitReceptionniste = new ArrayCollection();
        $this->bcServiceFaitResponsableSignataire = new ArrayCollection();
        $this->quizzPersonnels = new ArrayCollection();
      //  $this->planCours = new ArrayCollection();
       // $this->planCoursHistoriqueEdts = new ArrayCollection();
        $this->edtCelcats = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getStatut(): ?string
    {
        return $this->statut;
    }

    public function setStatut(?string $statut): void
    {
        if (self::VACATAIRE === $statut) {
            $this->setTypeUser(self::VACATAIRE);
        } else {
            $this->setTypeUser(self::PERMANENT);
        }

        $this->statut = $statut;
    }

    public function getPosteInterne(): ?string
    {
        return $this->posteInterne;
    }

    public function setPosteInterne(?string $posteInterne): void
    {
        $this->posteInterne = $posteInterne;
    }

    public function getTelBureau(): ?string
    {
        return $this->telBureau;
    }

    public function setTelBureau(?string $telBureau): void
    {
        $this->telBureau = $telBureau;
    }

    public function getResponsabilites(): ?string
    {
        return $this->responsabilites;
    }

    public function setResponsabilites(?string $responsabilites): void
    {
        $this->responsabilites = $responsabilites;
    }

    public function getDomaines(): ?string
    {
        return $this->domaines;
    }

    public function setDomaines(?string $domaines): void
    {
        $this->domaines = $domaines;
    }

    public function getEntreprise(): ?string
    {
        return $this->entreprise;
    }

    public function setEntreprise(?string $entreprise): void
    {
        $this->entreprise = $entreprise;
    }

    public function getBureau1(): ?string
    {
        return $this->bureau1;
    }

    public function setBureau1(?string $bureau1): void
    {
        $this->bureau1 = $bureau1;
    }

    public function getBureau2(): ?string
    {
        return $this->bureau2;
    }

    public function setBureau2(?string $bureau2): void
    {
        $this->bureau2 = $bureau2;
    }

    public function getNumeroHarpege(): ?string
    {
        return $this->numeroHarpege;
    }

    public function setNumeroHarpege(?string $numeroHarpege): void
    {
        $this->numeroHarpege = $numeroHarpege;
    }

    public function getInitiales(): ?string
    {
        return $this->initiales;
    }

    public function setInitiales(?string $initiales): void
    {
        $this->initiales = $initiales;
    }

    public function getCvFile(): ?File
    {
        return $this->cvFile;
    }

    /**
     * If manually uploading a file (i.e. not using Symfony Form) ensure an instance
     * of 'UploadedFile' is injected into this setter to trigger the  update. If this
     * bundle's configuration parameter 'inject_on_load' is set to 'true' this setter
     * must be able to accept an instance of 'File' as the bundle will inject one here
     * during Doctrine hydration.
     */
    public function setCvFile(?UploadedFile $cv = null): void
    {
        $this->cvFile = $cv;

        if (null !== $cv) {
            // It is required that at least one field changes if you are using doctrine
            // otherwise the event listeners won't be called and the file is lost
            $this->setUpdatedValue();
        }
    }

    public function getCvName(): ?string
    {
        return $this->cvName;
    }

    public function setCvName(string $cvName): void
    {
        $this->cvName = $cvName;
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
            $hr->setPersonnel($this);
        }

        return $this;
    }

    public function removeHr(Hrs $hr): self
    {
        if ($this->hrs->contains($hr)) {
            $this->hrs->removeElement($hr);
            // set the owning side to null (unless already changed)
            if ($hr->getPersonnel() === $this) {
                $hr->setPersonnel(null);
            }
        }

        return $this;
    }

    /**
     * @return Collection|Previsionnel[]
     */
    public function getPrevisionnels(): Collection
    {
        return $this->previsionnels;
    }

    public function addPrevisionnel(Previsionnel $previsionnel): self
    {
        if (!$this->previsionnels->contains($previsionnel)) {
            $this->previsionnels[] = $previsionnel;
            $previsionnel->setPersonnel($this);
        }

        return $this;
    }

    public function removePrevisionnel(Previsionnel $previsionnel): self
    {
        if ($this->previsionnels->contains($previsionnel)) {
            $this->previsionnels->removeElement($previsionnel);
            // set the owning side to null (unless already changed)
            if ($previsionnel->getPersonnel() === $this) {
                $previsionnel->setPersonnel(null);
            }
        }

        return $this;
    }

    /**
     * @return Collection|Evaluation[]
     */
    public function getEvaluationsAuteur(): Collection
    {
        return $this->evaluationsAuteur;
    }

    public function addEvaluationsAuteur(Evaluation $evaluationsAuteur): self
    {
        if (!$this->evaluationsAuteur->contains($evaluationsAuteur)) {
            $this->evaluationsAuteur[] = $evaluationsAuteur;
            $evaluationsAuteur->setPersonnelAuteur($this);
        }

        return $this;
    }

    public function removeEvaluationsAuteur(Evaluation $evaluationsAuteur): self
    {
        if ($this->evaluationsAuteur->contains($evaluationsAuteur)) {
            $this->evaluationsAuteur->removeElement($evaluationsAuteur);
            // set the owning side to null (unless already changed)
            if ($evaluationsAuteur->getPersonnelAuteur() === $this) {
                $evaluationsAuteur->setPersonnelAuteur(null);
            }
        }

        return $this;
    }

    /**
     * @return Collection|Evaluation[]
     */
    public function getEvaluationsAutorise(): Collection
    {
        return $this->evaluationsAutorise;
    }

    public function addEvaluationsAutorise(Evaluation $evaluationsAutorise): self
    {
        if (!$this->evaluationsAutorise->contains($evaluationsAutorise)) {
            $this->evaluationsAutorise[] = $evaluationsAutorise;
            $evaluationsAutorise->addPersonnelAutorise($this);
        }

        return $this;
    }

    public function removeEvaluationsAutorise(Evaluation $evaluationsAutorise): self
    {
        if ($this->evaluationsAutorise->contains($evaluationsAutorise)) {
            $this->evaluationsAutorise->removeElement($evaluationsAutorise);
            $evaluationsAutorise->removePersonnelAutorise($this);
        }

        return $this;
    }

    /**
     * @return Collection|ModificationNote[]
     */
    public function getModificationNotes(): Collection
    {
        return $this->modificationNotes;
    }

    public function addModificationNote(ModificationNote $modificationNote): self
    {
        if (!$this->modificationNotes->contains($modificationNote)) {
            $this->modificationNotes[] = $modificationNote;
            $modificationNote->setPersonnel($this);
        }

        return $this;
    }

    public function removeModificationNote(ModificationNote $modificationNote): self
    {
        if ($this->modificationNotes->contains($modificationNote)) {
            $this->modificationNotes->removeElement($modificationNote);
            // set the owning side to null (unless already changed)
            if ($modificationNote->getPersonnel() === $this) {
                $modificationNote->setPersonnel(null);
            }
        }

        return $this;
    }

    public function getNbHeuresService(): ?float
    {
        return $this->nbHeuresService;
    }

    public function setNbHeuresService(float $nbHeuresService = 192): self
    {
        $this->nbHeuresService = $nbHeuresService;

        return $this;
    }

    /**
     * @return Collection|CahierTexte[]
     */
    public function getCahierTextes(): Collection
    {
        return $this->cahierTextes;
    }

    public function addCahierTexte(CahierTexte $cahierTexte): self
    {
        if (!$this->cahierTextes->contains($cahierTexte)) {
            $this->cahierTextes[] = $cahierTexte;
            $cahierTexte->setPersonnel($this);
        }

        return $this;
    }

    public function removeCahierTexte(CahierTexte $cahierTexte): self
    {
        if ($this->cahierTextes->contains($cahierTexte)) {
            $this->cahierTextes->removeElement($cahierTexte);
            // set the owning side to null (unless already changed)
            if ($cahierTexte->getPersonnel() === $this) {
                $cahierTexte->setPersonnel(null);
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
            $notification->setPersonnel($this);
        }

        return $this;
    }

    public function removeNotification(Notification $notification): self
    {
        if ($this->notifications->contains($notification)) {
            $this->notifications->removeElement($notification);
            // set the owning side to null (unless already changed)
            if ($notification->getPersonnel() === $this) {
                $notification->setPersonnel(null);
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
            $personnelDepartement->setPersonnel($this);
        }

        return $this;
    }

    public function removePersonnelDepartement(PersonnelDepartement $personnelDepartement): self
    {
        if ($this->personnelDepartements->contains($personnelDepartement)) {
            $this->personnelDepartements->removeElement($personnelDepartement);
            // set the owning side to null (unless already changed)
            if ($personnelDepartement->getPersonnel() === $this) {
                $personnelDepartement->setPersonnel(null);
            }
        }

        return $this;
    }

    /**
     * @return Collection|Message[]
     */
    public function getMessages(): Collection
    {
        return $this->messages;
    }

    public function addMessage(Message $message): self
    {
        if (!$this->messages->contains($message)) {
            $this->messages[] = $message;
            $message->setExpediteur($this);
        }

        return $this;
    }

    public function removeMessage(Message $message): self
    {
        if ($this->messages->contains($message)) {
            $this->messages->removeElement($message);
            // set the owning side to null (unless already changed)
            if ($message->getExpediteur() === $this) {
                $message->setExpediteur(null);
            }
        }

        return $this;
    }

    /**
     * @return Collection|MessageDestinatairePersonnel[]
     */
    public function getMessageDestinatairePersonnels(): Collection
    {
        return $this->messageDestinatairePersonnels;
    }

    public function addMessageDestinatairePersonnel(MessageDestinatairePersonnel $messageDestinatairePersonnel): self
    {
        if (!$this->messageDestinatairePersonnels->contains($messageDestinatairePersonnel)) {
            $this->messageDestinatairePersonnels[] = $messageDestinatairePersonnel;
            $messageDestinatairePersonnel->setPersonnel($this);
        }

        return $this;
    }

    public function removeMessageDestinatairePersonnel(MessageDestinatairePersonnel $messageDestinatairePersonnel): self
    {
        if ($this->messageDestinatairePersonnels->contains($messageDestinatairePersonnel)) {
            $this->messageDestinatairePersonnels->removeElement($messageDestinatairePersonnel);
            // set the owning side to null (unless already changed)
            if ($messageDestinatairePersonnel->getPersonnel() === $this) {
                $messageDestinatairePersonnel->setPersonnel(null);
            }
        }

        return $this;
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
            $stagePeriode->addResponsable($this);
        }

        return $this;
    }

    public function removeStagePeriode(StagePeriode $stagePeriode): self
    {
        if ($this->stagePeriodes->contains($stagePeriode)) {
            $this->stagePeriodes->removeElement($stagePeriode);
            $stagePeriode->removeResponsable($this);
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
            $stageEtudiant->setTuteurUniversitaire($this);
        }

        return $this;
    }

    public function removeStageEtudiant(StageEtudiant $stageEtudiant): self
    {
        if ($this->stageEtudiants->contains($stageEtudiant)) {
            $this->stageEtudiants->removeElement($stageEtudiant);
            // set the owning side to null (unless already changed)
            if ($stageEtudiant->getTuteurUniversitaire() === $this) {
                $stageEtudiant->setTuteurUniversitaire(null);
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
            $alternance->setTuteurUniversitaire($this);
        }

        return $this;
    }

    public function removeAlternance(Alternance $alternance): self
    {
        if ($this->alternances->contains($alternance)) {
            $this->alternances->removeElement($alternance);
            // set the owning side to null (unless already changed)
            if ($alternance->getTuteurUniversitaire() === $this) {
                $alternance->setTuteurUniversitaire(null);
            }
        }

        return $this;
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

    public function getCouleur(): ?string
    {
        return $this->couleur;
    }

    public function setCouleur(string $couleur): self
    {
        $this->couleur = $couleur;

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

    /**
     * @return Collection|EmpruntPersonnel[]
     */
    public function getEmpruntPersonnels(): Collection
    {
        return $this->emprunts;
    }

    public function addEmpruntPersonnel(EmpruntPersonnel $empruntPersonnel): self
    {
        if (!$this->emprunts->contains($empruntPersonnel)) {
            $this->emprunts[] = $empruntPersonnel;
            $empruntPersonnel->setPersonnel($this);
        }

        return $this;
    }

    public function removeEmpruntPersonnel(EmpruntPersonnel $empruntPersonnel): self
    {
        if ($this->emprunts->contains($empruntPersonnel)) {
            $this->emprunts->removeElement($empruntPersonnel);
            // set the owning side to null (unless already changed)
            if ($empruntPersonnel->getPersonnel() === $this) {
                $empruntPersonnel->setPersonnel(null);
            }
        }

        return $this;
    }

    /**
     * @return Collection|Departement[]
     */
    public function getDepartements(): Collection
    {
        return $this->departements;
    }

    public function addDepartement(Departement $departement): self
    {
        if (!$this->departements->contains($departement)) {
            $this->departements[] = $departement;
            $departement->setRespMateriel($this);
        }

        return $this;
    }

    public function removeDepartement(Departement $departement): self
    {
        if ($this->departements->contains($departement)) {
            $this->departements->removeElement($departement);
            // set the owning side to null (unless already changed)
            if ($departement->getRespMateriel() === $this) {
                $departement->setRespMateriel(null);
            }
        }

        return $this;
    }

    /**
     * @return Collection|QuestionnaireQuestion[]
     */
    public function getQuizzQuestions(): Collection
    {
        return $this->quizzQuestions;
    }

    public function addQuizzQuestion(QuestionnaireQuestion $quizzQuestion): self
    {
        if (!$this->quizzQuestions->contains($quizzQuestion)) {
            $this->quizzQuestions[] = $quizzQuestion;
            $quizzQuestion->setAuteur($this);
        }

        return $this;
    }

    public function removeQuizzQuestion(QuestionnaireQuestion $quizzQuestion): self
    {
        if ($this->quizzQuestions->contains($quizzQuestion)) {
            $this->quizzQuestions->removeElement($quizzQuestion);
            // set the owning side to null (unless already changed)
            if ($quizzQuestion->getAuteur() === $this) {
                $quizzQuestion->setAuteur(null);
            }
        }

        return $this;
    }

    /**
     * @return Collection|EmpruntPersonnel[]
     */
    public function getEmprunts(): Collection
    {
        return $this->emprunts;
    }

    public function addEmprunt(EmpruntPersonnel $emprunt): self
    {
        if (!$this->emprunts->contains($emprunt)) {
            $this->emprunts[] = $emprunt;
            $emprunt->setPersonnel($this);
        }

        return $this;
    }

    public function removeEmprunt(EmpruntPersonnel $emprunt): self
    {
        if ($this->emprunts->contains($emprunt)) {
            $this->emprunts->removeElement($emprunt);
            // set the owning side to null (unless already changed)
            if ($emprunt->getPersonnel() === $this) {
                $emprunt->setPersonnel(null);
            }
        }

        return $this;
    }

    /**
     * @return Collection|ArticleLikePersonnel[]
     */
    public function getArticlesLike(): Collection
    {
        return $this->articlesLike;
    }

    public function addArticlesLike(ArticleLikePersonnel $articlesLike): self
    {
        if (!$this->articlesLike->contains($articlesLike)) {
            $this->articlesLike[] = $articlesLike;
            $articlesLike->setPersonnel($this);
        }

        return $this;
    }

    public function removeArticlesLike(ArticleLikePersonnel $articlesLike): self
    {
        if ($this->articlesLike->contains($articlesLike)) {
            $this->articlesLike->removeElement($articlesLike);
            // set the owning side to null (unless already changed)
            if ($articlesLike->getPersonnel() === $this) {
                $articlesLike->setPersonnel(null);
            }
        }

        return $this;
    }

    /**
     * @return Collection|DocumentFavoriPersonnel[]
     */
    public function getDocumentsFavoris(): Collection
    {
        return $this->documentsFavoris;
    }

    public function addDocumentsFavori(DocumentFavoriPersonnel $documentsFavori): self
    {
        if (!$this->documentsFavoris->contains($documentsFavori)) {
            $this->documentsFavoris[] = $documentsFavori;
            $documentsFavori->setPersonnel($this);
        }

        return $this;
    }

    public function removeDocumentsFavori(DocumentFavoriPersonnel $documentsFavori): self
    {
        if ($this->documentsFavoris->contains($documentsFavori)) {
            $this->documentsFavoris->removeElement($documentsFavori);
            // set the owning side to null (unless already changed)
            if ($documentsFavori->getPersonnel() === $this) {
                $documentsFavori->setPersonnel(null);
            }
        }

        return $this;
    }

    /**
     * @return Collection|ProjetPeriode[]
     */
    public function getProjetPeriodes(): Collection
    {
        return $this->projetPeriodes;
    }

    public function addProjetPeriode(ProjetPeriode $projetPeriode): self
    {
        if (!$this->projetPeriodes->contains($projetPeriode)) {
            $this->projetPeriodes[] = $projetPeriode;
            $projetPeriode->addResponsable($this);
        }

        return $this;
    }

    public function removeProjetPeriode(ProjetPeriode $projetPeriode): self
    {
        if ($this->projetPeriodes->contains($projetPeriode)) {
            $this->projetPeriodes->removeElement($projetPeriode);
            $projetPeriode->removeResponsable($this);
        }

        return $this;
    }

    /**
     * @return Collection|MaterielCommun[]
     */
    public function getMaterielCommuns(): Collection
    {
        return $this->materielCommuns;
    }

    public function addMaterielCommun(MaterielCommun $materielCommun): self
    {
        if (!$this->materielCommuns->contains($materielCommun)) {
            $this->materielCommuns[] = $materielCommun;
            $materielCommun->setContact($this);
        }

        return $this;
    }

    public function removeMaterielCommun(MaterielCommun $materielCommun): self
    {
        if ($this->materielCommuns->contains($materielCommun)) {
            $this->materielCommuns->removeElement($materielCommun);
            // set the owning side to null (unless already changed)
            if ($materielCommun->getContact() === $this) {
                $materielCommun->setContact(null);
            }
        }

        return $this;
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
            $materielCommunPret->setPersonnel($this);
        }

        return $this;
    }

    public function removeMaterielCommunPret(MaterielCommunPret $materielCommunPret): self
    {
        if ($this->materielCommunPrets->contains($materielCommunPret)) {
            $this->materielCommunPrets->removeElement($materielCommunPret);
            // set the owning side to null (unless already changed)
            if ($materielCommunPret->getPersonnel() === $this) {
                $materielCommunPret->setPersonnel(null);
            }
        }

        return $this;
    }

    public function getSignatureElectronique(): ?string
    {
        return $this->signatureElectronique;
    }

    public function setSignatureElectronique(?string $signatureElectronique): self
    {
        $this->signatureElectronique = $signatureElectronique;

        return $this;
    }

    /**
     * @return Collection|CovidAttestationPersonnel[]
     */
    public function getCovidAttestationPersonnels(): Collection
    {
        return $this->covidAttestationPersonnels;
    }

    public function addCovidAttestationPersonnel(CovidAttestationPersonnel $covidAttestationPersonnel): self
    {
        if (!$this->covidAttestationPersonnels->contains($covidAttestationPersonnel)) {
            $this->covidAttestationPersonnels[] = $covidAttestationPersonnel;
            $covidAttestationPersonnel->setPersonnel($this);
        }

        return $this;
    }

    public function removeCovidAttestationPersonnel(CovidAttestationPersonnel $covidAttestationPersonnel): self
    {
        if ($this->covidAttestationPersonnels->contains($covidAttestationPersonnel)) {
            $this->covidAttestationPersonnels->removeElement($covidAttestationPersonnel);
            // set the owning side to null (unless already changed)
            if ($covidAttestationPersonnel->getPersonnel() === $this) {
                $covidAttestationPersonnel->setPersonnel(null);
            }
        }

        return $this;
    }

    /**
     * @return Collection|AbsenceEtatAppel[]
     */
    public function getAbsenceEtatAppels(): Collection
    {
        return $this->absenceEtatAppels;
    }

    public function addAbsenceEtatAppel(AbsenceEtatAppel $absenceEtatAppel): self
    {
        if (!$this->absenceEtatAppels->contains($absenceEtatAppel)) {
            $this->absenceEtatAppels[] = $absenceEtatAppel;
            $absenceEtatAppel->setPersonnel($this);
        }

        return $this;
    }

    public function removeAbsenceEtatAppel(AbsenceEtatAppel $absenceEtatAppel): self
    {
        // set the owning side to null (unless already changed)
        if ($this->absenceEtatAppels->removeElement($absenceEtatAppel) && $absenceEtatAppel->getPersonnel() === $this) {
            $absenceEtatAppel->setPersonnel(null);
        }

        return $this;
    }

    public function getAnneeUniversitaire(): ?AnneeUniversitaire
    {
        return $this->anneeUniversitaire;
    }

    public function setAnneeUniversitaire(?AnneeUniversitaire $anneeUniversitaire): self
    {
        $this->anneeUniversitaire = $anneeUniversitaire;

        return $this;
    }

    public function getConfiguration(): array
    {
        return null !== $this->configuration ? json_decode($this->configuration, true, 512, JSON_THROW_ON_ERROR) : [];
    }

    public function setConfiguration(array $configuration = []): self
    {
        $this->configuration = json_encode($configuration, JSON_THROW_ON_ERROR);

        return $this;
    }

    /**
     * @return Collection|BCDemande[]
     */
    public function getBcDemandesResponsable(): Collection
    {
        return $this->bcDemandesResponsable;
    }

    public function addBcDemandesResponsable(BCDemande $bcDemandesResponsable): self
    {
        if (!$this->bcDemandesResponsable->contains($bcDemandesResponsable)) {
            $this->bcDemandesResponsable[] = $bcDemandesResponsable;
            $bcDemandesResponsable->setResponsable($this);
        }

        return $this;
    }

    public function removeBcDemandesResponsable(BCDemande $bcDemandesResponsable): self
    {
        // set the owning side to null (unless already changed)
        if ($this->bcDemandesResponsable->removeElement($bcDemandesResponsable) && $bcDemandesResponsable->getResponsable() === $this) {
            $bcDemandesResponsable->setResponsable(null);
        }

        return $this;
    }

    /**
     * @return Collection|BCDemande[]
     */
    public function getBcDemandeSignataireCompta(): Collection
    {
        return $this->bcDemandeSignataireCompta;
    }

    public function addBcDemandeSignataireComptum(BCDemande $bcDemandeSignataireComptum): self
    {
        if (!$this->bcDemandeSignataireCompta->contains($bcDemandeSignataireComptum)) {
            $this->bcDemandeSignataireCompta[] = $bcDemandeSignataireComptum;
            $bcDemandeSignataireComptum->setSignataireCompta($this);
        }

        return $this;
    }

    public function removeBcDemandeSignataireComptum(BCDemande $bcDemandeSignataireComptum): self
    {
        // set the owning side to null (unless already changed)
        if ($this->bcDemandeSignataireCompta->removeElement($bcDemandeSignataireComptum) && $bcDemandeSignataireComptum->getSignataireCompta() === $this) {
            $bcDemandeSignataireComptum->setSignataireCompta(null);
        }

        return $this;
    }

    /**
     * @return Collection|BCServiceFait[]
     */
    public function getBcServiceFaitReceptionniste(): Collection
    {
        return $this->bcServiceFaitReceptionniste;
    }

    public function addBcServiceFaitReceptionniste(BCServiceFait $bcServiceFaitReceptionniste): self
    {
        if (!$this->bcServiceFaitReceptionniste->contains($bcServiceFaitReceptionniste)) {
            $this->bcServiceFaitReceptionniste[] = $bcServiceFaitReceptionniste;
            $bcServiceFaitReceptionniste->setReceptionnisteMigo($this);
        }

        return $this;
    }

    public function removeBcServiceFaitReceptionniste(BCServiceFait $bcServiceFaitReceptionniste): self
    {
        // set the owning side to null (unless already changed)
        if ($this->bcServiceFaitReceptionniste->removeElement($bcServiceFaitReceptionniste) && $bcServiceFaitReceptionniste->getReceptionnisteMigo() === $this) {
            $bcServiceFaitReceptionniste->setReceptionnisteMigo(null);
        }

        return $this;
    }

    /**
     * @return Collection|BCServiceFait[]
     */
    public function getBcServiceFaitResponsableSignataire(): Collection
    {
        return $this->bcServiceFaitResponsableSignataire;
    }

    public function addBcServiceFaitResponsableSignataire(BCServiceFait $bcServiceFaitResponsableSignataire): self
    {
        if (!$this->bcServiceFaitResponsableSignataire->contains($bcServiceFaitResponsableSignataire)) {
            $this->bcServiceFaitResponsableSignataire[] = $bcServiceFaitResponsableSignataire;
            $bcServiceFaitResponsableSignataire->setResponsableSignataire($this);
        }

        return $this;
    }

    public function removeBcServiceFaitResponsableSignataire(BCServiceFait $bcServiceFaitResponsableSignataire): self
    {
        // set the owning side to null (unless already changed)
        if ($this->bcServiceFaitResponsableSignataire->removeElement($bcServiceFaitResponsableSignataire) && $bcServiceFaitResponsableSignataire->getResponsableSignataire() === $this) {
            $bcServiceFaitResponsableSignataire->setResponsableSignataire(null);
        }

        return $this;
    }

    public function getType(): string
    {
        if (self::VACATAIRE === $this->typeUser) {
            return self::VACATAIRE;
        }

        if (self::PERMANENT === $this->typeUser) {
            if (self::ADMINISTRATIF === $this->statut || self::ASSISTANTE === $this->statut || self::TECHNICIEN === $this->statut) {
                return self::ADMINISTRATIF;
            }

            return self::PERMANENT;
        }

        return '';
    }

    public function isDeleted(): ?bool
    {
        return $this->deleted;
    }

    /**
     * @return Collection<int, QuestionnairePersonnel>
     */
    public function getQuizzPersonnels(): Collection
    {
        return $this->quizzPersonnels;
    }

    public function addQuizzPersonnel(QuestionnairePersonnel $quizzPersonnel): self
    {
        if (!$this->quizzPersonnels->contains($quizzPersonnel)) {
            $this->quizzPersonnels[] = $quizzPersonnel;
            $quizzPersonnel->setPersonnel($this);
        }

        return $this;
    }

    public function removeQuizzPersonnel(QuestionnairePersonnel $quizzPersonnel): self
    {
        if ($this->quizzPersonnels->removeElement($quizzPersonnel)) {
            // set the owning side to null (unless already changed)
            if ($quizzPersonnel->getPersonnel() === $this) {
                $quizzPersonnel->setPersonnel(null);
            }
        }

        return $this;
    }

//    /**
//     * @return Collection<int, PlanCours>
//     */
//    public function getPlanCours(): Collection
//    {
//        return $this->planCours;
//    }
//
//    public function addPlanCour(PlanCours $planCour): self
//    {
//        if (!$this->planCours->contains($planCour)) {
//            $this->planCours[] = $planCour;
//            $planCour->setIntervenant($this);
//        }
//
//        return $this;
//    }
//
//    public function removePlanCour(PlanCours $planCour): self
//    {
//        if ($this->planCours->removeElement($planCour)) {
//            // set the owning side to null (unless already changed)
//            if ($planCour->getIntervenant() === $this) {
//                $planCour->setIntervenant(null);
//            }
//        }
//
//        return $this;
//    }

    public function isAccessOriginaux(): ?bool
    {
        return $this->accessOriginaux;
    }

    public function setAccessOriginaux(bool $accessOriginaux): self
    {
        $this->accessOriginaux = $accessOriginaux;

        return $this;
    }
/*

    public function getPlanCoursHistoriqueEdts(): Collection
    {
        return $this->planCoursHistoriqueEdts;
    }

    public function addPlanCoursHistoriqueEdt(PlanCoursHistoriqueEdt $planCoursHistoriqueEdt): self
    {
        if (!$this->planCoursHistoriqueEdts->contains($planCoursHistoriqueEdt)) {
            $this->planCoursHistoriqueEdts->add($planCoursHistoriqueEdt);
            $planCoursHistoriqueEdt->setEnseignant($this);
        }

        return $this;
    }

    public function removePlanCoursHistoriqueEdt(PlanCoursHistoriqueEdt $planCoursHistoriqueEdt): self
    {
        if ($this->planCoursHistoriqueEdts->removeElement($planCoursHistoriqueEdt)) {
            // set the owning side to null (unless already changed)
            if ($planCoursHistoriqueEdt->getEnseignant() === $this) {
                $planCoursHistoriqueEdt->setEnseignant(null);
            }
        }

        return $this;
    }
*/
    /**
     * @return Collection<int, EdtCelcat>
     */
    public function getEdtCelcats(): Collection
    {
        return $this->edtCelcats;
    }

    public function addEdtCelcat(EdtCelcat $edtCelcat): self
    {
        if (!$this->edtCelcats->contains($edtCelcat)) {
            $this->edtCelcats->add($edtCelcat);
            $edtCelcat->setPersonnel($this);
        }

        return $this;
    }

    public function removeEdtCelcat(EdtCelcat $edtCelcat): self
    {
        if ($this->edtCelcats->removeElement($edtCelcat)) {
            // set the owning side to null (unless already changed)
            if ($edtCelcat->getPersonnel() === $this) {
                $edtCelcat->setPersonnel(null);
            }
        }

        return $this;
    }
}
