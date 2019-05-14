<?php
/**
 * *
 *  *  Copyright (C) $month.$year | David annebicque | IUT de Troyes - All Rights Reserved
 *  *
 *  *
 *  * @file /Users/davidannebicque/htdocs/intranetv3/src/MesClasses/MyUpload.php
 *  * @author     David annebicque
 *  * @project intranetv3
 *  * @date 4/28/19 8:46 PM
 *  * @lastUpdate 4/28/19 8:42 PM
 *  *
 *
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
        $this->dir .= $destination;

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
