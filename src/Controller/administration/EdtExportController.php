<?php
/*
 * Copyright (c) 2022. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Controller/administration/EdtExportController.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 28/09/2022 18:38
 */

namespace App\Controller\administration;

use App\Classes\Edt\MyEdtExport;
use App\Classes\Matieres\TypeMatiereManager;
use App\Controller\BaseController;
use App\Entity\Constantes;
use App\Entity\Personnel;
use App\Exception\SemestreNotFoundException;
use App\Repository\CalendrierRepository;
use App\Repository\EdtPlanningRepository;
use App\Repository\GroupeRepository;
use App\Repository\PersonnelRepository;
use App\Repository\SemestreRepository;
use App\Repository\TypeGroupeRepository;
use function array_key_exists;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpKernel\KernelInterface;
use Symfony\Component\Routing\Annotation\Route;
use Twig\Error\LoaderError;
use Twig\Error\RuntimeError;
use Twig\Error\SyntaxError;
use ZipArchive;

/**
 * Class EdtController.
 */
#[Route(path: '/administration/emploi-du-temps/export')]
class EdtExportController extends BaseController
{
    #[Route(path: '/voir', name: 'administration_edt_export_voir', requirements: ['source' => 'intranet|celcat'])]
    public function voirPdf(MyEdtExport $myEdtExport): Response
    {
        return $this->render('administration/edtExport/voir.html.twig', [
            'docs' => $myEdtExport->getAllDocs($this->dataUserSession->getDepartement()),
        ]);
    }

    #[Route(path: '/{source}', name: 'administration_edt_export_index', requirements: ['source' => 'intranet|celcat'])]
    public function index(string $source): Response
    {
        return $this->render('administration/edtExport/index.html.twig', [
            'source' => $source,
        ]);
    }

    #[Route(path: '/script/{source}', name: 'administration_edt_export_script', requirements: ['source' => 'intranet|celcat'])]
    public function exportScript(SemestreRepository $semestreRepository, GroupeRepository $groupeRepository, CalendrierRepository $calendrierRepository, string $source): Response
    {
        $semestres = $semestreRepository->findByDepartementActif($this->getDepartement());
        $groupes = $groupeRepository->findByDepartementSemestreActif($this->getDepartement());
        $semaines = $calendrierRepository->findByAnneeUniversitaire($this->getAnneeUniversitaire());

        return $this->render('administration/edtExport/exportScript.html.twig', [
            'semestres' => $semestres,
            'groupes' => $groupes,
            'semaines' => $semaines,
        ]);
    }

