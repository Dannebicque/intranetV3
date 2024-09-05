<?php
/*
 * Copyright (c) 2024. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Entity/Matiere.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 23/02/2024 21:40
 */

namespace App\Entity;

use App\Interfaces\MatiereEntityInterface;
use App\Repository\MatiereRepository;
use App\Utils\Tools;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\DBAL\Types\Types;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Serializer\Annotation\Groups;

#[ORM\Entity(repositoryClass: MatiereRepository::class)]
#[ORM\HasLifecycleCallbacks]
class Matiere extends AbstractMatiere implements MatiereEntityInterface
{
    final public const SOURCE = 'matiere';

    #[Groups(groups: ['matiere_administration'])]
    #[ORM\Column(type: Types::BOOLEAN)]
    private bool $pac = false;

    #[Groups(groups: ['matiere_administration'])]
    #[ORM\Column(type: Types::FLOAT)]
    private float $coefficient = 1;

    #[Groups(groups: ['matiere_administration'])]
    #[ORM\Column(type: Types::FLOAT)]
    private float $nbEcts = 1;

    #[ORM\Column(type: Types::TEXT, nullable: true)]
    private ?string $objectifsModule = null;

    #[ORM\Column(type: Types::TEXT, nullable: true)]
    private ?string $competencesVisees = null;

    #[ORM\Column(type: Types::TEXT, nullable: true)]
    private ?string $contenu = null;

    #[ORM\Column(type: Types::TEXT, nullable: true)]
    private ?string $preRequis = null;

    #[ORM\Column(type: Types::TEXT, nullable: true)]
    private ?string $modalites = null;

    #[ORM\Column(type: Types::TEXT, nullable: true)]
    private ?string $prolongements = null;

    #[ORM\Column(type: Types::TEXT, nullable: true)]
    private ?string $motsCles = null;

    #[ORM\ManyToOne(targetEntity: Ue::class, fetch: 'EAGER', inversedBy: 'matieres')]
    private ?Ue $ue = null;

    #[ORM\ManyToOne(targetEntity: Ppn::class, inversedBy: 'matieres')]
    private ?Ppn $ppn = null;

    #[ORM\ManyToOne(targetEntity: Parcour::class, inversedBy: 'matieres')]
    private ?Parcour $parcours = null;

    #[ORM\ManyToOne(targetEntity: Matiere::class, inversedBy: 'matiereEnfants')]
    private ?Matiere $matiereParent = null;

    /**
     * @var Collection<int, Matiere>
     */
    #[ORM\OneToMany(mappedBy: 'matiereParent', targetEntity: Matiere::class)]
    private Collection $matiereEnfants;

    public function __construct()
    {
        $this->matiereEnfants = new ArrayCollection();
    }

    public function isPac(): bool
    {
        return $this->pac;
    }

    public function getPac(): bool
    {
        return $this->pac;
    }

    public function setPac(bool $pac): void
    {
        $this->pac = $pac;
    }

    public function getNbEcts(): float
    {
        return $this->nbEcts;
    }

    public function setNbEcts(mixed $nbEcts): void
    {
        $this->nbEcts = Tools::convertToFloat($nbEcts);
    }

    public function getObjectifsModule(): ?string
    {
        return $this->objectifsModule;
    }

    public function setObjectifsModule(?string $objectifsModule): void
    {
        $this->objectifsModule = $objectifsModule;
    }

    public function getCompetencesVisees(): ?string
    {
        return $this->competencesVisees;
    }

    public function setCompetencesVisees(?string $competencesVisees): void
    {
        $this->competencesVisees = $competencesVisees;
    }

    public function getContenu(): ?string
    {
        return $this->contenu;
    }

    public function setContenu(?string $contenu): void
    {
        $this->contenu = $contenu;
    }

    public function getPreRequis(): ?string
    {
        return $this->preRequis;
    }

    public function setPreRequis(?string $preRequis): void
    {
        $this->preRequis = $preRequis;
    }

    public function getModalites(): ?string
    {
        return $this->modalites;
    }

    public function setModalites(?string $modalites): void
    {
        $this->modalites = $modalites;
    }

    public function getProlongements(): ?string
    {
        return $this->prolongements;
    }

    public function setProlongements(?string $prolongements): void
    {
        $this->prolongements = $prolongements;
    }

