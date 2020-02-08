<?php
// Copyright (C) 11 / 2019 | David annebicque | IUT de Troyes - All Rights Reserved
// @file /Users/davidannebicque/htdocs/intranetv3/src/Controller/administration/EdtController.php
// @author     David Annebicque
// @project intranetv3
// @date 25/11/2019 10:20
// @lastUpdate 23/11/2019 09:14

namespace App\Controller\administration;

use App\Controller\BaseController;
use App\MesClasses\Edt\MyEdt;
use App\MesClasses\Edt\MyEdtCelcat;
use App\Repository\GroupeRepository;
use App\Repository\MatiereRepository;
use App\Repository\PersonnelRepository;
use App\Repository\SalleRepository;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

/**
 * Class EdtController
 * @package App\Controller\administration
 * @Route("/administration/emploi-du-temps")
 */
class EdtController extends BaseController
{
    /**
     * @Route("/{semaine}/{valeur}/{filtre}", name="administration_edt_index", requirements={"semaine" = "\d+"})
     *
     * @param int    $semaine
     * @param string $valeur
     * @param string $filtre
     *
     * @return Response
     */
    public function index($semaine = 0, $valeur = '', $filtre = ''): Response
    {
        return $this->render('administration/edt/index.html.twig', [
            'semaine' => $semaine,
            'valeur'  => $valeur,
            'filtre'  => $filtre
        ]);
    }

    /**
     * @Route("/zone/import", name="administration_edt_za_importsemaine", options={"expose"=true})
     */
    public function zoneImport(): Response
    {
        return $this->render('administration/edt/blocs/import.html.twig');
    }

    /**
     * @param PersonnelRepository $personnelRepository
     * @param MatiereRepository   $matiereRepository
     * @param SalleRepository     $salleRepository
     * @param GroupeRepository    $groupeRepository
     * @param MyEdt               $myEdt
     * @param                     $semaine
     * @param                     $valeur
     * @param                     $filtre
     *
     * @return Response
     * @Route("/ajax-update/{filtre}/{valeur}/{semaine}", name="administration_edt_ajax_update", options={"expose"=true})
     */
    public function edtIntranet(
        PersonnelRepository $personnelRepository,
        MatiereRepository $matiereRepository,
        SalleRepository $salleRepository,
        GroupeRepository $groupeRepository,
        MyEdt $myEdt,
        $semaine,
        $valeur,
        $filtre
    ): Response
    {
        $edt = $myEdt->initAdministration($this->dataUserSession->getDepartement(), $semaine, $filtre,
            $valeur, $this->dataUserSession->getAnneeUniversitaire());

        switch ($filtre) {

            case 'prof':
                return $this->render('administration/edt/edt-prof.html.twig', [
                    'prof'       => $personnelRepository->find($valeur),
                    'filtre'     => $filtre,
                    'personnels' => $personnelRepository->findByDepartement($this->dataUserSession->getDepartement()),
                    'salles'     => $salleRepository->findAll(),
                    'matieres'   => $matiereRepository->findByDepartement($this->dataUserSession->getDepartement()),
                    'edt'        => $edt,
                ]);

            case 'module':
                return $this->render('administration/edt/edt-matiere.html.twig', [
                    'matiere'    => $matiereRepository->find($valeur),
                    'filtre'     => $filtre,
                    'personnels' => $personnelRepository->findByDepartement($this->dataUserSession->getDepartement()),
                    'salles'     => $salleRepository->findAll(),
                    'matieres'   => $matiereRepository->findByDepartement($this->dataUserSession->getDepartement()),
                    'edt'        => $edt,
                ]);
//            case 'jour':
//                return $this->render('DAKernelBundle:AdministrationEdt:edtJour.html.twig', $array);
            case 'salle':
                return $this->render('administration/edt/edt-salle.html.twig', [
                    'salle'      => $valeur,
                    'filtre'     => $filtre,
                    'personnels' => $personnelRepository->findByDepartement($this->dataUserSession->getDepartement()),
                    'salles'     => $salleRepository->findAll(),
                    'matieres'   => $matiereRepository->findByDepartement($this->dataUserSession->getDepartement()),
                    'edt'        => $edt,
                ]);
            default:
                return $this->render('administration/edt/edt-intranet.html.twig', [
                    'filtre'     => $filtre,
                    'personnels' => $personnelRepository->findByDepartement($this->dataUserSession->getDepartement()),
                    'salles'     => $salleRepository->findAll(),
                    'matieres'   => $matiereRepository->findByDepartement($this->dataUserSession->getDepartement()),
                    'edt'        => $edt,
                    'groupes'    => $groupeRepository->findGroupeSemestreEdt($edt->getSemestre()),

                ]);
        }


    }

    /**
     * @param PersonnelRepository $personnelRepository
     * @param MatiereRepository   $matiereRepository
     * @param SalleRepository     $salleRepository
     * @param MyEdtCelcat         $myEdtCelcat
     *
     * @return Response
     */
    public function edtCelcat(
        PersonnelRepository $personnelRepository,
        MatiereRepository $matiereRepository,
        SalleRepository $salleRepository,
        MyEdtCelcat $myEdtCelcat
    ): Response {
        return $this->render('administration/edt/edt-celcat.html.twig', [
            'personnels' => $personnelRepository->findByDepartement($this->dataUserSession->getDepartement()),
            'salles'     => $salleRepository->findAll(),
            'matieres'   => $matiereRepository->findByDepartement($this->dataUserSession->getDepartement()),
            'edt'        => $myEdtCelcat->initAdministration()
        ]);
    }
}
