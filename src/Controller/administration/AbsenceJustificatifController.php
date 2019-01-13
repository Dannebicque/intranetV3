<?php

namespace App\Controller\administration;

use App\Controller\BaseController;
use App\Entity\AbsenceJustificatif;
use App\Entity\Constantes;
use App\Entity\Semestre;
use App\Events;
use App\MesClasses\MyExport;
use App\Repository\AbsenceJustificatifRepository;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\ParamConverter;
use Symfony\Component\EventDispatcher\EventDispatcherInterface;
use Symfony\Component\EventDispatcher\GenericEvent;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

/**
 * Class AbsenceController
 * @package App\Controller\administration
 * @Route("/administration/absence/justificatif")
 */
class AbsenceJustificatifController extends BaseController
{


    /**
     * @Route("/semestre/{semestre}", name="administration_absences_justificatif_semestre_liste")
     * @param AbsenceJustificatifRepository $absenceJustificatifRepository
     * @param Semestre                      $semestre
     *
     * @return \Symfony\Component\HttpFoundation\Response
     */
    public function justificatif(
        AbsenceJustificatifRepository $absenceJustificatifRepository,
        Semestre $semestre
    ): Response {
        return $this->render('administration/absencejustificatif/justificatif.html.twig', [
            'semestre'      => $semestre,
            'justificatifs' => $absenceJustificatifRepository->findBySemestre($semestre)
        ]);
    }


    /**
     * @Route("/semestre/{semestre}/export.{_format}", name="administration_absences_justificatif_semestre_export",
     *                                                 requirements={"_format"="csv|xlsx|pdf"})
     * @param MyExport                      $myExport
     * @param AbsenceJustificatifRepository $absenceJustificatifRepository
     * @param Semestre                      $semestre
     *
     * @param                               $_format
     *
     * @return \Symfony\Component\HttpFoundation\Response
     * @throws \PhpOffice\PhpSpreadsheet\Exception
     */
    public function exportJustificatif(
        MyExport $myExport,
        AbsenceJustificatifRepository $absenceJustificatifRepository,
        Semestre $semestre,
        $_format
    ): Response {
        $justificatifs = $absenceJustificatifRepository->findBySemestre(
            $semestre);
        $response = $myExport->genereFichierAbsence($_format, $justificatifs, 'absences_' . $semestre->getLibelle());

        return $response;
    }

    /**
     * @Route("/{id}", name="administration_absence_justificatif_delete", methods="DELETE")
     * @param EventDispatcherInterface $eventDispatcher
     * @param Request                  $request
     * @param AbsenceJustificatif      $absenceJustificatif
     *
     * @return Response
     */
    public function delete(EventDispatcherInterface $eventDispatcher, Request $request, AbsenceJustificatif $absenceJustificatif): Response
    {
        $id = $absenceJustificatif->getUuidString();
        if ($this->isCsrfTokenValid('delete' . $id, $request->request->get('_token'))) {


            $event = new GenericEvent($absenceJustificatif);
            $eventDispatcher->dispatch(Events::MAIL_DELETE_JUSTIFICATIF, $event);
            $this->entityManager->remove($absenceJustificatif);
            $this->entityManager->flush();
            $this->addFlashBag(Constantes::FLASHBAG_SUCCESS, 'absence.justificatif.delete.success.flash');

            return $this->json($id, Response::HTTP_OK);
        }

        return $this->json(false, Response::HTTP_INTERNAL_SERVER_ERROR);
    }

    /**
     * @Route("/show/{uuid}", name="administration_absence_justificatif_details")
     * @param AbsenceJustificatif $absenceJustificatif
     * @ParamConverter("absenceJustificatif", options={"mapping": {"uuid": "uuid"}})
     *
     * @return Response
     */
    public function details(AbsenceJustificatif $absenceJustificatif): Response
    {
        return $this->render('administration/absencejustificatif/details.html.twig', [
            'justificatif' => $absenceJustificatif
        ]);
    }

    /**
     * @Route("/change-etat/{uuid}/{etat}", name="administration_absence_justificatif_change_etat", methods="GET",
     *                                    requirements={"etat"="A|R|D"}, options={"expose":true})
     * @ParamConverter("absenceJustificatif", options={"mapping": {"uuid": "uuid"}})
     * @param EventDispatcherInterface $eventDispatcher
     * @param AbsenceJustificatif      $absenceJustificatif
     * @param                          $etat
     *
     * @return Response
     */
    public function accepte(EventDispatcherInterface $eventDispatcher, AbsenceJustificatif $absenceJustificatif, $etat): Response
    {
        $absenceJustificatif->setEtat($etat);
        $this->entityManager->flush();

        if ($etat === 'A') {
            //todo: Mettre à jour les absences en conséquence !!
            $this->addFlashBag(Constantes::FLASHBAG_SUCCESS, 'absence.justificatif.valide.success.flash');
        }

        if ($etat === 'A' || $etat === 'R') {
            $event = new GenericEvent($absenceJustificatif);
            $eventDispatcher->dispatch(Events::MAIL_DECISION_JUSTIFICATIF, $event);
            $eventDispatcher->dispatch(Events::DECISION_JUSTIFICATIF, $event);
        }

        return new Response('', Response::HTTP_OK);
    }
}
