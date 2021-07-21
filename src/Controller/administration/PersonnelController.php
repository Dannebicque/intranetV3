<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Controller/administration/PersonnelController.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 21/07/2021 17:05
 */

namespace App\Controller\administration;

use App\Classes\MyExport;
use App\Controller\BaseController;
use App\Entity\Constantes;
use App\Entity\Personnel;
use App\Entity\PersonnelDepartement;
use App\Form\PersonnelType;
use App\Repository\PersonnelDepartementRepository;
use App\Repository\PersonnelRepository;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use function count;
use function in_array;

/**
 * @Route("/administration/personnel")
 */
class PersonnelController extends BaseController
{
    /**
     * @Route("/", name="administration_personnel_index", methods="GET")
     */
    public function index(PersonnelDepartementRepository $personnelRepository): Response
    {
        return $this->render(
            'administration/personnel/index.html.twig',
            [
                'personnels' => $personnelRepository->findByType('permanent',
                    $this->dataUserSession->getDepartementId()),
                'type'       => 'permanent',
            ]
        );
    }

    /**
     * @Route("/ajax/load-liste/{type}", name="administration_personnel_load_liste", options={"expose"=true},
     *                                   requirements={"type": "permanent|vacataire"})
     *
     */
    public function loadListe(PersonnelDepartementRepository $personnelRepository, $type): Response
    {
        return $this->render(
            'administration/personnel/_listePersonnel.html.twig',
            [
                'personnels' => $personnelRepository->findByType($type, $this->dataUserSession->getDepartementId()),
                'type'       => $type,
            ]
        );
    }

    /**
     * @Route("/export_{type}.{_format}", name="administration_personnel_export", methods="GET",
     *                             requirements={"_format"="csv|xlsx|pdf"}, options={"expose":true})
     *
     */
    public function export(MyExport $myExport, PersonnelRepository $personnelRepository, $type, $_format): Response
    {
        $personnels = $personnelRepository->findByType($type, $this->dataUserSession->getDepartement());

        return $myExport->genereFichierGenerique(
            $_format,
            $personnels,
            'listing_' . $type,
            ['utilisateur'],
            ['nom', 'prenom']
        );
    }

    /**
     * @Route("/add", name="administration_personnel_new", methods="GET")
     */
    public function ajout(): Response
    {
        return $this->render('administration/personnel/add.html.twig');
    }

    /**
     * @Route("/create", name="administration_personnel_create", methods="GET|POST", options={"expose"=true})
     */
    public function create(Request $request): Response
    {
        $personnel = new Personnel();
        $form = $this->createForm(PersonnelType::class, $personnel, [
            'attr' => [
                'data-provide' => 'validation',
            ],
        ]);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $this->entityManager->persist($personnel);

            $personnelDepartement = new PersonnelDepartement($personnel, $this->dataUserSession->getDepartement());
            $this->entityManager->persist($personnelDepartement);
            $this->entityManager->flush();

            $this->addFlashBag(Constantes::FLASHBAG_SUCCESS, 'personnelf.add.success.flash');

            return $this->redirectToRoute('administration_personnel_index');
        }

