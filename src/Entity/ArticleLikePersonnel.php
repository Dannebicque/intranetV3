<?php
// Copyright (C) 11 / 2019 | David annebicque | IUT de Troyes - All Rights Reserved
// @file /Users/davidannebicque/htdocs/intranetv3/src/Entity/EmpruntPersonnel.php
// @author     David Annebicque
// @project intranetv3
// @date 25/11/2019 10:20
// @lastUpdate 23/11/2019 09:14

namespace App\Entity;

use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass="App\Repository\ArticleLikePersonnelRepository")
 */
class ArticleLikePersonnel extends ArticleLike
{
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
