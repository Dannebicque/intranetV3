<?php
// Copyright (c) 2020. | David Annebicque | IUT de Troyes  - All Rights Reserved
// @file /Users/davidannebicque/htdocs/intranetV3/src/Controller/administration/structure/AnneeController.php
// @author davidannebicque
// @project intranetV3
// @lastUpdate 15/10/2020 12:30

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
use Symfony\Component\Routing\Annotation\Route;

/**
 * @Route("/administration/structure/annee")
 *
 */
class AnneeController extends BaseController
{
    /**
     * @Route("/nouveau/{diplome}", name="administration_annee_new",
     *                                    methods="GET|POST")
     * @param Request $request
     *
     * @param Diplome $diplome
     *
     * @return RedirectResponse|Response
     */
    public function create(Request $request, Diplome $diplome)
    {
        if ($diplome->getDepartement() !== null) {
            $annee = new Annee();
            $annee->setDiplome($diplome);
            $form = $this->createForm(AnneeType::class, $annee, [
                'departement' => $diplome->getDepartement(),
                'attr'        => [
                    'data-provide' => 'validation'
                ]
            ]);
            $form->handleRequest($request);

            if ($form->isSubmitted() && $form->isValid()) {
                $this->entityManager->persist($annee);
                $this->entityManager->flush();
                $this->addFlashBag(Constantes::FLASHBAG_SUCCESS, 'annee.create.success.flash');

                return $this->redirectToRoute('administration_structure_index');
            }

            return $this->render('structure/annee/new.html.twig', [
                'annee' => $annee,
                'form'  => $form->createView(),
            ]);
        }

        return $this->redirectToRoute('erreur_666');
    }

    /**
     * @Route("/{id}", name="administration_annee_show", methods="GET")
     * @param Annee $annee
     *
     * @return Response
     */
    public function show(Annee $annee): Response
    {
        return $this->render('structure/annee/show.html.twig', ['annee' => $annee]);
    }

    /**
     * @Route("/{id}/modifier", name="administration_annee_edit", methods="GET|POST")
     * @param Request $request
     * @param Annee   $annee
     *
     * @return Response
     * @throws LogicException
     */
    public function edit(Request $request, Annee $annee): Response
    {
        if ($annee->getDiplome() !== null && $annee->getDiplome()->getDepartement() !== null) {
            $form = $this->createForm(
                AnneeType::class,
                $annee,
                [
                    'departement' => $annee->getDiplome()->getDepartement()->getId(),
                    'attr'        => [
                        'data-provide' => 'validation'
                    ]
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
                'form'  => $form->createView(),
            ]);
        }

        return $this->redirectToRoute('erreur_666');
    }

    /**
     * @Route("/{id}/duplicate", name="administration_annee_duplicate", methods="GET|POST")
     * @param Annee $annee
     *
     * @return Response
     */
    public function duplicate(Annee $annee): Response
    {
        $newAnnee = clone $annee;

        $this->entityManager->persist($newAnnee);
        $this->entityManager->flush();
        $this->addFlashBag(Constantes::FLASHBAG_SUCCESS, 'annee.duplicate.success.flash');

        return $this->redirectToRoute('administration_annee_edit', ['id' => $newAnnee->getId()]);
    }

    /**
     * @Route("/{id}", name="administration_annee_delete", methods="DELETE")
     * @param Request $request
     * @param Annee   $annee
     *
     * @return Response
     */
    public function delete(Request $request, Annee $annee): Response
    {
        $id = $annee->getId();
        if ($this->isCsrfTokenValid('delete' . $id, $request->request->get('_token')) &&
            count($annee->getSemestres()) === 0 &&
            count($annee->getAlternances()) === 0 &&
            count($annee->getApcNiveaux()) === 0) {
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
