<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Classes/MyUpload.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 26/08/2021 14:51
 */

/*
 * Pull your hearder here, for exemple, Licence header.
 */

namespace App\Classes;

use App\Exception\ExtensionInterditeException;
use Exception;
use Symfony\Component\DependencyInjection\ParameterBag\ParameterBagInterface;
use Symfony\Component\HttpFoundation\File\UploadedFile;
use ZipArchive;
use function count;
use function in_array;

class MyUpload
{
    private $dir;

    public function __construct(ParameterBagInterface $parameterBag)
    {
        $this->dir = $parameterBag->get('kernel.project_dir') . '/public/upload/';
    }

    /**
     * @throws Exception
     */
    public function upload($fichier, string $destination, array $extensions = []): ?string
    {
        //todo: quel type est $fichier

        $extension = $this->getExtension($fichier);
        $dir = $this->valideDir($destination);

        if (null !== $fichier) {
            if ((count($extensions) > 0) && !in_array($extension, $extensions, true)) {
                throw new ExtensionInterditeException();
            }

            $nomfile = random_int(1, 99999) . '_' . date('YmdHis') . '.' . $extension;
            $fichier->move($this->dir . $dir, $nomfile);

            return $this->dir . $dir . $nomfile;
        }

        return null;
    }

    private function valideDir($dir)
    {
        if ('/' === $dir[0]) {
            $dir = mb_substr($dir, 1, mb_strlen($dir));
        }

        if ('/' !== $dir[mb_strlen($dir) - 1]) {
            $dir .= '/';
        }

        return $dir;
    }

    public function getExtension($fichier): string
    {
        //todo: quel type est $fichier
        return $fichier->getClientOriginalExtension();
    }

    /**
     * @param $dossierTemp
     * @param $dossierDest
     */
    public function traitePhoto($dossierTemp, $dossierDest): void
    {
        $folder = $this->dir . $dossierTemp;
        $dossier = opendir($folder);
        $newdir = $this->dir . $dossierDest;
        //2)Tant que le dossier est aps vide
        while ($fichier = readdir($dossier)) {
            //todo: supprimer si existe ou ca remplace ? Purger le cache de vich ?
            if ('.' !== $fichier && '..' !== $fichier) {
                $t = explode('.', $fichier);
                $vidage = $folder . $fichier;
                if ('jpg' === $t[1] || 'jpeg' === $t[1]) {
                    $f = explode('_', $fichier);
                    $name = $f[count($f) - 1];
                    rename($vidage, $newdir . $name);
                } else {
                    unlink($vidage); //suppression du fichier
                }
            }
        }
        closedir($dossier);
    }

    public function extractZip(string $fichier, $dest): bool
    {
        chmod($fichier, 0777);
        $filezip = realpath($fichier);
        $zip = new ZipArchive();
        // Ouvrir l'archive
        if (true !== $zip->open($filezip)) {
            return false;
        }
        // Extraire le contenu dans le dossier de destination
        $zip->extractTo($this->dir . $dest);
        // Fermer l'archive
        $zip->close();
        unlink($fichier); //suppression du zip.

        return true;
    }
}
