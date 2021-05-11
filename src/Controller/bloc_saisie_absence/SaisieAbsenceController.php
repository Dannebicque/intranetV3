<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Controller/bloc_saisie_absence/SaisieAbsenceController.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 08/05/2021 19:49
 */

namespace App\Controller\bloc_saisie_absence;

use App\Classes\Etudiant\EtudiantAbsences;
use App\Classes\Matieres\TypeMatiereManager;
use App\Controller\BaseController;
use App\Entity\EdtPlanning;
use App\Entity\Etudiant;
use App\Entity\Semestre;
use App\Repository\AbsenceRepository;
use App\Repository\TypeGroupeRepository;
use App\Utils\Tools;
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
    public function index(
        TypeMatiereManager $typeMatiereManager,
        TypeGroupeRepository $typeGroupeRepository,
        Semestre $semestre,
        string $matiere = null,
        EdtPlanning $event = null
    ): Response {
        $mat = $typeMatiereManager->getMatiereFromSelect($matiere);
        if (null !== $event) {
            $groupes = $typeGroupeRepository->findOneBy([
                'semestre' => $semestre->getId(),
                'type' => $event->getType(),
            ]);
        } else {
            $groupes = null;
        }

        return $this->render('bloc_saisie_absence/_saisie_absence.html.twig', [
            'matiere' => $mat,
            'matieres' => $typeMatiereManager->findBySemestre($semestre),
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
        $mat = $typeMatiereManager->getMatiereFromSelect($matiere);
        if (null !== $mat) {
            $dateHeure = Tools::convertDateHeureToObject($request->request->get('date'),
                $request->request->get('heure'));
            $absence = $absenceRepository->findBy([
                'idMatiere' => $mat->id,
                'typeMatiere' => $mat->typeMatiere,
                'etudiant' => $etudiant->getId(),
                'dateHeure' => $dateHeure,
                'anneeUniversitaire' => $etudiant->getSemestre() ? $etudiant->getSemestre()->getAnneeUniversitaire()->getId() : 0,
            ]);

            if ('saisie' === $request->get('action') && 0 === \count($absence)) {
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

            if (1 === \count($absence)) {
                //un tableau, donc une absence ?
                $etudiantAbsences->removeAbsence($absence[0]);

                $absences = $absenceRepository->getByMatiereArray(
                    $mat,
                    $mat->semestre->getAnneeUniversitaire()
                );

                return $this->json($absences);
            }
        }

        return new response('nok', 500);
    }

    private function saisieAutorise(int $nbjour, CarbonInterface $datesymfony): bool
    {
        return 0 === $nbjour || $datesymfony->diffInDays(Carbon::now()) <= $nbjour;
    }
}
