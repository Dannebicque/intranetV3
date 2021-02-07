<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Controller/administration/MaterielController.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 07/02/2021 11:11
 */


namespace App\Controller\administration;

use App\Classes\MyExport;
use App\Controller\BaseController;
use App\Entity\Constantes;
use App\Entity\Materiel;
use App\Form\MaterielType;
use App\Repository\MaterielRepository;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

/**
 * @Route("/administration/materiel")
 */
class MaterielController extends BaseController
{
    /**
     * @Route("/", name="administration_materiel_index", methods="GET")
     */
    public function index(MaterielRepository $materielRepository): Response
    {
        return $this->render('administration/materiel/index.html.twig',
            ['materiels' => $materielRepository->findByDepartement($this->dataUserSession->getDepartement())]);
    }

    /**
     * @Route("/export.{_format}", name="administration_materiel_export", methods="GET",
     *                             requirements={"_format"="csv|xlsx|pdf"})
     *
     * @param $_format
     */
    public function export(MyExport $myExport, MaterielRepository $materielRepository, $_format): Response
    {
        $materiels = $materielRepository->findByDepartement($this->dataUserSession->getDepartement());

        return $myExport->genereFichierGenerique(
            $_format,
            $materiels,
            'materiels',
            ['materiel_administration', 'utilisateur'],
            ['titre', 'texte', 'departement' => ['libelle']]
        );
    }

    /**
     * @Route("/new", name="administration_materiel_new", methods="GET|POST")
     */
    public function create(Request $request): Response
    {
        $materiel = new Materiel();
        $form = $this->createForm(MaterielType::class, $materiel, [
            'attr'        => [
                'data-provide' => 'validation',
            ],
            'departement' => $this->dataUserSession->getDepartement(),
        ]);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $this->entityManager->persist($materiel);
            $this->entityManager->flush();
            $this->addFlashBag(Constantes::FLASHBAG_SUCCESS, 'materiel.add.success.flash');

            return $this->redirectToRoute('administration_materiel_index');
        }

        return $this->render('administration/materiel/new.html.twig', [
            'materiel' => $materiel,
            'form'     => $form->createView(),
        ]);
    }

    /**
     * @Route("/{id}", name="administration_materiel_show", methods="GET")
     */
    public function show(Materiel $materiel): Response
    {
        return $this->render('administration/materiel/show.html.twig', ['materiel' => $materiel]);
    }

    /**
     * @Route("/{id}/edit", name="administration_materiel_edit", methods="GET|POST")
     */
    public function edit(Request $request, Materiel $materiel): Response
    {
        $form = $this->createForm(MaterielType::class, $materiel, [
            'attr'        => [
                'data-provide' => 'validation',
            ],
            'departement' => $this->dataUserSession->getDepartement(),
        ]);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $this->entityManager->flush();
            $this->addFlashBag(Constantes::FLASHBAG_SUCCESS, 'materiel.edit.success.flash');
            if (null !== $request->request->get('btn_update')) {
                return $this->redirectToRoute('administration_materiel_index');
            }

            return $this->redirectToRoute('administration_materiel_edit', ['id' => $materiel->getId()]);
        }

        return $this->render('administration/materiel/edit.html.twig', [
            'materiel' => $materiel,
            'form'     => $form->createView(),
        ]);
    }

    /**
     * @Route("/{id}", name="administration_materiel_delete", methods="DELETE")
     */
    public function delete(Request $request, Materiel $materiel): Response
    {
        $id = $materiel->getId();
        if ($this->isCsrfTokenValid('delete' . $id, $request->request->get('_token'))) {
            $this->entityManager->remove($materiel);
            $this->entityManager->flush();
            $this->addFlashBag(
                Constantes::FLASHBAG_SUCCESS,
                'materiel.delete.success.flash'
            );

            return $this->json($id, Response::HTTP_OK);
        }

        $this->addFlashBag(Constantes::FLASHBAG_ERROR, 'materiel.delete.error.flash');

        return $this->json(false, Response::HTTP_INTERNAL_SERVER_ERROR);
    }

    /**
     * @Route("/{id}/duplicate", name="administration_materiel_duplicate", methods="GET|POST")
     */
    public function duplicate(Materiel $materiel): Response
    {
        $newMateriel = clone $materiel;

        $this->entityManager->persist($newMateriel);
        $this->entityManager->flush();
        $this->addFlashBag(Constantes::FLASHBAG_SUCCESS, 'materiel.duplicate.success.flash');

        return $this->redirectToRoute('administration_materiel_edit', ['id' => $newMateriel->getId()]);
    }
}
