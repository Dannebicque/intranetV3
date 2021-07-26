<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Entity/Personnel.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 22/07/2021 15:57
 */

namespace App\Entity;

use App\Entity\Traits\LifeCycleTrait;
use App\Interfaces\UtilisateurInterface;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;
use JsonException;
use Symfony\Component\HttpFoundation\File\File;
use Symfony\Component\HttpFoundation\File\UploadedFile;
use Vich\UploaderBundle\Mapping\Annotation as Vich;

/**
 * @ORM\Entity(repositoryClass="App\Repository\PersonnelRepository")
 * @Vich\Uploadable
 * @ORM\HasLifecycleCallbacks()
 */
class Personnel extends Utilisateur implements UtilisateurInterface
{
    use LifeCycleTrait;

    public const PERMANENT = 'permanent';
    public const VACATAIRE = 'vacataire';
    public const CONTRACTUEL = 'contractuel';
    public const MCF = 'MCF';
    public const PU = 'PU';
    public const PRAG = 'PRAG';
    public const PRCE = 'PRCE';
    public const ATER = 'ATER';
    public const ASSISTANTE = 'ASS';
    public const ADMINISTRATIF = 'TEC';

    /**
     * @ORM\Id()
     * @ORM\GeneratedValue()
     * @ORM\Column(type="integer")
     */
    private ?int $id;

    /**
     * @ORM\Column(type="string", length=15)
     */
    protected ?string $statut;

    /**
     * @ORM\Column(type="string", length=10,nullable=true)
     */
    protected ?string $posteInterne;

    /**
     * @ORM\Column(type="string", length=20,nullable=true)
     */
    protected ?string $telBureau;

    /**
     * @ORM\Column(type="text",nullable=true)
     */
    protected ?string $responsabilites;

    /**
     * @ORM\Column(type="text",nullable=true)
     */
    protected ?string $domaines;

    /**
     * @ORM\Column(type="string", length=255,nullable=true)
     */
    protected ?string $entreprise;

    /**
     * @ORM\Column(type="string", length=20,nullable=true)
     */
    protected ?string $bureau1;

    /**
     * @ORM\Column(type="string", length=20,nullable=true)
     */
    protected ?string $bureau2;

    /**
     * @ORM\Column(type="integer",nullable=true)
     */
    protected ?string $numeroHarpege;

    /**
     * @ORM\Column(type="string",length=10,nullable=true)
     */
    protected ?string $initiales;

    /**
     *
     * @ORM\Column(type="string", length=50, nullable=true)
     */
    private ?string $cvName = '';

    /**
     *
     * @Vich\UploadableField(mapping="cv", fileNameProperty="cvName")
     */
    private $cvFile;

    /**
     *
     * @ORM\Column(type="string", length=50)
     */
    private ?string $photoName = 'noimage.png';

    /**
     *
     * @Vich\UploadableField(mapping="personnel", fileNameProperty="photoName")
     *
     */
    private $photoFile;

    /**
     * @ORM\OneToMany(targetEntity="App\Entity\Hrs", mappedBy="personnel")
     */
    private Collection $hrs;

    /**
     * @ORM\OneToMany(targetEntity="App\Entity\Previsionnel", mappedBy="personnel")
     */
    private Collection $previsionnels;

    /**
     * @ORM\OneToMany(targetEntity="App\Entity\Evaluation", mappedBy="personnelAuteur")
     */
    private Collection $evaluationsAuteur;

    /**
     * @ORM\ManyToMany(targetEntity="App\Entity\Evaluation", mappedBy="personnelAutorise")
     */
    private Collection $evaluationsAutorise;

    /**
     * @ORM\OneToMany(targetEntity="App\Entity\ModificationNote", mappedBy="personnel")
     */
    private Collection $modificationNotes;

    /**
     * @ORM\OneToMany(targetEntity="PersonnelDepartement", mappedBy="personnel")
     */
    private Collection $personnelDepartements;

    /**
     * @ORM\Column(type="float")
     */
    private float $nbHeuresService = 192;

    /**
     * @ORM\OneToMany(targetEntity="App\Entity\CahierTexte", mappedBy="personnel")
     */
    private Collection $cahierTextes;

    /**
     * @ORM\OneToMany(targetEntity="App\Entity\Notification", mappedBy="personnel")
     * @ORM\OrderBy({"created" = "DESC"})
     */
    private Collection $notifications;

    /**
     * @ORM\OneToMany(targetEntity="App\Entity\Message", mappedBy="expediteur")
     */
    private Collection $messages;

    /**
     * @ORM\OneToMany(targetEntity="App\Entity\MessageDestinatairePersonnel", mappedBy="personnel")
     */
    private Collection $messageDestinatairePersonnels;

    /**
     * @ORM\ManyToMany(targetEntity="App\Entity\StagePeriode", mappedBy="responsables")
     */
    private Collection $stagePeriodes;

    /**
     * @ORM\OneToMany(targetEntity="App\Entity\StageEtudiant", mappedBy="tuteurUniversitaire")
     */
    private Collection $stageEtudiants;

    /**
     * @ORM\OneToMany(targetEntity="App\Entity\Alternance", mappedBy="tuteurUniversitaire")
     */
    private Collection $alternances;

