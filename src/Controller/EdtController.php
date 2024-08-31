<?php
/*
 * Copyright (c) 2024. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Controller/EdtController.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 31/08/2024 08:30
 */

namespace App\Controller;

use App\Classes\Edt\Calendrier;
use App\Classes\Edt\EdtManager;
use App\Classes\Edt\MyEdtCelcat;
use App\Classes\Edt\MyEdtExport;
use App\Classes\Edt\MyEdtIntranet;
use App\Classes\Matieres\TypeMatiereManager;
use App\Classes\Pdf\PdfManager;
use App\Entity\Constantes;
use App\Entity\Semestre;
use App\Repository\AbsenceEtatAppelRepository;
use App\Repository\AbsenceRepository;
use App\Repository\EdtPlanningRepository;
use App\Repository\GroupeRepository;
use App\Repository\SemestreRepository;
use Exception;
use Symfony\Component\HttpFoundation\RedirectResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\StreamedResponse;
use Symfony\Component\Routing\Attribute\Route;
use Symfony\Component\Routing\Generator\UrlGeneratorInterface;
use Twig\Error\LoaderError;
use Twig\Error\RuntimeError;
use Twig\Error\SyntaxError;

/**
 * Class EdtController.
 */
#[Route(path: '/emploi-du-temps')]
class EdtController extends BaseController
{
    public function __construct(
        private readonly Calendrier    $calendrier,
        private readonly EdtManager    $edtManager,
        private readonly TypeMatiereManager $typeMatiereManager,
        private readonly MyEdtIntranet $myEdtIntranet,
        private readonly MyEdtCelcat   $myEdtCelcat
    )
    {
    }

    /**
     * @throws Exception
     */
    public function dashboardPersonnel(
        int $semaine = 0
    ): Response
    {
        return $this->render('edt/_intervenant2.html.twig', [
            'filtre' => 'prof',
            'semaine' => $semaine,
            'valeur' => $this->getUser()->getId(),
            'source' => 'intranet',
        ]);
    }

    #[Route(path: '/ajax/edt-personnel.json', name: 'edt_personnel_json')]
    public function edtPersonnelJson(
        EdtManager                 $edtManager,
        AbsenceEtatAppelRepository $absenceEtatAppelRepository,
        AbsenceRepository          $absenceRepository,
        Request                    $request,
    ): Response
    {
        $semaine = 0;
        $filtre = 'prof';
        $valeur = $this->getUser()->getId();

        $source = null !== $this->getDepartement() && $this->getDepartement()->isOptUpdateCelcat() ? 'celcat' : 'intranet';
        $calendrier = $this->calendrier->calculSemaine($semaine, $this->getAnneeUniversitaire());
        $matieres = $this->typeMatiereManager->findByDepartementArray($this->getDepartement());
        $edt = $edtManager->initPersonnel($source, $calendrier, $this->getUser(),
            $this->getAnneeUniversitaire(), $matieres);
        // récupération des absences ou des marquages de "pas d'absence"
        $suiviAppel[] = $absenceEtatAppelRepository->findBySemaineAndUserArray($calendrier->semaineFormationLundi,
            $this->getUser());
        $suiviAppel[] = $absenceRepository->findBySemaineAndUserArray($calendrier->semaineFormationLundi,
            $this->getUser());
        $suiviAppel = array_merge_recursive(...$suiviAppel);

        $tJsonEdt = [];

        foreach ($edt as $ed) {
            foreach ($ed as $e) {
                $tJsonEdt[] = [
                    'id' => $e->id,
                    'title' => $e->matiere,
                    'start' => $e->dateObjet->format('Y-m-d') . ' ' . $e->heureDebut->format('H:i:s'),
                    'end' => $e->dateObjet->format('Y-m-d') . ' ' . $e->heureFin->format('H:i:s'),
                    'backgroundColor' => $e->couleur,
                    // 'description' => $e->texteEvt(),
                ];
            }
        }

        return $this->json($tJsonEdt);

//        return $this->render('edt/_edt_intervenant.html.twig', [
//            'edt' => $edt,
//            'filtre' => $filtre,
//            'calendrier' => $calendrier,
//            'semaine' => $semaine,
//            'valeur' => $valeur,
//            'tabHeures' => Constantes::TAB_HEURES_EDT_2,
//            'suiviAppel' => $suiviAppel,
//            'source' => 'intranet',
//        ]);
    }

