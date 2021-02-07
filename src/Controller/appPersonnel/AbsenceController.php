<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Controller/appPersonnel/AbsenceController.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 07/02/2021 11:20
 */

namespace App\Controller\appPersonnel;

use App\Classes\Etudiant\EtudiantAbsences;
use App\Classes\MyAbsences;
use App\Classes\MyGroupes;
use App\Classes\Tools;
use App\Controller\BaseController;
use App\Entity\Absence;
use App\Entity\Constantes;
use App\Entity\Etudiant;
use App\Entity\Matiere;
use App\Repository\AbsenceRepository;
use App\Repository\CelcatEventsRepository;
use App\Repository\EdtPlanningRepository;
use App\Repository\MatiereRepository;
use Carbon\Carbon;
use Carbon\CarbonInterface;
use Exception;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\IsGranted;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\ParamConverter;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

/**
 * Class AbsenceController.
 *
 * @Route("/application/personnel/absence")
 * @IsGranted("ROLE_PERMANENT")
 */
class AbsenceController extends BaseController
{
    private MyAbsences $myAbsences;

    /**
     * AbsenceController constructor.
     */
    public function __construct(MyAbsences $myAbsences)
    {
        $this->myAbsences = $myAbsences;
    }

    /**
     * @Route("/{matiere}", name="application_personnel_absence_index", requirements={"matiere"="\d+"}, methods={"GET"})
     */
    public function index(
        Matiere $matiere
    ): Response {
        $semestre = $matiere->getSemestre();

        if (null !== $semestre) {
            return $this->render('appPersonnel/absence/index.html.twig', [
                'semestre' => $semestre,
                'matiere'  => $matiere,
            ]);
        }

        return $this->redirectToRoute('erreur_666');
    }

    /**
     * @Route("/edt/{event}", name="application_personnel_absence_from_planning", requirements={"event"="\d+"},
     *                        methods={"GET"})
     *
     * @param $event
     */
    public function saisieFromEdt(
        MatiereRepository $matiereRepository,
        EdtPlanningRepository $edtPlanningRepository,
        CelcatEventsRepository $celcatEventsRepository,
        MyGroupes $myGroupes,
        $event
    ): Response {
        if (null !== $this->dataUserSession->getDepartement() && true === $this->dataUserSession->getDepartement()->isOptUpdateCelcat()) {
            $planning = $celcatEventsRepository->find($event);
            $matiere = null !== $planning ? $matiereRepository->findOneBy(['codeElement' => $planning->getCodeModule()]) : null;
        } else {
            $planning = $edtPlanningRepository->find($event);
            $matiere = null !== $planning ? $planning->getMatiere() : null;
        }

        if (null !== $planning) {
            return $this->render('appPersonnel/absence/index.html.twig', [
                'semestre' => null !== $matiere ? $matiere->getSemestre() : null,
                'matiere'  => $matiere,
                'event'    => $planning,
                'groupes'  => $myGroupes->getGroupesPlanning($planning),
                'heure'    => Constantes::TAB_HEURES[$planning->getDebut()],
                'date'     => $planning->getDate(),
            ]);
        }

        return $this->redirectToRoute('erreur_666');
    }

    /**
     * @Route("/voir/{matiere}", name="application_personnel_absence_voir", requirements={"matiere"="\d+"})
     */
    public function voir(Matiere $matiere): Response
    {
        return $this->render('appPersonnel/absence/voir.html.twig', [
            'matiere'  => $matiere,
            'absences' => $this->myAbsences->getAbsencesMatiere(
                $matiere,
                $matiere->getSemestre() ? $matiere->getSemestre()->getAnneeUniversitaire() : 0
            ),
        ]);
    }

    /**
     * @Route("/export/{matiere}/export.{_format}", name="application_personnel_absence_export", methods="GET")
     *
     * @param $_format
     *
     * @return Response
     */
    public function export(Matiere $matiere, $_format): ?Response
    {
        return $this->myAbsences->export($matiere, $matiere->getSemestre()->getAnneeUniversitaire(), $_format);
    }

    /**
     * @Route("/{uuid}", name="application_personnel_absence_delete", methods="DELETE")
     *
     * @ParamConverter("absence", options={"mapping": {"uuid": "uuid"}})
     */
    public function supprimer(EtudiantAbsences $etudiantAbsences, Request $request, Absence $absence): Response
    {
        $id = $absence->getUuidString();
        if ($this->isCsrfTokenValid('delete' . $id, $request->request->get('_token'))) {
            $etudiantAbsences->removeAbsence($absence);
            $this->addFlashBag(Constantes::FLASHBAG_SUCCESS, 'absence.delete.success.flash');

            return $this->json($id, Response::HTTP_OK);
        }

        $this->addFlashBag(Constantes::FLASHBAG_ERROR, 'absence.delete.error.flash');

        return $this->json(false, Response::HTTP_INTERNAL_SERVER_ERROR);
    }

    /**
     * @Route("/ajax/absences/{matiere}", name="application_personnel_absence_get_ajax", methods="GET",
     *                                    options={"expose":true})
     */
    public function ajaxGetAbsencesMatiere(
        AbsenceRepository $absenceRepository,
        Matiere $matiere
    ): JsonResponse {
        $absences = $absenceRepository->getByMatiereArray(
            $matiere,
            $matiere->getSemestre() ? $matiere->getSemestre()->getAnneeUniversitaire() : null
        );

        return $this->json($absences);
    }

    /**
     * @Route("/ajax/saisie/{matiere}/{etudiant}", name="application_personnel_absence_saisie_ajax", methods="POST",
     *                                             options={"expose":true})
     *
     * @return JsonResponse|Response
     * @throws Exception
     *
     */
    public function ajaxSaisie(
        EtudiantAbsences $etudiantAbsences,
        AbsenceRepository $absenceRepository,
        Request $request,
        Matiere $matiere,
        Etudiant $etudiant
    ) {
        $dateHeure = Tools::convertDateHeureToObject($request->request->get('date'), $request->request->get('heure'));
        $absence = $absenceRepository->findBy([
            'matiere'            => $matiere->getId(),
            'etudiant'           => $etudiant->getId(),
            'dateHeure'          => $dateHeure,
            'anneeUniversitaire' => $etudiant->getSemestre() ? $etudiant->getSemestre()->getAnneeUniversitaire()->getId() : 0,
        ]);

        if ('saisie' === $request->get('action') && 0 === \count($absence)) {
            if ($this->saisieAutorise($matiere->getSemestre()->getOptNbJoursSaisieAbsence(), $dateHeure)) {
                $etudiantAbsences->setEtudiant($etudiant);

                $etudiantAbsences->addAbsence(
                    $dateHeure,
                    $matiere,
                    $this->getConnectedUser()
                );

                $absences = $absenceRepository->getByMatiereArray(
                    $matiere,
                    $matiere->getSemestre() ? $matiere->getSemestre()->getAnneeUniversitaire() : null
                );

                return $this->json($absences);
            }

            return new response('out', 500);
        }

        if (1 === \count($absence)) {
            //un tableau, donc une absence ?
            $etudiantAbsences->removeAbsence($absence[0]);

            $absences = $absenceRepository->getByMatiereArray(
                $matiere,
                $matiere->getSemestre()->getAnneeUniversitaire()
            );

            return $this->json($absences);
        }

        return new response('nok', 500);
    }

    /**
     * @param $nbjour
     */
    private function saisieAutorise($nbjour, CarbonInterface $datesymfony): bool
    {
        return 0 === $nbjour ? true : ($datesymfony->diffInDays(Carbon::now()) <= $nbjour);
    }
}
