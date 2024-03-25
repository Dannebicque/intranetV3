<?php
/*
 * Copyright (c) 2024. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Entity/Groupe.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 24/02/2024 08:51
 */

namespace App\Entity;

use App\Classes\EduSign\GroupeInterface;
use App\Repository\GroupeRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\DBAL\Types\Types;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Serializer\Annotation\Groups;

#[ORM\Entity(repositoryClass: GroupeRepository::class)]
class Groupe extends BaseEntity implements GroupeInterface
{
    #[Groups(groups: ['groupe_administration'])]
    #[ORM\Column(type: Types::STRING, length: 50)]
    private ?string $libelle = null;

    #[Groups(groups: ['groupe_administration'])]
    #[ORM\ManyToOne(targetEntity: TypeGroupe::class, inversedBy: 'groupes')]
    private ?TypeGroupe $typeGroupe = null;

    #[Groups(groups: ['groupe_administration'])]
    #[ORM\Column(type: Types::STRING, length: 50, nullable: true)]
    private ?string $codeApogee = '';

    #[Groups(groups: ['groupe_administration'])]
    #[ORM\ManyToOne(targetEntity: Groupe::class, inversedBy: 'enfants')]
    private ?Groupe $parent = null;

    #[ORM\ManyToMany(targetEntity: Etudiant::class, mappedBy: 'groupes')]
    #[ORM\OrderBy(value: ['nom' => 'asc', 'prenom' => 'asc'])]
    private Collection $etudiants;

    /**
     * @var Collection<int, Groupe>
     */
    #[ORM\OneToMany(mappedBy: 'parent', targetEntity: Groupe::class, cascade: ['remove'])]
    private Collection $enfants;

    #[Groups(groups: ['groupe_administration'])]
    #[ORM\Column(type: Types::INTEGER)]
    private ?int $ordre = null;

    #[Groups(groups: ['groupe_administration'])]
    #[ORM\ManyToOne(targetEntity: Parcour::class, inversedBy: 'groupes')]
    private ?Parcour $parcours = null;

    /**
     * @var Collection<AbsenceEtatAppel>
     */
    #[ORM\OneToMany(mappedBy: 'groupe', targetEntity: AbsenceEtatAppel::class)]
    private Collection $absenceEtatAppels;

    /**
     * @var Collection<ApcRessourceEnfants>
     */
    #[ORM\ManyToMany(targetEntity: ApcRessourceEnfants::class, mappedBy: 'groupes')]
    private Collection $apcRessourceEnfants;

    #[ORM\ManyToOne(inversedBy: 'groupes')]
    private ?ApcParcours $apcParcours = null;

    #[ORM\OneToMany(mappedBy: 'groupe', targetEntity: PlanCoursHistoriqueEdt::class)]
    private Collection $planCoursHistoriqueEdts;

    #[ORM\Column(length: 255, nullable: true)]
    private ?string $idEduSign = null;

    public function __construct()
    {
        $this->etudiants = new ArrayCollection();
        $this->enfants = new ArrayCollection();
        $this->absenceEtatAppels = new ArrayCollection();
        $this->apcRessourceEnfants = new ArrayCollection();
        $this->planCoursHistoriqueEdts = new ArrayCollection();
    }

    public function getCodeApogee(): ?string
    {
        return $this->codeApogee;
    }

    public function setCodeApogee(?string $codeApogee): self
    {
        $this->codeApogee = $codeApogee;

        return $this;
    }

    /**
     * @return Collection|Etudiant[]
     */
    public function getEtudiants(): Collection
    {
        return $this->etudiants;
    }

    public function addEtudiant(Etudiant $etudiant): self
    {
        if (!$this->etudiants->contains($etudiant)) {
            $this->etudiants[] = $etudiant;
            $etudiant->addGroupe($this);
        }

        return $this;
    }

    public function removeEtudiant(Etudiant $etudiant): self
    {
        if ($this->etudiants->contains($etudiant)) {
            $this->etudiants->removeElement($etudiant);
            $etudiant->removeGroupe($this);
        }

        return $this;
    }

    /**
     * @return Collection|Groupe[]
     */
    public function getEnfants(): Collection
    {
        return $this->enfants;
    }

    public function addGroupe(self $groupe): self
    {
        if (!$this->enfants->contains($groupe)) {
            $this->enfants[] = $groupe;
            $groupe->setParent($this);
        }

        return $this;
    }

    public function removeGroupe(self $groupe): self
    {
        if ($this->enfants->contains($groupe)) {
            $this->enfants->removeElement($groupe);
            // set the owning side to null (unless already changed)
            if ($groupe->getParent() === $this) {
                $groupe->setParent(null);
            }
        }

        return $this;
    }

    public function getParent(): ?self
    {
        return $this->parent;
    }

