<?php

namespace App\Controller\administration;

use App\Entity\AlternanceFicheSuivi;
use App\Form\AlternanceFicheSuiviType;
use App\Repository\AlternanceFicheSuiviRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

/**
 * @Route("/alternance/fiche/suivi")
 */
class AlternanceFicheSuiviController extends AbstractController
{
    /**
     * @Route("/", name="alternance_fiche_suivi_index", methods={"GET"})
     */
    public function index(AlternanceFicheSuiviRepository $alternanceFicheSuiviRepository): Response
    {
        return $this->render('alternance_fiche_suivi/index.html.twig', [
            'alternance_fiche_suivis' => $alternanceFicheSuiviRepository->findAll(),
        ]);
    }

    /**
     * @Route("/new", name="alternance_fiche_suivi_new", methods={"GET","POST"})
     */
    public function new(Request $request): Response
    {
        $alternanceFicheSuivi = new AlternanceFicheSuivi();
        $form = $this->createForm(AlternanceFicheSuiviType::class, $alternanceFicheSuivi);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $entityManager = $this->getDoctrine()->getManager();
            $entityManager->persist($alternanceFicheSuivi);
            $entityManager->flush();

            return $this->redirectToRoute('alternance_fiche_suivi_index');
        }

        return $this->render('alternance_fiche_suivi/new.html.twig', [
            'alternance_fiche_suivi' => $alternanceFicheSuivi,
            'form' => $form->createView(),
        ]);
    }

    /**
     * @Route("/{id}", name="alternance_fiche_suivi_show", methods={"GET"})
     */
    public function show(AlternanceFicheSuivi $alternanceFicheSuivi): Response
    {
        return $this->render('alternance_fiche_suivi/show.html.twig', [
            'alternance_fiche_suivi' => $alternanceFicheSuivi,
        ]);
    }

    /**
     * @Route("/{id}/edit", name="alternance_fiche_suivi_edit", methods={"GET","POST"})
     */
    public function edit(Request $request, AlternanceFicheSuivi $alternanceFicheSuivi): Response
    {
        $form = $this->createForm(AlternanceFicheSuiviType::class, $alternanceFicheSuivi);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $this->getDoctrine()->getManager()->flush();

            return $this->redirectToRoute('alternance_fiche_suivi_index', [
                'id' => $alternanceFicheSuivi->getId(),
            ]);
        }

        return $this->render('alternance_fiche_suivi/edit.html.twig', [
            'alternance_fiche_suivi' => $alternanceFicheSuivi,
            'form' => $form->createView(),
        ]);
    }

    /**
     * @Route("/{id}", name="alternance_fiche_suivi_delete", methods={"DELETE"})
     */
    public function delete(Request $request, AlternanceFicheSuivi $alternanceFicheSuivi): Response
    {
        if ($this->isCsrfTokenValid('delete'.$alternanceFicheSuivi->getId(), $request->request->get('_token'))) {
            $entityManager = $this->getDoctrine()->getManager();
            $entityManager->remove($alternanceFicheSuivi);
            $entityManager->flush();
        }

        return $this->redirectToRoute('alternance_fiche_suivi_index');
    }
}
