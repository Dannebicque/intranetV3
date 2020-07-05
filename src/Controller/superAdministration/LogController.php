<?php
// Copyright (c) 2020. | David Annebicque | IUT de Troyes  - All Rights Reserved
// @file /Users/davidannebicque/htdocs/intranetV3/src/Controller/superAdministration/LogController.php
// @author davidannebicque
// @project intranetV3
// @lastUpdate 05/07/2020 08:09

namespace App\Controller\superAdministration;

use App\Controller\BaseController;
use Symfony\Component\DependencyInjection\ParameterBag\ParameterBagInterface;
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

    /**
     * @Route("/phpinfo", name="sa_log_phpinfo", methods="GET")
     *
     * @param ParameterBagInterface $parameterBag
     *
     * @return Response
     */
    public function phpinfo(): Response
    {
        phpinfo();
    }


}
