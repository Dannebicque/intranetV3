<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Entity/Notification.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 28/06/2021 21:20
 */

namespace App\Entity;

use App\Entity\Traits\LifeCycleTrait;
use App\Entity\Traits\UuidTrait;
use Doctrine\ORM\Mapping as ORM;
use Ramsey\Uuid\Uuid;

/**
 * @ORM\Entity(repositoryClass="App\Repository\NotificationRepository")
 * @ORM\HasLifecycleCallbacks()
 */
class Notification extends BaseEntity
{
    use UuidTrait;
    use LifeCycleTrait;

    public const ETUDIANT = 'e';
    public const PERSONNEL = 'p';

    public const TABICONE = [
        'carnet.added' => 'fas fa-bookmark',
        'absence.removed' => 'fas fa-bookmark',
        'absence.added' => 'fas fa-bookmark',
        'absence.justified' => 'fas fa-check',
        'decision.rattrapage.acceptee' => 'fas fa-check',
        'decision.rattrapage.refusee' => 'fas fa-ban',
        'chgt.etat_stage_autorise' => 'fas fa-info',
        'chgt.etat_stage_depose' => 'fas fa-info',
        'chgt.etat_stage_refuse' => 'fas fa-ban',
        'chgt.etat_stage_incomplet' => 'fas fa-exclamation',
        'chgt.etat_stage_valide' => 'fas fa-info',
        'chgt.etat_stage_convention_envoyee' => 'fas fa-info',
        'chgt.etat_stage_convention_recue' => 'fas fa-info',
        'chgt.emprunt.demande' => 'fas fa-info',
        'chgt.emprunt.accepte' => 'fas fa-check',
        'chgt.emprunt.refus' => 'fas fa-ban',
        'decision.justificatif.acceptee' => 'fas fa-check',
        'decision.justificatif.refuse' => 'fas fa-ban',
    ];
    public const TABCOLOR = [
        'carnet.added' => 'info',
        'absence.removed' => 'success',
        'absence.added' => 'danger',
        'absence.justified' => 'success',
        'decision.rattrapage.acceptee' => 'success',
        'decision.rattrapage.refusee' => 'warning',
        'chgt.etat_stage_autorise' => 'info',
        'chgt.etat_stage_depose' => 'info',
        'chgt.etat_stage_valide' => 'info',
        'chgt.etat_stage_convention_envoyee' => 'info',
        'chgt.etat_stage_convention_recue' => 'info',
        'chgt.etat_stage_refuse' => 'danger',
        'chgt.etat_stage_incomplet' => 'danger',
        'chgt.emprunt.demande' => 'info',
        'chgt.emprunt.accepte' => 'success',
        'chgt.emprunt.refus' => 'danger',
        'decision.justificatif.acceptee' => 'success',
        'decision.justificatif.refuse' => 'danger',
    ];

    /**
     * @ORM\ManyToOne(targetEntity="App\Entity\Etudiant", inversedBy="notifications")
     */
    private ?Etudiant $etudiant;

    /**
     * @ORM\Column(type="string", length=100)
     */
    private ?string $type;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private ?string $url;

    /**
     * @ORM\Column(type="boolean")
     */
    private bool $lu = false;

    /**
     * @ORM\Column(type="string", length=1)
     */
    private ?string $typeUser;

    /**
     * @ORM\ManyToOne(targetEntity="App\Entity\Personnel", inversedBy="notifications")
     */
    private ?Personnel $personnel;

    public function __construct()
    {
        $this->setUuid(Uuid::uuid4());
    }

    public function __clone()
    {
        $this->setUuid(Uuid::uuid4());
    }

    public function getEtudiant(): ?Etudiant
    {
        return $this->etudiant;
    }

    public function setEtudiant(?Etudiant $etudiant): self
    {
        $this->etudiant = $etudiant;

        return $this;
    }

    public function getType(): ?string
    {
        return $this->type;
    }

    public function setType(string $type): self
    {
        $this->type = $type;

        return $this;
    }

    public function getUrl(): ?string
    {
        return $this->url;
    }

    public function setUrl(string $url): self
    {
        $this->url = $url;

        return $this;
    }

    public function getLu(): ?bool
    {
        return $this->lu;
    }

    public function setLu(bool $lu): self
    {
        $this->lu = $lu;

        return $this;
    }

    public function getTypeUser(): ?string
    {
        return $this->typeUser;
    }

    public function setTypeUser(string $typeUser): self
    {
        $this->typeUser = $typeUser;

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

    public function icone(): string
    {
        return array_key_exists($this->type, self::TABICONE) ? self::TABICONE[$this->type] : 'err';
    }

    public function color(): string
    {
        return array_key_exists($this->type, self::TABCOLOR) ? self::TABCOLOR[$this->type] : 'err';
    }
}
