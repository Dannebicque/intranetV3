<?php
// Copyright (c) 2020. | David Annebicque | IUT de Troyes  - All Rights Reserved
// @file /Users/davidannebicque/htdocs/intranetV3/src/Controller/administration/AlternanceFicheSuiviController.php
// @author davidannebicque
// @project intranetV3
// @lastUpdate 05/07/2020 08:09

namespace App\Controller\administration;

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
 * @Route("/administration/alternance/fiche/suivi")
 */
class AlternanceFicheSuiviController extends AbstractController
{
    /**
     * @Route("/new/{alternance}", name="administration_alternance_fiche_suivi_new", methods={"GET","POST"})
     * @param Request    $request
     *
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

            return $this->redirectToRoute('administration_alternance_show', ['alternance' => $alternance->getId()]);
        }

        return $this->render('administration/alternance_fiche_suivi/new.html.twig', [
            'alternance_fiche_suivi' => $alternanceFicheSuivi,
            'form'                   => $form->createView(),
        ]);
    }

    /**
     * @Route("/imprimer/{id}", name="administration_alternance_fiche_suivi_export", methods={"GET"})
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
     * @Route("/{id}", name="administration_alternance_fiche_suivi_show", methods={"GET"})
     * @param AlternanceFicheSuivi $alternanceFicheSuivi
     *
     * @return Response
     */
    public function show(AlternanceFicheSuivi $alternanceFicheSuivi): Response
    {
        return $this->render('administration/alternance_fiche_suivi/show.html.twig', [
            'alternance_fiche_suivi' => $alternanceFicheSuivi,
        ]);
    }

    /**
     * @Route("/{id}/edit", name="administration_alternance_fiche_suivi_edit", methods={"GET","POST"})
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

            if ($request->request->get('btn_update') !== null) {
                return $this->redirectToRoute('administration_alternance_show',
                    ['alternance' => $alternanceFicheSuivi->getAlternance()->getId()]);
            }

            return $this->redirectToRoute('administration_alternance_fiche_suivi_edit',
                ['id' => $alternanceFicheSuivi->getId()]);


        }

        return $this->render('administration/alternance_fiche_suivi/edit.html.twig', [
            'alternance_fiche_suivi' => $alternanceFicheSuivi,
            'form'                   => $form->createView(),
        ]);
    }

    /**
     * @Route("/{id}", name="administration_alternance_fiche_suivi_delete", methods={"DELETE"})
     * @param Request              $request
     * @param AlternanceFicheSuivi $alternanceFicheSuivi
     *
     * @return Response
     */
    public function delete(Request $request, AlternanceFicheSuivi $alternanceFicheSuivi): Response
    {
        if ($this->isCsrfTokenValid('delete' . $alternanceFicheSuivi->getId(), $request->request->get('_token'))) {
            $alternance = $alternanceFicheSuivi->getAlternance();
            $entityManager = $this->getDoctrine()->getManager();
            $entityManager->remove($alternanceFicheSuivi);
            $entityManager->flush();
        }

        return $this->redirectToRoute('administration_alternance_show', ['alternance' => $alternance->getId()]);
    }
}
