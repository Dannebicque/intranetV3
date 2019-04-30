<?php
/**
 * *
 *  *  Copyright (C) $month.$year | David annebicque | IUT de Troyes - All Rights Reserved
 *  *
 *  *
 *  * @file /Users/davidannebicque/htdocs/intranetv3/src/Controller/EdtController.php
 *  * @author     David annebicque
 *  * @project intranetv3
 *  * @date 4/30/19 2:35 PM
 *  * @lastUpdate 4/30/19 10:57 AM
 *  *
 *
 */

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
    public function dashboardPersonnel(MyEdt $myEdt, MyEdtCelcat $myEdtCelcat): Response
    {
        if ($this->getConnectedUser() !== null) {

            if ($this->dataUserSession->getDepartement() !== null && $this->dataUserSession->getDepartement()->isOptUpdateCelcat() === true) {
                $myEdtCelcat->initPersonnel($this->getConnectedUser());

                return $this->render('edt/intervenant.html.twig', [
                    'edt' => $myEdtCelcat
                ]);
            }

            $myEdt->initPersonnel($this->getConnectedUser());

            return $this->render('edt/intervenant.html.twig', [
                'edt' => $myEdt
            ]);
        }

        return $this->render('bundles/TwigBundle/Exception/error500.html.twig');
    }

    /**
     * @param MyEdt       $myEdt
     * @param MyEdtCelcat $myEdtCelcat
     *
     * @return Response
     */
    public function dashboardEtudiant(MyEdt $myEdt, MyEdtCelcat $myEdtCelcat): Response
    {
        if ($this->getConnectedUser() !== null) {
            if ($this->dataUserSession->getDepartement() !== null && $this->dataUserSession->getDepartement()->isOptUpdateCelcat() === true) {
                $myEdtCelcat->initEtudiant($this->getConnectedUser());

                return $this->render('edt/etudiant.html.twig', [
                    'edt' => $myEdtCelcat
                ]);
            }

            $myEdt->initEtudiant($this->getConnectedUser());

            return $this->render('edt/etudiant.html.twig', [
                'edt' => $myEdt
            ]);
        }

        return $this->render('bundles/TwigBundle/Exception/error500.html.twig');
    }

    /**
     * @Route("/intervenant/export/semaine/{semaine}", name="edt_intervenant_export_semaine_courante")
     */
    public function exportSemaine()
    {

    }

    /**
     * @Route("/intervenant/export/annee", name="edt_intervenant_export_annee")
     */
    public function exportAnnee()
    {

    }

    /**
     * @Route("/intervenant/export/ical", name="edt_intervenant_export_ical")
     */
    public function exportIcal()
    {
        //todo: a proposer aux étudiants également ? visibilité réduite?
    }

    /**
     * @Route("/intervenant/synchro/ical", name="edt_intervenant_synchro_ical")
     */
    public function synchroIcal()
    {
        //todo: a proposer aux étudiants également ? visibilité réduite?
    }


}
