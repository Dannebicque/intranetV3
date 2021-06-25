<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Entity/Commentaire.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 05/06/2021 13:04
 */

namespace App\Entity;

use App\Entity\Traits\LifeCycleTrait;
use App\Repository\CommentaireRepository;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass=CommentaireRepository::class)
 * @ORM\HasLifecycleCallbacks()
 */
class Commentaire extends BaseEntity
{
    use LifeCycleTrait;

    /**
     * @ORM\ManyToOne(targetEntity=Etudiant::class, inversedBy="commentaires")
     */
    private Etudiant $etudiant;

    /**
     * @ORM\Column(type="text")
     */
    private ?string $texte;

    public function __construct(Etudiant $etudiant)
    {
        $this->etudiant = $etudiant;
    }

    public function getEtudiant(): ?Etudiant
    {
        return $this->etudiant;
    }

    public function setEtudiant(Etudiant $etudiant): self
    {
        $this->etudiant = $etudiant;

        return $this;
    }

    public function getJson(): array
    {
        return [
            'id' => $this->getId(),
            'commentaire' => $this->getTexte(),
            'created' => $this->getCreated(),
            'updated' => $this->getUpdated(),
            'etudiant' => $this->etudiant->getId(),
        ];
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
}
