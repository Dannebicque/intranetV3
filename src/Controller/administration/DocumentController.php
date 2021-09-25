<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Controller/administration/DocumentController.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 25/09/2021 16:20
 */

namespace App\Controller\administration;

use App\Classes\MyExport;
use App\Controller\BaseController;
use App\Entity\Constantes;
use App\Entity\Document;
use App\Form\DocumentType;
use App\Repository\DocumentFavoriEtudiantRepository;
use App\Repository\DocumentFavoriPersonnelRepository;
use App\Repository\DocumentRepository;
use App\Table\DocumentTableType;
use Exception;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\ParamConverter;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

#[Route('/administration/documents', name: 'administration_document_')]
class DocumentController extends BaseController
{
    #[Route('/', name: 'index', methods: ['GET', 'POST'], options: ['expose' => true])]
    public function index(Request $request): Response
    {
        $table = $this->createTable(DocumentTableType::class, [
            'departement' => $this->getDepartement(),
        ]);
        $table->handleRequest($request);

        if ($table->isCallback()) {
            return $table->getCallbackResponse();
        }

        return $this->render('administration/document/index.html.twig',
            ['table' => $table]);
    }

    #[Route("/export.{_format}", name: "export", methods: "GET", requirements: ["_format" => "csv|xlsx|pdf"])]
    public function export(MyExport $myExport, DocumentRepository $documentRepository, $_format): Response
    {
        $documents = $documentRepository->findByDepartement($this->getDepartement());

        return $myExport->genereFichierGenerique(
            $_format,
            $documents,
            'documents',
            ['document_administration', 'semestre'],
            ['libelle', 'description', 'typeDocument' => ['libelle'], 'semestre' => ['libelle']]
        );
    }

    #[Route("/new", name: "new", methods: ['GET', 'POST'])]
    public function create(Request $request): Response
    {
        $document = new Document();
        $form = $this->createForm(
            DocumentType::class,
            $document,
            [
                'departement' => $this->dataUserSession->getDepartement(),
                'attr' => [
                    'data-provide' => 'validation',
                ],
            ]
        );
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $document->setTaille(10);
            $document->setTypeFichier('PDF');
            $this->entityManager->persist($document);
            $this->entityManager->flush();
            $this->addFlashBag(Constantes::FLASHBAG_SUCCESS, 'document.add.success.flash');

            return $this->redirectToRoute('administration_document_index');
        }

        return $this->render('administration/document/new.html.twig', [
            'document' => $document,
            'form' => $form->createView(),
        ]);
    }

    /**
     * @Route("/{id}", name="show", methods="GET")
     * @ParamConverter("document", options={"mapping": {"id": "uuid"}})
     */
    public function show(Document $document): Response
    {
        return $this->render('administration/document/show.html.twig', ['document' => $document]);
    }

    /**
     * @Route("/{id}/edit", name="edit", methods="GET|POST")
     * @ParamConverter("document", options={"mapping": {"id": "uuid"}})
     */
    public function edit(Request $request, Document $document): Response
    {
        $form = $this->createForm(
            DocumentType::class,
            $document,
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
            $this->addFlashBag(Constantes::FLASHBAG_SUCCESS, 'document.edit.success.flash');
            if (null !== $request->request->get('btn_update')) {
                return $this->redirectToRoute('administration_document_index');
            }

            return $this->redirectToRoute('administration_document_edit', ['id' => $document->getUuidString()]);
        }

        return $this->render('administration/document/edit.html.twig', [
            'document' => $document,
            'form' => $form->createView(),
        ]);
    }

    /**
     * @Route("/{id}", name="delete", methods="DELETE")
     *
     * @ParamConverter("document", options={"mapping": {"id": "uuid"}})
     */
    public function delete(
        DocumentFavoriEtudiantRepository $documentFavoriEtudiantRepository,
        DocumentFavoriPersonnelRepository $documentFavoriPersonnelRepository,
        Request $request,
        Document $document
    ): Response {
        $id = $document->getId();
        $uuid = $document->getUuid();

        if ($this->isCsrfTokenValid('delete' . $uuid, $request->request->get('_token'))) {

            //suppression des favoris
            $docs = $documentFavoriEtudiantRepository->findBy(['document' => $document->getId()]);
            foreach ($docs as $doc) {
                $this->entityManager->remove($doc);
            }

            $docs = $documentFavoriPersonnelRepository->findBy(['document' => $document->getId()]);
            foreach ($docs as $doc) {
                $this->entityManager->remove($doc);
            }

            $this->entityManager->remove($document);
            $this->entityManager->flush();
            $this->addFlashBag(Constantes::FLASHBAG_SUCCESS, 'document.delete.success.flash');

            return $this->json($id, Response::HTTP_OK);
        }
        $this->addFlashBag(Constantes::FLASHBAG_ERROR, 'document.delete.error.flash');

        return $this->json(false, Response::HTTP_INTERNAL_SERVER_ERROR);
    }

    /**
     * @Route("/{id}/duplicate", name="duplicate", methods="GET|POST")
     * @ParamConverter("document", options={"mapping": {"id": "uuid"}})
     *
     * @throws Exception
     */
    public function duplicate(Document $document): Response
    {
        $newDocument = clone $document;

        $this->entityManager->persist($newDocument);
        $this->entityManager->flush();
        $this->addFlashBag(Constantes::FLASHBAG_SUCCESS, 'document.duplicate.success.flash');

        return $this->redirectToRoute('administration_document_edit', ['id' => $newDocument->getUuidString()]);
    }
}
