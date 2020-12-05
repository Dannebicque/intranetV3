<?php
// Copyright (c) 2020. | David Annebicque | IUT de Troyes  - All Rights Reserved
// @file /Users/davidannebicque/htdocs/intranetV3/src/Controller/administration/structure/UeController.php
// @author davidannebicque
// @project intranetV3
// @lastUpdate 05/12/2020 15:06

namespace App\Controller\administration\structure;

use App\Controller\BaseController;
use App\Entity\Constantes;
use App\Entity\Semestre;
use App\Entity\Ue;
use App\Form\UeType;
use Symfony\Component\Form\Exception\LogicException;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

/**
 * @Route("/administration/structure/unite-enseigement")
 */
class UeController extends BaseController
{
    /**
     * @Route("/new/{semestre}", name="administration_ue_new", methods="GET|POST")
     * @param Request  $request
     *
     * @param Semestre $semestre
     *
     * @return Response
     */
    public function create(Request $request, Semestre $semestre): Response
    {
        if ($semestre->getAnnee() !== null) {
            $ue = new Ue($semestre);
            $form = $this->createForm(UeType::class, $ue, [
                'diplome' => $semestre->getAnnee()->getDiplome(),
                'attr'    => [
                    'data-provide' => 'validation'
                ]
            ]);
            $form->handleRequest($request);

            if ($form->isSubmitted() && $form->isValid()) {
                $this->entityManager->persist($ue);
                $this->entityManager->flush();
                $this->addFlashBag(Constantes::FLASHBAG_SUCCESS, 'ue.create.success.flash');

                return $this->redirectToRoute('administration_structure_index');
            }

            return $this->render('structure/ue/new.html.twig', [
                'ue'   => $ue,
                'form' => $form->createView(),
            ]);
        }

        return $this->redirectToRoute('erreur_666');
    }

    /**
     * @Route("/{id}", name="administration_ue_show", methods="GET")
     * @param Ue $ue
     *
     * @return Response
     */
    public function show(Ue $ue): Response
    {
        return $this->render('structure/ue/show.html.twig', ['ue' => $ue]);
    }

    /**
     * @Route("/{id}/edit", name="administration_ue_edit", methods="GET|POST")
     * @param Request $request
     * @param Ue      $ue
     *
     * @return Response
     * @throws LogicException
     */
    public function edit(Request $request, Ue $ue): Response
    {
        if ($ue->getDiplome() !== null) {
            $form = $this->createForm(UeType::class, $ue, [
                'diplome' => $ue->getDiplome(),
                'attr'    => [
                    'data-provide' => 'validation'
                ]
            ]);
            $form->handleRequest($request);

            if ($form->isSubmitted() && $form->isValid()) {
                $this->entityManager->flush();
                $this->addFlashBag(Constantes::FLASHBAG_SUCCESS, 'ue.edit.success.flash');

                return $this->redirectToRoute('administration_structure_index');
            }

            return $this->render('structure/ue/edit.html.twig', [
                'ue'   => $ue,
                'form' => $form->createView(),
            ]);
        }

        return $this->redirectToRoute('erreur_666');

    }

    /**
     * @Route("/{id}/duplicate", name="administration_ue_duplicate", methods="GET|POST")
     * @param Ue $ue
     *
     * @return Response
     */
    public function duplicate(Ue $ue): Response
    {
        $newUe = clone $ue;

        $this->entityManager->persist($newUe);
        $this->entityManager->flush();
        $this->addFlashBag(Constantes::FLASHBAG_SUCCESS, 'ue.duplicate.success.flash');

        return $this->redirectToRoute('administration_ue_edit', ['id' => $newUe->getId()]);
    }

    /**
     * @Route("/{id}", name="administration_ue_delete", methods="DELETE")
     * @param Request $request
     * @param Ue      $ue
     *
     * @return Response
     */
    public function delete(Request $request, Ue $ue): Response
    {
        $id = $ue->getId();
        if ($this->isCsrfTokenValid('delete' . $id, $request->request->get('_token')) &&
            count($ue->getMatieres()) === 0) {
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