    #[Route(path: '/script-ajax', name: 'administration_edt_export_script_ajax')]
    public function exportScriptAjax(
        TypeGroupeRepository $typeGroupeRepository,
        TypeMatiereManager $typeMatiereManager, KernelInterface $kernel, Request $request, GroupeRepository $groupeRepository, CalendrierRepository $calendrierRepository, EdtPlanningRepository $edtPlanningRepository, SemestreRepository $semestreRepository): Response
    {
        $semestre = $semestreRepository->find($request->request->get('semestre'));
        $semaine = $request->request->get('semaine');

        if (null !== $semestre && '' !== $semaine) {
            $calendrier = $calendrierRepository->findOneBy([
                'semaineFormation' => $semaine,
                'anneeUniversitaire' => $this->getAnneeUniversitaire()->getId(),
            ]);

            $tabType = [
                'CM' => 1,
                'TD' => 4,
                'TP' => 6,
            ];
            $tabSalles = [
                'H001',
                'H002',
                'H005',
                'H006',
                'H007',
                'H008',
                'H009',
                'H016',
                'STUD01',
                'STUD02',
                'H023',
                'H101',
                'H103',
                'H104',
                'H105',
                'H111',
                'H201',
                'H205',
                'DIS1',
                'DIS2',
                'DIS3',
                'DIS4',
                'DIS5',
                'DIS6',
                'DIS7',
                'DIS8',
                'DISLP',
            ];
            $tabSalles = array_flip($tabSalles);
            $pl = $edtPlanningRepository->findEdtSemestre($semestre, $semaine, $this->getAnneeUniversitaire());
            $matieres = $typeMatiereManager->findBySemestreAndReferentiel($semestre, $semestre->getDiplome()->getReferentiel());
            $typeGroupes = $typeGroupeRepository->findByDiplomeAndOrdreSemestre($semestre->getDiplome(), $semestre->getOrdreLmd());
            $code = [];
            $codeGroupe = [];
            foreach ($typeGroupes as $tg) {
                $code[$tg->getType()->value] = [];
                $groupes = $groupeRepository->findBy(['typeGroupe' => $tg->getId()], ['ordre' => 'ASC']);
                foreach ($groupes as $groupe) {
                    $code[mb_strtoupper($tg->getType()->value)][$groupe->getOrdre()] = 'call sleep 5'."\n";
                    $codeGroupe[mb_strtoupper($tg->getType()->value).'_'.$groupe->getOrdre()] = $groupe->getLibelle();
                }
            }
            foreach ($pl as $p) {
                if (null !== $p->getIntervenant()) {
                    $codeprof = $p->getIntervenant()->getNumeroHarpege();
                } else {
                    $codeprof = 0;
                }

                if (
                    0 !== $p->getIdMatiere() &&
                    // array_key_exists($p->getIntervenant()->getNumeroHarpege(), $tabProf) &&
                    array_key_exists($p->getSalle(), $tabSalles)) {
                    /*
                     * # 1= jour de la semaine (ex: 1 pour lundi)
    # 2= heure de debut (ex: 11:00)
    # 3= heure de fin (ex: 12:30)
    # 4= indice du prof (ex: 1 Annebicque)
    # 5= indice de la salle (ex:1 premiere salle de la liste bat H)
    # 6= indice de la matiere (ex:1 premiere matiere de la liste des matieres)
    # 7= type de cours (CM=1, TD=4, TP=6)
                     */
                    $codeMatiere = $matieres[$p->getTypeIdMatiere()]->codeElement;
//                if (2 === $semestre->getOrdreLmd()) {
//                   // $codeMatiere = 'W'.$codeMatiere;
//                    $codeMatiere
//                }
                    $code[mb_strtoupper($p->getType())][$p->getGroupe()] .= 'call  ajouter '.$p->getJour().' '.Constantes::TAB_HEURES[$p->getDebut()].' '.Constantes::TAB_HEURES[$p->getFin()].' '.$codeprof.' '.$tabSalles[$p->getSalle()].' '.$codeMatiere.' '.$tabType[mb_strtoupper($p->getType())].' '.$p->getSalle()."\n";
                }
                if (0 !== $p->getIdMatiere() && 'H018' === $p->getSalle()) { // array_key_exists($p->getIntervenant()->getNumeroHarpege(), $tabProf))
                    $codeMatiere = $matieres[$p->getTypeIdMatiere()]->codeElement;
                    $code[mb_strtoupper($p->getType())][$p->getGroupe()] .= 'call  ajouterh018 '.$p->getJour().' '.Constantes::TAB_HEURES[$p->getDebut()].' '.Constantes::TAB_HEURES[$p->getFin()].' '.$codeprof.' 0 '.$codeMatiere.' '.$tabType[mb_strtoupper($p->getType())]."\n";
                }
            }
            $codeComplet = '';
            $zip = new ZipArchive();
            $zipName = $kernel->getProjectDir().'/public/upload/temp/ajouter_S'.$calendrier->getSemaineReelle().'_'.$semestre->getLibelle().'.zip';
            @unlink($zipName);
            $zip->open($zipName, ZipArchive::CREATE);
            $i = 0;
            foreach ($code as $type => $value) {
                foreach ($value as $groupe => $c) {
                    $codeComplet .= 'call groupe '.$i."\n";

                    $n = $semestre->getLibelle().'_S'.$calendrier->getSemaineReelle().'_'.$type.'_'.str_replace(' ', '_',$codeGroupe[$type.'_'.$groupe]).'.bat';

                    $zip->addFromString($n, $c);
                    $codeComplet .= 'call '.$n." \n";
                    $codeComplet .= 'call fingroupe '."\n";
                    ++$i;
                }
            }
            $zip->addFromString('script'.$calendrier->getSemaineReelle().'.bat', $codeComplet);
            $zip->close();
            $response = new Response(file_get_contents($zipName));
            $response->headers->set('Content-Type', 'application/zip');
            $response->headers->set('Content-Disposition',
                'attachment;filename="ajouter_S'.$calendrier->getSemaineReelle().'_'.$semestre->getLibelle().'.zip"');
            $response->headers->set('Content-length', (string) filesize($zipName));

            return $response;
        }

        throw new SemestreNotFoundException();
    }

    #[Route(path: '/one/{personnel}/{source}.{_format}', name: 'administration_edt_export_one', requirements: ['source' => 'intranet|celcat'])]
    public function exportOne(MyEdtExport $myEdtExport, Personnel $personnel, string $source, string $_format): Response
    {
        $myEdtExport->genereOneDocument($source, $_format, $personnel, $this->getDepartement());

        return $this->redirectToRoute('administration_edt_export_voir');
    }

    #[Route(path: '/tous/{source}.{_format}', name: 'administration_edt_export_all', requirements: ['source' => 'intranet|celcat'])]
    public function exportAll(MyEdtExport $myEdtExport, string $source, string $_format): Response
    {
        $myEdtExport->genereAllDocument($source, $_format, $this->getDepartement());

        return $this->redirectToRoute('administration_edt_export_voir');
    }

    /**
     * @throws LoaderError
     * @throws RuntimeError
     * @throws SyntaxError
     */
    #[Route(path: '/profs/{source}.pdf', name: 'administration_edt_export_profs', requirements: ['source' => 'intranet|celcat'])]
    public function exportProfs(Request $request, PersonnelRepository $personnelRepository, MyEdtExport $myEdtExport, string $source): Response
    {
        $profs = $request->request->all()['personnels'];
        foreach ($profs as $prof) {
            $personnel = $personnelRepository->find($prof);
            if (null !== $personnel) {
                $myEdtExport->generePdf($personnel, $source, $this->getDepartement());
            }
        }

        return $this->redirectToRoute('administration_edt_export_voir');
    }
}
