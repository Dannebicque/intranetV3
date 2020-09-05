<?php
// Copyright (c) 2020. | David Annebicque | IUT de Troyes  - All Rights Reserved
// @file /Users/davidannebicque/htdocs/intranetV3/src/Controller/appPersonnel/AbsenceController.php
// @author davidannebicque
// @project intranetV3
// @lastUpdate 05/09/2020 14:31

namespace App\Controller\appPersonnel;

use App\Classes\Etudiant\EtudiantAbsences;
use App\Controller\BaseController;
use App\Entity\Absence;
use App\Entity\Constantes;
use App\Entity\Etudiant;
use App\Entity\Matiere;
use App\Classes\MyAbsences;
use App\Classes\MyGroupes;
use App\Classes\Tools;
use App\Repository\AbsenceRepository;
use App\Repository\CalendrierRepository;
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
use function count;

/**
 * Class AbsenceController
 * @package App\Controller
 * @Route("/application/personnel/absence")
 * @IsGranted("ROLE_PERMANENT")
 */
class AbsenceController extends BaseController
{
    private MyAbsences $myAbsences;

    /**
     * AbsenceController constructor.
     *
     * @param MyAbsences $myAbsences
     */
    public function __construct(MyAbsences $myAbsences)
    {
        $this->myAbsences = $myAbsences;
    }

    /**
     * @Route("/{matiere}", name="application_personnel_absence_index", requirements={"matiere"="\d+"}, methods={"GET"})
     * @param Matiere              $matiere
     *
     * @return Response
     */
    public function index(
        Matiere $matiere
    ): Response {
        $semestre = $matiere->getSemestre();

        if ($semestre !== null) {
            return $this->render('appPersonnel/absence/index.html.twig', [
                'semestre' => $semestre,
                'matiere'  => $matiere
            ]);
        }

        return $this->redirectToRoute('erreur_666');
    }

    /**
     * @Route("/edt/{event}", name="application_personnel_absence_from_planning", requirements={"event"="\d+"},
     *                        methods={"GET"})
     *
     * @param MatiereRepository      $matiereRepository
     * @param CalendrierRepository   $calendrierRepository
     * @param EdtPlanningRepository  $edtPlanningRepository
     * @param CelcatEventsRepository $celcatEventsRepository
     * @param MyGroupes              $myGroupes
     * @param                        $event
     *
     * @return Response
     */
    public function saisieFromEdt(
        MatiereRepository $matiereRepository,
        CalendrierRepository $calendrierRepository,
        EdtPlanningRepository $edtPlanningRepository,
        CelcatEventsRepository $celcatEventsRepository,
        MyGroupes $myGroupes,
        $event
    ): Response {

        if ($this->dataUserSession->getDepartement() !== null && $this->dataUserSession->getDepartement()->isOptUpdateCelcat() === true) {
            $planning = $celcatEventsRepository->find($event);
            $matiere = $planning !== null ? $matiereRepository->findOneBy(['codeElement' => $planning->getCodeModule()]) : null;
        } else {
            $planning = $edtPlanningRepository->find($event);
            $matiere = $planning !== null ? $planning->getMatiere() : null;
        }

        if ($planning !== null) {
//            $semaine = $calendrierRepository->findOneBy(['semaineFormation' => $planning->getSemaine()]);

            return $this->render('appPersonnel/absence/index.html.twig', [
                'semestre' => $matiere !== null ? $matiere->getSemestre() : null,
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
     * @Route("/saisie/{matiere}", name="application_personnel_absence_voir", requirements={"matiere"="\d+"})
     * @param Matiere $matiere
     *
     * @return Response
     */
    public function voir(Matiere $matiere): Response
    {
        return $this->render('appPersonnel/absence/voir.html.twig', [
            'matiere'  => $matiere,
            'absences' => $this->myAbsences->getAbsencesMatiere(
                $matiere,
                $matiere->getSemestre() ? $matiere->getSemestre()->getAnneeUniversitaire() : 0
            )
        ]);
    }

    /**
     * @Route("/export/{matiere}/export.{_format}", name="application_personnel_absence_export", methods="GET")
     * @param Matiere $matiere
     *
     * @param         $_format
     *
     * @return Response
     */
    public function export(Matiere $matiere, $_format): ?Response
    {
        return $this->myAbsences->export($matiere, $matiere->getSemestre()->getAnneeUniversitaire(), $_format);
    }

    /**
     * @Route("/{uuid}", name="application_personnel_absence_delete", methods="DELETE")
     * @param EtudiantAbsences $etudiantAbsences
     * @param Request          $request
     * @param Absence          $absence
     *
     * @return Response
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
     * @param AbsenceRepository $absenceRepository
     * @param Matiere           $matiere
     *
     * @return JsonResponse
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
     * @param EtudiantAbsences  $etudiantAbsences
     * @param AbsenceRepository $absenceRepository
     * @param Request           $request
     * @param Matiere           $matiere
     * @param Etudiant          $etudiant
     *
     * @return JsonResponse|Response
     * @throws Exception
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
            'anneeUniversitaire' => $etudiant->getSemestre() ? $etudiant->getSemestre()->getAnneeUniversitaire()->getId() : 0
        ]);

        if ($request->get('action') === 'saisie' && count($absence) === 0) {
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

        if (count($absence) === 1) {


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
     * @param                 $nbjour
     *
     * @param CarbonInterface $datesymfony
     *
     * @return bool
     */
    private function saisieAutorise($nbjour, CarbonInterface $datesymfony): bool
    {
        return $nbjour === 0 ? true : ($datesymfony->diffInDays(Carbon::now()) <= $nbjour);
    }
}
