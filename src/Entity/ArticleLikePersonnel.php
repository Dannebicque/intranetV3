<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Entity/ArticleLikePersonnel.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 05/06/2021 18:44
 */

namespace App\Entity;

use App\Repository\ArticleLikePersonnelRepository;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: ArticleLikePersonnelRepository::class)]
#[ORM\HasLifecycleCallbacks]
class ArticleLikePersonnel extends ArticleLike
{
    #[ORM\ManyToOne(targetEntity: Personnel::class, inversedBy: 'articlesLike')]
    private Personnel $personnel;

    public function __construct(Personnel $personnel, Article $article)
    {
        $this->personnel = $personnel;
        $this->setArticle($article);
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
}
