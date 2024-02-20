<?php
/*
 * Copyright (c) 2024. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Controller/administration/structure/ParcourController.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 20/02/2024 18:55
 */

namespace App\Controller\administration\structure;

use App\Controller\BaseController;
use App\Entity\Constantes;
use App\Entity\Parcour;
use App\Entity\Semestre;
use App\Form\ParcourType;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;
use function count;

#[Route(path: '/administration/structure/parcours')]
class ParcourController extends BaseController
{
    #[Route(path: '/new/{semestre}', name: 'administration_parcour_new', methods: 'GET|POST')]
    public function create(Request $request, Semestre $semestre): Response
    {
        if (null !== $semestre->getAnnee()) {
            $parcour = new Parcour($semestre);

            $form = $this->createForm(ParcourType::class, $parcour, [
                'diplome' => $semestre->getAnnee()->getDiplome(),
                'attr' => [
                    'data-provide' => 'validation',
                ],
            ]);
            $form->handleRequest($request);

            if ($form->isSubmitted() && $form->isValid()) {
                $this->entityManager->persist($parcour);
                $this->entityManager->flush();

                return $this->redirectToRoute('administration_structure_index',
                    ['departement' => $parcour->getDiplome()->getDepartement()->getId()]);
            }

            return $this->render('structure/parcour/new.html.twig', [
                'form' => $form,
            ]);
        }

        return $this->redirectToRoute('erreur_666');
    }

    #[Route(path: '/{id}', name: 'administration_parcour_show', methods: 'GET')]
    public function show(Parcour $parcour): Response
    {
        return $this->render('structure/parcour/show.html.twig', ['parcour' => $parcour]);
    }

    #[Route(path: '/{id}/edit', name: 'administration_parcour_edit', methods: 'GET|POST')]
    public function edit(Request $request, Parcour $parcour): Response
    {
        if (null !== $parcour->getDiplome()) {
            $form = $this->createForm(ParcourType::class, $parcour, [
                'diplome' => $parcour->getDiplome(),
                'attr' => [
                    'data-provide' => 'validation',
                ],
            ]);
            $form->handleRequest($request);

            if ($form->isSubmitted() && $form->isValid()) {
                $this->entityManager->flush();
                $this->addFlashBag(Constantes::FLASHBAG_SUCCESS, 'parcour.edit.success.flash');

                return $this->redirectToRoute('administration_structure_index');
            }

            return $this->render('structure/parcour/edit.html.twig', [
                'parcour' => $parcour,
                'form' => $form,
            ]);
        }

        return $this->redirectToRoute('erreur_666');
    }

    #[Route(path: '/{id}/duplicate', name: 'administration_parcour_duplicate', methods: 'GET|POST')]
    public function duplicate(Parcour $parcour): Response
    {
        $newParcour = clone $parcour;
        $this->entityManager->persist($newParcour);
        $this->entityManager->flush();
        $this->addFlashBag(Constantes::FLASHBAG_SUCCESS, 'parcour.duplicate.success.flash');

        return $this->redirectToRoute('administration_parcour_edit', ['id' => $newParcour->getId()]);
    }

    #[Route(path: '/{id}', name: 'administration_parcour_delete', methods: 'DELETE')]
    public function delete(Request $request, Parcour $parcour): Response
    {
        $id = $parcour->getId();
        if ($this->isCsrfTokenValid('delete'.$id, $request->server->get('HTTP_X_CSRF_TOKEN')) &&
            0 === count($parcour->getMatieres())
        ) {
            $this->entityManager->remove($parcour);
            $this->entityManager->flush();
            $this->addFlashBag(
                Constantes::FLASHBAG_SUCCESS,
                'parcour.delete.success.flash'
            );

            return $this->json($id, Response::HTTP_OK);
        }
        $this->addFlashBag(Constantes::FLASHBAG_ERROR, 'parcour.delete.error.flash');

        return $this->json(false, Response::HTTP_INTERNAL_SERVER_ERROR);
    }
}
