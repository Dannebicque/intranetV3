<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Controller/administration/GroupeController.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 08/10/2021 19:11
 */

namespace App\Controller\administration;

use App\Classes\Groupes\GenereGroupes;
use App\Classes\MyExport;
use App\Controller\BaseController;
use App\Entity\Constantes;
use App\Entity\Groupe;
use App\Entity\Semestre;
use App\Form\GroupeType;
use App\Repository\GroupeRepository;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

/**
 * @Route("/administration/groupe")
 */
class GroupeController extends BaseController
{
    /**
     * @Route("/{semestre}", name="administration_groupe_index", methods={"GET"}, requirements={"semestre":"\d+"})
     */
    public function index(Semestre $semestre = null): Response
    {
        $this->denyAccessUnlessGranted('MINIMAL_ROLE_ASS', $this->getDepartement());

        return $this->render('administration/groupe/index.html.twig', [
            'afficheSemestre' => $semestre?->getId(),
        ]);
    }

    /**
     * @Route("/generation-automatique/{semestre}", name="administration_groupe_semestre_generation_auto",
     *                                              methods={"GET"}, requirements={"semestre":"\d+"})
     */
    public function generationAutomatique(Semestre $semestre): Response
    {
        $this->denyAccessUnlessGranted('MINIMAL_ROLE_ASS', $semestre);

        return $this->render('administration/groupe/generation-automatique.html.twig', [
            'semestre' => $semestre,
        ]);
    }

    /**
     * @Route("/genere-groupes/{semestre}", name="administration_groupe_semestre_genere", methods={"POST"},
     *                                      requirements={"semestre":"\d+"})
     */
    public function genereGroupes(Request $request, Semestre $semestre): Response
    {
        $this->denyAccessUnlessGranted('MINIMAL_ROLE_ASS', $semestre);

        //sauvegarde du nombre de groupe de semestre ?

        //génére les groupes
        $genereGroupes = new GenereGroupes($this->entityManager);
        $genereGroupes->genereGroupesSemestre($semestre, $request->request->get('appelation'));

        return $this->redirectToRoute('administration_groupe_index', [
            'semestre' => $semestre->getId(),
        ]);
    }

    /**
     * @Route("/liste/{semestre}", name="administration_groupe_liste_semestre", methods={"GET"},
     *                             options={"expose":true})
     */
    public function listeSemestre(GroupeRepository $groupeRepository, Semestre $semestre): Response
    {
        $this->denyAccessUnlessGranted('MINIMAL_ROLE_ASS', $semestre);

        $typeGroupes = $semestre->getTypeGroupes();
        $groupes = $groupeRepository->findBySemestre($semestre);
        $parcours = $semestre->getParcours();

        return $this->render('administration/groupe/_listeSemestre.html.twig', [
            'semestre' => $semestre,
            'groupes' => $groupes,
            'typeGroupes' => $typeGroupes,
            'parcours' => $parcours,
        ]);
    }

    /**
     * @Route("/{semestre}/export.{_format}", name="administration_groupe_export", methods="GET",
     *                             requirements={"_format"="csv|xlsx|pdf"}, options={"expose":true})
     *
     */
    public function export(
        MyExport $myExport,
        GroupeRepository $groupeRepository,
        Semestre $semestre,
        $_format
    ): Response
    {
        $this->denyAccessUnlessGranted('MINIMAL_ROLE_ASS', $semestre);

        $groupes = $groupeRepository->findBySemestre($semestre);

        return $myExport->genereFichierGenerique(
            $_format,
            $groupes,
            'groupes',
            ['groupes_administration'],
            [
                'libelle',
                'typeGroupe' => ['libelle'],
                'codeApogee',
                'parent'     => ['libelle'],
                'ordre',
                'parcours'   => ['libelle'],
            ]
        );
    }

    /**
     * @Route("/new/{semestre}", name="administration_groupe_new", methods={"GET","POST"}, options={"expose":true})
     */
    public function new(Request $request, Semestre $semestre): Response
    {
        $groupe = new Groupe();
        $form = $this->createForm(GroupeType::class, $groupe,
            ['semestre' => $semestre, 'attr' => ['id' => 'form_groupe']]);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $entityManager = $this->getDoctrine()->getManager();
            $entityManager->persist($groupe);
            $entityManager->flush();

            return new JsonResponse(true, Response::HTTP_OK);
        }

        return $this->render('administration/groupe/_new.html.twig', [
            'groupe'   => $groupe,
            'semestre' => $semestre,
            'form'     => $form->createView(),
        ]);
    }

    /**
     * @Route("/duplicate/{groupe}", name="administration_groupe_duplicate", methods={"GET"}, options={"expose":true})
     */
    public function duplicate(Groupe $groupe): Response
    {
        $newGroupe = clone $groupe;
        $newGroupe->setLibelle('Copie_' . $newGroupe->getLibelle());
        $newGroupe->setCodeApogee('Copie_' . $newGroupe->getCodeApogee());
        $this->entityManager->persist($newGroupe);
        $this->entityManager->flush();
        $this->addFlashBag(Constantes::FLASHBAG_SUCCESS, 'groupe.duplicate.success.flash');

        return new JsonResponse(true, Response::HTTP_OK);
    }

    /**
     * @Route("/supprimer/{id}", name="administration_groupe_delete", methods={"DELETE"})
     */
    public function delete(Request $request, Groupe $groupe): Response
    {
        $id = $groupe->getId();
        if ($this->isCsrfTokenValid('delete' . $id, $request->request->get('_token'))) {
            $this->entityManager->remove($groupe);
            $this->entityManager->flush();
            $this->addFlashBag(
                Constantes::FLASHBAG_SUCCESS,
                'groupe.delete.success.flash'
            );

            return $this->json($id, Response::HTTP_OK);
        }

        $this->addFlashBag(Constantes::FLASHBAG_ERROR, 'groupe.delete.error.flash');

        return $this->json(false, Response::HTTP_INTERNAL_SERVER_ERROR);
    }
}
