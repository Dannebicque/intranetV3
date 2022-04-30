<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Entity/ArticleLikeEtudiant.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 05/06/2021 18:44
 */

namespace App\Entity;

use App\Repository\ArticleLikeEtudiantRepository;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: ArticleLikeEtudiantRepository::class)]
#[ORM\HasLifecycleCallbacks]
class ArticleLikeEtudiant extends ArticleLike
{
    public function __construct(#[ORM\ManyToOne(targetEntity: Etudiant::class, inversedBy: 'articlesLike')] private ?Etudiant $etudiant, Article $article)
    {
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
