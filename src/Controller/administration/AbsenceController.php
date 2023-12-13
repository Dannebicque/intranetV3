<?php
/*
 * Copyright (c) 2023. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Controller/administration/AbsenceController.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 13/12/2023 15:37
 */

namespace App\Controller\administration;

use App\Classes\Etudiant\EtudiantAbsences;
use App\Classes\Matieres\TypeMatiereManager;
use App\Classes\MyAbsences;
use App\Classes\MyExport;
use App\Classes\MyExportListing;
use App\Classes\StatsAbsences;
use App\Controller\BaseController;
use App\Entity\Absence;
use App\Entity\Constantes;
use App\Entity\Etudiant;
use App\Entity\Semestre;
use App\Event\AbsenceEvent;
use App\Repository\AbsenceJustificatifRepository;
use App\Repository\AbsenceRepository;
use App\Repository\EtudiantRepository;
use App\Table\AbsenceListeTableType;
use App\Utils\Tools;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Contracts\EventDispatcher\EventDispatcherInterface;

#[Route('/administration/absence')]
class AbsenceController extends BaseController
{
    /**
     * @throws \Exception
     */
    #[Route('/semestre/etudiant/{etudiant}',
        name: 'administration_absences_liste_absence_etudiant',
        options: ['expose' => true])]
    public function listeAbsenceEtudiant(
        TypeMatiereManager $typeMatiereManager,
        EtudiantAbsences $etudiantAbsences,
        StatsAbsences $statsAbsences,
        Etudiant $etudiant
    ): Response {
        $this->denyAccessUnlessGranted('MINIMAL_ROLE_ABS', $etudiant->getSemestre());

        if ($etudiant->getDiplome()->isApc() === false) {
            $matieres = $typeMatiereManager->findBySemestreArray($etudiant->getSemestre());
        } else {
            $mats = $typeMatiereManager->findByReferentielOrdreSemestre($etudiant->getSemestre(), $etudiant->getDiplome()->getReferentiel());

            $matieres = [];
            foreach ($mats as $mat) {
                $matieres[$mat->getTypeIdMatiere()] = $mat;
            }
        }

        $etudiantAbsences->setEtudiant($etudiant);

        $absences = $etudiantAbsences->getAbsencesParSemestresEtAnneeUniversitaire($matieres,
            $this->dataUserSession->getAnneeUniversitaire());
        $statistiquesAbsences = $statsAbsences->calculStatistiquesAbsencesEtudiant($absences);

        return $this->render('administration/absence/_listeEtudiant.html.twig', [
            'absences' => $absences,
            'etudiant' => $etudiant,
            'statistiquesAbsences' => $statistiquesAbsences,
            'matieres' => $matieres,
        ]);
    }

    /**
     * @throws \Exception
     */
    #[Route('/semestre/{semestre}/liste', name: 'administration_absences_semestre_liste', options: ['expose' => true])]
    public function liste(
        Request $request,
        Semestre $semestre
    ): Response {
        $this->denyAccessUnlessGranted('MINIMAL_ROLE_ABS', $semestre);
        // todo: doit utiliser un dto...
        $table = $this->createTable(AbsenceListeTableType::class, [
            'semestre' => $semestre,
            'anneeUniversitaire' => $this->getAnneeUniversitaire(),
        ]);

        $table->handleRequest($request);

        if ($table->isCallback()) {
            return $table->getCallbackResponse();
        }

        return $this->render('administration/absence/liste.html.twig', [
            'semestre' => $semestre,
            'table' => $table,
        ]);
    }

    #[Route('/semestre/{semestre}/justifier', name: 'administration_absences_semestre_justifier')]
    public function justifier(Semestre $semestre): Response
    {
        $this->denyAccessUnlessGranted('MINIMAL_ROLE_ABS', $semestre);

        return $this->render('administration/absence/justifier.html.twig', [
            'semestre' => $semestre,
        ]);
    }

    #[Route('/semestre/{semestre}/saisie', name: 'administration_absences_semestre_saisie')]
    public function saisie(Semestre $semestre): Response
    {
        $this->denyAccessUnlessGranted('MINIMAL_ROLE_ABS', $semestre);

        return $this->render('administration/absence/saisie.html.twig', [
            'semestre' => $semestre,
        ]);
    }

    #[Route('/semestre/{semestre}/justificatif/export.{_format}',
        name: 'administration_absences_semestre_justificatif_export',
        requirements: ['_format' => 'csv|xlsx|pdf'])]
    public function exportJustificatif(
        MyExport $myExport,
        AbsenceJustificatifRepository $absenceJustificatifRepository,
        Semestre $semestre,
        string $_format
    ): Response {
        $this->denyAccessUnlessGranted('MINIMAL_ROLE_ABS', $semestre);

        $justificatifs = $absenceJustificatifRepository->findBySemestre($semestre);

        return $myExport->genereFichierAbsence($_format, $justificatifs, 'absences_'.$semestre->getLibelle());
    }

    /**
     * @throws \Exception
     */
    #[Route('/semestre/{semestre}/export.{_format}',
        name: 'administration_absences_semestre_liste_export',
        requirements: ['_format' => 'csv|xlsx|pdf'])]
    public function export(
        TypeMatiereManager $typeMatiereManager,
        MyExport $myExport,
        MyAbsences $myAbsences,
        Semestre $semestre,
        string $_format
    ): Response {
        $this->denyAccessUnlessGranted('MINIMAL_ROLE_ABS', $semestre);

        $matieres = $typeMatiereManager->findBySemestreArray($semestre);
        $myAbsences->getAbsencesSemestre($matieres, $semestre);

        return $myExport->genereFichierAbsence($_format, $myAbsences, 'absences_'.$semestre->getLibelle());
    }

    #[Route('/all/semestre/{semestre}/export.{_format}',
        name: 'administration_all_absences_semestre_export',
        requirements: ['_format' => 'csv|xlsx|pdf'])]
    public function exportAllAbsences(
        MyExport $myExport,
        MyExportListing $myExportListing,
        TypeMatiereManager $typeMatiereManager,
        AbsenceRepository $absenceRepository,
        Semestre $semestre,
    ): Response {
        $this->denyAccessUnlessGranted('MINIMAL_ROLE_ABS', $semestre);
        $matieres = $typeMatiereManager->findBySemestreArray($semestre);
        $absences = $absenceRepository->getBySemestre($semestre, $semestre->getAnneeUniversitaire());

        return $myExportListing->exportExcelAbsence($absences, $matieres, 'absences_'.$semestre->getLibelle());

//        return $myExport->genereFichierGenerique(
//            $_format,
//            $absences,
//            'absences_' . $semestre->getLibelle(),
//            ['absences_administration', 'utilisateur', 'matiere'],
//            [
//                'dateHeure',
//                'duree',
//                'etudiant' => ['nom', 'prenom'],
//                'justifie',
//                'matiere' => ['libelle'],
//                'personnel' => ['nom', 'prenom'],
//            ]
//        );
    }

    #[Route('/all/semestre-parcours/{semestre}/export.{_format}',
        name: 'administration_all_absences_parcours_export',
        requirements: ['_format' => 'csv|xlsx|pdf'])]
    public function exportAllAbsencesParcours(
        MyExport           $myExport,
        MyExportListing    $myExportListing,
        TypeMatiereManager $typeMatiereManager,
        AbsenceRepository  $absenceRepository,
        Semestre           $semestre,
    ): Response
    {
        $this->denyAccessUnlessGranted('MINIMAL_ROLE_ABS', $semestre);
        $matieres = $typeMatiereManager->findByReferentielOrdreSemestre($semestre, $semestre->getDiplome()?->getReferentiel());
        $absences = $absenceRepository->getByOrdreSemestreAndDiplome($semestre, $this->getAnneeUniversitaire());

        $tMatieres = [];
        foreach ($matieres as $matiere) {
            $tMatieres[$matiere->getTypeIdMatiere()] = $matiere;
        }

        return $myExportListing->exportExcelAbsence($absences, $tMatieres, 'absences_S' . $semestre->getOrdreLmd());
    }

    #[Route('/ajax/justifie/{absence}/{etat}', name: 'administration_absences_justifie', options: ['expose' => true])]
    public function justifie(
        EventDispatcherInterface $eventDispatcher,
        Absence $absence,
        bool $etat
    ): JsonResponse {
        $this->denyAccessUnlessGranted('MINIMAL_ROLE_ABS', $absence->getEtudiant()?->getSemestre());

        $absence->setJustifie($etat);
        $this->entityManager->flush();

        if (true === $etat) {
            $event = new AbsenceEvent($absence);
            $eventDispatcher->dispatch($event, AbsenceEvent::JUSTIFIED);
        }

        return $this->json($etat);
    }

    #[Route('/ajax/addabs',
        name: 'administration_absences_ajax_add',
        options: ['expose' => true],
        methods: ['POST'])]
    public function ajaxAddAbsence(
        TypeMatiereManager $typeMatiereManager,
        Request $request,
        EtudiantRepository $etudiantRepository,
        EtudiantAbsences $etudiantAbsences
    ): JsonResponse {
        $etudiant = $etudiantRepository->find($request->request->get('etudiant'));

        if (null !== $etudiant) {
            $this->denyAccessUnlessGranted('MINIMAL_ROLE_ABS', $etudiant->getSemestre());

            $matiere = $typeMatiereManager->getMatiereFromSelect($request->request->get('matiere'));
            if (null !== $matiere) {
                $etudiantAbsences->setEtudiant($etudiant);
                $absence = $etudiantAbsences->addAbsence(
                    Tools::convertDateHeureToObject($request->request->get('date'), $request->request->get('heure')),
                    $matiere,
                    $this->getUser(),
                    Tools::convertToBool($request->request->get('justif'))
                );
            } else {
                return $this->json('false', Response::HTTP_INTERNAL_SERVER_ERROR);
            }

            return $this->json($absence->getJson(), Response::HTTP_OK);
        }

        return $this->json('false', Response::HTTP_INTERNAL_SERVER_ERROR);
    }

    #[Route('/{id}', name: 'administration_absence_delete', options: ['expose' => true], methods: ['DELETE', 'POST'])]
    public function delete(Request $request, Absence $absence): Response
    {
        $this->denyAccessUnlessGranted('MINIMAL_ROLE_ABS', $absence->getEtudiant()?->getSemestre());

        $id = $absence->getId();
        if ($this->isCsrfTokenValid('delete'.$id, $request->server->get('HTTP_X_CSRF_TOKEN'))) {
            $this->entityManager->remove($absence);
            $this->entityManager->flush();
            $this->addFlashBag(
                Constantes::FLASHBAG_SUCCESS,
                'absence.delete.success.flash'
            );

            return $this->json($id, Response::HTTP_OK);
        }

        $this->addFlashBag(Constantes::FLASHBAG_ERROR, 'absence.delete.error.flash');

        return $this->json(false, Response::HTTP_INTERNAL_SERVER_ERROR);
    }

    public function listeTempsReel(
        TypeMatiereManager $manager,
        MyAbsences $myAbsences,
    ): Response {
        return $this->render('administration/absences/liste_temps_reel.html.twig', [
            'absences' => $myAbsences->getAbsencesTempsReel($this->getDepartement()),
            'matieres' => $manager->findByDepartementArray($this->getDepartement()),
        ]);
    }
}
