<?php
/*
 * Copyright (c) 2022. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Entity/AlternancePlanning.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 26/05/2022 18:15
 */

namespace App\Entity;

use App\Repository\AlternancePlanningRepository;
use Carbon\CarbonInterface;
use Doctrine\DBAL\Types\Types;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: AlternancePlanningRepository::class)]
class AlternancePlanning extends BaseEntity
{
    #[ORM\ManyToOne(targetEntity: AnneeUniversitaire::class, inversedBy: 'planningAlternances')]
    private ?AnneeUniversitaire $anneeUniversitaire = null;

    #[ORM\Column(type: Types::DATE_MUTABLE)]
    private ?CarbonInterface $date = null;

    #[ORM\Column(type: Types::STRING, length: 10)]
    private ?string $etat = null;

    #[ORM\ManyToOne(targetEntity: Annee::class, inversedBy: 'alternancePlannings')]
    private ?Annee $annee = null;

    public function getAnneeUniversitaire(): ?AnneeUniversitaire
    {
        return $this->anneeUniversitaire;
    }

    public function setAnneeUniversitaire(?AnneeUniversitaire $anneeUniversitaire): self
    {
        $this->anneeUniversitaire = $anneeUniversitaire;

        return $this;
    }

    public function getDate(): ?CarbonInterface
    {
        return $this->date;
    }

    public function setDate(?CarbonInterface $date): self
    {
        $this->date = $date;

        return $this;
    }

    public function getEtat(): ?string
    {
        return $this->etat;
    }

    public function setEtat(?string $etat): self
    {
        $this->etat = $etat;

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
}
