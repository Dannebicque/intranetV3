<?php

namespace App\Controller\administration;

use App\Controller\BaseController;
use App\Entity\TypeGroupe;
use App\Form\TypeGroupeType;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

/**
 * @Route("/type/groupe")
 */
class TypeGroupeController extends BaseController
{

    /**
     * @Route("/", name="administration_type_groupe_index", methods="GET")
     */
    public function index(): Response
    {
        return $this->redirectToRoute('administration_groupe_index');
    }

    /**
     * @Route("/new", name="administration_type_groupe_new", methods="GET|POST")
     */
    public function create(EntityManagerInterface $entityManager, Request $request): Response
    {
        $typeGroupe = new TypeGroupe();
        $form = $this->createForm(TypeGroupeType::class, $typeGroupe,
            ['formation' => $this->dataUserSession->getFormation()]);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $entityManager->persist($typeGroupe);
            $entityManager->flush();

            return $this->redirectToRoute('administration_groupe_index');
        }

        return $this->render('administration/type_groupe/new.html.twig', [
            'type_groupe' => $typeGroupe,
            'form'        => $form->createView(),
        ]);
    }

    /**
     * @Route("/{id}", name="administration_type_groupe_show", methods="GET")
     */
    public function show(TypeGroupe $typeGroupe): Response
    {
        return $this->render('administration/type_groupe/show.html.twig', ['type_groupe' => $typeGroupe]);
    }

    /**
     * @Route("/{id}/edit", name="administration_type_groupe_edit", methods="GET|POST")
     */
    public function edit(EntityManagerInterface $entityManager, Request $request, TypeGroupe $typeGroupe): Response
    {
        $form = $this->createForm(TypeGroupeType::class, $typeGroupe,
            ['formation' => $this->dataUserSession->getFormation()]);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $entityManager->flush();

            return $this->redirectToRoute('administration_groupe_index');
        }

        return $this->render('administration/type_groupe/edit.html.twig', [
            'type_groupe' => $typeGroupe,
            'form'        => $form->createView(),
        ]);
    }

    /**
     * @Route("/{id}/duplicate", name="administration_type_groupe_duplicate", methods="GET|POST")
     * @param TypeGroupe $typeGroupe
     *
     * @return Response
     */
    public function duplicate(EntityManagerInterface $entityManager, TypeGroupe $typeGroupe): Response
    {
        $newTypeGroupe = clone $typeGroupe;

        $entityManager->persist($newTypeGroupe);
        $entityManager->flush();

        return $this->redirectToRoute('administration_type_groupe_edit', ['id' => $newTypeGroupe->getId()]);
    }

    /**
     * @Route("/{id}", name="administration_type_groupe_delete", methods="DELETE")
     */
    public function delete(EntityManagerInterface $entityManager, Request $request, TypeGroupe $typeGroupe): Response
    {
        if ($this->isCsrfTokenValid('delete' . $typeGroupe->getId(), $request->request->get('_token'))) {
            $entityManager->remove($typeGroupe);
            $entityManager->flush();
        }

        return $this->redirectToRoute('administration_groupe_index');
    }
}
