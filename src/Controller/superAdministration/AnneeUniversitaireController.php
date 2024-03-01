<?php
/*
 * Copyright (c) 2024. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Controller/superAdministration/AnneeUniversitaireController.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 29/02/2024 21:42
 */

namespace App\Controller\superAdministration;

use App\Classes\MyExport;
use App\Classes\MySerializer;
use App\Controller\BaseController;
use App\Entity\AnneeUniversitaire;
use App\Entity\Constantes;
use App\Form\AnneeUniversitaireType;
use App\Repository\AnneeUniversitaireRepository;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;
use function count;

#[Route(path: '/administratif/annee-universitaire')]
class AnneeUniversitaireController extends BaseController
{
    #[Route(path: '/', name: 'sa_annee_universitaire_index', methods: ['GET'])]
    public function index(AnneeUniversitaireRepository $anneeUniversitaireRepository): Response
    {
        return $this->render('super-administration/annee_universitaire/index.html.twig', [
            'annee_universitaires' => $anneeUniversitaireRepository->findAll(),
        ]);
    }

    #[Route(path: '/annee-active/change/{annee}', name: 'sa_annee_universitaire_change_active', options: ['expose' => true])]
    public function changeOption(AnneeUniversitaireRepository $anneeUniversitaireRepository, Request $request, AnneeUniversitaire $annee): Response
    {
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

    #[Route(path: '/export.{_format}', name: 'sa_annee_universitaire_export', requirements: ['_format' => 'csv|xlsx|pdf'], methods: 'GET')]
    public function export(
        MySerializer $mySerializer,
        MyExport $myExport, AnneeUniversitaireRepository $anneeUniversitaireRepository, string $_format): Response
    {
        $annee_universitaires = $anneeUniversitaireRepository->findAll();
        $data = $mySerializer->getDataFromSerialization(
            $annee_universitaires,
            ['libelle', 'annee', 'commentaire'],
            ['annee_universitaire']
        );

        return $myExport->genereFichierGeneriqueFromData(
            $_format,
            $data,
            'annee_universitaires',
        );
    }

    #[Route(path: '/new', name: 'sa_annee_universitaire_new', methods: ['GET', 'POST'])]
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
            'form' => $form,
        ]);
    }

    #[Route(path: '/{id}', name: 'sa_annee_universitaire_show', methods: ['GET'])]
    public function show(AnneeUniversitaire $anneeUniversitaire): Response
    {
        return $this->render('super-administration/annee_universitaire/show.html.twig', [
            'annee_universitaire' => $anneeUniversitaire,
        ]);
    }

    #[Route(path: '/{id}/edit', name: 'sa_annee_universitaire_edit', methods: ['GET', 'POST'])]
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
            'form' => $form,
        ]);
    }

    #[Route(path: '/{id}/duplicate', name: 'sa_annee_universitaire_duplicate', methods: 'GET|POST')]
    public function duplicate(AnneeUniversitaire $annee_universitaire): Response
    {
        $newAnneeUniversitaire = clone $annee_universitaire;
        $this->entityManager->persist($newAnneeUniversitaire);
        $this->entityManager->flush();
        $this->addFlashBag(Constantes::FLASHBAG_SUCCESS, 'annee_universitaire.duplicate.success.flash');

        return $this->redirectToRoute('sa_annee_universitaire_edit', ['id' => $newAnneeUniversitaire->getId()]);
    }

    #[Route(path: '/{id}', name: 'sa_annee_universitaire_delete', methods: 'DELETE')]
    public function delete(Request $request, AnneeUniversitaire $annee_universitaire): Response
    {
        $id = $annee_universitaire->getId();
        if ($this->isCsrfTokenValid('delete'.$id, $request->server->get('HTTP_X_CSRF_TOKEN'))) {
            if (
                0 === count($annee_universitaire->getDiplomes()) &&
                0 === count($annee_universitaire->getScolarites()) &&
                0 === count($annee_universitaire->getEvaluations())) {
                $this->entityManager->remove($annee_universitaire);
                $this->entityManager->flush();
                $this->addFlashBag(Constantes::FLASHBAG_SUCCESS, 'annee_universitaire.delete.success.flash');

                return $this->json($id, Response::HTTP_OK);
            }
            $this->addFlashBag(Constantes::FLASHBAG_ERROR, 'annee_universitaire.delete.error.flash');

            return $this->json('not_empty', Response::HTTP_INTERNAL_SERVER_ERROR);
        }
        $this->addFlashBag(Constantes::FLASHBAG_ERROR, 'annee_universitaire.delete.error.flash');

        return $this->json(false, Response::HTTP_INTERNAL_SERVER_ERROR);
    }
}
