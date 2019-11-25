<?php
// Copyright (C) 11 / 2019 | David annebicque | IUT de Troyes - All Rights Reserved
// @file /Users/davidannebicque/htdocs/intranetv3/src/Controller/administration/EtudiantController.php
// @author     David Annebicque
// @project intranetv3
// @date 25/11/2019 10:20
// @lastUpdate 23/11/2019 09:14

namespace App\Controller\administration;

use App\Controller\BaseController;
use App\Entity\Constantes;
use App\Entity\Etudiant;
use App\Form\EtudiantType;
use App\Form\ImportEtudiantType;
use Exception;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

/**
 * Class EtudiantController
 * @package App\Controller\administration
 * @Route("/administration/etudiant")
 */
class EtudiantController extends BaseController
{
    /**
     * @Route("/", name="administration_etudiant_index")
     *
     * @return Response
     */
    public function index(): Response
    {
        return $this->render('administration/etudiant/index.html.twig', [
        ]);
    }

    /**
     * @Route("/import", name="administration_etudiant_import", methods="POST")
     * @param Request $request
     *
     * @return Response
     */
    public function import(Request $request): Response
    {
        $form = $this->createForm(
            ImportEtudiantType::class,
            null,
            [
                'departement' => $this->dataUserSession->getDepartement(),
                'attr'        => [
                    'data-provide' => 'validation'
                ]
            ]
        );

        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {


            $this->addFlashBag(Constantes::FLASHBAG_SUCCESS, 'etudiant.import.success.flash');
        }

        return $this->redirectToRoute('administration_etudiant_semestre_add');
    }

    /**
     * @Route("/edit/{id}", name="administration_etudiant_edit", methods="{GET|POST}")
     * @param Request  $request
     *
     * @param Etudiant $etudiant
     *
     * @return Response
     */
    public function edit(Request $request, Etudiant $etudiant): Response
    {
        $form = $this->createForm(
            EtudiantType::class,
            $etudiant,
            [
                'attr'        => [
                    'data-provide' => 'validation'
                ],
                'departement' => $this->dataUserSession->getDepartement()
            ]
        );

        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $this->entityManager->persist($etudiant);
            $this->entityManager->flush();

            $this->addFlashBag(Constantes::FLASHBAG_SUCCESS, 'etudiant.add.success.flash');
            $this->redirectToRoute('administration_etudiant_index', ['semestre' => $etudiant->getSemestre()->getId()]);
        }

        return $this->render('administration/etudiant/edit.html.twig', [
            'etudiant' => $etudiant,
            'form'     => $form->createView()
        ]);
    }


    /**
     * @Route("/add", name="administration_etudiant_add", methods="POST")
     * @param Request $request
     *
     * @return Response
     * @throws Exception
     */
    public function create(Request $request): Response
    {
        $etudiant = new Etudiant();

        $form = $this->createForm(
            EtudiantType::class,
            $etudiant,
            [
                'attr'        => [
                    'data-provide' => 'validation'
                ],
                'departement' => $this->dataUserSession->getDepartement()
            ]
        );

        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $this->entityManager->persist($etudiant);
            $this->entityManager->flush();

            $this->addFlashBag(Constantes::FLASHBAG_SUCCESS, 'etudiant.add.success.flash');
        }

        return $this->redirectToRoute('administration_etudiant_semestre_add');
    }


    /**
     * @Route("/export.{_format}", name="administration_all_etudiant_export", methods="GET",
     *                             requirements={"_format"="csv|xlsx|pdf"})
     */
    public function export(): Response
    {
        //save en csv
        return new Response('', Response::HTTP_OK);
    }


}
