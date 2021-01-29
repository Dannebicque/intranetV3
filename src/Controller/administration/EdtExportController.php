<?php
// Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
// @file /Users/davidannebicque/htdocs/intranetV3/src/Controller/administration/EdtExportController.php
// @author davidannebicque
// @project intranetV3
// @lastUpdate 29/01/2021 11:39

namespace App\Controller\administration;

use App\Classes\Edt\MyEdtExport;
use App\Controller\BaseController;
use App\Entity\Constantes;
use App\Entity\Groupe;
use App\Entity\Semestre;
use App\Repository\EdtPlanningRepository;
use App\Repository\GroupeRepository;
use App\Repository\PersonnelRepository;
use App\Repository\SemestreRepository;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Twig\Error\LoaderError;
use Twig\Error\RuntimeError;
use Twig\Error\SyntaxError;

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
     * @Route("/script-ajax/{semestre}/{groupe}/{debut}/{fin}", name="administration_edt_export_script_ajax",
     *                                                          options={"expose":true})
     *
     *
     * @return Response
     */
    public function exportScriptAjax(
        EdtPlanningRepository $edtPlanningRepository,
        Semestre $semestre,
        Groupe $groupe,
        int $debut,
        int $fin = 0
    ): Response {
        $pl = $edtPlanningRepository->findEdtSemestre($semestre, $debut);
        $code = '';
        foreach ($pl as $p) {
            if ($p->getType() === $groupe->getTypeGroupe()->getType() && $p->getGroupe() === $groupe->getOrdre()) {
                $code .= 'ajouter ' . $p->getJour() . ' ' . Constantes::TAB_HEURES[$p->getDebut()] . ' ' . Constantes::TAB_HEURES[$p->getFin()] . "\n";
            }
        }


        return $this->json(['code' => $code]);
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
