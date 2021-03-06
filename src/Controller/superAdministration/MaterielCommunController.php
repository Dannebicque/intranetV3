<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Controller/superAdministration/MaterielCommunController.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 07/02/2021 11:20
 */

namespace App\Controller\superAdministration;

use App\Classes\MyExport;
use App\Controller\BaseController;
use App\Entity\Constantes;
use App\Entity\MaterielCommun;
use App\Form\MaterielCommunType;
use App\Repository\MaterielCommunRepository;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

/**
 * @Route("/administratif/materiel/commun")
 */
class MaterielCommunController extends BaseController
{
    /**
     * @Route("/", name="sa_materiel_commun_index", methods={"GET"})
     */
    public function index(MaterielCommunRepository $materielCommunRepository): Response
    {
        return $this->render('super-administration/materiel_commun/index.html.twig', [
            'materiel_communs' => $materielCommunRepository->findAll(),
        ]);
    }

    /**
     * @Route("/export.{_format}", name="sa_materiel_commun_export", methods="GET",
     *                             requirements={"_format"="csv|xlsx|pdf"})
     *
     * @param $_format
     */
    public function export(MyExport $myExport, MaterielCommunRepository $materielCommunRepository, $_format): Response
    {
        $materielsCommuns = $materielCommunRepository->findAll();

        return $myExport->genereFichierGenerique(
            $_format,
            $materielsCommuns,
            'materiel_commun',
            ['materiel_commun_administration'],
            ['designation', 'description']
        );
    }

    /**
     * @Route("/new", name="sa_materiel_commun_new", methods={"GET","POST"})
     */
    public function new(Request $request): Response
    {
        $materielCommun = new MaterielCommun();
        $form = $this->createForm(MaterielCommunType::class, $materielCommun);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $this->entityManager->persist($materielCommun);
            $this->entityManager->flush();
            $this->addFlashBag(Constantes::FLASHBAG_SUCCESS, 'materiel_commun.add.success.flash');

            return $this->redirectToRoute('sa_materiel_commun_index');
        }

        return $this->render('super-administration/materiel_commun/new.html.twig', [
            'materiel_commun' => $materielCommun,
            'form'            => $form->createView(),
        ]);
    }

    /**
     * @Route("/{id}", name="sa_materiel_commun_show", methods={"GET"})
     */
    public function show(MaterielCommun $materielCommun): Response
    {
        return $this->render('super-administration/materiel_commun/show.html.twig', [
            'materiel_commun' => $materielCommun,
        ]);
    }

    /**
     * @Route("/{id}/edit", name="sa_materiel_commun_edit", methods={"GET","POST"})
     */
    public function edit(Request $request, MaterielCommun $materielCommun): Response
    {
        $form = $this->createForm(MaterielCommunType::class, $materielCommun);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $this->entityManager->flush();
            $this->addFlashBag(Constantes::FLASHBAG_SUCCESS, 'materiel_commun.edit.success.flash');

            return $this->redirectToRoute('sa_materiel_commun_index');
        }

        return $this->render('super-administration/materiel_commun/edit.html.twig', [
            'materiel_commun' => $materielCommun,
            'form'            => $form->createView(),
        ]);
    }

    /**
     * @Route("/{id}/duplicate", name="sa_materiel_commun_duplicate", methods="GET|POST")
     */
    public function duplicate(MaterielCommun $materielCommun): Response
    {
        $newMaterielCommun = clone $materielCommun;

        $this->entityManager->persist($newMaterielCommun);
        $this->entityManager->flush();
        $this->addFlashBag(Constantes::FLASHBAG_SUCCESS, 'materiel_commun.duplicate.success.flash');

        return $this->redirectToRoute('sa_materiel_commun_edit', ['id' => $newMaterielCommun->getId()]);
    }

    /**
     * @Route("/{id}", name="sa_materiel_commun_delete", methods="DELETE")
     */
    public function delete(Request $request, MaterielCommun $materielCommun): Response
    {
        $id = $materielCommun->getId();
        if ($this->isCsrfTokenValid('delete' . $id, $request->request->get('_token'))) {
            $this->entityManager->remove($materielCommun);
            $this->entityManager->flush();

            return $this->json($id, Response::HTTP_OK);
        }

        return $this->json(false, Response::HTTP_INTERNAL_SERVER_ERROR);
    }
}
