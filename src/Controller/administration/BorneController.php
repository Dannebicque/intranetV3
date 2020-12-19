<?php
// Copyright (c) 2020. | David Annebicque | IUT de Troyes  - All Rights Reserved
// @file /Users/davidannebicque/htdocs/intranetV3/src/Controller/administration/BorneController.php
// @author davidannebicque
// @project intranetV3
// @lastUpdate 19/12/2020 14:57

namespace App\Controller\administration;

use App\Controller\BaseController;
use App\Entity\Borne;
use App\Entity\Constantes;
use App\Form\BorneType;
use App\Classes\MyExport;
use App\Repository\BorneRepository;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

/**
 * @Route("/administration/bornes")
 */
class BorneController extends BaseController
{
    /**
     * @Route("/", name="administration_borne_index", methods="GET")
     * @param BorneRepository $borneRepository
     *
     * @return Response
     */
    public function index(BorneRepository $borneRepository): Response
    {
        return $this->render('administration/borne/index.html.twig', ['bornes' => $borneRepository->findAll()]);
    }

    /**
     * @Route("/export.{_format}", name="administration_borne_export", methods="GET",
     *                             requirements={"_format"="csv|xlsx|pdf"})
     * @param MyExport        $myExport
     * @param BorneRepository $borneRepository
     * @param                 $_format
     *
     * @return Response
     */
    public function export(MyExport $myExport, BorneRepository $borneRepository, $_format): Response
    {
        $bornes = $borneRepository->findByDepartement($this->dataUserSession->getDepartement(), 0);
        return $myExport->genereFichierGenerique(
            $_format,
            $bornes,
            'bornes',
            ['bornes_administration', 'semestre'],
            ['message', 'icone', 'couleur', 'url', 'dateDebutPublication', 'dateFinPublication']
        );
    }

    /**
     * @Route("/{id}/duplicate", name="administration_borne_duplicate", methods="GET")
     * @param Borne $borne
     *
     * @return Response
     */
    public function duplicate(Borne $borne): Response
    {
        $newBorne = clone $borne;
        $this->entityManager->persist($newBorne);
        $this->entityManager->flush();
        $this->addFlashBag(Constantes::FLASHBAG_SUCCESS, 'borne.duplicate.success.flash');

        return $this->redirectToRoute('administration_borne_edit', ['id' => $newBorne->getId()]);
    }

    /**
     * @Route("/new", name="administration_borne_new", methods="GET|POST")
     * @param Request $request
     *
     * @return Response
     */
    public function create(Request $request): Response
    {
        $borne = new Borne();
        $form = $this->createForm(
            BorneType::class,
            $borne,
            [
                'departement' => $this->dataUserSession->getDepartement(),
                'attr'        => [
                    'data-provide' => 'validation'
                ]
            ]
        );
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {

            $this->entityManager->persist($borne);
            $this->entityManager->flush();
            $this->addFlashBag(Constantes::FLASHBAG_SUCCESS, 'borne.add.success.flash');

            return $this->redirectToRoute('administration_borne_index');
        }

        return $this->render('administration/borne/new.html.twig', [
            'borne' => $borne,
            'form'  => $form->createView(),
        ]);
    }

    /**
     * @Route("/{id}", name="administration_borne_show", methods="GET")
     * @param Borne $borne
     *
     * @return Response
     */
    public function show(Borne $borne): Response
    {
        return $this->render('administration/borne/show.html.twig', ['borne' => $borne]);
    }

    /**
     * @Route("/{id}/edit", name="administration_borne_edit", methods="GET|POST")
     * @param Request $request
     * @param Borne   $borne
     *
     * @return Response
     */
    public function edit(Request $request, Borne $borne): Response
    {
        $form = $this->createForm(
            BorneType::class,
            $borne,
            [
                'departement' => $this->dataUserSession->getDepartement(),
                'attr'        => [
                    'data-provide' => 'validation'
                ]
            ]
        );
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $this->entityManager->flush();
            $this->addFlashBag(Constantes::FLASHBAG_SUCCESS, 'borne.edit.success.flash');
            if ($request->request->get('btn_update') !== null) {
                return $this->redirectToRoute('administration_borne_index');
            }

            return $this->redirectToRoute('administration_borne_edit', ['id' => $borne->getId()]);
        }

        return $this->render('administration/borne/edit.html.twig', [
            'borne' => $borne,
            'form'  => $form->createView(),
        ]);
    }

    /**
     * @Route("/{id}", name="administration_borne_delete", methods="DELETE")
     * @param Request $request
     * @param Borne   $borne
     *
     * @return Response
     */
    public function delete(Request $request, Borne $borne): Response
    {
        $id = $borne->getId();
        if ($this->isCsrfTokenValid('delete' . $id, $request->request->get('_token'))) {
            $this->entityManager->remove($borne);
            $this->entityManager->flush();
            $this->addFlashBag(Constantes::FLASHBAG_SUCCESS, 'borne.delete.success.flash');

            return $this->json($id, Response::HTTP_OK);
        }
        $this->addFlashBag(Constantes::FLASHBAG_ERROR, 'borne.delete.error.flash');

        return $this->json(false, Response::HTTP_INTERNAL_SERVER_ERROR);
    }

    /**
     * @Route("/visibilite/{id}", name="administration_borne_visibilite", options={"expose"=true})
     * @param Borne $borne
     *
     * @return JsonResponse
     */
    public function visibilite(Borne $borne): JsonResponse
    {
        $borne->setVisible(!$borne->getVisible());
        $this->entityManager->flush();

        return $this->json($borne->getVisible(), Response::HTTP_OK);
    }
}
