<?php

namespace App\Controller\administration;

use App\Entity\Groupe;
use App\Entity\Semestre;
use App\Form\GroupeType;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;

/**
 * Class GroupeController
 * @package App\Controller\administration
 * @Route({"fr":"administration/groupe",
 *         "en":"administration/group"}
 *)
 */
class GroupeController extends BaseController
{
    /**
     * @Route("/", name="administration_groupe_index")
     */
    public function index(): Response
    {
        return $this->render('administration/groupe/index.html.twig', [
        ]);
    }

    /**
     * @Route("/new/{semestre}", name="administration_groupe_new", methods="GET|POST")
     */
    public function create(EntityManagerInterface $entityManager, Request $request, Semestre $semestre): Response
    {
        $groupe = new Groupe();
        $form = $this->createForm(GroupeType::class, $groupe, ['semestre' => $semestre]);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $entityManager->persist($groupe);
            $entityManager->flush();

            return $this->redirectToRoute('administration_groupe_index');
        }

        return $this->render('administration/groupe/new.html.twig', [
            'groupe' => $groupe,
            'form'   => $form->createView(),
        ]);
    }

    /**
     * @Route("/{id}", name="administration_groupe_show", methods="GET")
     */
    public function show(Groupe $groupe): Response
    {
        return $this->render('administration/groupe/show.html.twig', ['groupe' => $groupe]);
    }

    /**
     * @Route("/{id}/edit", name="administration_groupe_edit", methods="GET|POST")
     */
    public function edit(EntityManagerInterface $entityManager, Request $request, Groupe $groupe): Response
    {
        if ($groupe->getTypeGroupe() !== null && $groupe->getTypeGroupe()->getSemestre() !== null) {
            $form = $this->createForm(GroupeType::class, $groupe,
                ['semestre' => $groupe->getTypeGroupe()->getSemestre()]);
            $form->handleRequest($request);

            if ($form->isSubmitted() && $form->isValid()) {
                $entityManager->flush();

                return $this->redirectToRoute('administration_groupe_index');
            }

            return $this->render('administration/groupe/edit.html.twig', [
                'groupe' => $groupe,
                'form'   => $form->createView(),
            ]);
        }

        return $this->redirectToRoute('erreur_666');
    }

    /**
     * @Route("/{id}/duplicate", name="administration_groupe_duplicate", methods="GET|POST")
     */
    public function duplicate(EntityManagerInterface $entityManager, Groupe $groupe): Response
    {
        $newGroupe = clone $groupe;

        $entityManager->persist($newGroupe);
        $entityManager->flush();

        return $this->redirectToRoute('administration_groupe_edit', ['id' => $newGroupe->getId()]);
    }

    /**
     * @Route("/{id}", name="administration_groupe_delete", methods="DELETE")
     */
    public function delete(EntityManagerInterface $entityManager, Request $request, Groupe $groupe): Response
    {
        if ($this->isCsrfTokenValid('delete' . $groupe->getId(), $request->request->get('_token'))) {
            $entityManager->remove($groupe);
            $entityManager->flush();
        }

        return $this->redirectToRoute('administration_groupe_index');
    }

    /**
     * @Route("/help", name="administration_groupe_help", methods="GET")
     */
    public function help(): Response
    {
        return $this->render('administration/article/help.html.twig');
    }

    /**
     * @Route("/save", name="administration_groupe_save", methods="GET")
     */
    public function save(): Response
    {
        //save en csv
        return new Response('', Response::HTTP_OK);
    }

    /**
     * @Route("/imprimer", name="administration_groupe_print", methods="GET")
     */
    public function imprimer(): Response
    {
        //print (pdf)
        return new Response('', Response::HTTP_OK);
    }
}
