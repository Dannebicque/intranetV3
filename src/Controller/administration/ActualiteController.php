<?php
/*
 * Copyright (c) 2022. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Controller/administration/ActualiteController.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 14/09/2022 09:23
 */

namespace App\Controller\administration;

use App\Classes\MyExport;
use App\Classes\MySerializer;
use App\Controller\BaseController;
use App\Entity\Actualite;
use App\Entity\Constantes;
use App\Form\ActualiteType;
use App\Repository\ActualiteRepository;
use App\Table\ActualiteTableType;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

#[Route('/administration/actualites', name: 'administration_actualite_')]
class ActualiteController extends BaseController
{
    /**
     * @throws \JsonException
     */
    #[Route('/', name: 'index', options: ['expose' => true], methods: ['GET', 'POST'])]
    public function index(
        Request $request
    ): Response {
        $this->denyAccessUnlessGranted('MINIMAL_ROLE_ASS', $this->getDepartement());

        $table = $this->createTable(ActualiteTableType::class, [
            'departement' => $this->getDepartement(),
        ]);
        $table->handleRequest($request);

        if ($table->isCallback()) {
            return $table->getCallbackResponse();
        }

        return $this->render(
            'administration/actualite/index.html.twig',
            [
                'table' => $table,
            ]
        );
    }

    /**
     * @throws \JsonException
     */
    #[Route('/export.{_format}', name: 'export', requirements: ['_format' => 'csv|xlsx|pdf'], methods: ['GET'])]
    public function export(MySerializer $mySerializer, MyExport $myExport, ActualiteRepository $actualiteRepository, string $_format): Response
    {
        $this->denyAccessUnlessGranted('MINIMAL_ROLE_ASS', $this->getDepartement());
        $actualites = $actualiteRepository->getByDepartement($this->getDepartement());

        $data = $mySerializer->getDataFromSerialization(
            $actualites,
            ['titre', 'texte', 'departement' => ['libelle']],
            ['actualite_administration', 'utilisateur']
        );

        return $myExport->genereFichierGeneriqueFromData(
            $_format,
            $data,
            'acutalites',
        );
    }

    #[Route('/new', name: 'new', methods: ['GET', 'POST'])]
    public function create(Request $request): Response
    {
        $this->denyAccessUnlessGranted('MINIMAL_ROLE_ASS', $this->getDepartement());

        $actualite = new Actualite($this->dataUserSession->getDepartement());
        $form = $this->createForm(ActualiteType::class, $actualite, [
            'attr' => [
                'data-provide' => 'validation',
                'novalidate' => true,
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
            'form' => $form->createView(),
        ]);
    }

    #[Route('/{id}', name: 'show', methods: ['GET'])]
    public function show(Actualite $actualite): Response
    {
        $this->denyAccessUnlessGranted('MINIMAL_ROLE_ASS', $actualite->getDepartement());

        return $this->render('administration/actualite/show.html.twig', ['actualite' => $actualite]);
    }

    #[Route('/{id}/edit', name: 'edit', methods: ['GET', 'POST'])]
    public function edit(Request $request, Actualite $actualite): Response
    {
        $this->denyAccessUnlessGranted('MINIMAL_ROLE_ASS', $actualite->getDepartement());

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
            'form' => $form->createView(),
        ]);
    }

    #[Route('/{id}', name: 'delete', methods: ['DELETE'])]
    public function delete(Request $request, Actualite $actualite): Response
    {
        $this->denyAccessUnlessGranted('MINIMAL_ROLE_ASS', $actualite->getDepartement());

        $id = $actualite->getId();
        if ($this->isCsrfTokenValid('delete'.$id, $request->server->get('HTTP_X_CSRF_TOKEN'))) {
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

    #[Route('/{id}/duplicate', name: 'duplicate', methods: ['GET', 'POST'])]
    public function duplicate(Actualite $actualite): Response
    {
        $this->denyAccessUnlessGranted('MINIMAL_ROLE_ASS', $actualite->getDepartement());

        $newActualite = clone $actualite;

        $this->entityManager->persist($newActualite);
        $this->entityManager->flush();
        $this->addFlashBag(Constantes::FLASHBAG_SUCCESS, 'actualite.duplicate.success.flash');

        return $this->redirectToRoute('administration_actualite_edit', ['id' => $newActualite->getId()]);
    }
}
