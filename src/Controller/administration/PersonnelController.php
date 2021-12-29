<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Controller/administration/PersonnelController.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 08/10/2021 19:11
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
use App\Table\PersonnelDepartementTableType;
use function count;
use function in_array;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

#[Route('/administration/personnel', name: 'administration_personnel_')]
class PersonnelController extends BaseController
{
    #[Route('/', name: 'index', options: ['expose' => true], methods: ['GET', 'POST'])]
    public function index(Request $request): Response
    {
        $this->denyAccessUnlessGranted('MINIMAL_ROLE_ASS', $this->getDepartement());

        $table = $this->createTable(PersonnelDepartementTableType::class, [
            'departement' => $this->getDepartement(),
            'autoriseToManageAccess' => $this->getDataUserSession()->isGoodDepartement('ROLE_CDD') || $this->getDataUserSession()->isGoodDepartement('ROLE_DDE'),
        ]);
        $table->handleRequest($request);

        if ($table->isCallback()) {
            return $table->getCallbackResponse();
        }

        return $this->render(
            'administration/personnel/index.html.twig',
            [
                'table' => $table,
            ]
        );
    }

    #[Route('/export.{_format}', name: 'export',
        requirements: ['_format' => 'csv|xlsx|pdf'],
        options: ['expose' => true],
        methods: 'GET')]
    public function export(MyExport $myExport, PersonnelRepository $personnelRepository, $type, $_format): Response
    {
        $this->denyAccessUnlessGranted('MINIMAL_ROLE_ASS', $this->getDepartement());

        $personnels = $personnelRepository->findByType($type, $this->dataUserSession->getDepartement());

        return $myExport->genereFichierGenerique(
            $_format,
            $personnels,
            'listing_' . $type,
            ['utilisateur'],
            ['nom', 'prenom']
        );
    }

    #[Route('/add', name: 'new', methods: ['GET'])]
    public function ajout(): Response
    {
        $this->denyAccessUnlessGranted('MINIMAL_ROLE_ASS', $this->getDepartement());

        return $this->render('administration/personnel/add.html.twig');
    }

    #[Route('/create', name: 'create',
        options: ['expose' => true],
        methods: ['GET', 'POST'])]
    public function create(
        Request $request
    ): Response {
        $this->denyAccessUnlessGranted('MINIMAL_ROLE_ASS', $this->getDepartement());

        $personnel = new Personnel();
        $form = $this->createForm(PersonnelType::class, $personnel, [
            'attr' => [
                'data-provide' => 'validation',
            ],
        ]);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            if (null !== $personnel->getMailUniv()) {
                $t = explode('@', $personnel->getMailUniv());
                $personnel->setSlug($t[0]);
            }
            $personnel->setAnneeUniversitaire($this->getAnneeUniversitaire());
            $this->entityManager->persist($personnel);

            $personnelDepartement = new PersonnelDepartement($personnel, $this->dataUserSession->getDepartement());
            $this->entityManager->persist($personnelDepartement);
            $this->entityManager->flush();

            $this->addFlashBag(Constantes::FLASHBAG_SUCCESS, 'personnelf.add.success.flash');

            return $this->redirectToRoute('administration_personnel_index');
        }

        return $this->render('administration/personnel/new.html.twig', [
            'personnel' => $personnel,
            'form' => $form->createView(),
        ]);
    }

    #[Route('/{id}', name: 'show',
        options: ['expose' => true],
        methods: ['GET'])]
    public function show(Personnel $personnel): Response
    {
        $this->denyAccessUnlessGranted('MINIMAL_ROLE_ASS', $this->getDepartement());

        return $this->render('administration/personnel/show.html.twig', ['personnel' => $personnel]);
    }

    #[Route('/{id}/edit', name: 'edit',
        options: ['expose' => true],
        methods: ['GET', 'POST'])]
    public function edit(Request $request, Personnel $personnel): Response
    {
        $this->denyAccessUnlessGranted('MINIMAL_ROLE_ASS', $this->getDepartement());

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
            'form' => $form->createView(),
        ]);
    }

    #[Route('/{id}/duplicate',
        name: 'duplicate',
        methods: ['GET', 'POST'])]
    public function duplicate(Personnel $personnel): Response
    {
        $this->denyAccessUnlessGranted('MINIMAL_ROLE_ASS', $this->getDepartement());

        $newPersonnel = clone $personnel;

        $this->entityManager->persist($newPersonnel);
        $this->entityManager->flush();
        $this->addFlashBag(Constantes::FLASHBAG_SUCCESS, 'personnelf.duplicate.success.flash');

        return $this->redirectToRoute('administration_personnel_edit', ['id' => $newPersonnel->getId()]);
    }

    #[Route('/{id}',
        name: 'delete',
        options: ['expose' => true],
        methods: ['DELETE', 'POST'])]
    public function delete(
        PersonnelDepartementRepository $personnelDepartementRepository,
        Request $request,
        Personnel $personnel
    ): Response {
        $this->denyAccessUnlessGranted('MINIMAL_ROLE_ASS', $this->getDepartement());

        $id = $personnel->getId();
        if ($this->isCsrfTokenValid('delete' . $id, $request->request->get('_token'))) {
            $pf = $personnelDepartementRepository->findByPersonnelDepartement($personnel,
                $this->getDepartement());
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

    #[Route('/gestion/droit/{personnel}', name: 'droit')]
    public function gestionDroit(
        PersonnelDepartementRepository $personnelDepartementRepository,
        Personnel $personnel
    ): Response {
        $this->denyAccessUnlessGranted('MINIMAL_ROLE_ASS', $this->getDepartement());

        $droits = $personnelDepartementRepository->findDroitsByPersonnelDepartement($personnel,
            $this->getDepartement());

        return $this->render('administration/personnel/_droit.html.twig',
            ['personnel' => $personnel, 'droits' => $droits]);
    }

    #[Route('/modifier-droit/{personnel}',
        name: 'departement_modifier_droit',
        options: ['expose' => true])]
    public function modifierDroits(
        Request $request,
        PersonnelDepartementRepository $personnelDepartementRepository,
        Personnel $personnel
    ): Response {
        $this->denyAccessUnlessGranted('MINIMAL_ROLE_ASS', $this->getDepartement());

        $droit = $request->request->get('droit');
        $pf = $personnelDepartementRepository->findByPersonnelDepartement($personnel,
            $this->getDepartement());

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
            $pf = new PersonnelDepartement($personnel, $this->getDepartement());
            $pf->setDepartement($this->getDepartement());
            $pf->setAnnee(date('Y'));
            $pf->addRole($droit);
        }

        return $this->json(false, Response::HTTP_INTERNAL_SERVER_ERROR);
    }
}
