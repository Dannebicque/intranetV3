<?php
/*
 * Copyright (c) 2024. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Controller/superAdministration/TypeDiplomeController.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 20/02/2024 18:55
 */

namespace App\Controller\superAdministration;

use App\Classes\MyExport;
use App\Classes\MySerializer;
use App\Controller\BaseController;
use App\Entity\Constantes;
use App\Entity\TypeDiplome;
use App\Form\TypeDiplomeType;
use App\Repository\TypeDiplomeRepository;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;
use function count;

#[Route(path: '/administratif/type-diplome')]
class TypeDiplomeController extends BaseController
{
    #[Route(path: '/', name: 'sa_type_diplome_index', methods: 'GET')]
    public function index(TypeDiplomeRepository $typeDiplomeRepository): Response
    {
        return $this->render('super-administration/type_diplome/index.html.twig',
            ['type_diplomes' => $typeDiplomeRepository->findAll()]);
    }

    #[Route(path: '/export.{_format}', name: 'sa_type_diplome_export', requirements: ['_format' => 'csv|xlsx|pdf'], methods: 'GET')]
    public function export(
        MySerializer $mySerializer,
        MyExport $myExport, TypeDiplomeRepository $typeDiplomeRepository, string $_format): Response
    {
        $typeDiplomes = $typeDiplomeRepository->findAll();
        $data = $mySerializer->getDataFromSerialization(
            $typeDiplomes,
            ['libelle', 'sigle', 'nbSemestres', 'niveauEntree', 'niveauSortie'],
            ['type_diplome_administration']
        );

        return $myExport->genereFichierGeneriqueFromData(
            $_format,
            $data,
            'typeDiplomes'
        );
    }

    #[Route(path: '/new', name: 'sa_type_diplome_new', methods: 'GET|POST')]
    public function create(Request $request): Response
    {
        $typeDiplome = new TypeDiplome();
        $form = $this->createForm(TypeDiplomeType::class, $typeDiplome, [
            'attr' => [
                'data-provide' => 'validation',
            ],
        ]);
        $form->handleRequest($request);
        if ($form->isSubmitted() && $form->isValid()) {
            $this->entityManager->persist($typeDiplome);
            $this->entityManager->flush();
            $this->addFlashBag(Constantes::FLASHBAG_SUCCESS, 'type_diplome.add.success.flash');

            return $this->redirectToRoute('sa_type_diplome_index');
        }

        return $this->render('super-administration/type_diplome/new.html.twig', [
            'type_diplome' => $typeDiplome,
            'form' => $form,
        ]);
    }

    #[Route(path: '/{id}', name: 'sa_type_diplome_show', methods: 'GET')]
    public function show(TypeDiplome $typeDiplome): Response
    {
        return $this->render('super-administration/type_diplome/show.html.twig', ['type_diplome' => $typeDiplome]);
    }

    #[Route(path: '/{id}/edit', name: 'sa_type_diplome_edit', methods: 'GET|POST')]
    public function edit(Request $request, TypeDiplome $typeDiplome): Response
    {
        $form = $this->createForm(TypeDiplomeType::class, $typeDiplome, [
            'attr' => [
                'data-provide' => 'validation',
            ],
        ]);
        $form->handleRequest($request);
        if ($form->isSubmitted() && $form->isValid()) {
            $this->entityManager->flush();
            $this->addFlashBag(Constantes::FLASHBAG_SUCCESS, 'type_diplome.edit.success.flash');

            return $this->redirectToRoute('sa_type_diplome_edit', ['id' => $typeDiplome->getId()]);
        }

        return $this->render('super-administration/type_diplome/edit.html.twig', [
            'type_diplome' => $typeDiplome,
            'form' => $form,
        ]);
    }

    #[Route(path: '/{id}/duplicate', name: 'sa_type_diplome_duplicate', methods: 'GET|POST')]
    public function duplicate(TypeDiplome $typeDiplome): Response
    {
        $newTypeDiplome = clone $typeDiplome;
        $this->entityManager->persist($newTypeDiplome);
        $this->entityManager->flush();
        $this->addFlashBag(Constantes::FLASHBAG_SUCCESS, 'type_diplome.duplicate.success.flash');

        return $this->redirectToRoute('sa_type_diplome_edit', ['id' => $newTypeDiplome->getId()]);
    }

    #[Route(path: '/{id}', name: 'sa_type_diplome_delete', methods: 'DELETE')]
    public function delete(Request $request, TypeDiplome $typeDiplome): Response
    {
        $id = $typeDiplome->getId();
        if ($this->isCsrfTokenValid('delete'.$id, $request->server->get('HTTP_X_CSRF_TOKEN'))) {
            if (0 === count($typeDiplome->getDiplomes())) {
                $this->entityManager->remove($typeDiplome);
                $this->entityManager->flush();

                return $this->json($id, Response::HTTP_OK);
            }

            return $this->json('not_empty', Response::HTTP_INTERNAL_SERVER_ERROR);
        }

        return $this->json(false, Response::HTTP_INTERNAL_SERVER_ERROR);
    }
}
