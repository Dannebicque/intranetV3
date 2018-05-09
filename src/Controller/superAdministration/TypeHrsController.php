<?php

namespace App\Controller\superAdministration;

use App\Entity\TypeHrs;
use App\Form\TypeHrsType;
use App\Repository\TypeHrsRepository;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

/**
 * @Route("/{_locale}/super-administration/type-hrs",
 *      requirements={
 *         "_locale": "fr|en"})
 */
class TypeHrsController extends Controller
{
    /**
     * @Route("/", name="sa_type_hrs_index", methods="GET")
     * @param TypeHrsRepository $typeHrsRepository
     *
     * @return Response
     */
    public function index(TypeHrsRepository $typeHrsRepository): Response
    {
        return $this->render('super-administration/type_hrs/index.html.twig', ['type_hrs' => $typeHrsRepository->findAll()]);
    }

    /**
    * @Route("/help", name="sa_type_hrs_help", methods="GET")
    */
    public function help(): Response
    {
        return $this->render('super-administration/type_hrs/help.html.twig');
    }

    /**
    * @Route("/save", name="sa_type_hrs_save", methods="GET")
    */
    public function save(): Response
    {
        //save en csv
        return new Response('', 200);
    }

    /**
    * @Route("/imprimer", name="sa_type_hrs_print", methods="GET")
    */
    public function imprimer(): Response
    {
        //print (pdf)
        return new Response('', 200);
    }

    /**
     * @Route("/new", name="sa_type_hrs_new", methods="GET|POST")
     * @param Request $request
     *
     * @return Response
     * @throws \Symfony\Component\Form\Exception\LogicException
     */
    public function new(Request $request): Response
    {
        $typeHr = new TypeHrs();
        $form = $this->createForm(TypeHrsType::class, $typeHr);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $em = $this->getDoctrine()->getManager();
            $em->persist($typeHr);
            $em->flush();

            return $this->redirectToRoute('sa_type_hrs_index');
        }

        return $this->render('super-administration/type_hrs/new.html.twig', [
            'type_hr' => $typeHr,
            'form' => $form->createView(),
        ]);
    }

    /**
     * @Route("/{id}", name="sa_type_hrs_show", methods="GET")
     * @param TypeHrs $typeHr
     *
     * @return Response
     */
    public function show(TypeHrs $typeHr): Response
    {
        return $this->render('super-administration/type_hrs/show.html.twig', ['type_hr' => $typeHr]);
    }

    /**
     * @Route("/{id}/edit", name="sa_type_hrs_edit", methods="GET|POST")
     * @param Request $request
     * @param TypeHrs $typeHr
     *
     * @return Response
     * @throws \Symfony\Component\Form\Exception\LogicException
     */
    public function edit(Request $request, TypeHrs $typeHr): Response
    {
        $form = $this->createForm(TypeHrsType::class, $typeHr);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $this->getDoctrine()->getManager()->flush();

            return $this->redirectToRoute('sa_type_hrs_edit', ['id' => $typeHr->getId()]);
        }

        return $this->render('super-administration/type_hrs/edit.html.twig', [
            'type_hr' => $typeHr,
            'form' => $form->createView(),
        ]);
    }

    /**
     * @Route("/{id}", name="sa_type_hrs_delete", methods="DELETE")
     */
    public function delete(): void
    {

    }
}
