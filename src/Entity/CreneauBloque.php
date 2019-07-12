<?php
/**
 * Copyright (C) 7 / 2019 | David annebicque | IUT de Troyes - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetv3/src/Entity/CreneauBloque.php
 * @author     David Annebicque
 * @project intranetv3
 * @date 7/12/19 11:23 AM
 * @lastUpdate 3/6/19 5:50 PM
 */

namespace App\Entity;

use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass="App\Repository\CreneauBloqueRepository")
 */
class CreneauBloque
{
    //tous les créneaux bloqués, hors vacances, récupérés depuis Date ?

    public const TAB_VACANCES = 'va';
    public const TAB_FERIE = 'fe';
    public const TAB_OBLIGATOIRE = 'ob';
    public const TAB_AUTRE = 'au';


    /**
     * @ORM\Id()
     * @ORM\GeneratedValue()
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\ManyToOne(targetEntity="App\Entity\CreneauCours", inversedBy="creneauBloques")
     */
    private $creneau;

    /**
     * @ORM\ManyToOne(targetEntity="App\Entity\Calendrier", inversedBy="creneauBloques")
     */
    private $semaine;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    private $texte;

    /**
     * @ORM\Column(type="boolean")
     */
    private $obligatoire = true;

    /**
     * @ORM\Column(type="string", length=2)
     */
    private $type;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getCreneau(): ?CreneauCours
    {
        return $this->creneau;
    }

    public function setCreneau(?CreneauCours $creneau): self
    {
        $this->creneau = $creneau;

        return $this;
    }

    public function getSemaine(): ?Calendrier
    {
        return $this->semaine;
    }

    public function setSemaine(?Calendrier $semaine): self
    {
        $this->semaine = $semaine;

        return $this;
    }

    public function getTexte(): ?string
    {
        return $this->texte;
    }

    public function setTexte(string $texte): self
    {
        $this->texte = $texte;

        return $this;
    }

    public function getObligatoire(): ?bool
    {
        return $this->obligatoire;
    }

    public function setObligatoire(bool $obligatoire): self
    {
        $this->obligatoire = $obligatoire;

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
}