    #[Route(path: '/ajax/edt-personnel', name: 'edt_personnel_ajax')]
    public function edtPersonnel(
        EdtManager        $edtManager,
        AbsenceEtatAppelRepository $absenceEtatAppelRepository,
        AbsenceRepository $absenceRepository,
        Request           $request,
    ): Response
    {
        $semaine = (int)$request->query->get('semaine');
        $filtre = $request->query->get('filtre');
        $valeur = $request->query->get('valeur');
        $mode = $request->query->get('mode');

        $source = null !== $this->getDepartement() && $this->getDepartement()->isOptUpdateCelcat() ? 'celcat' : 'intranet';
        $calendrier = $this->calendrier->calculSemaine($semaine, $this->getAnneeUniversitaire());


        // récupération des absences ou des marquages de "pas d'absence"


        if ($mode === 'tableau') {
            $matieres = $this->typeMatiereManager->findByDepartementArray($this->getDepartement());
            $edt = $edtManager->initPersonnel($source, $calendrier, $this->getUser(),
                $this->getAnneeUniversitaire(), $matieres);
            $suiviAppel[] = $absenceEtatAppelRepository->findBySemaineAndUserArray($calendrier->semaineFormationLundi,
                $this->getUser());
            $suiviAppel[] = $absenceRepository->findBySemaineAndUserArray($calendrier->semaineFormationLundi,
                $this->getUser());
            $suiviAppel = array_merge_recursive(...$suiviAppel);
            return $this->render('edt/_edt_intervenant_tableau.html.twig', [
                'edt' => $edt,
                'filtre' => $filtre,
                'calendrier' => $calendrier,
                'semaine' => $semaine,
                'valeur' => $valeur,
                'tabHeures' => Constantes::TAB_HEURES_EDT_2,
                'suiviAppel' => $suiviAppel,
                'source' => $source,
            ]);
        }

        return $this->render('edt/_edt_intervenant.html.twig', [
            'filtre' => $filtre,
            'calendrier' => $calendrier,
            'semaine' => $semaine,
            'valeur' => $valeur,
            'source' => $source,
        ]);
    }

    #[Route(path: '/ajax/edt-personnel-data', name: 'edt_personnel_ajax_data')]
    public function edtPersonnelData(
        EdtManager                 $edtManager,
        AbsenceEtatAppelRepository $absenceEtatAppelRepository,
        AbsenceRepository          $absenceRepository,
        Request                    $request,
    ): Response
    {
        $semaine = (int)$request->query->get('semaine');
//        $filtre = $request->query->get('filtre');
//        $valeur = $request->query->get('valeur');
//        $mode = $request->query->get('mode');

        $source = null !== $this->getDepartement() && $this->getDepartement()->isOptUpdateCelcat() ? EdtManager::EDT_CELCAT : EdtManager::EDT_INTRANET;
        $calendrier = $this->calendrier->calculSemaine($semaine, $this->getAnneeUniversitaire());
        $matieres = $this->typeMatiereManager->findByDepartementArray($this->getDepartement());
        $edt = $edtManager->initPersonnel($source, $calendrier, $this->getUser(),
            $this->getAnneeUniversitaire(), $matieres);

        // récupération des absences ou des marquages de "pas d'absence"
        $suiviAppel[] = $absenceEtatAppelRepository->findBySemaineAndUserArray($calendrier->semaineFormationLundi,
            $this->getUser());
        $suiviAppel[] = $absenceRepository->findBySemaineAndUserArray($calendrier->semaineFormationLundi,
            $this->getUser());
        $suiviAppel = array_merge_recursive(...$suiviAppel);


        return $this->json($edt->getEvenementsAsJson());

//        return $this->render('edt/_edt_intervenant.html.twig', [
//            'edt' => $edt,
//            'filtre' => $filtre,
//            'calendrier' => $calendrier,
//            'semaine' => $semaine,
//            'valeur' => $valeur,
//            'tabHeures' => Constantes::TAB_HEURES_EDT_2,
//            'suiviAppel' => $suiviAppel,
//            'source' => 'intranet',
//        ]);
    }

    public
    function navPersonnel(
        string    $filtre,
        string    $valeur,
        Calendrier $calendrier,
        ?Semestre $semestre = null
    ): Response
    {
        return $this->render('edt/_navPersonnel.html.twig', [
            'filtre' => $filtre,
            'valeur' => $valeur,
            'semestre' => $semestre,
            'calendrier' => $calendrier,
        ]);
    }

