<?php
/*
 * Copyright (c) 2024. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Controller/administration/SousComissionController.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 16/02/2024 22:17
 */

namespace App\Controller\administration;

use App\Classes\Etudiant\EtudiantAbsences;
use App\Classes\Etudiant\EtudiantNotes;
use App\Classes\Matieres\TypeMatiereManager;
use App\Classes\SousCommission\SousCommission;
use App\Classes\SousCommission\SousCommissionExport;
use App\Classes\SousCommission\SousCommissionManager;
use App\Classes\SousCommission\SousCommissionSauvegarde;
use App\Controller\BaseController;
use App\DTO\EtudiantSousCommissionApc;
use App\Entity\AnneeUniversitaire;
use App\Entity\Constantes;
use App\Entity\Etudiant;
use App\Entity\Scolarite;
use App\Entity\ScolaritePromo;
use App\Entity\Semestre;
use App\Event\SousCommissionEvent;
use App\Exception\SemestreNotFoundException;
use App\Repository\AnneeUniversitaireRepository;
use App\Repository\ApcRessourceCompetenceRepository;
use App\Repository\ApcSaeCompetenceRepository;
use App\Repository\BacRepository;
use App\Repository\EtudiantRepository;
use App\Repository\NoteRepository;
use App\Repository\UeRepository;
use PhpOffice\PhpSpreadsheet\Exception;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;
use Symfony\Contracts\EventDispatcher\EventDispatcherInterface;

/**
 * Class SousComissionController.
 */
#[Route(path: '/administration/sous-commission')]
class SousComissionController extends BaseController
{
    #[Route(path: '/mise-a-jour', name: 'administration_sous_commission_mise_a_jour')]
    public function miseAJour(
        AnneeUniversitaireRepository $anneeRepository,
        EtudiantRepository $etudiantRepository): Response
    {
        return $this->render('administration/sous_commission/mise_a_jour.html.twig', [
            'semestres' => $this->getDataUserSession()->getSemestres(),
            'etudiants' => $etudiantRepository->findByDepartementArray($this->getDepartement()),
            'annees' => $anneeRepository->findAll(),
        ]);
    }

    #[Route(path: '/mise-a-jour/calcule/{etudiant}-{semestre}-{anneeUniversitaire}', name: 'administration_sous_commission_mise_a_jour_calcul', options: ['expose' => true])]
    public function miseAJourCalcul(
        UeRepository $ueRepository,
        ApcRessourceCompetenceRepository $apcRessourceCompetenceRepository,
        ApcSaeCompetenceRepository $apcSaeCompetenceRepository,
        TypeMatiereManager $typeMatiereManager,
        EtudiantAbsences $etudiantAbsences,
        EtudiantNotes $etudiantNotes,
        Etudiant $etudiant,
        Semestre $semestre,
        AnneeUniversitaire $anneeUniversitaire
    ): Response {
        $ressources = $apcRessourceCompetenceRepository->findBySemestreArray($semestre);
        $saes = $apcSaeCompetenceRepository->findBySemestreArray($semestre);
        $ues = $ueRepository->findBySemestre($semestre);

        $etudiantSousCommissionApc = new EtudiantSousCommissionApc($etudiant, $semestre, $ues);
        $etudiantNotes->setEtudiant($etudiant);
        $matieres = $typeMatiereManager->findBySemestreArray($semestre);
        $etudiantSousCommissionApc->moyenneMatieres = $etudiantNotes->getMoyenneParMatiereParSemestresEtAnneeUniversitaire($matieres,
            $semestre,
            $anneeUniversitaire, true);
        $etudiantAbsences->setEtudiant($etudiant);
        $etudiantAbsences->getPenalitesAbsencesParMatiere($matieres, $anneeUniversitaire,
            $etudiantSousCommissionApc->moyenneMatieres);
        $etudiantSousCommissionApc->calculMoyenneUes($matieres, $ressources, $saes);

        return $this->render('administration/sous_commission/mise_a_jour_calcul.html.twig', [
            'etudiant' => $etudiant,
            'semestre' => $semestre,
            'matieres' => $matieres,
            'moyenneSemestre' => $etudiantSousCommissionApc,
            'ues' => $ues,
        ]);
    }

