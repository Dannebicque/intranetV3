<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Controller/administration/structure/SemestreController.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 24/09/2021 21:04
 */

namespace App\Controller\administration\structure;

use App\Controller\BaseController;
use App\Entity\Annee;
use App\Entity\Constantes;
use App\Entity\Semestre;
use App\Form\SemestreType;
use Symfony\Component\Form\Exception\LogicException;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use function count;

/**
 * @Route("/administration/structure/semestre")
 */
class SemestreController extends BaseController
{
    /**
     * @Route("/new/{annee}", name="administration_semestre_new", methods="GET|POST")
     */
    public function create(Request $request, Annee $annee): Response
    {
        if (null !== $annee->getDiplome()) {
            $semestre = new Semestre();
            $semestre->setAnnee($annee);
            $form = $this->createForm(SemestreType::class, $semestre, [
                'diplome' => $annee->getDiplome(),
                'attr' => [
                    'data-provide' => 'validation',
                ],
            ]);
            $form->handleRequest($request);

            if ($form->isSubmitted() && $form->isValid()) {
                $this->entityManager->persist($semestre);
                $this->entityManager->flush();
                $this->addFlashBag(Constantes::FLASHBAG_SUCCESS, 'semestre.create.success.flash');

                return $this->redirectToRoute('administration_structure_index');
            }

            return $this->render('structure/semestre/new.html.twig', [
                'form'     => $form->createView(),
            ]);
        }

        return $this->redirectToRoute('erreur_666');
    }

    /**
     * @Route("/{id}", name="administration_semestre_show", methods="GET")
     */
    public function show(Semestre $semestre): Response
    {
        return $this->render('structure/semestre/show.html.twig', ['semestre' => $semestre]);
    }

    /**
     * @Route("/{id}/edit", name="administration_semestre_edit", methods="GET|POST")
     *
     * @throws LogicException
     */
    public function edit(Request $request, Semestre $semestre): Response
    {
        if (null !== $semestre->getAnnee() && null !== $semestre->getAnnee()->getDiplome()) {
            $form = $this->createForm(
                SemestreType::class,
                $semestre,
                [
                    'diplome' => $semestre->getAnnee()->getDiplome(),
                    'attr' => [
                        'data-provide' => 'validation',
                    ],
                ]
            );
            $form->handleRequest($request);

            if ($form->isSubmitted() && $form->isValid()) {
                $this->entityManager->flush();
                $this->addFlashBag(Constantes::FLASHBAG_SUCCESS, 'semestre.edit.success.flash');

                return $this->redirectToRoute('administration_structure_index');
            }

            return $this->render('structure/semestre/edit.html.twig', [
                'semestre' => $semestre,
                'form'     => $form->createView(),
            ]);
        }

        return $this->redirectToRoute('erreur_666');
    }

    /**
     * @Route("/{id}/duplicate", name="administration_semestre_duplicate", methods="GET|POST")
     */
    public function duplicate(Semestre $semestre): Response
    {
        $newSemestre = clone $semestre;

        $this->entityManager->persist($newSemestre);
        $this->entityManager->flush();
        $this->addFlashBag(Constantes::FLASHBAG_SUCCESS, 'semestre.duplicate.success.flash');

        return $this->redirectToRoute('administration_semestre_edit', ['id' => $newSemestre->getId()]);
    }

    /**
     * @Route("/{id}", name="administration_semestre_delete", methods="DELETE")
     */
    public function delete(Request $request, Semestre $semestre): Response
    {
        $id = $semestre->getId();
        if ($this->isCsrfTokenValid('delete' . $id, $request->request->get('_token')) &&
            0 === count($semestre->getUes()) &&
            0 === count($semestre->getEtudiants()) &&
            0 === count($semestre->getProjetPeriodes()) &&
            0 === count($semestre->getTypeGroupes()) &&
            0 === count($semestre->getParcours()) &&
            0 === count($semestre->getArticles()) &&
            0 === count($semestre->getDocuments()) &&
            0 === count($semestre->getScolaritePromos())) {
            $this->entityManager->remove($semestre);
            $this->entityManager->flush();
            $this->addFlashBag(
                Constantes::FLASHBAG_SUCCESS,
                'semestre.delete.success.flash'
            );

            return $this->json($id, Response::HTTP_OK);
        }

        $this->addFlashBag(Constantes::FLASHBAG_ERROR, 'semestre.delete.error.flash');

        return $this->json(false, Response::HTTP_INTERNAL_SERVER_ERROR);
    }
}
