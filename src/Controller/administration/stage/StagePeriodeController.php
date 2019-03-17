<?php

namespace App\Controller\administration\stage;

use App\Controller\BaseController;
use App\Entity\Constantes;
use App\Entity\StagePeriode;
use App\Form\StagePeriodeType;
use App\MesClasses\MyExport;
use App\Repository\StagePeriodeRepository;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\ParamConverter;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

/**
 * @Route("/administration/stage-periode")
 */
class StagePeriodeController extends BaseController
{
    /**
     * @Route("/", name="administration_stage_periode_index", methods="GET")
     * @param StagePeriodeRepository $stagePeriodeRepository
     *
     * @return Response
     */
    public function index(StagePeriodeRepository $stagePeriodeRepository): Response
    {
        return $this->render(
            'administration/stage/stage_periode/index.html.twig',
            ['stage_periodes' => $stagePeriodeRepository->findByDepartement($this->dataUserSession->getDepartement())]
        );
    }

    /**
     * @Route("/export.{_format}", name="administration_stage_periode_export", methods="GET",
     *                             requirements={"_format"="csv|xlsx|pdf"})
     * @param MyExport               $myExport
     * @param StagePeriodeRepository $stagePeriodeRepository
     * @param                        $_format
     *
     * @return Response
     * @throws \PhpOffice\PhpSpreadsheet\Exception
     */
    public function export(MyExport $myExport, StagePeriodeRepository $stagePeriodeRepository, $_format): Response
    {
        $dates = $stagePeriodeRepository->findByDepartement($this->dataUserSession->getDepartement());
        $response = $myExport->genereFichierGenerique(
            $_format,
            $dates,
            'dates',
            ['stage_periode_administration', 'utilisateur'],
            ['titre', 'texte', 'type', 'personnel' => ['nom', 'prenom']]
        );
        //todo: définir les colonnes. copier/coller ici

        return $response;
    }

    /**
     * @Route("/new", name="administration_stage_periode_new", methods="GET|POST")
     * @param Request $request
     *
     * @return Response
     * @throws \Exception
     */
    public function create(Request $request): Response
    {
        $stagePeriode = new StagePeriode();
        $form = $this->createForm(StagePeriodeType::class, $stagePeriode, [
            'departement' => $this->dataUserSession->getDepartement(),
            'attr'      => [
                'data-provide' => 'validation'
            ]
        ]);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $stagePeriode->setAnneeUniversitaire($stagePeriode->getSemestre() ? $stagePeriode->getSemestre()->getAnneeUniversitaire() : 0);
            $this->entityManager->persist($stagePeriode);
            $this->entityManager->flush();
            $this->addFlashBag(Constantes::FLASHBAG_SUCCESS, 'stage_periode.create.success.flash');

            return $this->redirectToRoute('administration_stage_periode_index');
        }

        return $this->render('administration/stage/stage_periode/new.html.twig', [
            'stage_periode' => $stagePeriode,
            'form'          => $form->createView(),
        ]);
    }

    /**
     * @Route("/{id}", name="administration_stage_periode_show", methods="GET")
     * @ParamConverter("stagePeriode", options={"mapping": {"id": "uuid"}})
     * @param StagePeriode $stagePeriode
     *
     * @return Response
     */
    public function show(StagePeriode $stagePeriode): Response
    {
        return $this->render('administration/stage/stage_periode/show.html.twig', ['stage_periode' => $stagePeriode]);
    }

    /**
     * @Route("/{id}/edit", name="administration_stage_periode_edit", methods="GET|POST")
     * @ParamConverter("stagePeriode", options={"mapping": {"uuid": "id"}})
     * @param Request      $request
     * @param StagePeriode $stagePeriode
     *
     * @return Response
     */
    public function edit(Request $request, StagePeriode $stagePeriode): Response
    {
        $form = $this->createForm(StagePeriodeType::class, $stagePeriode, [
            'departement' => $this->dataUserSession->getDepartement(),
            'attr'      => [
                'data-provide' => 'validation'
            ]
        ]);

        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $this->entityManager->flush();
            $this->addFlashBag(Constantes::FLASHBAG_SUCCESS, 'stage_periode.edit.success.flash');

            return $this->redirectToRoute('administration_stage_periode_edit',
                ['id' => $stagePeriode->getUuidString()]);
        }

        return $this->render('administration/stage/stage_periode/edit.html.twig', [
            'stage_periode' => $stagePeriode,
            'form'          => $form->createView(),
        ]);
    }

    /**
     * @Route("/{id}", name="administration_stage_periode_delete", methods="DELETE")
     * @param Request      $request
     * @param StagePeriode $stagePeriode
     *
     * @return Response
     */
    public function delete(Request $request, StagePeriode $stagePeriode): Response
    {
        $id = $stagePeriode->getId();
        if ($this->isCsrfTokenValid('delete' . $id, $request->request->get('_token'))) {
            $this->entityManager->remove($stagePeriode);
            $this->entityManager->flush();
            $this->addFlashBag(
                Constantes::FLASHBAG_SUCCESS,
                'stage_periode.delete.success.flash'
            );
            //todo: supprimer les autres éléments ou définir le cas ??

            return $this->json($id, Response::HTTP_OK);
        }

        $this->addFlashBag(Constantes::FLASHBAG_ERROR, 'stage_periode.delete.error.flash');

        return $this->json(false, Response::HTTP_INTERNAL_SERVER_ERROR);
    }

    /**
     * @Route("/{id}/duplicate", name="administration_stage_periode_duplicate", methods="GET")
     * @param StagePeriode $stagePeriode
     *
     * @return Response
     */
    public function duplicate(StagePeriode $stagePeriode): Response
    {
        $newStagePeriode = clone $stagePeriode;
        $this->entityManager->persist($newStagePeriode);
        $this->entityManager->flush();
        $this->addFlashBag(Constantes::FLASHBAG_SUCCESS, 'stage_periode.duplicate.success.flash');

        return $this->redirectToRoute('administration_stage_periode_edit', ['id' => $newStagePeriode->getId()]);
    }
}
