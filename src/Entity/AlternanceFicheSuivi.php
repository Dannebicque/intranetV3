<?php
/**
 * Copyright (C) 8 / 2019 | David annebicque | IUT de Troyes - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetv3/src/Entity/AlternanceFicheSuivi.php
 * @author     David Annebicque
 * @project intranetv3
 * @date 21/08/2019 12:29
 * @lastUpdate 21/08/2019 11:55
 */

namespace App\Entity;

use DateTime;
use DateTimeInterface;
use Doctrine\ORM\Mapping as ORM;
use Exception;

/**
 * @ORM\Entity(repositoryClass="App\Repository\AlternanceFicheSuiviRepository")
 */
class AlternanceFicheSuivi extends BaseEntity
{
    protected static $tabTexte = [1 => 'Faible', 2 => 'Bonne', 3 => 'Très Bonne', 4 => 'Excellente'];
    protected static $tabTexteM = [1 => 'Faible', 2 => 'Bon', 3 => 'Très Bon', 4 => 'Excellent'];

    public const VISITE_PHYSIQUE = 'v';
    public const VISITE_TELEPHONIQUE = 't';

    /**
     * @ORM\Column(type="string", length=1)
     */
    private $methode = 'v';

    /**
     * @ORM\Column(type="text")
     */
    private $commentaire;

    /**
     * @ORM\Column(type="text")
     */
    private $missions;

    /**
     * @ORM\Column(type="integer")
     */
    private $integration;

    /**
     * @ORM\Column(type="integer")
     */
    private $initiative;

    /**
     * @ORM\Column(type="integer")
     */
    private $adaptation;

    /**
     * @ORM\Column(type="integer")
     */
    private $performance;

    /**
     * @ORM\Column(type="integer")
     */
    private $delais;

    /**
     * @ORM\Column(type="integer")
     */
    private $comportement;

    /**
     * @ORM\ManyToOne(targetEntity="App\Entity\Alternance", inversedBy="alternanceFicheSuivis")
     */
    private $alternance;

    /**
     * @ORM\Column(type="date")
     */
    private $date;

    /**
     * AlternanceFicheSuivi constructor.
     *
     * @param $alternance
     *
     * @throws Exception
     */
    public function __construct(Alternance $alternance)
    {
        $this->setAlternance($alternance);
        $this->setDate(new DateTime('now'));
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

    public function getDate(): ?DateTimeInterface
    {
        return $this->date;
    }

    public function setDate(DateTimeInterface $date): self
    {
        $this->date = $date;

        return $this;
    }

    /**
     * Get comportement
     *
     * @return string
     */
    public function getIntegrationLong(): string
    {
        return self::$tabTexte[$this->integration];
    }

    /**
     * Get comportement
     *
     * @return string
     */
    public function getInitiativeLong(): string
    {
        return self::$tabTexte[$this->initiative];
    }

    /**
     * Get comportement
     *
     * @return string
     */
    public function getAdaptationLong(): string
    {
        return self::$tabTexte[$this->adaptation];
    }

    /**
     * Get comportement
     *
     * @return string
     */
    public function getPerformanceLong(): string
    {
        return self::$tabTexteM[$this->performance];
    }

    /**
     * Get comportement
     *
     * @return string
     */
    public function getDelaisLong(): string
    {
        return self::$tabTexteM[$this->delais];
    }

    /**
     * Get comportement
     *
     * @return string
     */
    public function getComportementLong(): string
    {
        return self::$tabTexteM[$this->comportement];
    }

    public function getMethodeLong(): ?string
    {
        switch ($this->methode) {
            case 'v' :
                return 'Visite dans l\'entreprise';
            case 't':
                return 'Entretien téléphonique';
            default:
                return '-';
        }
    }
}
