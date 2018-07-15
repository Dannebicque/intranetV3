<?php

namespace App\Entity;

use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Serializer\Annotation\Groups;

/**
 * @ORM\Entity(repositoryClass="App\Repository\EtudiantRepository")
 */
class Etudiant extends Utilisateur implements \Serializable
{
    /**
     * @ORM\Id()
     * @ORM\GeneratedValue()
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @var Semestre
     *
     * @ORM\ManyToOne(targetEntity="App\Entity\Semestre", inversedBy="etudiants")
     */
    private $semestre;

    /**
     * @ORM\OneToMany(targetEntity="App\Entity\Note", mappedBy="etudiant")
     *
     */
    private $notes;

    /**
     * @ORM\Column(type="string", length=20)
     * @Groups({"etudiants_administration"})
     */
    private $numEtudiant;

    /**
     * @ORM\Column(type="string", length=20)
     */
    private $numIne;

    /**
     * @ORM\Column(type="string", length=30, nullable=true)
     * @Groups({"etudiants_administration"})
     */
    private $bac;

    /**
     * @ORM\Column(type="integer", nullable=true)
     */
    private $anneeBac;

    /**
     * @ORM\OneToMany(targetEntity="App\Entity\Absence", mappedBy="etudiant")
     * @ORM\OrderBy({"date" = "desc", "heure" = "desc"})
     */
    private $absences;

    /**
     * @ORM\OneToOne(targetEntity="App\Entity\Adresse", cascade={"persist", "remove"})
     */
    private $adresseParentale;

    /**
     * @ORM\OneToMany(targetEntity="App\Entity\Rattrapage", mappedBy="etudiant")
     */
    private $rattrapages;

    /**
     * @ORM\OneToMany(targetEntity="App\Entity\Favori", mappedBy="etudiantDemandeur")
     */
    private $etudiantDemande;

    /**
     * @ORM\OneToMany(targetEntity="App\Entity\Favori", mappedBy="etudiantDemande")
     */
    private $etudiantDemandeur;

    /**
     * @ORM\OneToMany(targetEntity="App\Entity\Scolarite", mappedBy="etudiant")
     */
    private $scolarites;

    /**
     * @ORM\OneToMany(targetEntity="App\Entity\Notification", mappedBy="etudiant")
     */
    private $notifications;

    /**
     * @ORM\ManyToMany(targetEntity="App\Entity\Article", mappedBy="likes")
     */
    private $articleLikes;

    /**
     * @ORM\Column(type="boolean")
     */
    private $boursier;

    /**
     * @ORM\Column(type="boolean")
     */
    private $demandeurEmploi;

    /**
     * @ORM\ManyToMany(targetEntity="App\Entity\Groupe", inversedBy="etudiants")
     */
    private $groupes;

    /**
     * @ORM\OneToMany(targetEntity="App\Entity\MessageDestinataireEtudiant", mappedBy="etudiant")
     */
    private $messageDestinataireEtudiants;

    //todo: ajouter boursier, contrat pro, demandeur d'emploi
    //todo: gestion de l'alternance.

    public function __construct()
    {
        parent::__construct();

        $this->notes = new ArrayCollection();
        $this->absences = new ArrayCollection();
        $this->rattrapages = new ArrayCollection();
        $this->etudiantDemande = new ArrayCollection();
        $this->etudiantDemandeur = new ArrayCollection();
        $this->scolarites = new ArrayCollection();
        $this->notifications = new ArrayCollection();
        $this->articleLikes = new ArrayCollection();
        $this->groupes = new ArrayCollection();
        $this->messageDestinataireEtudiants = new ArrayCollection();
    }

    /**
     * @return mixed
     */
    public function getId()
    {
        return $this->id;
    }

    /**
     * @return Semestre
     */
    public function getSemestre(): Semestre
    {
        return $this->semestre;
    }

    /**
     * @param Semestre $semestre
     */
    public function setSemestre(Semestre $semestre): void
    {
        $this->semestre = $semestre;
    }

    /**
     * @return Collection|Note[]
     */
    public function getNotes(): Collection
    {
        return $this->notes;
    }

    /**
     * @param Note $note
     *
     * @return Etudiant
     */
    public function addNote(Note $note): self
    {
        if (!$this->notes->contains($note)) {
            $this->notes[] = $note;
            $note->setEtudiant($this);
        }

        return $this;
    }

    /**
     * @param Note $note
     *
     * @return Etudiant
     */
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


    /**
     * @return null|string
     */
    public function getNumEtudiant(): ?string
    {
        return $this->numEtudiant;
    }

    /**
     * @param string $numEtudiant
     *
     * @return Etudiant
     */
    public function setNumEtudiant(string $numEtudiant): self
    {
        $this->numEtudiant = $numEtudiant;

        return $this;
    }

    /**
     * @return null|string
     */
    public function getNumIne(): ?string
    {
        return $this->numIne;
    }

    /**
     * @param string $numIne
     *
     * @return Etudiant
     */
    public function setNumIne(string $numIne): self
    {
        $this->numIne = $numIne;

        return $this;
    }

