<?php
/*
 * Copyright (c) 2023. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Entity/Scolarite.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 28/07/2023 18:28
 */

namespace App\Entity;

use App\Entity\Traits\LifeCycleTrait;
use App\Entity\Traits\UuidTrait;
use App\Enums\DecisionSemestreEnum;
use App\Repository\ScolariteRepository;
use App\Utils\Tools;
use Doctrine\DBAL\Types\Types;
use Doctrine\ORM\Mapping as ORM;
use Ramsey\Uuid\Uuid;
use Ramsey\Uuid\UuidInterface;
use function array_key_exists;

#[ORM\Entity(repositoryClass: ScolariteRepository::class)]
#[ORM\HasLifecycleCallbacks]
class Scolarite extends BaseEntity
{
    use UuidTrait;
    use LifeCycleTrait;

    #[ORM\Column(type: Types::INTEGER)]
    private ?int $ordre = null;

    #[ORM\ManyToOne(targetEntity: Semestre::class)]
    private ?Semestre $semestre = null;

    #[ORM\Column(type: Types::STRING, enumType: DecisionSemestreEnum::class, length: 10)]
    private DecisionSemestreEnum $decision = DecisionSemestreEnum::SEMESTRE_EN_COURS;

    #[ORM\Column(type: Types::STRING, length: 10, nullable: true)]
    private ?string $proposition = null;

    #[ORM\Column(type: Types::FLOAT)]
    private ?float $moyenne = 0;

    #[ORM\ManyToOne(targetEntity: Etudiant::class, inversedBy: 'scolarites')]
    private ?Etudiant $etudiant = null;

    #[ORM\Column(type: Types::INTEGER)]
    private int $nbAbsences = 0;

    #[ORM\Column(type: Types::TEXT, nullable: true)]
    private ?string $commentaire = null;

    #[ORM\ManyToOne(targetEntity: AnneeUniversitaire::class, inversedBy: 'scolarites')]
    private ?AnneeUniversitaire $anneeUniversitaire = null;

    #[ORM\Column(type: Types::BOOLEAN)]
    private bool $diffuse = false;

    #[ORM\ManyToOne(targetEntity: ScolaritePromo::class, inversedBy: 'scolarites')]
    private ?ScolaritePromo $scolaritePromo = null;

    #[ORM\Column(type: Types::ARRAY, nullable: true)]
    private array $moyennesMatieres = [];

    #[ORM\Column(type: Types::ARRAY, nullable: true)]
    private array $moyennesUes = [];

    #[ORM\Column(type: Types::INTEGER)]
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

    public function setUuid(UuidInterface $uuid): self
    {
        $this->uuid = $uuid;

        return $this;
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

    public function getDecision(): ?DecisionSemestreEnum
    {
        return $this->decision;
    }

    public function setDecision(DecisionSemestreEnum $decision): self
    {
        $this->decision = $decision;

        return $this;
    }

    public function getProposition(): ?string
    {
        return $this->proposition;
    }

    public function setProposition(?string $proposition = '?'): self
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

    public function getRang(): ?int
    {
        return $this->rang;
    }

    public function setRang(int $rang): self
    {
        $this->rang = $rang;

        return $this;
    }

    public function getMoyennesUeSousComm(int $idUe): array
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

    public function getMoyennesUesById(int $ue): ?array
    {
        return array_key_exists($ue, $this->moyennesUes) ? $this->moyennesUes[$ue] : [];
    }

    public function getStyle(float $note): string
    {
        if ($note < 8) {
            return 'badge bg-danger';
        }

        if ($note < 10) {
            return 'badge bg-warning';
        }

        return 'notenormale';
    }
}
