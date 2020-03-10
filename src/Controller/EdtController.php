<?php
// Copyright (C) 11 / 2019 | David annebicque | IUT de Troyes - All Rights Reserved
// @file /Users/davidannebicque/htdocs/intranetv3/src/Controller/EdtController.php
// @author     David Annebicque
// @project intranetv3
// @date 25/11/2019 10:20
// @lastUpdate 23/11/2019 09:14

namespace App\Controller;

use App\Entity\Semestre;
use App\MesClasses\Edt\MyEdt;
use App\MesClasses\Edt\MyEdtCelcat;
use App\MesClasses\Edt\MyEdtExport;
use App\MesClasses\Pdf\MyPDF;
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
    private static $tabHeures = [
        1 => ['8h00', '9h30'],
        2 => ['9h30', '11h00'],
        3 => ['11h00', '12h30'],
        4 => ['12h30', '14h00'],
        5 => ['14h00', '15h30'],
        6 => ['15h30', '17h00'],
        7 => ['17h00', '18h30']
    ];
    /**
     * @var MyEdt
     */
    private $myEdt;
    /** @var MyEdtCelcat */
    private $myEdtCelcat;

    public function __construct(MyEdt $myEdt, MyEdtCelcat $myEdtCelcat)
    {
        $this->myEdt = $myEdt;
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
                    'tabHeures' => self::$tabHeures
                ]);
            }

            $this->myEdt->initPersonnel($this->getConnectedUser(), $this->dataUserSession->getAnneeUniversitaire(),
                $semaine);

            return $this->render('edt/_intervenant.html.twig', [
                'edt'       => $this->myEdt,
                'filtre'    => 'prof',
                'valeur'    => $this->getConnectedUser()->getId(),
                'tabHeures' => self::$tabHeures
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
                'valeur'    => $semestre->getId(),
                'tabHeures' => self::$tabHeures
            ]);
        }

        $this->myEdt->initSemestre($semaine, $semestre, $this->dataUserSession->getAnneeUniversitaire());

        return $this->render('edt/_semestre.html.twig', [
            'edt'       => $this->myEdt,
            'semestre'  => $semestre,
            'filtre'    => 'promo',
            'valeur'    => $semestre->getId(),
            'tabHeures' => self::$tabHeures
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
                    'tabHeures' => self::$tabHeures
                ]);
            }
            $this->myEdt->initEtudiant($this->getConnectedUser(), $this->dataUserSession->getAnneeUniversitaire(),
                $semaine);

            return $this->render('edt/_etudiant.html.twig', [
                'edt'       => $this->myEdt,
                'tabHeures' => self::$tabHeures
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
    ): ?RedirectResponse {
        if ($semaine === 0) {
            $semaine = (int)date('W');
        }

        if ($semaine != date('W') && $semaine != (date('W') + 1)) {
            return $this->redirect($this->generateUrl('erreur_666'));
        }

        if ($this->dataUserSession->getDepartement() !== null && $this->dataUserSession->getDepartement()->isOptUpdateCelcat() === true) {
            $edt = $this->myEdtCelcat->initEtudiant($this->getConnectedUser(),
                $this->dataUserSession->getAnneeUniversitaire(), $semaine);
        } else {
            $edt = $this->myEdt->initEtudiant($this->getConnectedUser(),
                $this->dataUserSession->getAnneeUniversitaire(), $semaine);
        }

        $myPDF->generePdf('pdf/edtPersoSemaine.html.twig', ['edt' => $edt, 'tabHeures' => self::$tabHeures],
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
     * @param MyEdt                 $myEdt
     * @param EdtPlanningRepository $edtPlanningRepository
     * @param                       $event
     * @param                       $type
     *
     * @return Response|null
     */
    public function detailEvent(MyEdt $myEdt, EdtPlanningRepository $edtPlanningRepository, $event, $type): ?Response
    {
        if ($type === 'planning') {
            $pl = $edtPlanningRepository->find($event);

            return $this->render('edt/_details.html.twig', ['event' => $myEdt->transformeDetails($pl)]);
        }

        return null;
    }

}
