<?php
/*
 * Copyright (c) 2025. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Controller/ProfilEtudiantController.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 09/07/2025 08:58
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
use JsonException;
use Symfony\Bridge\Doctrine\Attribute\MapEntity;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;
use Symfony\UX\Chartjs\Builder\ChartBuilderInterface;
use Symfony\UX\Chartjs\Model\Chart;

/**
 * Class UserController.
 */
#[Route(path: '/etudiant')]
class ProfilEtudiantController extends BaseController
{
    #[Route(path: '/profil/{slug}/timeline', name: 'profil_etudiant_timeline')]
    public function timeline(#[MapEntity(mapping: ['slug' => 'slug'])]
                             Etudiant $etudiant): Response
    {
        if (!($this->isGranted('ROLE_PERMANENT') or $this->getUser()->getId() === $etudiant->getId())) {
            throw $this->createAccessDeniedException('Vous n\'avez pas accès à cette page');
        }

        return $this->render('user/composants/_timeline.html.twig', [
            'etudiant' => $etudiant,
        ]);
    }

    #[Route(path: '/profil/{slug}/actions', name: 'profil_etudiant_action')]
    public function actions(DepartementRepository $departementRepository, #[MapEntity(mapping: ['slug' => 'slug'])]
    Etudiant                                      $etudiant): Response
    {
        if (!($this->isGranted('ROLE_PERMANENT'))) {
            throw $this->createAccessDeniedException('Vous n\'avez pas accès à cette page');
        }

        return $this->render('user/composants/_actions_etudiant.html.twig', [
            'etudiant' => $etudiant,
            'departements' => $departementRepository->findActifs(),
        ]);
    }

    #[Route(path: '/profil/{slug}/scolarite', name: 'profil_etudiant_scolarite')]
    public function scolarite(ScolariteRepository $scolariteRepository,
                              #[MapEntity(mapping: ['slug' => 'slug'])]
                              Etudiant            $etudiant): Response
    {
        if (!($this->isGranted('ROLE_PERMANENT') or $this->getUser()->getId() === $etudiant->getId())) {
            throw $this->createAccessDeniedException('Vous n\'avez pas accès à cette page');
        }

        $bilanAnnees = [];
        $scolarite = $scolariteRepository->findByEtudiant($etudiant);
        $hasDef = false;

        $tabUes = [];
        //uniquement si APC
        if ($etudiant->getDiplome() !== null && $etudiant->getDiplome()?->isApc()) {
            foreach ($scolarite as $scol) {
                $bilanAnnees[$scol->getSemestre()?->getAnnee()?->getOrdre()][$scol->getSemestre()?->getOrdreLmd()] = $scol->getMoyennesUes();

                foreach ($scol->getSemestre()?->getUes() as $ue) {
                    $tabUes[$ue->getId()] = $ue->getNumeroUe();
                }
            }

            foreach ($bilanAnnees as $key => $bilanAnnee) {
                $bilanAnnees[$key]['decision'] = 0;
                $bilanAnnees[$key]['ues'] = [];
                foreach ($bilanAnnee as $bilanSemestre) {
                    foreach ($bilanSemestre as $idUe => $bilanUe) {
                        $keyUe = $tabUes[$idUe];
                        if (!isset($bilanAnnees[$key]['ues'][$keyUe])) {
                            $bilanAnnees[$key]['ues'][$keyUe] = [
                                'moyenne' => 0,
                                'decision' => 0,
                            ];
                        }

                        if ($bilanUe['decision'] === Constantes::UE_DEFAILLANT) {
                            $hasDef = true;
                        }

                        $bilanAnnees[$key]['ues'][$keyUe]['moyenne'] += $bilanUe['moyenne'];
                    }
                }

                $nbUes = 0;
                $nbValides = 0;
                $nbUesHuit = 0;
                foreach ($bilanAnnees[$key]['ues'] as $idUe => $moyenneUe) {

                    $nbUes++;
                    $moyeUe = $moyenneUe['moyenne'] / 2;
                    $bilanAnnees[$key]['ues'][$idUe]['moyenne'] = $moyeUe;

                    if ($hasDef === true) {
                        $bilanAnnees[$key]['ues'][$idUe]['decision'] = Constantes::UE_DEFAILLANT;
                    } else {
                        if ($moyeUe < 8) {
                            $bilanAnnees[$key]['ues'][$idUe]['decision'] = Constantes::UE_NON_VALIDE;
                            $nbUesHuit++;
                        } elseif ($moyeUe < 10) {
                            $bilanAnnees[$key]['ues'][$idUe]['decision'] = Constantes::UE_NON_VALIDE;
                        } else {
                            $bilanAnnees[$key]['ues'][$idUe]['decision'] = Constantes::UE_VALIDE;
                            $nbValides++;
                        }
                    }
                }

                if ($nbUesHuit > 0) {
                    $bilanAnnees[$key]['decision'] = Constantes::SEMESTRE_NON_VALIDE;
                } elseif ($nbValides === $nbUes) {
                    $bilanAnnees[$key]['decision'] = Constantes::SEMESTRE_VALIDE;
                } else {
                    $bilanAnnees[$key]['decision'] = Constantes::SEMESTRE_NON_VALIDE;
                }
            }
        }

        return $this->render('user/composants/_scolarite.html.twig', [
            'etudiant' => $etudiant,
            'scolarites' => $scolarite,
            'bilanAnnees' => $bilanAnnees,
        ]);
    }

