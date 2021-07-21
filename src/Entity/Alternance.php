<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Entity/Alternance.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 29/06/2021 17:30
 */

namespace App\Entity;

use App\Entity\Traits\LifeCycleTrait;
use Carbon\CarbonInterface;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Serializer\Annotation\Groups;
use Symfony\Component\Serializer\Annotation\MaxDepth;

/**
 * @ORM\Entity(repositoryClass="App\Repository\AlternanceRepository")
 * @ORM\HasLifecycleCallbacks()
 */
class Alternance extends BaseEntity
{
    use LifeCycleTrait;

    public const ALTERNANCE_APPRENTISSAGE = 'apprentissage';
    public const ALTERNANCE_PROFESSIONALISATION = 'professionalisation';
    public const ALTERNANCE_ETAT_INITIALISE = 'init';
    public const ALTERNANCE_ETAT_COMPLETE = 'complete';
    public const ALTERNANCE_ETAT_VALIDE = 'valide';
    public const ALTERNANCE_ETAT_SANS = 'sans';

    /**
     * @ORM\OneToOne(targetEntity="App\Entity\Entreprise", cascade={"persist", "remove"})
     * @Groups({"alternance_administration"})
     */
    private ?Entreprise $entreprise;

    /**
     * @ORM\OneToOne(targetEntity="App\Entity\Contact", cascade={"persist", "remove"})
     * @MaxDepth(2)
     * @Groups({"alternance_administration"})
     */
    private ?Contact $tuteur;

    /**
     * @ORM\ManyToOne(targetEntity="App\Entity\Etudiant", inversedBy="alternances")
     * @MaxDepth(2)
     * @Groups({"alternance_administration"})
     */
    private ?Etudiant $etudiant;

    /**
     * @ORM\ManyToOne(targetEntity="App\Entity\Personnel", inversedBy="alternances")
     * @MaxDepth(2)
     * @Groups({"alternance_administration"})
     */
    private ?Personnel $tuteurUniversitaire;

    /**
     * @ORM\Column(type="string", length=20)
     * @Groups({"alternance_administration"})
     */
    private ?string $typeContrat;

    /**
     * @ORM\ManyToOne(targetEntity="App\Entity\Annee", inversedBy="alternances")
     */
    private ?Annee $annee;

    /**
     * @ORM\Column(type="string", length=10)
     */
    private ?string $etat;

    /**
     * @ORM\Column(type="date", nullable=true)
     * @Groups({"alternance_administration"})
     */
    private ?CarbonInterface $dateDebut;

    /**
     * @ORM\Column(type="date", nullable=true)
     * @Groups({"alternance_administration"})
     */
    private ?CarbonInterface $dateFin;

    /**
     * @ORM\OneToMany(targetEntity="App\Entity\AlternanceFicheSuivi", mappedBy="alternance")
     */
    private Collection $alternanceFicheSuivis;

    /**
     * @ORM\ManyToOne(targetEntity="App\Entity\AnneeUniversitaire")
     */
    private ?AnneeUniversitaire $anneeUniversitaire;

    /**
     * @ORM\OneToOne(targetEntity="App\Entity\Adresse", inversedBy="alternance", cascade={"persist", "remove"})
     */
    private ?Adresse $adresseAlternance;

    /**
     * @ORM\Column(type="text", nullable=true)
     */
    private ?string $sujet;

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

    public function getDateDebut(): ?CarbonInterface
    {
        return $this->dateDebut;
    }

    public function setDateDebut(CarbonInterface $dateDebut): self
    {
        $this->dateDebut = $dateDebut;

        return $this;
    }

    public function getDateFin(): ?CarbonInterface
    {
        return $this->dateFin;
    }

    public function setDateFin(CarbonInterface $dateFin): self
    {
        $this->dateFin = $dateFin;

        return $this;
    }

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
