<?php

namespace App\Controller\administration;

use App\Controller\BaseController;
use App\Entity\Document;
use App\Form\DocumentType;
use App\MesClasses\DataUserSession;
use App\Repository\DocumentRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

/**
 * @Route({"fr":"administration/documents",
 *         "en":"administration/files"}
 *)
 */
class DocumentController extends BaseController
{
    /**
     * @Route("/", name="administration_document_index", methods="GET")
     * @param DocumentRepository $documentRepository
     *
     * @return Response
     */
    public function index(DocumentRepository $documentRepository): Response
    {
        return $this->render('administration/document/index.html.twig', ['documents' => $documentRepository->findAll()]);
    }

    /**
     * @Route("/save", name="administration_document_save", methods="GET")
     */
    public function save(): Response
    {
        //save en csv
        return new Response('', Response::HTTP_OK);
    }

    /**
     * @Route("/imprimer", name="administration_document_print", methods="GET")
     */
    public function imprimer(): Response
    {
        //print (pdf)
        return new Response('', Response::HTTP_OK);
    }

    /**
     * @Route("/new", name="administration_document_new", methods="GET|POST")
     * @param Request $request
     *
     * @return Response
     * @throws \Symfony\Component\Form\Exception\LogicException
     */
    public function create(EntityManagerInterface $entityManager, Request $request): Response
    {
        $document = new Document();
        $form = $this->createForm(DocumentType::class, $document,
            array('formation' => $this->dataUserSession->getFormation()));
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $document->setTaille(10);
            $document->setTypeFichier('PDF');
            $entityManager->persist($document);
            $entityManager->flush();

            return $this->redirectToRoute('administration_document_index');
        }

        return $this->render('administration/document/new.html.twig', [
            'document' => $document,
            'form'     => $form->createView(),
        ]);
    }

    /**
     * @Route("/{id}", name="administration_document_show", methods="GET")
     * @param Document $document
     *
     * @return Response
     */
    public function show(Document $document): Response
    {
        return $this->render('administration/document/show.html.twig', ['document' => $document]);
    }

    /**
     * @Route("/{id}/edit", name="administration_document_edit", methods="GET|POST")
     * @param Request  $request
     * @param Document $document
     *
     * @return Response
     * @throws \Symfony\Component\Form\Exception\LogicException
     */
    public function edit(EntityManagerInterface $entityManager, Request $request, Document $document): Response
    {
        $form = $this->createForm(DocumentType::class, $document,
            array('formation' => $this->dataUserSession->getFormation()));
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $entityManager->flush();

            return $this->redirectToRoute('administration_document_edit', ['id' => $document->getId()]);
        }

        return $this->render('administration/document/edit.html.twig', [
            'document' => $document,
            'form'     => $form->createView(),
        ]);
    }

    /**
     * @Route("/{id}", name="administration_document_delete", methods="DELETE")
     * @param Request  $request
     * @param Document $document
     *
     * @return Response
     */
    public function delete(EntityManagerInterface $entityManager, Request $request, Document $document): Response
    {
        $id = $document->getId();
        if ($this->isCsrfTokenValid('delete' . $id, $request->request->get('_token'))) {

            $entityManager->remove($document);
            $entityManager->flush();

            return $this->json($id, Response::HTTP_OK);
        }

        return $this->json(false, Response::HTTP_INTERNAL_SERVER_ERROR);
    }
}
