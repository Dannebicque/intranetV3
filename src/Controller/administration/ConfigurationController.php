<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Controller/administration/ConfigurationController.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 07/02/2021 11:17
 */

namespace App\Controller\administration;

use App\Classes\MyConfiguration;
use App\Controller\BaseController;
use App\Repository\AnneeUniversitaireRepository;
use InvalidArgumentException;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

/**
 * Class ConfigurationController.
 *
 * @Route("/administration/configuration")
 */
class ConfigurationController extends BaseController
{
    /**
     * @Route("/configuration", name="administration_configuration")
     */
    public function index(AnneeUniversitaireRepository $anneeUniversitaireRepository): Response
    {
        return $this->render('administration/configuration/index.html.twig', [
            'anneeUniversitaire' => $anneeUniversitaireRepository->findAll(),
        ]);
    }

    /**
     * @Route("/configuration/change", name="administration_configuration_change_option", options={"expose":true})
     *
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
