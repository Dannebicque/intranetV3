<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Entity/ArticleLike.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 12/03/2021 22:10
 */

namespace App\Entity;

use App\Entity\Traits\LifeCycleTrait;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity
 * @ORM\Table(name="ArticleLike")
 * @ORM\InheritanceType("SINGLE_TABLE")
 * @ORM\DiscriminatorColumn(name="type", type="string")
 * @ORM\DiscriminatorMap( {"articleLike" = "ArticleLike", "personnel" = "ArticleLikePersonnel",  "etudiant" =
 *                        "ArticleLikeEtudiant"} )
 * @ORM\HasLifecycleCallbacks()
 */
abstract class ArticleLike extends BaseEntity
{
    use LifeCycleTrait;

    /**
     * @ORM\ManyToOne(targetEntity="App\Entity\Article", inversedBy="articleLikes")
     */
    private $article;

    public function getArticle(): ?Article
    {
        return $this->article;
    }

    public function setArticle(?Article $article): self
    {
        $this->article = $article;

        return $this;
    }
}
