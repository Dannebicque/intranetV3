<?php

namespace App\Controller\appEtudiant;

use App\Controller\BaseController;
use App\Entity\AbsenceJustificatif;
use App\Entity\Constantes;
use App\Form\AbsenceJustificatifType;
use App\Repository\AbsenceJustificatifRepository;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\ParamConverter;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

/**
 * @Route("/application/etudiant/absence/justificatif")
 */
class AbsenceJustificatifController extends BaseController
{
    /**
     * @Route("/", name="app_etudiant_absence_justificatif_index", methods="GET")
     * @param AbsenceJustificatifRepository $absenceJustificatifRepository
     *
     * @return Response
     */
    public function index(AbsenceJustificatifRepository $absenceJustificatifRepository): Response
    {
        return $this->render('appEtudiant/absence_justificatif/index.html.twig',
            ['absence_justificatifs' => $absenceJustificatifRepository->findAll()]);
    }

    /**
     * @Route("/depot", name="app_etudiant_absence_justificatif_new", methods="GET|POST")
     * @param Request $request
     *
     * @return Response
     * @throws \Exception
     */
    public function depot(Request $request): Response
    {
        $absenceJustificatif = new AbsenceJustificatif($this->dataUserSession->getUser());
        $form = $this->createForm(AbsenceJustificatifType::class, $absenceJustificatif);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $this->entityManager->persist($absenceJustificatif);
            $this->entityManager->flush();
            $this->addFlashBag(Constantes::FLASHBAG_SUCCESS, 'absence_justificatif.add.success.flash');

            return $this->redirectToRoute('application_index', ['onglet' => 'justificatif']);
        }

        return $this->render('appEtudiant/absence_justificatif/new.html.twig', [
            'absence_justificatif' => $absenceJustificatif,
            'form'                 => $form->createView(),
        ]);
    }

    /**
     * @Route("/{id}/edit", name="app_etudiant_absence_justificatif_edit", methods="GET|POST")
     * @ParamConverter("absenceJustificatif", options={"mapping": {"id": "uuid"}})
     * @param Request             $request
     * @param AbsenceJustificatif $absenceJustificatif
     *
     * @return Response
     */
    public function edit(Request $request, AbsenceJustificatif $absenceJustificatif): Response
    {
        $form = $this->createForm(AbsenceJustificatifType::class, $absenceJustificatif);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $this->getDoctrine()->getManager()->flush();

            return $this->redirectToRoute('app_etudiant_absence_justificatif_edit',
                ['id' => $absenceJustificatif->getId()]);
        }

        return $this->render('appEtudiant/absence_justificatif/edit.html.twig', [
            'absence_justificatif' => $absenceJustificatif,
            'form'                 => $form->createView(),
        ]);
    }

    /**
     * @Route("/{id}", name="app_etudiant_absence_justificatif_delete", methods="DELETE")
     * @param Request             $request
     * @param AbsenceJustificatif $absenceJustificatif
     *
     * @return Response
     * @ParamConverter("absenceJustificatif", options={"mapping": {"id": "uuid"}})
     *
     */
    public function delete(Request $request, AbsenceJustificatif $absenceJustificatif): Response
    {
        $id = $absenceJustificatif->getUuidString();
        if ($this->isCsrfTokenValid('delete' . $id, $request->request->get('_token'))) {
            $this->entityManager->remove($absenceJustificatif);
            $this->entityManager->flush();
            $this->addFlashBag(
                Constantes::FLASHBAG_SUCCESS,
                'absence_justificatif.delete.success.flash'
            );

            return $this->json($id, Response::HTTP_OK);
        }

        $this->addFlashBag(Constantes::FLASHBAG_ERROR, 'absence_justificatif.delete.error.flash');

        return $this->json(false, Response::HTTP_INTERNAL_SERVER_ERROR);
    }
}