    #[Route(path: '/live/{semestre}', name: 'administration_sous_commission_live')]
    public function live(
        BacRepository $bacRepository,
        SousCommissionManager $sousCommissionManager,
        Semestre $semestre
    ): Response {
        $this->denyAccessUnlessGranted('MINIMAL_ROLE_NOTE', $semestre);
        $sousCommission = $sousCommissionManager->getSousCommission($semestre);
        $sousCommission->calcul($semestre, $this->getAnneeUniversitaire());
        $bacs = $bacRepository->findAll();

        return $this->render('administration/sous_commission/'.$sousCommission::TEMPLATE_LIVE, [
            'semestre' => $semestre,
            'sousCommission' => $sousCommission, // todo: devrait etre un DTo?
            'bacs' => $bacs,
            'stats' => $sousCommission->calculStats($bacs),
        ]);
    }

    #[Route(path: '/travail/{semestre}', name: 'administration_sous_commission_travail')]
    public function travail(
        TypeMatiereManager $typeMatiereManager,
        SousCommissionManager $sousCommissionManager,
        SousCommissionSauvegarde $sousCommissionSauvegarde,
        Semestre $semestre
    ): Response {
        $this->denyAccessUnlessGranted('MINIMAL_ROLE_NOTE', $semestre);
        $sousCommission = $sousCommissionManager->getSousCommission($semestre);
        $matieres = $typeMatiereManager->findBySemestreAndReferentiel($semestre,
            $semestre->getDiplome()->getReferentiel());
        $sousCommission->calcul($semestre, $this->getAnneeUniversitaire());
        $sousCommissionTravail = $sousCommissionSauvegarde->sauvegardeTravail($sousCommission, $matieres);

        return $this->render('administration/sous_commission/'.$sousCommission::TEMPLATE_TRAVAIL, [
            'semestre' => $semestre,
            'sc' => $sousCommissionTravail,
        ]);
    }

    #[Route(path: '/purger/{scolaritePromo}', name: 'administration_sous_commission_purger')]
    public function purger(
        TypeMatiereManager $typeMatiereManager,
        NoteRepository $noteRepository,
        ScolaritePromo $scolaritePromo
    ): Response {
        $semestre = $scolaritePromo->getSemestre();
        $this->denyAccessUnlessGranted('MINIMAL_ROLE_NOTE', $semestre);
        if (null !== $semestre) {
            $matieres = $typeMatiereManager->findBySemestre($semestre);
            $notes = $noteRepository->findBySemestre($matieres, $scolaritePromo->getAnneeUniversitaire());

            foreach ($notes as $n) {
                if (-0.01 === $n->getNote()) {
                    $n->setNote(0);
                    $this->entityManager->persist($n);
                }
            }

            $this->entityManager->flush();
            $this->addFlash(Constantes::FLASHBAG_SUCCESS, 'Notes -0.01 remplacées par 0');
        } else {
            $this->addFlash(Constantes::FLASHBAG_ERROR, 'Erreur lors du rempalcement des -0.01 par 0');
        }

        return $this->redirectToRoute('administration_sous_commission_travail', ['semestre' => $semestre->getId()]);
    }

    #[Route(path: '/recalculer/{ssComm}', name: 'administration_sous_commission_recalculer')]
    public function recalculer(SousCommissionSauvegarde $sousCommissionSauvegarde, ScolaritePromo $ssComm): Response
    {
        $semestre = $ssComm->getSemestre();
        $this->denyAccessUnlessGranted('MINIMAL_ROLE_NOTE', $semestre);
        $sousCommissionSauvegarde->efface($ssComm);
        $this->addFlashBag(Constantes::FLASHBAG_SUCCESS, 'scolarite.efface.et.recalculee.success.flash');

        return $this->redirectToRoute('administration_sous_commission_travail', ['semestre' => $semestre->getId()]);
    }

