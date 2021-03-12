<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Entity/ArticleLikePersonnel.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 12/03/2021 22:10
 */

namespace App\Entity;

use App\Entity\Traits\LifeCycleTrait;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass="App\Repository\ArticleLikePersonnelRepository")
 * @ORM\HasLifecycleCallbacks()
 */
class ArticleLikePersonnel extends ArticleLike
{
    use LifeCycleTrait;

    /**
     * @ORM\ManyToOne(targetEntity="App\Entity\Personnel", inversedBy="articlesLike")
     */
    private $personnel;

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