        return $this->render('administration/personnel/new.html.twig', [
            'personnel' => $personnel,
            'form'      => $form->createView(),
        ]);
    }

    /**
     * @Route("/{id}", name="administration_personnel_show", methods="GET", options={"expose":true})
     */
    public function show(Personnel $personnel): Response
    {
        return $this->render('administration/personnel/show.html.twig', ['personnel' => $personnel]);
    }

    /**
     * @Route("/{id}/edit", name="administration_personnel_edit", methods="GET|POST", options={"expose":true})
     */
    public function edit(Request $request, Personnel $personnel): Response
    {
        $form = $this->createForm(PersonnelType::class, $personnel, [
            'attr' => [
                'data-provide' => 'validation',
            ],
        ]);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $this->entityManager->flush();
            $this->addFlashBag(Constantes::FLASHBAG_SUCCESS, 'personnelf.edit.success.flash');
            if (null !== $request->request->get('btn_update')) {
                return $this->redirectToRoute('administration_personnel_index');
            }

            return $this->redirectToRoute('administration_personnel_edit', ['id' => $personnel->getId()]);
        }

        return $this->render('administration/personnel/edit.html.twig', [
            'personnel' => $personnel,
            'form'      => $form->createView(),
        ]);
    }

    /**
     * @Route("/{id}/duplicate", name="administration_personnel_duplicate", methods="GET|POST")
     */
    public function duplicate(Personnel $personnel): Response
    {
        $newPersonnel = clone $personnel;

        $this->entityManager->persist($newPersonnel);
        $this->entityManager->flush();
        $this->addFlashBag(Constantes::FLASHBAG_SUCCESS, 'personnelf.duplicate.success.flash');

        return $this->redirectToRoute('administration_personnel_edit', ['id' => $newPersonnel->getId()]);
    }

    /**
     * @Route("/{id}", name="administration_personnel_delete", methods="DELETE", options={"expose":true})
     */
    public function delete(
        PersonnelDepartementRepository $personnelDepartementRepository,
        Request $request,
        Personnel $personnel
    ): Response {
        $id = $personnel->getId();
        if ($this->isCsrfTokenValid('delete' . $id, $request->request->get('_token'))) {
            $pf = $personnelDepartementRepository->findByPersonnelDepartement($personnel,
                $this->dataUserSession->getDepartement());
            foreach ($pf as $p) {
                $this->entityManager->remove($p);
            }
            $this->entityManager->flush();
            $this->addFlashBag(
                Constantes::FLASHBAG_SUCCESS,
                'personnelf.delete.success.flash'
            );

            return $this->json($id, Response::HTTP_OK);
        }

        $this->addFlashBag(Constantes::FLASHBAG_ERROR, 'personnelf.delete.error.flash');

        return $this->json(false, Response::HTTP_INTERNAL_SERVER_ERROR);
    }

    /**
     * @Route("/gestion/droit/{personnel}", name="administration_personnel_droit")
     */
    public function gestionDroit(
        PersonnelDepartementRepository $personnelDepartementRepository,
        Personnel $personnel
    ): Response {
        if ($this->dataUserSession->isGoodDepartement('ROLE_CDD') || $this->dataUserSession->isGoodDepartement('ROLE_DDE') || $this->dataUserSession->isGoodDepartement('ROLE_ADMIN')) {
            $droits = $personnelDepartementRepository->findDroitsByPersonnelDepartement($personnel,
                $this->dataUserSession->getDepartement());

            return $this->render('administration/personnel/_droit.html.twig',
                ['personnel' => $personnel, 'droits' => $droits]);
        }

        return $this->redirectToRoute('erreur_666');
    }

    /**
     * @Route("/modifier-droit/{personnel}", name="admin_personnel_departement_modifier_droit", options={"expose":true})
     */
    public function modifierDroits(
        Request $request,
        PersonnelDepartementRepository $personnelDepartementRepository,
        Personnel $personnel
    ): Response
    {
        $droit = $request->request->get('droit');
        $pf = $personnelDepartementRepository->findByPersonnelDepartement($personnel,
            $this->dataUserSession->getDepartement());

        if (1 === count($pf) && in_array($droit, Constantes::ROLE_LISTE, true)) {
            if (in_array($droit, $pf[0]->getRoles(), true)) {
                //deja existant on retire
                $pf[0]->removeRole($droit);
                $this->entityManager->flush();

                return $this->json($droit, Response::HTTP_OK);
            }

            //pas présent on ajoute
            $pf[0]->addRole($droit);
            $this->entityManager->flush();

            return $this->json($droit, Response::HTTP_OK);
        }

        if (0 === count($pf) && in_array($droit, Constantes::ROLE_LISTE, true)) {
            //etrangement pas dans un département, on ajoute.
            $pf = new PersonnelDepartement($personnel, $this->dataUserSession->getDepartement());
            $pf->setDepartement();
            $pf->setAnnee(date('Y'));
            $pf->addRole($droit);
        }

        return $this->json(false, Response::HTTP_INTERNAL_SERVER_ERROR);
    }
}
