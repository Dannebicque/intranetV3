<?php
/*
 * Copyright (c) 2026. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Classes/MyUpload.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 31/07/2026 11:14
 */

/*
 * Pull your hearder here, for exemple, Licence header.
 */

namespace App\Classes;

use App\Exception\ExtensionInterditeException;
use Exception;
use Symfony\Component\HttpFoundation\File\Exception\FileException;
use Symfony\Component\HttpFoundation\File\UploadedFile;
use Symfony\Component\HttpKernel\KernelInterface;
use ZipArchive;
use function count;
use function in_array;

class MyUpload
{
    private readonly ?string $dir;
    private string $nomfile = '';
    private int $taille = 0;
    private string $typeFichier = '';

    public function __construct(
        KernelInterface $kernel
    ) {
        $this->dir = $kernel->getProjectDir().'/public/upload/';
    }

    /**
     * @throws Exception
     */
    public function upload(?UploadedFile $fichier, string $destination = 'temp/', array $extensions = []): ?string
    {
        if (null !== $fichier) {
            $extension = $this->getExtension($fichier);
            $this->typeFichier = $fichier->getMimeType();
            $this->taille = $fichier->getSize();
            $dir = $this->valideDir($destination);

            if ((count($extensions) > 0) && !in_array($extension, $extensions, true)) {
                throw new ExtensionInterditeException();
            }

            $this->nomfile = random_int(1, 99999).'_'.date('YmdHis').'.'.$extension;
            try {
                $fichier->move($this->dir.$dir, $this->nomfile);
            } catch (FileException) {
                // ... handle exception if something happens during file upload
            }

            return $this->dir.$dir.$this->nomfile;
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
        // 2)Tant que le dossier est aps vide
        while ($fichier = readdir($dossier)) {
            // todo: supprimer si existe ou ca remplace ? Purger le cache de vich ?
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
                    unlink($vidage); // suppression du fichier
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
        unlink($fichier); // suppression du zip.

        return true;
    }

    public function getName(): string
    {
        return $this->nomfile;
    }

    public function getTaille(): int
    {
        return $this->taille;
    }

    public function getTypeFichier(): string
    {
        return $this->typeFichier;
    }

    /**
     * Upload a file to an absolute directory (outside public/).
     *
     * @throws Exception
     */
    public function uploadAbsolute(?UploadedFile $fichier, string $absoluteDir, array $extensions = []): ?string
    {
        if (null !== $fichier) {
            $extension = $this->getExtension($fichier);
            $this->typeFichier = $fichier->getMimeType();
            $this->taille = $fichier->getSize();

            if ((count($extensions) > 0) && !in_array($extension, $extensions, true)) {
                throw new ExtensionInterditeException();
            }

            $absoluteDir = rtrim($absoluteDir, '/') . '/';
            if (!is_dir($absoluteDir)) {
                mkdir($absoluteDir, 0755, true);
            }

            $this->nomfile = random_int(1, 99999) . '_' . date('YmdHis') . '.' . $extension;
            try {
                $fichier->move($absoluteDir, $this->nomfile);
            } catch (FileException) {
                // handle exception if something happens during file upload
            }

            return $absoluteDir . $this->nomfile;
        }

        return null;
    }

    public function deleteFile(?string $getDocumentName, string $dir): void
    {
        unlink($this->dir.$this->valideDir($dir).$getDocumentName);
    }
}
