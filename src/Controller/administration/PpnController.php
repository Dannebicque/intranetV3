<?php

namespace App\Controller\administration;

use App\Entity\Ppn;
use App\Form\PpnType;
use App\Repository\PpnRepository;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

/**
 * @Route({"fr":"administration/programme-pedagogique",
 *         "en":"administration/educational-program"}
 *)
 */
class PpnController extends Controller
{
    /**
     * @Route("/", name="administration_ppn_index", methods="GET")
     * @param PpnRepository $ppnRepository
     *
     * @return Response
     */
    public function index(PpnRepository $ppnRepository): Response
    {
        return $this->render('administration/ppn/index.html.twig', ['ppns' => $ppnRepository->findAll()]);
    }

    /**
    * @Route("/help", name="administration_ppn_help", methods="GET")
    */
    public function help(): Response
    {
        return $this->render('administration/ppn/help.html.twig');
    }

    /**
    * @Route("/save", name="administration_ppn_save", methods="GET")
    */
    public function save(): Response
    {
        //save en csv
        return new Response('', Response::HTTP_OK);
    }

    /**
    * @Route("/imprimer", name="administration_ppn_print", methods="GET")
    */
    public function imprimer(): Response
    {
        //print (pdf)
        return new Response('', Response::HTTP_OK);
    }

    /**
     * @Route("/new", name="administration_ppn_new", methods="GET|POST")
     * @param Request $request
     *
     * @return Response
     * @throws \Symfony\Component\Form\Exception\LogicException
     */
    public function create(Request $request): Response
    {
        $ppn = new Ppn();
        $form = $this->createForm(PpnType::class, $ppn);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $em = $this->getDoctrine()->getManager();
            $em->persist($ppn);
            $em->flush();

            return $this->redirectToRoute('administration_ppn_index');
        }

        return $this->render('administration/ppn/new.html.twig', [
            'ppn' => $ppn,
            'form' => $form->createView(),
        ]);
    }

    /**
     * @Route("/{id}", name="administration_ppn_show", methods="GET")
     * @param Ppn $ppn
     *
     * @return Response
     */
    public function show(Ppn $ppn): Response
    {
        return $this->render('administration/ppn/show.html.twig', ['ppn' => $ppn]);
    }

    /**
     * @Route("/{id}/edit", name="administration_ppn_edit", methods="GET|POST")
     * @param Request $request
     * @param Ppn     $ppn
     *
     * @return Response
     * @throws \Symfony\Component\Form\Exception\LogicException
     */
    public function edit(Request $request, Ppn $ppn): Response
    {
        $form = $this->createForm(PpnType::class, $ppn);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $this->getDoctrine()->getManager()->flush();

            return $this->redirectToRoute('administration_ppn_edit', ['id' => $ppn->getId()]);
        }

        return $this->render('administration/ppn/edit.html.twig', [
            'ppn' => $ppn,
            'form' => $form->createView(),
        ]);
    }

    /**
     * @Route("/{id}", name="administration_ppn_delete", methods="DELETE")
     */
    public function delete(): void
    {

    }
}
