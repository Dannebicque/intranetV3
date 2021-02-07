<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Classes/Aide.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 07/02/2021 11:11
 */

/*
 * Pull your hearder here, for exemple, Licence header.
 */

namespace App\Classes;

use App\DTO\ArticleAide;
use Carbon\Carbon;
use Parsedown;
use ParsedownExtra;
use Symfony\Component\HttpKernel\KernelInterface;

class Aide
{
    private const EXCLUDES_DIR = ['.', '..', 'assets', 'intranetGitBook-master'];
    private Parsedown $parseDown;
    private string $dir;

    public function __construct(KernelInterface $kernel)
    {
        $this->parseDown = new ParsedownExtra();
        $this->dir = $kernel->getProjectDir() . '/aide/';
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
        if (0 === \count($arbo)) {
            return false;
        }

        if (1 === \count($arbo)) {
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

    private function extractContentDir(string $dossier): array
    {
        if ('/' !== mb_substr($dossier, -1)) {
            $dossier .= '/';
        }
        $categories = [];
        $categories['categories'] = [];
        $categories['articles'] = [];
        $handle = opendir($this->dir . $dossier);

        while (false !== ($entry = readdir($handle))) {
            if (!\in_array($entry, self::EXCLUDES_DIR, true)) {
                if (is_dir($this->dir . $dossier . $entry)) {
                    $t['nom'] = $entry;
                    $t['code_traduction'] = 'aide.' . str_replace('/', '-', $dossier . $entry);
                    $t['nbArticles'] = \count(scandir($this->dir . $dossier . $entry)) - 2;
                    $categories['categories'][] = $t;
                } else {
                    $nom = mb_substr($entry, 0, -3);

                    if ('/' === $dossier) {
                        $lien = $nom;
                    } else {
                        if ('/' === $dossier[0]) {
                            $dossier = mb_substr($dossier, 1);
                        }
                        $lien = str_replace('/', '-', $dossier . $nom);
                    }

                    $t['nom'] = $nom;
                    $t['lien'] = $lien;
                    $t['code_traduction'] = 'aide.' . $lien;
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

    private function getDirFromSujet(string $sujet): string
    {
        $t = explode('-', $sujet);

        if (0 === \count($t)) {
            return '/';
        }

        $dossier = '/';
        for ($i = 0; $i < \count($t) - 1; ++$i) {
            $dossier .= $t[$i] . '/';
        }

        if ('/' === $dossier) {
            return '/';
        }

        return mb_substr($dossier, 0, -1);
    }
}
