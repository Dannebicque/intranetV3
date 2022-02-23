<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Classes/MyArticle.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 29/06/2021 17:48
 */

/*
 * Pull your hearder here, for exemple, Licence header.
 */

namespace App\Classes;

use App\Entity\Article;
use App\Entity\ArticleLikeEtudiant;
use App\Entity\ArticleLikePersonnel;
use App\Entity\Etudiant;
use App\Entity\Personnel;
use App\Interfaces\UtilisateurInterface;
use App\Repository\ArticleLikeEtudiantRepository;
use App\Repository\ArticleLikePersonnelRepository;
use App\Repository\ArticleRepository;
use function count;
use Doctrine\ORM\EntityManagerInterface;

class MyArticle
{
    protected Article $article;

    protected EntityManagerInterface $entityManager;

    protected ArticleRepository $articleRepository;

    protected ArticleLikeEtudiantRepository $articleLikeEtudiantRepository;

    protected ArticleLikePersonnelRepository $articleLikePersonnelRepository;

    /**
     * MyArticle constructor.
     */
    public function __construct(
        EntityManagerInterface $entityManager,
        ArticleRepository $articleRepository,
        ArticleLikeEtudiantRepository $articleLikeEtudiantRepository,
        ArticleLikePersonnelRepository $articleLikePersonnelRepository
    ) {
        $this->entityManager = $entityManager;
        $this->articleRepository = $articleRepository;
        $this->articleLikeEtudiantRepository = $articleLikeEtudiantRepository;
        $this->articleLikePersonnelRepository = $articleLikePersonnelRepository;
    }

    public function setArticle(Article $article): self
    {
        $this->article = $article;

        return $this;
    }

    public function saveLike(UtilisateurInterface $getConnectedUser): void
    {
        if ($getConnectedUser instanceof Personnel) {
            $r = $this->articleLikePersonnelRepository->findLike($getConnectedUser, $this->article);
            if (0 === count($r)) {
                //add
                $n = new ArticleLikePersonnel($getConnectedUser, $this->article);
                $this->entityManager->persist($n);
            } else {
                //remove
                $this->remove($r);
            }
        } elseif ($getConnectedUser instanceof Etudiant) {
            $r = $this->articleLikeEtudiantRepository->findLike($getConnectedUser, $this->article);
            if (0 === count($r)) {
                //add
                $n = new ArticleLikeEtudiant($getConnectedUser, $this->article);
                $this->entityManager->persist($n);
            } else {
                //remove
                $this->remove($r);
            }
        }
        $this->entityManager->flush();
    }

    private function remove(array $r): void
    {
        foreach ($r as $t) {
            $this->entityManager->remove($t);
        }
    }
}
