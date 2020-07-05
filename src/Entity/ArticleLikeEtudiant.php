<?php
// Copyright (c) 2020. | David Annebicque | IUT de Troyes  - All Rights Reserved
// @file /Users/davidannebicque/htdocs/intranetV3/src/Entity/ArticleLikeEtudiant.php
// @author davidannebicque
// @project intranetV3
// @lastUpdate 05/07/2020 08:09

namespace App\Entity;

use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass="App\Repository\ArticleLikeEtudiantRepository")
 */
class ArticleLikeEtudiant extends ArticleLike
{
    /**
     * @ORM\ManyToOne(targetEntity="App\Entity\Etudiant", inversedBy="articlesLike")
     */
    private $etudiant;


    /**
     * EmpruntEtudiant constructor.
     *
     * @param         $etudiant
     *
     * @param Article $article
     */
    public function __construct($etudiant, Article $article)
    {
        $this->etudiant = $etudiant;
        $this->setArticle($article);
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
}
