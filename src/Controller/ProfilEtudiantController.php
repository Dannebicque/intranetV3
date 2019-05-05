<?php
/**
 * Copyright (C) 2013 - 2019 | David annebicque | IUT de Troyes - All Rights Reserved
 *
 * @file /Users/davidannebicque/htdocs/intranetv3/src/Controller/ProfilEtudiantController.php
 * @author David annebicque
 * @project intranetv3
 * @date  05/05/2019 11:55
 * @lastUpdate 05/05/2019 11:55
 *
 */

namespace App\Controller;

use App\Entity\Constantes;
use App\Entity\Etudiant;
use App\MesClasses\Calendrier;
use App\Repository\AlternanceRepository;
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

        ]);
    }

    /**
     * @Route("/profil/{slug}/actions", name="profil_etudiant_action")
     * @param ScolariteRepository $scolariteRepository
     * @param Etudiant            $etudiant
     *
     * @return Response
     * @ParamConverter("etudiant", options={"mapping": {"slug": "slug"}})
     *
     */
    public function actions(ScolariteRepository $scolariteRepository, Etudiant $etudiant): Response
    {
        $scolarite = $scolariteRepository->findBy(['etudiant' => $etudiant]);

        return $this->render('user/composants/actions_etudiant.html.twig', [
            'etudiant'  => $etudiant,
            'scolarite' => $scolarite
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
            'scolarite'    => $scolarite,
            'scolariteUes' => $scolariteUes
        ]);
    }

    /**
     * @Route("/profil/{slug}/notes", name="profil_etudiant_notes")
     * @param Etudiant $etudiant
     * @ParamConverter("etudiant", options={"mapping": {"slug": "slug"}})
     *
     * @return Response
     */
    public function notes(ScolariteRepository $scolariteRepository, Etudiant $etudiant): Response
    {
        $semestres = $scolariteRepository->findByEtudiantDepartement($etudiant,
            $etudiant->getDepartement()); //les semestres dans lesquels l'étudiant est passé dans le département...
        return $this->render('user/composants/notes.html.twig', [
            'notes'     => $etudiant->getNotes(),
            'semestres' => $semestres
        ]);
    }

    /**
     * @Route("/profil/{slug}/absences", name="profil_etudiant_absences")
     * @ParamConverter("etudiant", options={"mapping": {"slug": "slug"}})
     * @param Etudiant $etudiant
     *
     * @return Response
     * @throws Exception
     */
    public function absences(Etudiant $etudiant): Response
    {
        Calendrier::calculPlanning($etudiant->getAnneeUniversitaire(), 2, Constantes::DUREE_SEMESTRE);

        //todo: gérer les mois, selon le semestre ?
        return $this->render('user/composants/absences.html.twig', [
            'tabPlanning' => Calendrier::getTabPlanning(),
            'tabJour'     => ['', 'L', 'M', 'M', 'J', 'V', 'S', 'D'],
            'tabFerie'    => Calendrier::getTabJoursFeries(),
            'tabFinMois'  => Calendrier::getTabFinMois(),
            'annee'       => $etudiant->getAnneeUniversitaire(),
            'absences'    => $etudiant->getAbsences(),
            'tabAbsence'  => [] //compte des absences par créneaux du planning.
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

            'stagesEnCours'         => $stageEtudiantRepository->findByEtudiantAnnee($etudiant,
                $etudiant->getAnneeUniversitaire()),
            'stagesHistorique'      => $stageEtudiantRepository->findByEtudiantHistorique($etudiant,
                $etudiant->getAnneeUniversitaire()),
            'alternancesEnCours'    => $alternanceRepository->findByEtudiantAnnee($etudiant,
                $etudiant->getAnneeUniversitaire()),
            'alternancesHistorique' => $alternanceRepository->findByEtudiantHistorique($etudiant,
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
