<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Entity/AbsenceEtatAppel.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 10/09/2021 20:42
 */

namespace App\Entity;

use App\DTO\EvenementEdt;
use App\Entity\Traits\LifeCycleTrait;
use App\Entity\Traits\MatiereTrait;
use App\Repository\AbsenceEtatAppelRepository;
use Carbon\CarbonInterface;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass=AbsenceEtatAppelRepository::class)
 * @ORM\HasLifecycleCallbacks()
 */
class AbsenceEtatAppel extends BaseEntity
{
    use LifeCycleTrait;
    use MatiereTrait;
    public const SAISIE_SANS_ABSENT = 'pas-absent';
    public const SAISIE_AVEC_ABSENT = 'des-absent';

    /**
     * @ORM\Column(type="date")
     */
    private ?CarbonInterface $date = null;

    /**
     * @ORM\Column(type="time")
     */
    private ?CarbonInterface $heure;

    /**
     * @ORM\ManyToOne(targetEntity=Personnel::class, inversedBy="absenceEtatAppels")
     */
    private ?Personnel $personnel;

    /**
     * @ORM\ManyToOne(targetEntity=Groupe::class, inversedBy="absenceEtatAppels")
     */
    private ?Groupe $groupe;

    /**
     * @ORM\Column(type="string", length=10)
     */
    private ?string $type_saisie;

    /**
     * @ORM\ManyToOne(targetEntity=Semestre::class, inversedBy="absenceEtatAppels")
     */
    private ?Semestre $semestre;

    public function getDate(): ?CarbonInterface
    {
        return $this->date;
    }

    public function setDate(CarbonInterface $date): self
    {
        $this->date = $date;

        return $this;
    }

    public function getHeure(): ?CarbonInterface
    {
        return $this->heure;
    }

    public function setHeure(CarbonInterface $heure): self
    {
        $this->heure = $heure;

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

    public function getGroupe(): ?Groupe
    {
        return $this->groupe;
    }

    public function setGroupe(?Groupe $groupe): self
    {
        $this->groupe = $groupe;

        return $this;
    }

    public function getTypeSaisie(): ?string
    {
        return $this->type_saisie;
    }

    public function setTypeSaisie(string $type_saisie): self
    {
        $this->type_saisie = $type_saisie;

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

    public function appelFait()
    {
        return $this->getDate()?->format('dmY').'_'.$this->getTypeIdMatiere().'_'.$this->getHeure().'_'.$this->getGroupe()?->getId();
    }

    public function setEvent(EvenementEdt $event, $typeSaisie)
    {
        $this->setDate($event->dateObjet);
        $this->setIdMatiere($event->getIdMatiere());
        $this->setSemestre($event->semestre);
        $this->setGroupe($event->groupeObjet);
        $this->setHeure($event->heureDebut);
        $this->setPersonnel($event->personnelObjet);
        $this->setTypeSaisie($typeSaisie);
        $this->setTypeMatiere($event->getTypeMatiere());

        return $this;
    }
}
