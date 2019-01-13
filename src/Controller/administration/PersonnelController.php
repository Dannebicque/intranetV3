<?php

namespace App\Controller\administration;

use App\Controller\BaseController;
use App\Entity\Constantes;
use App\Entity\Personnel;
use App\Form\PersonnelType;
use App\MesClasses\MyExport;
use App\Repository\PersonnelFormationRepository;
use App\Repository\PersonnelRepository;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

/**
 * @Route("/administration/personnel")
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
        return $this->render(
            'administration/personnel/index.html.twig',
            ['personnels' => $personnelRepository->findByType('permanent', $this->dataUserSession->getFormationId())]
        );
    }

    /**
     * @Route("/export.{_format}", name="administration_personnel_export", methods="GET",
     *                             requirements={"_format"="csv|xlsx|pdf"})
     * @param MyExport            $myExport
     * @param PersonnelRepository $personnelRepository
     * @param                     $type
     * @param                     $_format
     *
     * @return Response
     * @throws \PhpOffice\PhpSpreadsheet\Exception
     */
    public function export(MyExport $myExport, PersonnelRepository $personnelRepository, $type, $_format): Response
    {
        $personnels = $personnelRepository->findByType($type, $this->dataUserSession->getFormation());
        $response = $myExport->genereFichierGenerique(
            $_format,
            $personnels,
            'listing_'.$type,
            ['utilisateur'],
            ['nom', 'prenom']
        );

        return $response;
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
     * @param Request $request
     *
     * @return Response
     */
    public function create(Request $request): Response
    {
        $personnel = new Personnel();
        $form = $this->createForm(PersonnelType::class, $personnel, [
            'attr' => [
                'data-provide' => 'validation'
            ]
        ]);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $this->entityManager->persist($personnel);
            $this->entityManager->flush();
            $this->addFlashBag(Constantes::FLASHBAG_SUCCESS, 'personnel.add.success.flash');

            return $this->redirectToRoute('administration_personnel_index');
        }

        return $this->render('administration/personnel/new.html.twig', [
            'personnel' => $personnel,
            'form'      => $form->createView(),
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
     * @param Request   $request
     * @param Personnel $personnel
     *
     * @return Response
     */
    public function edit(Request $request, Personnel $personnel): Response
    {
        $form = $this->createForm(PersonnelType::class, $personnel, [
            'attr' => [
                'data-provide' => 'validation'
            ]
        ]);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $this->entityManager->flush();
            $this->addFlashBag(Constantes::FLASHBAG_SUCCESS, 'personnel.edit.success.flash');

            return $this->redirectToRoute('administration_personnel_edit', ['id' => $personnel->getId()]);
        }

        return $this->render('administration/personnel/edit.html.twig', [
            'personnel' => $personnel,
            'form'      => $form->createView(),
        ]);
    }

    /**
     * @Route("/{id}/duplicate", name="administration_personnel_duplicate", methods="GET|POST")
     * @param Personnel $personnel
     *
     * @return Response
     */
    public function duplicate(Personnel $personnel): Response
    {
        $newPersonnel = clone $personnel;

        $this->entityManager->persist($newPersonnel);
        $this->entityManager->flush();
        $this->addFlashBag(Constantes::FLASHBAG_SUCCESS, 'personnel.duplicate.success.flash');

        return $this->redirectToRoute('administration_personnel_edit', ['id' => $newPersonnel->getId()]);
    }

    /**
     * @Route("/{id}", name="administration_personnel_delete", methods="DELETE", options={"expose":true})
     * @param PersonnelFormationRepository $personnelFormationRepository
     * @param Request                      $request
     * @param Personnel                    $personnel
     *
     * @return Response
     */
    public function delete(
        PersonnelFormationRepository $personnelFormationRepository,
        Request $request,
        Personnel $personnel
    ): Response {
        $id = $personnel->getId();
        if ($this->isCsrfTokenValid('delete' . $id, $request->request->get('_token'))) {

            $pf = $personnelFormationRepository->findByPersonnelFormation($personnel,
                $this->dataUserSession->getFormation());
            foreach ($pf as $p) {
                $this->entityManager->remove($p);
            }
            $this->entityManager->flush();
            $this->addFlashBag(
                Constantes::FLASHBAG_SUCCESS,
                'personnel.delete.success.flash'
            );

            return $this->json($id, Response::HTTP_OK);
        }

        $this->addFlashBag(Constantes::FLASHBAG_ERROR, 'personnel.delete.error.flash');

        return $this->json(false, Response::HTTP_INTERNAL_SERVER_ERROR);
    }

    /**
     * @Route("/gestion/droit/{personnel}", name="administration_personnel_droit")
     * @param PersonnelFormationRepository $personnelFormationRepository
     * @param Personnel                    $personnel
     *
     * @return Response
     */
    public function gestionDroit(PersonnelFormationRepository $personnelFormationRepository, Personnel $personnel) {
        //todo: tester si CDD ou DDE

        $droits = $personnelFormationRepository->findDroitsByPersonnelFormation($personnel, $this->dataUserSession->getFormation());
        return $this->render('administration/personnel/droit.html.twig', ['personnel' => $personnel, 'droits' => $droits]);
    }
}
