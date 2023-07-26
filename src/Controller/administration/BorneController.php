<?php
/*
 * Copyright (c) 2022. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Controller/administration/BorneController.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 14/09/2022 08:58
 */

namespace App\Controller\administration;

use App\Classes\MyExport;
use App\Classes\MySerializer;
use App\Controller\BaseController;
use App\Entity\Borne;
use App\Entity\Constantes;
use App\Form\BorneType;
use App\Repository\BorneRepository;
use App\Table\BorneTableType;
use JsonException;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

#[Route('/administration/bornes')]
class BorneController extends BaseController
{
    /**
     * @throws JsonException
     */
    #[Route('/', name: 'administration_borne_index', methods: ['GET', 'POST'])]
    public function index(Request $request): Response
    {
        $this->denyAccessUnlessGranted('MINIMAL_ROLE_ASS', $this->getDepartement());

        $table = $this->createTable(BorneTableType::class, [
            'departement' => $this->getDepartement(),
        ]);
        $table->handleRequest($request);

        if ($table->isCallback()) {
            return $table->getCallbackResponse();
        }

        return $this->render('administration/borne/index.html.twig', [
            'table' => $table,
        ]);
    }

    #[Route(path: '/export.{_format}', name: 'administration_borne_export', requirements: ['_format' => 'csv|xlsx|pdf'], methods: 'GET')]
    public function export(
        MySerializer $mySerializer,
        MyExport $myExport, BorneRepository $borneRepository, string $_format): Response
    {
        $this->denyAccessUnlessGranted('MINIMAL_ROLE_ASS', $this->getDepartement());
        $bornes = $borneRepository->findByDepartement($this->dataUserSession->getDepartement());
        $data = $mySerializer->getDataFromSerialization(
            $bornes,
            ['message', 'icone', 'couleur', 'url', 'dateDebutPublication', 'dateFinPublication'],
            ['bornes_administration', 'semestre']
        );

        return $myExport->genereFichierGeneriqueFromData(
            $_format,
            $data,
            'bornes_'.$this->getDepartement()?->getLibelle(),
        );
    }

    #[Route(path: '/{id}/duplicate', name: 'administration_borne_duplicate', methods: 'GET')]
    public function duplicate(Borne $borne): Response
    {
        $this->denyAccessUnlessGranted('MINIMAL_ROLE_ASS', $borne->getSemestres()[0]);
        $newBorne = clone $borne;
        $this->entityManager->persist($newBorne);
        $this->entityManager->flush();
        $this->addFlashBag(Constantes::FLASHBAG_SUCCESS, 'borne.duplicate.success.flash');

        return $this->redirectToRoute('administration_borne_edit', ['id' => $newBorne->getId()]);
    }

    #[Route(path: '/new', name: 'administration_borne_new', methods: 'GET|POST')]
    public function create(Request $request): Response
    {
        $this->denyAccessUnlessGranted('MINIMAL_ROLE_ASS', $this->getDepartement());
        $borne = new Borne();
        $form = $this->createForm(
            BorneType::class,
            $borne,
            [
                'departement' => $this->dataUserSession->getDepartement(),
                'attr' => [
                    'data-provide' => 'validation',
                ],
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
            'form' => $form,
        ]);
    }

    #[Route(path: '/{id}', name: 'administration_borne_show', methods: 'GET')]
    public function show(Borne $borne): Response
    {
        $this->denyAccessUnlessGranted('MINIMAL_ROLE_ASS', $borne->getSemestres()[0]);

        return $this->render('administration/borne/show.html.twig', ['borne' => $borne]);
    }

    #[Route(path: '/{id}/edit', name: 'administration_borne_edit', methods: 'GET|POST')]
    public function edit(Request $request, Borne $borne): Response
    {
        $this->denyAccessUnlessGranted('MINIMAL_ROLE_ASS', $borne->getSemestres()[0]);
        $form = $this->createForm(
            BorneType::class,
            $borne,
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
            $this->addFlashBag(Constantes::FLASHBAG_SUCCESS, 'borne.edit.success.flash');
            if (null !== $request->request->get('btn_update')) {
                return $this->redirectToRoute('administration_borne_index');
            }

            return $this->redirectToRoute('administration_borne_edit', ['id' => $borne->getId()]);
        }

        return $this->render('administration/borne/edit.html.twig', [
            'borne' => $borne,
            'form' => $form,
        ]);
    }

    #[Route(path: '/{id}', name: 'administration_borne_delete', methods: 'DELETE|POST')]
    public function delete(Request $request, Borne $borne): Response
    {
        $this->denyAccessUnlessGranted('MINIMAL_ROLE_ASS', $borne->getSemestres()[0]);
        $id = $borne->getId();
        if ($this->isCsrfTokenValid('delete'.$id, $request->server->get('HTTP_X_CSRF_TOKEN'))) {
            $this->entityManager->remove($borne);
            $this->entityManager->flush();
            $this->addFlashBag(Constantes::FLASHBAG_SUCCESS, 'borne.delete.success.flash');

            return $this->json($id, Response::HTTP_OK);
        }
        $this->addFlashBag(Constantes::FLASHBAG_ERROR, 'borne.delete.error.flash');

        return $this->json(false, Response::HTTP_INTERNAL_SERVER_ERROR);
    }

    #[Route(path: '/visibilite/{id}', name: 'administration_borne_visibilite', options: ['expose' => true])]
    public function visibilite(Borne $borne): JsonResponse
    {
        $this->denyAccessUnlessGranted('MINIMAL_ROLE_ASS', $borne->getSemestres()[0]);
        $borne->setVisible(!$borne->getVisible());
        $this->entityManager->flush();

        return $this->json($borne->getVisible(), Response::HTTP_OK);
    }
}
