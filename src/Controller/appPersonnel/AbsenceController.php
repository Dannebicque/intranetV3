<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Controller/appPersonnel/AbsenceController.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 25/10/2021 15:12
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
use App\Entity\Etudiant;
use App\Entity\Semestre;
use App\Exception\MatiereNotFoundException;
use App\Exception\SemestreNotFoundException;
use App\Repository\AbsenceRepository;
use App\Utils\JsonRequest;
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
    #[Route('/edt/{event}/{source}',
        name: 'application_personnel_absence_from_planning',
        requirements: ['event' => "\d+"],
        methods: ['GET'])]
    public function saisieFromEdt(
        TypeMatiereManager $typeMatiereManager,
        EdtManager $edtManager,
        MyGroupes $myGroupes,
        $event,
        string $source = EdtManager::EDT_INTRANET
    ): Response {
        $planning = $edtManager->getManager($source)?->find($event);
        $matiere = $typeMatiereManager->findByCodeApogeeOrId($planning);

        if (null === $matiere) {
            throw new MatiereNotFoundException();
        }
        $this->denyAccessUnlessGranted('CAN_ADD_ABSENCE', ['matiere' => $matiere, 'semestre' => $planning->semestre]);
        if (null !== $planning) {
            return $this->render('appPersonnel/absence/index.html.twig', [
                'semestre' => $matiere?->semestre,
                'matiere' => $matiere,
                'event' => $planning,
                'groupes' => $myGroupes->getGroupesSemestre($planning->semestre ?? $matiere->semestre,
                    $planning->type_cours),
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
        $this->denyAccessUnlessGranted('CAN_ADD_ABSENCE', ['matiere' => $matiere, 'semestre' => $semestre]);

        return $this->render('appPersonnel/absence/voir.html.twig', [
            'matiere' => $mat,
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
    public function pasAbsentEvent(Request $request, EdtManager $edtManager): JsonResponse
    {
        //todo: vérifier si autorisé, vérifié si pas déjà présent
        $idEvent = JsonRequest::getFromRequest($request)['event'];
        $event = $edtManager->getEvent($idEvent);
        $appelFait = new AbsenceEtatAppel();
        $appelFait->setEvent($event, AbsenceEtatAppel::SAISIE_SANS_ABSENT);

        return $this->json(true);
    }

    /**
     * @throws \App\Exception\MatiereNotFoundException
     */
    #[Route('/export/{matiere}/{semestre}/export.{_format}', name: 'application_personnel_absence_export', methods: ['GET'])]
    public function export(TypeMatiereManager $typeMatiereManager, string $matiere, Semestre $semestre, $_format): ?Response
    {
        $mat = $typeMatiereManager->getMatiereFromSelect($matiere);
        if (null === $mat) {
            throw new MatiereNotFoundException();
        }

        return $this->myAbsences->export($mat, $mat->semestre->getAnneeUniversitaire(), $semestre, $_format);
    }

    /**
     * @ParamConverter("absence", options={"mapping": {"uuid": "uuid"}})
     */
    #[Route(path: '/{uuid}', name: 'application_personnel_absence_delete', methods: 'DELETE')]
    public function supprimer(EtudiantAbsences $etudiantAbsences, Request $request, Absence $absence): Response
    {
        //todo: tester...
        $id = $absence->getUuidString();
        if ($this->isCsrfTokenValid('delete'.$id, $request->request->get('_token'))) {
            $etudiantAbsences->removeAbsence($absence);
            $this->addFlashBag(Constantes::FLASHBAG_SUCCESS, 'absence.delete.success.flash');

            return $this->json($id, Response::HTTP_OK);
        }
        $this->addFlashBag(Constantes::FLASHBAG_ERROR, 'absence.delete.error.flash');

        return $this->json(false, Response::HTTP_INTERNAL_SERVER_ERROR);
    }

    #[Route(path: '/ajax/absences/{matiere}/{semestre}', name: 'application_personnel_absence_get_ajax', options: ['expose' => true], methods: 'GET')]
    public function ajaxGetAbsencesMatiere(TypeMatiereManager $typeMatiereManager, AbsenceRepository $absenceRepository, string $matiere, Semestre $semestre): JsonResponse
    {
        $mat = $typeMatiereManager->getMatiereFromSelect($matiere);
        $this->denyAccessUnlessGranted('CAN_ADD_ABSENCE', ['matiere' => $mat, 'semestre' => $semestre]);
        if (null !== $mat) {
            $absences = $absenceRepository->getByMatiereArray(
                $mat,
                $this->getAnneeUniversitaire() //todo: ?? $mat->semestre?->getAnneeUniversitaire() equivalent ?
            );

            return $this->json($absences);
        }

        return $this->json(null);
    }

    /**
     * @throws Exception
     */
    #[Route(path: '/ajax/saisie/{matiere}/{etudiant}', name: 'application_personnel_absence_saisie_ajax', options: ['expose' => true], methods: 'POST')]
    public function ajaxSaisie(TypeMatiereManager $typeMatiereManager, EtudiantAbsences $etudiantAbsences, AbsenceRepository $absenceRepository, Request $request, string $matiere, Etudiant $etudiant): JsonResponse | Response
    {
        $dateHeure = Tools::convertDateHeureToObject($request->request->get('date'), $request->request->get('heure'));
        $mat = $typeMatiereManager->getMatiereFromSelect($matiere);
        $this->denyAccessUnlessGranted('CAN_ADD_ABSENCE', ['matiere' => $mat, 'semestre' => $etudiant->getSemestre()]);
        $absence = $absenceRepository->findBy([
            'matiere' => $matiere,
            'etudiant' => $etudiant->getId(),
            'dateHeure' => $dateHeure,
            'anneeUniversitaire' => $etudiant->getSemestre() ? $etudiant->getSemestre()->getAnneeUniversitaire()?->getId() : 0,
        ]);
        if (null !== $mat && 'saisie' === $request->get('action') && 0 === count($absence)) {
            if ($this->saisieAutorise($mat->semestre->getOptNbJoursSaisieAbsence(), $dateHeure)) {
                $etudiantAbsences->setEtudiant($etudiant);

                $etudiantAbsences->addAbsence(
                    $dateHeure,
                    $mat,
                    $this->getUser()
                );

                $absences = $absenceRepository->getByMatiereArray(
                    $mat,
                    $mat->semestre?->getAnneeUniversitaire()
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
        return 0 === $nbjour || $datesymfony->diffInDays(Carbon::now()) <= $nbjour;
    }
}
