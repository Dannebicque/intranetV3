<?php
// Copyright (C) 11 / 2019 | David annebicque | IUT de Troyes - All Rights Reserved
// @file /Users/davidannebicque/htdocs/intranetv3/src/Entity/StageMailTemplate.php
// @author     David Annebicque
// @project intranetv3
// @date 25/11/2019 10:20
// @lastUpdate 23/11/2019 09:14

namespace App\Entity;

use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass="App\Repository\StageMailTemplateRepository")
 */
class StageMailTemplate
{
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
