<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Controller/administration/EdtController.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 12/09/2021 12:41
 */

namespace App\Controller\administration;

use App\Classes\Edt\MyEdtCelcat;
use App\Classes\Edt\MyEdtIntranet;
use App\Classes\Matieres\TypeMatiereManager;
use App\Controller\BaseController;
use App\Entity\Constantes;
use App\Repository\GroupeRepository;
use App\Repository\PersonnelRepository;
use App\Repository\SalleRepository;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

/**
 * Class EdtController.
 *
 * @Route("/administration/emploi-du-temps")
 */
class EdtController extends BaseController
{
    /**
     * @Route("/{semaine}/{valeur}/{filtre}", name="administration_edt_index", requirements={"semaine" = "\d+"})
     */
    public function index(int $semaine = 0, string $valeur = '', string $filtre = ''): Response
    {
        return $this->render('administration/edt/index.html.twig', [
            'semaine' => $semaine,
            'valeur' => $valeur,
            'filtre' => $filtre,
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
     * @Route("/ajax-update/{filtre}/{valeur}/{semaine}", name="administration_edt_ajax_update",
     *                                                    options={"expose"=true})
     */
    public function edtIntranet(
        PersonnelRepository $personnelRepository,
        TypeMatiereManager $typeMatiereManager,
        SalleRepository $salleRepository,
        GroupeRepository $groupeRepository,
        MyEdtIntranet $myEdt,
        int $semaine,
        string $valeur,
        string $filtre
    ): Response {
        $filtre = '' === $filtre ? 'promo' : $filtre;
        $edt = $myEdt->initAdministration($this->dataUserSession->getDepartement(), $semaine, $filtre,
            $valeur, $this->dataUserSession->getAnneeUniversitaire());

        switch ($filtre) {
            case 'prof':
                return $this->render('administration/edt/_edt-prof.html.twig', [
                    'prof' => $personnelRepository->find($valeur),
                    'filtre' => $filtre,
                    'personnels' => $personnelRepository->findByDepartement($this->dataUserSession->getDepartement()),
                    'salles' => $salleRepository->findAll(),
                    'matieres' => $typeMatiereManager->findByDepartement($this->dataUserSession->getDepartement()),
                    'edt' => $edt,
                    'tabHeures' => Constantes::TAB_HEURES_EDT,
                ]);

            case 'module':
                return $this->render('administration/edt/_edt-matiere.html.twig', [
                    'matiere' => $typeMatiereManager->getMatiereFromSelect($valeur), //todo: manque le type?
                    'filtre' => $filtre,
                    'personnels' => $personnelRepository->findByDepartement($this->dataUserSession->getDepartement()),
                    'salles' => $salleRepository->findAll(),
                    'matieres' => $typeMatiereManager->findByDepartement($this->dataUserSession->getDepartement()),
                    'edt' => $edt,
                ]);
            case 'salle':
                return $this->render('administration/edt/_edt-salle.html.twig', [
                    'salle' => $valeur,
                    'filtre' => $filtre,
                    'personnels' => $personnelRepository->findByDepartement($this->dataUserSession->getDepartement()),
                    'salles' => $salleRepository->findAll(),
                    'matieres' => $typeMatiereManager->findByDepartement($this->dataUserSession->getDepartement()),
                    'edt' => $edt,
                ]);
            default:
                return $this->render('administration/edt/_edt-intranet.html.twig', [
                    'filtre' => $filtre,
                    'personnels' => $personnelRepository->findByDepartement($this->dataUserSession->getDepartement()),
                    'salles' => $salleRepository->findAll(),
                    'matieres' => $typeMatiereManager->findByDepartement($this->dataUserSession->getDepartement()),
                    'edt' => $edt,
                    'groupes' => $groupeRepository->findGroupeSemestreEdt($edt->getSemestre()),
                ]);
        }
    }

    public function edtCelcat(
        PersonnelRepository $personnelRepository,
        TypeMatiereManager $typeMatiereManager,
        SalleRepository $salleRepository,
        MyEdtCelcat $myEdtCelcat
    ): Response {
        return $this->render('administration/edt/_edt-celcat.html.twig', [
            'personnels' => $personnelRepository->findByDepartement($this->dataUserSession->getDepartement()),
            'salles' => $salleRepository->findAll(),
            'matieres' => $typeMatiereManager->findByDepartement($this->dataUserSession->getDepartement()),
            'edt' => $myEdtCelcat->initAdministration(),
        ]);
    }
}
