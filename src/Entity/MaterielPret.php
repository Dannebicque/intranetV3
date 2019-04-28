<?php
/**
 * *
 *  *  Copyright (C) $month.$year | David annebicque | IUT de Troyes - All Rights Reserved
 *  *
 *  *
 *  * @file /Users/davidannebicque/htdocs/intranetv3/src/Entity/MaterielPret.php
 *  * @author     David annebicque
 *  * @project intranetv3
 *  * @date 4/28/19 8:46 PM
 *  * @lastUpdate 4/28/19 8:46 PM
 *  *
 *
 */

namespace App\Entity;

use DateTimeInterface;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass="App\Repository\MaterielPretRepository")
 */
class MaterielPret extends BaseEntity
{


    /**
     * @ORM\ManyToOne(targetEntity="App\Entity\Departement", inversedBy="materielPrets")
     */
    private $departement;

    /**
     * @ORM\ManyToOne(targetEntity="App\Entity\Etudiant", inversedBy="materielPrets")
     */
    private $etudiant;

    /**
     * @ORM\ManyToOne(targetEntity="App\Entity\Personnel", inversedBy="materielPrets")
     */
    private $personnel;

    /**
     * @ORM\Column(type="datetime")
     */
    private $dateDemande;

    /**
     * @ORM\Column(type="datetime")
     */
    private $dateDebutEmprunt;

    /**
     * @ORM\Column(type="datetime")
     */
    private $dateFinEmprunt;

    /**
     * @ORM\Column(type="datetime")
     */
    private $dateValidation;

    /**
     * @ORM\Column(type="string", length=1)
     */
    private $etatDemande;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $motif;

    /**
     * @ORM\Column(type="string", length=15)
     */
    private $telephone;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $justification;


    public function getDepartement(): ?Departement
    {
        return $this->departement;
    }

    public function setDepartement(?Departement $departement): self
    {
        $this->departement = $departement;

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

    public function getPersonnel(): ?Personnel
    {
        return $this->personnel;
    }

    public function setPersonnel(?Personnel $personnel): self
    {
        $this->personnel = $personnel;

        return $this;
    }

    public function getDateDemande(): ?DateTimeInterface
    {
        return $this->dateDemande;
    }

    public function setDateDemande(DateTimeInterface $dateDemande): self
    {
        $this->dateDemande = $dateDemande;

        return $this;
    }

    public function getDateDebutEmprunt(): ?DateTimeInterface
    {
        return $this->dateDebutEmprunt;
    }

    public function setDateDebutEmprunt(DateTimeInterface $dateDebutEmprunt): self
    {
        $this->dateDebutEmprunt = $dateDebutEmprunt;

        return $this;
    }

    public function getDateFinEmprunt(): ?DateTimeInterface
    {
        return $this->dateFinEmprunt;
    }

    public function setDateFinEmprunt(DateTimeInterface $dateFinEmprunt): self
    {
        $this->dateFinEmprunt = $dateFinEmprunt;

        return $this;
    }

    public function getDateValidation(): ?DateTimeInterface
    {
        return $this->dateValidation;
    }

    public function setDateValidation(DateTimeInterface $dateValidation): self
    {
        $this->dateValidation = $dateValidation;

        return $this;
    }

    public function getEtatDemande(): ?string
    {
        return $this->etatDemande;
    }

    public function setEtatDemande(string $etatDemande): self
    {
        $this->etatDemande = $etatDemande;

        return $this;
    }

    public function getMotif(): ?string
    {
        return $this->motif;
    }

    public function setMotif(string $motif): self
    {
        $this->motif = $motif;

        return $this;
    }

    public function getTelephone(): ?string
    {
        return $this->telephone;
    }

    public function setTelephone(string $telephone): self
    {
        $this->telephone = $telephone;

        return $this;
    }

    public function getJustification(): ?string
    {
        return $this->justification;
    }

    public function setJustification(string $justification): self
    {
        $this->justification = $justification;

        return $this;
    }
}
