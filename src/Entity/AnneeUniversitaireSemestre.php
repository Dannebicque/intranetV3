<?php
/*
 * Copyright (c) 2022. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Entity/AnneeUniversitaireSemestre.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 19/05/2022 14:37
 */

namespace App\Entity;

use App\Repository\AnneeUniversitaireSemestreRepository;
use Doctrine\DBAL\Types\Types;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: AnneeUniversitaireSemestreRepository::class)]
class AnneeUniversitaireSemestre extends BaseEntity
{
    #[ORM\ManyToOne(targetEntity: AnneeUniversitaire::class, inversedBy: 'anneeUniversitaireSemestres')]
    private ?AnneeUniversitaire $anneeUniversitaire = null;

    #[ORM\ManyToOne(targetEntity: Semestre::class, inversedBy: 'anneeUniversitaireSemestres')]
    private ?Semestre $semestre = null;

    #[ORM\ManyToOne(targetEntity: Ppn::class, inversedBy: 'anneeUniversitaireSemestres')]
    private ?Ppn $ppn = null;

    #[ORM\Column(type: Types::STRING, length: 255, nullable: true)]
    private ?string $commentaire = '';

    public function getAnneeUniversitaire(): ?AnneeUniversitaire
    {
        return $this->anneeUniversitaire;
    }

    public function setAnneeUniversitaire(?AnneeUniversitaire $anneeUniversitaire): self
    {
        $this->anneeUniversitaire = $anneeUniversitaire;

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

    public function getPpn(): ?Ppn
    {
        return $this->ppn;
    }

    public function setPpn(?Ppn $ppn): self
    {
        $this->ppn = $ppn;

        return $this;
    }

    public function getCommentaire(): ?string
    {
        return $this->commentaire;
    }

    public function setCommentaire(?string $commentaire): self
    {
        $this->commentaire = $commentaire;

        return $this;
    }
}
