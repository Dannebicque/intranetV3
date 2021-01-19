<?php
// Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
// @file /Users/davidannebicque/htdocs/intranetV3/src/Entity/Notification.php
// @author davidannebicque
// @project intranetV3
// @lastUpdate 19/01/2021 12:14

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
    public const ETUDIANT = 'e';
    public const PERSONNEL = 'p';

    public const TABICONE = [
        'carnet.added'                       => 'ti-bookmark-alt',
        'absence.removed'                    => 'ti-bookmark-alt',
        'absence.added'                      => 'ti-bookmark-alt',
        'absence.justified'                  => 'ti-check',
        'decision.rattrapage.acceptee'       => 'ti-check',
        'decision.rattrapage.refusee'        => 'ti-na',
        'chgt.etat_stage_autorise'           => 'ti-info',
        'chgt.etat_stage_depose'             => 'ti-info',
        'chgt.etat_stage_refuse'             => 'ti-danger',
        'chgt.etat_stage_incomplet'          => 'ti-danger',
        'chgt.etat_stage_valide'             => 'ti-info',
        'chgt.etat_stage_convention_envoyee' => 'ti-info',
        'chgt.etat_stage_convention_recue'   => 'ti-info',
        'chgt.emprunt.demande'               => 'ti-info',
        'chgt.emprunt.accepte'               => 'ti-success',
        'chgt.emprunt.refus'                 => 'ti-danger',
        'decision.justificatif.acceptee'     => 'ti-success',
        'decision.justificatif.refuse'       => 'ti-danger'
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
        'decision.justificatif.refuse'       => 'danger'
    ];

    use UuidTrait;

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

    /**
     * @return Etudiant|null
     */
    public function getEtudiant(): ?Etudiant
    {
        return $this->etudiant;
    }

    /**
     * @param Etudiant|null $etudiant
     *
     * @return Notification
     */
    public function setEtudiant(?Etudiant $etudiant): self
    {
        $this->etudiant = $etudiant;

        return $this;
    }

    /**
     * @return null|string
     */
    public function getType(): ?string
    {
        return $this->type;
    }

    /**
     * @param string $type
     *
     * @return Notification
     */
    public function setType(string $type): self
    {
        $this->type = $type;

        return $this;
    }

    /**
     * @return null|string
     */
    public function getUrl(): ?string
    {
        return $this->url;
    }

    /**
     * @param string $url
     *
     * @return Notification
     */
    public function setUrl(string $url): self
    {
        $this->url = $url;

        return $this;
    }

    /**
     * @return bool|null
     */
    public function getLu(): ?bool
    {
        return $this->lu;
    }

    /**
     * @param bool $lu
     *
     * @return Notification
     */
    public function setLu(bool $lu): self
    {
        $this->lu = $lu;

        return $this;
    }

    /**
     * @return null|string
     */
    public function getTypeUser(): ?string
    {
        return $this->typeUser;
    }

    /**
     * @param string $typeUser
     *
     * @return Notification
     */
    public function setTypeUser(string $typeUser): self
    {
        $this->typeUser = $typeUser;

        return $this;
    }

    /**
     * @return Personnel|null
     */
    public function getPersonnel(): ?Personnel
    {
        return $this->personnel;
    }

    /**
     * @param Personnel|null $personnel
     *
     * @return Notification
     */
    public function setPersonnel(?Personnel $personnel): self
    {
        $this->personnel = $personnel;

        return $this;
    }

    /**
     * @return mixed
     */
    public function icone()
    {
        return self::TABICONE[$this->type];
    }

    /**
     * @return mixed
     */
    public function color()
    {
        return self::TABCOLOR[$this->type];
    }
}
