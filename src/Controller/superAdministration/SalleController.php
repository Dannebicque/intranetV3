<?php
/**
 * *
 *  *  Copyright (C) $month.$year | David annebicque | IUT de Troyes - All Rights Reserved
 *  *
 *  *
 *  * @file /Users/davidannebicque/htdocs/intranetv3/src/Controller/superAdministration/SalleController.php
 *  * @author     David annebicque
 *  * @project intranetv3
 *  * @date 5/2/19 4:18 AM
 *  * @lastUpdate 5/1/19 8:59 AM
 *  *
 *
 */

namespace App\Controller\superAdministration;

use App\Controller\BaseController;
use App\Entity\Constantes;
use App\Entity\Salle;
use App\Form\SalleType;
use App\MesClasses\MyExport;
use App\Repository\SalleRepository;
use PhpOffice\PhpSpreadsheet\Exception;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

/**
 * @Route("/super-administration/salle")
 */
class SalleController extends BaseController
{
    /**
     * @Route("/", name="sa_salle_index", methods="GET")
     * @param SalleRepository $salleRepository
     *
     * @return Response
     */
    public function index(SalleRepository $salleRepository): Response
    {
        return $this->render('super-administration/salle/index.html.twig', ['salles' => $salleRepository->findAll()]);
    }

    /**
     * @Route("/export.{_format}", name="sa_salle_export", methods="GET", requirements={"_format"="csv|xlsx|pdf"})
     * @param MyExport            $myExport
     * @param SalleRepository $salleRepository
     *
     * @param                     $_format
     *
     * @return Response
     * @throws Exception
     */
    public function export(MyExport $myExport, SalleRepository $salleRepository, $_format): Response
    {
        $salles = $salleRepository->findAll();
        $response = $myExport->genereFichierGenerique(
            $_format,
            $salles,
            'salles',
            ['salle_administration', 'sites_administration'],
            ['libelle', 'capacite', 'type', 'site' => ['libelle']]
        );

        return $response;
    }

    /**
     * @Route("/new", name="sa_salle_new", methods="GET|POST")
     * @param Request $request
     *
     * @return Response
     */
    public function create(Request $request): Response
    {
        $salle = new Salle();
        $form = $this->createForm(SalleType::class, $salle, [
            'attr' => [
                'data-provide' => 'validation'
            ]
        ]);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $this->entityManager->persist($salle);
            $this->entityManager->flush();
            $this->addFlashBag(Constantes::FLASHBAG_SUCCESS, 'salle.add.success.flash');

            return $this->redirectToRoute('sa_salle_index');
        }

        return $this->render('super-administration/salle/new.html.twig', [
            'salle' => $salle,
            'form'  => $form->createView(),
        ]);
    }

    /**
     * @Route("/{id}", name="sa_salle_show", methods="GET")
     * @param Salle $salle
     *
     * @return Response
     */
    public function show(Salle $salle): Response
    {
        return $this->render('super-administration/salle/show.html.twig', ['salle' => $salle]);
    }

    /**
     * @Route("/{id}/edit", name="sa_salle_edit", methods="GET|POST")
     * @param Request $request
     * @param Salle   $salle
     *
     * @return Response
     */
    public function edit(Request $request, Salle $salle): Response
    {
        $form = $this->createForm(SalleType::class, $salle, [
            'attr' => [
                'data-provide' => 'validation'
            ]
        ]);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $this->entityManager->flush();
            $this->addFlashBag(Constantes::FLASHBAG_SUCCESS, 'salle.edit.success.flash');

            return $this->redirectToRoute('sa_salle_edit', ['id' => $salle->getId()]);
        }

        return $this->render('super-administration/salle/edit.html.twig', [
            'salle' => $salle,
            'form'  => $form->createView(),
        ]);
    }

    /**
     * @Route("/{id}/duplicate", name="sa_salle_duplicate", methods="GET|POST")
     * @param Salle $salle
     *
     * @return Response
     */
    public function duplicate(Salle $salle): Response
    {
        $newSalle = clone $salle;

        $this->entityManager->persist($newSalle);
        $this->entityManager->flush();

        return $this->redirectToRoute('sa_salle_edit', ['id' => $newSalle->getId()]);
    }

    /**
     * @Route("/{id}", name="sa_salle_delete", methods="DELETE")
     * @param Request $request
     * @param Salle   $salle
     *
     * @return Response
     */
    public function delete(Request $request, Salle $salle): Response
    {
        $id = $salle->getId();
        if ($this->isCsrfTokenValid('delete' . $id, $request->request->get('_token'))) {
            $this->entityManager->remove($salle);
            $this->entityManager->flush();

            return $this->json($id, Response::HTTP_OK);
        }

        return $this->json(false, Response::HTTP_INTERNAL_SERVER_ERROR);
    }
}
