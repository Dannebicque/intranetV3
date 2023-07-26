<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Controller/superAdministration/ParcourController.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 07/02/2021 11:20
 */

namespace App\Controller\superAdministration;

use App\Controller\BaseController;
use App\Entity\Constantes;
use App\Entity\Parcour;
use App\Entity\Semestre;
use App\Form\ParcourType;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

#[Route(path: '/administratif/structure/parcours')]
class ParcourController extends BaseController
{
    #[Route(path: '/new/{semestre}', name: 'sa_parcour_new', methods: 'GET|POST')]
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

                return $this->redirectToRoute('sa_structure_index',
                    ['departement' => $parcour->getDiplome()->getDepartement()->getId()]);
            }

            return $this->render('structure/parcour/new.html.twig', [
                'parcour' => $parcour,
                'form' => $form,
            ]);
        }

        return $this->redirectToRoute('erreur_666');
    }

    #[Route(path: '/{id}', name: 'sa_parcour_show', methods: 'GET')]
    public function show(Parcour $parcour): Response
    {
        return $this->render('structure/parcour/show.html.twig', ['parcour' => $parcour]);
    }

    #[Route(path: '/{id}/edit', name: 'sa_parcour_edit', methods: 'GET|POST')]
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

                return $this->redirectToRoute('sa_parcour_edit', ['id' => $parcour->getId()]);
            }

            return $this->render('structure/parcour/edit.html.twig', [
                'parcour' => $parcour,
                'form' => $form,
            ]);
        }

        return $this->redirectToRoute('erreur_666');
    }

    #[Route(path: '/{id}/duplicate', name: 'sa_parcour_duplicate', methods: 'GET|POST')]
    public function duplicate(Parcour $parcour): Response
    {
        $newParcour = clone $parcour;
        $newParcour->setLibelle($newParcour->getLibelle().' copie');
        $this->entityManager->persist($newParcour);
        $this->entityManager->flush();
        $this->addFlashBag(Constantes::FLASHBAG_SUCCESS, 'parcour.duplicate.success.flash');

        return $this->redirectToRoute('sa_parcour_edit', ['id' => $newParcour->getId()]);
    }

    #[Route(path: '/{id}', name: 'sa_parcour_delete', methods: 'DELETE')]
    public function delete(Parcour $id): void
    {
    }
}
