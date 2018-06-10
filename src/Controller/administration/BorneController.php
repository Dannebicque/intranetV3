<?php

namespace App\Controller\administration;

use App\Controller\BaseController;
use App\Entity\Borne;
use App\Form\BorneType;
use App\Repository\BorneRepository;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

/**
 * @Route({"fr":"administration/bornes",
 *         "en":"administration/display"}
 *)
 */
class BorneController extends BaseController
{
    /**
     * @Route("/", name="administration_borne_index", methods="GET")
     * @param BorneRepository $borneRepository
     *
     * @return Response
     */
    public function index(BorneRepository $borneRepository): Response
    {
        return $this->render('administration/borne/index.html.twig', ['bornes' => $borneRepository->findAll()]);
    }

    /**
     * @Route("/new", name="administration_borne_new", methods="GET|POST")
     * @param Request $request
     *
     * @return Response
     */
    public function create(Request $request): Response
    {
        $borne = new Borne();
        $form = $this->createForm(BorneType::class, $borne,
            ['formation' => $this->dataUserSession->getFormation()->getId()]);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $em = $this->getDoctrine()->getManager();
            $em->persist($borne);
            $em->flush();

            return $this->redirectToRoute('administration_borne_index');
        }

        return $this->render('administration/borne/new.html.twig', [
            'borne' => $borne,
            'form'  => $form->createView(),
        ]);
    }

    /**
     * @Route("/{id}", name="administration_borne_show", methods="GET")
     * @param Borne $borne
     *
     * @return Response
     */
    public function show(Borne $borne): Response
    {
        return $this->render('administration/borne/show.html.twig', ['borne' => $borne]);
    }

    /**
     * @Route("/{id}/edit", name="administration_borne_edit", methods="GET|POST")
     * @param Request $request
     * @param Borne   $borne
     *
     * @return Response
     */
    public function edit(Request $request, Borne $borne): Response
    {
        $form = $this->createForm(BorneType::class, $borne,
            ['formation' => $this->dataUserSession->getFormation()->getId()]);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $this->getDoctrine()->getManager()->flush();

            return $this->redirectToRoute('administration_borne_edit', ['id' => $borne->getId()]);
        }

        return $this->render('administration/borne/edit.html.twig', [
            'borne' => $borne,
            'form'  => $form->createView(),
        ]);
    }

    /**
     * @Route("/{id}", name="administration_borne_delete", methods="DELETE")
     * @param Request $request
     * @param Borne   $borne
     *
     * @return Response
     */
    public function delete(Request $request, Borne $borne): Response
    {
        $id = $borne->getId();
        if ($this->isCsrfTokenValid('delete' . $id, $request->request->get('_token'))) {

            $em = $this->getDoctrine()->getManager();
            $em->remove($borne);
            $em->flush();

            return $this->json($id, Response::HTTP_OK);
        }

        return $this->json(false, Response::HTTP_INTERNAL_SERVER_ERROR);
    }

    /**
     * @Route("/help", name="administration_borne_help", methods="GET")
     */
    public function help(): Response
    {
        return $this->render('administration/borne/help.html.twig');
    }

    /**
     * @Route("/save", name="administration_borne_save", methods="GET")
     */
    public function save(): Response
    {
        //save en csv
        return new Response('', Response::HTTP_OK);
    }

    /**
     * @Route("/imprimer", name="administration_borne_print", methods="GET")
     */
    public function imprimer(): Response
    {
        //print (pdf)
        return new Response('', Response::HTTP_OK);
    }
}
