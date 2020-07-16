<?php
// Copyright (c) 2020. | David Annebicque | IUT de Troyes  - All Rights Reserved
// @file /Users/davidannebicque/htdocs/intranetV3/src/Controller/ProfilEtudiantController.php
// @author davidannebicque
// @project intranetV3
// @lastUpdate 15/07/2020 16:30

namespace App\Controller;

use App\Classes\Etudiant\EtudiantAbsences;
use App\Classes\Etudiant\EtudiantNotes;
use App\Classes\StatsAbsences;
use App\Entity\Constantes;
use App\Entity\Etudiant;
use App\Classes\Calendrier;
use App\Repository\AlternanceRepository;
use App\Repository\DepartementRepository;
use App\Repository\MatiereRepository;
use App\Repository\ScolariteMoyenneUeRepository;
use App\Repository\ScolariteRepository;
use App\Repository\StageEtudiantRepository;
use Exception;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\ParamConverter;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

/**
 * Class UserController
 * @package App\Controller
 * @Route("/etudiant")
 */
class ProfilEtudiantController extends BaseController
{
    /**
     * @Route("/profil/{slug}/timeline", name="profil_etudiant_timeline")
     * @ParamConverter("etudiant", options={"mapping": {"slug": "slug"}})
     * @param Etudiant $etudiant
     *
     * @return Response
     */
    public function timeline(Etudiant $etudiant): Response
    {
        return $this->render('user/composants/timeline.html.twig', [
            'etudiant' => $etudiant
        ]);
    }

    /**
     * @Route("/profil/{slug}/actions", name="profil_etudiant_action")
     * @param DepartementRepository $departementRepository
     * @param ScolariteRepository   $scolariteRepository
     * @param Etudiant              $etudiant
     *
     * @return Response
     * @ParamConverter("etudiant", options={"mapping": {"slug": "slug"}})
     */
    public function actions(
        DepartementRepository $departementRepository,
        ScolariteRepository $scolariteRepository,
        Etudiant $etudiant
    ): Response {
        $scolarite = $scolariteRepository->findBy(['etudiant' => $etudiant]);

        return $this->render('user/composants/actions_etudiant.html.twig', [
            'etudiant'     => $etudiant,
            'scolarite'    => $scolarite,
            'departements' => $departementRepository->findActifs()
        ]);
    }

    /**
     * @Route("/profil/{slug}/scolarite", name="profil_etudiant_scolarite")
     * @param ScolariteMoyenneUeRepository $scolariteMoyenneUeRepository
     * @param ScolariteRepository          $scolariteRepository
     * @param Etudiant                     $etudiant
     *
     * @return Response
     * @ParamConverter("etudiant", options={"mapping": {"slug": "slug"}})
     */
    public function scolarite(
        ScolariteMoyenneUeRepository $scolariteMoyenneUeRepository,
        ScolariteRepository $scolariteRepository,
        Etudiant $etudiant
    ): Response {
        $scolarite = $scolariteRepository->findByEtudiant($etudiant);
        $scolariteUes = $scolariteMoyenneUeRepository->findByEtudiantArray($etudiant);

        return $this->render('user/composants/scolarite.html.twig', [
            'etudiant'     => $etudiant,
            'scolarite'    => $scolarite,
            'scolariteUes' => $scolariteUes
        ]);
    }

    /**
     * @Route("/profil/{slug}/notes", name="profil_etudiant_notes")
     * @param EtudiantNotes       $etudiantNotes
     * @param ScolariteRepository $scolariteRepository
     * @param Etudiant            $etudiant
     *
     * @return Response
     * @ParamConverter("etudiant", options={"mapping": {"slug": "slug"}})
     */
    public function notes(
        EtudiantNotes $etudiantNotes,
        ScolariteRepository $scolariteRepository,
        Etudiant $etudiant
    ): Response {
        $semestres = $scolariteRepository->findByEtudiantDepartement($etudiant,
            $etudiant->getDepartement()); //todo: a finaliser, pour accéder à l'historique et le graph les semestres dans lesquels l'étudiant est passé dans le département...
        $etudiantNotes->setEtudiant($etudiant);

        return $this->render('user/composants/notes.html.twig', [
            'notes'     => $etudiantNotes->getNotesParSemestresEtAnneeUniversitaire($etudiant->getSemestre(),
                $etudiant->getAnneeUniversitaire()),
            'semestres' => $semestres
        ]);
    }

