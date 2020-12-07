<?php
// Copyright (c) 2020. | David Annebicque | IUT de Troyes  - All Rights Reserved
// @file /Users/davidannebicque/htdocs/intranetV3/src/Entity/Personnel.php
// @author davidannebicque
// @project intranetV3
// @lastUpdate 07/12/2020 21:01

namespace App\Entity;

use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;
use Serializable;
use Symfony\Component\HttpFoundation\File\File;
use Symfony\Component\HttpFoundation\File\UploadedFile;
use Vich\UploaderBundle\Mapping\Annotation as Vich;

/**
 * @ORM\Entity(repositoryClass="App\Repository\PersonnelRepository")
 * @ORM\HasLifecycleCallbacks()
 * @Vich\Uploadable
 *
 */
class Personnel extends Utilisateur implements Serializable // implements SerializerInterface
{

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
    private $id;

    /**
     * @ORM\Column(type="string", length=15)
     *
     */
    protected $statut;

    /**
     * @ORM\Column(type="string", length=10,nullable=true)
     *
     */
    protected $posteInterne;

    /**
     * @ORM\Column(type="string", length=20,nullable=true)
     *
     */
    protected $telBureau;

    /**
     * @ORM\Column(type="text",nullable=true)
     *
     */
    protected $responsabilites;

    /**
     * @ORM\Column(type="text",nullable=true)
     *
     */
    protected $domaines;

    /**
     * @ORM\Column(type="string", length=255,nullable=true)
     *
     */
    protected $entreprise;

    /**
     * @ORM\Column(type="string", length=20,nullable=true)
     *
     */
    protected $bureau1;

    /**
     * @ORM\Column(type="string", length=20,nullable=true)
     *
     */
    protected $bureau2;

    /**
     * @ORM\Column(type="integer",nullable=true)
     *
     */
    protected $numeroHarpege;

    /**
     * @ORM\Column(type="string",length=10,nullable=true)
     *
     */
    protected $initiales;

    /**
     * @var string
     *
     * @ORM\Column(type="string", length=50, nullable=true)
     */
    private $cvName;

    /**
     * @var UploadedFile
     *
     * @Vich\UploadableField(mapping="cv", fileNameProperty="cvName")
     */
    private $cvFile;

    /**
     * @var string
     *
     * @ORM\Column(type="string", length=50)
     */
    private $photoName = 'noimage.png';

    /**
     * @var UploadedFile
     *
     * @Vich\UploadableField(mapping="personnel", fileNameProperty="photoName")
     * @
     */
    private $photoFile;

    /**
     * @ORM\OneToMany(targetEntity="App\Entity\Hrs", mappedBy="personnel")
     */
    private $hrs;

    /**
     * @ORM\OneToMany(targetEntity="App\Entity\Previsionnel", mappedBy="personnel")
     */
    private $previsionnels;

    /**
     * @ORM\OneToMany(targetEntity="App\Entity\Evaluation", mappedBy="personnelAuteur")
     */
    private $evaluationsAuteur;

    /**
     * @ORM\ManyToMany(targetEntity="App\Entity\Evaluation", mappedBy="personnelAutorise")
     */
    private $evaluationsAutorise;

    /**
     * @ORM\OneToMany(targetEntity="App\Entity\ModificationNote", mappedBy="personnel")
     */
    private $modificationNotes;

    /**
     * @ORM\OneToMany(targetEntity="PersonnelDepartement", mappedBy="personnel")
     */
    private $personnelDepartements;

    /**
     * @ORM\Column(type="float")
     */
    private $nbHeuresService = 192;

    /**
     * @ORM\OneToMany(targetEntity="App\Entity\CahierTexte", mappedBy="personnel")
     */
    private $cahierTextes;

    /**
     * @ORM\OneToMany(targetEntity="App\Entity\Notification", mappedBy="personnel")
     * @ORM\OrderBy({"created" = "DESC"})
     */
    private $notifications;

