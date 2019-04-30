<?php
/**
 * *
 *  *  Copyright (C) $month.$year | David annebicque | IUT de Troyes - All Rights Reserved
 *  *
 *  *
 *  * @file /Users/davidannebicque/htdocs/intranetv3/src/Entity/Rattrapage.php
 *  * @author     David annebicque
 *  * @project intranetv3
 *  * @date 4/30/19 2:35 PM
 *  * @lastUpdate 4/30/19 10:24 AM
 *  *
 *
 */

namespace App\Entity;

use DateTimeInterface;
use Doctrine\ORM\Mapping as ORM;
use Exception;
use Ramsey\Uuid\Uuid;
use Ramsey\Uuid\UuidInterface;
use Symfony\Component\Serializer\Annotation\Groups;

/**
 * @ORM\Entity(repositoryClass="App\Repository\RattrapageRepository")
 */
class Rattrapage extends BaseEntity
{
    public const DEMANDE_FAITE = 'f';
    public const DEMANDE_ACCEPTEE = 'a';
    public const DEMANDE_REFUSEE = 'r';

    /**
     * @var UuidInterface
     *
     * @ORM\Column(type="uuid_binary", unique=true)
     */
    protected $uuid;

    /**
     * @ORM\ManyToOne(targetEntity="App\Entity\Etudiant", inversedBy="rattrapages")
     * @Groups({"rattrapage_administration"})
     */
    private $etudiant;

    /**
     * @ORM\ManyToOne(targetEntity="App\Entity\Matiere")
     * @Groups({"rattrapage_administration"})
     */
    private $matiere;

    /**
     * @ORM\ManyToOne(targetEntity="App\Entity\Personnel")
     * @Groups({"rattrapage_administration"})
     */
    private $personnel;

    /**
     * @ORM\Column(type="date")
     * @Groups({"rattrapage_administration"})
     */
    private $dateEval;

    /**
     * @ORM\Column(type="time")
     * @Groups({"rattrapage_administration"})
     */
    private $heureEval;

    /**
     * @ORM\Column(type="string", length=20)
     * @Groups({"rattrapage_administration"})
     */
    private $duree;

    /**
     * @ORM\Column(type="date", nullable=true)
     * @Groups({"rattrapage_administration"})
     */
    private $dateRattrapage;

    /**
     * @ORM\Column(type="time", nullable=true)
     * @Groups({"rattrapage_administration"})
     */
    private $heureRattrapage;

    /**
     * @ORM\Column(type="string", length=10, nullable=true)
     * @Groups({"rattrapage_administration"})
     */
    private $salle;

    /**
     * @ORM\Column(type="string", length=1)
     * @Groups({"rattrapage_administration"})
     */
    private $etatDemande;

    /**
     * @ORM\Column(type="integer")
     */
    private $anneeuniversitaire;

    /**
     * Rattrapage constructor.
     *
     * @param Etudiant $etudiant
     *
     * @throws Exception
     */
    public function __construct(Etudiant $etudiant)
    {
        $this->uuid = Uuid::uuid4();
        $this->etudiant = $etudiant;
        $this->etatDemande = self::DEMANDE_FAITE;
        $this->anneeuniversitaire = $etudiant->getSemestre()->getAnneeUniversitaire();
    }

    /**
     * @return UuidInterface
     */
    public function getUuid(): UuidInterface
    {
        return $this->uuid;
    }


    /**
     * @return Etudiant|null
     */
    public function getEtudiant(): ?Etudiant
    {
        return $this->etudiant;
    }

    /**
     * @param Etudiant|null $etudiant
     *
     * @return Rattrapage
     */
    public function setEtudiant(?Etudiant $etudiant): self
    {
        $this->etudiant = $etudiant;

        return $this;
    }

    /**
     * @return Matiere|null
     */
    public function getMatiere(): ?Matiere
    {
        return $this->matiere;
    }

    /**
     * @param Matiere|null $matiere
     *
     * @return Rattrapage
     */
    public function setMatiere(?Matiere $matiere): self
    {
        $this->matiere = $matiere;

        return $this;
    }

    /**
     * @return Personnel|null
     */
    public function getPersonnel(): ?Personnel
    {
        return $this->personnel;
    }

    /**
     * @param Personnel|null $personnel
     *
     * @return Rattrapage
     */
    public function setPersonnel(?Personnel $personnel): self
    {
        $this->personnel = $personnel;

        return $this;
    }

    /**
     * @return DateTimeInterface|null
     */
    public function getDateEval(): ?DateTimeInterface
    {
        return $this->dateEval;
    }

    /**
     * @param DateTimeInterface $dateEval
     *
     * @return Rattrapage
     */
    public function setDateEval(DateTimeInterface $dateEval): self
    {
        $this->dateEval = $dateEval;

        return $this;
    }

    /**
     * @return DateTimeInterface|null
     */
    public function getHeureEval(): ?DateTimeInterface
    {
        return $this->heureEval;
    }

    /**
     * @param DateTimeInterface $heureEval
     *
     * @return Rattrapage
     */
    public function setHeureEval(DateTimeInterface $heureEval): self
    {
        $this->heureEval = $heureEval;

        return $this;
    }

    /**
     * @return null|string
     */
    public function getDuree(): ?string
    {
        return $this->duree;
    }

    /**
     * @param string $duree
     *
     * @return Rattrapage
     */
    public function setDuree(string $duree): self
    {
        $this->duree = $duree;

        return $this;
    }

    /**
     * @return DateTimeInterface|null
     */
    public function getDateRattrapage(): ?DateTimeInterface
    {
        return $this->dateRattrapage;
    }

    /**
     * @param DateTimeInterface $dateRattrapage
     *
     * @return Rattrapage
     */
    public function setDateRattrapage(DateTimeInterface $dateRattrapage): self
    {
        $this->dateRattrapage = $dateRattrapage;

        return $this;
    }

    /**
     * @return DateTimeInterface|null
     */
    public function getHeureRattrapage(): ?DateTimeInterface
    {
        return $this->heureRattrapage;
    }

    /**
     * @param DateTimeInterface|null $heureRattrapage
     *
     * @return Rattrapage
     */
    public function setHeureRattrapage(?DateTimeInterface $heureRattrapage): self
    {
        $this->heureRattrapage = $heureRattrapage;

        return $this;
    }

    /**
     * @return null|string
     */
    public function getSalle(): ?string
    {
        return $this->salle;
    }

    /**
     * @param null|string $salle
     *
     * @return Rattrapage
     */
    public function setSalle(?string $salle): self
    {
        $this->salle = $salle;

        return $this;
    }

    /**
     * @return null|string
     */
    public function getEtatDemande(): ?string
    {
        return $this->etatDemande;
    }

    /**
     * @param string $etatDemande
     *
     * @return Rattrapage
     */
    public function setEtatDemande(string $etatDemande): self
    {
        $this->etatDemande = $etatDemande;

        return $this;
    }

    /**
     * @return int|null
     */
    public function getAnneeuniversitaire(): ?int
    {
        return $this->anneeuniversitaire;
    }

    /**
     * @param int $anneeuniversitaire
     *
     * @return Rattrapage
     */
    public function setAnneeuniversitaire(int $anneeuniversitaire): self
    {
        $this->anneeuniversitaire = $anneeuniversitaire;

        return $this;
    }

    public function getUuidString(): string
    {
        return (string)$this->getUuid();
    }
}
