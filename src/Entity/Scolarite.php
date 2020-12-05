<?php
// Copyright (c) 2020. | David Annebicque | IUT de Troyes  - All Rights Reserved
// @file /Users/davidannebicque/htdocs/intranetV3/src/Entity/Scolarite.php
// @author davidannebicque
// @project intranetV3
// @lastUpdate 05/12/2020 09:19

namespace App\Entity;

use App\Entity\Traits\UuidTrait;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;
use Ramsey\Uuid\Uuid;

/**
 * @ORM\Entity(repositoryClass="App\Repository\ScolariteRepository")
 */
class Scolarite extends BaseEntity
{
    use UuidTrait;

    /**
     * @ORM\Column(type="integer")
     */
    private ?int $ordre;

    /**
     * @ORM\ManyToOne(targetEntity="App\Entity\Semestre")
     */
    private ?Semestre $semestre;

    /**
     * @ORM\Column(type="string", length=10)
     */
    private string $decision = 'E.C';

    /**
     * @ORM\Column(type="string", length=10, nullable=true)
     */
    private ?string $proposition;

    /**
     * @ORM\Column(type="float")
     */
    private float $moyenne = 0;

    /**
     * @ORM\ManyToOne(targetEntity="App\Entity\Etudiant", inversedBy="scolarites")
     */
    private ?Etudiant $etudiant;

    /**
     * @ORM\Column(type="integer")
     */
    private int $nbAbsences = 0;

    /**
     * @ORM\Column(type="text", nullable=true)
     */
    private ?string $commentaire;

    /**
     * @ORM\ManyToOne(targetEntity="App\Entity\AnneeUniversitaire", inversedBy="scolarites")
     */
    private $anneeUniversitaire;

    /**
     * @ORM\Column(type="boolean")
     */
    private bool $diffuse = false;

    /**
     * @ORM\ManyToOne(targetEntity=ScolaritePromo::class, inversedBy="scolarites")
     */
    private ?ScolaritePromo $ScolaritePromo;

    /**
     * @ORM\Column(type="array", nullable=true)
     */
    private $moyennesMatieres = []; //sauvegarder moyenne et rang
    // idMatiere => ['moyenne' => ..., 'rang' => ...],

    /**
     * @ORM\Column(type="array", nullable=true)
     */
    private $moyennesUes = [];
    // idUe => ['moyenne' => ..., 'rang' => ...],

    /**
     * Scolarite constructor.
     *
     * @param Etudiant                $etudiant
     * @param Semestre                $semestre
     * @param AnneeUniversitaire|null $anneeUniversitaire
     */
    public function __construct(Etudiant $etudiant, Semestre $semestre, AnneeUniversitaire $anneeUniversitaire = null)
    {
        $this->setUuid(Uuid::uuid4());
        $this->setEtudiant($etudiant);
        $this->setSemestre($semestre);
        $this->setAnneeUniversitaire($anneeUniversitaire);
    }


    public function __clone()
    {
        $this->setUuid(Uuid::uuid4());
    }

    /**
     * @return int|null
     */
    public function getOrdre(): ?int
    {
        return $this->ordre;
    }

    /**
     * @param int $ordre
     *
     * @return Scolarite
     */
    public function setOrdre(int $ordre): self
    {
        $this->ordre = $ordre;

        return $this;
    }

    /**
     * @return Semestre|null
     */
    public function getSemestre(): ?Semestre
    {
        return $this->semestre;
    }

    /**
     * @param Semestre|null $semestre
     *
     * @return Scolarite
     */
    public function setSemestre(?Semestre $semestre): self
    {
        $this->semestre = $semestre;

        return $this;
    }

    /**
     * @return null|string
     */
    public function getDecision(): ?string
    {
        return $this->decision;
    }

    /**
     * @param string $decision
     *
     * @return Scolarite
     */
    public function setDecision(string $decision): self
    {
        $this->decision = $decision;

        return $this;
    }

    /**
     * @return null|string
     */
    public function getProposition(): ?string
    {
        return $this->proposition;
    }

    /**
     * @param string $proposition
     *
     * @return Scolarite
     */
    public function setProposition(string $proposition): self
    {
        $this->proposition = $proposition;

        return $this;
    }

    /**
     * @return float|null
     */
    public function getMoyenne(): ?float
    {
        return $this->moyenne;
    }

    /**
     * @param float $moyenne
     *
     * @return Scolarite
     */
    public function setMoyenne(float $moyenne): self
    {
        $this->moyenne = $moyenne;

        return $this;
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
     * @return Scolarite
     */
    public function setEtudiant(?Etudiant $etudiant): self
    {
        $this->etudiant = $etudiant;

        return $this;
    }

    /**
     * @return int|null
     */
    public function getNbAbsences(): ?int
    {
        return $this->nbAbsences;
    }

    /**
     * @param int $nbAbsences
     *
     * @return Scolarite
     */
    public function setNbAbsences(int $nbAbsences): self
    {
        $this->nbAbsences = $nbAbsences;

        return $this;
    }

    /**
     * @return null|string
     */
    public function getCommentaire(): ?string
    {
        return $this->commentaire;
    }

    /**
     * @param string $commentaire
     *
     * @return Scolarite
     */
    public function setCommentaire(string $commentaire): self
    {
        $this->commentaire = $commentaire;

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

    public function setUuid($uuid): self
    {
        $this->uuid = $uuid;

        return $this;
    }

    public function getDiffuse(): ?bool
    {
        return $this->diffuse;
    }

    public function setDiffuse(bool $diffuse): self
    {
        $this->diffuse = $diffuse;

        return $this;
    }

    public function getScolaritePromo(): ?ScolaritePromo
    {
        return $this->ScolaritePromo;
    }

    public function setScolaritePromo(?ScolaritePromo $ScolaritePromo): self
    {
        $this->ScolaritePromo = $ScolaritePromo;

        return $this;
    }

    public function getMoyennesMatieres(): ?array
    {
        return $this->moyennesMatieres;
    }

    public function setMoyennesMatieres(?array $moyennesMatieres): self
    {
        $this->moyennesMatieres = $moyennesMatieres;

        return $this;
    }

    public function getMoyennesUes(): ?array
    {
        return $this->moyennesUes;
    }

    public function setMoyennesUes(?array $moyennesUes): self
    {
        $this->moyennesUes = $moyennesUes;

        return $this;
    }
}
