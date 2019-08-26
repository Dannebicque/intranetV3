<?php
/**
 * Copyright (C) 8 / 2019 | David annebicque | IUT de Troyes - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetv3/src/Controller/superAdministration/ConfigurationController.php
 * @author     David Annebicque
 * @project intranetv3
 * @date 26/08/2019 14:16
 * @lastUpdate 26/08/2019 14:15
 */

namespace App\Controller\superAdministration;

use App\Controller\BaseController;
use App\Entity\Configuration;
use App\Form\ConfigurationType;
use App\MesClasses\MyExport;
use App\Repository\ConfigurationRepository;
use PhpOffice\PhpSpreadsheet\Exception;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

/**
 * @Route("/super-administration/configuration")
 */
class ConfigurationController extends BaseController
{
    /**
     * @Route("/", name="sa_configuration_index", methods="GET")
     * @param ConfigurationRepository $configurationRepository
     *
     * @return Response
     */
    public function index(ConfigurationRepository $configurationRepository): Response
    {
        return $this->render('super-administration/configuration/index.html.twig',
            ['configurations' => $configurationRepository->findAll()]);
    }

    /**
     *
     * @Route("/export/{_format}", name="sa_configuration_export", methods="GET")
     * @param MyExport                $myExport
     * @param ConfigurationRepository $configurationRepository
     * @param                         $_format
     *
     * @return Response
     * @throws Exception
     */
    public function export(MyExport $myExport, ConfigurationRepository $configurationRepository, $_format): Response
    {
        $configurations = $configurationRepository->findAll();
        $response = $myExport->genereFichierGenerique(
            $_format,
            $configurations,
            'configurations',
            ['configuration_administration'],
            ['cle', 'valeur']
        );

        return $response;
    }

    /**
     * @Route("/new", name="sa_configuration_new", methods="GET|POST")
     * @param Request $request
     *
     * @return Response
     */
    public function create(Request $request): Response
    {
        $configuration = new Configuration();
        $form = $this->createForm(ConfigurationType::class, $configuration);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $this->entityManager->persist($configuration);
            $this->entityManager->flush();

            return $this->redirectToRoute('sa_configuration_index');
        }

        return $this->render('super-administration/configuration/new.html.twig', [
            'configuration' => $configuration,
            'form'          => $form->createView(),
        ]);
    }

    /**
     * @Route("/{id}", name="sa_configuration_show", methods="GET")
     * @param Configuration $configuration
     *
     * @return Response
     */
    public function show(Configuration $configuration): Response
    {
        return $this->render('super-administration/configuration/show.html.twig', ['configuration' => $configuration]);
    }

    /**
     * @Route("/{id}/edit", name="sa_configuration_edit", methods="GET|POST")
     * @param Request       $request
     * @param Configuration $configuration
     *
     * @return Response
     */
    public function edit(Request $request, Configuration $configuration): Response
    {
        $form = $this->createForm(ConfigurationType::class, $configuration);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $this->entityManager->flush();

            return $this->redirectToRoute('sa_configuration_edit', ['id' => $configuration->getId()]);
        }

        return $this->render('super-administration/configuration/edit.html.twig', [
            'configuration' => $configuration,
            'form'          => $form->createView(),
        ]);
    }

    /**
     * @Route("/{id}/duplicate", name="sa_configuration_duplicate", methods="GET|POST")
     *
     * @param Configuration $configuration
     *
     * @return Response
     */
    public function duplicate(Configuration $configuration): Response
    {
        $newConfiguration = clone $configuration;

        $this->entityManager->persist($newConfiguration);
        $this->entityManager->flush();

        return $this->redirectToRoute('sa_configuration_edit', ['id' => $newConfiguration->getId()]);
    }
}
