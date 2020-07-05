<?php
// Copyright (c) 2020. | David Annebicque | IUT de Troyes  - All Rights Reserved
// @file /Users/davidannebicque/htdocs/intranetV3/src/Entity/TrelloTache.php
// @author davidannebicque
// @project intranetV3
// @lastUpdate 05/07/2020 08:09

namespace App\Entity;

use DateTime;
use DateTimeInterface;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;
use Exception;
use Symfony\Component\Serializer\Annotation\Groups;

/**
 * @ORM\Entity(repositoryClass="App\Repository\TrelloTacheRepository")
 */
class TrelloTache extends BaseEntity
{
    /**
     * @ORM\Column(type="string", length=255)
     * @Groups({"trello_administration"})
     */
    private $libelle;

    /**
     * @ORM\Column(type="datetime")
     * @Groups({"trello_administration"})
     */
    private $deadline;

    /**
     * @ORM\ManyToMany(targetEntity="App\Entity\Personnel", inversedBy="trelloTaches")
     * @Groups({"trello_administration"})
     */
    private $personnels;

    /**
     * @ORM\Column(type="text")
     * @Groups({"trello_administration"})
     */
    private $description;

    /**
     * @ORM\ManyToOne(targetEntity="App\Entity\Departement", inversedBy="trelloTaches")
     */
    private $departement;

    /**
     * TrelloTache constructor.
     *
     * @param Departement $departement
     *
     * @throws Exception
     */
    public function __construct(Departement $departement)
    {
        $this->deadline = new DateTime('now');
        $this->departement = $departement;
        $this->personnels = new ArrayCollection();
    }

    /**
     * @return null|string
     */
    public function getLibelle(): ?string
    {
        return $this->libelle;
    }

    /**
     * @param string $libelle
     *
     * @return TrelloTache
     */
    public function setLibelle(string $libelle): self
    {
        $this->libelle = $libelle;

        return $this;
    }

    /**
     * @return DateTimeInterface|null
     */
    public function getDeadline(): ?DateTimeInterface
    {
        return $this->deadline;
    }

    /**
     * @param DateTimeInterface $deadline
     *
     * @return TrelloTache
     */
    public function setDeadline(DateTimeInterface $deadline): self
    {
        $this->deadline = $deadline;

        return $this;
    }

    /**
     * @return Collection|Personnel[]
     */
    public function getPersonnels(): Collection
    {
        return $this->personnels;
    }

    /**
     * @param Personnel $personnel
     *
     * @return TrelloTache
     */
    public function addPersonnel(Personnel $personnel): self
    {
        if (!$this->personnels->contains($personnel)) {
            $this->personnels[] = $personnel;
        }

        return $this;
    }

    /**
     * @param Personnel $personnel
     *
     * @return TrelloTache
     */
    public function removePersonnel(Personnel $personnel): self
    {
        if ($this->personnels->contains($personnel)) {
            $this->personnels->removeElement($personnel);
        }

        return $this;
    }

    /**
     * @return null|string
     */
    public function getDescription(): ?string
    {
        return $this->description;
    }

    /**
     * @param string $description
     *
     * @return TrelloTache
     */
    public function setDescription(string $description): self
    {
        $this->description = $description;

        return $this;
    }

    /**
     * @return Departement|null
     */
    public function getDepartement(): ?Departement
    {
        return $this->departement;
    }

    /**
     * @param Departement|null $departement
     *
     * @return TrelloTache
     */
    public function setDepartement(?Departement $departement): self
    {
        $this->departement = $departement;

        return $this;
    }
}
