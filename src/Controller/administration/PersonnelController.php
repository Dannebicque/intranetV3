<?php

namespace App\Controller\administration;

use App\Controller\BaseController;
use App\Entity\Constantes;
use App\Entity\Personnel;
use App\Form\PersonnelType;
use App\Repository\PersonnelFormationRepository;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

/**
 * @Route({"fr":"administration/personnel",
 *         "en":"administration/staff"}
 *)
 */
class PersonnelController extends BaseController
{
    /**
     * @Route("/", name="administration_personnel_index", methods="GET", requirements={"type": "permanent|vacataire"})
     * @param PersonnelFormationRepository $personnelRepository
     *
     * @return Response
     */
    public function index(PersonnelFormationRepository $personnelRepository): Response
    {
        return $this->render('administration/personnel/index.html.twig',
            ['personnels' => $personnelRepository->findByType('permanent', $this->dataUserSession->getFormationId())]);
    }

    /**
    * @Route("/help", name="administration_personnel_help", methods="GET")
    */
    public function help(): Response
    {
        return $this->render('administration/personnel/help.html.twig');
    }

    /**
    * @Route("/save", name="administration_personnel_save", methods="GET")
    */
    public function save(): Response
    {
        //save en csv
        return new Response('', Response::HTTP_OK);
    }

    /**
    * @Route("/imprimer", name="administration_personnel_print", methods="GET")
    */
    public function imprimer(): Response
    {
        //print (pdf)
        return new Response('', Response::HTTP_OK);
    }

    /**
     * @Route("/add", name="administration_personnel_new", methods="GET")
     */
    public function ajout(): Response
    {

        return $this->render('administration/personnel/add.html.twig');
    }

    /**
     * @Route("/create", name="administration_personnel_create", methods="GET|POST")
     * @param Request                $request
     *
     * @return Response
     */
    public function create(Request $request): Response
    {
        $personnel = new Personnel();
        $form = $this->createForm(PersonnelType::class, $personnel);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $this->entityManager->persist($personnel);
            $this->entityManager->flush();
            $this->addFlashBag(Constantes::FLASHBAG_SUCCESS, 'personnel.add.success.flash');

            return $this->redirectToRoute('administration_personnel_index');
        }

        return $this->render('administration/personnel/new.html.twig', [
            'personnel' => $personnel,
            'form' => $form->createView(),
        ]);
    }

    /**
     * @Route("/{id}", name="administration_personnel_show", methods="GET", options={"expose":true})
     * @param Personnel $personnel
     *
     * @return Response
     */
    public function show(Personnel $personnel): Response
    {
        return $this->render('administration/personnel/show.html.twig', ['personnel' => $personnel]);
    }

    /**
     * @Route("/{id}/edit", name="administration_personnel_edit", methods="GET|POST", options={"expose":true})
     * @param Request                $request
     * @param Personnel              $personnel
     *
     * @return Response
     */
    public function edit(Request $request, Personnel $personnel): Response
    {
        $form = $this->createForm(PersonnelType::class, $personnel);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $this->entityManager->flush();
            $this->addFlashBag(Constantes::FLASHBAG_SUCCESS, 'personnel.edit.success.flash');

            return $this->redirectToRoute('administration_personnel_edit', ['id' => $personnel->getId()]);
        }

        return $this->render('administration/personnel/edit.html.twig', [
            'personnel' => $personnel,
            'form' => $form->createView(),
        ]);
    }

    /**
     * @Route("/{id}", name="administration_personnel_delete", methods="DELETE", options={"expose":true})
     */
    public function delete(): void
    {
        //todo: supprimer d'une formation. Même procédé que classiquement
    }
}
