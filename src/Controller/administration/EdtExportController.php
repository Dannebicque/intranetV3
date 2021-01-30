<?php
// Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
// @file /Users/davidannebicque/htdocs/intranetV3/src/Controller/administration/EdtExportController.php
// @author davidannebicque
// @project intranetV3
// @lastUpdate 30/01/2021 13:37

namespace App\Controller\administration;

use App\Classes\Edt\MyEdtExport;
use App\Controller\BaseController;
use App\Entity\Constantes;
use App\Repository\EdtPlanningRepository;
use App\Repository\GroupeRepository;
use App\Repository\PersonnelRepository;
use App\Repository\SemestreRepository;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpKernel\KernelInterface;
use Symfony\Component\Routing\Annotation\Route;
use Twig\Error\LoaderError;
use Twig\Error\RuntimeError;
use Twig\Error\SyntaxError;
use ZipArchive;

/**
 * Class EdtController
 * @package App\Controller\administration
 * @Route("/administration/emploi-du-temps/export")
 */
class EdtExportController extends BaseController
{
    /**
     * @Route("/voir", name="administration_edt_export_voir", requirements={"source"="intranet|celcat"})
     *
     *
     * @param MyEdtExport $myEdtExport
     *
     * @return Response
     */
    public function voirPdf(
        MyEdtExport $myEdtExport
    ): Response {
        return $this->render('administration/edtExport/voir.html.twig', [
            'docs' => $myEdtExport->getAllDocs($this->dataUserSession->getDepartement())
        ]);
    }

    /**
     * @Route("/{source}", name="administration_edt_export_index", requirements={"source"="intranet|celcat"})
     *
     *
     * @param $source
     *
     * @return Response
     */
    public function index($source): Response
    {
        return $this->render('administration/edtExport/index.html.twig', [
            'source' => $source
        ]);
    }


    /**
     * @Route("/script/{source}", name="administration_edt_export_script", requirements={"source"="intranet|celcat"})
     *
     *
     * @param SemestreRepository $semestreRepository
     * @param GroupeRepository   $groupeRepository
     * @param                    $source
     *
     * @return Response
     */
    public function exportScript(
        SemestreRepository $semestreRepository,
        GroupeRepository $groupeRepository,
        $source
    ): Response {
        $semestres = $semestreRepository->findByDepartement($this->getDepartement());
        $groupes = $groupeRepository->findByDepartement($this->getDepartement());

        return $this->render('administration/edtExport/exportScript.html.twig', [
            'semestres' => $semestres,
            'groupes'   => $groupes
        ]);
    }

    /**
     * @Route("/script-ajax", name="administration_edt_export_script_ajax")
     *
     *
     * @return Response
     */
    public function exportScriptAjax(
        KernelInterface $kernel,
        Request $request,
        EdtPlanningRepository $edtPlanningRepository,
        SemestreRepository $semestreRepository
    ): Response {
        $semestre = $semestreRepository->find($request->request->get('semestre'));
        $semaine = $request->request->get('semaine');

        $tabProf = [
            16041,
            33407,
            34188,
            3601,
            33513,
            32822,
            3132,
            30722,
            31405,
            3604,
            33740,
            25261,
            3680,
            3994,
            22885,
            2569,
            6509,
            20289,
            24594,
            20900,
            3920,
            30125,
            22615,
            2158,
            14478,
            34044,
            21399
        ];
        $tabProf = array_flip($tabProf);

        $tabMatieres = [
            'S1'  => [
                '3TW11101' => 0,
                '3TW11102' => 1,
                '3TW11103' => 2,
                '3TW11104' => 3,
                '3TW11105' => 4,
                '3TW11106' => 5,
                '3TW11107' => 6,
                '3TW11108' => 7,
                '3TW11109' => 8,
                '3TW11201' => 9,
                '3TW11202' => 10,
                '3TW11203' => 11,
                '3TW11204' => 12,
                '3TW11205' => 13,
                '3TW11206' => 14,
                '3TW11207' => 15
            ],
            'S2'  => [],
            'S3D' => [],
            'S4'  => [
                '3TW4X101' => 0,
                '3TW4X102' => 1,
                '3TW4B103' => 3,
                '3TW4X103' => 4,
                '3TW4A103' => 5,
                '3TW4M103' => 6,
                '3TW4S103' => 7,
                '3TW4X110' => 8,
                '3TW4X111' => 9,
                '3TW4X201' => 10,
                '3TW4M203' => 11,
                '3TW4A203' => 12,
                '3TW4B203' => 13,
                '3TW4S203' => 14,
                '3TW4X204' => 15,
                '3TW4X210' => 16,
                '3TW4X211' => 17,
            ]
        ];

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
            'H007+DIS1',
            'H006+DIS2',
            'H005+DIS3',
            'DIS4+H201',
            'DIS1+H007',
            'DIS3+H205',
            'H008+DIS2',
            'H008+DIS1',
            'H007+DIS2',
            'DIS4+H005',
        ];
        $tabSalles = array_flip($tabSalles);

