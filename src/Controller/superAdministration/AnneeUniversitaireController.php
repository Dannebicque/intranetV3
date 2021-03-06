<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Controller/superAdministration/AnneeUniversitaireController.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 07/02/2021 11:20
 */

namespace App\Controller\superAdministration;

use App\Classes\MyExport;
use App\Controller\BaseController;
use App\Entity\AnneeUniversitaire;
use App\Entity\Constantes;
use App\Form\AnneeUniversitaireType;
use App\Repository\AnneeUniversitaireRepository;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

/**
 * @Route("/administratif/annee-universitaire")
 */
class AnneeUniversitaireController extends BaseController
{
    /**
     * @Route("/", name="sa_annee_universitaire_index", methods={"GET"})
     */
    public function index(AnneeUniversitaireRepository $anneeUniversitaireRepository): Response
    {
        return $this->render('super-administration/annee_universitaire/index.html.twig', [
            'annee_universitaires' => $anneeUniversitaireRepository->findAll(),
        ]);
    }

    /**
     * @Route("/annee-active/change/{annee}", name="sa_annee_universitaire_change_active", options={"expose":true})
     */
    public function changeOption(
        AnneeUniversitaireRepository $anneeUniversitaireRepository,
        Request $request,
        AnneeUniversitaire $annee
    ): Response {
        $value = $request->request->get('value');
        if ('true' === $value) {
            $annees = $anneeUniversitaireRepository->findAll();
            foreach ($annees as $uneAnnee) {
                $uneAnnee->setActive(false);
            }
            $annee->setActive(true);
        } else {
            $annee->setActive(false);
        }

        $this->entityManager->flush();

        return new Response('', Response::HTTP_OK);
    }

    /**
     * @Route("/export.{_format}", name="sa_annee_universitaire_export", methods="GET",
     *                             requirements={"_format"="csv|xlsx|pdf"})
     *
     * @param $_format
     */
    public function export(
        MyExport $myExport,
        AnneeUniversitaireRepository $anneeUniversitaireRepository,
        $_format
    ): Response {
        $annee_universitaires = $anneeUniversitaireRepository->findAll();

        return $myExport->genereFichierGenerique(
            $_format,
            $annee_universitaires,
            'annee_universitaire',
            ['annee_universitaire'],
            ['libelle', 'annee', 'commentaire']
        );
    }

    /**
     * @Route("/new", name="sa_annee_universitaire_new", methods={"GET","POST"})
     */
    public function new(Request $request): Response
    {
        $anneeUniversitaire = new AnneeUniversitaire();
        $form = $this->createForm(AnneeUniversitaireType::class, $anneeUniversitaire);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $this->entityManager->persist($anneeUniversitaire);
            $this->entityManager->flush();
            $this->addFlashBag(Constantes::FLASHBAG_SUCCESS, 'annee_universitaire.add.success.flash');

            return $this->redirectToRoute('sa_annee_universitaire_index');
        }

        return $this->render('super-administration/annee_universitaire/new.html.twig', [
            'annee_universitaire' => $anneeUniversitaire,
            'form'                => $form->createView(),
        ]);
    }

    /**
     * @Route("/{id}", name="sa_annee_universitaire_show", methods={"GET"})
     */
    public function show(AnneeUniversitaire $anneeUniversitaire): Response
    {
        return $this->render('super-administration/annee_universitaire/show.html.twig', [
            'annee_universitaire' => $anneeUniversitaire,
        ]);
    }

    /**
     * @Route("/{id}/edit", name="sa_annee_universitaire_edit", methods={"GET","POST"})
     */
    public function edit(Request $request, AnneeUniversitaire $anneeUniversitaire): Response
    {
        $form = $this->createForm(AnneeUniversitaireType::class, $anneeUniversitaire);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $this->entityManager->flush();
            $this->addFlashBag(Constantes::FLASHBAG_SUCCESS, 'annee_universitaire.edit.success.flash');

            return $this->redirectToRoute('sa_annee_universitaire_index', [
                'id' => $anneeUniversitaire->getId(),
            ]);
        }

        return $this->render('super-administration/annee_universitaire/edit.html.twig', [
            'annee_universitaire' => $anneeUniversitaire,
            'form'                => $form->createView(),
        ]);
    }

    /**
     * @Route("/{id}/duplicate", name="sa_annee_universitaire_duplicate", methods="GET|POST")
     */
    public function duplicate(AnneeUniversitaire $annee_universitaire): Response
    {
        $newAnneeUniversitaire = clone $annee_universitaire;

        $this->entityManager->persist($newAnneeUniversitaire);
        $this->entityManager->flush();
        $this->addFlashBag(Constantes::FLASHBAG_SUCCESS, 'annee_universitaire.duplicate.success.flash');

        return $this->redirectToRoute('sa_annee_universitaire_edit', ['id' => $newAnneeUniversitaire->getId()]);
    }

    /**
     * @Route("/{id}", name="sa_annee_universitaire_delete", methods="DELETE")
     */
    public function delete(Request $request, AnneeUniversitaire $annee_universitaire): Response
    {
        $id = $annee_universitaire->getId();
        if ($this->isCsrfTokenValid('delete' . $id, $request->request->get('_token'))) {
            if (0 === \count($annee_universitaire->getDepartements()) &&
                0 === \count($annee_universitaire->getDiplomes()) &&
                0 === \count($annee_universitaire->getScolarites()) &&
                0 === \count($annee_universitaire->getEvaluations())) {
                $this->entityManager->remove($annee_universitaire);
                $this->entityManager->flush();

                return $this->json($id, Response::HTTP_OK);
            }

            return $this->json('not_empty', Response::HTTP_INTERNAL_SERVER_ERROR);
        }

        return $this->json(false, Response::HTTP_INTERNAL_SERVER_ERROR);
    }
}
