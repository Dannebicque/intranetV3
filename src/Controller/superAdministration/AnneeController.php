<?php
// Copyright (C) 11 / 2019 | David annebicque | IUT de Troyes - All Rights Reserved
// @file /Users/davidannebicque/htdocs/intranetv3/src/Controller/superAdministration/AnneeController.php
// @author     David Annebicque
// @project intranetv3
// @date 25/11/2019 10:20
// @lastUpdate 23/11/2019 09:14

namespace App\Controller\superAdministration;

use App\Controller\BaseController;
use App\Entity\Annee;
use App\Entity\Constantes;
use App\Entity\Diplome;
use App\Form\AnneeType;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\IsGranted;
use Symfony\Component\HttpFoundation\RedirectResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

/**
 * @Route("/super-administration/structure/annee")
 */
class AnneeController extends BaseController
{

    /**
     * @Route("/nouveau/{diplome}", name="sa_annee_new",
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
                $this->addFlashBag(Constantes::FLASHBAG_SUCCESS, 'annee.add.success.flash');

                return $this->redirectToRoute(
                    'sa_structure_index',
                    ['departement' => $diplome->getDepartement()->getId()]
                );
            }

            return $this->render('structure/annee/new.html.twig', [
                'annee' => $annee,
                'form'  => $form->createView(),
            ]);
        }

        return $this->redirectToRoute('erreur_666');
    }

    /**
     * @Route("/{id}", name="sa_annee_show", methods="GET")
     * @param Annee $annee
     *
     * @return Response
     */
    public function show(Annee $annee): Response
    {
        return $this->render('structure/annee/show.html.twig', ['annee' => $annee]);
    }

    /**
     * @Route("/{id}/modifier", name="sa_annee_edit", methods="GET|POST")
     * @param Request $request
     * @param Annee   $annee
     *
     * @return Response
     */
    public function edit(Request $request, Annee $annee): Response
    {
        if ($annee->getDiplome() !== null && $annee->getDiplome()->getDepartement() !== null) {
            $form = $this->createForm(
                AnneeType::class,
                $annee,
                [
                    'departement' => $annee->getDiplome()->getDepartement(),
                    'attr'        => [
                        'data-provide' => 'validation'
                    ]
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
                'form'  => $form->createView(),
            ]);
        }

        return $this->redirectToRoute('erreur_666');
    }

    /**
     * @Route("/{id}/duplicate", name="sa_annee_duplicate", methods="GET|POST")
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

        return $this->redirectToRoute('sa_annee_edit', ['id' => $newAnnee->getId()]);
    }

    /**
     * @Route("/{id}", name="sa_annee_delete", methods="DELETE")
     * @param Request $request
     * @param Annee   $annee
     *
     * @return Response
     */
    public function delete(Request $request, Annee $annee): Response
    {
        $id = $annee->getId();
        if ($this->isCsrfTokenValid('delete' . $id, $request->request->get('_token'))) {
            if (count($annee->getSemestres()) === 0) {
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

    /**
     * @param Annee $annee
     * @param bool  $etat
     *
     * @return RedirectResponse
     * @Route("/activate/{annee}/{etat}", methods={"GET"}, name="sa_annee_activate")
     * @IsGranted("ROLE_SUPER_ADMIN")
     *
     */
    public function activate(Annee $annee, bool $etat): RedirectResponse
    {
        $annee->setActif($etat);
        $this->entityManager->flush();
        $this->addFlashBag(Constantes::FLASHBAG_SUCCESS, 'annee.activate.' . $etat . '.flash');

        return $this->redirectToRoute('super_admin_homepage');

    }
}
