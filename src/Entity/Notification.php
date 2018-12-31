<?php

namespace App\Entity;

use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass="App\Repository\NotificationRepository")
 */
class Notification extends BaseEntity
{
    public const ETUDIANT = 'e';
    public const PERSONNEL = 'p';

    public const TABICONE = array(
        'carnet.added'                       => 'ti-bookmark-alt',
        'absence.removed'                    => 'ti-bookmark-alt',
        'absence.added'                      => 'ti-bookmark-alt',
        'decision.rattrapage.acceptee'       => 'ti-check',
        'decision.rattrapage.refusee'        => 'ti-na',
        'chgt.etat_stage.autorise'           => 'ti-info',
        'chgt.etat_stage.depose'             => 'ti-info',
        'chgt.etat_stage.valide'             => 'ti-info',
        'chgt.etat_stage.convention_envoyee' => 'ti-info',
        'chgt.etat_stage.convention_recue'   => 'ti-info'
    );
    public const TABCOLOR = array(
        'carnet.added'                       => 'info',
        'absence.removed'                    => 'success',
        'absence.added'                      => 'danger',
        'decision.rattrapage.acceptee'       => 'success',
        'decision.rattrapage.refusee'        => 'warning',
        'chgt.etat_stage.autorise'           => 'info',
        'chgt.etat_stage.depose'             => 'info',
        'chgt.etat_stage.valide'             => 'info',
        'chgt.etat_stage.convention_envoyee' => 'info',
        'chgt.etat_stage.convention_recue'   => 'info'
    );

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