    #[Route(path: '/profil/{slug}/notes', name: 'profil_etudiant_notes')]
    public function notes(
        NotesTri           $notesTri,
        TypeMatiereManager $typeMatiereManager,
        ChartBuilderInterface $chartBuilder,
        EtudiantNotes      $etudiantNotes,
        #[MapEntity(mapping: ['slug' => 'slug'])]
        Etudiant           $etudiant
    ): Response
    {
        if (!($this->isGranted('ROLE_PERMANENT') or $this->getUser()->getId() === $etudiant->getId())) {
            throw $this->createAccessDeniedException('Vous n\'avez pas accès à cette page');
        }

        //todo: mutualiser avec BlocNotesAbsencesController... (TwigComponent ?)

        if (null !== $etudiant->getSemestre()) {
            $etudiantNotes->setEtudiant($etudiant);
            if (false === $etudiant->getDiplome()->isApc()) {
                $matieres = $typeMatiereManager->findBySemestreArray($etudiant->getSemestre());
            } else {
                $matieres = $typeMatiereManager->findByReferentielOrdreSemestreArray($etudiant->getSemestre(),
                    $etudiant->getSemestre()->getDiplome()?->getReferentiel());
            }

            $notes = $etudiantNotes->getNotesParSemestresEtAnneeUniversitaire($matieres,
                $etudiant->getAnneeUniversitaire());
            $etudiantNotes->calculGraphique();

            if (null !== $notes) {
                // todo: à revoir, qu'est ce que cela donne si pas trié.
                $notes = $notesTri->tri($notes, $matieres);
            }

            $chart = $chartBuilder->createChart(Chart::TYPE_RADAR);
            $chart->setData([
                'labels' => $etudiantNotes->getLabelsGraphique(),
                'datasets' => [
                    [// todo: intégrer l'historique des semestres
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

        return $this->render('user/composants/_semestre_vide.html.twig');
    }

    #[Route(path: '/profil/apc_notes/ancien_semestre', name: 'profil_etudiant_apc_ancien_semestre', options: ['expose' => true])]
    public function apcNotesAncienSemestre(
        Request            $request,
        UeRepository       $ueRepository,
        ScolariteRepository $scolariteRepository,
        TypeMatiereManager $typeMatiereManager
    ): Response
    {
        $idScolarite = $request->query->get('scolarite');
        $scolarite = $scolariteRepository->find($idScolarite);

        if (null === $scolarite) {
            throw $this->createNotFoundException('Scolarité non trouvée');
        }

        $etudiant = $scolarite->getEtudiant();

        if ($etudiant === null) {
            throw $this->createNotFoundException('Etudiant non trouvé');
        }

        if (!($this->isGranted('ROLE_PERMANENT') or $this->getUser()->getId() === $etudiant->getId())) {
            throw $this->createAccessDeniedException('Vous n\'avez pas accès à cette page');
        }
        $semestre = $scolarite->getSemestre();
        if (null !== $semestre) {
            $ues = $ueRepository->findBySemestre($semestre);

            $etudiant = $scolarite->getEtudiant();
            $matieres = $typeMatiereManager->findBySemestreArray($semestre);
            $coefficients = [];
            foreach ($matieres as $matiere) {
                $coefficients[$matiere->codeElement] = [];
                foreach ($matiere->tab_ues as $ue) {
                    $coefficients[$matiere->codeElement][$ue->ue_id] = $ue->ue_coefficient;
                }
            }

            return $this->render('user/composants/_notes_apc_old_semestre.html.twig', [
                'etudiant' => $etudiant,
                'semestre' => $semestre,
                'matieres' => $matieres,
                'scolarite' => $scolarite,
                'coefficients' => $coefficients,
                'ues' => $ues,
            ]);
        }


        return $this->render('user/composants/_semestre_vide.html.twig');
    }

    #[Route(path: '/profil/{slug}/apc_notes', name: 'profil_etudiant_apc')]
    public function apcNotes(
        UeRepository               $ueRepository,
        ScolariteRepository        $scolariteRepository,
        ApcRessourceCompetenceRepository $apcRessourceCompetenceRepository,
        ApcSaeCompetenceRepository $apcSaeCompetenceRepository,
        TypeMatiereManager         $typeMatiereManager,
        EtudiantAbsences           $etudiantAbsences,
        EtudiantNotes              $etudiantNotes,
        #[MapEntity(mapping: ['slug' => 'slug'])]
        Etudiant                   $etudiant
    ): Response
    {
        if (!($this->isGranted('ROLE_PERMANENT') or $this->getUser()->getId() === $etudiant->getId())) {
            throw $this->createAccessDeniedException('Vous n\'avez pas accès à cette page');
        }

        $semestresPrecedents = $scolariteRepository->findByEtudiant($etudiant);
        $semestre = $etudiant->getSemestre();
        if (null !== $semestre) {

            $ressources = $apcRessourceCompetenceRepository->findBySemestreArray($semestre);
            $saes = $apcSaeCompetenceRepository->findBySemestreArray($semestre);
            $ues = $ueRepository->findBySemestre($semestre);
            $etudiantSousCommissionApc = new EtudiantSousCommissionApc($etudiant, $semestre, $ues);
            $etudiantNotes->setEtudiant($etudiant);
            $matieres = $typeMatiereManager->findBySemestreAndReferentiel($etudiant->getSemestre(),
                $etudiant->getSemestre()->getDiplome()->getReferentiel());
            $etudiantSousCommissionApc->moyenneMatieres = $etudiantNotes->getMoyenneParMatiereParSemestresEtAnneeUniversitaire($matieres,
                $etudiant->getSemestre(),
                $this->getAnneeUniversitaire(), true);
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
                'semestresPrecedents' => $semestresPrecedents,
            ]);
        }

        return $this->render('user/composants/_semestre_vide.html.twig');
    }

    /**
     * @throws Exception
     */
    #[Route(path: '/profil/{slug}/absences', name: 'profil_etudiant_absences')]
    public function absences(
        TypeMatiereManager $typeMatiereManager,
        EtudiantAbsences $etudiantAbsences,
        StatsAbsences    $statsAbsences,
        #[MapEntity(mapping: ['slug' => 'slug'])]
        Etudiant         $etudiant
    ): Response
    {
        if (!($this->isGranted('ROLE_PERMANENT') or $this->getUser()->getId() === $etudiant->getId())) {
            throw $this->createAccessDeniedException('Vous n\'avez pas accès à cette page');
        }

        //todo: mutualiser avec BlocNotesAbsencesController... (TwigComponent ?)
        if (null !== $etudiant->getSemestre()) {
            Calendrier::calculPlanning($this->dataUserSession->getAnneeUniversitaire()->getAnnee(), 2,
                Constantes::DUREE_SEMESTRE);

            if ($etudiant->getDiplome()->isApc() === false) {
                $matieres = $typeMatiereManager->findBySemestreArray($etudiant->getSemestre());
            } else {
                $matieres = $typeMatiereManager->findByReferentielOrdreSemestreArray($etudiant->getSemestre(),
                    $etudiant->getDiplome()->getReferentiel());
            }
            $etudiantAbsences->setEtudiant($etudiant);
            $absences = $etudiantAbsences->getAbsencesParSemestresEtAnneeUniversitaire($matieres,
                $this->getAnneeUniversitaire());
            $statistiquesAbsences = $statsAbsences->calculStatistiquesAbsencesEtudiant($absences);

            // todo: gérer les mois, selon le semestre ?
            return $this->render('user/composants/_absences.html.twig', [
                'tabPlanning' => Calendrier::getTabPlanning(), // objet...
                'tabJour' => ['', 'L', 'M', 'M', 'J', 'V', 'S', 'D'], // objet...
                'tabFerie' => Calendrier::getTabJoursFeries(), // objet Calendrier???...
                'tabFinMois' => Calendrier::getTabFinMois(), // objet...
                'annee' => $etudiant->getAnneeUniversitaire(),
                'etudiant' => $etudiant,
                'absences' => $absences,
                'statistiquesAbsences' => $statistiquesAbsences,
                'tabAbsence' => [], // compte des absences par créneaux du planning.
                'matieres' => $matieres,
            ]);
        }

        return $this->render('user/composants/_semestre_vide.html.twig');
    }

    #[Route(path: '/profil/{slug}/stages', name: 'profil_etudiant_stages')]
    public function stages(
        StageEtudiantRepository $stageEtudiantRepository,
        AlternanceRepository $alternanceRepository,
        #[MapEntity(mapping: ['slug' => 'slug'])]
        Etudiant             $etudiant
    ): Response
    {
        if (!($this->isGranted('ROLE_PERMANENT') or $this->getUser()->getId() === $etudiant->getId())) {
            throw $this->createAccessDeniedException('Vous n\'avez pas accès à cette page');
        }

        return $this->render('user/composants/_stages.html.twig', [
            // todo: si l'étudiant n'est plus dans un semestre, garder l'historique uniquemenent. Dans ce cas l'historique ne doit pas dépendre d'une année ?
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

    #[Route(path: '/profil/{slug}/a-propos', name: 'profil_etudiant_about')]
    public function aPropos(#[MapEntity(mapping: ['slug' => 'slug'])]
                            Etudiant $etudiant): Response
    {
        if (!($this->isGranted('ROLE_PERMANENT') or $this->getUser()->getId() === $etudiant->getId())) {
            throw $this->createAccessDeniedException('Vous n\'avez pas accès à cette page');
        }

        return $this->render('user/composants/_apropos.html.twig', [
            'user' => $etudiant,
        ]);
    }

    /**
     * @throws JsonException
     */
    #[Route(path: '/profil/{slug}/ajout-commentaire', name: 'profil_etudiant_ajout_commentaire', options: ['expose' => true])]
    public function ajoutCommentaire(Request $request, #[MapEntity(mapping: ['slug' => 'slug'])]
    Etudiant                                 $etudiant): Response
    {
        if (!($this->isGranted('ROLE_PERMANENT'))) {
            throw $this->createAccessDeniedException('Vous n\'avez pas accès à cette page');
        }

        $datas = json_decode($request->getContent(), true, 512, JSON_THROW_ON_ERROR);
        $commentaire = new Commentaire($etudiant);
        $commentaire->setTexte($datas['commentaire']);
        $this->entityManager->persist($commentaire);
        $this->entityManager->flush();

        return $this->json($commentaire->getJson());
    }
}
