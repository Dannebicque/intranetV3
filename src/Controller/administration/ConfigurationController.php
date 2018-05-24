<?php

namespace App\Controller\administration;

use App\Controller\BaseController;
use App\MesClasses\MyConfiguration;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

/**
 * Class ConfigurationController
 * @package App\Controller\administration
 * @Route({"fr":"administration/configuration",
 *         "en":"administration/settings"}
 *)
 */
class ConfigurationController extends BaseController
{
    /**
     * @Route("/configuration", name="administration_configuration")
     */
    public function index()
    {
        return $this->render('administration/configuration/index.html.twig', [
        ]);
    }

    /**
     * @Route("/configuration/change", name="administration_configuration_change_option", options={"expose":true})
     * @param MyConfiguration $myConfiguration
     * @param Request         $request
     *
     * @return Response
     * @throws \InvalidArgumentException
     */
    public function changeOption(MyConfiguration $myConfiguration, Request $request): Response
    {
        $type = $request->request->get('type');
        $id = $request->request->get('id');
        $name = $request->request->get('name');
        $value = $request->request->get('value');

        return $myConfiguration->updateOption($type, $id, $name, $value) ? new Response('',
            Response::HTTP_OK) : new Response('', Response::HTTP_INTERNAL_SERVER_ERROR);
    }
}
