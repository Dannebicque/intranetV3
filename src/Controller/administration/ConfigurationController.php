<?php
/**
 * *
 *  *  Copyright (C) $month.$year | David annebicque | IUT de Troyes - All Rights Reserved
 *  *
 *  *
 *  * @file /Users/davidannebicque/htdocs/intranetv3/src/Controller/administration/ConfigurationController.php
 *  * @author     David annebicque
 *  * @project intranetv3
 *  * @date 4/28/19 8:47 PM
 *  * @lastUpdate 4/28/19 8:42 PM
 *  *
 *
 */

namespace App\Controller\administration;

use App\Controller\BaseController;
use App\MesClasses\MyConfiguration;
use App\Repository\AnneeUniversitaireRepository;
use InvalidArgumentException;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

/**
 * Class ConfigurationController
 * @package App\Controller\administration
 * @Route("/administration/configuration")
 */
class ConfigurationController extends BaseController
{
    /**
     * @Route("/configuration", name="administration_configuration")
     * @param AnneeUniversitaireRepository $anneeUniversitaireRepository
     *
     * @return Response
     */
    public function index(AnneeUniversitaireRepository $anneeUniversitaireRepository): Response
    {
        return $this->render('administration/configuration/index.html.twig', [
            'anneeUniversitaire' => $anneeUniversitaireRepository->findAll()
        ]);
    }

    /**
     * @Route("/configuration/change", name="administration_configuration_change_option", options={"expose":true})
     * @param MyConfiguration $myConfiguration
     * @param Request         $request
     *
     * @return Response
     * @throws InvalidArgumentException
     */
    public function changeOption(MyConfiguration $myConfiguration, Request $request): Response
    {
        $type = $request->request->get('type');
        $id = $request->request->get('id');
        $name = $request->request->get('name');
        $value = $request->request->get('value');

        if ($myConfiguration->updateOption($type, $id, $name, $value)) {
            return new Response('', Response::HTTP_OK);
        }

        return new Response('', Response::HTTP_INTERNAL_SERVER_ERROR);
    }
}
