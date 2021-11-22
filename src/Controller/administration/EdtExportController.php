<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Controller/administration/EdtExportController.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 03/11/2021 17:40
 */

namespace App\Controller\administration;

use App\Classes\Edt\MyEdtExport;
use App\Classes\Matieres\TypeMatiereManager;
use App\Controller\BaseController;
use App\Entity\Constantes;
use App\Entity\Personnel;
use App\Repository\CalendrierRepository;
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
use function array_key_exists;

/**
 * Class EdtController.
 *
 * @Route("/administration/emploi-du-temps/export")
 */
class EdtExportController extends BaseController
{
    /**
     * @Route("/voir", name="administration_edt_export_voir", requirements={"source"="intranet|celcat"})
     */
    public function voirPdf(
        MyEdtExport $myEdtExport
    ): Response {
        return $this->render('administration/edtExport/voir.html.twig', [
            'docs' => $myEdtExport->getAllDocs($this->dataUserSession->getDepartement()),
        ]);
    }

    /**
     * @Route("/{source}", name="administration_edt_export_index", requirements={"source"="intranet|celcat"})
     */
    public function index($source): Response
    {
        return $this->render('administration/edtExport/index.html.twig', [
            'source' => $source,
        ]);
    }

    /**
     * @Route("/script/{source}", name="administration_edt_export_script", requirements={"source"="intranet|celcat"})
     */
    public function exportScript(
        SemestreRepository $semestreRepository,
        GroupeRepository $groupeRepository,
        CalendrierRepository $calendrierRepository,
        $source
    ): Response {
        $semestres = $semestreRepository->findByDepartementActif($this->getDepartement());
        $groupes = $groupeRepository->findByDepartementSemestreActif($this->getDepartement());
        $semaines = $calendrierRepository->findByAnneeUniversitaire($this->getAnneeUniversitaire());

        return $this->render('administration/edtExport/exportScript.html.twig', [
            'semestres' => $semestres,
            'groupes' => $groupes,
            'semaines' => $semaines,
        ]);
    }

