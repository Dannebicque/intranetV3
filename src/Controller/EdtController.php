<?php

namespace App\Controller;

use App\MesClasses\Edt\MyEdt;
use App\MesClasses\Edt\MyEdtCelcat;
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
     * @param MyEdt       $myEdt
     * @param MyEdtCelcat $myEdtCelcat
     *
     * @return Response
     */
    public function dashboardPersonnel(MyEdt $myEdt, MyEdtCelcat $myEdtCelcat)
    {
        if ($this->dataUserSession->getDepartement() !== null && $this->dataUserSession->getDepartement()->isOptUpdateCelcat() === true) {
            $myEdtCelcat->initPersonnel($this->getUser());

            return $this->render('edt/intervenant.html.twig', array(
                'edt' => $myEdtCelcat
            ));
        }

        $myEdt->initPersonnel($this->getUser());

        return $this->render('edt/intervenant.html.twig', array(
            'edt' => $myEdt
        ));
    }

    /**
     * @param MyEdt       $myEdt
     * @param MyEdtCelcat $myEdtCelcat
     *
     * @return Response
     */
    public function dashboardEtudiant(MyEdt $myEdt, MyEdtCelcat $myEdtCelcat)
    {
        if ($this->dataUserSession->getDepartement() !== null && $this->dataUserSession->getDepartement()->isOptUpdateCelcat() === true) {
            $myEdtCelcat->initEtudiant($this->getUser());

            return $this->render('edt/etudiant.html.twig', array(
                'edt' => $myEdtCelcat
            ));
        }

        $myEdt->initEtudiant($this->getUser());

        return $this->render('edt/etudiant.html.twig', array(
            'edt' => $myEdt
        ));
    }

    /**
     * @Route("/intervenant/export/semaine/{semaine}", name="edt_intervenant_export_semaine_courante")
     */
    public function exportSemaine() {

    }

    /**
     * @Route("/intervenant/export/annee", name="edt_intervenant_export_annee")
     */
    public function exportAnnee() {

    }

    /**
     * @Route("/intervenant/export/ical", name="edt_intervenant_export_ical")
     */
    public function exportIcal() {

    }

    /**
     * @Route("/intervenant/synchro/ical", name="edt_intervenant_synchro_ical")
     */
    public function synchroIcal() {

    }


}
