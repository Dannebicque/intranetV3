<?php
/*
 * Copyright (c) 2022. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Controller/administration/structure/UeController.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 14/07/2022 15:08
 */

namespace App\Controller\administration\structure;

use App\Controller\BaseController;
use App\Entity\Constantes;
use App\Entity\Semestre;
use App\Entity\Ue;
use App\Form\UeType;
use function count;
use Symfony\Component\Form\Exception\LogicException;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

#[Route(path: '/administration/structure/unite-enseigement')]
class UeController extends BaseController
{
    #[Route(path: '/new/{semestre}', name: 'administration_ue_new', methods: 'GET|POST')]
    public function create(Request $request, Semestre $semestre): Response
    {
        if (null !== $semestre->getAnnee()) {
            $ue = new Ue($semestre);
            $form = $this->createForm(UeType::class, $ue, [
                'diplome' => $semestre->getAnnee()->getDiplome(),
                'attr' => [
                    'data-provide' => 'validation',
                ],
            ]);
            $form->handleRequest($request);

            if ($form->isSubmitted() && $form->isValid()) {
                $this->entityManager->persist($ue);
                $this->entityManager->flush();
                $this->addFlashBag(Constantes::FLASHBAG_SUCCESS, 'ue.create.success.flash');

                return $this->redirectToRoute('administration_structure_index');
            }

            return $this->render('structure/ue/new.html.twig', [
                'form' => $form,
            ]);
        }

        return $this->redirectToRoute('erreur_666');
    }

    #[Route(path: '/{id}', name: 'administration_ue_show', methods: 'GET')]
    public function show(Ue $ue): Response
    {
        return $this->render('structure/ue/show.html.twig', ['ue' => $ue]);
    }

    /**
     * @throws LogicException
     */
    #[Route(path: '/{id}/edit', name: 'administration_ue_edit', methods: 'GET|POST')]
    public function edit(Request $request, Ue $ue): Response
    {
        if (null !== $ue->getDiplome()) {
            $form = $this->createForm(UeType::class, $ue, [
                'diplome' => $ue->getDiplome(),
                'attr' => [
                    'data-provide' => 'validation',
                ],
            ]);
            $form->handleRequest($request);

            if ($form->isSubmitted() && $form->isValid()) {
                $this->entityManager->flush();
                $this->addFlashBag(Constantes::FLASHBAG_SUCCESS, 'ue.edit.success.flash');

                return $this->redirectToRoute('administration_structure_index');
            }

            return $this->render('structure/ue/edit.html.twig', [
                'ue' => $ue,
                'form' => $form,
            ]);
        }

        return $this->redirectToRoute('erreur_666');
    }

    #[Route(path: '/{id}/duplicate', name: 'administration_ue_duplicate', methods: 'GET|POST')]
    public function duplicate(Ue $ue): Response
    {
        $newUe = clone $ue;
        $this->entityManager->persist($newUe);
        $this->entityManager->flush();
        $this->addFlashBag(Constantes::FLASHBAG_SUCCESS, 'ue.duplicate.success.flash');

        return $this->redirectToRoute('administration_ue_edit', ['id' => $newUe->getId()]);
    }

    #[Route(path: '/{id}', name: 'administration_ue_delete', methods: 'DELETE')]
    public function delete(Request $request, Ue $ue): Response
    {
        $id = $ue->getId();
        if ($this->isCsrfTokenValid('delete'.$id, $request->server->get('HTTP_X_CSRF_TOKEN')) &&
            0 === count($ue->getMatieres())) {
            $this->entityManager->remove($ue);
            $this->entityManager->flush();
            $this->addFlashBag(
                Constantes::FLASHBAG_SUCCESS,
                'ue.delete.success.flash'
            );

            return $this->json($id, Response::HTTP_OK);
        }
        $this->addFlashBag(Constantes::FLASHBAG_ERROR, 'ue.delete.error.flash');

        return $this->json(false, Response::HTTP_INTERNAL_SERVER_ERROR);
    }
}