        $pl = $edtPlanningRepository->findEdtSemestre($semestre, $semaine);
        $code = [];
        $codeGroupe = [];

        foreach ($semestre->getTypeGroupes() as $tg) {
            $code[$tg->getType()] = [];
            foreach ($tg->getGroupes() as $groupe) {
                $code[strtoupper($tg->getType())][$groupe->getOrdre()] = 'sleep 5' . "\n";
                $codeGroupe[strtoupper($tg->getType()) . '_' . $groupe->getOrdre()] = $groupe->getLibelle();
            }
        }

        foreach ($pl as $p) {
            if (
                $p->getIntervenant() !== null &&
                $p->getMatiere() !== null &&
                array_key_exists($p->getIntervenant()->getNumeroHarpege(), $tabProf) &&
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
                $code[strtoupper($p->getType())][$p->getGroupe()] .= './ajouter ' . $p->getJour() . ' ' . Constantes::TAB_HEURES[$p->getDebut()] . ' ' . Constantes::TAB_HEURES[$p->getFin()] . ' ' . $tabProf[$p->getIntervenant()->getNumeroHarpege()] . ' ' . $tabSalles[$p->getSalle()] . ' ' . $tabMatieres[$semestre->getLibelle()][$p->getMatiere()->getCodeElement()] . ' ' . $tabType[strtoupper($p->getType())] . "\n";
            }
        }

        $zip = new ZipArchive();
        $zipName = $kernel->getProjectDir() . '/public/upload/temp/ajouter_S' . $semaine . '_' . $semestre->getLibelle() . '.zip';

        $zip->open($zipName, ZipArchive::OVERWRITE);

        foreach ($code as $type => $value) {
            foreach ($value as $groupe => $c) {
                $zip->addFromString($semestre->getLibelle() . '_S' . $semaine . '_' . $type . '_' . $codeGroupe[$type . '_' . $groupe] . '.sh',
                    $c);
            }
        }

        $zip->close();

        $response = new Response(file_get_contents($zipName));
        $response->headers->set('Content-Type', 'application/zip');
        $response->headers->set('Content-Disposition', 'attachment;filename="' . $zipName . '"');
        $response->headers->set('Content-length', filesize($zipName));

        return $response;

    }

    /**
     * @Route("/tous/{source}.{_format}", name="administration_edt_export_all",
     *                                    requirements={"source"="intranet|celcat"})
     *
     *
     * @param MyEdtExport $myEdtExport
     * @param             $source
     *
     * @param             $_format
     *
     * @return Response
     */
    public function exportAll(MyEdtExport $myEdtExport, $source, $_format): Response
    {
        $myEdtExport->genereAllDocument($source, $_format, $this->dataUserSession->getDepartement());

        return $this->redirectToRoute('administration_edt_export_voir');
    }

    /**
     * @Route("/profs/{source}.pdf", name="administration_edt_export_profs",
     *                                    requirements={"source"="intranet|celcat"})
     *
     *
     * @param Request             $request
     * @param PersonnelRepository $personnelRepository
     * @param MyEdtExport         $myEdtExport
     * @param                     $source
     *
     * @return Response
     * @throws LoaderError
     * @throws RuntimeError
     * @throws SyntaxError
     */
    public function exportProfs(
        Request $request,
        PersonnelRepository $personnelRepository,
        MyEdtExport $myEdtExport,
        $source
    ) {
        $profs = $request->request->get('personnels');

        foreach ($profs as $prof) {
            $personnel = $personnelRepository->find($prof);
            if ($personnel !== null) {
                $myEdtExport->generePdf($personnel, $source, $this->getDepartement());
            }
        }

        return $this->redirectToRoute('administration_edt_export_voir');
    }


}
