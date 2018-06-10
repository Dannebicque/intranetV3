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

    public const TABICONE = array('carnet.added' => 'ti-bookmark-alt');
    public const TABCOLOR = array('carnet.added' => 'warning');

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

    public function getDateTexte(): string
    {
        //todo: calculer la date à partir de maintenant
        return 'just now,,,'; //app de twig ?
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

    public function icone()
    {

        return self::TABICONE[$this->type];
    }

    public function color()
    {

        return self::TABCOLOR[$this->type];
    }
}
