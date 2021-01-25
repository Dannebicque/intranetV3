<?php
// Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
// @file /Users/davidannebicque/htdocs/intranetV3/src/Controller/EdtController.php
// @author davidannebicque
// @project intranetV3
// @lastUpdate 25/01/2021 09:14

namespace App\Controller;

use App\Entity\Constantes;
use App\Entity\Semestre;
use App\Classes\Edt\MyEdtIntranet;
use App\Classes\Edt\MyEdtCelcat;
use App\Classes\Edt\MyEdtExport;
use App\Classes\Pdf\MyPDF;
use App\Repository\EdtPlanningRepository;
use Exception;
use Symfony\Component\HttpFoundation\RedirectResponse;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Routing\Generator\UrlGeneratorInterface;
use Twig\Error\LoaderError;
use Twig\Error\RuntimeError;
use Twig\Error\SyntaxError;

/**
 * Class EdtController
 * @package App\Controller
 * @Route("/emploi-du-temps")
 */
class EdtController extends BaseController
{

    private MyEdtIntranet $myEdtIntranet;
    private MyEdtCelcat $myEdtCelcat;

    public function __construct(MyEdtIntranet $myEdt, MyEdtCelcat $myEdtCelcat)
    {
        $this->myEdtIntranet = $myEdt;
        $this->myEdtCelcat = $myEdtCelcat;
    }

    /**
     *
     * @param int $semaine
     *
     * @return Response
     * @throws Exception
     */
    public function dashboardPersonnel($semaine = 0): Response
    {
        if ($this->getConnectedUser() !== null) {

            if ($this->dataUserSession->getDepartement() !== null && $this->dataUserSession->getDepartement()->isOptUpdateCelcat() === true) {
                $this->myEdtCelcat->initPersonnel($this->getConnectedUser(),
                    $this->dataUserSession->getAnneeUniversitaire(), $semaine);

                return $this->render('edt/_intervenant.html.twig', [
                    'edt'       => $this->myEdtCelcat,
                    'filtre'    => 'prof',
                    'valeur'    => $this->getConnectedUser()->getId(),
                    'tabHeures' => Constantes::TAB_HEURES_EDT
                ]);
            }

            $this->myEdtIntranet->initPersonnel($this->getConnectedUser(),
                $this->dataUserSession->getAnneeUniversitaire(),
                $semaine);

            return $this->render('edt/_intervenant.html.twig', [
                'edt'       => $this->myEdtIntranet,
                'filtre'    => 'prof',
                'valeur'    => $this->getConnectedUser()->getId(),
                'tabHeures' => Constantes::TAB_HEURES_EDT
            ]);
        }

        return $this->render('bundles/TwigBundle/Exception/error500.html.twig');
    }

    public function personnelSemestre(Semestre $semestre, $semaine = 0): Response
    {

        if ($this->dataUserSession->getDepartement() !== null && $this->dataUserSession->getDepartement()->isOptUpdateCelcat() === true) {
            $this->myEdtCelcat->initSemestre($semaine, $semestre, $this->dataUserSession->getAnneeUniversitaire());

            return $this->render('edt/_semestre.html.twig', [
                'edt'       => $this->myEdtCelcat,
                'semestre'  => $semestre,
                'filtre'    => 'promo',
                'valeur'    => $semestre->getId(),
                'tabHeures' => Constantes::TAB_HEURES_EDT
            ]);
        }

        $this->myEdtIntranet->initSemestre($semaine, $semestre, $this->dataUserSession->getAnneeUniversitaire());

        return $this->render('edt/_semestre.html.twig', [
            'edt'       => $this->myEdtIntranet,
            'semestre'  => $semestre,
            'filtre'    => 'promo',
            'valeur'    => $semestre->getId(),
            'tabHeures' => Constantes::TAB_HEURES_EDT
        ]);
    }

    /**
     * @param int $semaine
     *
     * @return Response
     * @throws Exception
     */
    public function dashboardEtudiant($semaine = 0): Response
    {

        if ($this->getConnectedUser() !== null) {
            if ($this->dataUserSession->getDepartement() !== null && $this->dataUserSession->getDepartement()->isOptUpdateCelcat() === true) {
                $this->myEdtCelcat->initEtudiant($this->getConnectedUser(),
                    $this->dataUserSession->getAnneeUniversitaire(), $semaine);

                return $this->render('edt/_etudiant.html.twig', [
                    'edt'       => $this->myEdtCelcat,
                    'tabHeures' => Constantes::TAB_HEURES_EDT
                ]);

            }
            $this->myEdtIntranet->initEtudiant($this->getConnectedUser(),
                $this->dataUserSession->getAnneeUniversitaire(),
                $semaine);

            return $this->render('edt/_etudiant.html.twig', [
                'edt'       => $this->myEdtIntranet,
                'tabHeures' => Constantes::TAB_HEURES_EDT
            ]);
        }

        return $this->render('bundles/TwigBundle/Exception/error500.html.twig');
    }

