<?php

namespace App\Controller\administration;

use App\Controller\BaseController;
use App\Entity\TypeDocument;
use App\Form\TypeDocumentType;
use App\MesClasses\DataUserSession;
use App\Repository\TypeDocumentRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

/**
 * @Route({"fr":"administration/categories-document",
 *         "en":"administration/category-document"})
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
        return $this->render('administration/type_document/index.html.twig', ['type_documents' => $typeDocumentRepository->findAll()]);
    }

    /**
     * @Route("/help", name="administration_type_document_help", methods="GET")
     */
    public function help(): Response
    {
        return $this->render('administration/type_document/help.html.twig');
    }

    /**
     * @Route("/save", name="administration_type_document_save", methods="GET")
     */
    public function save(): Response
    {
        //save en csv
        return new Response('', Response::HTTP_OK);
    }

    /**
     * @Route("/imprimer", name="administration_type_document_print", methods="GET")
     */
    public function imprimer(): Response
    {
        //print (pdf)
        return new Response('', Response::HTTP_OK);
    }

    /**
     * @Route("/new", name="administration_type_document_new", methods="GET|POST")
     * @param Request $request
     *
     * @return Response
     * @throws \Symfony\Component\Form\Exception\LogicException
     */
    public function create(EntityManagerInterface $entityManager, Request $request): Response
    {
        $typeDocument = new TypeDocument($this->dataUserSession->getFormation());
        $form = $this->createForm(TypeDocumentType::class, $typeDocument);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $entityManager->persist($typeDocument);
            $entityManager->flush();

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
     * @throws \Symfony\Component\Form\Exception\LogicException
     */
    public function edit(EntityManagerInterface $entityManager, Request $request, TypeDocument $typeDocument): Response
    {
        $form = $this->createForm(TypeDocumentType::class, $typeDocument);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $entityManager->flush();

            return $this->redirectToRoute('administration_type_document_edit', ['id' => $typeDocument->getId()]);
        }

        return $this->render('administration/type_document/edit.html.twig', [
            'type_document' => $typeDocument,
            'form'          => $form->createView(),
        ]);
    }

    /**
     * @Route("/{id}", name="administration_type_document_delete", methods="DELETE")
     */
    public function delete(): void
    {

    }
}
