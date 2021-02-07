<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Controller/AideController.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 07/02/2021 11:11
 */

namespace App\Controller;

use App\Classes\Aide;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class AideController extends BaseController
{
    /**
     * @Route("/aide/", name="help_index")
     */
    public function index(Aide $aide): Response
    {
        $categories = $aide->getCategories();

        return $this->render('aide/index.html.twig', [
            'categories' => $categories,
        ]);
    }

    /**
     * @Route("/aide/categorie/{categorie}/{subcategorie}", name="help_categorie")
     *
     * @param string $categorie
     * @param string $subcategorie
     */
    public function categorie(Aide $aide, $categorie = '', $subcategorie = ''): Response
    {
        $dir = '' === $subcategorie ? $categorie : $categorie . '/' . $subcategorie;

        $categories = $aide->getCategories($dir);

        return $this->render('aide/index.html.twig', [
            'categories' => $categories,
            'dossier'    => $categorie,
        ]);
    }

    /**
     * @Route("/aide/{sujet}", name="help_article")
     */
    public function aide(Aide $aide, string $sujet): Response
    {
        $articles = $aide->getCategoriesFromSujet($sujet);

        return $this->render('aide/aide.html.twig', ['article' => $aide->getAide($sujet), 'categories' => $articles]);
    }
}
