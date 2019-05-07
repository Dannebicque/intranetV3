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

    public function __construct(MyEdt $myEdt, MyEdtCelcat $myEdtCelcat)
    {
        $this->myEdt = $myEdt;
        $this->myEdtCelcat = $myEdtCelcat;
    }

    /**
     *
     * @return Response
     */
    public function dashboardPersonnel(): Response
    {
        if ($this->getConnectedUser() !== null) {

            if ($this->dataUserSession->getDepartement() !== null && $this->dataUserSession->getDepartement()->isOptUpdateCelcat() === true) {
                $this->myEdtCelcat->initPersonnel($this->getConnectedUser());

                return $this->render('edt/_intervenant.html.twig', [
                    'edt' => $this->myEdtCelcat
                ]);
            }

            $this->myEdt->initPersonnel($this->getConnectedUser());

            return $this->render('edt/_intervenant.html.twig', [
                'edt' => $this->myEdt
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
    public function dashboardEtudiant(): Response
    {
        if ($this->getConnectedUser() !== null) {
            if ($this->dataUserSession->getDepartement() !== null && $this->dataUserSession->getDepartement()->isOptUpdateCelcat() === true) {
                $this->myEdtCelcat->initEtudiant($this->getConnectedUser());

                return $this->render('edt/_etudiant.html.twig', [
                    'edt' => $this->myEdtCelcat
                ]);
            }

            $this->myEdt->initEtudiant($this->getConnectedUser());

            return $this->render('edt/_etudiant.html.twig', [
                'edt' => $this->myEdt
            ]);
        }

        return $this->render('bundles/TwigBundle/Exception/error500.html.twig');
    }

    /**
     * @Route("/intervenant/export/semaine/{semaine}", name="edt_intervenant_export_semaine_courante")
     */
    public function exportIntervenantSemaine()
    {

    }

    /**
     * @Route("/intervenant/export/annee", name="edt_intervenant_export_annee")
     */
    public function exportIntervenantAnnee()
    {

    }

    /**
     * @Route("/intervenant/export/ical", name="edt_intervenant_export_ical")
     */
    public function exportIntervenantIcal()
    {
        //todo: a proposer aux étudiants également ? visibilité réduite?
    }

    /**
     * @Route("/intervenant/synchro/ical", name="edt_intervenant_synchro_ical")
     */
    public function synchroIntervenantIcal()
    {
        //todo: a proposer aux étudiants également ? visibilité réduite?
    }

    /**
     * @Route("/etudiant/export/semaine/{semaine}", name="edt_etudiant_export_semaine_courante")
     */
    public function exportEtudiantSemaine()
    {

    }

    /**
     * @Route("/etudiant/export/ical", name="edt_etudiant_export_ical")
     */
    public function exportEtudiantIcal()
    {
        //todo: a proposer aux étudiants également ? visibilité réduite?
    }

    /**
     * @Route("/interetudiantvenant/synchro/ical", name="edt_etudiant_synchro_ical")
     */
    public function synchroEtudiantIcal()
    {
        //todo: a proposer aux étudiants également ? visibilité réduite?
    }


}
