<?php
/*
 * Copyright (c) 2024. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Controller/superAdministration/TypeCoursController.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 16/02/2024 22:17
 */

namespace App\Controller\superAdministration;

use App\Classes\MyExport;
use App\Classes\MySerializer;
use App\Controller\BaseController;
use App\Entity\Constantes;
use App\Entity\TypeCours;
use App\Form\TypeCoursType;
use App\Repository\TypeCoursRepository;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;

#[Route(path: '/administratif/type-cours')]
class TypeCoursController extends BaseController
{
    // todo: a finaliser et utiliser ?
    #[Route(path: '/', name: 'sa_type_cours_index', methods: 'GET')]
    public function index(TypeCoursRepository $typeCoursRepository): Response
    {
        return $this->render('super-administration/type_cours/index.html.twig',
            ['type_cours' => $typeCoursRepository->findAll()]);
    }

    #[Route(path: '/export.{_format}', name: 'sa_type_cours_export', requirements: ['_format' => 'csv|xlsx|pdf'], methods: 'GET')]
    public function export(
        MySerializer $mySerializer,
        MyExport $myExport, TypeCoursRepository $typeCoursRepository, string $_format): Response
    {
        $typeCours = $typeCoursRepository->findAll();
        $data = $mySerializer->getDataFromSerialization(
            $typeCours,
            ['libelle', 'type', 'incluService', 'maximum'],
            ['type_cours_administration']
        );

        return $myExport->genereFichierGeneriqueFromData(
            $_format,
            $data,
            'typeCours'
        );
    }

    #[Route(path: '/new', name: 'sa_type_cours_new', methods: 'GET|POST')]
    public function create(Request $request): Response
    {
        $typeCours = new TypeCours();
        $form = $this->createForm(TypeCoursType::class, $typeCours, [
            'attr' => [
                'data-provide' => 'validation',
            ],
        ]);
        $form->handleRequest($request);
        if ($form->isSubmitted() && $form->isValid()) {
            $this->entityManager->persist($typeCours);
            $this->entityManager->flush();
            $this->addFlashBag(Constantes::FLASHBAG_SUCCESS, 'type_cours.add.success.flash');

            return $this->redirectToRoute('sa_type_cours_index');
        }

        return $this->render('super-administration/type_cours/new.html.twig', [
            'type_cr' => $typeCours,
            'form' => $form,
        ]);
    }

    #[Route(path: '/{id}', name: 'sa_type_cours_show', methods: 'GET')]
    public function show(TypeCours $typeCours): Response
    {
        return $this->render('super-administration/type_cours/show.html.twig', ['type_cr' => $typeCours]);
    }

    #[Route(path: '/{id}/edit', name: 'sa_type_cours_edit', methods: 'GET|POST')]
    public function edit(Request $request, TypeCours $typeCours): Response
    {
        $form = $this->createForm(TypeCoursType::class, $typeCours, [
            'attr' => [
                'data-provide' => 'validation',
            ],
        ]);
        $form->handleRequest($request);
        if ($form->isSubmitted() && $form->isValid()) {
            $this->entityManager->flush();
            $this->addFlashBag(Constantes::FLASHBAG_SUCCESS, 'type_cours.edit.success.flash');

            if (null !== $request->request->get('btn_update')) {
                return $this->redirectToRoute('sa_type_cours_index');
            }

            return $this->redirectToRoute('sa_type_cours_edit', ['id' => $typeCours->getId()]);
        }

        return $this->render('super-administration/type_cours/edit.html.twig', [
            'type_cours' => $typeCours,
            'form' => $form,
        ]);
    }

    #[Route(path: '/{id}/duplicate', name: 'sa_type_cours_duplicate', methods: 'GET|POST')]
    public function duplicate(TypeCours $typeCours): Response
    {
        $newTypeHrs = clone $typeCours;
        $this->entityManager->persist($newTypeHrs);
        $this->entityManager->flush();

        return $this->redirectToRoute('sa_type_cours_edit', ['id' => $newTypeHrs->getId()]);
    }

    #[Route(path: '/{id}', name: 'sa_type_cours_delete', methods: 'DELETE')]
    public function delete(Request $request, TypeCours $typeCours): Response
    {
        $id = $typeCours->getId();
        if ($this->isCsrfTokenValid('delete'.$id, $request->server->get('HTTP_X_CSRF_TOKEN'))) {
//            if (0 === count($typeCours->getHrs())) {
//                $this->entityManager->remove($typeHrs);
//                $this->entityManager->flush();
//
//                return $this->json($id, Response::HTTP_OK);
//            }

            return $this->json('not_empty', Response::HTTP_INTERNAL_SERVER_ERROR);
        }

        return $this->json(false, Response::HTTP_INTERNAL_SERVER_ERROR);
    }
}
