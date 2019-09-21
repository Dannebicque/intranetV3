<?php
/**
 * Copyright (C) 9 / 2019 | David annebicque | IUT de Troyes - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetv3/src/Controller/superAdministration/MatiereController.php
 * @author     David Annebicque
 * @project intranetv3
 * @date 21/09/2019 09:03
 * @lastUpdate 21/09/2019 09:03
 */

namespace App\Controller\superAdministration;

use App\Controller\BaseController;
use App\Entity\Constantes;
use App\Entity\Diplome;
use App\Entity\Matiere;
use App\Form\MatiereType;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\IsGranted;
use Symfony\Component\HttpFoundation\RedirectResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

/**
 * @Route("/super-administration/structure/matiere")
 */
class MatiereController extends BaseController
{

    /**
     * @Route("/", name="sa_matiere_index", methods="GET")
     * @return Response
     */
    public function index(): Response
    {
        return $this->render('administration/matiere/index.html.twig');
    }


    /**
     * @Route("/new/{diplome}", name="sa_matiere_new", methods="GET|POST")
     * @param Request $request
     *
     * @param Diplome $diplome
     *
     * @return Response
     */
    public function create(Request $request, Diplome $diplome): Response
    {
        $matiere = new Matiere();
        $form = $this->createForm(MatiereType::class, $matiere, [
            'diplome' => $diplome,
            'attr'    => [
                'data-provide' => 'validation'
            ]
        ]);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $this->entityManager->persist($matiere);
            $this->entityManager->flush();
            $this->addFlashBag(Constantes::FLASHBAG_SUCCESS, 'matiere.add.success.flash');

            return $this->redirectToRoute('administration_matiere_index');
        }

        return $this->render('administration/matiere/new.html.twig', [
            'matiere' => $matiere,
            'form'    => $form->createView(),
        ]);
    }

    /**
     * @Route("/{id}", name="sa_matiere_show", methods="GET")
     * @param Matiere $matiere
     *
     * @return Response
     */
    public function show(Matiere $matiere): Response
    {
        return $this->render('administration/matiere/show.html.twig', ['matiere' => $matiere]);
    }

    /**
     * @Route("/{id}/edit", name="sa_matiere_edit", methods="GET|POST")
     * @param Request $request
     * @param Matiere $matiere
     *
     * @return Response
     */
    public function edit(Request $request, Matiere $matiere): Response
    {
        $form = $this->createForm(MatiereType::class, $matiere, [
            'diplome' => $matiere->getSemestre()->getAnnee()->getDiplome(),
            'attr'    => [
                'data-provide' => 'validation'
            ]
        ]);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $this->entityManager->flush();
            $this->addFlashBag(Constantes::FLASHBAG_SUCCESS, 'matiere.edit.success.flash');

            return $this->redirectToRoute('sa_structure_index',
                ['departement' => $matiere->getSemestre()->getAnnee()->getDiplome()->getDepartement()->getId()]);
        }

        return $this->render('structure/matiere/edit.html.twig', [
            'matiere' => $matiere,
            'form'    => $form->createView(),
        ]);
    }


    /**
     * @Route("/{id}/duplicate", name="sa_matiere_duplicate", methods="GET|POST")
     * @param Matiere $matiere
     *
     * @return Response
     */
    public function duplicate(Matiere $matiere): Response
    {
        $newMatiere = clone $matiere;

        $this->entityManager->persist($newMatiere);
        $this->entityManager->flush();
        $this->addFlashBag(Constantes::FLASHBAG_SUCCESS, 'matiere.duplicate.success.flash');

        return $this->redirectToRoute('administration_matiere_edit', ['id' => $newMatiere->getId()]);
    }

    /**
     * @Route("/{id}", name="sa_matiere_delete", methods="DELETE")
     */
    public function delete(): void
    {
    }

    /**
     * @param Matiere $matiere
     * @param bool    $etat
     *
     * @return RedirectResponse
     * @Route("/activate/{matiere}/{etat}", methods={"GET"}, name="sa_matiere_activate")
     * @IsGranted("ROLE_SUPER_ADMIN")
     *
     */
    public function activate(Matiere $matiere, bool $etat): RedirectResponse
    {
        $matiere->setSuspendu($etat);
        $this->entityManager->flush();
        $this->addFlashBag(Constantes::FLASHBAG_SUCCESS, 'matiere.activate.' . $etat . '.flash');

        return $this->redirectToRoute('super_admin_homepage');

    }
}
