<?php
/**
 * Copyright (C) 7 / 2019 | David annebicque | IUT de Troyes - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetv3/src/MesClasses/MyUpload.php
 * @author     David Annebicque
 * @project intranetv3
 * @date 7/12/19 11:23 AM
 * @lastUpdate 5/15/19 8:07 PM
 */

/**
 * Created by PhpStorm.
 * User: davidannebicque
 * Date: 27/12/2018
 * Time: 09:08
 */

namespace App\MesClasses;

use Exception;
use Symfony\Component\HttpFoundation\File\UploadedFile;
use Symfony\Component\HttpKernel\KernelInterface;


class MyUpload
{
    private $dir;

    public function __construct(KernelInterface $kernel)
    {
        $this->dir = $kernel->getProjectDir() . '/public/upload/';
    }

    /**
     * @param UploadedFile $fichier
     * @param              $destination
     * @param array        $extensions
     *
     * @return bool|string
     * @throws Exception
     */
    public function upload(UploadedFile $fichier, $destination, $extensions = [])
    {
        $extension = $this->getExtension($fichier);
        $this->dir .= $this->valideDir($destination);

        if ($fichier !== null) {

            if ((count($extensions) > 0) && !in_array($extension, $extensions)) {
                return false; //extension interdite
            }

            $nomfile = random_int(1, 99999) . '_' . date('YmdHis') . '.' . $extension;
            $fichier->move($this->dir, $nomfile);
            return $this->dir . $nomfile;
        }

        return null;
    }

    private function valideDir($dir){
        if ($dir[0] === '/') {
            $dir = substr($dir, 1, strlen($dir));
        }

        if ($dir[strlen($dir)-1] !== '/') {
            $dir .= '/';
        }

        return $dir;
    }
    /**
     * @param UploadedFile $fichier
     *
     * @return string
     */
    public function getExtension(UploadedFile $fichier): string
    {
        return $fichier->getClientOriginalExtension();
    }
}
