<?php
// Copyright (C) 11 / 2019 | David annebicque | IUT de Troyes - All Rights Reserved
// @file /Users/davidannebicque/htdocs/intranetv3/src/Controller/administration/EdtActionsController.php
// @author     David Annebicque
// @project intranetv3
// @date 25/11/2019 10:20
// @lastUpdate 23/11/2019 09:14

namespace App\Controller\administration;

use App\Controller\BaseController;
use App\Entity\EdtPlanning;
use App\MesClasses\Edt\MyEdt;
use App\MesClasses\Edt\MyEdtImport;
use App\Repository\CalendrierRepository;
use App\Repository\SemestreRepository;
use Symfony\Component\HttpFoundation\RedirectResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;

/**
 * Class EdtController
 * @package App\Controller\administration
 * @Route("/administration/emploi-du-temps/Actions")
 */
class EdtActionsController extends BaseController
{
    /**
     * @Route("/uploadsemaine", name="administration_edt_action_upload")
     * @param CalendrierRepository $calendrierRepository
     * @param Request              $request
     * @param MyEdtImport          $myEdtImport
     *
     * @return RedirectResponse
     */
    public function uploadSemaine(
        CalendrierRepository $calendrierRepository,
        Request $request,
        MyEdtImport $myEdtImport
    ): ?RedirectResponse {

        //récupérer le fichier
        $myEdtImport->init($request->files->get('fichieredt'), $this->dataUserSession)->traite();

        /* fin necessaire ? */
        $s = $calendrierRepository->findOneBy(['semaineFormation' => $myEdtImport->getSemaine()]);

        if ($s) {
            return $this->redirectToRoute('administration_edt_index',
                ['semaine' => $s->getSemaineReelle(), 'valeur' => $myEdtImport->getSemestre(), 'filtre' => 'promo']);
        }

        //pas de semaine trouvée
        return $this->redirectToRoute('administration_edt_index');
    }

    /**
     * @param Request $request
     *
     * @param MyEDT   $myEdt
     *
     * @Route("/ajout", name="administration_edt_add_cours", methods={"POST"})
     * @return RedirectResponse
     */
    public function addCours(Request $request, MyEdt $myEdt)
    {
        $pl = $myEdt->addCours($request);

        return $this->redirectToRoute('administration_edt_index', array(
            'semaine' => $request->request->get('semaine2'),
            'filtre'  => 'promo',
            'valeur'  => $pl->getSemestre()->getId()
        ));
    }
}
