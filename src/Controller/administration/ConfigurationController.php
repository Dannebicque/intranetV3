<?php
/*
 * Copyright (c) 2024. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Controller/administration/ConfigurationController.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 16/02/2024 22:17
 */

namespace App\Controller\administration;

use App\Classes\MyConfiguration;
use App\Controller\BaseController;
use App\Repository\AnneeUniversitaireRepository;
use InvalidArgumentException;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;

/**
 * Class ConfigurationController.
 */
#[Route(path: '/administration/configuration')]
class ConfigurationController extends BaseController
{
    #[Route(path: '/configuration', name: 'administration_configuration')]
    public function index(AnneeUniversitaireRepository $anneeUniversitaireRepository): Response
    {
        $this->denyAccessUnlessGranted('MINIMAL_ROLE_ASS', $this->getDepartement());

        return $this->render('administration/configuration/index.html.twig', [
            'anneeUniversitaire' => $anneeUniversitaireRepository->findAll(),
        ]);
    }

    /**
     * @throws InvalidArgumentException
     */
    #[Route(path: '/configuration/change', name: 'administration_configuration_change_option', options: ['expose' => true])]
    public function changeOption(MyConfiguration $myConfiguration, Request $request): Response
    {
        $this->denyAccessUnlessGranted('MINIMAL_ROLE_ASS', $this->getDepartement());
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
