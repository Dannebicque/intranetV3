<?php
// Copyright (C) 11 / 2019 | David annebicque | IUT de Troyes - All Rights Reserved
// @file /Users/davidannebicque/htdocs/intranetv3/src/Controller/appPersonnel/AlternanceFicheSuiviController.php
// @author     David Annebicque
// @project intranetv3
// @date 25/11/2019 10:20
// @lastUpdate 23/11/2019 09:14

namespace App\Controller\appPersonnel;

use App\Entity\Alternance;
use App\Entity\AlternanceFicheSuivi;
use App\Form\AlternanceFicheSuiviType;
use Dompdf\Dompdf;
use Dompdf\Options;
use Exception;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

/**
 * @Route("/application/personnel/alternance/fiche-suivi")
 */
class AlternanceFicheSuiviController extends AbstractController
{
    /**
     * @Route("/{alternance}", name="application_personnel_alternance_fiche_suivi_alternance", methods={"GET"})
     * @param Alternance $alternance
     *
     * @return Response
     */
    public function index(Alternance $alternance): Response
    {
        return $this->render('appPersonnel/alternance_fiche_suivi/index.html.twig', [
            'alternance_fiche_suivis' => $alternance->getAlternanceFicheSuivis(),
            'alternance'              => $alternance
        ]);
    }

    /**
     * @Route("/{alternance}/new", name="application_personnel_alternance_fiche_suivi_new", methods={"GET","POST"})
     * @param Request    $request
     * @param Alternance $alternance
     *
     * @return Response
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
            'alternance'             => $alternance

        ]);
    }

    /**
     * @Route("/{id}/details", name="application_personnel_alternance_fiche_suivi_show", methods={"GET"})
     * @param AlternanceFicheSuivi $alternanceFicheSuivi
     *
     * @return Response
     */
    public function show(AlternanceFicheSuivi $alternanceFicheSuivi): Response
    {
        return $this->render('appPersonnel/alternance_fiche_suivi/show.html.twig', [
            'alternance_fiche_suivi' => $alternanceFicheSuivi,
        ]);
    }

    /**
     * @Route("/{id}/imprimer", name="application_personnel_alternance_fiche_suivi_print", methods={"GET"})
     * @param AlternanceFicheSuivi $alternanceFicheSuivi
     *
     * @return Response
     */
    public function print(AlternanceFicheSuivi $alternanceFicheSuivi): Response
    {

        $html = $this->renderView('pdf/ficheSuiviAlternant.html.twig', [
            'alternance_fiche_suivi' => $alternanceFicheSuivi,
        ]);

        $options = new Options();
        $options->set('isRemoteEnabled', true);
        $options->set('isPhpEnabled', true);

        $dompdf = new Dompdf($options);
        $dompdf->loadHtml($html);
        $dompdf->render();

        return new Response($dompdf->stream('Fiche-suivi-alternant-' . $alternanceFicheSuivi->getAlternance()->getEtudiant()->getNom() . '-' . $alternanceFicheSuivi->getDate()->format('dmY'),
            ['Attachment' => 1]));

    }

    /**
     * @Route("/{id}/edit", name="application_personnel_alternance_fiche_suivi_edit", methods={"GET","POST"})
     * @param Request              $request
     * @param AlternanceFicheSuivi $alternanceFicheSuivi
     *
     * @return Response
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
     * @param Request              $request
     * @param AlternanceFicheSuivi $alternanceFicheSuivi
     *
     * @return Response
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
