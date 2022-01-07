<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Controller/ProfilEtudiantController.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 11/05/2021 21:48
 */

namespace App\Controller;

use App\Classes\Calendrier;
use App\Classes\Etudiant\EtudiantAbsences;
use App\Classes\Etudiant\EtudiantNotes;
use App\Classes\Matieres\TypeMatiereManager;
use App\Classes\NotesTri;
use App\Classes\StatsAbsences;
use App\DTO\EtudiantSousCommissionApc;
use App\Entity\Commentaire;
use App\Entity\Constantes;
use App\Entity\Etudiant;
use App\Repository\AlternanceRepository;
use App\Repository\ApcRessourceCompetenceRepository;
use App\Repository\ApcSaeCompetenceRepository;
use App\Repository\DepartementRepository;
use App\Repository\ScolariteRepository;
use App\Repository\StageEtudiantRepository;
use App\Repository\UeRepository;
use Exception;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\ParamConverter;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\UX\Chartjs\Builder\ChartBuilderInterface;
use Symfony\UX\Chartjs\Model\Chart;

/**
 * Class UserController.
 */
#[Route(path: '/etudiant')]
class ProfilEtudiantController extends BaseController
{
    /**
     * @ParamConverter("etudiant", options={"mapping": {"slug": "slug"}})
     */
    #[Route(path: '/profil/{slug}/timeline', name: 'profil_etudiant_timeline')]
    public function timeline(Etudiant $etudiant): Response
    {
        return $this->render('user/composants/_timeline.html.twig', [
            'etudiant' => $etudiant,
        ]);
    }

    /**
     * @ParamConverter("etudiant", options={"mapping": {"slug": "slug"}})
     */
    #[Route(path: '/profil/{slug}/actions', name: 'profil_etudiant_action')]
    public function actions(DepartementRepository $departementRepository, Etudiant $etudiant): Response
    {
        return $this->render('user/composants/_actions_etudiant.html.twig', [
            'etudiant' => $etudiant,
            'departements' => $departementRepository->findActifs(),
        ]);
    }

    /**
     * @ParamConverter("etudiant", options={"mapping": {"slug": "slug"}})
     */
    #[Route(path: '/profil/{slug}/scolarite', name: 'profil_etudiant_scolarite')]
    public function scolarite(ScolariteRepository $scolariteRepository, Etudiant $etudiant): Response
    {
        $scolarite = $scolariteRepository->findByEtudiant($etudiant);

        return $this->render('user/composants/_scolarite.html.twig', [
            'etudiant' => $etudiant,
            'scolarites' => $scolarite,
        ]);
    }

    /**
     * @ParamConverter("etudiant", options={"mapping": {"slug": "slug"}})
     */
    #[Route(path: '/profil/{slug}/notes', name: 'profil_etudiant_notes')]
    public function notes(NotesTri $notesTri, TypeMatiereManager $typeMatiereManager, ChartBuilderInterface $chartBuilder, EtudiantNotes $etudiantNotes, Etudiant $etudiant): Response
    {
        if (null !== $etudiant->getSemestre()) {
            $etudiantNotes->setEtudiant($etudiant);
            $matieres = $typeMatiereManager->findBySemestreArray($etudiant->getSemestre());
            $notes = $etudiantNotes->getNotesParSemestresEtAnneeUniversitaire($matieres,
                $etudiant->getAnneeUniversitaire());
            $etudiantNotes->calculGraphique();

            $notes = $notesTri->tri($notes, $matieres);

            $chart = $chartBuilder->createChart(Chart::TYPE_RADAR);
            $chart->setData([
                'labels' => $etudiantNotes->getLabelsGraphique(),
                'datasets' => [
                    [//todo: intégrer l'historique des semestres
                        'label' => $etudiant->getSemestre()->getLibelle(),
                        'data' => $etudiantNotes->getDataGraphique(),
                        'backgroundColor' => 'rgb(255, 99, 132)',
                        'borderColor' => 'rgb(255, 99, 132)',
                    ],
                ],
            ]);

            $chart->setOptions(
                [
                    'legend' => ['position' => 'top'],
                    'title' => [
                        'display' => true,
                        'text' => 'Chart.js Radar Chart',
                    ],
                    'scale' => [
                        'ticks' => [
                            'beginAtZero' => true,
                            'suggestedMax' => 20,
                        ],
                    ],
                ]
            );

            return $this->render('user/composants/_notes.html.twig', [
                'notes' => $notes,
                'etudiant' => $etudiant,
                'chart' => $chart,
                'matieres' => $matieres,
            ]);
        }

        return $this->render('user/composants/_semestre_vide.html.twig', [
        ]);
    }

