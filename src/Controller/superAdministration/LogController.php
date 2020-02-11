<?php
// Copyright (C) 11 / 2019 | David annebicque | IUT de Troyes - All Rights Reserved
// @file /Users/davidannebicque/htdocs/intranetv3/src/Controller/superAdministration/HelpController.php
// @author     David Annebicque
// @project intranetv3
// @date 25/11/2019 10:20
// @lastUpdate 23/11/2019 09:14

namespace App\Controller\superAdministration;

use App\Controller\BaseController;
use Symfony\Component\DependencyInjection\ParameterBag\ParameterBagInterface;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

/**
 * @Route("/administratif/log")
 */
class LogController extends BaseController
{
    /**
     * @Route("/", name="sa_log_index", methods="GET")
     *
     * @param ParameterBagInterface $parameterBag
     *
     * @return Response
     */
    public function index(ParameterBagInterface $parameterBag): Response
    {
        $directory = $parameterBag->get('kernel.project_dir') . '/var/log/';
        $scanned_directory = array_diff(scandir($directory), ['..', '.']);
        $file = fopen($directory . $scanned_directory[2], 'r+');
        while (!feof($file)) {
            $ligne = fgets($file);
            //on fait quelque chose avec ligne
        }

        return $this->render('super-administration/log/index.html.twig', [
            'directory'     => $directory,
            'listeFichiers' => $scanned_directory
        ]);
    }


}
