<?php

namespace App\Controller\administration\structure;

use App\Entity\Annee;
use App\Entity\Diplome;
use App\Form\AnneeType;
use App\Repository\AnneeRepository;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

/**
 * @Route({"fr":"administration/structure/annee",
 *         "en":"administration/organization/year"}
 *)
 */
class AnneeController extends Controller
{
    /**
     * @Route({"fr":"/", "en":"/"}, name="administration_structure_annee_index", methods="GET")
     * @param AnneeRepository $anneeRepository
     *
     * @return Response
     */
    public function index(AnneeRepository $anneeRepository): Response
    {
        //filtrer par formation ou diplome ?
        return $this->render('administration/structure/annee/index.html.twig', ['annees' => $anneeRepository->findAll()]);
    }

    /**
    * @Route({"fr":"/aide", "en":"/help"}, name="administration_structure_annee_help", methods="GET")
    */
    public function help(): Response
    {
        return $this->render('administration/structure/annee/help.html.twig');
    }

    /**
     * @Route({"fr":"/sauvegarder", "en":"/save"}, name="administration_structure_annee_save", methods="GET")
     * @throws \InvalidArgumentException
     */
    public function save(): Response
    {
        //save en csv
        return new Response('', Response::HTTP_OK);
    }

    /**
     * @Route({"fr":"/imprimer", "en":"/print"}, name="administration_structure_annee_print", methods="GET")
     * @throws \InvalidArgumentException
     */
    public function imprimer(): Response
    {
        //print (pdf)
        return new Response('', Response::HTTP_OK);
    }

    /**
     * @Route({"fr":"/nouveau/{diplome}", "en":"/new/{diplome}"}, name="administration_structure_annee_new", methods="GET|POST")
     * @param Request $request
     *
     * @return Response
     * @throws \Symfony\Component\Form\Exception\LogicException
     */
    public function create(Request $request, Diplome $diplome): Response
    {
        $annee = new Annee();
        $annee->setDiplome($diplome);
        $form = $this->createForm(AnneeType::class, $annee, ['formation' => $diplome->getFormation()->getId()]);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $em = $this->getDoctrine()->getManager();
            $em->persist($annee);
            $em->flush();

            return $this->redirectToRoute('administration_structure_annee_index');
        }

        return $this->render('administration/structure/annee/new.html.twig', [
            'annee' => $annee,
            'form' => $form->createView(),
        ]);
    }

    /**
     * @Route({"fr":"/{id}", "en":"/{id}"}, name="administration_structure_annee_show", methods="GET")
     * @param Annee $annee
     *
     * @return Response
     */
    public function show(Annee $annee): Response
    {
        return $this->render('administration/structure/annee/show.html.twig', ['annee' => $annee]);
    }

    /**
     * @Route({"fr":"/{id}/modifier", "en":"/{id}/edit"}, name="administration_structure_annee_edit", methods="GET|POST")
     * @param Request $request
     * @param Annee   $annee
     *
     * @return Response
     * @throws \Symfony\Component\Form\Exception\LogicException
     */
    public function edit(Request $request, Annee $annee): Response
    {
        $form = $this->createForm(AnneeType::class, $annee, ['formation' => $diplome->getFormation()->getId()]);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $this->getDoctrine()->getManager()->flush();

            return $this->redirectToRoute('administration_structure_annee_edit', ['id' => $annee->getId()]);
        }

        return $this->render('administration/structure/annee/edit.html.twig', [
            'annee' => $annee,
            'form' => $form->createView(),
        ]);
    }

    /**
     * @Route({"fr":"/{id}", "en":"/{id}"}, name="administration_structure_annee_delete", methods="DELETE")
     */
    public function delete(): void
    {

    }
}
