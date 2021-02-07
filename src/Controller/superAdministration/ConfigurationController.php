<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Controller/superAdministration/ConfigurationController.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 07/02/2021 11:20
 */

namespace App\Controller\superAdministration;

use App\Classes\MyExport;
use App\Controller\BaseController;
use App\Entity\Configuration;
use App\Entity\Constantes;
use App\Form\ConfigurationType;
use App\Repository\ConfigurationRepository;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

/**
 * @Route("/administratif/configuration")
 */
class ConfigurationController extends BaseController
{
    /**
     * @Route("/", name="sa_configuration_index", methods="GET")
     */
    public function index(ConfigurationRepository $configurationRepository): Response
    {
        return $this->render('super-administration/configuration/index.html.twig',
            ['configurations' => $configurationRepository->findAll()]);
    }

    /**
     * @Route("/export/{_format}", name="sa_configuration_export", methods="GET")
     *
     * @param $_format
     */
    public function export(MyExport $myExport, ConfigurationRepository $configurationRepository, $_format): Response
    {
        $configurations = $configurationRepository->findAll();

        return $myExport->genereFichierGenerique(
            $_format,
            $configurations,
            'configurations',
            ['configuration_administration'],
            ['cle', 'valeur']
        );
    }

    /**
     * @Route("/new", name="sa_configuration_new", methods="GET|POST")
     */
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
            'form'          => $form->createView(),
        ]);
    }

    /**
     * @Route("/{id}", name="sa_configuration_show", methods="GET")
     */
    public function show(Configuration $configuration): Response
    {
        return $this->render('super-administration/configuration/show.html.twig', ['configuration' => $configuration]);
    }

    /**
     * @Route("/{id}/edit", name="sa_configuration_edit", methods="GET|POST")
     */
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
            'form'          => $form->createView(),
        ]);
    }

    /**
     * @Route("/{id}/duplicate", name="sa_configuration_duplicate", methods="GET|POST")
     */
    public function duplicate(Configuration $configuration): Response
    {
        $newConfiguration = clone $configuration;

        $this->entityManager->persist($newConfiguration);
        $this->entityManager->flush();
        $this->addFlashBag(Constantes::FLASHBAG_SUCCESS, 'configuration.duplicate.success.flash');

        return $this->redirectToRoute('sa_configuration_edit', ['id' => $newConfiguration->getId()]);
    }
}
