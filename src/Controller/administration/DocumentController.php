<?php

namespace App\Controller\administration;

use App\Entity\Document;
use App\Form\DocumentType;
use App\MesClasses\DataUserSession;
use App\Repository\DocumentRepository;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

/**
 * @Route({"fr":"administration/documents",
 *         "en":"administration/files"}
 *)
 */
class DocumentController extends Controller
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
     * @param DataUserSession $dataUserSession
     * @param Request         $request
     *
     * @return Response
     * @throws \Symfony\Component\Form\Exception\LogicException
     */
    public function create(DataUserSession $dataUserSession, Request $request): Response
    {
        $document = new Document();
        $form = $this->createForm(DocumentType::class, $document, array('formation' => $dataUserSession->getFormation()->getId()));
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $document->setTaille(10);
            $document->setTypeFichier('PDF');
            $em = $this->getDoctrine()->getManager();
            $em->persist($document);
            $em->flush();

            return $this->redirectToRoute('administration_document_index');
        }

        return $this->render('administration/document/new.html.twig', [
            'document' => $document,
            'form' => $form->createView(),
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
     * @param DataUserSession $dataUserSession
     * @param Request         $request
     * @param Document        $document
     *
     * @return Response
     * @throws \Symfony\Component\Form\Exception\LogicException
     */
    public function edit(DataUserSession $dataUserSession, Request $request, Document $document): Response
    {
        $form = $this->createForm(DocumentType::class, $document, array('formation' => $dataUserSession->getFormation()->getId()));
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $this->getDoctrine()->getManager()->flush();

            return $this->redirectToRoute('administration_document_edit', ['id' => $document->getId()]);
        }

        return $this->render('administration/document/edit.html.twig', [
            'document' => $document,
            'form' => $form->createView(),
        ]);
    }

    /**
     * @Route("/{id}", name="administration_document_delete", methods="DELETE")
     */
    public function delete(Request $request, Document $document): Response
    {
        $id = $document->getId();
        if ($this->isCsrfTokenValid('delete' . $id, $request->request->get('_token'))) {

            $em = $this->getDoctrine()->getManager();
            $em->remove($document);
            $em->flush();

            return $this->json($id, Response::HTTP_OK);
        }

        return $this->json(false, Response::HTTP_INTERNAL_SERVER_ERROR);
    }
}