    /**
     * @Route("/profil/{slug}/absences", name="profil_etudiant_absences")
     * @ParamConverter("etudiant", options={"mapping": {"slug": "slug"}})
     * @param MatiereRepository $matiereRepository
     * @param EtudiantAbsences  $etudiantAbsences
     * @param StatsAbsences     $statsAbsences
     * @param Etudiant          $etudiant
     *
     * @return Response
     * @throws Exception
     */
    public function absences(
        MatiereRepository $matiereRepository,
        EtudiantAbsences $etudiantAbsences,
        StatsAbsences $statsAbsences,
        Etudiant $etudiant
    ): Response {
        Calendrier::calculPlanning($etudiant->getAnneeUniversitaire()->getAnnee(), 2, Constantes::DUREE_SEMESTRE);
        $etudiantAbsences->setEtudiant($etudiant);
        $absences = $etudiantAbsences->getAbsencesParSemestresEtAnneeUniversitaire($etudiant->getSemestre(),
            $etudiant->getAnneeUniversitaire());
        $statistiquesAbsences = $statsAbsences->calculStatistiquesAbsencesEtudiant($absences);

        //todo: gérer les mois, selon le semestre ?
        return $this->render('user/composants/absences.html.twig', [
            'tabPlanning'          => Calendrier::getTabPlanning(), //objet...
            'tabJour'              => ['', 'L', 'M', 'M', 'J', 'V', 'S', 'D'],//objet...
            'tabFerie'             => Calendrier::getTabJoursFeries(),//objet Calendrier???...
            'tabFinMois'           => Calendrier::getTabFinMois(),//objet...
            'annee'                => $etudiant->getAnneeUniversitaire(),
            'etudiant'             => $etudiant,
            'absences'             => $absences,
            'statistiquesAbsences' => $statistiquesAbsences,
            'tabAbsence'           => [], //compte des absences par créneaux du planning.
            'matieres'             => $matiereRepository->findBySemestre($etudiant->getSemestre())
        ]);
    }

    /**
     * @Route("/profil/{slug}/stages", name="profil_etudiant_stages")
     * @ParamConverter("etudiant", options={"mapping": {"slug": "slug"}})
     * @param StageEtudiantRepository $stageEtudiantRepository
     * @param AlternanceRepository    $alternanceRepository
     * @param Etudiant                $etudiant
     *
     * @return Response
     */
    public function stages(
        StageEtudiantRepository $stageEtudiantRepository,
        AlternanceRepository $alternanceRepository,
        Etudiant $etudiant
    ): Response {
        return $this->render('user/composants/stages.html.twig', [
            //todo: si l'étudiant n'est plus dans un semestre, garder l'historique uniquemenent. Dans ce cas l'historique ne doit pas dépendre d'une année ?
            'stagesEnCours'         => $stageEtudiantRepository->findByEtudiantAnnee($etudiant,
                $etudiant->getAnneeUniversitaire()),
            'stagesHistorique'      => $stageEtudiantRepository->findByEtudiantHistorique($etudiant,
                $etudiant->getAnneeUniversitaire()),
            'alternancesEnCours'    => $alternanceRepository->getByEtudiantAndAnneeUniversitaire($etudiant,
                $etudiant->getAnneeUniversitaire()),
            'alternancesHistorique' => $alternanceRepository->getHistoriqueByEtudantAndAnneeUniversitaire($etudiant,
                $etudiant->getAnneeUniversitaire()),
        ]);

    }

    /**
     * @Route("/profil/{slug}/about", name="profil_etudiant_about")
     * @param Etudiant $etudiant
     *
     * @ParamConverter("etudiant", options={"mapping": {"slug": "slug"}})
     *
     * @return Response
     */
    public function about(Etudiant $etudiant): Response
    {
        return $this->render('user/composants/about.html.twig', [
            'user' => $etudiant,
        ]);
    }
}
