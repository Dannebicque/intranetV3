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
class Personnel extends Utilisateur // implements SerializerInterface
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
     * @ORM\Column(type="string", length=50, nullable=true)
     *
     */
    protected $cv;

    /**
     * @var string
     *
     * @ORM\Column(type="string", length=50)
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
    private $nbHeuresService;

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



    public function __construct()
    {
        $this->hrs = new ArrayCollection();
        $this->previsionnels = new ArrayCollection();
        $this->evaluationsAuteur = new ArrayCollection();
        $this->evaluationsAutorise = new ArrayCollection();
        $this->modificationNotes = new ArrayCollection();
        $this->cahierTextes = new ArrayCollection();
        $this->notifications = new ArrayCollection();
        $this->trelloTaches = new ArrayCollection();
        //$this->personnelFormations = new ArrayCollection();
    }

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

    public function getCvFile(): ?File
    {
        return $this->cvFile;
    }

    /**
     * @return string
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

    public function setNbHeuresService(float $nbHeuresService): self
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
     * @return Collection|TrelloTache[]
     */
    public function getTrelloTaches(): Collection
    {
        return $this->trelloTaches;
    }

    public function addTrelloTach(TrelloTache $trelloTach): self
    {
        if (!$this->trelloTaches->contains($trelloTach)) {
            $this->trelloTaches[] = $trelloTach;
            $trelloTach->addPersonnel($this);
        }

        return $this;
    }

    public function removeTrelloTach(TrelloTache $trelloTach): self
    {
        if ($this->trelloTaches->contains($trelloTach)) {
            $this->trelloTaches->removeElement($trelloTach);
            $trelloTach->removePersonnel($this);
        }

        return $this;
    }

//    /**
//     * @return Collection|PersonnelFormation[]
//     */
//    public function getPersonnelFormations(): Collection
//    {
//        return $this->personnelFormations;
//    }
//
//    public function addPersonnelFormation(PersonnelFormation $personnelFormation): self
//    {
//        if (!$this->personnelFormations->contains($personnelFormation)) {
//            $this->personnelFormations[] = $personnelFormation;
//            $personnelFormation->setPersonnel($this);
//        }
//
//        return $this;
//    }
//
//    public function removePersonnelFormation(PersonnelFormation $personnelFormation): self
//    {
//        if ($this->personnelFormations->contains($personnelFormation)) {
//            $this->personnelFormations->removeElement($personnelFormation);
//            // set the owning side to null (unless already changed)
//            if ($personnelFormation->getPersonnel() === $this) {
//                $personnelFormation->setPersonnel(null);
//            }
//        }
//
//        return $this;
//    }
}
