<?php
/*
 * Copyright (c) 2022. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Controller/bloc_saisie_absence/SaisieAbsenceController.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 16/12/2022 12:09
 */

namespace App\Controller\bloc_saisie_absence;

use App\Classes\Absences\AbsenceEtatAppel;
use App\Classes\Etudiant\EtudiantAbsences;
use App\Classes\Matieres\TypeMatiereManager;
use App\Controller\BaseController;
use App\DTO\EvenementEdt;
use App\DTO\Matiere;
use App\Entity\Etudiant;
use App\Entity\Semestre;
use App\Repository\AbsenceEtatAppelRepository;
use App\Repository\AbsenceRepository;
use App\Repository\TypeGroupeRepository;
use App\Utils\Tools;
use Carbon\Carbon;
use Carbon\CarbonInterface;
use Symfony\Component\Security\Http\Attribute\IsGranted;
use function count;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

#[Route(path: '/application/personnel/absence/ajax')]
#[IsGranted('ROLE_PERMANENT')]
class SaisieAbsenceController extends BaseController
{
    public function index(
        TypeMatiereManager $typeMatiereManager,
        TypeGroupeRepository $typeGroupeRepository,
        Semestre $semestre,
        ?Matiere $matiere = null,
        ?EvenementEdt $event = null
    ): Response {
        if (null !== $event) {
            $groupes = $typeGroupeRepository->findOneBy([
                'ordreSemestre' => $semestre->getOrdreLmd(),
                'diplome' => null === $semestre->getDiplome()->getParent() ? $semestre->getDiplome()->getId() : $semestre->getDiplome()->getParent()->getId(),
                'type' => $event->type_cours,
            ]);
        } else {
            $groupes = null;
        }

        if (true === $semestre->getDiplome()?->isApc()) {
            $matieres = $typeMatiereManager->findBySemestreAndReferentiel($semestre, $semestre->getDiplome()?->getReferentiel());
        } else {
            $matieres = $typeMatiereManager->findBySemestre($semestre); // todo: devrait être géré par le manager ?
        }

        $typeGroupes = $semestre->getTypeGroupess();


        return $this->render('bloc_saisie_absence/_saisie_absence.html.twig', [
            'matiere' => $matiere,
            'semestre' => $semestre,
            'matieres' => $matieres,
            'typeGroupes' => $typeGroupes,
            'event' => $event,
            'groupes' => $groupes,
            'options' => [
                'data-options' => [
                    'dateFormat' => 'd/m/Y',
                ],
            ],
        ]);
    }

    #[Route(path: '/saisie/{matiere}/{etudiant}', name: 'application_personnel_absence_saisie_ajax', options: ['expose' => true], methods: 'POST')]
    public function ajaxSaisie(
        TypeMatiereManager $typeMatiereManager,
        EtudiantAbsences   $etudiantAbsences,
        AbsenceRepository  $absenceRepository,
        Request            $request, string $matiere,
        Etudiant           $etudiant): JsonResponse|Response
    {
        // todo: dupliqué avec app et Admin??
        $mat = $typeMatiereManager->getMatiereFromSelect($matiere);
        $semestre = $etudiant->getSemestre();
        if (null !== $mat && null !== $semestre) {
            $dateHeure = Tools::convertDateHeureToObject($request->request->get('date'),
                $request->request->get('heure'));
            $absence = $absenceRepository->findBy([
                'idMatiere' => $mat->id,
                'typeMatiere' => $mat->typeMatiere,
                'etudiant' => $etudiant->getId(),
                'dateHeure' => $dateHeure,
                'anneeUniversitaire' => $etudiant->getSemestre() ? $etudiant->getSemestre()->getAnneeUniversitaire()->getId() : 0,
            ]);

            if ('saisie' === $request->get('action') && 0 === count($absence)) {
                if ($this->saisieAutorise($semestre->getOptNbJoursSaisieAbsence(), $dateHeure)) {
                    $etudiantAbsences->setEtudiant($etudiant);
                    $etudiantAbsences->addAbsence(
                        $dateHeure,
                        $mat,
                        $this->getUser(),
                        false,
                        $request->request->get('duree')
                    );

                    $absences = $absenceRepository->getByMatiereArray(
                        $mat,
                        $this->getAnneeUniversitaire()
                    );

                    return $this->json($absences);
                }

                return new response('out', Response::HTTP_INTERNAL_SERVER_ERROR);
            }

            if (1 === count($absence)) {
                // un tableau, donc une absence ?
                $etudiantAbsences->removeAbsence($absence[0]);

                $absences = $absenceRepository->getByMatiereArray(
                    $mat,
                    $this->getAnneeUniversitaire()
                );

                return $this->json($absences);
            }
        }

        return new response('nok', Response::HTTP_INTERNAL_SERVER_ERROR);
    }

    private function saisieAutorise(int $nbjour, CarbonInterface $datesymfony): bool
    {
        return 0 === $nbjour || $datesymfony->diffInDays(Carbon::now()) <= $nbjour;
    }
}
