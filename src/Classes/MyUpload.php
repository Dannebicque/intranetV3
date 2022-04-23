<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Classes/MyUpload.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 25/10/2021 11:21
 */

/*
 * Pull your hearder here, for exemple, Licence header.
 */

namespace App\Classes;

use App\Exception\ExtensionInterditeException;
use Symfony\Component\HttpFoundation\File\UploadedFile;
use Symfony\Component\HttpKernel\KernelInterface;
use function count;
use Exception;
use function in_array;
use ZipArchive;

class MyUpload
{
    private ?string $dir;

    public function __construct(
        KernelInterface $kernel)
    {
        $this->dir = $kernel->getProjectDir().'/public/upload/';
    }

    /**
     * @throws Exception
     */
    public function upload(?UploadedFile $fichier, string $destination = 'temp/', array $extensions = []): ?string
    {
        $extension = $this->getExtension($fichier);
        $dir = $this->valideDir($destination);

        if (null !== $fichier) {
            if ((count($extensions) > 0) && !in_array($extension, $extensions, true)) {
                throw new ExtensionInterditeException();
            }

            $nomfile = random_int(1, 99999).'_'.date('YmdHis').'.'.$extension;
            $fichier->move($this->dir.$dir, $nomfile);

            return $this->dir.$dir.$nomfile;
        }

        return null;
    }

    private function valideDir(string $dir): string
    {
        if ('/' === $dir[0]) {
            $dir = mb_substr($dir, 1, mb_strlen($dir));
        }

        if ('/' !== $dir[mb_strlen($dir) - 1]) {
            $dir .= '/';
        }

        return $dir;
    }

    public function getExtension(UploadedFile $fichier): string
    {
        return $fichier->getClientOriginalExtension();
    }

    public function traitePhoto(?string $dossierTemp, ?string $dossierDest): void
    {
        $folder = $this->dir.$dossierTemp;
        $dossier = opendir($folder);
        $newdir = $this->dir.$dossierDest;
        //2)Tant que le dossier est aps vide
        while ($fichier = readdir($dossier)) {
            //todo: supprimer si existe ou ca remplace ? Purger le cache de vich ?
            if ('.' !== $fichier && '..' !== $fichier) {
                $t = explode('.', $fichier);
                $vidage = $folder.$fichier;
                if ('jpg' === $t[1] || 'jpeg' === $t[1]) {
                    $f = explode('_', $fichier);
                    $name = $f[count($f) - 1];
                    if (true === file_exists($newdir.$name)) {
                        unlink($newdir.$name);
                    }
                    rename($vidage, $newdir.$name);
                } else {
                    unlink($vidage); //suppression du fichier
                }
            }
        }
        closedir($dossier);
    }

    public function extractZip(string $fichier, string $dest): bool
    {
        chmod($fichier, 0777);
        $filezip = realpath($fichier);
        $zip = new ZipArchive();
        // Ouvrir l'archive
        if (true !== $zip->open($filezip)) {
            return false;
        }
        // Extraire le contenu dans le dossier de destination
        $zip->extractTo($this->dir.$dest);
        // Fermer l'archive
        $zip->close();
        unlink($fichier); //suppression du zip.

        return true;
    }
}
