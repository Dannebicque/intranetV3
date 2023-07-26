<?php
/*
 * Copyright (c) 2022. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Controller/administration/HrsController.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 09/09/2022 12:25
 */

namespace App\Controller\administration;

use App\Controller\BaseController;
use App\Entity\Constantes;
use App\Entity\Hrs;
use App\Form\HrsType;
use App\Repository\HrsRepository;
use App\Table\HrsTableType;
use JsonException;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

#[Route('/administration/service-previsionnel/hrs')]
class HrsController extends BaseController
{
    /**
     * @throws JsonException
     */
    #[Route(path: '/{annee}', name: 'administration_hrs_index', requirements: ['annee' => '\d+'], options: ['expose' => true], methods: 'GET|POST')]
    public function index(Request $request, ?int $annee = 0): Response
    {
        //todo: faire avec Stimulus ?
        $this->denyAccessUnlessGranted('MINIMAL_ROLE_ASS', $this->getDepartement());
        if (0 === $annee && null !== $this->getAnneeUniversitaire() && 0 !== $this->getAnneeUniversitaire()->getAnnee()) {
            $annee = $this->getAnneeUniversitaire()->getAnnee();
        }
        $table = $this->createTable(HrsTableType::class, [
            'departement' => $this->getDepartement(),
            'annee' => $annee,
        ]);

        $hrs = new Hrs($this->getDepartement(), $annee);
        $form = $this->createForm(HrsType::class, $hrs, [
            'departement' => $this->getDepartement(),
            'attr' => [
                'data-provide' => 'validation',
            ],
            'action' => $this->generateUrl('administration_hrs_post_index', ['annee' => $annee]),
        ]);


        $table->handleRequest($request);
        if ($table->isCallback()) {
            return $table->getCallbackResponse();
        }


        return $this->render('administration/hrs/index.html.twig', [
            'annee' => $annee,
            'table' => $table,
            'form' => $form,
        ]);
    }

    #[Route(path: '/{annee}/post', name: 'administration_hrs_post_index', requirements: ['annee' => '\d+'], options: ['expose' => true], methods: 'POST')]
    public function addHrs(Request $request, int $annee): Response
    {
        $hrs = new Hrs($this->getDepartement(), $annee);
        $form = $this->createForm(HrsType::class, $hrs, [
            'departement' => $this->getDepartement(),
            'attr' => [
                'data-provide' => 'validation',
            ],
        ]);

        $form->handleRequest($request);
        if ($form->isSubmitted() && $form->isValid()) {
            $this->entityManager->persist($hrs);
            $this->entityManager->flush();
            $this->addFlashBag(Constantes::FLASHBAG_SUCCESS, 'hrs.add.success.flash');
        }

        return $this->redirectToRoute('administration_hrs_index', ['annee' => $annee]);
    }

    #[Route(path: '/{id}/edit', name: 'administration_hrs_edit', methods: 'GET|POST')]
    public function edit(Request $request, Hrs $hrs): Response
    {
        $this->denyAccessUnlessGranted('MINIMAL_ROLE_ASS', $hrs->getDepartement());
        // todo: département parfois null??
        $form = $this->createForm(HrsType::class, $hrs, [
            'departement' => $this->getDepartement(),
            'attr' => [
                'data-provide' => 'validation',
            ],
        ]);
        $form->handleRequest($request);
        if ($form->isSubmitted() && $form->isValid()) {
            $this->entityManager->flush();
            $this->addFlashBag(Constantes::FLASHBAG_SUCCESS, 'hrs.edit.success.flash');

            if (null !== $request->request->get('btn_update')) {
                return $this->redirectToRoute('administration_hrs_index');
            }
        }

        return $this->render('administration/hrs/edit.html.twig', [
            'hrs' => $hrs,
            'form' => $form,
        ]);
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

        return $this->redirectToRoute('administration_hrs_index', ['annee' => $annee_destination]);
    }

    #[Route(path: '/{id}/duplicate', name: 'administration_hrs_duplicate', methods: 'GET')]
    public function duplicate(Hrs $hrs): Response
    {
        $this->denyAccessUnlessGranted('MINIMAL_ROLE_ASS', $hrs->getDepartement());
        $newHrs = clone $hrs;
        $this->entityManager->persist($newHrs);
        $this->entityManager->flush();
        $this->addFlashBag(Constantes::FLASHBAG_SUCCESS, 'hrs.duplicate.success.flash');
        // 'Copie effectuée avec succès. VOus pouvez modifier le nouvel élément.'
        return $this->redirectToRoute('administration_hrs_edit', ['id' => $newHrs->getId()]);
    }

    #[Route(path: '/{id}/details', name: 'administration_hrs_show', methods: 'GET')]
    public function show(Hrs $hrs): Response
    {
        $this->denyAccessUnlessGranted('MINIMAL_ROLE_ASS', $hrs->getDepartement());

        return $this->render('administration/hrs/_show.html.twig', ['hrs' => $hrs]);
    }

    #[Route(path: '/{id}', name: 'administration_hrs_delete', methods: 'DELETE')]
    public function delete(Request $request, Hrs $hrs): Response
    {
        $this->denyAccessUnlessGranted('MINIMAL_ROLE_ASS', $hrs->getDepartement());
        $id = $hrs->getId();
        if ($this->isCsrfTokenValid('delete'.$id, $request->server->get('HTTP_X_CSRF_TOKEN'))) {
            $this->entityManager->remove($hrs);
            $this->entityManager->flush();
            $this->addFlashBag(Constantes::FLASHBAG_SUCCESS, 'hrs.delete.success.flash');

            return $this->json($id, Response::HTTP_OK);
        }
        $this->addFlashBag(Constantes::FLASHBAG_SUCCESS, 'hrs.delete.error.flash');

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

        return $this->redirectToRoute('administration_hrs_index');
    }
}