    /**
     * @ORM\OneToMany(targetEntity="App\Entity\Message", mappedBy="expediteur")
     */
    private $messages;

    /**
     * @ORM\OneToMany(targetEntity="App\Entity\MessageDestinatairePersonnel", mappedBy="personnel")
     */
    private $messageDestinatairePersonnels;

    /**
     * @ORM\ManyToMany(targetEntity="App\Entity\StagePeriode", mappedBy="responsables")
     */
    private $stagePeriodes;

    /**
     * @ORM\OneToMany(targetEntity="App\Entity\StageEtudiant", mappedBy="tuteurUniversitaire")
     */
    private $stageEtudiants;

    /**
     * @ORM\OneToMany(targetEntity="App\Entity\Alternance", mappedBy="tuteurUniversitaire")
     */
    private $alternances;

    /**
     * @ORM\Column(type="boolean")
     */
    private $deleted = false;

    /**
     * @ORM\Column(type="string", length=20, nullable=true)
     */
    private $couleur;

    /**
     * @ORM\OneToMany(targetEntity="App\Entity\IndisponibilitePersonnel", mappedBy="personnel")
     */
    private $indisponibilitePersonnels;

    /**
     * @ORM\OneToMany(targetEntity="App\Entity\Disponibilite", mappedBy="personnel")
     */
    private $disponibilites;

    /**
     * @ORM\OneToMany(targetEntity="App\Entity\ProgressionPedagogique", mappedBy="personnel")
     */
    private $progressionPedagogiques;

    /**
     * @ORM\OneToMany(targetEntity="App\Entity\EmpruntPersonnel", mappedBy="personnel")
     */
    private $emprunts;

    /**
     * @ORM\OneToMany(targetEntity="App\Entity\Departement", mappedBy="respMateriel")
     */
    private $departements;

    /**
     * @ORM\OneToMany(targetEntity="QuestionnaireQuestion", mappedBy="auteur")
     */
    private $quizzQuestions;

    /**
     * @ORM\OneToMany(targetEntity="App\Entity\ArticleLikePersonnel", mappedBy="personnel")
     */
    private $articlesLike;

    /**
     * @ORM\OneToMany(targetEntity="App\Entity\DocumentFavoriPersonnel", mappedBy="personnel")
     */
    private $documentsFavoris;

    /**
     * @ORM\ManyToMany(targetEntity=ProjetPeriode::class, mappedBy="responsables")
     */
    private $projetPeriodes;

    /**
     * @ORM\OneToMany(targetEntity=MaterielCommun::class, mappedBy="contact")
     */
    private $materielCommuns;

    /**
     * @ORM\OneToMany(targetEntity=MaterielCommunPret::class, mappedBy="personnel")
     */
    private $materielCommunPrets;

    /**
     * @ORM\Column(type="string", length=50, nullable=true)
     */
    private $signatureElectronique;

