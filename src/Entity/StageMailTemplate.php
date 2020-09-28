<?php
// Copyright (c) 2020. | David Annebicque | IUT de Troyes  - All Rights Reserved
// @file /Users/davidannebicque/htdocs/intranetV3/src/Entity/StageMailTemplate.php
// @author davidannebicque
// @project intranetV3
// @lastUpdate 28/09/2020 08:41

namespace App\Entity;

use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass="App\Repository\StageMailTemplateRepository")
 */
class StageMailTemplate
{
    public const CHAMPS_PUBLIPOSTAGE = [
        '{{civilite_court_etudiant}}'    => '{{stageEtudiant.etudiant.civilite}}',
        '{{civilite_etudiant}}'          => '{{stageEtudiant.etudiant.civiliteLong}}',
        '{{nom_etudiant}}'               => '{{stageEtudiant.etudiant.nom}}',
        '{{entreprise}}'                 => '{{stageEtudiant.entreprise.raisonSociale}}',
        '{{civilite_court_tuteur}}'      => '{{stageEtudiant.tuteur.civilite}}',
        '{{civilite_tuteur}}'            => '{{stageEtudiant.tuteur.civiliteLong}}',
        '{{prenom_tuteur}}'              => '{{stageEtudiant.tuteur.prenom}}',
        '{{nom_tuteur}}'                 => '{{stageEtudiant.tuteur.nom}}',
        '{{civilite_court_tuteur_univ}}' => '{{stageEtudiant.tuteurUniversitaire.civilite}}',
        '{{civilite_tuteur_univ}}'       => '{{stageEtudiant.tuteurUniversitaire.civiliteLong}}',
        '{{prenom_tuteur_univ}}'         => '{{stageEtudiant.tuteurUniversitaire.prenom}}',
        '{{nom_tuteur_univ}}'            => '{{stageEtudiant.tuteurUniversitaire.nom}}',
        '{{date_debut_stage}}'           => '{{stageEtudiant.dateDebutStageFr}}',
        '{{date_fin_stage}}'             => '{{stageEtudiant.dateDebutStageFr}}',
        '{{nom_periode_stage}}'          => '{{stageEtudiant.stagePeriode.libelle}}'
    ];


    /**
     * @ORM\Id()
     * @ORM\GeneratedValue()
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\ManyToOne(targetEntity="App\Entity\StagePeriode", inversedBy="stageMailTemplates")
     */
    private $stagePeriode;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $subject;

    /**
     * @ORM\Column(type="string", length=50)
     */
    private $event;

    /**
     * @ORM\OneToOne(targetEntity="App\Entity\TwigTemplate", cascade={"persist", "remove"})
     */
    private $twigTemplate;

    public function getId()
    {
        return $this->id;
    }

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
