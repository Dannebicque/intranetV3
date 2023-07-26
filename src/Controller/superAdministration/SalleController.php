<?php
/*
 * Copyright (c) 2022. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Controller/superAdministration/SalleController.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 14/07/2022 15:08
 */

namespace App\Controller\superAdministration;

use App\Classes\MyExport;
use App\Classes\MySerializer;
use App\Controller\BaseController;
use App\Entity\Constantes;
use App\Entity\Salle;
use App\Form\SalleType;
use App\Repository\SalleRepository;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

#[Route(path: '/administratif/salle')]
class SalleController extends BaseController
{
    #[Route(path: '/', name: 'sa_salle_index', methods: 'GET')]
    public function index(SalleRepository $salleRepository): Response
    {
        return $this->render('super-administration/salle/index.html.twig', ['salles' => $salleRepository->findAll()]);
    }

    #[Route(path: '/export.{_format}', name: 'sa_salle_export', requirements: ['_format' => 'csv|xlsx|pdf'], methods: 'GET')]
    public function export(
        MySerializer $mySerializer,
        MyExport $myExport, SalleRepository $salleRepository, string $_format): Response
    {
        $salles = $salleRepository->findAll();

        $data = $mySerializer->getDataFromSerialization(
            $salles,
            ['libelle', 'capacite', 'type', 'site' => ['libelle']],
            ['salle_administration', 'sites_administration']
        );

        return $myExport->genereFichierGeneriqueFromData(
            $_format,
            $data,
            'salles',
        );
    }

    #[Route(path: '/new', name: 'sa_salle_new', methods: 'GET|POST')]
    public function create(Request $request): Response
    {
        $salle = new Salle();
        $form = $this->createForm(SalleType::class, $salle, [
            'attr' => [
                'data-provide' => 'validation',
            ],
        ]);
        $form->handleRequest($request);
        if ($form->isSubmitted() && $form->isValid()) {
            $this->entityManager->persist($salle);
            $this->entityManager->flush();
            $this->addFlashBag(Constantes::FLASHBAG_SUCCESS, 'salle.add.success.flash');

            return $this->redirectToRoute('sa_salle_index');
        }

        return $this->render('super-administration/salle/new.html.twig', [
            'salle' => $salle,
            'form' => $form,
        ]);
    }

    #[Route(path: '/{id}', name: 'sa_salle_show', methods: 'GET')]
    public function show(Salle $salle): Response
    {
        return $this->render('super-administration/salle/show.html.twig', ['salle' => $salle]);
    }

    #[Route(path: '/{id}/edit', name: 'sa_salle_edit', methods: 'GET|POST')]
    public function edit(Request $request, Salle $salle): Response
    {
        $form = $this->createForm(SalleType::class, $salle, [
            'attr' => [
                'data-provide' => 'validation',
            ],
        ]);
        $form->handleRequest($request);
        if ($form->isSubmitted() && $form->isValid()) {
            $this->entityManager->flush();
            $this->addFlashBag(Constantes::FLASHBAG_SUCCESS, 'salle.edit.success.flash');

            if (null !== $request->request->get('btn_update')) {
                return $this->redirectToRoute('sa_salle_index');
            }

            return $this->redirectToRoute('sa_salle_edit', ['id' => $salle->getId()]);
        }

        return $this->render('super-administration/salle/edit.html.twig', [
            'salle' => $salle,
            'form' => $form,
        ]);
    }

    #[Route(path: '/{id}/duplicate', name: 'sa_salle_duplicate', methods: 'GET|POST')]
    public function duplicate(Salle $salle): Response
    {
        $newSalle = clone $salle;
        $this->entityManager->persist($newSalle);
        $this->entityManager->flush();

        return $this->redirectToRoute('sa_salle_edit', ['id' => $newSalle->getId()]);
    }

    #[Route(path: '/{id}', name: 'sa_salle_delete', methods: 'DELETE')]
    public function delete(Request $request, Salle $salle): Response
    {
        $id = $salle->getId();
        if ($this->isCsrfTokenValid('delete'.$id, $request->server->get('HTTP_X_CSRF_TOKEN'))) {
            $this->entityManager->remove($salle);
            $this->entityManager->flush();

            return $this->json($id, Response::HTTP_OK);
        }

        return $this->json(false, Response::HTTP_INTERNAL_SERVER_ERROR);
    }
}
