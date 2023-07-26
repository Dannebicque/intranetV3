<?php
/*
 * Copyright (c) 2022. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Controller/administration/projet/ProjetPeriodeController.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 14/09/2022 09:23
 */

namespace App\Controller\administration\projet;

use App\Classes\MyExport;
use App\Classes\MySerializer;
use App\Controller\BaseController;
use App\Entity\Constantes;
use App\Entity\ProjetPeriode;
use App\Form\ProjetPeriodeType;
use App\Repository\ProjetPeriodeRepository;
use JsonException;
use Symfony\Bridge\Doctrine\Attribute\MapEntity;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

#[Route(path: '/administration/projet/periode')]
class ProjetPeriodeController extends BaseController
{
    #[Route(path: '/', name: 'administration_projet_periode_index', methods: ['GET'])]
    public function index(ProjetPeriodeRepository $projetPeriodeRepository): Response
    {
        $this->denyAccessUnlessGranted('MINIMAL_ROLE_PROJET', $this->getDepartement());

        return $this->render('administration/projet/projet_periode/index.html.twig', [
            'projet_periodes' => $projetPeriodeRepository->findByDepartement($this->getDepartement()),
        ]);
    }

    /**
     * @throws JsonException
     */
    #[Route(path: '/export.{_format}', name: 'administration_projet_periode_export', requirements: ['_format' => 'csv|xlsx|pdf'], methods: 'GET')]
    public function export(
        MySerializer $mySerializer,
        MyExport $myExport, ProjetPeriodeRepository $projetPeriodeRepository, string $_format): Response
    {
        $this->denyAccessUnlessGranted('MINIMAL_ROLE_PROJET', $this->getDepartement());
        $projetPeriodes = $projetPeriodeRepository->findByDepartement($this->getDepartement());

        $data = $mySerializer->getDataFromSerialization(
            $projetPeriodes,
            ['libelle', 'dateDebut', 'dateFin'],
            ['projet_periode_administration'],
            ['dateDebut' => MySerializer::ONLY_DATE, 'dateFin' => MySerializer::ONLY_DATE]
        );

        return $myExport->genereFichierGeneriqueFromData(
            $_format,
            $data,
            'periodes_projet_'.$this->getDepartement()?->getLibelle(),
        );
    }

    #[Route(path: '/new', name: 'administration_projet_periode_new', methods: ['GET', 'POST'])]
    public function new(Request $request): Response
    {
        $this->denyAccessUnlessGranted('MINIMAL_ROLE_PROJET', $this->getDepartement());
        $projetPeriode = new ProjetPeriode();
        $projetPeriode->setAnneeUniversitaire($this->dataUserSession->getAnneeUniversitaire());
        $form = $this->createForm(ProjetPeriodeType::class, $projetPeriode, [
            'departement' => $this->dataUserSession->getDepartement(),
            'attr' => [
                'data-provide' => 'validation',
            ],
        ]);
        $form->handleRequest($request);
        if ($form->isSubmitted() && $form->isValid()) {
            $this->entityManager->persist($projetPeriode);
            $this->entityManager->flush();
            $this->addFlashBag(Constantes::FLASHBAG_SUCCESS, 'projet_periode.create.success.flash');

            return $this->redirectToRoute('administration_projet_periode_index');
        }

        return $this->render('administration/projet/projet_periode/new.html.twig', [
            'projet_periode' => $projetPeriode,
            'form' => $form,
        ]);
    }

    #[Route(path: '/{id}', name: 'administration_projet_periode_show', methods: ['GET'])]
    public function show(#[MapEntity(mapping: ['id' => 'uuid'])]
                         ProjetPeriode $projetPeriode): Response
    {
        $this->denyAccessUnlessGranted('MINIMAL_ROLE_PROJET', $projetPeriode->getSemestre());

        return $this->render('administration/projet/projet_periode/show.html.twig', [
            'projet_periode' => $projetPeriode,
        ]);
    }

    #[Route(path: '/{id}/edit', name: 'administration_projet_periode_edit', methods: ['GET', 'POST'])]
    public function edit(Request $request, #[MapEntity(mapping: ['id' => 'uuid'])]
    ProjetPeriode                $projetPeriode): Response
    {
        $this->denyAccessUnlessGranted('MINIMAL_ROLE_PROJET', $projetPeriode->getSemestre());
        $form = $this->createForm(ProjetPeriodeType::class, $projetPeriode, [
            'departement' => $this->dataUserSession->getDepartement(),
            'attr' => [
                'data-provide' => 'validation',
            ],
        ]);
        $form->handleRequest($request);
        if ($form->isSubmitted() && $form->isValid()) {
            $this->entityManager->flush();
            $this->addFlashBag(Constantes::FLASHBAG_SUCCESS, 'projet_periode.edit.success.flash');

            return $this->redirectToRoute('administration_projet_periode_index');
        }

        return $this->render('administration/projet/projet_periode/edit.html.twig', [
            'projet_periode' => $projetPeriode,
            'form' => $form,
        ]);
    }

    #[Route(path: '/{id}', name: 'administration_projet_periode_delete', methods: ['DELETE'])]
    public function delete(Request $request, #[MapEntity(mapping: ['id' => 'uuid'])]
    ProjetPeriode                  $projetPeriode): Response
    {
        $this->denyAccessUnlessGranted('MINIMAL_ROLE_PROJET', $projetPeriode->getSemestre());
        // la suppression entraine la suppression des offres, des templates et des stages déjà présent.
        $id = $projetPeriode->getUuidString();
        if ($this->isCsrfTokenValid('delete'.$id, $request->server->get('HTTP_X_CSRF_TOKEN'))) {
            $this->entityManager->remove($projetPeriode);
            $this->entityManager->flush();
            $this->addFlashBag(
                Constantes::FLASHBAG_SUCCESS,
                'projet_periode.delete.success.flash'
            );

            return $this->json($id, Response::HTTP_OK);
        }
        $this->addFlashBag(Constantes::FLASHBAG_ERROR, 'projet_periode.delete.error.flash');

        return $this->json(false, Response::HTTP_INTERNAL_SERVER_ERROR);
    }

    #[Route(path: '/{id}/duplicate', name: 'administration_projet_periode_duplicate', methods: 'GET')]
    public function duplicate(#[MapEntity(mapping: ['id' => 'uuid'])]
                              ProjetPeriode $projetPeriode): Response
    {
        $this->denyAccessUnlessGranted('MINIMAL_ROLE_PROJET', $projetPeriode->getSemestre());
        $newProjetPeriode = clone $projetPeriode;
        $this->entityManager->persist($newProjetPeriode);
        $this->entityManager->flush();
        $this->addFlashBag(Constantes::FLASHBAG_SUCCESS, 'projet_periode.duplicate.success.flash');

        return $this->redirectToRoute('administration_projet_periode_edit', ['id' => $newProjetPeriode->getId()]);
    }
}
