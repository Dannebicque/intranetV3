<?php
// Copyright (c) 2020. | David Annebicque | IUT de Troyes  - All Rights Reserved
// @file /Users/davidannebicque/htdocs/intranetV3/src/MesClasses/MyArticle.php
// @author davidannebicque
// @project intranetV3
// @lastUpdate 05/07/2020 08:09

namespace App\MesClasses;


use App\Entity\Article;
use App\Entity\ArticleLikeEtudiant;
use App\Entity\ArticleLikePersonnel;
use App\Entity\Etudiant;
use App\Entity\Personnel;
use App\Repository\ArticleLikeEtudiantRepository;
use App\Repository\ArticleLikePersonnelRepository;
use App\Repository\ArticleRepository;
use Doctrine\ORM\EntityManagerInterface;

class MyArticle
{
    /** @var Article */
    protected $article;

    /** @var EntityManagerInterface */
    protected $entityManager;

    /** @var ArticleRepository */
    protected $articleRepository;

    /** @var ArticleLikeEtudiantRepository */
    protected $articleLikeEtudiantRepository;

    /** @var ArticleLikePersonnelRepository */
    protected $articleLikePersonnelRepository;

    /**
     * MyArticle constructor.
     *
     * @param EntityManagerInterface         $entityManager
     * @param ArticleRepository              $articleRepository
     * @param ArticleLikeEtudiantRepository  $articleLikeEtudiantRepository
     * @param ArticleLikePersonnelRepository $articleLikePersonnelRepository
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


    public function setArticle(Article $article): MyArticle
    {
        $this->article = $article;

        return $this;
    }

    public function saveLike($getConnectedUser)
    {
        if ($getConnectedUser instanceof Personnel) {
            $r = $this->articleLikePersonnelRepository->findLike($getConnectedUser, $this->article);
            if ($r === null || count($r) === 0) {
                //add
                $n = new ArticleLikePersonnel($getConnectedUser, $this->article);
                $this->entityManager->persist($n);
            } else {
                //remove
                $this->remove($r);
            }
        } elseif ($getConnectedUser instanceof Etudiant) {
            $r = $this->articleLikeEtudiantRepository->findLike($getConnectedUser, $this->article);
            if ($r === null || count($r) === 0) {
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

    private function remove($r)
    {
        foreach ($r as $t) {
            $this->entityManager->remove($t);
        }
    }
}
