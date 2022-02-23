<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Entity/ArticleLike.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 05/06/2021 18:44
 */

namespace App\Entity;

use App\Entity\Traits\LifeCycleTrait;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity]
#[ORM\Table(name: 'ArticleLike')]
#[ORM\InheritanceType(value: 'SINGLE_TABLE')]
#[ORM\DiscriminatorColumn(name: 'type', type: 'string')]
#[ORM\DiscriminatorMap(value: [
    'articleLike' => ArticleLike::class,
    'personnel' => ArticleLikePersonnel::class,
    'etudiant' => ArticleLikeEtudiant::class,
])]
#[ORM\HasLifecycleCallbacks]
abstract class ArticleLike extends BaseEntity
{
    use LifeCycleTrait;

    #[ORM\ManyToOne(targetEntity: Article::class, inversedBy: 'articleLikes')]
    private ?Article $article = null;

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
