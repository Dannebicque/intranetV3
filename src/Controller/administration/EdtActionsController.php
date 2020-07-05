<?php
// Copyright (c) 2020. | David Annebicque | IUT de Troyes  - All Rights Reserved
// @file /Users/davidannebicque/htdocs/intranetV3/src/Controller/administration/EdtActionsController.php
// @author davidannebicque
// @project intranetV3
// @lastUpdate 05/07/2020 08:33

namespace App\Controller\administration;

use App\Controller\BaseController;
use App\Entity\EdtPlanning;
use App\Classes\Edt\MyEdt;
use App\Classes\Edt\MyEdtImport;
use App\Repository\CalendrierRepository;
use App\Repository\EdtPlanningRepository;
use Exception;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\RedirectResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
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
     * @throws Exception
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
     * @param Request               $request
     *
     * @param EdtPlanningRepository $edtPlanningRepository
     * @param MyEDT                 $myEdt
     *
     * @return RedirectResponse
     * @Route("/ajout", name="administration_edt_add_cours", methods={"POST"})
     */
    public function addCours(
        Request $request,
        EdtPlanningRepository $edtPlanningRepository,
        MyEdt $myEdt
    ): RedirectResponse {
        if ($request->request->get('idEdtUpdate') !== '') {
            $plann = $edtPlanningRepository->find($request->request->get('idEdtUpdate'));
            if ($plann !== null) {
                $pl = $myEdt->updateCours($request, $plann);
            }
        } else {
            $pl = $myEdt->addCours($request);
        }

        return $this->redirectToRoute('administration_edt_index', [
            'semaine' => $request->request->get('semaine2'),
            'filtre'  => 'promo',
            'valeur'  => $pl->getSemestre()->getId()
        ]);
    }

    /**
     *
     * @Route("/get-event/{id}", name="administration_edt_get_event", options={"expose"=true})
     * @param EdtPlanning $edtPlanning
     *
     * @return JsonResponse
     */
    public function getEvent(EdtPlanning $edtPlanning): JsonResponse
    {
        return $this->json($edtPlanning->getJson(), Response::HTTP_OK);
    }

    /**
     *
     * @Route("/delete/{id}", name="administration_edt_delete", options={"expose"=true})
     * @param Request     $request
     * @param EdtPlanning $edtPlanning
     *
     * @return JsonResponse
     */
    public function delete(Request $request, EdtPlanning $edtPlanning): JsonResponse
    {
        $this->entityManager->remove($edtPlanning);
        $this->entityManager->flush();

        return $this->json([
            'redirect' => true,
            'url'      => $request->server->get('HTTP_REFERER')
        ]);
    }
}
