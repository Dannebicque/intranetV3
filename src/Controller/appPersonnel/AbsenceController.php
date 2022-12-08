<?php
/*
 * Copyright (c) 2022. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Controller/appPersonnel/AbsenceController.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 18/11/2022 08:54
 */

namespace App\Controller\appPersonnel;

use App\Classes\Edt\EdtManager;
use App\Classes\Etudiant\EtudiantAbsences;
use App\Classes\Matieres\TypeMatiereManager;
use App\Classes\MyAbsences;
use App\Classes\MyGroupes;
use App\Controller\BaseController;
use App\Entity\Absence;
use App\Entity\AbsenceEtatAppel;
use App\Entity\Constantes;
use App\Entity\Semestre;
use App\Exception\MatiereNotFoundException;
use App\Repository\AbsenceRepository;
use App\Repository\GroupeRepository;
use App\Repository\SemestreRepository;
use App\Utils\JsonRequest;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\IsGranted;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\ParamConverter;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

#[Route('/application/personnel/absence')]
#[IsGranted('ROLE_PERMANENT')]
class AbsenceController extends BaseController
{
    public function __construct(private readonly MyAbsences $myAbsences)
    {
    }

    /**
     * @throws \App\Exception\MatiereNotFoundException
     */
    #[Route('/matiere/{matiere}/{semestre}', name: 'application_personnel_absence_index', methods: ['GET'])]
    public function index(
        TypeMatiereManager $typeMatiereManager,
        string $matiere,
        Semestre $semestre
    ): Response {
        $mat = $typeMatiereManager->getMatiereFromSelect($matiere);

        if (null === $mat) {
            throw new MatiereNotFoundException();
        }

        $this->denyAccessUnlessGranted('CAN_ADD_ABSENCE', ['matiere' => $mat, 'semestre' => $semestre]);

        return $this->render('appPersonnel/absence/index.html.twig', [
            'semestre' => $semestre,
            'matiere' => $mat,
        ]);
    }

