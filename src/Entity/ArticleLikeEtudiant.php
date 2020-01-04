<?php
// Copyright (C) 11 / 2019 | David annebicque | IUT de Troyes - All Rights Reserved
// @file /Users/davidannebicque/htdocs/intranetv3/src/Entity/EmpruntEtudiant.php
// @author     David Annebicque
// @project intranetv3
// @date 25/11/2019 10:20
// @lastUpdate 23/11/2019 09:14

namespace App\Entity;

use Doctrine\ORM\Mapping as ORM;
use Exception;
use Symfony\Component\Serializer\Annotation\Groups;

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
