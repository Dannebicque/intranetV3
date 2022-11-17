<?php
/*
 * Copyright (c) 2022. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Controller/appPersonnel/CarnetController.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 14/09/2022 09:23
 */

namespace App\Controller\appPersonnel;

use App\Classes\MyExport;
use App\Controller\BaseController;
use App\Entity\CahierTexte;
use App\Entity\Constantes;
use App\Event\CarnetEvent;
use App\Form\CahierTexteType;
use App\Repository\CahierTexteRepository;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\IsGranted;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Contracts\EventDispatcher\EventDispatcherInterface;

/**
 * Class CarnetController.
 */
#[Route(path: '/application/personnel/carnet')]
#[IsGranted('ROLE_PERMANENT')]
class CarnetController extends BaseController
{
    #[Route(path: '/', name: 'application_personnel_carnet_index', methods: 'GET')]
    public function index(CahierTexteRepository $cahierRepository): Response
    {
        return $this->render(
            'appPersonnel/carnet/index.html.twig',
            ['cahierTextes' => $cahierRepository->findByPersonnel($this->getUser()->getId())]
        );
    }

    #[Route(path: '/export.{_format}', name: 'application_personnel_carnet_export', requirements: ['_format' => 'csv|xlsx|pdf'], methods: 'GET')]
    public function export(MyExport $myExport, CahierTexteRepository $cahierTexteRepository, string $_format): Response
    {
        $actualites = $cahierTexteRepository->findByPersonnel($this->getUser());

        // todo: a faire
    }

    #[Route(path: '/new', name: 'application_personnel_carnet_new', methods: 'GET|POST')]
    public function create(Request $request, EventDispatcherInterface $eventDispatcher): Response
    {
        $cahierTexte = new CahierTexte();
        $cahierTexte->setPersonnel($this->getUser());
        $form = $this->createForm(
            CahierTexteType::class,
            $cahierTexte,
            [
                'departement' => $this->dataUserSession->getDepartement(),
                'attr' => [
                    'data-provide' => 'validation',
                ],
            ]
        );
        $form->handleRequest($request);
        if ($form->isSubmitted() && $form->isValid()) {
            $this->entityManager->persist($cahierTexte);
            $this->entityManager->flush();

            // On déclenche l'event
            $event = new CarnetEvent($cahierTexte);
            $eventDispatcher->dispatch($event, CarnetEvent::ADDED);

            return $this->redirectToRoute('application_index', ['onglet' => 'carnet']);
        }

        return $this->render('appPersonnel/carnet/new.html.twig', [
            'cahierTexte' => $cahierTexte,
            'form' => $form->createView(),
        ]);
    }

    #[Route(path: '/{id}', name: 'application_personnel_carnet_show', methods: 'GET')]
    public function show(CahierTexte $cahierTexte): Response
    {
        return $this->render('appPersonnel/carnet/show.html.twig', ['cahierTexte' => $cahierTexte]);
    }

    #[Route(path: '/{id}/edit', name: 'application_personnel_carnet_edit', methods: 'GET|POST')]
    public function edit(Request $request, CahierTexte $cahierTexte): Response
    {
        $form = $this->createForm(
            CahierTexteType::class,
            $cahierTexte,
            [
                'departement' => $this->dataUserSession->getDepartement(),
                'attr' => [
                    'data-provide' => 'validation',
                ],
            ]
        );
        $form->handleRequest($request);
        if ($form->isSubmitted() && $form->isValid()) {
            $this->entityManager->flush();

            return $this->redirectToRoute('application_personnel_carnet_edit', ['id' => $cahierTexte->getId()]);
        }

        return $this->render('appPersonnel/carnet/edit.html.twig', [
            'cahierTexte' => $cahierTexte,
            'form' => $form->createView(),
        ]);
    }

    #[Route(path: '/{id}', name: 'application_personnel_carnet_delete', methods: 'DELETE')]
    public function delete(Request $request, CahierTexte $cahierTexte): Response
    {
        $id = $cahierTexte->getId();
        if ($this->isCsrfTokenValid('delete'.$id, $request->server->get('HTTP_X_CSRF_TOKEN'))) {
            $this->entityManager->remove($cahierTexte);
            $this->entityManager->flush();

            return $this->json($id, Response::HTTP_OK);
        }

        return $this->json(false, Response::HTTP_INTERNAL_SERVER_ERROR);
    }

    #[Route(path: '/{id}/duplicate', name: 'application_personnel_carnet_duplicate', methods: 'GET|POST')]
    public function duplicate(CahierTexte $cahierTexte): Response
    {
        $newCahierTexte = clone $cahierTexte;
        $this->entityManager->persist($newCahierTexte);
        $this->entityManager->flush();
        $this->addFlashBag(Constantes::FLASHBAG_SUCCESS, 'cahier_texte.duplicate.success.flash');

        return $this->redirectToRoute('application_personnel_carnet_edit', ['id' => $newCahierTexte->getId()]);
    }
}
