<?php
// Copyright (c) 2020. | David Annebicque | IUT de Troyes  - All Rights Reserved
// @file /Users/davidannebicque/htdocs/intranetV3/src/Controller/administration/TypeDocumentController.php
// @author davidannebicque
// @project intranetV3
// @lastUpdate 26/07/2020 11:13

namespace App\Controller\administration;

use App\Classes\MyExport;
use App\Controller\BaseController;
use App\Entity\Constantes;
use App\Entity\TypeDocument;
use App\Form\TypeDocumentType;
use App\Repository\TypeDocumentRepository;
use PhpOffice\PhpSpreadsheet\Exception;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

/**
 * @Route("/administration/categorie-documents")
 */
class TypeDocumentController extends BaseController
{
    /**
     * @Route("/", name="administration_type_document_index", methods="GET")
     * @param TypeDocumentRepository $typeDocumentRepository
     *
     * @return Response
     */
    public function index(TypeDocumentRepository $typeDocumentRepository): Response
    {
        return $this->render(
            'administration/type_document/index.html.twig',
            ['type_documents' => $typeDocumentRepository->findAll()]
        );
    }

    /**
     * @Route("/export.{_format}", name="administration_type_document_export", methods="GET",
     *                             requirements={"_format":"pdf|csv|xlsx"})
     * @param MyExport               $myExport
     * @param TypeDocumentRepository $typeDocumentRepository
     * @param                        $_format
     *
     * @return Response
     * @throws Exception
     */
    public function export(MyExport $myExport, TypeDocumentRepository $typeDocumentRepository, $_format): Response
    {
        $typesDocuments = $typeDocumentRepository->findByDepartement($this->getDepartement());

        return $myExport->genereFichierGenerique(
            $_format,
            $typesDocuments,
            'types documents',
            ['typedocument_administration'],
            [
                'libelle',
                'nbDocuments',//todo: comment l'intégrer ?

            ]
        );
    }

    /**
     * @Route("/new", name="administration_type_document_new", methods="GET|POST")
     * @param Request $request
     *
     * @return Response
     */
    public function create(Request $request): Response
    {
        $typeDocument = new TypeDocument($this->dataUserSession->getDepartement());
        $form = $this->createForm(TypeDocumentType::class, $typeDocument, [
            'attr' => [
                'data-provide' => 'validation'
            ]
        ]);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $this->entityManager->persist($typeDocument);
            $this->entityManager->flush();
            $this->addFlashBag(Constantes::FLASHBAG_SUCCESS, 'type_document.add.success.flash');

            return $this->redirectToRoute('administration_type_document_index');
        }

        return $this->render('administration/type_document/new.html.twig', [
            'type_document' => $typeDocument,
            'form'          => $form->createView(),
        ]);
    }

    /**
     * @Route("/{id}", name="administration_type_document_show", methods="GET")
     * @param TypeDocument $typeDocument
     *
     * @return Response
     */
    public function show(TypeDocument $typeDocument): Response
    {
        return $this->render('administration/type_document/show.html.twig', ['type_document' => $typeDocument]);
    }

    /**
     * @Route("/{id}/edit", name="administration_type_document_edit", methods="GET|POST")
     * @param Request      $request
     * @param TypeDocument $typeDocument
     *
     * @return Response
     */
    public function edit(Request $request, TypeDocument $typeDocument): Response
    {
        $form = $this->createForm(TypeDocumentType::class, $typeDocument, [
            'attr' => [
                'data-provide' => 'validation'
            ]
        ]);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $this->entityManager->flush();
            $this->addFlashBag(Constantes::FLASHBAG_SUCCESS, 'type_document.edit.success.flash');
            if ($request->request->get('btn_update') !== null) {
                return $this->redirectToRoute('administration_type_document_index');
            }

            return $this->redirectToRoute('administration_type_document_edit', ['id' => $typeDocument->getId()]);
        }

        return $this->render('administration/type_document/edit.html.twig', [
            'type_document' => $typeDocument,
            'form'          => $form->createView(),
        ]);
    }

    /**
     * @Route("/{id}", name="administration_type_document_delete", methods="DELETE")
     * @param Request      $request
     * @param TypeDocument $typeDocument
     *
     * @return Response
     */
    public function delete(
        Request $request,
        TypeDocument $typeDocument
    ): Response {
        $id = $typeDocument->getId();
        if ($this->isCsrfTokenValid('delete' . $id, $request->request->get('_token'))) {
            foreach ($typeDocument->getDocuments() as $document) {
                $typeDocument->removeDocument($document);
            }

            $this->entityManager->remove($typeDocument);
            $this->entityManager->flush();

            return $this->json($id, Response::HTTP_OK);
        }

        return $this->json(false, Response::HTTP_INTERNAL_SERVER_ERROR);
    }

    /**
     * @Route("/{id}/duplicate", name="administration_type_document_duplicate", methods="GET|POST")
     * @param TypeDocument $type_document
     *
     * @return Response
     */
    public function duplicate(TypeDocument $type_document): Response
    {
        $newTypeDocument = clone $type_document;

        $this->entityManager->persist($newTypeDocument);
        $this->entityManager->flush();
        $this->addFlashBag(Constantes::FLASHBAG_SUCCESS, 'type_document.duplicate.success.flash');

        return $this->redirectToRoute('administration_type_document_edit', ['id' => $newTypeDocument->getId()]);
    }
}
