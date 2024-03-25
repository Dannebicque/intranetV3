<?php
/*
 * Copyright (c) 2024. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Controller/administration/structure/AnneeController.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 20/02/2024 18:55
 */

namespace App\Controller\administration\structure;

use App\Controller\BaseController;
use App\Entity\Annee;
use App\Entity\Constantes;
use App\Entity\Diplome;
use App\Form\AnneeType;
use Symfony\Component\Form\Exception\LogicException;
use Symfony\Component\HttpFoundation\RedirectResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;
use function count;

#[Route(path: '/administration/structure/annee')]
class AnneeController extends BaseController
{
    #[Route(path: '/nouveau/{diplome}', name: 'administration_annee_new', methods: 'GET|POST')]
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
                $this->addFlashBag(Constantes::FLASHBAG_SUCCESS, 'annee.create.success.flash');

                return $this->redirectToRoute('administration_structure_index');
            }

            return $this->render('structure/annee/new.html.twig', [
                'form' => $form,
            ]);
        }

        return $this->redirectToRoute('erreur_666');
    }

    #[Route(path: '/{id}', name: 'administration_annee_show', methods: 'GET')]
    public function show(Annee $annee): Response
    {
        return $this->render('structure/annee/show.html.twig', ['annee' => $annee]);
    }

    /**
     * @throws LogicException
     */
    #[Route(path: '/{id}/modifier', name: 'administration_annee_edit', methods: 'GET|POST')]
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

                return $this->redirectToRoute('administration_structure_index');
            }

            return $this->render('structure/annee/edit.html.twig', [
                'annee' => $annee,
                'form' => $form,
            ]);
        }

        return $this->redirectToRoute('erreur_666');
    }

    #[Route(path: '/{id}/duplicate', name: 'administration_annee_duplicate', methods: 'GET|POST')]
    public function duplicate(Annee $annee): Response
    {
        $newAnnee = clone $annee;
        $this->entityManager->persist($newAnnee);
        $this->entityManager->flush();
        $this->addFlashBag(Constantes::FLASHBAG_SUCCESS, 'annee.duplicate.success.flash');

        return $this->redirectToRoute('administration_annee_edit', ['id' => $newAnnee->getId()]);
    }

    #[Route(path: '/{id}', name: 'administration_annee_delete', methods: 'DELETE')]
    public function delete(Request $request, Annee $annee): Response
    {
        $id = $annee->getId();
        if ($this->isCsrfTokenValid('delete'.$id, $request->server->get('HTTP_X_CSRF_TOKEN')) &&
            0 === count($annee->getSemestres()) &&
            0 === count($annee->getAlternances()) &&
            0 === count($annee->getApcNiveaux())) {
            $this->entityManager->remove($annee);
            $this->entityManager->flush();
            $this->addFlashBag(
                Constantes::FLASHBAG_SUCCESS,
                'annee.delete.success.flash'
            );

            return $this->json($id, Response::HTTP_OK);
        }
        $this->addFlashBag(Constantes::FLASHBAG_ERROR, 'annee.delete.error.flash');

        return $this->json(false, Response::HTTP_INTERNAL_SERVER_ERROR);
    }
}
