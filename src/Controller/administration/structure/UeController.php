<?php

namespace App\Controller\administration\structure;

use App\Entity\Diplome;
use App\Entity\Semestre;
use App\Entity\Ue;
use App\Form\UeType;
use App\Repository\UeRepository;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

/**
 * @Route({"fr":"administration/structure/unite-enseignement",
 *         "en":"administration/organization/teaching-unit"}
 *)
 */
class UeController extends Controller
{
    /**
     * @Route("/", name="administration_structure_ue_index", methods="GET")
     * @param UeRepository $ueRepository
     *
     * @return Response
     */
    public function index(UeRepository $ueRepository): Response
    {
        //todo: page sans sens...
        return $this->render('administration/structure/ue/index.html.twig', ['ues' => $ueRepository->findAll()]);
    }

    /**
    * @Route("/help", name="administration_structure_ue_help", methods="GET")
    */
    public function help(): Response
    {
        return $this->render('administration/structure/ue/help.html.twig');
    }

    /**
    * @Route("/save", name="administration_structure_ue_save", methods="GET")
    */
    public function save(): Response
    {
        //save en csv
        return new Response('', Response::HTTP_OK);
    }

    /**
    * @Route("/imprimer", name="administration_structure_ue_print", methods="GET")
    */
    public function imprimer(): Response
    {
        //print (pdf)
        return new Response('', Response::HTTP_OK);
    }

    /**
     * @Route("/new/{semestre}", name="administration_structure_ue_new", methods="GET|POST")
     * @param Request $request
     *
     * @return Response
     * @throws \Symfony\Component\Form\Exception\LogicException
     */
    public function create(Request $request, Semestre $semestre): Response
    {
        $ue = new Ue($semestre);
        $form = $this->createForm(UeType::class, $ue, ['diplome' => $semestre->getAnnee()->getDiplome()]);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $em = $this->getDoctrine()->getManager();
            $em->persist($ue);
            $em->flush();

            return $this->redirectToRoute('administration_structure_ue_index');
        }

        return $this->render('administration/structure/ue/new.html.twig', [
            'ue' => $ue,
            'form' => $form->createView(),
        ]);
    }

    /**
     * @Route("/{id}", name="administration_structure_ue_show", methods="GET")
     * @param Ue $ue
     *
     * @return Response
     */
    public function show(Ue $ue): Response
    {
        return $this->render('administration/structure/ue/show.html.twig', ['ue' => $ue]);
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
                $this->getDoctrine()->getManager()->flush();

                return $this->redirectToRoute('administration_structure_ue_edit', ['id' => $ue->getId()]);
            }

            return $this->render('administration/structure/ue/edit.html.twig', [
                'ue'   => $ue,
                'form' => $form->createView(),
            ]);
        }
        return $this->render('erreur/404.html.twig');
    }

    /**
     * @Route("/{id}", name="administration_structure_ue_delete", methods="DELETE")
     */
    public function delete(): void
    {

    }
}