    /**
     * @ParamConverter("etudiant", options={"mapping": {"slug": "slug"}})
     */
    #[Route(path: '/profil/{slug}/apc_notes', name: 'profil_etudiant_apc')]
    public function apcNotes(UeRepository $ueRepository,
        ApcRessourceCompetenceRepository $apcRessourceCompetenceRepository,
        ApcSaeCompetenceRepository $apcSaeCompetenceRepository,
        TypeMatiereManager $typeMatiereManager,
        EtudiantAbsences $etudiantAbsences,
        EtudiantNotes $etudiantNotes,
        Etudiant $etudiant): Response
    {
        if (null !== $etudiant->getSemestre()) {
            $semestre = $etudiant->getSemestre();
            $ressources = $apcRessourceCompetenceRepository->findBySemestreArray($semestre);
            $saes = $apcSaeCompetenceRepository->findBySemestreArray($semestre);
            $ues = $ueRepository->findBySemestre($semestre);

            $etudiantSousCommissionApc = new EtudiantSousCommissionApc($etudiant, $semestre, $ues);
            $etudiantNotes->setEtudiant($etudiant);
            $matieres = $typeMatiereManager->findBySemestreArray($etudiant->getSemestre());
            $etudiantSousCommissionApc->moyenneMatieres = $etudiantNotes->getMoyenneParMatiereParSemestresEtAnneeUniversitaire($matieres, $etudiant->getSemestre(),
                $this->getAnneeUniversitaire());
            $etudiantAbsences->setEtudiant($etudiant);
            $etudiantAbsences->getPenalitesAbsencesParMatiere($matieres, $this->getAnneeUniversitaire(),
                $etudiantSousCommissionApc->moyenneMatieres);
            $etudiantSousCommissionApc->calculMoyenneUes($matieres, $ressources, $saes);

            return $this->render('user/composants/_notes_apc.html.twig', [
                'etudiant' => $etudiant,
                'semestre' => $semestre,
                'matieres' => $matieres,
                'moyenneSemestre' => $etudiantSousCommissionApc,
                'ues' => $ues,
            ]);
        }

        return $this->render('user/composants/_semestre_vide.html.twig', [
        ]);
    }

    /**
     * @ParamConverter("etudiant", options={"mapping": {"slug": "slug"}})
     *
     * @throws Exception
     */
    #[Route(path: '/profil/{slug}/absences', name: 'profil_etudiant_absences')]
    public function absences(TypeMatiereManager $typeMatiereManager, EtudiantAbsences $etudiantAbsences, StatsAbsences $statsAbsences, Etudiant $etudiant): Response
    {
        if (null !== $etudiant->getSemestre()) {
            Calendrier::calculPlanning($this->dataUserSession->getAnneeUniversitaire()->getAnnee(), 2,
                Constantes::DUREE_SEMESTRE);
            $matieres = $typeMatiereManager->findBySemestreArray($etudiant->getSemestre());
            $etudiantAbsences->setEtudiant($etudiant);
            $absences = $etudiantAbsences->getAbsencesParSemestresEtAnneeUniversitaire($matieres,
                $this->dataUserSession->getAnneeUniversitaire());
            $statistiquesAbsences = $statsAbsences->calculStatistiquesAbsencesEtudiant($absences);

            //todo: gérer les mois, selon le semestre ?
            return $this->render('user/composants/_absences.html.twig', [
                'tabPlanning' => Calendrier::getTabPlanning(), //objet...
                'tabJour' => ['', 'L', 'M', 'M', 'J', 'V', 'S', 'D'], //objet...
                'tabFerie' => Calendrier::getTabJoursFeries(), //objet Calendrier???...
                'tabFinMois' => Calendrier::getTabFinMois(), //objet...
                'annee' => $etudiant->getAnneeUniversitaire(),
                'etudiant' => $etudiant,
                'absences' => $absences,
                'statistiquesAbsences' => $statistiquesAbsences,
                'tabAbsence' => [], //compte des absences par créneaux du planning.
                'matieres' => $matieres,
            ]);
        }

        return $this->render('user/composants/_semestre_vide.html.twig', [
        ]);
    }

    /**
     * @ParamConverter("etudiant", options={"mapping": {"slug": "slug"}})
     */
    #[Route(path: '/profil/{slug}/stages', name: 'profil_etudiant_stages')]
    public function stages(StageEtudiantRepository $stageEtudiantRepository, AlternanceRepository $alternanceRepository, Etudiant $etudiant): Response
    {
        return $this->render('user/composants/_stages.html.twig', [
            //todo: si l'étudiant n'est plus dans un semestre, garder l'historique uniquemenent. Dans ce cas l'historique ne doit pas dépendre d'une année ?
            'stagesEnCours' => $stageEtudiantRepository->findByEtudiantAnnee($etudiant,
                $this->dataUserSession->getAnneeUniversitaire()),
            'stagesHistorique' => $stageEtudiantRepository->findByEtudiantHistorique($etudiant,
                $this->dataUserSession->getAnneeUniversitaire()),
            'alternancesEnCours' => $alternanceRepository->getByEtudiantAndAnneeUniversitaire($etudiant,
                $this->dataUserSession->getAnneeUniversitaire()),
            'alternancesHistorique' => $alternanceRepository->getHistoriqueByEtudantAndAnneeUniversitaire($etudiant,
                $this->dataUserSession->getAnneeUniversitaire()),
        ]);
    }

    /**
     * @ParamConverter("etudiant", options={"mapping": {"slug": "slug"}})
     */
    #[Route(path: '/profil/{slug}/a-propos', name: 'profil_etudiant_about')]
    public function aPropos(Etudiant $etudiant): Response
    {
        return $this->render('user/composants/_apropos.html.twig', [
            'user' => $etudiant,
        ]);
    }

    /**
     * @ParamConverter("etudiant", options={"mapping": {"slug": "slug"}})
     */
    #[Route(path: '/profil/{slug}/ajout-commentaire', name: 'profil_etudiant_ajout_commentaire', options: ['expose' => true])]
    public function ajoutCommentaire(Request $request, Etudiant $etudiant): Response
    {
        $datas = json_decode($request->getContent(), true, 512, JSON_THROW_ON_ERROR);
        $commentaire = new Commentaire($etudiant);
        $commentaire->setTexte($datas['commentaire']);
        $this->entityManager->persist($commentaire);
        $this->entityManager->flush();

        return $this->json($commentaire->getJson());
    }
}
