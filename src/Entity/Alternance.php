<?php
/**
 * *
 *  *  Copyright (C) $month.$year | David annebicque | IUT de Troyes - All Rights Reserved
 *  *
 *  *
 *  * @file /Users/davidannebicque/htdocs/intranetv3/src/Entity/Alternance.php
 *  * @author     David annebicque
 *  * @project intranetv3
 *  * @date 4/28/19 8:46 PM
 *  * @lastUpdate 4/28/19 8:42 PM
 *  *
 *
 */

namespace App\Entity;

use DateTimeInterface;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Serializer\Annotation\Groups;

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
     * @Groups({"absences_administration"})
     */
    private $entreprise;

    /**
     * @ORM\OneToOne(targetEntity="App\Entity\Contact", cascade={"persist", "remove"})
     */
    private $tuteur;

    /**
     * @ORM\Column(type="integer")
     */
    private $anneeUniversitaire;

    /**
     * @ORM\ManyToOne(targetEntity="App\Entity\Etudiant", inversedBy="alternances")
     */
    private $etudiant;

    /**
     * @ORM\ManyToOne(targetEntity="App\Entity\Personnel", inversedBy="alternances")
     */
    private $tuteurUniversitaire;

    /**
     * @ORM\Column(type="string", length=20)
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
     */
    private $dateDebut;

    /**
     * @ORM\Column(type="date", nullable=true)
     */
    private $dateFin;

    public function __construct()
    {
        $this->typeContrat = self::ALTERNANCE_PROFESSIONALISATION;
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

    public function getAnneeUniversitaire(): ?int
    {
        return $this->anneeUniversitaire;
    }

    public function setAnneeUniversitaire(int $anneeUniversitaire): self
    {
        $this->anneeUniversitaire = $anneeUniversitaire;

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
}