    public function getMotsCles(): ?string
    {
        return $this->motsCles;
    }

    public function setMotsCles(?string $motsCles): void
    {
        $this->motsCles = $motsCles;
    }

    public function getSemestre(): ?Semestre
    {
        if (null !== $this->getUe() && null !== $this->getUe()->getSemestre()) {
            return $this->getUe()->getSemestre();
        }

        return null;
    }

    public function getSemestres(): Collection
    {
        $semestres = new ArrayCollection();
        if (null !== $this->getUe() && null !== $this->getUe()->getSemestre()) {
            $semestres->add($this->getUe()->getSemestre());
        }

        return $semestres;
    }

    public function getUe(): ?Ue
    {
        return $this->ue;
    }

    public function setUe(?Ue $ue): self
    {
        $this->ue = $ue;

        return $this;
    }

    public function getPpn(): ?Ppn
    {
        return $this->ppn;
    }

    public function setPpn(?Ppn $ppn): self
    {
        $this->ppn = $ppn;

        return $this;
    }

    public function getParcours(): ?Parcour
    {
        return $this->parcours;
    }

    public function setParcours(?Parcour $parcours): self
    {
        $this->parcours = $parcours;

        return $this;
    }

    /**
     * @return Collection|Matiere[]
     */
    public function getEnfants(): Collection
    {
        return $this->matiereEnfants;
    }

    public function addEnfant(self $enfant): self
    {
        if (!$this->matiereEnfants->contains($enfant)) {
            $this->matiereEnfants[] = $enfant;
            $enfant->setMatiereParent($this);
        }

        return $this;
    }

    public function removeEnfant(self $enfant): self
    {
        if ($this->matiereEnfants->contains($enfant)) {
            $this->matiereEnfants->removeElement($enfant);
            // set the owning side to null (unless already changed)
            if ($enfant->getMatiereParent() === $this) {
                $enfant->setMatiereParent(null);
            }
        }

        return $this;
    }

    public function getMatiereParent(): ?self
    {
        return $this->matiereParent;
    }

    public function setMatiereParent(?self $matiereParent): self
    {
        $this->matiereParent = $matiereParent;

        return $this;
    }

    public function getJson(): array
    {
        $t = [];
        $t['id'] = $this->getId();
        $t['libelle'] = $this->getLibelle();
        $t['display'] = $this->getUe() ? $this->getUe()->getLibelle() : '-';
        $t['cmFormation'] = $this->getCmFormation();
        $t['tdFormation'] = $this->getTdFormation();
        $t['tpFormation'] = $this->getTpFormation();
        $t['ptutFormation'] = null;
        $t['cmPpn'] = $this->getCmPpn();
        $t['tdPpn'] = $this->getTdPpn();
        $t['tpPpn'] = $this->getTpPpn();
        $t['ptutPpn'] = null;

        return $t;
    }

    /**
     * @return Collection|Matiere[]
     */
    public function getMatiereEnfants(): Collection
    {
        return $this->matiereEnfants;
    }

    public function addMatiereEnfant(self $matiereEnfant): self
    {
        if (!$this->matiereEnfants->contains($matiereEnfant)) {
            $this->matiereEnfants[] = $matiereEnfant;
            $matiereEnfant->setMatiereParent($this);
        }

        return $this;
    }

    public function removeMatiereEnfant(self $matiereEnfant): self
    {
        if ($this->matiereEnfants->contains($matiereEnfant)) {
            $this->matiereEnfants->removeElement($matiereEnfant);
            // set the owning side to null (unless already changed)
            if ($matiereEnfant->getMatiereParent() === $this) {
                $matiereEnfant->setMatiereParent(null);
            }
        }

        return $this;
    }

    public function getCode(): ?string
    {
        return $this->getCodeMatiere();
    }

    public function getCoefficient(): float
    {
        return $this->coefficient;
    }

    public function setCoefficient(mixed $coefficient): void
    {
        $this->coefficient = Tools::convertToFloat($coefficient);
    }

    public function update(string $name, mixed $value): bool
    {
        $method = 'set'.$name;
        if (method_exists($this, $method)) {
            $this->$method(Tools::convertToFloat($value));

            return true;
        }

        return false;
    }
}