    /**
     * @ORM\Column(type="boolean")
     */
    private bool $deleted = false;

    /**
     * @ORM\Column(type="string", length=20, nullable=true)
     */
    private ?string $couleur;

    /**
     * @ORM\OneToMany(targetEntity="App\Entity\EmpruntPersonnel", mappedBy="personnel")
     */
    private Collection $emprunts;

    /**
     * @ORM\OneToMany(targetEntity="App\Entity\Departement", mappedBy="respMateriel")
     */
    private Collection $departements;

    /**
     * @ORM\OneToMany(targetEntity="QuestionnaireQuestion", mappedBy="auteur")
     */
    private Collection $quizzQuestions;

    /**
     * @ORM\OneToMany(targetEntity="App\Entity\ArticleLikePersonnel", mappedBy="personnel")
     */
    private Collection $articlesLike;

    /**
     * @ORM\OneToMany(targetEntity="App\Entity\DocumentFavoriPersonnel", mappedBy="personnel")
     */
    private Collection $documentsFavoris;

    /**
     * @ORM\ManyToMany(targetEntity=ProjetPeriode::class, mappedBy="responsables")
     */
    private Collection $projetPeriodes;

    /**
     * @ORM\OneToMany(targetEntity=MaterielCommun::class, mappedBy="contact")
     */
    private Collection $materielCommuns;

    /**
     * @ORM\OneToMany(targetEntity=MaterielCommunPret::class, mappedBy="personnel")
     */
    private Collection $materielCommunPrets;

    /**
     * @ORM\Column(type="string", length=50, nullable=true)
     */
    private ?string $signatureElectronique;

    /**
     * @ORM\OneToMany(targetEntity=CovidAttestationPersonnel::class, mappedBy="personnel")
     */
    private Collection $covidAttestationPersonnels;

    /**
     * @ORM\OneToMany(targetEntity=AbsenceEtatAppel::class, mappedBy="personnel")
     */
    private $absenceEtatAppels;

    /**
     * Personnel constructor.
     *
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
    }

    public function getId()
    {
        return $this->id;
    }

    public function getStatut()
    {
        return $this->statut;
    }

    public function setStatut($statut): void
    {
        if (self::VACATAIRE === $statut) {
            $this->setTypeUser(self::VACATAIRE);
        } else {
            $this->setTypeUser(self::PERMANENT);
        }

        $this->statut = $statut;
    }

    public function getPosteInterne()
    {
        return $this->posteInterne;
    }

    public function setPosteInterne($posteInterne): void
    {
        $this->posteInterne = $posteInterne;
    }

    public function getTelBureau()
    {
        return $this->telBureau;
    }

    public function setTelBureau($telBureau): void
    {
        $this->telBureau = $telBureau;
    }

    public function getResponsabilites()
    {
        return $this->responsabilites;
    }

    public function setResponsabilites($responsabilites): void
    {
        $this->responsabilites = $responsabilites;
    }

    public function getDomaines()
    {
        return $this->domaines;
    }

    public function setDomaines($domaines): void
    {
        $this->domaines = $domaines;
    }

    public function getEntreprise()
    {
        return $this->entreprise;
    }

    public function setEntreprise($entreprise): void
    {
        $this->entreprise = $entreprise;
    }

    public function getBureau1()
    {
        return $this->bureau1;
    }

    public function setBureau1($bureau1): void
    {
        $this->bureau1 = $bureau1;
    }

    public function getBureau2()
    {
        return $this->bureau2;
    }

    public function setBureau2($bureau2): void
    {
        $this->bureau2 = $bureau2;
    }

    public function getNumeroHarpege()
    {
        return $this->numeroHarpege;
    }

    public function setNumeroHarpege($numeroHarpege): void
    {
        $this->numeroHarpege = $numeroHarpege;
    }

    public function getInitiales()
    {
        return $this->initiales;
    }

    public function setInitiales($initiales): void
    {
        $this->initiales = $initiales;
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

    public function getCvFile(): ?File
    {
        return $this->cvFile;
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

    /**
     * String representation of object.
     *
     * @see   http://php.net/manual/en/serializable.serialize.php
     *
     * @return string the string representation of the object or null
     *
     * @since 5.1.0
     */
    public function serialize(): string
    {
        // Ajouté pour le problème de connexion avec le usernametoken
        return serialize([
            $this->id,
            $this->password,
            $this->username,
        ]);
    }

    /**
     * Constructs the object.
     *
     * @see   http://php.net/manual/en/serializable.unserialize.php
     *
     * @param string $serialized <p>
     *                           The string representation of the object.
     *                           </p>
     *
     * @since 5.1.0
     */
    public function unserialize($data): void
    {
        // Ajouté pour le problème de connexion avec le usernametoken
        [
            $this->id,
            $this->password,
            $this->username
        ] = unserialize($data, ['allowed_classes' => false]);
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
        if ($this->absenceEtatAppels->removeElement($absenceEtatAppel)) {
            // set the owning side to null (unless already changed)
            if ($absenceEtatAppel->getPersonnel() === $this) {
                $absenceEtatAppel->setPersonnel(null);
            }
        }

        return $this;
    }
}
