<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Controller/appPersonnel/AlternanceFicheSuiviController.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 07/02/2021 11:20
 */

namespace App\Controller\appPersonnel;

use App\Classes\MyAlternanceFicheSuivi;
use App\Entity\Alternance;
use App\Entity\AlternanceFicheSuivi;
use App\Form\AlternanceFicheSuiviType;
use Exception;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Twig\Error\LoaderError;
use Twig\Error\RuntimeError;
use Twig\Error\SyntaxError;

/**
 * @Route("/application/personnel/alternance/fiche-suivi")
 */
class AlternanceFicheSuiviController extends AbstractController
{
    /**
     * @Route("/{alternance}", name="application_personnel_alternance_fiche_suivi_alternance", methods={"GET"})
     */
    public function index(Alternance $alternance): Response
    {
        return $this->render('appPersonnel/alternance_fiche_suivi/index.html.twig', [
            'alternance_fiche_suivis' => $alternance->getAlternanceFicheSuivis(),
            'alternance'              => $alternance,
        ]);
    }

    /**
     * @Route("/{alternance}/new", name="application_personnel_alternance_fiche_suivi_new", methods={"GET","POST"})
     *
     * @throws Exception
     */
    public function new(Request $request, Alternance $alternance): Response
    {
        $alternanceFicheSuivi = new AlternanceFicheSuivi($alternance);
        $form = $this->createForm(AlternanceFicheSuiviType::class, $alternanceFicheSuivi);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $entityManager = $this->getDoctrine()->getManager();
            $entityManager->persist($alternanceFicheSuivi);
            $entityManager->flush();

            return $this->redirectToRoute('application_personnel_alternance_fiche_suivi_show',
                ['id' => $alternanceFicheSuivi->getId()]);
        }

        return $this->render('appPersonnel/alternance_fiche_suivi/new.html.twig', [
            'alternance_fiche_suivi' => $alternanceFicheSuivi,
            'form'                   => $form->createView(),
            'alternance'             => $alternance,
        ]);
    }

    /**
     * @Route("/{id}/details", name="application_personnel_alternance_fiche_suivi_show", methods={"GET"})
     */
    public function show(AlternanceFicheSuivi $alternanceFicheSuivi): Response
    {
        return $this->render('appPersonnel/alternance_fiche_suivi/show.html.twig', [
            'alternance_fiche_suivi' => $alternanceFicheSuivi,
        ]);
    }

    /**
     * @Route("/{id}/imprimer", name="application_personnel_alternance_fiche_suivi_print", methods={"GET"})
     *
     * @throws LoaderError
     * @throws RuntimeError
     * @throws SyntaxError
     */
    public function print(
        MyAlternanceFicheSuivi $myAlternanceFicheSuivi,
        AlternanceFicheSuivi $alternanceFicheSuivi
    ): Response {
        return $myAlternanceFicheSuivi->print($alternanceFicheSuivi);
    }

    /**
     * @Route("/{id}/edit", name="application_personnel_alternance_fiche_suivi_edit", methods={"GET","POST"})
     */
    public function edit(Request $request, AlternanceFicheSuivi $alternanceFicheSuivi): Response
    {
        $form = $this->createForm(AlternanceFicheSuiviType::class, $alternanceFicheSuivi);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $this->getDoctrine()->getManager()->flush();

            return $this->redirectToRoute('application_personnel_alternance_fiche_suivi_show',
                ['id' => $alternanceFicheSuivi->getId()]);
        }

        return $this->render('appPersonnel/alternance_fiche_suivi/edit.html.twig', [
            'alternance_fiche_suivi' => $alternanceFicheSuivi,
            'form'                   => $form->createView(),
        ]);
    }

    /**
     * @Route("/{id}", name="application_personnel_alternance_fiche_suivi_delete", methods={"DELETE"})
     */
    public function delete(Request $request, AlternanceFicheSuivi $alternanceFicheSuivi): Response
    {
        $alternance = $alternanceFicheSuivi->getAlternance();

        if ($this->isCsrfTokenValid('delete' . $alternanceFicheSuivi->getId(), $request->request->get('_token'))) {
            $entityManager = $this->getDoctrine()->getManager();
            $entityManager->remove($alternanceFicheSuivi);
            $entityManager->flush();
        }

        return $this->redirectToRoute('application_personnel_alternance_fiche_suivi_alternance',
            ['alternance' => $alternance->getId()]);
    }
}
