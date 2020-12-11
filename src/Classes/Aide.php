<?php
// Copyright (c) 2020. | David Annebicque | IUT de Troyes  - All Rights Reserved
// @file /Users/davidannebicque/htdocs/intranetV3/src/Classes/Aide.php
// @author davidannebicque
// @project intranetV3
// @lastUpdate 11/12/2020 21:40

namespace App\Classes;


use App\DTO\ArticleAide;
use Carbon\Carbon;
use DateTime;
use Parsedown;
use Symfony\Component\HttpKernel\KernelInterface;

class Aide
{
    private Parsedown $parseDown;
    private string $dir;

    public function __construct(KernelInterface $kernel)
    {
        $this->parseDown = new Parsedown();
        $this->dir = $kernel->getProjectDir() . '/aide';
    }

    public function getAide($sujet)
    {
        $fichier = $this->getLink($sujet);


        if (file_exists($fichier)) {

            $content = file_get_contents($fichier);
            $article = new ArticleAide();
            $article->content = $this->parseDown->text($content);
            $article->titre = 'aide.' . $sujet;
            $article->lastUpdate = new Carbon(filectime($fichier));

            return $article;
        }

        return null;

    }

    private function getLink($sujet)
    {
        $arbo = explode('-', $sujet);
        if (count($arbo) === 0) {
            return false;
        }

        if (count($arbo) === 1) {
            $fichier = $this->dir . '/' . $arbo[0] . '.md';
        } else {
            $fichier = $this->dir . '/' . $arbo[0] . '/' . $arbo[1] . '/' . $arbo[2] . '.md';
        }

        return $fichier;
    }

    public function getCategories($dossier = '/')
    {
        return $this->extractContentDir($dossier);
    }

    /**
     * @param string $dossier
     *
     * @return array
     */
    private function extractContentDir(string $dossier): array
    {
        if ($dossier[0] !== '/') {
            $dossier = '/' . $dossier;
        }

        if (substr($dossier, -1) !== '/') {
            $dossier .= '/';
        }
        $categories = [];
        $categories['categories'] = [];
        $categories['articles'] = [];
        $handle = opendir($this->dir . $dossier);

        while (false !== ($entry = readdir($handle))) {
            if ($entry !== '.' && $entry !== '..') {
                if (is_dir($this->dir . $dossier . $entry)) {
                    $t['nom'] = $entry;
                    $t['nbArticles'] = count(scandir($this->dir . $dossier . $entry)) - 2;
                    $categories['categories'][] = $t;
                } else {
                    $nom = substr($entry, 0, -3);

                    if ($dossier === '/') {
                        $lien = $nom;
                    } else {
                        if ($dossier[0] === '/') {
                            $dossier = substr($dossier, 1);
                        }
                        $lien = str_replace('/', '-', $dossier . $nom);
                    }

                    $t['nom'] = $nom;
                    $t['lien'] = $lien;
                    $categories['articles'][] = $t;
                }
            }
        }

        return $categories;
    }

    public function getCategoriesFromSujet(string $sujet)
    {
        $dossier = $this->getDirFromSujet($sujet);

        return $this->extractContentDir($dossier);
    }

    /**
     * @param string $sujet
     *
     * @return string
     */
    private function getDirFromSujet(string $sujet): string
    {
        $t = explode('-', $sujet);

        if (count($t) === 0) {
            $dossier = '/';
        } else {
            $dossier = '/';
            for ($i = 0; $i < count($t) - 1; $i++) {
                $dossier .= $t[$i] . '/';
            }
        }

        return substr($dossier, 0, -1);
    }
}
