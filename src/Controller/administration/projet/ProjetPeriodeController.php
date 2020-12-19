<?php
// Copyright (c) 2020. | David Annebicque | IUT de Troyes  - All Rights Reserved
// @file /Users/davidannebicque/htdocs/intranetV3/src/Controller/administration/projet/ProjetPeriodeController.php
// @author davidannebicque
// @project intranetV3
// @lastUpdate 19/12/2020 14:57

namespace App\Controller\administration\projet;

use App\Classes\MyExport;
use App\Controller\BaseController;
use App\Entity\Constantes;
use App\Entity\ProjetPeriode;
use App\Form\ProjetPeriodeType;
use App\Repository\ProjetPeriodeRepository;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\ParamConverter;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

/**
 * @Route("/administration/projet/periode")
 */
class ProjetPeriodeController extends BaseController
{
    /**
     * @Route("/", name="administration_projet_periode_index", methods={"GET"})
     * @param ProjetPeriodeRepository $projetPeriodeRepository
     *
     * @return Response
     */
    public function index(ProjetPeriodeRepository $projetPeriodeRepository): Response
    {
        return $this->render('administration/projet/projet_periode/index.html.twig', [
            'projet_periodes' => $projetPeriodeRepository->findByDepartement($this->getDepartement()),
        ]);
    }

    /**
     * @Route("/export.{_format}", name="administration_projet_periode_export", methods="GET",
     *                             requirements={"_format"="csv|xlsx|pdf"})
     * @param MyExport                $myExport
     * @param ProjetPeriodeRepository $projetPeriodeRepository
     * @param                         $_format
     *
     * @return Response
     */
    public function export(MyExport $myExport, ProjetPeriodeRepository $projetPeriodeRepository, $_format): Response
    {
        $dates = $projetPeriodeRepository->findByDepartement($this->getDepartement());

        return $myExport->genereFichierGenerique(
            $_format,
            $dates,
            'periodes_stage',
            ['projet_periode_administration'],
            ['libelle', 'dateDebut', 'dateFin']
        );
    }

    /**
     * @Route("/new", name="administration_projet_periode_new", methods={"GET","POST"})
     * @param Request $request
     *
     * @return Response
     */
    public function new(Request $request): Response
    {
        $projetPeriode = new ProjetPeriode();
        $projetPeriode->setAnneeUniversitaire($this->dataUserSession->getAnneeUniversitaire());
        $form = $this->createForm(ProjetPeriodeType::class, $projetPeriode, [
            'departement' => $this->dataUserSession->getDepartement(),
            'attr'        => [
                'data-provide' => 'validation'
            ]
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
            'form'           => $form->createView(),
        ]);
    }

    /**
     * @Route("/{id}", name="administration_projet_periode_show", methods={"GET"})
     * @ParamConverter("projetPeriode", options={"mapping": {"id": "uuid"}})
     * @param ProjetPeriode $projetPeriode
     *
     * @return Response
     */
    public function show(ProjetPeriode $projetPeriode): Response
    {
        return $this->render('administration/projet/projet_periode/show.html.twig', [
            'projet_periode' => $projetPeriode,
        ]);
    }

    /**
     * @Route("/{id}/edit", name="administration_projet_periode_edit", methods={"GET","POST"})
     * @ParamConverter("projetPeriode", options={"mapping": {"id": "uuid"}})
     * @param Request       $request
     * @param ProjetPeriode $projetPeriode
     *
     * @return Response
     */
    public function edit(Request $request, ProjetPeriode $projetPeriode): Response
    {
        $form = $this->createForm(ProjetPeriodeType::class, $projetPeriode, [
            'departement' => $this->dataUserSession->getDepartement(),
            'attr'        => [
                'data-provide' => 'validation'
            ]
        ]);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $this->entityManager->flush();
            $this->addFlashBag(Constantes::FLASHBAG_SUCCESS, 'projet_periode.edit.success.flash');

            return $this->redirectToRoute('administration_projet_periode_index');
        }

        return $this->render('administration/projet/projet_periode/edit.html.twig', [
            'projet_periode' => $projetPeriode,
            'form'           => $form->createView(),
        ]);
    }

    /**
     * @Route("/{id}", name="administration_projet_periode_delete", methods={"DELETE"})
     * @ParamConverter("projetPeriode", options={"mapping": {"id": "uuid"}})
     * @param Request       $request
     * @param ProjetPeriode $projetPeriode
     *
     * @return Response
     */
    public function delete(Request $request, ProjetPeriode $projetPeriode): Response
    {
        //la suppression entraine la suppression des offres, des templates et des stages déjà présent.
        $id = $projetPeriode->getUuidString();
        if ($this->isCsrfTokenValid('delete' . $id, $request->request->get('_token'))) {
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

    /**
     * @Route("/{id}/duplicate", name="administration_projet_periode_duplicate", methods="GET")
     * @ParamConverter("projetPeriode", options={"mapping": {"id": "uuid"}})
     * @param ProjetPeriode $projetPeriode
     *
     * @return Response
     */
    public function duplicate(ProjetPeriode $projetPeriode): Response
    {
        $newProjetPeriode = clone $projetPeriode;
        $this->entityManager->persist($newProjetPeriode);
        $this->entityManager->flush();
        $this->addFlashBag(Constantes::FLASHBAG_SUCCESS, 'projet_periode.duplicate.success.flash');

        return $this->redirectToRoute('administration_projet_periode_edit', ['id' => $newProjetPeriode->getId()]);
    }
}
