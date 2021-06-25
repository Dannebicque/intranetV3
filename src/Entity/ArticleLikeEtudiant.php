<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Entity/ArticleLikeEtudiant.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 05/06/2021 18:44
 */

namespace App\Entity;

use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass="App\Repository\ArticleLikeEtudiantRepository")
 * @ORM\HasLifecycleCallbacks()
 */
class ArticleLikeEtudiant extends ArticleLike
{
    /**
     * @ORM\ManyToOne(targetEntity="App\Entity\Etudiant", inversedBy="articlesLike")
     */
    private Etudiant $etudiant;

    /**
     * EmpruntEtudiant constructor.
     *
     */
    public function __construct(Etudiant $etudiant, Article $article)
    {
        $this->etudiant = $etudiant;
        $this->setArticle($article);
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
}
