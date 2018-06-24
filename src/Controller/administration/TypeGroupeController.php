<?php

namespace App\Controller\administration;

use App\Controller\BaseController;
use App\Entity\Constantes;
use App\Entity\TypeGroupe;
use App\Form\TypeGroupeType;
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
     * @param Request                $request
     *
     * @return Response
     */
    public function create(Request $request): Response
    {
        $typeGroupe = new TypeGroupe();
        $form = $this->createForm(TypeGroupeType::class, $typeGroupe,
            ['formation' => $this->dataUserSession->getFormation()]);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $this->entityManager->persist($typeGroupe);
            $this->entityManager->flush();
            $this->addFlashBag(Constantes::FLASHBAG_SUCCESS, 'type_groupe.add.success.flash');

            return $this->redirectToRoute('administration_groupe_index');
        }

        return $this->render('administration/type_groupe/new.html.twig', [
            'type_groupe' => $typeGroupe,
            'form'        => $form->createView(),
        ]);
    }

    /**
     * @Route("/{id}", name="administration_type_groupe_show", methods="GET")
     * @param TypeGroupe $typeGroupe
     *
     * @return Response
     */
    public function show(TypeGroupe $typeGroupe): Response
    {
        return $this->render('administration/type_groupe/show.html.twig', ['type_groupe' => $typeGroupe]);
    }

    /**
     * @Route("/{id}/edit", name="administration_type_groupe_edit", methods="GET|POST")
     * @param Request                $request
     * @param TypeGroupe             $typeGroupe
     *
     * @return Response
     */
    public function edit(Request $request, TypeGroupe $typeGroupe): Response
    {
        $form = $this->createForm(TypeGroupeType::class, $typeGroupe,
            ['formation' => $this->dataUserSession->getFormation()]);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $this->entityManager->flush();
            $this->addFlashBag(Constantes::FLASHBAG_SUCCESS, 'type_groupe.edit.success.flash');

            return $this->redirectToRoute('administration_groupe_index');
        }

        return $this->render('administration/type_groupe/edit.html.twig', [
            'type_groupe' => $typeGroupe,
            'form'        => $form->createView(),
        ]);
    }

    /**
     * @Route("/{id}/duplicate", name="administration_type_groupe_duplicate", methods="GET|POST")
     * @param TypeGroupe             $typeGroupe
     *
     * @return Response
     */
    public function duplicate(TypeGroupe $typeGroupe): Response
    {
        $newTypeGroupe = clone $typeGroupe;

        $this->entityManager->persist($newTypeGroupe);
        $this->entityManager->flush();
        $this->addFlashBag(Constantes::FLASHBAG_SUCCESS, 'type_groupe.duplicate.success.flash');

        return $this->redirectToRoute('administration_type_groupe_edit', ['id' => $newTypeGroupe->getId()]);
    }

    /**
     * @Route("/{id}", name="administration_type_groupe_delete", methods="DELETE")
     * @param Request                $request
     * @param TypeGroupe             $typeGroupe
     *
     * @return Response
     */
    public function delete(Request $request, TypeGroupe $typeGroupe): Response
    {

        //todo: gérer la suppression en cascade.

        if ($this->isCsrfTokenValid('delete' . $typeGroupe->getId(), $request->request->get('_token'))) {
            $this->entityManager->remove($typeGroupe);
            $this->entityManager->flush();
        }

        return $this->redirectToRoute('administration_groupe_index');
    }
}
