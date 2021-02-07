<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Controller/administration/ActualiteController.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 07/02/2021 11:20
 */

namespace App\Controller\administration;

use App\Classes\MyExport;
use App\Controller\BaseController;
use App\Entity\Actualite;
use App\Entity\Constantes;
use App\Form\ActualiteType;
use App\Repository\ActualiteRepository;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

/**
 * @Route("/administration/actualites")
 */
class ActualiteController extends BaseController
{
    /**
     * @Route("/", name="administration_actualite_index", methods="GET")
     */
    public function index(ActualiteRepository $actualiteRepository): Response
    {
        return $this->render(
            'administration/actualite/index.html.twig',
            ['actualites' => $actualiteRepository->getByDepartement($this->getDepartement())]
        );
    }

    /**
     * @Route("/export.{_format}", name="administration_actualite_export", methods="GET",
     *                             requirements={"_format"="csv|xlsx|pdf"})
     *
     * @param $_format
     */
    public function export(MyExport $myExport, ActualiteRepository $actualiteRepository, $_format): Response
    {
        $actualites = $actualiteRepository->getByDepartement($this->getDepartement());

        return $myExport->genereFichierGenerique(
            $_format,
            $actualites,
            'actualites',
            ['actualite_administration', 'utilisateur'],
            ['titre', 'texte', 'departement' => ['libelle']]
        );
    }

    /**
     * @Route("/new", name="administration_actualite_new", methods="GET|POST")
     */
    public function create(Request $request): Response
    {
        $actualite = new Actualite($this->dataUserSession->getDepartement());
        $form = $this->createForm(ActualiteType::class, $actualite, [
            'attr' => [
                'data-provide' => 'validation',
                'novalidate'   => true,
            ],
        ]);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $this->entityManager->persist($actualite);
            $this->entityManager->flush();
            $this->addFlashBag(Constantes::FLASHBAG_SUCCESS, 'actualite.add.success.flash');

            return $this->redirectToRoute('administration_actualite_index');
        }

        return $this->render('administration/actualite/new.html.twig', [
            'actualite' => $actualite,
            'form'      => $form->createView(),
        ]);
    }

    /**
     * @Route("/{id}", name="administration_actualite_show", methods="GET")
     */
    public function show(Actualite $actualite): Response
    {
        return $this->render('administration/actualite/show.html.twig', ['actualite' => $actualite]);
    }

    /**
     * @Route("/{id}/edit", name="administration_actualite_edit", methods="GET|POST")
     */
    public function edit(Request $request, Actualite $actualite): Response
    {
        $form = $this->createForm(ActualiteType::class, $actualite, [
            'attr' => [
                'data-provide' => 'validation',
            ],
        ]);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $this->entityManager->flush();
            $this->addFlashBag(Constantes::FLASHBAG_SUCCESS, 'actualite.edit.success.flash');

            if (null !== $request->request->get('btn_update')) {
                return $this->redirectToRoute('administration_actualite_index');
            }

            return $this->redirectToRoute('administration_actualite_edit', ['id' => $actualite->getId()]);
        }

        return $this->render('administration/actualite/edit.html.twig', [
            'actualite' => $actualite,
            'form'      => $form->createView(),
        ]);
    }

    /**
     * @Route("/{id}", name="administration_actualite_delete", methods="DELETE")
     */
    public function delete(Request $request, Actualite $actualite): Response
    {
        $id = $actualite->getId();
        if ($this->isCsrfTokenValid('delete' . $id, $request->request->get('_token'))) {
            $this->entityManager->remove($actualite);
            $this->entityManager->flush();
            $this->addFlashBag(
                Constantes::FLASHBAG_SUCCESS,
                'actualite.delete.success.flash'
            );

            return $this->json($id, Response::HTTP_OK);
        }

        $this->addFlashBag(Constantes::FLASHBAG_ERROR, 'actualite.delete.error.flash');

        return $this->json(false, Response::HTTP_INTERNAL_SERVER_ERROR);
    }

    /**
     * @Route("/{id}/duplicate", name="administration_actualite_duplicate", methods="GET|POST")
     */
    public function duplicate(Actualite $actualite): Response
    {
        $newActualite = clone $actualite;

        $this->entityManager->persist($newActualite);
        $this->entityManager->flush();
        $this->addFlashBag(Constantes::FLASHBAG_SUCCESS, 'actualite.duplicate.success.flash');

        return $this->redirectToRoute('administration_actualite_edit', ['id' => $newActualite->getId()]);
    }
}