    #[Route(path: '/publier/{ssComm}', name: 'administration_sous_commission_publier')]
    public function publier(
        EventDispatcherInterface $eventDispatcher,
        SousCommissionSauvegarde $sousCommissionSauvegarde,
        ScolaritePromo $ssComm
    ): Response {
        $semestre = $ssComm->getSemestre();

        if (null === $semestre) {
            throw new SemestreNotFoundException();
        }

        $this->denyAccessUnlessGranted('MINIMAL_ROLE_NOTE', $semestre);
        $sousCommissionSauvegarde->visibilite($ssComm);
        $this->addFlashBag(Constantes::FLASHBAG_SUCCESS, 'scolarite.publiee.success.flash');
        $publication = new SousCommissionEvent($ssComm);
        $eventDispatcher->dispatch($publication, SousCommissionEvent::PUBLISHED);

        return $this->redirectToRoute('administration_sous_commission_travail', ['semestre' => $semestre->getId()]);
    }

    #[Route(path: '/depublier/{ssComm}', name: 'administration_sous_commission_depublier')]
    public function depublier(SousCommissionSauvegarde $sousCommissionSauvegarde, ScolaritePromo $ssComm): Response
    {
        $semestre = $ssComm->getSemestre();

        if (null === $semestre) {
            throw new SemestreNotFoundException();
        }

        $this->denyAccessUnlessGranted('MINIMAL_ROLE_NOTE', $semestre);
        $sousCommissionSauvegarde->visibilite($ssComm, false);
        $this->addFlashBag(Constantes::FLASHBAG_SUCCESS, 'scolarite.depubliee.success.flash');

        return $this->redirectToRoute('administration_sous_commission_travail', ['semestre' => $semestre->getId()]);
    }

    /**
     * @throws Exception
     */
    #[Route(path: '/exporter/{semestre}', name: 'administration_sous_commission_exporter')]
    public function exporter(SousCommissionExport $sousCommission, Semestre $semestre): Response
    {
        $this->denyAccessUnlessGranted('MINIMAL_ROLE_NOTE', $semestre);
        if (true === $semestre->getDiplome()?->isApc()) {
            return $sousCommission->exportApc($semestre, $this->dataUserSession->getAnneeUniversitaire());
        }

        return $sousCommission->export($semestre, $this->dataUserSession->getAnneeUniversitaire());
    }

    /**
     * @throws \App\Exception\SemestreNotFoundException
     */
    #[Route(path: '/grand-jury/{scolaritePromo}', name: 'administration_sous_commission_exporter_grand_jury')]
    public function grandJury(SousCommissionExport $sousCommissionExport, ScolaritePromo $scolaritePromo): Response
    {
        $this->denyAccessUnlessGranted('MINIMAL_ROLE_NOTE', $scolaritePromo->getSemestre());

        if (true === $scolaritePromo->getSemestre()?->getDiplome()?->isApc()) {
            return $sousCommissionExport->exportGrandJuryApc($scolaritePromo,
                $this->dataUserSession->getAnneeUniversitaire());
        }

        return $sousCommissionExport->exportGrandJury($scolaritePromo, $this->dataUserSession->getAnneeUniversitaire());
    }

    #[Route(path: '/ajax/semestre/{id}/{type}', name: 'administration_ss_comm_ajax_edit', options: ['expose' => true])]
    public function ajaxEditSsComm(
        SousCommission $sousCommission,
        Request $request,
        Scolarite $scolarite,
        $type
    ): JsonResponse {
        $this->denyAccessUnlessGranted('MINIMAL_ROLE_NOTE', $scolarite->getSemestre());
        $sousCommission->updateScolarite($scolarite,
            $type,
            $request->request->get('field'),
            $request->request->get('value'));

        return $this->json(true);
    }
}
