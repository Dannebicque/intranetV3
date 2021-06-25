<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Entity/Scolarite.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 24/06/2021 16:08
 */

namespace App\Entity;

use App\Entity\Traits\LifeCycleTrait;
use App\Entity\Traits\UuidTrait;
use App\Utils\Tools;
use Doctrine\ORM\Mapping as ORM;
use Ramsey\Uuid\Uuid;

/**
 * @ORM\Entity(repositoryClass="App\Repository\ScolariteRepository")
 * @ORM\HasLifecycleCallbacks()
 */
class Scolarite extends BaseEntity
{
    use UuidTrait;
    use LifeCycleTrait;

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
    private ?float $moyenne = 0;

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
    private ?AnneeUniversitaire $anneeUniversitaire;

    /**
     * @ORM\Column(type="boolean")
     */
    private bool $diffuse = false;

    /**
     * @ORM\ManyToOne(targetEntity=ScolaritePromo::class, inversedBy="scolarites")
     */
    private ?ScolaritePromo $scolaritePromo;

    /**
     * @ORM\Column(type="array", nullable=true)
     */
    private array $moyennesMatieres = []; //sauvegarder moyenne et rang
    // idMatiere => ['moyenne' => ..., 'rang' => ...],

    /**
     * @ORM\Column(type="array", nullable=true)
     */
    private array $moyennesUes = [];

    /**
     * @ORM\Column(type="integer")
     */
    private int $rang = -1;
    // idUe => ['moyenne' => ..., 'rang' => ...],

    /**
     * Scolarite constructor.
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

    public function getOrdre(): ?int
    {
        return $this->ordre;
    }

    public function setOrdre(int $ordre): self
    {
        $this->ordre = $ordre;

        return $this;
    }

    public function getSemestre(): ?Semestre
    {
        return $this->semestre;
    }

    public function setSemestre(?Semestre $semestre): self
    {
        $this->semestre = $semestre;

        return $this;
    }

    public function getDecision(): ?string
    {
        return $this->decision;
    }

    public function setDecision(string $decision): self
    {
        $this->decision = $decision;

        return $this;
    }

    public function getProposition(): ?string
    {
        return $this->proposition;
    }

    public function setProposition(string $proposition): self
    {
        $this->proposition = $proposition;

        return $this;
    }

    public function getMoyenne(): ?float
    {
        return $this->moyenne;
    }

    public function setMoyenne(mixed $moyenne): self
    {
        $this->moyenne = Tools::convertToFloat($moyenne);

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

    public function getNbAbsences(): ?int
    {
        return $this->nbAbsences;
    }

    public function setNbAbsences(int $nbAbsences): self
    {
        $this->nbAbsences = $nbAbsences;

        return $this;
    }

    public function getCommentaire(): ?string
    {
        return $this->commentaire;
    }

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
        return $this->scolaritePromo;
    }

    public function setScolaritePromo(?ScolaritePromo $scolaritePromo): self
    {
        $this->scolaritePromo = $scolaritePromo;

        return $this;
    }

    public function getMoyennesMatieres(): ?array
    {
        return $this->moyennesMatieres;
    }

    public function setMoyennesMatieres(array $moyennesMatieres): self
    {
        $this->moyennesMatieres = $moyennesMatieres;

        return $this;
    }

    public function getMoyennesUes(): ?array
    {
        return $this->moyennesUes;
    }

    public function setMoyennesUes(array $moyennesUes): self
    {
        $this->moyennesUes = $moyennesUes;

        return $this;
    }

    public function getMoyennesUesById($ue): ?array
    {
        return \array_key_exists($ue, $this->moyennesUes) ? $this->moyennesUes[$ue] : [];
    }

    public function getRang(): ?int
    {
        return $this->rang;
    }

    public function setRang(int $rang): self
    {
        $this->rang = $rang;

        return $this;
    }

    public function getStyle($note)
    {
        if ($note < 8) {
            return 'badge badge-danger';
        }

        if ($note < 10) {
            return 'badge badge-warning';
        }

        return 'notenormale';
    }

    public function getMoyennesUeSousComm($idUe)
    {
        $ue = $this->getMoyennesUesById($idUe);
        if ([] !== $ue) {
            return [
                'style' => $this->getStyle($ue['moyenne']),
                'moyenne' => $ue['moyenne'],
            ];
        }

        return [
            'style' => 'notenormale',
            'moyenne' => -0.01,
        ];
    }
}
