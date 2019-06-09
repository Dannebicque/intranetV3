<?php
/**
 * Copyright (C) 2013 - 2019 | David annebicque | IUT de Troyes - All Rights Reserved
 *
 * @file /Users/davidannebicque/htdocs/intranetv3/src/Controller/EdtController.php
 * @author David annebicque
 * @project intranetv3
 * @date  07/05/2019 10:42
 * @lastUpdate 07/05/2019 10:42
 *
 */

namespace App\Controller;

use App\MesClasses\Edt\MyEdt;
use App\MesClasses\Edt\MyEdtCelcat;
use App\MesClasses\Pdf\MyPDF;
use Dompdf\Options;
use Exception;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

/**
 * Class EdtController
 * @package App\Controller
 * @Route("/emploi-du-temps")
 */
class EdtController extends BaseController
{
    /**
     * @var MyEdt
     */
    private $myEdt;

    /** @var MyEdtCelcat */
    private $myEdtCelcat;

    private static $tabHeures = [
        1  => ['8h00', '9h30'],
        2  => ['9h30', '11h00'],
        3  => ['11h00', '12h30'],
        4 => ['12h30', '14h00'],
        5 => ['14h00', '15h30'],
        6 => ['15h30', '17h00'],
        7 => ['17h00', '18h30']];


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
    public function dashboardPersonnel($semaine=0): Response
    {
        if ($this->getConnectedUser() !== null) {

            if ($this->dataUserSession->getDepartement() !== null && $this->dataUserSession->getDepartement()->isOptUpdateCelcat() === true) {
                $this->myEdtCelcat->initPersonnel($this->getConnectedUser(), $semaine);

                return $this->render('edt/_intervenant.html.twig', [
                    'edt' => $this->myEdtCelcat
                ]);
            }

            $this->myEdt->initPersonnel($this->getConnectedUser(), $semaine);

            return $this->render('edt/_intervenant.html.twig', [
                'edt' => $this->myEdt,
                'tabHeures' => self::$tabHeures
            ]);
        }

        return $this->render('bundles/TwigBundle/Exception/error500.html.twig');
    }

    /**
     * @param int $semaine
     * @return Response
     * @throws Exception
     */
    public function dashboardEtudiant($semaine=0): Response
    {
        if ($this->getConnectedUser() !== null) {

            if ($this->dataUserSession->getDepartement() !== null && $this->dataUserSession->getDepartement()->isOptUpdateCelcat() === true) {
                $this->myEdtCelcat->initEtudiant($this->getConnectedUser(), $semaine);

                return $this->render('edt/_etudiant.html.twig', [
                    'edt' => $this->myEdtCelcat
                ]);
            }

            $this->myEdt->initEtudiant($this->getConnectedUser(), $semaine);

            return $this->render('edt/_etudiant.html.twig', [
                'edt' => $this->myEdt,
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
     */
    public function exportIntervenantIcal(): void
    {
        //todo: a proposer aux étudiants également ? visibilité réduite?
    }

    /**
     * @Route("/intervenant/synchro/ical", name="edt_intervenant_synchro_ical")
     */
    public function synchroIntervenantIcal(): void
    {
        //todo: a proposer aux étudiants également ? visibilité réduite?
    }

    /**
     * @Route("/etudiant/export/semaine/{semaine}", name="edt_etudiant_export_semaine_courante")
     * @param MyPDF $myPDF
     * @param int   $semaine
     * @return \Symfony\Component\HttpFoundation\RedirectResponse
     * @throws \Twig\Error\LoaderError
     * @throws \Twig\Error\RuntimeError
     * @throws \Twig\Error\SyntaxError
     */
    public function exportEtudiantSemaine(MyPDF $myPDF, $semaine = 0): ?\Symfony\Component\HttpFoundation\RedirectResponse
    {
        if ($semaine === 0) {
            $semaine = (int)date('W');
        }

        if ($semaine != date('W') && $semaine != (date('W') + 1)) {
            return $this->redirect($this->generateUrl('erreur_666'));
        }

        if ($this->dataUserSession->getDepartement() !== null && $this->dataUserSession->getDepartement()->isOptUpdateCelcat() === true) {
            $edt = $this->myEdtCelcat->initEtudiant($this->getConnectedUser(), $semaine);
        } else {
            $edt = $this->myEdt->initEtudiant($this->getConnectedUser(), $semaine);
        }

        $myPDF->generePdf('pdf/edtPersoSemaine.html.twig', ['edt' => $edt,'tabHeures' => self::$tabHeures], 'export-semaine-edt', $this->dataUserSession->getDepartement()->getLibelle());
    }

    /**
     * @Route("/etudiant/export/ical", name="edt_etudiant_export_ical")
     */
    public function exportEtudiantIcal(): void
    {
        //todo: a proposer aux étudiants également ? visibilité réduite?
    }

    /**
     * @Route("/interetudiantvenant/synchro/ical", name="edt_etudiant_synchro_ical")
     */
    public function synchroEtudiantIcal(): void
    {
        //todo: a proposer aux étudiants également ? visibilité réduite?
    }


}
