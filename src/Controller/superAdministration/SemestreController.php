<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Controller/superAdministration/SemestreController.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 24/09/2021 21:04
 */

namespace App\Controller\superAdministration;

use App\Controller\BaseController;
use App\Entity\Annee;
use App\Entity\Constantes;
use App\Entity\Semestre;
use App\Form\SemestreType;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\IsGranted;
use Symfony\Component\HttpFoundation\RedirectResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use function count;

/**
 * @Route("/administratif/structure/semestre")
 */
class SemestreController extends BaseController
{
    /**
     * @Route("/new/{annee}", name="sa_semestre_new", methods="GET|POST")
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
                $this->addFlashBag(Constantes::FLASHBAG_SUCCESS, 'semestre.add.success.flash');

                return $this->redirectToRoute(
                    'sa_structure_index',
                    ['departement' => $annee->getDiplome()->getDepartement()->getId()]
                );
            }

            return $this->render('structure/semestre/new.html.twig', [
                'form'     => $form->createView(),
            ]);
        }

        return $this->redirectToRoute('erreur_666');
    }

    /**
     * @Route("/{id}", name="sa_semestre_show", methods="GET")
     */
    public function show(Semestre $semestre): Response
    {
        return $this->render('structure/semestre/show.html.twig', ['semestre' => $semestre]);
    }

    /**
     * @Route("/{id}/edit", name="sa_semestre_edit", methods="GET|POST")
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

                return $this->redirectToRoute(
                    'sa_structure_index',
                    ['departement' => $semestre->getAnnee()->getDiplome()->getDepartement()->getId()]
                );
            }

            return $this->render('structure/semestre/edit.html.twig', [
                'semestre' => $semestre,
                'form'     => $form->createView(),
            ]);
        }

        return $this->redirectToRoute('erreur_666');
    }

    /**
     * @Route("/{id}/duplicate", name="sa_semestre_duplicate", methods="GET|POST")
     */
    public function duplicate(Semestre $semestre): Response
    {
        $newSemestre = clone $semestre;
        $newSemestre->setLibelle($newSemestre->getLibelle() . ' copie');
        $this->entityManager->persist($newSemestre);
        $this->entityManager->flush();
        $this->addFlashBag(Constantes::FLASHBAG_SUCCESS, 'semestre.duplicate.success.flash');

        return $this->redirectToRoute('sa_semestre_edit', ['id' => $newSemestre->getId()]);
    }

    /**
     * @Route("/{id}", name="sa_semestre_delete", methods="DELETE")
     */
    public function delete(Request $request, Semestre $semestre): Response
    {
        $id = $semestre->getId();
        if ($this->isCsrfTokenValid('delete' . $id, $request->request->get('_token'))) {
            if (0 === count($semestre->getUes()) && 0 === count($semestre->getParcours()) && 0 === count($semestre->getEtudiants())) {
                $this->entityManager->remove($semestre);
                $this->entityManager->flush();
                $this->addFlashBag(
                    Constantes::FLASHBAG_SUCCESS,
                    'semestre.delete.success.flash'
                );

                return $this->json($id, Response::HTTP_OK);
            }

            $this->addFlashBag(Constantes::FLASHBAG_ERROR, 'semestre.delete.error.non-vide.flash');

            return $this->json(false, Response::HTTP_INTERNAL_SERVER_ERROR);
        }

        $this->addFlashBag(Constantes::FLASHBAG_ERROR, 'diplome.delete.error.flash');

        return $this->json(false, Response::HTTP_INTERNAL_SERVER_ERROR);
    }

    /**
     * @Route("/activate/{semestre}/{etat}", methods={"GET"}, name="sa_semestre_activate")
     * @IsGranted("ROLE_SUPER_ADMIN")
     */
    public function activate(Semestre $semestre, bool $etat): RedirectResponse
    {
        $semestre->setActif($etat);
        $this->entityManager->flush();
        $this->addFlashBag(Constantes::FLASHBAG_SUCCESS, 'semestre.activate.' . $etat . '.flash');

        return $this->redirectToRoute('super_admin_homepage');
    }
}
