<?php
// Copyright (C) 11 / 2019 | David annebicque | IUT de Troyes - All Rights Reserved
// @file /Users/davidannebicque/htdocs/intranetv3/src/Controller/administration/MaterielController.php
// @author     David Annebicque
// @project intranetv3
// @date 25/11/2019 10:20
// @lastUpdate 23/11/2019 09:14

namespace App\Controller\administration;

use App\Controller\BaseController;
use App\Entity\Constantes;
use App\Entity\Materiel;
use App\Form\MaterielType;
use App\MesClasses\MyExport;
use App\Repository\MaterielRepository;
use PhpOffice\PhpSpreadsheet\Exception;
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
     * @param MaterielRepository $materielRepository
     *
     * @return Response
     */
    public function index(MaterielRepository $materielRepository): Response
    {
        return $this->render('administration/materiel/index.html.twig',
            ['materiels' => $materielRepository->findByDepartement($this->dataUserSession->getDepartement())]);
    }

    /**
     * @Route("/export.{_format}", name="administration_materiel_export", methods="GET",
     *                             requirements={"_format"="csv|xlsx|pdf"})
     * @param MyExport            $myExport
     * @param MaterielRepository  $materielRepository
     *
     * @param                     $_format
     *
     * @return Response
     * @throws Exception
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
     * @param Request $request
     *
     * @return Response
     */
    public function create(Request $request): Response
    {
        $materiel = new Materiel();
        $form = $this->createForm(MaterielType::class, $materiel, [
            'attr'        => [
                'data-provide' => 'validation'
            ],
            'departement' => $this->dataUserSession->getDepartement()
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
     * @param Materiel $materiel
     *
     * @return Response
     */
    public function show(Materiel $materiel): Response
    {
        return $this->render('administration/materiel/show.html.twig', ['materiel' => $materiel]);
    }

    /**
     * @Route("/{id}/edit", name="administration_materiel_edit", methods="GET|POST")
     * @param Request  $request
     * @param Materiel $materiel
     *
     * @return Response
     */
    public function edit(Request $request, Materiel $materiel): Response
    {
        $form = $this->createForm(MaterielType::class, $materiel, [
            'attr'        => [
                'data-provide' => 'validation'
            ],
            'departement' => $this->dataUserSession->getDepartement()
        ]);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $this->entityManager->flush();
            $this->addFlashBag(Constantes::FLASHBAG_SUCCESS, 'materiel.edit.success.flash');
            if ($request->request->get('btn_update') !== null) {
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
     * @param Request  $request
     * @param Materiel $materiel
     *
     * @return Response
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
     * @param Materiel $materiel
     *
     * @return Response
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
