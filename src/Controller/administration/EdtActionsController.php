<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Controller/administration/EdtActionsController.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 07/10/2021 12:14
 */

namespace App\Controller\administration;

use App\Classes\Edt\MyEdtImport;
use App\Classes\Edt\MyEdtIntranet;
use App\Controller\BaseController;
use App\Entity\EdtPlanning;
use App\Repository\EdtPlanningRepository;
use Exception;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\RedirectResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

/**
 * Class EdtController.
 *
 * @Route("/administration/emploi-du-temps/Actions")
 */
class EdtActionsController extends BaseController
{
    /**
     * @Route("/uploadsemaine", name="administration_edt_action_upload")
     *
     * @return RedirectResponse
     *
     * @throws Exception
     */
    public function uploadSemaine(
        Request $request,
        MyEdtImport $myEdtImport
    ): ?RedirectResponse {
        $this->denyAccessUnlessGranted('MINIMAL_ROLE_EDT', $this->getDepartement());
        //récupérer le fichier
        $myEdtImport->init($request->files->get('fichieredt'), $this->dataUserSession)->traite();

        /* fin necessaire ? */
        $s = $myEdtImport->getCalendrier();

        if ($s) {
            return $this->redirectToRoute('administration_edt_index',
                ['semaine' => $s->getSemaineReelle(), 'valeur' => $myEdtImport->getSemestre(), 'filtre' => 'promo']);
        }

        //pas de semaine trouvée
        return $this->redirectToRoute('administration_edt_index');
    }

    /**
     * @Route("/ajout", name="administration_edt_add_cours", methods={"POST"})
     */
    public function addCours(
        Request $request,
        EdtPlanningRepository $edtPlanningRepository,
        MyEdtIntranet $myEdt
    ): RedirectResponse
    {
        $this->denyAccessUnlessGranted('MINIMAL_ROLE_EDT', $this->getDepartement());
        $pl = null;
        if ('' !== $request->request->get('idEdtUpdate')) {
            $plann = $edtPlanningRepository->find($request->request->get('idEdtUpdate'));
            if (null !== $plann) {
                $pl = $myEdt->updateCours($request, $plann, $this->dataUserSession->getAnneeUniversitaire());
            }
        } else {
            $pl = $myEdt->addCours($request, $this->dataUserSession->getAnneeUniversitaire());
        }

        return $this->redirectToRoute('administration_edt_index', [
            'semaine' => $request->request->get('semaine2'),
            'filtre' => 'promo',
            'valeur' => $pl?->getSemestre()?->getId(),
        ]);
    }

    /**
     * @Route("/get-event/{id}", name="administration_edt_get_event", options={"expose"=true})
     */
    public function getEvent(EdtPlanning $edtPlanning): JsonResponse
    {
        $this->denyAccessUnlessGranted('MINIMAL_ROLE_EDT', $edtPlanning->getSemestre());

        return $this->json($edtPlanning->getJson(), Response::HTTP_OK);
    }

    /**
     * @Route("/delete/{id}", name="administration_edt_delete", options={"expose"=true})
     */
    public function delete(Request $request, EdtPlanning $edtPlanning): JsonResponse
    {
        $this->denyAccessUnlessGranted('MINIMAL_ROLE_EDT', $edtPlanning->getSemestre());

        $this->entityManager->remove($edtPlanning);
        $this->entityManager->flush();

        return $this->json([
            'redirect' => true,
            'url' => $request->server->get('HTTP_REFERER'),
        ]);
    }
}
