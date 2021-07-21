<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Entity/AlternanceFicheSuivi.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 29/06/2021 17:48
 */

namespace App\Entity;

use App\Entity\Traits\LifeCycleTrait;
use Carbon\Carbon;
use Carbon\CarbonInterface;
use Doctrine\ORM\Mapping as ORM;
use Exception;

/**
 * @ORM\Entity(repositoryClass="App\Repository\AlternanceFicheSuiviRepository")
 * @ORM\HasLifecycleCallbacks()
 */
class AlternanceFicheSuivi extends BaseEntity
{
    use LifeCycleTrait;

    protected static array $tabTexte = [1 => 'Faible', 2 => 'Bonne', 3 => 'Très Bonne', 4 => 'Excellente'];
    protected static array $tabTexteM = [1 => 'Faible', 2 => 'Bon', 3 => 'Très Bon', 4 => 'Excellent'];

    public const VISITE_PHYSIQUE = 'v';
    public const VISITE_TELEPHONIQUE = 't';

    /**
     * @ORM\Column(type="string", length=1)
     */
    private string $methode = self::VISITE_PHYSIQUE;

    /**
     * @ORM\Column(type="text")
     */
    private ?string $commentaire;

    /**
     * @ORM\Column(type="text")
     */
    private ?string $missions;

    /**
     * @ORM\Column(type="integer")
     */
    private ?int $integration;

    /**
     * @ORM\Column(type="integer")
     */
    private ?int $initiative;

    /**
     * @ORM\Column(type="integer")
     */
    private ?int $adaptation;

    /**
     * @ORM\Column(type="integer")
     */
    private ?int $performance;

    /**
     * @ORM\Column(type="integer")
     */
    private ?int $delais;

    /**
     * @ORM\Column(type="integer")
     */
    private ?int $comportement;

    /**
     * @ORM\ManyToOne(targetEntity="App\Entity\Alternance", inversedBy="alternanceFicheSuivis")
     */
    private ?Alternance $alternance;

    /**
     * @ORM\Column(type="date")
     */
    private ?CarbonInterface $date;

    /**
     * @throws Exception
     */
    public function __construct(Alternance $alternance)
    {
        $this->setAlternance($alternance);
        $this->setDate(Carbon::today());
    }

    public function getMethode(): ?string
    {
        return $this->methode;
    }

    public function setMethode(string $methode): self
    {
        $this->methode = $methode;

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

    public function getMissions(): ?string
    {
        return $this->missions;
    }

    public function setMissions(string $missions): self
    {
        $this->missions = $missions;

        return $this;
    }

    public function getIntegration(): ?int
    {
        return $this->integration;
    }

    public function setIntegration(int $integration): self
    {
        $this->integration = $integration;

        return $this;
    }

    public function getInitiative(): ?int
    {
        return $this->initiative;
    }

    public function setInitiative(int $initiative): self
    {
        $this->initiative = $initiative;

        return $this;
    }

    public function getAdaptation(): ?int
    {
        return $this->adaptation;
    }

    public function setAdaptation(int $adaptation): self
    {
        $this->adaptation = $adaptation;

        return $this;
    }

    public function getPerformance(): ?int
    {
        return $this->performance;
    }

    public function setPerformance(int $performance): self
    {
        $this->performance = $performance;

        return $this;
    }

    public function getDelais(): ?int
    {
        return $this->delais;
    }

    public function setDelais(int $delais): self
    {
        $this->delais = $delais;

        return $this;
    }

    public function getComportement(): ?int
    {
        return $this->comportement;
    }

    public function setComportement(int $comportement): self
    {
        $this->comportement = $comportement;

        return $this;
    }

    public function getAlternance(): ?Alternance
    {
        return $this->alternance;
    }

    public function setAlternance(?Alternance $alternance): self
    {
        $this->alternance = $alternance;

        return $this;
    }

    public function getDate(): ?CarbonInterface
    {
        return $this->date;
    }

    public function setDate(CarbonInterface $date): self
    {
        $this->date = $date;

        return $this;
    }

    /**
     * Get comportement.
     */
    public function getIntegrationLong(): string
    {
        return self::$tabTexte[$this->integration];
    }

    /**
     * Get comportement.
     */
    public function getInitiativeLong(): string
    {
        return self::$tabTexte[$this->initiative];
    }

    /**
     * Get comportement.
     */
    public function getAdaptationLong(): string
    {
        return self::$tabTexte[$this->adaptation];
    }

    /**
     * Get comportement.
     */
    public function getPerformanceLong(): string
    {
        return self::$tabTexteM[$this->performance];
    }

    /**
     * Get comportement.
     */
    public function getDelaisLong(): string
    {
        return self::$tabTexteM[$this->delais];
    }

    /**
     * Get comportement.
     */
    public function getComportementLong(): string
    {
        return self::$tabTexteM[$this->comportement];
    }

    public function getMethodeLong(): ?string
    {
        return match ($this->methode) {
            self::VISITE_PHYSIQUE => 'Visite dans l\'entreprise',
            self::VISITE_TELEPHONIQUE => 'Entretien téléphonique',
            default => '-',
        };
    }
}
