<?php
/*
 * Copyright (c) 2022. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Controller/appPersonnel/AlternanceFicheSuiviController.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 16/12/2022 12:09
 */

namespace App\Controller\appPersonnel;

use App\Classes\MyFicheSuivi;
use App\Controller\BaseController;
use App\Entity\Alternance;
use App\Entity\AlternanceFicheSuivi;
use App\Entity\Constantes;
use App\Form\AlternanceFicheSuiviType;
use Exception;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Security\Http\Attribute\IsGranted;
use Twig\Error\LoaderError;
use Twig\Error\RuntimeError;
use Twig\Error\SyntaxError;

#[Route('/application/personnel/alternance/fiche-suivi')]
#[IsGranted('ROLE_PERMANENT')]
class AlternanceFicheSuiviController extends BaseController
{
    #[Route(path: '/{alternance}', name: 'application_personnel_alternance_fiche_suivi_alternance', methods: ['GET'])]
    public function index(Alternance $alternance): Response
    {
        return $this->render('appPersonnel/alternance_fiche_suivi/index.html.twig', [
            'alternance_fiche_suivis' => $alternance->getAlternanceFicheSuivis(),
            'alternance' => $alternance,
        ]);
    }

    /**
     * @throws Exception
     */
    #[Route(path: '/{alternance}/new', name: 'application_personnel_alternance_fiche_suivi_new', methods: ['GET', 'POST'])]
    public function new(Request $request, Alternance $alternance): Response
    {
        $alternanceFicheSuivi = new AlternanceFicheSuivi($alternance);
        $form = $this->createForm(AlternanceFicheSuiviType::class, $alternanceFicheSuivi);
        $form->handleRequest($request);
        if ($form->isSubmitted() && $form->isValid()) {
            $this->entityManager->persist($alternanceFicheSuivi);
            $this->entityManager->flush();
            $this->addFlashBag(
                Constantes::FLASHBAG_SUCCESS,
                'alternance.edit.success.fiche_suivi'
            );

            return $this->redirectToRoute('application_personnel_alternance_fiche_suivi_show',
                ['id' => $alternanceFicheSuivi->getId()]);
        }

        return $this->render('appPersonnel/alternance_fiche_suivi/new.html.twig', [
            'alternance_fiche_suivi' => $alternanceFicheSuivi,
            'form' => $form,
            'alternance' => $alternance,
        ]);
    }

    #[Route(path: '/{id}/details', name: 'application_personnel_alternance_fiche_suivi_show', methods: ['GET'])]
    public function show(AlternanceFicheSuivi $alternanceFicheSuivi): Response
    {
        return $this->render('appPersonnel/alternance_fiche_suivi/show.html.twig', [
            'alternance_fiche_suivi' => $alternanceFicheSuivi,
        ]);
    }

    /**
     * @throws LoaderError
     * @throws RuntimeError
     * @throws SyntaxError
     */
    #[Route(path: '/{id}/imprimer', name: 'application_personnel_alternance_fiche_suivi_print', methods: ['GET'])]
    public function print(MyFicheSuivi $myAlternanceFicheSuivi, AlternanceFicheSuivi $alternanceFicheSuivi): Response
    {
        return $myAlternanceFicheSuivi->print($alternanceFicheSuivi);
    }

    #[Route(path: '/{id}/edit', name: 'application_personnel_alternance_fiche_suivi_edit', methods: ['GET', 'POST'])]
    public function edit(Request $request, AlternanceFicheSuivi $alternanceFicheSuivi): Response
    {
        $form = $this->createForm(AlternanceFicheSuiviType::class, $alternanceFicheSuivi);
        $form->handleRequest($request);
        if ($form->isSubmitted() && $form->isValid()) {
            $this->entityManager->flush();
            $this->addFlashBag(
                Constantes::FLASHBAG_SUCCESS,
                'alternance.edit.success.fiche_suivi'
            );

            return $this->redirectToRoute('application_personnel_alternance_fiche_suivi_show',
                ['id' => $alternanceFicheSuivi->getId()]);
        }

        return $this->render('appPersonnel/alternance_fiche_suivi/edit.html.twig', [
            'alternance_fiche_suivi' => $alternanceFicheSuivi,
            'form' => $form,
        ]);
    }

    #[Route(path: '/{id}', name: 'application_personnel_alternance_fiche_suivi_delete', methods: ['DELETE'])]
    public function delete(Request $request, AlternanceFicheSuivi $alternanceFicheSuivi): Response
    {
        $alternance = $alternanceFicheSuivi->getAlternance();
        if ($this->isCsrfTokenValid('delete'.$alternanceFicheSuivi->getId(), $request->server->get('HTTP_X_CSRF_TOKEN'))) {
            $this->entityManager->remove($alternanceFicheSuivi);
            $this->entityManager->flush();
            $this->addFlashBag(
                Constantes::FLASHBAG_SUCCESS,
                'alternance.delete.success.fiche_suivi'
            );
        }

        if (null !== $alternance) {
            return $this->redirectToRoute('application_personnel_alternance_fiche_suivi_alternance',
                ['alternance' => $alternance->getId()]);
        }

        return $this->redirectToRoute('administration_index');
    }
}
