<?php
/*
 * Copyright (c) 2024. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Controller/superAdministration/ConfigurationController.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 16/02/2024 22:17
 */

namespace App\Controller\superAdministration;

use App\Classes\MyExport;
use App\Classes\MySerializer;
use App\Controller\BaseController;
use App\Entity\Configuration;
use App\Entity\Constantes;
use App\Form\ConfigurationType;
use App\Repository\ConfigurationRepository;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;

#[Route(path: '/administratif/configuration')]
class ConfigurationController extends BaseController
{
    #[Route(path: '/', name: 'sa_configuration_index', methods: 'GET')]
    public function index(ConfigurationRepository $configurationRepository): Response
    {
        return $this->render('super-administration/configuration/index.html.twig',
            ['configurations' => $configurationRepository->findAll()]);
    }

    #[Route(path: '/export/{_format}', name: 'sa_configuration_export', methods: 'GET')]
    public function export(
        MySerializer $mySerializer,
        MyExport $myExport, ConfigurationRepository $configurationRepository, string $_format): Response
    {
        $configurations = $configurationRepository->findAll();
        $data = $mySerializer->getDataFromSerialization(
            $configurations,
            ['cle', 'valeur', 'type'],
            ['configuration_administration']
        );

        return $myExport->genereFichierGeneriqueFromData(
            $_format,
            $data,
            'configurations',
        );
    }

    #[Route(path: '/new', name: 'sa_configuration_new', methods: 'GET|POST')]
    public function create(Request $request): Response
    {
        $configuration = new Configuration();
        $form = $this->createForm(ConfigurationType::class, $configuration);
        $form->handleRequest($request);
        if ($form->isSubmitted() && $form->isValid()) {
            $this->entityManager->persist($configuration);
            $this->entityManager->flush();
            $this->addFlashBag(Constantes::FLASHBAG_SUCCESS, 'configuration.add.success.flash');

            return $this->redirectToRoute('sa_configuration_index');
        }

        return $this->render('super-administration/configuration/new.html.twig', [
            'configuration' => $configuration,
            'form' => $form,
        ]);
    }

    #[Route(path: '/{id}', name: 'sa_configuration_show', methods: 'GET')]
    public function show(Configuration $configuration): Response
    {
        return $this->render('super-administration/configuration/show.html.twig', ['configuration' => $configuration]);
    }

    #[Route(path: '/{id}/edit', name: 'sa_configuration_edit', methods: 'GET|POST')]
    public function edit(Request $request, Configuration $configuration): Response
    {
        $form = $this->createForm(ConfigurationType::class, $configuration);
        $form->handleRequest($request);
        if ($form->isSubmitted() && $form->isValid()) {
            $this->entityManager->flush();
            $this->addFlashBag(Constantes::FLASHBAG_SUCCESS, 'configuration.edit.success.flash');

            return $this->redirectToRoute('sa_configuration_edit', ['id' => $configuration->getId()]);
        }

        return $this->render('super-administration/configuration/edit.html.twig', [
            'configuration' => $configuration,
            'form' => $form,
        ]);
    }

    #[Route(path: '/{id}/duplicate', name: 'sa_configuration_duplicate', methods: 'GET|POST')]
    public function duplicate(Configuration $configuration): Response
    {
        $newConfiguration = clone $configuration;
        $this->entityManager->persist($newConfiguration);
        $this->entityManager->flush();
        $this->addFlashBag(Constantes::FLASHBAG_SUCCESS, 'configuration.duplicate.success.flash');

        return $this->redirectToRoute('sa_configuration_edit', ['id' => $newConfiguration->getId()]);
    }
}