    #[
        Route(path: '/ajax/edt-personnel-semestre', name: 'edt_personnel_semestre_ajax')]
    public function personnelSemestre(
        Request          $request,
        GroupeRepository $groupeRepository,
        SemestreRepository $semestreRepository,
    ): Response
    {
        $semaine = (int)$request->query->get('semaine');
        $valeur = $request->query->get('valeur');
        $semestre = $semestreRepository->find($valeur);

        $diplome = $semestre->getDiplome()->getParent() ?? $semestre->getDiplome();

        if ($semestre->getDiplome()->isApc()) {
            $matieres = $this->typeMatiereManager->findByReferentielOrdreSemestre($semestre,
                $diplome->getReferentiel());
        } else {
            $matieres = $this->typeMatiereManager->findBySemestre($semestre);
        }

        $groupes = $groupeRepository->findByDiplomeAndOrdreSemestre($diplome, $semestre->getOrdreLmd());

        $calendrier = $this->calendrier->calculSemaine($semaine, $this->getAnneeUniversitaire());
        $edt = $this->edtManager->initSemestre($semestre, $calendrier, $this->getAnneeUniversitaire(),
            $this->edtManager->transformeMatieres($semestre, $matieres),
            $this->edtManager->transformeGroupe($semestre, $groupes));

        return $this->render('edt/_semestre.html.twig', [
            'edt' => $edt->toArray($semestre->getNbgroupeTpEdt(), $semestre->getAnnee()?->getCouleur()),
            'calendrier' => $calendrier,
            'semaine' => $semaine,
            'source' => $this->edtManager->getSource(),
            'semestre' => $semestre,
            'filtre' => 'promo',
            'valeur' => $semestre->getId(),
            'groupes' => $groupeRepository->findAllGroupes($semestre), // todo: fusionner avec $groupes?
        ]);
    }

    /**
     * @throws Exception
     */
    public function dashboardEtudiant(int $semaine = 0): Response
    {
        $calendrier = $this->calendrier->calculSemaine($semaine, $this->getAnneeUniversitaire());
        if (null !== $this->getAnneeUniversitaire()) {
            $matieres = $this->typeMatiereManager->tableauMatieresSemestreCodeApogee($this->getUser()->getSemestre());
            if (null !== $this->getUser()->getDiplome() && $this->getUser()->getDiplome()?->isOptUpdateCelcat()) {
                $source = EdtManager::EDT_CELCAT;
            } else {
                $source = EdtManager::EDT_INTRANET;
            }
            $events = $this->edtManager->initEtudiant($source, $this->getUser(),
                $this->getAnneeUniversitaire(),
                $calendrier, $matieres);

            return $this->render('edt/_etudiant.html.twig', [
                'events' => json_encode($events->getEvenementsAsJson(), JSON_HEX_APOS | JSON_HEX_QUOT),
                'source' => $source,
                'calendrier' => $calendrier,
                'semaine' => $semaine
            ]);
        }

        return $this->render('edt/_error.html.twig');
    }
