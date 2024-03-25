<?php
/*
 * Copyright (c) 2024. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Controller/superAdministration/TypeHrsController.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 20/02/2024 18:55
 */

namespace App\Controller\superAdministration;

use App\Classes\MyExport;
use App\Classes\MySerializer;
use App\Controller\BaseController;
use App\Entity\Constantes;
use App\Entity\TypeHrs;
use App\Form\TypeHrsType;
use App\Repository\TypeHrsRepository;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;
use function count;

#[Route(path: '/administratif/type-hrs')]
class TypeHrsController extends BaseController
{
    #[Route(path: '/', name: 'sa_type_hrs_index', methods: 'GET')]
    public function index(TypeHrsRepository $typeHrsRepository): Response
    {
        return $this->render('super-administration/type_hrs/index.html.twig',
            ['type_hrs' => $typeHrsRepository->findAll()]);
    }

    #[Route(path: '/export.{_format}', name: 'sa_type_hrs_export', requirements: ['_format' => 'csv|xlsx|pdf'], methods: 'GET')]
    public function export(
        MySerializer $mySerializer,
        MyExport $myExport, TypeHrsRepository $typeHrsRepository, string $_format): Response
    {
        $typeHrs = $typeHrsRepository->findAll();

        $data = $mySerializer->getDataFromSerialization(
            $typeHrs,
            ['libelle', 'type', 'incluService', 'maximum'],
            ['type_hrs_administration'],
            ['incluService' => MySerializer::YES_NO]
        );

        return $myExport->genereFichierGeneriqueFromData(
            $_format,
            $data,
            'typeHrs',
        );
    }

    #[Route(path: '/new', name: 'sa_type_hrs_new', methods: 'GET|POST')]
    public function create(Request $request): Response
    {
        $typeHr = new TypeHrs();
        $form = $this->createForm(TypeHrsType::class, $typeHr, [
            'attr' => [
                'data-provide' => 'validation',
            ],
        ]);
        $form->handleRequest($request);
        if ($form->isSubmitted() && $form->isValid()) {
            $this->entityManager->persist($typeHr);
            $this->entityManager->flush();
            $this->addFlashBag(Constantes::FLASHBAG_SUCCESS, 'type_hrs.add.success.flash');

            return $this->redirectToRoute('sa_type_hrs_index');
        }

        return $this->render('super-administration/type_hrs/new.html.twig', [
            'type_hr' => $typeHr,
            'form' => $form,
        ]);
    }

    #[Route(path: '/{id}', name: 'sa_type_hrs_show', methods: 'GET')]
    public function show(TypeHrs $typeHr): Response
    {
        return $this->render('super-administration/type_hrs/show.html.twig', ['type_hr' => $typeHr]);
    }

    #[Route(path: '/{id}/edit', name: 'sa_type_hrs_edit', methods: 'GET|POST')]
    public function edit(Request $request, TypeHrs $typeHr): Response
    {
        $form = $this->createForm(TypeHrsType::class, $typeHr, [
            'attr' => [
                'data-provide' => 'validation',
            ],
        ]);
        $form->handleRequest($request);
        if ($form->isSubmitted() && $form->isValid()) {
            $this->entityManager->flush();
            $this->addFlashBag(Constantes::FLASHBAG_SUCCESS, 'type_hrs.edit.success.flash');

            if (null !== $request->request->get('btn_update')) {
                return $this->redirectToRoute('sa_type_hrs_index');
            }

            return $this->redirectToRoute('sa_type_hrs_edit', ['id' => $typeHr->getId()]);
        }

        return $this->render('super-administration/type_hrs/edit.html.twig', [
            'type_hrs' => $typeHr,
            'form' => $form,
        ]);
    }

    #[Route(path: '/{id}/duplicate', name: 'sa_type_hrs_duplicate', methods: 'GET|POST')]
    public function duplicate(TypeHrs $typeHrs): Response
    {
        $newTypeHrs = clone $typeHrs;
        $this->entityManager->persist($newTypeHrs);
        $this->entityManager->flush();

        return $this->redirectToRoute('sa_type_hrs_edit', ['id' => $newTypeHrs->getId()]);
    }

    #[Route(path: '/{id}', name: 'sa_type_hrs_delete', methods: 'DELETE')]
    public function delete(Request $request, TypeHrs $typeHrs): Response
    {
        $id = $typeHrs->getId();
        if ($this->isCsrfTokenValid('delete'.$id, $request->server->get('HTTP_X_CSRF_TOKEN'))) {
            if (0 === count($typeHrs->getHrs())) {
                $this->entityManager->remove($typeHrs);
                $this->entityManager->flush();

                return $this->json($id, Response::HTTP_OK);
            }

            return $this->json('not_empty', Response::HTTP_INTERNAL_SERVER_ERROR);
        }

        return $this->json(false, Response::HTTP_INTERNAL_SERVER_ERROR);
    }
}