    public function setParent(?self $parent): self
    {
        $this->parent = $parent;

        return $this;
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

    public function getParcours(): ?Parcour
    {
        return $this->parcours;
    }

    public function setParcours(?Parcour $parcours): self
    {
        $this->parcours = $parcours;

        return $this;
    }

    public function addEnfant(self $enfant): self
    {
        if (!$this->enfants->contains($enfant)) {
            $this->enfants[] = $enfant;
            $enfant->setParent($this);
        }

        return $this;
    }

    public function removeEnfant(self $enfant): self
    {
        if ($this->enfants->contains($enfant)) {
            $this->enfants->removeElement($enfant);
            // set the owning side to null (unless already changed)
            if ($enfant->getParent() === $this) {
                $enfant->setParent(null);
            }
        }

        return $this;
    }

    public function getDisplaySemestre(): string
    {
        //todo: a revoir, plus de semestre dans le groupe. Ou est-ce utilisé ?
        if (null !== $this->getTypeGroupe() && null !== $this->getTypeGroupe()->getSemestre()) {
            return $this->getTypeGroupe()->getSemestre()->display().' | '.$this->getLibelle();
        }

        return '-Err Semestre-';
    }

    public function getTypeGroupe(): ?TypeGroupe
    {
        return $this->typeGroupe;
    }

    public function setTypeGroupe(?TypeGroupe $typeGroupe): self
    {
        $this->typeGroupe = $typeGroupe;

        return $this;
    }

    public function getLibelle(): ?string
    {
        return $this->libelle;
    }

    public function setLibelle(string $libelle): self
    {
        $this->libelle = $libelle;

        return $this;
    }

    public function getDisplay(): string
    {
        if (null !== $this->getTypeGroupe()) {
            return $this->getTypeGroupe()->getLibelle().' '.$this->getLibelle();
        }

        return '-Err Semestre-';
    }

    /**
     * @return Collection|AbsenceEtatAppel[]
     */
    public function getAbsenceEtatAppels(): Collection
    {
        return $this->absenceEtatAppels;
    }

    public function addAbsenceEtatAppel(AbsenceEtatAppel $absenceEtatAppel): self
    {
        if (!$this->absenceEtatAppels->contains($absenceEtatAppel)) {
            $this->absenceEtatAppels[] = $absenceEtatAppel;
            $absenceEtatAppel->setGroupe($this);
        }

        return $this;
    }

    public function removeAbsenceEtatAppel(AbsenceEtatAppel $absenceEtatAppel): self
    {
        // set the owning side to null (unless already changed)
        if ($this->absenceEtatAppels->removeElement($absenceEtatAppel) && $absenceEtatAppel->getGroupe() === $this) {
            $absenceEtatAppel->setGroupe(null);
        }

        return $this;
    }

    /**
     * @return Collection<int, ApcRessourceEnfants>
     */
    public function getApcRessourceEnfants(): Collection
    {
        return $this->apcRessourceEnfants;
    }

    public function addApcRessourceEnfant(ApcRessourceEnfants $apcRessourceEnfant): self
    {
        if (!$this->apcRessourceEnfants->contains($apcRessourceEnfant)) {
            $this->apcRessourceEnfants[] = $apcRessourceEnfant;
            $apcRessourceEnfant->addGroupe($this);
        }

        return $this;
    }

    public function removeApcRessourceEnfant(ApcRessourceEnfants $apcRessourceEnfant): self
    {
        if ($this->apcRessourceEnfants->removeElement($apcRessourceEnfant)) {
            $apcRessourceEnfant->removeGroupe($this);
        }

        return $this;
    }

    public function getApcParcours(): ?ApcParcours
    {
        return $this->apcParcours;
    }

    public function setApcParcours(?ApcParcours $apcParcours): self
    {
        $this->apcParcours = $apcParcours;

        return $this;
    }

    /**
     * @return Collection<int, PlanCoursHistoriqueEdt>
     */
    public function getPlanCoursHistoriqueEdts(): Collection
    {
        return $this->planCoursHistoriqueEdts;
    }

    public function addPlanCoursHistoriqueEdt(PlanCoursHistoriqueEdt $planCoursHistoriqueEdt): self
    {
        if (!$this->planCoursHistoriqueEdts->contains($planCoursHistoriqueEdt)) {
            $this->planCoursHistoriqueEdts->add($planCoursHistoriqueEdt);
            $planCoursHistoriqueEdt->setGroupe($this);
        }

        return $this;
    }

    public function removePlanCoursHistoriqueEdt(PlanCoursHistoriqueEdt $planCoursHistoriqueEdt): self
    {
        // set the owning side to null (unless already changed)
        if ($this->planCoursHistoriqueEdts->removeElement($planCoursHistoriqueEdt) && $planCoursHistoriqueEdt->getGroupe() === $this) {
            $planCoursHistoriqueEdt->setGroupe(null);
        }

        return $this;
    }

    public function inParcoursOrOption(\App\DTO\Matiere $matiere): bool
    {
        if ($matiere->apcParcours === null && $matiere->mutualisee === true) {
            return true; //todo: attention ne pas afficher les groupes des parcours FC si FI et inversement ???
            //todo: tester via le diplôme ?
        }

        if (null === $this->getApcParcours() && null === $this->getParcours()) {
            return true;
        }

        if (null !== $matiere->apcParcours && null !== $this->getApcParcours()) {
            return $matiere->apcParcours->contains($this->getApcParcours());
        }

        if (null !== $matiere->parcours && null !== $this->getParcours()) {
            return $this->getParcours()->getId() === $matiere->parcours->getId();
        }

        return false;
    }

    public function getIdEduSign(): ?string
    {
        return $this->idEduSign;
    }

    public function setIdEduSign(?string $idEduSign): static
    {
        $this->idEduSign = $idEduSign;

        return $this;
    }
}
