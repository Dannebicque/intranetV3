<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Entity/Notification.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 05/03/2021 11:33
 */

namespace App\Entity;

use App\Entity\Traits\UuidTrait;
use Doctrine\ORM\Mapping as ORM;
use Exception;
use Ramsey\Uuid\Uuid;

/**
 * @ORM\Entity(repositoryClass="App\Repository\NotificationRepository")
 */
class Notification extends BaseEntity
{
    use UuidTrait;
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
        'carnet.added'                       => 'info',
        'absence.removed'                    => 'success',
        'absence.added'                      => 'danger',
        'absence.justified'                  => 'success',
        'decision.rattrapage.acceptee'       => 'success',
        'decision.rattrapage.refusee'        => 'warning',
        'chgt.etat_stage_autorise'           => 'info',
        'chgt.etat_stage_depose'             => 'info',
        'chgt.etat_stage_valide'             => 'info',
        'chgt.etat_stage_convention_envoyee' => 'info',
        'chgt.etat_stage_convention_recue'   => 'info',
        'chgt.etat_stage_refuse'             => 'danger',
        'chgt.etat_stage_incomplet'          => 'danger',
        'chgt.emprunt.demande'               => 'info',
        'chgt.emprunt.accepte'               => 'success',
        'chgt.emprunt.refus'                 => 'danger',
        'decision.justificatif.acceptee'     => 'success',
        'decision.justificatif.refuse'       => 'danger',
    ];

    /**
     * @ORM\ManyToOne(targetEntity="App\Entity\Etudiant", inversedBy="notifications")
     */
    private $etudiant;

    /**
     * @ORM\Column(type="string", length=100)
     */
    private $type;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $url;

    /**
     * @ORM\Column(type="boolean")
     */
    private $lu = false;

    /**
     * @ORM\Column(type="string", length=1)
     */
    private $typeUser;

    /**
     * @ORM\ManyToOne(targetEntity="App\Entity\Personnel", inversedBy="notifications")
     */
    private $personnel;

    /**
     * Absence constructor.
     *
     * @throws Exception
     */
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

    /**
     * @return Notification
     */
    public function setEtudiant(?Etudiant $etudiant): self
    {
        $this->etudiant = $etudiant;

        return $this;
    }

    public function getType(): ?string
    {
        return $this->type;
    }

    /**
     * @return Notification
     */
    public function setType(string $type): self
    {
        $this->type = $type;

        return $this;
    }

    public function getUrl(): ?string
    {
        return $this->url;
    }

    /**
     * @return Notification
     */
    public function setUrl(string $url): self
    {
        $this->url = $url;

        return $this;
    }

    public function getLu(): ?bool
    {
        return $this->lu;
    }

    /**
     * @return Notification
     */
    public function setLu(bool $lu): self
    {
        $this->lu = $lu;

        return $this;
    }

    public function getTypeUser(): ?string
    {
        return $this->typeUser;
    }

    /**
     * @return Notification
     */
    public function setTypeUser(string $typeUser): self
    {
        $this->typeUser = $typeUser;

        return $this;
    }

    public function getPersonnel(): ?Personnel
    {
        return $this->personnel;
    }

    /**
     * @return Notification
     */
    public function setPersonnel(?Personnel $personnel): self
    {
        $this->personnel = $personnel;

        return $this;
    }

    public function icone()
    {
        return self::TABICONE[$this->type];
    }

    public function color()
    {
        return self::TABCOLOR[$this->type];
    }
}
