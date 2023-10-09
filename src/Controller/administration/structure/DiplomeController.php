<?php
/*
 * Copyright (c) 2022. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Controller/administration/structure/DiplomeController.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 14/07/2022 15:08
 */

namespace App\Controller\administration\structure;

use App\Controller\BaseController;
use App\Entity\Constantes;
use App\Entity\Departement;
use App\Entity\Diplome;
use App\Form\DiplomeType;
use App\Repository\ApcParcoursRepository;
use App\Repository\DiplomeRepository;
use function count;
use Symfony\Component\Form\Exception\LogicException;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

#[Route(path: '/administration/structure/diplome')]
class DiplomeController extends BaseController
{
    #[Route(path: '/new/{departement}', name: 'administration_diplome_new', methods: 'GET|POST')]
    public function create(
        Request $request, Departement $departement): Response
    {
        $diplome = new Diplome($departement);
        $diplome->setDepartement($this->dataUserSession->getDepartement());
        $form = $this->createForm(DiplomeType::class, $diplome, [
            'departement' => $departement,
            'attr' => [
                'data-provide' => 'validation',
            ],
        ]);
        $form->handleRequest($request);
        if ($form->isSubmitted() && $form->isValid()) {
            $this->entityManager->persist($diplome);
            $this->entityManager->flush();
            $this->addFlashBag(Constantes::FLASHBAG_SUCCESS, 'diplome.create.success.flash');

            return $this->redirectToRoute('administration_structure_index');
        }

        return $this->render('structure/diplome/new.html.twig', [
            'form' => $form,
        ]);
    }

    #[Route(path: '/{id}', name: 'administration_diplome_show', methods: 'GET')]
    public function show(Diplome $diplome): Response
    {
        return $this->render('structure/diplome/show.html.twig', ['diplome' => $diplome]);
    }

    /**
     * @throws LogicException
     */
    #[Route(path: '/{id}/edit', name: 'administration_diplome_edit', methods: 'GET|POST')]
    public function edit(Request $request, Diplome $diplome): Response
    {
        $form = $this->createForm(DiplomeType::class, $diplome, [
            'departement' => $diplome->getDepartement(),
            'attr' => [
                'data-provide' => 'validation',
            ],
        ]);
        $form->handleRequest($request);
        if ($form->isSubmitted() && $form->isValid()) {
            $this->entityManager->flush();
            $this->addFlashBag(Constantes::FLASHBAG_SUCCESS, 'diplome.edit.success.flash');

            return $this->redirectToRoute('administration_structure_index');
        }

        return $this->render('structure/diplome/edit.html.twig', [
            'diplome' => $diplome,
            'form' => $form,
        ]);
    }

    #[Route(path: '/{id}/duplicate', name: 'administration_diplome_duplicate', methods: 'GET|POST')]
    public function duplicate(Diplome $diplome): Response
    {
        $newDiplome = clone $diplome;
        $this->entityManager->persist($newDiplome);
        $this->entityManager->flush();
        $this->addFlashBag(Constantes::FLASHBAG_SUCCESS, 'diplome.duplicate.success.flash');

        return $this->redirectToRoute('administration_diplome_edit', ['id' => $newDiplome->getId()]);
    }

    #[Route(path: '/{id}', name: 'administration_diplome_delete', methods: 'DELETE')]
    public function delete(Request $request, Diplome $diplome): Response
    {
        $id = $diplome->getId();
        if ($this->isCsrfTokenValid('delete' . $id, $request->server->get('HTTP_X_CSRF_TOKEN')) &&
            0 === count($diplome->getAnnees()) &&
            0 === count($diplome->getSemestres()) &&
            0 === count($diplome->getPpns()) &&
            0 === count($diplome->getHrs()) &&
            0 === count($diplome->getReferentiel()?->getApcComptences())) {
            $this->entityManager->remove($diplome);
            $this->entityManager->flush();
            $this->addFlashBag(
                Constantes::FLASHBAG_SUCCESS,
                'diplome.delete.success.flash'
            );

            return $this->json($id, Response::HTTP_OK);
        }
        $this->addFlashBag(Constantes::FLASHBAG_ERROR, 'diplome.delete.error.flash');

        return $this->json(false, Response::HTTP_INTERNAL_SERVER_ERROR);
    }

    #[Route(path: '/{id}/activate', name: 'administration_diplome_activate', methods: 'GET|POST')]
    public function activate(
        Diplome               $diplome,
        DiplomeRepository     $diplomeRepository,
        ApcParcoursRepository $apcParcoursRepository,
    ): Response
    {
        $diplome->setActif(!$diplome->getActif());
        $diplomeRepository->save($diplome);
        $apcParcours = $diplome->getApcParcours();
        if ($apcParcours !== null) {
                $apcParcours->setActif($diplome->getActif());
                $apcParcoursRepository->save($apcParcours);
            }

        return $this->redirectToRoute('administration_structure_index');
    }
}