    /**
     * @Route("/script-ajax", name="administration_edt_export_script_ajax")
     */
    public function exportScriptAjax(
        TypeMatiereManager $typeMatiereManager,
        KernelInterface $kernel,
        Request $request,
        GroupeRepository $groupeRepository,
        CalendrierRepository $calendrierRepository,
        EdtPlanningRepository $edtPlanningRepository,
        SemestreRepository $semestreRepository
    ): Response {
        $semestre = $semestreRepository->find($request->request->get('semestre'));
        $semaine = $request->request->get('semaine');
        $calendrier = $calendrierRepository->findOneBy([
            'semaineFormation' => $semaine,
            'anneeUniversitaire' => $this->getAnneeUniversitaire()->getId(),
        ]);

        $tabMatieres = [
            'S1' => [
                'TSBZ1M01' => 0,
                'TSBZ1202' => 1,
                'TSBZ1103' => 2,
                'TSBZ1104' => 3,
                'TSBZ1M05' => 4,
                'TSBZ1M06' => 5,
                'TSBZ1307' => 6,
                'TSBZ1308' => 7,
                'TSBZ1M09' => 8,
                'TSBZ1310' => 9,
                'TSBZ1412' => 10,
                'TSBZ1413' => 11,
                'TSBZ1415' => 12,
                'TSBZ1M16' => 13,
                'TSBZ1517' => 14,
                'TSBZ1M18' => 15,
                'TSBZ1519' => 16,
                'TSBZ1151' => 17,
                'TSBZ1252' => 18,
                'TSBZ1353' => 19,
                'TSBZ1354' => 20,
                'TSBZ1455' => 21,
                'TSBZ1556' => 22,
                'TSBZ1M60' => 23,
            ],
            'S3' => [
                '3TW33101' => 0,
                '3TW33102' => 1,
                '3TW33103' => 2,
                '3TW33104' => 3,
                '3TW33105' => 4,
                '3TW33106' => 5,
                '3TW33107' => 6,
                '3TW33108' => 7,
                '3TW33109' => 8,
                '3TW33110' => 9,
                '3TW33201' => 10,
                '3TW33202' => 11,
                '3TW33203' => 12,
                '3TW33204' => 13,
                '3TW33205' => 14,
                '3TW33206' => 15,
                '3TW33207' => 16,
                '3TW33212' => 17,
            ],
            'S4D' => [
                '3TW8X101' => 0,
                '3TW8X102' => 1,
                '3TW8D103' => 2,
                '3TW8X103' => 3,
                '3TW8M103' => 4,
                '3TW8X110' => 5,
                '3TW8X111' => 6,
                '3TW8X201' => 7,
                '3TW8M203' => 8,
                '3TW8D203' => 9,
                '3TW8X204' => 10,
                '3TW8X210' => 11,
                '3TW8X211' => 12
            ],
            'S4' => [
                '3TW4X101' => 0,
                '3TW4X102' => 1,
                '3TW4B103' => 2,
                '3TW4X103' => 3,
                '3TW4A103' => 4,
                '3TW4M103' => 5,
                '3TW4S103' => 6,
                '3TW4X110' => 7,
                '3TW4X111' => 8,
                '3TW4X201' => 9,
                '3TW4M203' => 10,
                '3TW4A203' => 11,
                '3TW4B203' => 12,
                '3TW4S203' => 13,
                '3TW4X204' => 14,
                '3TW4X210' => 15,
                '3TW4X211' => 16,
            ],
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
            'DIS7',
            'DIS8',
            'DISLP',
        ];
        $tabSalles = array_flip($tabSalles);

        $pl = $edtPlanningRepository->findEdtSemestre($semestre, $semaine);
        $matieres = $typeMatiereManager->findBySemestreArray($semestre);

        $code = [];
        $codeGroupe = [];

        foreach ($semestre->getTypeGroupes() as $tg) {
            $code[$tg->getType()] = [];
            $groupes = $groupeRepository->findBy(['typeGroupe' => $tg->getId()], ['ordre' => 'ASC']);
            foreach ($groupes as $groupe) {
                $code[mb_strtoupper($tg->getType())][$groupe->getOrdre()] = 'call sleep 5' . "\n";
                $codeGroupe[mb_strtoupper($tg->getType()) . '_' . $groupe->getOrdre()] = $groupe->getLibelle();
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
                $code[mb_strtoupper($p->getType())][$p->getGroupe()] .= 'call  ajouter ' . $p->getJour() . ' ' . Constantes::TAB_HEURES[$p->getDebut()] . ' ' . Constantes::TAB_HEURES[$p->getFin()] . ' ' . $codeprof . ' ' . $tabSalles[$p->getSalle()] . ' ' . $tabMatieres[$semestre->getLibelle()][$codeMatiere] . ' ' . $tabType[mb_strtoupper($p->getType())] . "\n";
            }
            if (0 !== $p->getIdMatiere() && 'H018' === $p->getSalle()) { // array_key_exists($p->getIntervenant()->getNumeroHarpege(), $tabProf))
                $codeMatiere = $matieres[$p->getTypeIdMatiere()]->codeElement;
                $code[mb_strtoupper($p->getType())][$p->getGroupe()] .= 'call  ajouterh018 ' . $p->getJour() . ' ' . Constantes::TAB_HEURES[$p->getDebut()] . ' ' . Constantes::TAB_HEURES[$p->getFin()] . ' ' . $codeprof . ' 0 ' . $tabMatieres[$semestre->getLibelle()][$codeMatiere] . ' ' . $tabType[mb_strtoupper($p->getType())] . "\n";
            }
        }

        $codeComplet = '';

        $zip = new ZipArchive();
        $zipName = $kernel->getProjectDir() . '/public/upload/temp/ajouter_S' . $calendrier->getSemaineReelle() . '_' . $semestre->getLibelle() . '.zip';
        @unlink($zipName);
        $zip->open($zipName, ZipArchive::CREATE);
        $i = 0;
        foreach ($code as $type => $value) {
            foreach ($value as $groupe => $c) {
                $codeComplet .= 'call groupe ' . $i . "\n";

                $n = $semestre->getLibelle() . '_S' . $calendrier->getSemaineReelle() . '_' . $type . '_' . $codeGroupe[$type . '_' . $groupe] . '.bat';

                $zip->addFromString($n, $c);
                $codeComplet .= 'call ' . $n . " \n";
                $codeComplet .= 'call fingroupe ' . "\n";
                ++$i;
            }
        }

        $zip->addFromString('script' . $calendrier->getSemaineReelle() . '.bat', $codeComplet);
        $zip->close();

        $response = new Response(file_get_contents($zipName));
        $response->headers->set('Content-Type', 'application/zip');
        $response->headers->set('Content-Disposition',
            'attachment;filename="ajouter_S' . $calendrier->getSemaineReelle() . '_' . $semestre->getLibelle() . '.zip"');
        $response->headers->set('Content-length', filesize($zipName));

        return $response;
    }

    /**
     * @Route("/one/{personnel}/{source}.{_format}", name="administration_edt_export_one",
     *                                    requirements={"source"="intranet|celcat"})
     */
    public function exportOne(MyEdtExport $myEdtExport, Personnel $personnel, $source, $_format): Response
    {
        $myEdtExport->genereOneDocument($source, $_format, $personnel, $this->dataUserSession->getDepartement());

        return $this->redirectToRoute('administration_edt_export_voir');
    }

    /**
     * @Route("/tous/{source}.{_format}", name="administration_edt_export_all",
     *                                    requirements={"source"="intranet|celcat"})
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
     * @throws LoaderError
     * @throws RuntimeError
     * @throws SyntaxError
     */
    public function exportProfs(
        Request $request,
        PersonnelRepository $personnelRepository,
        MyEdtExport $myEdtExport,
        $source
    ): Response {
        $profs = $request->request->get('personnels');

        foreach ($profs as $prof) {
            $personnel = $personnelRepository->find($prof);
            if (null !== $personnel) {
                $myEdtExport->generePdf($personnel, $source, $this->getDepartement());
            }
        }

        return $this->redirectToRoute('administration_edt_export_voir');
    }
}
