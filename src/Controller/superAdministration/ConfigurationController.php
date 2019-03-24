<?php

namespace App\Controller\superAdministration;

use App\Entity\Configuration;
use App\Form\ConfigurationType;
use App\Repository\ConfigurationRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

/**
 * @Route("/super-administration/configuration")
 */
class ConfigurationController extends AbstractController
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
     */
    public function export($_format)
    {

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
            $em = $this->getDoctrine()->getManager();
            $em->persist($configuration);
            $em->flush();

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
            $this->getDoctrine()->getManager()->flush();

            return $this->redirectToRoute('sa_configuration_edit', ['id' => $configuration->getId()]);
        }

        return $this->render('super-administration/configuration/edit.html.twig', [
            'configuration' => $configuration,
            'form'          => $form->createView(),
        ]);
    }
}
