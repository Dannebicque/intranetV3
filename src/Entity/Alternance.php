<?php
// Copyright (C) 11 / 2019 | David annebicque | IUT de Troyes - All Rights Reserved
// @file /Users/davidannebicque/htdocs/intranetv3/src/Entity/Alternance.php
// @author     David Annebicque
// @project intranetv3
// @date 25/11/2019 10:20
// @lastUpdate 23/11/2019 09:14

namespace App\Entity;

use DateTimeInterface;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Serializer\Annotation\Groups;
use Symfony\Component\Serializer\Annotation\MaxDepth;

/**
 * @ORM\Entity(repositoryClass="App\Repository\AlternanceRepository")
 */
class Alternance extends BaseEntity
{

    public const ALTERNANCE_APPRENTISSAGE = 'apprentissage';
    public const ALTERNANCE_PROFESSIONALISATION = 'professionalisation';
    public const ALTERNANCE_ETAT_INITIALISE = 'init';
    public const ALTERNANCE_ETAT_COMPLETE = 'complete';
    public const ALTERNANCE_ETAT_VALIDE = 'valide';


    /**
     * @ORM\OneToOne(targetEntity="App\Entity\Entreprise", cascade={"persist", "remove"})
     * @Groups({"alternance_administration"})
     */
    private $entreprise;

    /**
     * @ORM\OneToOne(targetEntity="App\Entity\Contact", cascade={"persist", "remove"})
     * @MaxDepth(2)
     * @Groups({"alternance_administration"})
     */
    private $tuteur;

    /**
     * @ORM\ManyToOne(targetEntity="App\Entity\Etudiant", inversedBy="alternances")
     * @MaxDepth(2)
     * @Groups({"alternance_administration"})
     */
    private $etudiant;

    /**
     * @ORM\ManyToOne(targetEntity="App\Entity\Personnel", inversedBy="alternances")
     * @MaxDepth(2)
     * @Groups({"alternance_administration"})
     */
    private $tuteurUniversitaire;

    /**
     * @ORM\Column(type="string", length=20)
     * @Groups({"alternance_administration"})
     */
    private $typeContrat;

    /**
     * @ORM\ManyToOne(targetEntity="App\Entity\Annee", inversedBy="alternances")
     */
    private $annee;

    /**
     * @ORM\Column(type="string", length=10)
     */
    private $etat;

    /**
     * @ORM\Column(type="date", nullable=true)
     * @Groups({"alternance_administration"})
     */
    private $dateDebut;

    /**
     * @ORM\Column(type="date", nullable=true)
     * @Groups({"alternance_administration"})
     */
    private $dateFin;

    /**
     * @ORM\OneToMany(targetEntity="App\Entity\AlternanceFicheSuivi", mappedBy="alternance")
     */
    private $alternanceFicheSuivis;

    /**
     * @ORM\ManyToOne(targetEntity="App\Entity\AnneeUniversitaire")
     */
    private $anneeUniversitaire;

    /**
     * @ORM\OneToOne(targetEntity="App\Entity\Adresse", inversedBy="alternance", cascade={"persist", "remove"})
     */
    private $adresseAlternance;

    /**
     * @ORM\Column(type="text", nullable=true)
     */
    private $sujet;

    public function __construct()
    {
        $this->typeContrat = self::ALTERNANCE_PROFESSIONALISATION;
        $this->alternanceFicheSuivis = new ArrayCollection();
    }

    public function getEntreprise(): ?Entreprise
    {
        return $this->entreprise;
    }

    public function setEntreprise(?Entreprise $entreprise): self
    {
        $this->entreprise = $entreprise;

        return $this;
    }

    public function getTuteur(): ?Contact
    {
        return $this->tuteur;
    }

    public function setTuteur(?Contact $tuteur): self
    {
        $this->tuteur = $tuteur;

        return $this;
    }

    public function getEtudiant(): ?Etudiant
    {
        return $this->etudiant;
    }

    public function setEtudiant(?Etudiant $etudiant): self
    {
        $this->etudiant = $etudiant;

        return $this;
    }

    public function getTuteurUniversitaire(): ?Personnel
    {
        return $this->tuteurUniversitaire;
    }

    public function setTuteurUniversitaire(?Personnel $tuteurUniversitaire): self
    {
        $this->tuteurUniversitaire = $tuteurUniversitaire;

        return $this;
    }

    public function getTypeContrat(): ?string
    {
        return $this->typeContrat;
    }

    public function setTypeContrat(string $typeContrat): self
    {
        $this->typeContrat = $typeContrat;

        return $this;
    }

    public function getAnnee(): ?Annee
    {
        return $this->annee;
    }

    public function setAnnee(?Annee $annee): self
    {
        $this->annee = $annee;

        return $this;
    }

    public function getEtat(): ?string
    {
        return $this->etat;
    }

    public function setEtat(string $etat): self
    {
        $this->etat = $etat;

        return $this;
    }

    public function getDateDebut(): ?DateTimeInterface
    {
        return $this->dateDebut;
    }

    public function setDateDebut(DateTimeInterface $dateDebut): self
    {
        $this->dateDebut = $dateDebut;

        return $this;
    }

    public function getDateFin(): ?DateTimeInterface
    {
        return $this->dateFin;
    }

    public function setDateFin(DateTimeInterface $dateFin): self
    {
        $this->dateFin = $dateFin;

        return $this;
    }

    /**
     * @return Collection|AlternanceFicheSuivi[]
     */
    public function getAlternanceFicheSuivis(): Collection
    {
        return $this->alternanceFicheSuivis;
    }

    public function addAlternanceFicheSuivi(AlternanceFicheSuivi $alternanceFicheSuivi): self
    {
        if (!$this->alternanceFicheSuivis->contains($alternanceFicheSuivi)) {
            $this->alternanceFicheSuivis[] = $alternanceFicheSuivi;
            $alternanceFicheSuivi->setAlternance($this);
        }

        return $this;
    }

    public function removeAlternanceFicheSuivi(AlternanceFicheSuivi $alternanceFicheSuivi): self
    {
        if ($this->alternanceFicheSuivis->contains($alternanceFicheSuivi)) {
            $this->alternanceFicheSuivis->removeElement($alternanceFicheSuivi);
            // set the owning side to null (unless already changed)
            if ($alternanceFicheSuivi->getAlternance() === $this) {
                $alternanceFicheSuivi->setAlternance(null);
            }
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

    public function getAdresseAlternance(): ?Adresse
    {
        return $this->adresseAlternance;
    }

    public function setAdresseAlternance(?Adresse $adresseAlternance): self
    {
        $this->adresseAlternance = $adresseAlternance;

        return $this;
    }

    public function getSujet(): ?string
    {
        return $this->sujet;
    }

    public function setSujet(?string $sujet): self
    {
        $this->sujet = $sujet;

        return $this;
    }
}