    /**
     * @return null|string
     */
    public function getBac(): ?string
    {
        return $this->bac;
    }

    /**
     * @param null|string $bac
     *
     * @return Etudiant
     */
    public function setBac(?string $bac): self
    {
        $this->bac = $bac;

        return $this;
    }

    /**
     * @return int|null
     */
    public function getAnneeBac(): ?int
    {
        return $this->anneeBac;
    }

    /**
     * @param int|null $anneeBac
     *
     * @return Etudiant
     */
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

    /**
     * @param Absence $absence
     *
     * @return Etudiant
     */
    public function addAbsence(Absence $absence): self
    {
        if (!$this->absences->contains($absence)) {
            $this->absences[] = $absence;
            $absence->setEtudiant($this);
        }

        return $this;
    }

    /**
     * @param Absence $absence
     *
     * @return Etudiant
     */
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

    /**
     * @return Adresse|null
     */
    public function getAdresseParentale(): ?Adresse
    {
        return $this->adresseParentale;
    }

    /**
     * @param Adresse|null $adresseParentale
     *
     * @return Etudiant
     */
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

    /**
     * @param Rattrapage $rattrapage
     *
     * @return Etudiant
     */
    public function addRattrapage(Rattrapage $rattrapage): self
    {
        if (!$this->rattrapages->contains($rattrapage)) {
            $this->rattrapages[] = $rattrapage;
            $rattrapage->setEtudiant($this);
        }

        return $this;
    }

    /**
     * @param Rattrapage $rattrapage
     *
     * @return Etudiant
     */
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

    /**
     * @param Favori $etudiantDemande
     *
     * @return Etudiant
     */
    public function addEtudiantDemande(Favori $etudiantDemande): self
    {
        if (!$this->etudiantDemande->contains($etudiantDemande)) {
            $this->etudiantDemande[] = $etudiantDemande;
            $etudiantDemande->setEtudiantDemandeur($this);
        }

        return $this;
    }

    /**
     * @param Favori $etudiantDemande
     *
     * @return Etudiant
     */
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

    /**
     * @param Favori $etudiantDemandeur
     *
     * @return Etudiant
     */
    public function addEtudiantDemandeur(Favori $etudiantDemandeur): self
    {
        if (!$this->etudiantDemandeur->contains($etudiantDemandeur)) {
            $this->etudiantDemandeur[] = $etudiantDemandeur;
            $etudiantDemandeur->setEtudiantDemande($this);
        }

        return $this;
    }

    /**
     * @param Favori $etudiantDemandeur
     *
     * @return Etudiant
     */
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

    /**
     * @param Scolarite $scolarite
     *
     * @return Etudiant
     */
    public function addScolarite(Scolarite $scolarite): self
    {
        if (!$this->scolarites->contains($scolarite)) {
            $this->scolarites[] = $scolarite;
            $scolarite->setEtudiant($this);
        }

        return $this;
    }

    /**
     * @param Scolarite $scolarite
     *
     * @return Etudiant
     */
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

    /**
     * @param Notification $notification
     *
     * @return Etudiant
     */
    public function addNotification(Notification $notification): self
    {
        if (!$this->notifications->contains($notification)) {
            $this->notifications[] = $notification;
            $notification->setEtudiant($this);
        }

        return $this;
    }

    /**
     * @param Notification $notification
     *
     * @return Etudiant
     */
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
     * @return Collection|Article[]
     */
    public function getArticleLikes(): Collection
    {
        return $this->articleLikes;
    }

    /**
     * @param Article $articleLike
     *
     * @return Etudiant
     */
    public function addArticleLike(Article $articleLike): self
    {
        if (!$this->articleLikes->contains($articleLike)) {
            $this->articleLikes[] = $articleLike;
            $articleLike->addLike($this);
        }

        return $this;
    }

    /**
     * @param Article $articleLike
     *
     * @return Etudiant
     */
    public function removeArticleLike(Article $articleLike): self
    {
        if ($this->articleLikes->contains($articleLike)) {
            $this->articleLikes->removeElement($articleLike);
            $articleLike->removeLike($this);
        }

        return $this;
    }

    /**
     * @return bool|null
     */
    public function getBoursier(): ?bool
    {
        return $this->boursier;
    }

    /**
     * @param bool $boursier
     *
     * @return Etudiant
     */
    public function setBoursier(bool $boursier): self
    {
        $this->boursier = $boursier;

        return $this;
    }

    /**
     * @return bool|null
     */
    public function getDemandeurEmploi(): ?bool
    {
        return $this->demandeurEmploi;
    }

    /**
     * @param bool $demandeurEmploi
     *
     * @return Etudiant
     */
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

    /**
     * @param Groupe $groupe
     *
     * @return Etudiant
     */
    public function addGroupe(Groupe $groupe): self
    {
        if (!$this->groupes->contains($groupe)) {
            $this->groupes[] = $groupe;
        }

        return $this;
    }

    /**
     * @param Groupe $groupe
     *
     * @return Etudiant
     */
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
}
