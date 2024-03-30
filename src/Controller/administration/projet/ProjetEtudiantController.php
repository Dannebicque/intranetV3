<?php
/*
 * Copyright (c) 2024. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Controller/administration/projet/ProjetEtudiantController.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 30/03/2024 16:27
 */

namespace App\Controller\administration\projet;

use App\Classes\MyProjetEtudiant;
use App\Classes\Pdf\PdfManager;
use App\Controller\BaseController;
use App\Entity\Constantes;
use App\Entity\Etudiant;
use App\Entity\ProjetEtudiant;
use App\Entity\ProjetPeriode;
use App\Form\ProjetEtudiantType;
use Doctrine\ORM\NonUniqueResultException;
use Symfony\Bridge\Doctrine\Attribute\MapEntity;
use Symfony\Component\HttpFoundation\RedirectResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;
use Twig\Error\LoaderError;
use Twig\Error\RuntimeError;
use Twig\Error\SyntaxError;

/**
 *  * @Route("/administration/projet/etudiant")
 */
class ProjetEtudiantController extends BaseController
{
    #[Route(path: '/{id}/edit', name: 'administration_projet_etudiant_edit', methods: 'GET|POST')]
    public function edit(Request $request, ProjetEtudiant $projetEtudiant): Response
    {
        $this->denyAccessUnlessGranted('MINIMAL_ROLE_PROJET', $projetEtudiant->getProjetPeriode()?->getSemestres()->first());
        $form = $this->createForm(ProjetEtudiantType::class, $projetEtudiant, [
            'semestres' => $projetEtudiant->getProjetPeriode()->getSemestres(),
        ]);
        $form->handleRequest($request);
        if ($form->isSubmitted() && $form->isValid()) {
            $this->entityManager->flush();
            $this->addFlashBag(Constantes::FLASHBAG_SUCCESS, 'projet_etudiant.edit.success.flash');

            if (null !== $request->request->get('btn_update')) {
                return $this->redirectToRoute('administration_projet_periode_gestion', [
                    'uuid' => $projetEtudiant->getProjetPeriode()->getUuidString(),
                ]);
            }

            return $this->redirectToRoute('administration_projet_etudiant_edit', ['id' => $projetEtudiant->getId()]);
        }

        return $this->render('administration/projet/projet_etudiant/edit.html.twig', [
            'projetEtudiant' => $projetEtudiant,
            'form' => $form,
        ]);
    }

    #[Route(path: '/{id}', name: 'administration_projet_etudiant_delete', methods: 'DELETE')]
    public function delete(Request $request, ProjetEtudiant $projetEtudiant): Response
    {
        $this->denyAccessUnlessGranted('MINIMAL_ROLE_PROJET', $projetEtudiant->getProjetPeriode()?->getSemestre());
        $id = $projetEtudiant->getId();
        if ($this->isCsrfTokenValid('delete'.$id, $request->server->get('HTTP_X_CSRF_TOKEN'))) {
            $this->entityManager->remove($projetEtudiant);
            $this->entityManager->flush();
            $this->addFlashBag(Constantes::FLASHBAG_SUCCESS, 'projet_etudiant.delete.success.flash');
        } else {
            $this->addFlashBag(Constantes::FLASHBAG_ERROR, 'projet_etudiant.delete.error.flash');
        }

        return $this->json([
            'redirect' => true,
            'url' => null !== $projetEtudiant->getProjetPeriode() ? $this->generateUrl('administration_projet_periode_gestion',
                ['uuid' => $projetEtudiant->getProjetPeriode()->getUuidString()]) : $this->generateUrl('administration_index'),
        ]);
    }

    /**
     * @throws NonUniqueResultException
     */
    #[Route(path: '/change-etat/{projetPeriode}/{etudiant}/{etat}', name: 'administration_projet_etudiant_change_etat')]
    public function changeEtat(MyProjetEtudiant $myProjetEtudiant, #[MapEntity(mapping: ['projetPeriode' => 'uuid'])]
    ProjetPeriode                               $projetPeriode, Etudiant $etudiant, string $etat): RedirectResponse
    {
        $this->denyAccessUnlessGranted('MINIMAL_ROLE_PROJET', $projetPeriode->getSemestres()->first());
        $myProjetEtudiant->changeEtat($projetPeriode, $etudiant, $etat);
        $this->addFlashBag(Constantes::FLASHBAG_SUCCESS, 'projet_etudiant.change_etat.success.flash');

        return $this->redirectToRoute('administration_projet_periode_gestion',
            ['uuid' => $projetPeriode->getUuidString()]);
    }

    /**
     * @throws LoaderError
     * @throws RuntimeError
     * @throws SyntaxError
     */
    #[Route(path: '/convention/pdf/{id}', name: 'administration_projet_etudiant_convention_pdf', methods: 'GET')]
    public function conventionPdf(PdfManager $myPDF, ProjetEtudiant $projetEtudiant): Response
    {
        $this->denyAccessUnlessGranted('MINIMAL_ROLE_PROJET', $projetEtudiant->getProjetPeriode()?->getSemestres()->first());

        return $myPDF->pdf()::generePdf('pdf/projetTutore/conventionProjet.html.twig',
            [
                'projetEtudiant' => $projetEtudiant,
            ],
            'Convention-'.$projetEtudiant->getEtudiants()[0]->getNom()
        );
    }
}
