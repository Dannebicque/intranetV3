<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Entity/EdtPlanning.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 17/02/2021 19:54
 */

namespace App\Entity;

use Carbon\Carbon;
use Carbon\CarbonInterface;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass="App\Repository\EdtPlanningRepository")
 */
class EdtPlanning
{
    /**
     * @ORM\Id()
     * @ORM\GeneratedValue()
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\Column(type="integer")
     */
    private $jour;

    /**
     * @ORM\Column(type="string", length=30)
     */
    private $salle;

    /**
     * @ORM\Column(type="string", length=20)
     */
    private $ordre = 0;

    /**
     * @ORM\Column(type="integer")
     */
    private $debut;

    /**
     * @ORM\Column(type="integer")
     */
    private $fin;

    /**
     * @ORM\Column(type="integer")
     */
    private $semaine; //semaine réelle...

    /**
     * @ORM\Column(type="boolean")
     */
    private $evaluation;

    /**
     * @ORM\ManyToOne(targetEntity="App\Entity\Semestre")
     */
    private $semestre;

    /**
     * @ORM\ManyToOne(targetEntity="App\Entity\Matiere")
     */
    private $matiere;

    /**
     * @ORM\ManyToOne(targetEntity="App\Entity\Personnel")
     */
    private $intervenant;

    /**
     * @ORM\Column(type="string", length=150, nullable=true)
     */
    private $texte;

    /**
     * @ORM\Column(type="integer")
     */
    private $groupe;

    /**
     * @ORM\Column(type="string", length=10)
     */
    private $type;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    private $commentaire;

    /**
     * @ORM\Column(type="datetime", nullable=true)
     */
    private ?CarbonInterface $date;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getJour(): ?int
    {
        return $this->jour;
    }

    public function setJour(int $jour): self
    {
        $this->jour = $jour;

        return $this;
    }

    public function getSalle(): ?string
    {
        return $this->salle;
    }

    public function setSalle(string $salle): self
    {
        $this->salle = $salle;

        return $this;
    }

    public function getOrdre(): ?string
    {
        return $this->ordre;
    }

    public function setOrdre(string $ordre): self
    {
        $this->ordre = $ordre;

        return $this;
    }

    public function getDebut(): ?int
    {
        return $this->debut;
    }

    public function getDebutTexte(): ?string
    {
        return Constantes::TAB_HEURES[$this->debut];
    }

    public function getFinTexte(): ?string
    {
        return Constantes::TAB_HEURES[$this->fin];
    }

    public function setDebut(int $debut): self
    {
        $this->debut = $debut;

        return $this;
    }

    public function getFin(): ?int
    {
        return $this->fin;
    }

    public function setFin(int $fin): self
    {
        $this->fin = $fin;

        return $this;
    }

    public function getSemaine(): ?int
    {
        return $this->semaine;
    }

    public function setSemaine(int $semaine): self
    {
        $this->semaine = $semaine;

        return $this;
    }

    public function getEvaluation(): ?bool
    {
        return $this->evaluation;
    }

    public function setEvaluation(bool $evaluation): self
    {
        $this->evaluation = $evaluation;

        return $this;
    }

    public function getSemestre(): ?Semestre
    {
        return $this->semestre;
    }

    public function setSemestre(?Semestre $semestre): self
    {
        $this->semestre = $semestre;

        return $this;
    }

    public function getMatiere(): ?Matiere
    {
        return $this->matiere;
    }

    public function setMatiere(?Matiere $matiere): self
    {
        $this->matiere = $matiere;

        return $this;
    }

    public function getIntervenant(): ?Personnel
    {
        return $this->intervenant;
    }

    public function setIntervenant(?Personnel $intervenant): self
    {
        $this->intervenant = $intervenant;

        return $this;
    }

    public function getTexte(): ?string
    {
        return $this->texte;
    }

    public function setTexte(?string $texte): self
    {
        $this->texte = $texte;

        return $this;
    }

    public function getGroupe(): ?int
    {
        return $this->groupe;
    }

    public function setGroupe(int $groupe): self
    {
        $this->groupe = $groupe;

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

    /**
     * @return string
     */
    public function getDisplayGroupe(): ?string
    {
        switch ($this->type) {
            case 'cm':
            case 'CM':
                return 'CM TOUS';
            case 'TD':
            case 'td':
                $tab = ['', 'AB', '', 'CD', '', 'EF', '', 'GH'];

            return 'TD ' . $tab[$this->groupe];
            case 'TP':
            case 'tp':
            return 'TP ' . \chr($this->groupe + 64);
            default:
                return '';
        }
    }

    public function getIntervenantEdt(): string
    {
        if (null !== $this->getIntervenant()) {
            return $this->getIntervenant()->getPrenom()[0] . '. ' . $this->getIntervenant()->getNom();
        }

        return '*';
    }

    public function getDureeTexte(): string
    {
        $d = $this->fin - $this->debut;
        $td = [
            '0h00',
            '0h30',
            '1h00',
            '1h30',
            '2h00',
            '2h30',
            '3h00',
            '3h30',
            '4h00',
            '4h30',
            '5h00',
            '5h30',
            '6h00',
            '6h30',
            '7h00',
            '7h30',
            '8h00',
            '8h30',
            '9h00',
        ];

        return $td[$d];
    }

    /**
     * @return int|float
     */
    public function getDureeInt()
    {
        $d = $this->fin - $this->debut;
        $td = [0, 0.5, 1, 1.5, 2, 2.5, 3, 3.5, 4, 4.5, 5];

        return $td[$d];
    }

    public function getCommentaire(): ?string
    {
        return $this->commentaire;
    }

    public function setCommentaire(?string $commentaire): self
    {
        $this->commentaire = $commentaire;

        return $this;
    }

    public function getDate(): Carbon
    {
        return $this->date;
    }

    public function getDisplayIcal(): string
    {
        if (null !== $this->getMatiere()) {
            return $this->getMatiere()->getLibelle() . '(' . $this->getMatiere()->getCodeMatiere() . ') ' . $this->getDisplayGroupe();
        }

        return $this->getTexte() . ' ' . $this->getDisplayGroupe();
    }

    public function getJson()
    {
        return [
            'id' => $this->getId(),
            'jour' => $this->getJour(),
            'heureDbtInt' => $this->getDebut(),
            'heureFinInt' => $this->getFin(),
            'salle' => $this->getSalle(),
            'typecours' => $this->getType(),
            'texte' => $this->getTexte(),
            'matiereId' => null !== $this->getMatiere() ? $this->getMatiere()->getId() : null,
            'personnelId' => null !== $this->getIntervenant() ? $this->getIntervenant()->getId() : null,
            'groupe' => $this->getGroupe(),
            'groupeId' => $this->getGroupe(),
        ];
    }

    public function setDate(?\DateTimeInterface $date): self
    {
        $this->date = $date;

        return $this;
    }
}