//
//    #[Route(path: '/ajax/edt-etudiant-data/{semaine}', name: 'edt_etudiant_ajax_data')]
//    public function edtEtudiantData(int $semaine = 0): Response
//    {
//        $calendrier = $this->calendrier->calculSemaine($semaine, $this->getAnneeUniversitaire());
//
//        if (null !== $this->getAnneeUniversitaire()) {
//            $matieres = $this->typeMatiereManager->tableauMatieresSemestreCodeApogee($this->getUser()->getSemestre());
//            // todo: passer pour l'edt manager
//            if (null !== $this->getUser()->getDiplome() && $this->getUser()->getDiplome()?->isOptUpdateCelcat()) {
//                $this->myEdtCelcat->initEtudiant($this->getUser(),
//                    $this->getAnneeUniversitaire(), $semaine, $matieres);
//
//                return $this->render('edt/_etudiant2.html.twig', [
//                    'edt' => $this->myEdtCelcat,
//                    'source' => 'celcat',
//                    'calendrier' => $calendrier,
//                    'tabHeures' => Constantes::TAB_HEURES_EDT_2,
//                ]);
//            }
//            $edt = $this->edtManager->initEtudiant(EdtManager::EDT_INTRANET ,$this->getUser(),
//                $this->getAnneeUniversitaire(),
//                $semaine);
//
//            return $this->json($edt->getEvenementsAsJson());
//        }
//
//        return $this->render('edt/_error.html.twig');
//    }

    #[Route(path: '/intervenant/export/semaine/{semaine}', name: 'edt_intervenant_export_semaine_courante')]
    public function exportIntervenantSemaine(): void
    {
    }

    /**
     * @throws LoaderError
     * @throws RuntimeError
     * @throws SyntaxError
     */
    #[Route(path: '/semestre/export/semaine/{semaine}/{semestre}', name: 'edt_semestre_export_semaine_courante')]
    public function exportSemestreSemaine(MyEdtExport $myEdtExport, $semaine, Semestre $semestre): Response
    {
        $myEdtExport->exportSemestre($semaine, $semestre);
    }

    #[Route(path: '/intervenant/export/annee', name: 'edt_intervenant_export_annee')]
    public function exportIntervenantAnnee(): void
    {
    }

    #[Route(path: '/intervenant/export/ical', name: 'edt_intervenant_export_ical')]
    public function exportIntervenantIcal(MyEdtExport $myEdtExport): Response
    {
        $ical = $myEdtExport->export($this->getUser(), 'ics', 'personnel', $this->getAnneeUniversitaire());

        return new Response($ical, Response::HTTP_OK, [
            'Content-Type' => 'application/force-download',
            'Content-Disposition' => 'attachment; filename="export.ics"',
        ]);
    }

    #[Route(path: '/intervenant/affiche/ical', name: 'edt_affiche_ical')]
    public function afficheLienIcal(): Response
    {
        if ($this->isEtudiant()) {
            return $this->render('edt/modal_lien_ical.html.twig', [
                'lienIcal' => $this->generateUrl('edt_etudiant_synchro_ical', [
                    'code' => md5($this->getUser()->getSlug()),
                    '_format' => 'ics',
                ],
                    UrlGeneratorInterface::ABSOLUTE_URL),
            ]);
        }

        return $this->render('edt/modal_lien_ical.html.twig', [
            'lienIcal' => $this->generateUrl('edt_intervenant_synchro_ical', [
                'code' => md5($this->getUser()->getSlug()),
                '_format' => 'ics',
            ],
                UrlGeneratorInterface::ABSOLUTE_URL),
        ]);
    }

    /**
     * @throws LoaderError
     * @throws RuntimeError
     * @throws SyntaxError
     * @throws Exception
     */
    #[Route(path: '/etudiant/export/semaine/{semaine}', name: 'edt_etudiant_export_semaine_courante')]
    public function exportEtudiantSemaine(PdfManager $myPDF, int $semaine = 0): RedirectResponse|StreamedResponse|Response
    {
        if (0 === $semaine) {
            $semaine = (int)date('W');
        }
        if ($semaine !== (int)date('W') && $semaine !== ((int)date('W') + 1)) {
            return $this->redirectToRoute('erreur_666');
        }
        if (null !== $this->getUser()->getDiplome() && $this->getUser()->getDiplome()->isOptUpdateCelcat()) {
            $edt = $this->myEdtCelcat->initEtudiant($this->getUser(),
                $this->getAnneeUniversitaire(), $semaine);
        } else {
            $edt = $this->myEdtIntranet->initEtudiant($this->getUser(),
                $this->getAnneeUniversitaire(), $semaine);
        }

        return $myPDF->pdf()::generePdf('pdf/edt/edtPersoSemaine.html.twig',
            ['edt' => $edt, 'tabHeures' => Constantes::TAB_HEURES],
            'export-semaine-edt');
    }

    #[Route(path: '/etudiant/export/ical', name: 'edt_etudiant_export_ical')]
    public function exportEtudiantIcal(MyEdtExport $myEdtExport): Response
    {
        // Le nombre de semaine selon la configuraiton
        $ical = $myEdtExport->export($this->getUser(), 'ics', 'etudiant', $this->getAnneeUniversitaire());

        return new Response($ical, Response::HTTP_OK, [
            'Content-Type' => 'application/force-download',
            'Content-Disposition' => 'attachment; filename="export.ics"',
        ]);
    }

    #[Route(path: '/etudiant/details/{event}/{type}', name: 'edt_etudiant_detail_event')]
    public function detailEvent(
        MyEdtIntranet $myEdt,
        EdtPlanningRepository $edtPlanningRepository,
                      $event,
                      $type
    ): ?Response
    {
        if ('planning' === $type) {
            $pl = $edtPlanningRepository->find($event);

            return $this->render('edt/_details.html.twig', ['event' => $myEdt->transformeDetails($pl)]);
        }

        return null;
    }
}
