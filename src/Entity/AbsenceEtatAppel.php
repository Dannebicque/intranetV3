<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Entity/AbsenceEtatAppel.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 26/07/2021 16:06
 */

namespace App\Entity;

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
    public const SAISIE_SANS_ABSENT = 'pas-absent';
    public const SAISIE_AVEC_ABSENT = 'des-absent';

    use LifeCycleTrait;
    use MatiereTrait;

    /**
     * @ORM\Column(type="date")
     */
    private ?CarbonInterface $date;

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
    private $semestre;

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
}