    /**
     * @ORM\OneToMany(targetEntity=CovidAttestationPersonnel::class, mappedBy="personnel")
     */
    private $covidAttestationPersonnels;

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
        $this->trelloTaches = new ArrayCollection();
        $this->personnelDepartements = new ArrayCollection();
        $this->messages = new ArrayCollection();
        $this->messageDestinatairePersonnels = new ArrayCollection();
        $this->stagePeriodes = new ArrayCollection();
        $this->stageEtudiants = new ArrayCollection();
        $this->alternances = new ArrayCollection();
        $this->materielPrets = new ArrayCollection();
        $this->indisponibilitePersonnels = new ArrayCollection();
        $this->disponibilites = new ArrayCollection();
        $this->progressionPedagogiques = new ArrayCollection();
        $this->empruntPersonnels = new ArrayCollection();
        $this->departements = new ArrayCollection();
        $this->quizzQuestions = new ArrayCollection();
        $this->emprunts = new ArrayCollection();
        $this->articlesLike = new ArrayCollection();
        $this->documentsFavoris = new ArrayCollection();
        $this->projetPeriodes = new ArrayCollection();
        $this->materielCommuns = new ArrayCollection();
        $this->materielCommunPrets = new ArrayCollection();
        $this->covidAttestationPersonnels = new ArrayCollection();
    }

    /**
     * @return mixed
     */
    public function getId()
    {
        return $this->id;
    }


    /**
     * @return mixed
     */
    public function getStatut()
    {
        return $this->statut;
    }

    /**
     * @param mixed $statut
     */
    public function setStatut($statut): void
    {
        if ($statut === self::VACATAIRE) {
            $this->setTypeUser(self::VACATAIRE);
        } else {
            $this->setTypeUser(self::PERMANENT);
        }

        $this->statut = $statut;
    }

    /**
     * @return mixed
     */
    public function getPosteInterne()
    {
        return $this->posteInterne;
    }

    /**
     * @param mixed $posteInterne
     */
    public function setPosteInterne($posteInterne): void
    {
        $this->posteInterne = $posteInterne;
    }

    /**
     * @return mixed
     */
    public function getTelBureau()
    {
        return $this->telBureau;
    }

    /**
     * @param mixed $telBureau
     */
    public function setTelBureau($telBureau): void
    {
        $this->telBureau = $telBureau;
    }

    /**
     * @return mixed
     */
    public function getResponsabilites()
    {
        return $this->responsabilites;
    }

    /**
     * @param mixed $responsabilites
     */
    public function setResponsabilites($responsabilites): void
    {
        $this->responsabilites = $responsabilites;
    }

    /**
     * @return mixed
     */
    public function getDomaines()
    {
        return $this->domaines;
    }

    /**
     * @param mixed $domaines
     */
    public function setDomaines($domaines): void
    {
        $this->domaines = $domaines;
    }

    /**
     * @return mixed
     */
    public function getEntreprise()
    {
        return $this->entreprise;
    }

    /**
     * @param mixed $entreprise
     */
    public function setEntreprise($entreprise): void
    {
        $this->entreprise = $entreprise;
    }

    /**
     * @return mixed
     */
    public function getBureau1()
    {
        return $this->bureau1;
    }

    /**
     * @param mixed $bureau1
     */
    public function setBureau1($bureau1): void
    {
        $this->bureau1 = $bureau1;
    }

    /**
     * @return mixed
     */
    public function getBureau2()
    {
        return $this->bureau2;
    }

    /**
     * @param mixed $bureau2
     */
    public function setBureau2($bureau2): void
    {
        $this->bureau2 = $bureau2;
    }

    /**
     * @return mixed
     */
    public function getNumeroHarpege()
    {
        return $this->numeroHarpege;
    }

    /**
     * @param mixed $numeroHarpege
     */
    public function setNumeroHarpege($numeroHarpege): void
    {
        $this->numeroHarpege = $numeroHarpege;
    }

    /**
     * @return mixed
     */
    public function getInitiales()
    {
        return $this->initiales;
    }

    /**
     * @param mixed $initiales
     */
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
     *
     * @param File|null $cv
     */
    public function setCvFile(?File $cv = null): void
    {
        $this->cvFile = $cv;

        if (null !== $cv) {
            // It is required that at least one field changes if you are using doctrine
            // otherwise the event listeners won't be called and the file is lost
            $this->setUpdatedValue();
        }
    }

    /**
     * @return null|File
     */
    public function getCvFile(): ?File
    {
        return $this->cvFile;
    }

    /**
     * @return null|string
     */
    public function getCvName(): ?string
    {
        return $this->cvName;
    }

    /**
     * @param string $cvName
     */
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

    /**
     * @param Hrs $hr
     *
     * @return Personnel
     */
    public function addHr(Hrs $hr): self
    {
        if (!$this->hrs->contains($hr)) {
            $this->hrs[] = $hr;
            $hr->setPersonnel($this);
        }

        return $this;
    }

    /**
     * @param Hrs $hr
     *
     * @return Personnel
     */
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

    /**
     * @param Previsionnel $previsionnel
     *
     * @return Personnel
     */
    public function addPrevisionnel(Previsionnel $previsionnel): self
    {
        if (!$this->previsionnels->contains($previsionnel)) {
            $this->previsionnels[] = $previsionnel;
            $previsionnel->setPersonnel($this);
        }

        return $this;
    }

    /**
     * @param Previsionnel $previsionnel
     *
     * @return Personnel
     */
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

    /**
     * @param Evaluation $evaluationsAuteur
     *
     * @return Personnel
     */
    public function addEvaluationsAuteur(Evaluation $evaluationsAuteur): self
    {
        if (!$this->evaluationsAuteur->contains($evaluationsAuteur)) {
            $this->evaluationsAuteur[] = $evaluationsAuteur;
            $evaluationsAuteur->setPersonnelAuteur($this);
        }

        return $this;
    }

    /**
     * @param Evaluation $evaluationsAuteur
     *
     * @return Personnel
     */
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

    /**
     * @param Evaluation $evaluationsAutorise
     *
     * @return Personnel
     */
    public function addEvaluationsAutorise(Evaluation $evaluationsAutorise): self
    {
        if (!$this->evaluationsAutorise->contains($evaluationsAutorise)) {
            $this->evaluationsAutorise[] = $evaluationsAutorise;
            $evaluationsAutorise->addPersonnelAutorise($this);
        }

        return $this;
    }

    /**
     * @param Evaluation $evaluationsAutorise
     *
     * @return Personnel
     */
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

    /**
     * @param ModificationNote $modificationNote
     *
     * @return Personnel
     */
    public function addModificationNote(ModificationNote $modificationNote): self
    {
        if (!$this->modificationNotes->contains($modificationNote)) {
            $this->modificationNotes[] = $modificationNote;
            $modificationNote->setPersonnel($this);
        }

        return $this;
    }

    /**
     * @param ModificationNote $modificationNote
     *
     * @return Personnel
     */
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

    /**
     * @return float|null
     */
    public function getNbHeuresService(): ?float
    {
        return $this->nbHeuresService;
    }

    /**
     * @param float $nbHeuresService
     *
     * @return Personnel
     */
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

    /**
     * @param CahierTexte $cahierTexte
     *
     * @return Personnel
     */
    public function addCahierTexte(CahierTexte $cahierTexte): self
    {
        if (!$this->cahierTextes->contains($cahierTexte)) {
            $this->cahierTextes[] = $cahierTexte;
            $cahierTexte->setPersonnel($this);
        }

        return $this;
    }

    /**
     * @param CahierTexte $cahierTexte
     *
     * @return Personnel
     */
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

    /**
     * @param Notification $notification
     *
     * @return Personnel
     */
    public function addNotification(Notification $notification): self
    {
        if (!$this->notifications->contains($notification)) {
            $this->notifications[] = $notification;
            $notification->setPersonnel($this);
        }

        return $this;
    }

    /**
     * @param Notification $notification
     *
     * @return Personnel
     */
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
     * String representation of object
     * @link  http://php.net/manual/en/serializable.serialize.php
     * @return string the string representation of the object or null
     * @since 5.1.0
     */
    public function serialize(): string
    {
        // Ajouté pour le problème de connexion avec le usernametoken
        return serialize([
            $this->id,
            $this->password,
            $this->username
        ]);
    }

    /**
     * Constructs the object
     * @link  http://php.net/manual/en/serializable.unserialize.php
     *
     * @param string $serialized <p>
     *                           The string representation of the object.
     *                           </p>
     *
     * @return void
     * @since 5.1.0
     */
    public function unserialize($serialized): void
    {
        // Ajouté pour le problème de connexion avec le usernametoken
        [
            $this->id,
            $this->password,
            $this->username
        ] = unserialize($serialized, ['allowed_classes' => false]);
    }

    /**
     * @return Collection|PersonnelDepartement[]
     */
    public function getPersonnelDepartements(): Collection
    {
        return $this->personnelDepartements;
    }

    /**
     * @param PersonnelDepartement $personnelDepartement
     *
     * @return Personnel
     */
    public function addPersonnelDepartement(PersonnelDepartement $personnelDepartement): self
    {
        if (!$this->personnelDepartements->contains($personnelDepartement)) {
            $this->personnelDepartements[] = $personnelDepartement;
            $personnelDepartement->setPersonnel($this);
        }

        return $this;
    }

    /**
     * @param PersonnelDepartement $personnelDepartement
     *
     * @return Personnel
     */
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

    /**
     * @return null|string
     */
    public function getCouleur(): ?string
    {
        return $this->couleur;
    }

    /**
     * @param string $couleur
     *
     * @return Personnel
     */
    public function setCouleur(string $couleur): self
    {
        $this->couleur = $couleur;

        return $this;
    }

    /**
     * @return Collection|IndisponibilitePersonnel[]
     */
    public function getIndisponibilitePersonnels(): Collection
    {
        return $this->indisponibilitePersonnels;
    }

    public function addIndisponibilitePersonnel(IndisponibilitePersonnel $indisponibilitePersonnel): self
    {
        if (!$this->indisponibilitePersonnels->contains($indisponibilitePersonnel)) {
            $this->indisponibilitePersonnels[] = $indisponibilitePersonnel;
            $indisponibilitePersonnel->setPersonnel($this);
        }

        return $this;
    }

    public function removeIndisponibilitePersonnel(IndisponibilitePersonnel $indisponibilitePersonnel): self
    {
        if ($this->indisponibilitePersonnels->contains($indisponibilitePersonnel)) {
            $this->indisponibilitePersonnels->removeElement($indisponibilitePersonnel);
            // set the owning side to null (unless already changed)
            if ($indisponibilitePersonnel->getPersonnel() === $this) {
                $indisponibilitePersonnel->setPersonnel(null);
            }
        }

        return $this;
    }

    /**
     * @return null|File
     */
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
     *
     * @param null|File $photo
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

    /**
     * @param string $photoName
     */
    public function setPhotoName(string $photoName): void
    {
        $this->photoName = $photoName;
    }

    /**
     * @return Collection|Disponibilite[]
     */
    public function getDisponibilites(): Collection
    {
        return $this->disponibilites;
    }

    public function addDisponibilite(Disponibilite $disponibilite): self
    {
        if (!$this->disponibilites->contains($disponibilite)) {
            $this->disponibilites[] = $disponibilite;
            $disponibilite->setPersonnel($this);
        }

        return $this;
    }

    public function removeDisponibilite(Disponibilite $disponibilite): self
    {
        if ($this->disponibilites->contains($disponibilite)) {
            $this->disponibilites->removeElement($disponibilite);
            // set the owning side to null (unless already changed)
            if ($disponibilite->getPersonnel() === $this) {
                $disponibilite->setPersonnel(null);
            }
        }

        return $this;
    }

    /**
     * @return Collection|ProgressionPedagogique[]
     */
    public function getProgressionPedagogiques(): Collection
    {
        return $this->progressionPedagogiques;
    }

    public function addProgressionPedagogique(ProgressionPedagogique $progressionPedagogique): self
    {
        if (!$this->progressionPedagogiques->contains($progressionPedagogique)) {
            $this->progressionPedagogiques[] = $progressionPedagogique;
            $progressionPedagogique->setPersonnel($this);
        }

        return $this;
    }

    public function removeProgressionPedagogique(ProgressionPedagogique $progressionPedagogique): self
    {
        if ($this->progressionPedagogiques->contains($progressionPedagogique)) {
            $this->progressionPedagogiques->removeElement($progressionPedagogique);
            // set the owning side to null (unless already changed)
            if ($progressionPedagogique->getPersonnel() === $this) {
                $progressionPedagogique->setPersonnel(null);
            }
        }

        return $this;
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
}