    /**
     * @Route("/intervenant/export/semaine/{semaine}", name="edt_intervenant_export_semaine_courante")
     */
    public function exportIntervenantSemaine(): void
    {

    }

    /**
     * @Route("/semestre/export/semaine/{semaine}/{semestre}", name="edt_semestre_export_semaine_courante")
     * @param MyEdtExport $myEdtExport
     * @param             $semaine
     * @param Semestre    $semestre
     *
     * @throws LoaderError
     * @throws RuntimeError
     * @throws SyntaxError
     */
    public function exportSemestreSemaine(MyEdtExport $myEdtExport, $semaine, Semestre $semestre)
    {
        $myEdtExport->exportSemestre($semaine, $semestre);
    }

    /**
     * @Route("/intervenant/export/annee", name="edt_intervenant_export_annee")
     */
    public function exportIntervenantAnnee(): void
    {

    }

    /**
     * @Route("/intervenant/export/ical", name="edt_intervenant_export_ical")
     * @param MyEdtExport $myEdtExport
     *
     * @return Response
     */
    public function exportIntervenantIcal(MyEdtExport $myEdtExport): Response
    {
        $ical = $myEdtExport->export($this->getConnectedUser(), 'ics', 'personnel');

        return new Response($ical, 200, [
            'Content-Type'        => 'application/force-download',
            'Content-Disposition' => 'attachment; filename="export.ics"'
        ]);
    }

    /**
     * @Route("/intervenant/affiche/ical", name="edt_affiche_ical")
     */
    public function afficheLienIcal(): Response
    {
        if ($this->isEtudiant()) {
            return $this->render('edt/modal_lien_ical.html.twig', [
                'lienIcal' => $this->generateUrl('edt_etudiant_synchro_ical', [
                    'code'    => md5($this->getConnectedUser()->getSlug()),
                    '_format' => 'ics'
                ],
                    UrlGeneratorInterface::ABSOLUTE_URL)
            ]);
        }

        return $this->render('edt/modal_lien_ical.html.twig', [
            'lienIcal' => $this->generateUrl('edt_intervenant_synchro_ical', [
                'code'    => md5($this->getConnectedUser()->getSlug()),
                '_format' => 'ics'
            ],
                UrlGeneratorInterface::ABSOLUTE_URL)
        ]);

    }

    /**
     * @Route("/etudiant/export/semaine/{semaine}", name="edt_etudiant_export_semaine_courante")
     * @param MyPDF $myPDF
     * @param int   $semaine
     *
     * @return RedirectResponse
     * @throws LoaderError
     * @throws RuntimeError
     * @throws SyntaxError
     * @throws Exception
     */
    public function exportEtudiantSemaine(
        MyPDF $myPDF,
        $semaine = 0
    ) {
        if ($semaine === 0) {
            $semaine = (int)date('W');
        }

        if ($semaine !== (int)date('W') && $semaine !== ((int)date('W') + 1)) {
            return $this->redirect($this->generateUrl('erreur_666'));
        }

        if ($this->dataUserSession->getDepartement() !== null && $this->dataUserSession->getDepartement()->isOptUpdateCelcat() === true) {
            $edt = $this->myEdtCelcat->initEtudiant($this->getConnectedUser(),
                $this->dataUserSession->getAnneeUniversitaire(), $semaine);
        } else {
            $edt = $this->myEdtIntranet->initEtudiant($this->getConnectedUser(),
                $this->dataUserSession->getAnneeUniversitaire(), $semaine);
        }

        return $myPDF->generePdf('pdf/edt/edtPersoSemaine.html.twig',
            ['edt' => $edt, 'tabHeures' => Constantes::TAB_HEURES],
            'export-semaine-edt', $this->dataUserSession->getDepartement()->getLibelle());
    }

    /**
     * @Route("/etudiant/export/ical", name="edt_etudiant_export_ical")
     * @param MyEdtExport $myEdtExport
     *
     * @return Response
     */
    public function exportEtudiantIcal(MyEdtExport $myEdtExport): Response
    {
        //Le nombre de semaine selon la configuraiton
        $ical = $myEdtExport->export($this->getConnectedUser(), 'ics', 'etudiant');

        return new Response($ical, 200, [
            'Content-Type'        => 'application/force-download',
            'Content-Disposition' => 'attachment; filename="export.ics"'
        ]);
    }

    /**
     * @Route("/etudiant/details/{event}/{type}", name="edt_etudiant_detail_event")
     * @param MyEdtIntranet         $myEdt
     * @param EdtPlanningRepository $edtPlanningRepository
     * @param                       $event
     * @param                       $type
     *
     * @return Response|null
     */
    public function detailEvent(
        MyEdtIntranet $myEdt,
        EdtPlanningRepository $edtPlanningRepository,
        $event,
        $type
    ): ?Response {
        if ($type === 'planning') {
            $pl = $edtPlanningRepository->find($event);

            return $this->render('edt/_details.html.twig', ['event' => $myEdt->transformeDetails($pl)]);
        }

        return null;
    }

}
