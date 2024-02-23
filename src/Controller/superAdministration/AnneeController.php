<?php
/*
 * Copyright (c) 2024. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Controller/superAdministration/AnneeController.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 23/02/2024 21:35
 */

namespace App\Controller\superAdministration;

use App\Controller\BaseController;
use App\Entity\Annee;
use App\Entity\Constantes;
use App\Entity\Diplome;
use App\Form\AnneeType;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\RedirectResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;
use Symfony\Component\Security\Http\Attribute\IsGranted;
use function count;

#[Route(path: '/administratif/structure/annee')]
class AnneeController extends BaseController
{
    #[Route(path: '/nouveau/{diplome}', name: 'sa_annee_new', methods: 'GET|POST')]
    public function create(Request $request, Diplome $diplome): RedirectResponse|Response
    {
        if (null !== $diplome->getDepartement()) {
            $annee = new Annee();
            $annee->setDiplome($diplome);
            $form = $this->createForm(AnneeType::class, $annee, [
                'departement' => $diplome->getDepartement(),
                'attr' => [
                    'data-provide' => 'validation',
                ],
            ]);
            $form->handleRequest($request);

            if ($form->isSubmitted() && $form->isValid()) {
                $this->entityManager->persist($annee);
                $this->entityManager->flush();
                $this->addFlashBag(Constantes::FLASHBAG_SUCCESS, 'annee.add.success.flash');

                return $this->redirectToRoute(
                    'sa_structure_index',
                    ['departement' => $diplome->getDepartement()->getId()]
                );
            }

            return $this->render('structure/annee/new.html.twig', [
                'form' => $form,
            ]);
        }

        return $this->redirectToRoute('erreur_666');
    }

    #[Route(path: '/{id}', name: 'sa_annee_show', methods: 'GET')]
    public function show(Annee $annee): Response
    {
        return $this->render('structure/annee/show.html.twig', ['annee' => $annee]);
    }

    #[Route(path: '/{id}/modifier', name: 'sa_annee_edit', methods: 'GET|POST')]
    public function edit(Request $request, Annee $annee): Response
    {
        if (null !== $annee->getDiplome() && null !== $annee->getDiplome()->getDepartement()) {
            $form = $this->createForm(
                AnneeType::class,
                $annee,
                [
                    'departement' => $annee->getDiplome()->getDepartement(),
                    'attr' => [
                        'data-provide' => 'validation',
                    ],
                ]
            );
            $form->handleRequest($request);

            if ($form->isSubmitted() && $form->isValid()) {
                $this->entityManager->flush();
                $this->addFlashBag(Constantes::FLASHBAG_SUCCESS, 'annee.edit.success.flash');

                return $this->redirectToRoute(
                    'sa_structure_index',
                    ['departement' => $annee->getDiplome()->getDepartement()->getId()]
                );
            }

            return $this->render('structure/annee/edit.html.twig', [
                'annee' => $annee,
                'form' => $form,
            ]);
        }

        return $this->redirectToRoute('erreur_666');
    }

    #[Route(path: '/{id}/ajax/modifier', name: 'sa_annee_ajax_edit', options: ['expose' => true], methods: 'GET|POST')]
    public function ajaxEdit(Request $request, Annee $annee): JsonResponse
    {
        $field = $request->request->get('field');
        $value = $request->request->get('value');

        if (null !== $field) {
            $annee->update($field, $value);
            $this->entityManager->flush();

            return new JsonResponse(['success' => true]);
        }

        return new JsonResponse(['error' => true], Response::HTTP_INTERNAL_SERVER_ERROR);
    }

    #[Route(path: '/{id}/duplicate', name: 'sa_annee_duplicate', methods: 'GET|POST')]
    public function duplicate(Annee $annee): Response
    {
        $newAnnee = clone $annee;
        $newAnnee->setLibelle($newAnnee->getLibelle().' copie');
        $this->entityManager->persist($newAnnee);
        $this->entityManager->flush();
        $this->addFlashBag(Constantes::FLASHBAG_SUCCESS, 'annee.duplicate.success.flash');

        return $this->redirectToRoute('sa_annee_edit', ['id' => $newAnnee->getId()]);
    }

    #[Route(path: '/{id}', name: 'sa_annee_delete', methods: 'DELETE')]
    public function delete(Request $request, Annee $annee): Response
    {
        $id = $annee->getId();
        if ($this->isCsrfTokenValid('delete'.$id, $request->server->get('HTTP_X_CSRF_TOKEN'))) {
            if (0 === count($annee->getSemestres())) {
                $this->entityManager->remove($annee);
                $this->entityManager->flush();
                $this->addFlashBag(
                    Constantes::FLASHBAG_SUCCESS,
                    'annee.delete.success.flash'
                );

                return $this->json($id, Response::HTTP_OK);
            }

            $this->addFlashBag(Constantes::FLASHBAG_ERROR, 'annee.delete.error.non-vide.flash');

            return $this->json(false, Response::HTTP_INTERNAL_SERVER_ERROR);
        }
        $this->addFlashBag(Constantes::FLASHBAG_ERROR, 'annee.delete.error.flash');

        return $this->json(false, Response::HTTP_INTERNAL_SERVER_ERROR);
    }

    #[Route(path: '/activate/{annee}/{etat}', name: 'sa_annee_activate', methods: ['GET'])]
    #[IsGranted('ROLE_SUPER_ADMIN')]
    public function activate(Annee $annee, bool $etat): RedirectResponse
    {
        $annee->setActif($etat);
        $this->entityManager->flush();
        $this->addFlashBag(Constantes::FLASHBAG_SUCCESS, 'annee.activate.'.$etat.'.flash');

        return $this->redirectToRoute('super_admin_homepage');
    }
}
