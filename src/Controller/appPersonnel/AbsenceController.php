<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Controller/appPersonnel/AbsenceController.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 11/05/2021 21:40
 */

namespace App\Controller\appPersonnel;

use App\Classes\Etudiant\EtudiantAbsences;
use App\Classes\Matieres\TypeMatiereManager;
use App\Classes\MyAbsences;
use App\Classes\MyGroupes;
use App\Controller\BaseController;
use App\Entity\Absence;
use App\Entity\Constantes;
use App\Entity\Etudiant;
use App\Exception\MatiereNotFoundException;
use App\Repository\AbsenceRepository;
use App\Repository\CelcatEventsRepository;
use App\Repository\EdtPlanningRepository;
use App\Utils\Tools;
use Carbon\Carbon;
use Carbon\CarbonInterface;
use function count;
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
     * @Route("/{matiere}", name="application_personnel_absence_index", methods={"GET"})
     */
    public function index(
        TypeMatiereManager $typeMatiereManager,
        string $matiere
    ): Response {
        $mat = $typeMatiereManager->getMatiereFromSelect($matiere);
        if (null !== $mat && null !== $mat->semestre) {
            return $this->render('appPersonnel/absence/index.html.twig', [
                'semestre' => $mat->semestre,
                'matiere' => $mat,
            ]);
        }

        throw new MatiereNotFoundException(); //todo: a tester
    }

    /**
     * @Route("/edt/{event}", name="application_personnel_absence_from_planning", requirements={"event"="\d+"},
     *                        methods={"GET"})
     */
    public function saisieFromEdt(
        TypeMatiereManager $typeMatiereManager,
        EdtPlanningRepository $edtPlanningRepository,
        CelcatEventsRepository $celcatEventsRepository,
        MyGroupes $myGroupes,
        $event
    ): Response {
        if (null !== $this->dataUserSession->getDepartement() && true === $this->dataUserSession->getDepartement()->isOptUpdateCelcat()) {
            $planning = $celcatEventsRepository->find($event);
            $matiere = null !== $planning ? $typeMatiereManager->findByCodeApogee($planning->getCodeModule()) : null;
        } else {
            $planning = $edtPlanningRepository->find($event);
            $matiere = null !== $planning ? $typeMatiereManager->getMatiere($planning->getIdMatiere(),
                $planning->getTypeMatiere()) : null;
        }

        if (null !== $planning) {
            return $this->render('appPersonnel/absence/index.html.twig', [
                'semestre' => null !== $matiere ? $matiere->semestre : null,
                'matiere' => $matiere,
                'event' => $planning,
                'groupes' => $myGroupes->getGroupesPlanning($planning),
                'heure' => Constantes::TAB_HEURES[$planning->getDebut()],
                'date' => $planning->getDate(),
            ]);
        }

        return $this->redirectToRoute('erreur_666');
    }

    /**
     * @Route("/voir/{matiere}", name="application_personnel_absence_voir")
     */
    public function voir(TypeMatiereManager $typeMatiereManager, string $matiere): Response
    {
        $mat = $typeMatiereManager->getMatiereFromSelect($matiere);
        if (null === $mat) {
            throw new MatiereNotFoundException();
        }

        return $this->render('appPersonnel/absence/voir.html.twig', [
            'matiere' => $mat,
            'absences' => $this->myAbsences->getAbsencesMatiere(
                $mat,
                (null !== $mat->semestre) ? $mat->semestre->getAnneeUniversitaire() : 0
            ),
        ]);
    }

    /**
     * @Route("/export/{matiere}/export.{_format}", name="application_personnel_absence_export", methods="GET")
     *
     * @return Response
     */
    public function export(TypeMatiereManager $typeMatiereManager, string $matiere, $_format): ?Response
    {
        $mat = $typeMatiereManager->getMatiereFromSelect($matiere);
        if (null === $mat) {
            throw new MatiereNotFoundException();
        }

        return $this->myAbsences->export($mat, $mat->semestre->getAnneeUniversitaire(), $_format);
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
        TypeMatiereManager $typeMatiereManager,
        AbsenceRepository $absenceRepository,
        string $matiere
    ): JsonResponse {
        $mat = $typeMatiereManager->getMatiereFromSelect($matiere);
        if (null !== $mat) {
            $absences = $absenceRepository->getByMatiereArray(
                $mat,
                $mat->semestre ? $mat->semestre->getAnneeUniversitaire() : null
            );

            return $this->json($absences);
        }

        return $this->json(null);
    }

    /**
     * @Route("/ajax/saisie/{matiere}/{etudiant}", name="application_personnel_absence_saisie_ajax", methods="POST",
     *                                             options={"expose":true})
     *
     * @return JsonResponse|Response
     *
     * @throws Exception
     */
    public function ajaxSaisie(
        TypeMatiereManager $typeMatiereManager,
        EtudiantAbsences $etudiantAbsences,
        AbsenceRepository $absenceRepository,
        Request $request,
        string $matiere,
        Etudiant $etudiant
    ) {
        $dateHeure = Tools::convertDateHeureToObject($request->request->get('date'), $request->request->get('heure'));
        $mat = $typeMatiereManager->getMatiereFromSelect($matiere);
        $absence = $absenceRepository->findBy([
            'matiere' => $matiere,
            'etudiant' => $etudiant->getId(),
            'dateHeure' => $dateHeure,
            'anneeUniversitaire' => $etudiant->getSemestre() ? $etudiant->getSemestre()->getAnneeUniversitaire()->getId() : 0,
        ]);

        if (null !== $mat && 'saisie' === $request->get('action') && 0 === count($absence)) {
            if ($this->saisieAutorise($mat->semestre->getOptNbJoursSaisieAbsence(), $dateHeure)) {
                $etudiantAbsences->setEtudiant($etudiant);

                $etudiantAbsences->addAbsence(
                    $dateHeure,
                    $mat,
                    $this->getConnectedUser()
                );

                $absences = $absenceRepository->getByMatiereArray(
                    $mat,
                    $mat->semestre ? $mat->semestre->getAnneeUniversitaire() : null
                );

                return $this->json($absences);
            }

            return new response('out', 500);
        }

        if (1 === count($absence)) {
            //un tableau, donc une absence ?
            $etudiantAbsences->removeAbsence($absence[0]);

            $absences = $absenceRepository->getByMatiereArray(
                $mat,
                $mat->semestre->getAnneeUniversitaire()
            );

            return $this->json($absences);
        }

        return new response('nok', 500);
    }

    private function saisieAutorise(int $nbjour, CarbonInterface $datesymfony): bool
    {
        return 0 === $nbjour ? true : ($datesymfony->diffInDays(Carbon::now()) <= $nbjour);
    }
}
