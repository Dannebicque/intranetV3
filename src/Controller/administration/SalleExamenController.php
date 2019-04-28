<?php
/**
 * *
 *  *  Copyright (C) $month.$year | David annebicque | IUT de Troyes - All Rights Reserved
 *  *
 *  *
 *  * @file /Users/davidannebicque/htdocs/intranetv3/src/Controller/administration/SalleExamenController.php
 *  * @author     David annebicque
 *  * @project intranetv3
 *  * @date 4/28/19 8:47 PM
 *  * @lastUpdate 4/28/19 8:42 PM
 *  *
 *
 */

namespace App\Controller\administration;

use App\Controller\BaseController;
use App\Entity\Constantes;
use App\Entity\SalleExamen;
use App\Form\SalleExamenType;
use App\MesClasses\MyExport;
use App\Repository\SalleExamenRepository;
use PhpOffice\PhpSpreadsheet\Exception;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

/**
 * @Route("/administration/salle-examen")
 */
class SalleExamenController extends BaseController
{
    /**
     * @Route("/", name="administration_salle_examen_index", methods="GET")
     * @param SalleExamenRepository $salleExamenRepository
     *
     * @return Response
     */
    public function index(SalleExamenRepository $salleExamenRepository): Response
    {
        return $this->render('administration/salle_examen/index.html.twig',
            ['salle_examens' => $salleExamenRepository->findByDepartement($this->dataUserSession->getDepartement())]);
    }

    /**
     * @Route("/export.{_format}", name="administration_salle_examen_export", methods="GET",
     *                             requirements={"_format"="csv|xlsx|pdf"})
     * @param MyExport              $myExport
     * @param SalleExamenRepository $salleExamenRepository
     * @param                       $_format
     *
     * @return Response
     * @throws Exception
     */
    public function export(MyExport $myExport, SalleExamenRepository $salleExamenRepository, $_format): Response
    {
        $salles_examen = $salleExamenRepository->findByDepartement($this->dataUserSession->getDepartement(), 0);
        $response = $myExport->genereFichierGenerique(
            $_format,
            $salles_examen,
            'salles_examens',
            ['salle_examen_administration', 'salle_administration'],
            ['salle' => ['libelle'], 'nbColonnes', 'nbRangs', 'capacite', 'placesInterdites']
        );


        return $response;
    }

    /**
     * @Route("/new", name="administration_salle_examen_new", methods="GET|POST")
     * @param Request $request
     *
     * @return Response
     */
    public function create(Request $request): Response
    {
        $salleExaman = new SalleExamen($this->dataUserSession->getDepartement());
        $form = $this->createForm(SalleExamenType::class, $salleExaman);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $this->entityManager->persist($salleExaman);
            $this->entityManager->flush();
            $this->addFlashBag(Constantes::FLASHBAG_SUCCESS, 'salle_examen.add.success.flash');

            return $this->redirectToRoute('administration_salle_examen_index');
        }

        return $this->render('administration/salle_examen/new.html.twig', [
            'salle_examan' => $salleExaman,
            'form'         => $form->createView(),
        ]);
    }

    /**
     * @Route("/{id}", name="administration_salle_examen_show", methods="GET")
     * @param SalleExamen $salleExaman
     *
     * @return Response
     */
    public function show(SalleExamen $salleExaman): Response
    {
        return $this->render('administration/salle_examen/show.html.twig', ['salle_examan' => $salleExaman]);
    }

    /**
     * @Route("/{id}/edit", name="administration_salle_examen_edit", methods="GET|POST")
     * @param Request     $request
     * @param SalleExamen $salleExaman
     *
     * @return Response
     */
    public function edit(Request $request, SalleExamen $salleExaman): Response
    {
        $form = $this->createForm(SalleExamenType::class, $salleExaman);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $this->entityManager->flush();
            $this->addFlashBag(Constantes::FLASHBAG_SUCCESS, 'salle_examen.edit.success.flash');


            return $this->redirectToRoute('administration_salle_examen_edit', ['id' => $salleExaman->getId()]);
        }

        return $this->render('administration/salle_examen/edit.html.twig', [
            'salle_examan' => $salleExaman,
            'form'         => $form->createView(),
        ]);
    }

    /**
     * @Route("/{id}", name="administration_salle_examen_delete", methods="DELETE")
     * @param Request     $request
     * @param SalleExamen $salleExamen
     *
     * @return Response
     */
    public function delete(Request $request, SalleExamen $salleExamen): Response
    {
        $id = $salleExamen->getId();
        if ($this->isCsrfTokenValid('delete' . $id, $request->request->get('_token'))) {
            $this->entityManager->remove($salleExamen);
            $this->entityManager->flush();
            $this->addFlashBag(Constantes::FLASHBAG_SUCCESS, 'salle_examen.delete.success.flash');

            return $this->json($id, Response::HTTP_OK);
        }
        $this->addFlashBag(Constantes::FLASHBAG_ERROR, 'salle_examen.delete.error.flash');

        return $this->json(false, Response::HTTP_INTERNAL_SERVER_ERROR);
    }

    /**
     * @Route("/{id}/duplicate", name="administration_salle_examen_duplicate", methods="GET")
     * @param SalleExamen $salleExamen
     *
     * @return Response
     */
    public function duplicate(SalleExamen $salleExamen): Response
    {
        $newSalleExamen = clone $salleExamen;
        $this->entityManager->persist($newSalleExamen);
        $this->entityManager->flush();
        $this->addFlashBag(Constantes::FLASHBAG_SUCCESS, 'salle_examen.duplicate.success.flash');

        return $this->redirectToRoute('administration_salle_examen_edit', ['id' => $newSalleExamen->getId()]);
    }
}
