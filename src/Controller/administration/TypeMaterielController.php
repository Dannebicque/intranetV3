<?php
// Copyright (C) 11 / 2019 | David annebicque | IUT de Troyes - All Rights Reserved
// @file /Users/davidannebicque/htdocs/intranetv3/src/Controller/administration/TypeMaterielController.php
// @author     David Annebicque
// @project intranetv3
// @date 25/11/2019 10:20
// @lastUpdate 23/11/2019 09:14

namespace App\Controller\administration;

use App\Controller\BaseController;
use App\Entity\Constantes;
use App\Entity\TypeMateriel;
use App\Form\TypeMaterielType;
use App\MesClasses\MyExport;
use App\Repository\TypeMaterielRepository;
use PhpOffice\PhpSpreadsheet\Exception;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

/**
 * @Route("/administration/type-materiel")
 */
class TypeMaterielController extends BaseController
{
    /**
     * @Route("/", name="administration_type_materiel_index", methods="GET")
     * @param TypeMaterielRepository $typeMaterielRepository
     *
     * @return Response
     */
    public function index(TypeMaterielRepository $typeMaterielRepository): Response
    {
        return $this->render('administration/type_materiel/index.html.twig',
            ['type_materiels' => $typeMaterielRepository->findByDepartement($this->dataUserSession->getDepartement())]);
    }

    /**
     * @Route("/export.{_format}", name="administration_type_materiel_export", methods="GET",
     *                             requirements={"_format"="csv|xlsx|pdf"})
     * @param MyExport               $myExport
     * @param TypeMaterielRepository $type_materielRepository
     *
     * @param                        $_format
     *
     * @return Response
     * @throws Exception
     */
    public function export(MyExport $myExport, TypeMaterielRepository $type_materielRepository, $_format): Response
    {
        $type_materiels = $type_materielRepository->findByDepartement($this->dataUserSession->getDepartement());

        return $myExport->genereFichierGenerique(
            $_format,
            $type_materiels,
            'type_materiels',
            ['type_materiel_administration', 'utilisateur'],
            ['titre', 'texte', 'departement' => ['libelle']]
        );
    }

    /**
     * @Route("/new", name="administration_type_materiel_new", methods="GET|POST")
     * @param Request $request
     *
     * @return Response
     */
    public function create(Request $request): Response
    {
        $typeMateriel = new TypeMateriel($this->dataUserSession->getDepartement());
        $form = $this->createForm(TypeMaterielType::class, $typeMateriel, [
            'attr' => [
                'data-provide' => 'validation'
            ]
        ]);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {

            $this->entityManager->persist($typeMateriel);
            $this->entityManager->flush();
            $this->addFlashBag(Constantes::FLASHBAG_SUCCESS, 'type_materiel.add.success.flash');

            return $this->redirectToRoute('administration_type_materiel_index');
        }

        return $this->render('administration/type_materiel/new.html.twig', [
            'type_materiel' => $typeMateriel,
            'form'          => $form->createView(),
        ]);
    }

    /**
     * @Route("/{id}", name="administration_type_materiel_show", methods="GET")
     * @param TypeMateriel $typeMateriel
     *
     * @return Response
     */
    public function show(TypeMateriel $typeMateriel): Response
    {
        return $this->render('administration/type_materiel/show.html.twig', ['type_materiel' => $typeMateriel]);
    }

    /**
     * @Route("/{id}/edit", name="administration_type_materiel_edit", methods="GET|POST")
     * @param Request      $request
     * @param TypeMateriel $typeMateriel
     *
     * @return Response
     */
    public function edit(Request $request, TypeMateriel $typeMateriel): Response
    {
        $form = $this->createForm(TypeMaterielType::class, $typeMateriel, [
            'attr' => [
                'data-provide' => 'validation'
            ]
        ]);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $this->entityManager->flush();
            $this->addFlashBag(Constantes::FLASHBAG_SUCCESS, 'type_materiel.edit.success.flash');
            if ($request->request->get('btn_update') !== null) {
                return $this->redirectToRoute('administration_type_materiel_index');
            }

            return $this->redirectToRoute('administration_type_materiel_edit', ['id' => $typeMateriel->getId()]);
        }

        return $this->render('administration/type_materiel/edit.html.twig', [
            'type_materiel' => $typeMateriel,
            'form'          => $form->createView(),
        ]);
    }

    /**
     * @Route("/{id}", name="administration_type_materiel_delete", methods="DELETE")
     * @param Request      $request
     * @param TypeMateriel $type_materiel
     *
     * @return Response
     */
    public function delete(Request $request, TypeMateriel $type_materiel): Response
    {
        $id = $type_materiel->getId();
        if ($this->isCsrfTokenValid('delete' . $id, $request->request->get('_token'))) {
            $this->entityManager->remove($type_materiel);
            $this->entityManager->flush();
            $this->addFlashBag(
                Constantes::FLASHBAG_SUCCESS,
                'type_materiel.delete.success.flash'
            );

            return $this->json($id, Response::HTTP_OK);
        }

        $this->addFlashBag(Constantes::FLASHBAG_ERROR, 'type_materiel.delete.error.flash');

        return $this->json(false, Response::HTTP_INTERNAL_SERVER_ERROR);
    }

    /**
     * @Route("/{id}/duplicate", name="administration_type_materiel_duplicate", methods="GET|POST")
     * @param TypeMateriel $type_materiel
     *
     * @return Response
     */
    public function duplicate(TypeMateriel $type_materiel): Response
    {
        $newTypeMateriel = clone $type_materiel;

        $this->entityManager->persist($newTypeMateriel);
        $this->entityManager->flush();
        $this->addFlashBag(Constantes::FLASHBAG_SUCCESS, 'type_materiel.duplicate.success.flash');

        return $this->redirectToRoute('administration_type_materiel_edit', ['id' => $newTypeMateriel->getId()]);
    }
}
