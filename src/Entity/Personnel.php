<?php

namespace App\Entity;

use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\HttpFoundation\File\File;
use Symfony\Component\HttpFoundation\File\UploadedFile;
use Vich\UploaderBundle\Mapping\Annotation as Vich;

/**
 * @ORM\Entity(repositoryClass="App\Repository\PersonnelRepository")
 * @ORM\HasLifecycleCallbacks()
 * @Vich\Uploadable
 */
class Personnel extends Utilisateur implements \Serializable // implements SerializerInterface
{
    /**
     * @ORM\Id()
     * @ORM\GeneratedValue()
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\Column(type="string", length=10)
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
     * @ORM\OneToMany(targetEntity="App\Entity\PersonnelFormation", mappedBy="personnel")
     */
    private $personnelFormations;

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
     * @ORM\ManyToMany(targetEntity="App\Entity\TrelloTache", mappedBy="personnels")
     */
    private $trelloTaches;

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
     * @ORM\OneToMany(targetEntity="App\Entity\MaterielPret", mappedBy="personnel")
     */
    private $materielPrets;

    /**
     * @ORM\Column(type="boolean")
     */
    private $deleted = false;

    /**
     * @ORM\Column(type="string", length=20, nullable=true)
     */
    private $couleur;//todo: a gérer

    public function __construct()
    {
        parent::__construct();
        $this->hrs = new ArrayCollection();
        $this->previsionnels = new ArrayCollection();
        $this->evaluationsAuteur = new ArrayCollection();
        $this->evaluationsAutorise = new ArrayCollection();
        $this->modificationNotes = new ArrayCollection();
        $this->cahierTextes = new ArrayCollection();
        $this->notifications = new ArrayCollection();
        $this->trelloTaches = new ArrayCollection();
        $this->personnelFormations = new ArrayCollection();
        $this->messages = new ArrayCollection();
        $this->messageDestinatairePersonnels = new ArrayCollection();
        $this->stagePeriodes = new ArrayCollection();
        $this->stageEtudiants = new ArrayCollection();
        $this->alternances = new ArrayCollection();
        $this->materielPrets = new ArrayCollection();
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
     * @param File|\Symfony\Component\HttpFoundation\File\UploadedFile $cv
     */
    public function setCvFile(?File $cv = null): void
    {
        $this->cvFile = $cv;

        if (null !== $cv) {
            // It is required that at least one field changes if you are using doctrine
            // otherwise the event listeners won't be called and the file is lost
            parent::setUpdatedValue();
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
     * @return Collection|TrelloTache[]
     */
    public function getTrelloTaches(): Collection
    {
        return $this->trelloTaches;
    }

    /**
     * @param TrelloTache $trelloTach
     *
     * @return Personnel
     */
    public function addTrelloTach(TrelloTache $trelloTach): self
    {
        if (!$this->trelloTaches->contains($trelloTach)) {
            $this->trelloTaches[] = $trelloTach;
            $trelloTach->addPersonnel($this);
        }

        return $this;
    }

    /**
     * @param TrelloTache $trelloTach
     *
     * @return Personnel
     */
    public function removeTrelloTach(TrelloTache $trelloTach): self
    {
        if ($this->trelloTaches->contains($trelloTach)) {
            $this->trelloTaches->removeElement($trelloTach);
            $trelloTach->removePersonnel($this);
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
        return serialize(array(
            $this->id,
            $this->password,
            $this->username
        ));
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
     * @return Collection|PersonnelFormation[]
     */
    public function getPersonnelFormations(): Collection
    {
        return $this->personnelFormations;
    }

    /**
     * @param PersonnelFormation $personnelFormation
     *
     * @return Personnel
     */
    public function addPersonnelFormation(PersonnelFormation $personnelFormation): self
    {
        if (!$this->personnelFormations->contains($personnelFormation)) {
            $this->personnelFormations[] = $personnelFormation;
            $personnelFormation->setPersonnel($this);
        }

        return $this;
    }

    /**
     * @param PersonnelFormation $personnelFormation
     *
     * @return Personnel
     */
    public function removePersonnelFormation(PersonnelFormation $personnelFormation): self
    {
        if ($this->personnelFormations->contains($personnelFormation)) {
            $this->personnelFormations->removeElement($personnelFormation);
            // set the owning side to null (unless already changed)
            if ($personnelFormation->getPersonnel() === $this) {
                $personnelFormation->setPersonnel(null);
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
            $materielPret->setPersonnel($this);
        }

        return $this;
    }

    public function removeMaterielPret(MaterielPret $materielPret): self
    {
        if ($this->materielPrets->contains($materielPret)) {
            $this->materielPrets->removeElement($materielPret);
            // set the owning side to null (unless already changed)
            if ($materielPret->getPersonnel() === $this) {
                $materielPret->setPersonnel(null);
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
}
