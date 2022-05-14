<?php
/*
 * Copyright (c) 2022. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Entity/AbstractFicheSuivi.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 14/05/2022 10:52
 */

namespace App\Entity;

use App\Entity\Traits\LifeCycleTrait;
use Carbon\CarbonInterface;
use Doctrine\DBAL\Types\Types;
use Doctrine\ORM\Mapping as ORM;

#[ORM\HasLifecycleCallbacks]
#[ORM\MappedSuperclass]
class AbstractFicheSuivi
{
    use LifeCycleTrait;

    final public const VISITE_PHYSIQUE = 'v';
    final public const VISITE_TELEPHONIQUE = 't';
    protected static array $tabTexte = [
        0 => 'Non applicable',
        1 => 'Faible',
        2 => 'Bonne',
        3 => 'Très Bonne',
        4 => 'Excellente',
    ];

    protected static array $tabTexteM = [
        0 => 'Non applicable',
        1 => 'Faible',
        2 => 'Bon',
        3 => 'Très Bon',
        4 => 'Excellent',
    ];

    #[ORM\Column(type: Types::STRING, length: 1)]
    private string $methode = self::VISITE_PHYSIQUE;

    #[ORM\Column(type: Types::TEXT)]
    private ?string $commentaire = null;

    #[ORM\Column(type: Types::TEXT)]
    private ?string $missions = null;

    #[ORM\Column(type: Types::INTEGER)]
    private ?int $integration = null;

    #[ORM\Column(type: Types::INTEGER)]
    private ?int $initiative = null;

    #[ORM\Column(type: Types::INTEGER)]
    private ?int $adaptation = null;

    #[ORM\Column(type: Types::INTEGER)]
    private ?int $performance = null;

    #[ORM\Column(type: Types::INTEGER)]
    private ?int $delais = null;

    #[ORM\Column(type: Types::INTEGER)]
    private ?int $comportement = null;

    #[ORM\Column(type: Types::DATE_MUTABLE)]
    private ?CarbonInterface $date = null;

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
