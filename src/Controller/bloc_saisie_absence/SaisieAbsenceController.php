<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Controller/bloc_saisie_absence/SaisieAbsenceController.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 19/02/2021 15:28
 */

namespace App\Controller\bloc_saisie_absence;

use App\Classes\Etudiant\EtudiantAbsences;
use App\Classes\MyAbsences;
use App\Classes\Tools;
use App\Controller\BaseController;
use App\Entity\EdtPlanning;
use App\Entity\Etudiant;
use App\Entity\Matiere;
use App\Entity\Semestre;
use App\Repository\AbsenceRepository;
use App\Repository\MatiereRepository;
use App\Repository\TypeGroupeRepository;
use Carbon\Carbon;
use Carbon\CarbonInterface;
use Exception;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\IsGranted;
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
class SaisieAbsenceController extends BaseController
{
    private MyAbsences $myAbsences;

    /**
     * AbsenceController constructor.
     */
    public function __construct(MyAbsences $myAbsences)
    {
        $this->myAbsences = $myAbsences;
    }

    public function index(
        MatiereRepository $matiereRepository,
        TypeGroupeRepository $typeGroupeRepository,
        Semestre $semestre,
        Matiere $matiere = null,
        EdtPlanning $event = null
    ): Response {
        if (null !== $event) {
            $groupes = $typeGroupeRepository->findOneBy([
                'semestre' => $semestre->getId(),
                'type' => $event->getType(),
            ]);
        } else {
            $groupes = null;
        }

        return $this->render('bloc_saisie_absence/_saisie_absence.html.twig', [
            'matiere' => $matiere,
            'matieres' => $matiereRepository->findBySemestre($semestre),
            'typeGroupes' => $typeGroupeRepository->findBySemestre($semestre),
            'event' => $event,
            'groupes' => $groupes,
        ]);
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
     *
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
            'matiere' => $matiere->getId(),
            'etudiant' => $etudiant->getId(),
            'dateHeure' => $dateHeure,
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
