<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Controller/superAdministration/TypeDiplomeController.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 07/02/2021 11:20
 */

namespace App\Controller\superAdministration;

use App\Classes\MyExport;
use App\Controller\BaseController;
use App\Entity\Constantes;
use App\Entity\TypeDiplome;
use App\Form\TypeDiplomeType;
use App\Repository\TypeDiplomeRepository;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

/**
 * @Route("/administratif/type-diplome")
 */
class TypeDiplomeController extends BaseController
{
    /**
     * @Route("/", name="sa_type_diplome_index", methods="GET")
     */
    public function index(TypeDiplomeRepository $typeDiplomeRepository): Response
    {
        return $this->render('super-administration/type_diplome/index.html.twig',
            ['type_diplomes' => $typeDiplomeRepository->findAll()]);
    }

    /**
     * @Route("/export.{_format}", name="sa_type_diplome_export", methods="GET",
     *                             requirements={"_format"="csv|xlsx|pdf"})
     *
     * @param $_format
     */
    public function export(MyExport $myExport, TypeDiplomeRepository $typeDiplomeRepository, $_format): Response
    {
        $typeDiplomes = $typeDiplomeRepository->findAll();

        return $myExport->genereFichierGenerique(
            $_format,
            $typeDiplomes,
            'typeDiplomes',
            ['type_diplome_administration'],
            ['libelle', 'sigle', 'nbSemestres', 'niveauEntree', 'niveauSortie']
        );
    }

    /**
     * @Route("/new", name="sa_type_diplome_new", methods="GET|POST")
     */
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
            'form'         => $form->createView(),
        ]);
    }

    /**
     * @Route("/{id}", name="sa_type_diplome_show", methods="GET")
     */
    public function show(TypeDiplome $typeDiplome): Response
    {
        return $this->render('super-administration/type_diplome/show.html.twig', ['type_diplome' => $typeDiplome]);
    }

    /**
     * @Route("/{id}/edit", name="sa_type_diplome_edit", methods="GET|POST")
     */
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
            'form'         => $form->createView(),
        ]);
    }

    /**
     * @Route("/{id}/duplicate", name="sa_type_diplome_duplicate", methods="GET|POST")
     */
    public function duplicate(TypeDiplome $typeDiplome): Response
    {
        $newTypeDiplome = clone $typeDiplome;

        $this->entityManager->persist($newTypeDiplome);
        $this->entityManager->flush();
        $this->addFlashBag(Constantes::FLASHBAG_SUCCESS, 'type_diplome.duplicate.success.flash');

        return $this->redirectToRoute('sa_type_diplome_edit', ['id' => $newTypeDiplome->getId()]);
    }

    /**
     * @Route("/{id}", name="sa_type_diplome_delete", methods="DELETE")
     */
    public function delete(Request $request, TypeDiplome $typeDiplome): Response
    {
        $id = $typeDiplome->getId();
        if ($this->isCsrfTokenValid('delete' . $id, $request->request->get('_token'))) {
            if (0 === \count($typeDiplome->getDiplomes())) {
                $this->entityManager->remove($typeDiplome);
                $this->entityManager->flush();

                return $this->json($id, Response::HTTP_OK);
            }

            return $this->json('not_empty', Response::HTTP_INTERNAL_SERVER_ERROR);
        }

        return $this->json(false, Response::HTTP_INTERNAL_SERVER_ERROR);
    }
}
