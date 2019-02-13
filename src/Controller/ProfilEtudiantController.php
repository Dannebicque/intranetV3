<?php

namespace App\Controller;

use App\Entity\Constantes;
use App\Entity\Etudiant;
use App\MesClasses\Calendrier;
use App\Repository\AlternanceRepository;
use App\Repository\ScolariteRepository;
use App\Repository\StageEtudiantRepository;
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
     * @return \Symfony\Component\HttpFoundation\Response
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
     * @return \Symfony\Component\HttpFoundation\Response
     * @ParamConverter("etudiant", options={"mapping": {"slug": "slug"}})
     *
     */
    public function actions(ScolariteRepository $scolariteRepository, Etudiant $etudiant): Response
    {
        $scolarite = $scolariteRepository->findBy(array('etudiant' => $etudiant));

        return $this->render('user/composants/actions_etudiant.html.twig', [
            'etudiant' => $etudiant,
            'scolarite' => $scolarite
        ]);
    }

    /**
     * @Route("/profil/{slug}/scolarite", name="profil_etudiant_scolarite")
     * @param ScolariteRepository $scolariteRepository
     * @ParamConverter("etudiant", options={"mapping": {"slug": "slug"}})
     * @param Etudiant            $etudiant
     *
     * @return \Symfony\Component\HttpFoundation\Response
     */
    public function scolarite(ScolariteRepository $scolariteRepository, Etudiant $etudiant): Response
    {
        $scolarite = $scolariteRepository->findBy(array('etudiant' => $etudiant));

        return $this->render('user/composants/scolarite.html.twig', [
            'scolarite' => $scolarite
        ]);
    }

    /**
     * @Route("/profil/{slug}/notes", name="profil_etudiant_notes")
     * @param Etudiant $etudiant
     * @ParamConverter("etudiant", options={"mapping": {"slug": "slug"}})
     *
     * @return \Symfony\Component\HttpFoundation\Response
     */
    public function notes(Etudiant $etudiant): Response
    {
        return $this->render('user/composants/notes.html.twig', [
            'notes' => $etudiant->getNotes()
        ]);
    }

    /**
     * @Route("/profil/{slug}/absences", name="profil_etudiant_absences")
     * @ParamConverter("etudiant", options={"mapping": {"slug": "slug"}})
     * @param Etudiant $etudiant
     *
     * @return \Symfony\Component\HttpFoundation\Response
     */
    public function absences(Etudiant $etudiant): Response
    {
        Calendrier::calculPlanning($etudiant->getAnneeUniversitaire(), 2, Constantes::DUREE_SEMESTRE);

        //todo: gérer les mois, selon le semestre ?
        return $this->render('user/composants/absences.html.twig', [
            'tabPlanning' => Calendrier::getTabPlanning(),
            'tabJour'     => array('', 'L', 'M', 'M', 'J', 'V', 'S', 'D'),
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
     * @param Etudiant $etudiant
     *
     * @return \Symfony\Component\HttpFoundation\Response
     */
    public function stages( StageEtudiantRepository $stageEtudiantRepository,
        AlternanceRepository $alternanceRepository,
        Etudiant $etudiant): Response
    {
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
     * @return \Symfony\Component\HttpFoundation\Response
     */
    public function about(Etudiant $etudiant): Response
    {
        return $this->render('user/composants/about.html.twig', [
            'user' => $etudiant,
        ]);
    }
}
