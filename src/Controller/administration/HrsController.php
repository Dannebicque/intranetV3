<?php
/*
 * Copyright (c) 2024. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Controller/administration/HrsController.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 21/08/2024 19:14
 */

namespace App\Controller\administration;

use App\Controller\BaseController;
use App\Entity\Constantes;
use App\Entity\Hrs;
use App\Repository\DiplomeRepository;
use App\Repository\HrsRepository;
use App\Repository\PersonnelRepository;
use App\Repository\SemestreRepository;
use App\Repository\TypeHrsRepository;
use App\Utils\Tools;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;

#[Route('/administration/service-previsionnel/hrs')]
class HrsController extends BaseController
{
    #[Route(path: '/new', name: 'administration_hrs_new', methods: 'GET|POST')]
    public function new(
        TypeHrsRepository   $typeHrsRepository,
        PersonnelRepository $personnelRepository,
        Request             $request): Response
    {

        if ($request->request->has('personnel') && null !== $request->request->get('personnel')) {
            $personnel = $personnelRepository->find($request->request->get('personnel'));
        } else {
            $personnel = null;
        }

        if ($request->request->has('typeHrs') && null !== $request->request->get('typeHrs')) {
            $typeHrs = $typeHrsRepository->find($request->request->get('typeHrs'));
        } else {
            $typeHrs = null;
        }

        $annee = $request->request->get('annee');

        $hrs = new Hrs($this->getDepartement(), $annee);
        $hrs->setPersonnel($personnel);
        $hrs->setTypeHrs($typeHrs);
        $hrs->setNbHeuresTd(Tools::convertToFloat($request->request->get('nbHeures', 0)));
        $hrs->setLibelle('A définir');
        $this->entityManager->persist($hrs);
        $this->entityManager->flush();

        return new JsonResponse(true, Response::HTTP_OK);
    }

    #[Route(path: '/annee/duplicate', name: 'administration_hrs_duplicate_annee', methods: 'POST')]
    public function duplicateAnnee(HrsRepository $hrsRepository, Request $request): Response
    {
        $this->denyAccessUnlessGranted('MINIMAL_ROLE_ASS', $this->getDepartement());
        $anneeDepart = $request->request->get('annee_depart');
        $annee_destination = $request->request->get('annee_destination');
        $annee_concerver = $request->request->get('annee_concerver');
        // on efface, sauf si la case est cochée.
        if ('true' !== $annee_concerver) {
            $hrs = $hrsRepository->findByDepartement($this->getDepartement(), $annee_destination);
            foreach ($hrs as $hr) {
                $this->entityManager->remove($hr);
            }
            $this->entityManager->flush();
        }
        $hrs = $hrsRepository->findByDepartement($this->getDepartement(), $anneeDepart);
        /** @var Hrs $hr */
        foreach ($hrs as $hr) {
            $newHrs = clone $hr;
            $newHrs->setAnnee($annee_destination);
            $this->entityManager->persist($newHrs);
        }
        $this->entityManager->flush();
        $this->addFlashBag(Constantes::FLASHBAG_SUCCESS, 'hrs.duplicate_annee.success.flash');

        return $this->redirectToRoute('administration_previsionnel_index', ['step' => 'synthese-hrs']);
    }

    #[Route(path: '/{id}/duplicate', name: 'administration_hrs_duplicate', methods: 'GET')]
    public function duplicate(Hrs $hrs): Response
    {
        $this->denyAccessUnlessGranted('MINIMAL_ROLE_ASS', $hrs->getDepartement());
        $newHrs = clone $hrs;
        $this->entityManager->persist($newHrs);
        $this->entityManager->flush();

        return new JsonResponse(true, Response::HTTP_OK);
    }

    #[Route(path: '/{id}/change-data', name: 'administration_hrs_change_data', methods: 'POST')]
    public function changeData(
        Request            $request,
        TypeHrsRepository  $typeHrsRepository,
        SemestreRepository $semestreRepository,
        DiplomeRepository  $diplomeRepository,
        Hrs                $hrs): Response
    {
        $this->denyAccessUnlessGranted('MINIMAL_ROLE_ASS', $hrs->getDepartement());


        switch ($request->request->get('field')) {
            case 'typeHrs':
                $type = $typeHrsRepository->find($request->request->get('valeur'));
                if ($type !== null) {
                    $hrs->setTypeHrs($type);
                }
                break;
            case 'libelle':
                $hrs->setLibelle($request->request->get('valeur'));
                break;
            case 'semestre':
                $semestre = $semestreRepository->find($request->request->get('valeur'));
                if ($semestre !== null) {
                    $hrs->setSemestre($semestre);
                }
                break;
            case 'diplome':
                $diplome = $diplomeRepository->find($request->request->get('valeur'));
                if ($diplome !== null) {
                    $hrs->setDiplome($diplome);
                }
                break;
            case 'nbHeuresTd':
                $hrs->setNbHeuresTd(Tools::convertToFloat($request->request->get('valeur')));
                break;
        }
        $this->entityManager->flush();
        return new JsonResponse(true, Response::HTTP_OK);
    }


    #[Route(path: '/{id}', name: 'administration_hrs_delete', methods: 'DELETE')]
    public function delete(Request $request, Hrs $hrs): Response
    {
        $this->denyAccessUnlessGranted('MINIMAL_ROLE_ASS', $hrs->getDepartement());
        $id = $hrs->getId();
        if ($this->isCsrfTokenValid('delete' . $id, $request->server->get('HTTP_X_CSRF_TOKEN'))) {
            $this->entityManager->remove($hrs);
            $this->entityManager->flush();
            $this->addFlashBag(Constantes::FLASHBAG_SUCCESS, 'hrs.delete.success.flash');

            return $this->json($id, Response::HTTP_OK);
        }
        return $this->json(false, Response::HTTP_INTERNAL_SERVER_ERROR);
    }

    #[Route(path: '/supprimer/annee', name: 'administration_hrs_supprimer_annee', methods: 'DELETE')]
    public function supprimer(Request $request, HrsRepository $hrsRepository): Response
    {
        $this->denyAccessUnlessGranted('MINIMAL_ROLE_ASS', $this->getDepartement());
        if ($this->isCsrfTokenValid('supprimer', $request->server->get('HTTP_X_CSRF_TOKEN'))) {
            $hrs = $hrsRepository->findByDepartement($this->getDepartement(),
                $request->request->get('annee_supprimer'));
            foreach ($hrs as $hr) {
                $this->entityManager->remove($hr);
            }
            $this->entityManager->flush();
            $this->addFlashBag(Constantes::FLASHBAG_SUCCESS, 'hrs.delete.success.flash');
        }
        $this->addFlashBag(Constantes::FLASHBAG_SUCCESS, 'hrs.delete.error.flash');

        return $this->redirectToRoute('administration_previsionnel_index', ['step' => 'synthese-hrs']);
    }
}
