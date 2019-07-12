<?php
/*
 * Copyright (C) 7 / 2019 | David annebicque | IUT de Troyes - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetv3/src/Controller/administration/AbsenceJustificatifController.php
 * @author     David Annebicque
 * @project intranetv3
 * @date 7/12/19 11:23 AM
 * @lastUpdate 7/12/19 11:21 AM
 */

namespace App\Controller\administration;

use App\Controller\BaseController;
use App\Entity\AbsenceJustificatif;
use App\Entity\Constantes;
use App\Entity\Semestre;
use App\Events;
use App\MesClasses\MyExport;
use App\Repository\AbsenceJustificatifRepository;
use PhpOffice\PhpSpreadsheet\Exception;
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
     * @return Response
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
     * @return Response
     * @throws Exception
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
    public function delete(
        EventDispatcherInterface $eventDispatcher,
        Request $request,
        AbsenceJustificatif $absenceJustificatif
    ): Response {
        $id = $absenceJustificatif->getUuidString();
        if ($this->isCsrfTokenValid('delete' . $id, $request->request->get('_token'))) {


            $event = new GenericEvent($absenceJustificatif);
            $eventDispatcher->dispatch($event, Events::MAIL_DELETE_JUSTIFICATIF);
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
    public function accepte(
        EventDispatcherInterface $eventDispatcher,
        AbsenceJustificatif $absenceJustificatif,
        $etat
    ): Response {
        $absenceJustificatif->setEtat($etat);
        $this->entityManager->flush();

        if ($etat === 'A') {
            $event = new GenericEvent($absenceJustificatif);
            // Justification des absences
            $eventDispatcher->dispatch($event, Events::JUSTIFIE_ABSENCES);
            $this->addFlashBag(Constantes::FLASHBAG_SUCCESS, 'absence.justificatif.valide.success.flash');
        }

        if ($etat === 'A' || $etat === 'R') {
            $event = new GenericEvent($absenceJustificatif);
            $eventDispatcher->dispatch($event, Events::MAIL_DECISION_JUSTIFICATIF);
            $eventDispatcher->dispatch($event, Events::DECISION_JUSTIFICATIF);
        }

        return new Response('', Response::HTTP_OK);
    }
}