    /**
     * @throws \App\Exception\MatiereNotFoundException
     * @throws \App\Exception\SemestreNotFoundException
     */
    #[Route('/edt/{event}/{source}/{semestre}',
        name: 'application_personnel_absence_from_planning',
        requirements: ['event' => "\d+"],
        methods: ['GET'])]
    public function saisieFromEdt(
        GroupeRepository $groupeRepository,
        TypeMatiereManager $typeMatiereManager,
        EdtManager $edtManager,
        MyGroupes $myGroupes,
        $event,
        string $source = EdtManager::EDT_INTRANET,
        Semestre $semestre
    ): Response {
        if ($semestre->getDiplome()->isApc()) {
            $groupes = $groupeRepository->findByDiplomeAndOrdreSemestre($semestre->getDiplome(), $semestre->getOrdreLmd());
            $matieres = $typeMatiereManager->findBySemestreAndReferentiel($semestre, $semestre->getDiplome()->getReferentiel());
        } else {
            $groupes = $groupeRepository->findBySemestre($semestre);
            $matieres = $typeMatiereManager->findBySemestreArray($semestre);
        }

        $planning = $edtManager->getManager($source)?->find($event, $edtManager->transformeMatieres($semestre, $matieres), $edtManager->transformeGroupe($semestre, $groupes));
        $matiere = $typeMatiereManager->getMatiereFromSelect($planning->typeIdMatiere);

        if (null === $matiere) {
            throw new MatiereNotFoundException();
        }

        $this->denyAccessUnlessGranted('CAN_ADD_ABSENCE', ['matiere' => $matiere, 'semestre' => $matiere->getSemestres()[0]]);
        if (null !== $planning) {
            return $this->render('appPersonnel/absence/index.html.twig', [
                'semestre' => $matiere->getSemestres()[0],
                'matiere' => $matiere,
                'event' => $planning,
                'groupes' => $myGroupes->getGroupesSemestre($planning->ordreSemestre,
                    $semestre->getDiplome(), $planning->type_cours),
                'heure' => $planning->heureDebut,
                'date' => $planning->dateObjet,
            ]);
        }

        return $this->redirectToRoute('erreur_666');
    }

    /**
     * @throws \App\Exception\MatiereNotFoundException
     */
    #[Route('/voir/{matiere}/{semestre}', name: 'application_personnel_absence_voir')]
    public function voir(TypeMatiereManager $typeMatiereManager, string $matiere, Semestre $semestre): Response
    {
        $mat = $typeMatiereManager->getMatiereFromSelect($matiere);

        if (null === $mat) {
            throw new MatiereNotFoundException();
        }
        $this->denyAccessUnlessGranted('CAN_ADD_ABSENCE', ['matiere' => $mat, 'semestre' => $semestre]);

        return $this->render('appPersonnel/absence/voir.html.twig', [
            'matiere' => $mat,
            'semestre' => $semestre,
            'absences' => $this->myAbsences->getAbsencesMatiere(
                $mat,
                $semestre->getAnneeUniversitaire()
            ),
        ]);
    }

    /**
     * @throws \JsonException
     */
    #[Route('/ajax/pas-absent/', name: 'application_personnel_absence_ajax_pas_absent', options: ['expose' => true], methods: ['POST'])]
    public function pasAbsentEvent(
        Request $request,
        \App\Classes\Absences\AbsenceEtatAppel $absenceEtatAppel,
        SemestreRepository $semestreRepository,
        GroupeRepository $groupeRepository,
        TypeMatiereManager $typeMatiereManager,
        EdtManager $edtManager
    ): JsonResponse {
        // todo: vérifier si autorisé, vérifié si pas déjà présent
        $idEvent = JsonRequest::getFromRequest($request)['event'];
        $idSemestre = JsonRequest::getFromRequest($request)['semestre'];

        $semestre = $semestreRepository->find($idSemestre);
        if (null !== $semestre) {
            if ($semestre->getDiplome()->isApc()) {
                $groupes = $groupeRepository->findByDiplomeAndOrdreSemestre($semestre->getDiplome(), $semestre->getOrdreLmd());
                $matieres = $typeMatiereManager->findBySemestreAndReferentiel($semestre, $semestre->getDiplome()->getReferentiel());
            } else {
                $groupes = $groupeRepository->findBySemestre($semestre);
                $matieres = $typeMatiereManager->findBySemestreArray($semestre);
            }

            $event = $edtManager->getEvent($idEvent, $edtManager->transformeMatieres($semestre, $matieres), $edtManager->transformeGroupe($semestre, $groupes));

            if (null !== $event) {
                $absenceEtatAppel->enregistreAppelFait([
                    'personnel' => $event->personnelObjet ?? $this->getUser(),
                    'groupe' => $event->groupeObjet,
                    'date' => $event->dateObjet->format('d/m/Y'),
                    'heure' => $event->heureDebut->format('H:i'),
                    'matiere' => $event->typeIdMatiere,
                    'semestre' => $semestre->getId(),
                    'type_saisie' => AbsenceEtatAppel::SAISIE_SANS_ABSENT,
                ]);

                return $this->json(true);
            }
        }

        return $this->json(false);
    }

    /**
     * @throws \App\Exception\MatiereNotFoundException
     */
    #[Route('/export/{matiere}/{semestre}/export.{_format}', name: 'application_personnel_absence_export', methods: ['GET'])]
    public function export(
        TypeMatiereManager $typeMatiereManager,
        string $matiere,
        Semestre $semestre,
        string $_format
    ): ?Response {
        $mat = $typeMatiereManager->getMatiereFromSelect($matiere);
        if (null === $mat) {
            throw new MatiereNotFoundException();
        }

        return $this->myAbsences->export($mat, $mat->semestre->getAnneeUniversitaire(), $semestre, $_format);
    }

    #[Route(path: '/{uuid}', name: 'application_personnel_absence_delete', methods: 'DELETE')]
    #[ParamConverter('absence', options: ['mapping' => ['uuid' => 'uuid']])]
    public function supprimer(EtudiantAbsences $etudiantAbsences, Request $request, Absence $absence): Response
    {
        // todo: tester...
        $id = $absence->getUuidString();
        if ($this->isCsrfTokenValid('delete'.$id, $request->server->get('HTTP_X_CSRF_TOKEN'))) {
            $etudiantAbsences->removeAbsence($absence);
            $this->addFlashBag(Constantes::FLASHBAG_SUCCESS, 'absence.delete.success.flash');

            return $this->json($id, Response::HTTP_OK);
        }
        $this->addFlashBag(Constantes::FLASHBAG_ERROR, 'absence.delete.error.flash');

        return $this->json(false, Response::HTTP_INTERNAL_SERVER_ERROR);
    }

    #[Route(path: '/ajax/absences/{matiere}', name: 'application_personnel_absence_get_ajax', options: ['expose' => true], methods: 'GET')]
    public function ajaxGetAbsencesMatiere(
        TypeMatiereManager $typeMatiereManager,
        AbsenceRepository $absenceRepository,
        string $matiere
    ): JsonResponse {
        $mat = $typeMatiereManager->getMatiereFromSelect($matiere);
        // $this->denyAccessUnlessGranted('CAN_ADD_ABSENCE', ['matiere' => $mat, 'semestre' => $semestre]);//todo: comment passer le semestre au JS.
        if (null !== $mat) {
            $absences = $absenceRepository->getByMatiereArray(
                $mat,
                $this->getAnneeUniversitaire() // todo: ?? $mat->semestre?->getAnneeUniversitaire() equivalent ?
            );

            return $this->json($absences);
        }

        return $this->json(null);
    }
}
