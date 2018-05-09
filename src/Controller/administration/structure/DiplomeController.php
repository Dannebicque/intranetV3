<?php

namespace App\Controller\administration\structure;

use App\Entity\Diplome;
use App\Form\DiplomeType;
use App\MesClasses\DataUserSession;
use App\Repository\DiplomeRepository;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

/**
 * @Route("/{_locale}/administration/structure/diplome",
 *     requirements={
 *         "_locale": "fr|en"})
 */
class DiplomeController extends Controller
{
    /**
     * @Route("/", name="administration_structure_diplome_index", methods="GET")
     * @param DataUserSession   $dataUserSession
     * @param DiplomeRepository $diplomeRepository
     *
     * @return Response
     */
    public function index(DataUserSession $dataUserSession, DiplomeRepository $diplomeRepository): Response
    {
        return $this->render('administration/structure/diplome/index.html.twig', ['diplomes' => $diplomeRepository->findByFormation($dataUserSession->getFormation()->getId())]);
    }

    /**
    * @Route("/help", name="administration_structure_diplome_help", methods="GET")
    */
    public function help(): Response
    {
        return $this->render('administration/structure/diplome/help.html.twig');
    }

    /**
    * @Route("/save", name="administration_structure_diplome_save", methods="GET")
    */
    public function save(): Response
    {
        //save en csv
        return new Response('', 200);
    }

    /**
    * @Route("/imprimer", name="administration_structure_diplome_print", methods="GET")
    */
    public function imprimer(): Response
    {
        //print (pdf)
        return new Response('', 200);
    }

    /**
     * @Route("/new", name="administration_structure_diplome_new", methods="GET|POST")
     * @param Request $request
     *
     * @return Response
     * @throws \Symfony\Component\Form\Exception\LogicException
     */
    public function new(Request $request): Response
    {
        $diplome = new Diplome();
        $form = $this->createForm(DiplomeType::class, $diplome);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $em = $this->getDoctrine()->getManager();
            $em->persist($diplome);
            $em->flush();

            return $this->redirectToRoute('administration_structure_diplome_index');
        }

        return $this->render('administration/structure/diplome/new.html.twig', [
            'diplome' => $diplome,
            'form' => $form->createView(),
        ]);
    }

    /**
     * @Route("/{id}", name="administration_structure_diplome_show", methods="GET")
     * @param Diplome $diplome
     *
     * @return Response
     */
    public function show(Diplome $diplome): Response
    {
        return $this->render('administration/structure/diplome/show.html.twig', ['diplome' => $diplome]);
    }

    /**
     * @Route("/{id}/edit", name="administration_structure_diplome_edit", methods="GET|POST")
     * @param Request $request
     * @param Diplome $diplome
     *
     * @return Response
     * @throws \Symfony\Component\Form\Exception\LogicException
     */
    public function edit(Request $request, Diplome $diplome): Response
    {
        $form = $this->createForm(DiplomeType::class, $diplome);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $this->getDoctrine()->getManager()->flush();

            return $this->redirectToRoute('administration_structure_diplome_edit', ['id' => $diplome->getId()]);
        }

        return $this->render('administration/structure/diplome/edit.html.twig', [
            'diplome' => $diplome,
            'form' => $form->createView(),
        ]);
    }

    /**
     * @Route("/{id}", name="administration_structure_diplome_delete", methods="DELETE")
     */
    public function delete(): void
    {

    }
}
