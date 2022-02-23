<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Entity/StageMailTemplate.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 25/06/2021 10:28
 */

namespace App\Entity;

use App\Repository\StageMailTemplateRepository;
use Doctrine\DBAL\Types\Types;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: StageMailTemplateRepository::class)]
class StageMailTemplate extends BaseEntity
{
    public const CHAMPS_PUBLIPOSTAGE = [
        '{{civilite_court_etudiant}}' => '{{stageEtudiant.etudiant.civilite}}',
        '{{civilite_etudiant}}' => '{{stageEtudiant.etudiant.civiliteLong}}',
        '{{prenom_etudiant}}' => '{{stageEtudiant.etudiant.prenom}}',
        '{{nom_etudiant}}' => '{{stageEtudiant.etudiant.nom}}',
        '{{entreprise}}' => '{{stageEtudiant.entreprise.raisonSociale}}',
        '{{civilite_court_responsable}}' => '{{stageEtudiant.entreprise.responsable.civilite}}',
        '{{civilite_responsable}}' => '{{stageEtudiant.entreprise.responsable.civiliteLong}}',
        '{{prenom_reponsable}}' => '{{stageEtudiant.entreprise.responsable.prenom}}',
        '{{nom_responsable}}' => '{{stageEtudiant.entreprise.responsable.nom}}',
        '{{civilite_court_tuteur}}' => '{{stageEtudiant.tuteur.civilite}}',
        '{{civilite_tuteur}}' => '{{stageEtudiant.tuteur.civiliteLong}}',
        '{{prenom_tuteur}}' => '{{stageEtudiant.tuteur.prenom}}',
        '{{nom_tuteur}}' => '{{stageEtudiant.tuteur.nom}}',
        '{{civilite_court_tuteur_univ}}' => '{{stageEtudiant.tuteurUniversitaire.civilite}}',
        '{{civilite_tuteur_univ}}' => '{{stageEtudiant.tuteurUniversitaire.civiliteLong}}',
        '{{prenom_tuteur_univ}}' => '{{stageEtudiant.tuteurUniversitaire.prenom}}',
        '{{nom_tuteur_univ}}' => '{{stageEtudiant.tuteurUniversitaire.nom}}',
        '{{date_debut_stage}}' => '{{stageEtudiant.dateDebutStageFr}}',
        '{{date_fin_stage}}' => '{{stageEtudiant.dateDebutStageFr}}',
        '{{nom_periode_stage}}' => '{{stageEtudiant.stagePeriode.libelle}}',
    ];

    #[ORM\ManyToOne(targetEntity: StagePeriode::class, inversedBy: 'stageMailTemplates')]
    private ?StagePeriode $stagePeriode;

    #[ORM\Column(type: Types::STRING, length: 255)]
    private ?string $subject;

    #[ORM\Column(type: Types::STRING, length: 50)]
    private ?string $event;

    #[ORM\OneToOne(targetEntity: TwigTemplate::class, cascade: ['persist', 'remove'])]
    private ?TwigTemplate $twigTemplate;

    public function getStagePeriode(): ?StagePeriode
    {
        return $this->stagePeriode;
    }

    public function setStagePeriode(?StagePeriode $stagePeriode): self
    {
        $this->stagePeriode = $stagePeriode;

        return $this;
    }

    public function getSubject(): ?string
    {
        return $this->subject;
    }

    public function setSubject(string $subject): self
    {
        $this->subject = $subject;

        return $this;
    }

    public function getEvent(): ?string
    {
        return $this->event;
    }

    public function setEvent(string $event): self
    {
        $this->event = $event;

        return $this;
    }

    public function getTwigTemplate(): ?TwigTemplate
    {
        return $this->twigTemplate;
    }

    public function setTwigTemplate(?TwigTemplate $twigTemplate): self
    {
        $this->twigTemplate = $twigTemplate;

        return $this;
    }
}
