<?php

namespace App\Controller\administration\structure;

use App\Controller\BaseController;
use App\Entity\Semestre;
use App\Entity\Ue;
use App\Form\UeType;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

/**
 * @Route({"fr":"administration/structure/unite-enseignement",
 *         "en":"administration/organization/teaching-unit"}
 *)
 */
class UeController extends BaseController
{
    /**
    * @Route("/help", name="administration_structure_ue_help", methods="GET")
    */
    public function help(): Response
    {
        //todo: comment l'exploiter...
        return $this->render('structure/ue/help.html.twig');
    }

    /**
    * @Route("/save", name="administration_structure_ue_save", methods="GET")
    */
    public function save(): Response
    {
        //todo: comment l'exploiter...
        //save en csv
        return new Response('', Response::HTTP_OK);
    }

    /**
    * @Route("/imprimer", name="administration_structure_ue_print", methods="GET")
    */
    public function imprimer(): Response
    {
        //todo: comment l'exploiter...
        //print (pdf)
        return new Response('', Response::HTTP_OK);
    }

    /**
     * @Route("/new/{semestre}", name="administration_structure_ue_new", methods="GET|POST")
     * @param Request  $request
     *
     * @param Semestre $semestre
     *
     * @return Response
     */
    public function create(Request $request, Semestre $semestre): Response
    {
        if ($semestre->getAnnee() !== null) {
            $ue = new Ue($semestre);
            $form = $this->createForm(UeType::class, $ue, ['diplome' => $semestre->getAnnee()->getDiplome()]);
            $form->handleRequest($request);

            if ($form->isSubmitted() && $form->isValid()) {
                $this->entityManager->persist($ue);
                $this->entityManager->flush();

                return $this->redirectToRoute('administration_structure_index');
            }

            return $this->render('structure/ue/new.html.twig', [
                'ue'   => $ue,
                'form' => $form->createView(),
            ]);
        }

        return $this->redirectToRoute('erreur_666');

    }

    /**
     * @Route("/{id}", name="administration_structure_ue_show", methods="GET")
     * @param Ue $ue
     *
     * @return Response
     */
    public function show(Ue $ue): Response
    {
        return $this->render('structure/ue/show.html.twig', ['ue' => $ue]);
    }

    /**
     * @Route("/{id}/edit", name="administration_structure_ue_edit", methods="GET|POST")
     * @param Request $request
     * @param Ue      $ue
     *
     * @return Response
     * @throws \Symfony\Component\Form\Exception\LogicException
     */
    public function edit(Request $request, Ue $ue): Response
    {
        if ($ue->getDiplome() !== null) {

            $form = $this->createForm(UeType::class, $ue, ['diplome' => $ue->getDiplome()->getId()]);
            $form->handleRequest($request);

            if ($form->isSubmitted() && $form->isValid()) {
                $this->entityManager->flush();

                return $this->redirectToRoute('administration_structure_index');
            }

            return $this->render('structure/ue/edit.html.twig', [
                'ue'   => $ue,
                'form' => $form->createView(),
            ]);
        }
        return $this->render('erreur/404.html.twig');
    }

    /**
     * @Route("/{id}/duplicate", name="administration_structure_ue_duplicate", methods="GET|POST")
     * @param Ue $ue
     *
     * @return Response
     */
    public function duplicate(Ue $ue): Response
    {
        $newUe = clone $ue;

        $this->entityManager->persist($newUe);
        $this->entityManager->flush();

        return $this->redirectToRoute('administration_structure_ue_edit', ['id' => $newUe->getId()]);
    }

    /**
     * @Route("/{id}", name="administration_structure_ue_delete", methods="DELETE")
     */
    public function delete(): void
    {

    }
}
