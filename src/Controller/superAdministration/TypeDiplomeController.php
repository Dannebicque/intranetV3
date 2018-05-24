<?php

namespace App\Controller\superAdministration;

use App\Entity\TypeDiplome;
use App\Form\TypeDiplomeType;
use App\Repository\TypeDiplomeRepository;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

/**
 * @Route("/{_locale}/super-administration/type-diplome",
 *      requirements={
 *         "_locale": "fr|en"})
 */
class TypeDiplomeController extends Controller
{
    /**
     * @Route("/", name="sa_type_diplome_index", methods="GET")
     * @param TypeDiplomeRepository $typeDiplomeRepository
     *
     * @return Response
     */
    public function index(TypeDiplomeRepository $typeDiplomeRepository): Response
    {
        return $this->render('super-administration/type_diplome/index.html.twig', ['type_diplomes' => $typeDiplomeRepository->findAll()]);
    }

    /**
    * @Route("/save", name="sa_type_diplome_save", methods="GET")
    */
    public function save(): Response
    {
        //save en csv
        return new Response('', Response::HTTP_OK);
    }

    /**
    * @Route("/imprimer", name="sa_type_diplome_print", methods="GET")
    */
    public function imprimer(): Response
    {
        //print (pdf)
        return new Response('', Response::HTTP_OK);
    }

    /**
     * @Route("/new", name="sa_type_diplome_new", methods="GET|POST")
     * @param Request $request
     *
     * @return Response
     * @throws \Symfony\Component\Form\Exception\LogicException
     */
    public function create(Request $request): Response
    {
        $typeDiplome = new TypeDiplome();
        $form = $this->createForm(TypeDiplomeType::class, $typeDiplome);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $em = $this->getDoctrine()->getManager();
            $em->persist($typeDiplome);
            $em->flush();

            return $this->redirectToRoute('sa_type_diplome_index');
        }

        return $this->render('super-administration/type_diplome/new.html.twig', [
            'type_diplome' => $typeDiplome,
            'form' => $form->createView(),
        ]);
    }

    /**
     * @Route("/{id}", name="sa_type_diplome_show", methods="GET")
     * @param TypeDiplome $typeDiplome
     *
     * @return Response
     */
    public function show(TypeDiplome $typeDiplome): Response
    {
        return $this->render('super-administration/type_diplome/show.html.twig', ['type_diplome' => $typeDiplome]);
    }

    /**
     * @Route("/{id}/edit", name="sa_type_diplome_edit", methods="GET|POST")
     * @param Request     $request
     * @param TypeDiplome $typeDiplome
     *
     * @return Response
     * @throws \Symfony\Component\Form\Exception\LogicException
     */
    public function edit(Request $request, TypeDiplome $typeDiplome): Response
    {
        $form = $this->createForm(TypeDiplomeType::class, $typeDiplome);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $this->getDoctrine()->getManager()->flush();

            return $this->redirectToRoute('sa_type_diplome_edit', ['id' => $typeDiplome->getId()]);
        }

        return $this->render('super-administration/type_diplome/edit.html.twig', [
            'type_diplome' => $typeDiplome,
            'form' => $form->createView(),
        ]);
    }

    /**
     * @Route("/{id}", name="sa_type_diplome_delete", methods="DELETE")
     */
    public function delete(): void
    {

    }
}
