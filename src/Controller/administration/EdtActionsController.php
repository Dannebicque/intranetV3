<?php
/*
 * Copyright (c) 2024. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Controller/administration/EdtActionsController.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 31/08/2024 15:36
 */

namespace App\Controller\administration;

use App\Classes\Edt\MyEdtImport;
use App\Classes\Edt\MyEdtIntranet;
use App\Classes\MyUpload;
use App\Controller\BaseController;
use App\Entity\EdtPlanning;
use App\Repository\EdtPlanningRepository;
use Exception;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\RedirectResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;

/**
 * Class EdtController.
 */
#[Route(path: '/administration/emploi-du-temps/Actions')]
class EdtActionsController extends BaseController
{
    /**
     * @return RedirectResponse
     *
     * @throws Exception
     */
    #[Route(path: '/uploadsemaine', name: 'administration_edt_action_upload')]
    public function uploadSemaine(
        MyUpload $upload,
        Request $request, MyEdtImport $myEdtImport): ?RedirectResponse
    {
        $this->denyAccessUnlessGranted('MINIMAL_ROLE_EDT', $this->getDepartement());
        // récupérer le fichier
        $fichier = $upload->upload($request->files->get('fichieredt'));
        $myEdtImport->init($fichier, $this->getDepartement(), $this->getAnneeUniversitaire())->traite();

        return $this->redirectToRoute('administration_edt_index');
    }

    #[Route(path: '/ajout', name: 'administration_edt_add_cours', methods: ['POST'])]
    public function addCours(Request $request, EdtPlanningRepository $edtPlanningRepository, MyEdtIntranet $myEdt): RedirectResponse
    {
        $this->denyAccessUnlessGranted('MINIMAL_ROLE_EDT', $this->getDepartement());
        $pl = null;
        if ('' !== $request->request->get('idEdtUpdate')) {
            $plann = $edtPlanningRepository->find($request->request->get('idEdtUpdate'));
            if (null !== $plann) {
                $pl = $myEdt->updateCours($request, $plann, $this->getAnneeUniversitaire());
            }
        } else {
            $pl = $myEdt->addCours($request, $this->getAnneeUniversitaire());
        }

        return $this->redirectToRoute('administration_edt_index', [
            'semaine' => $request->request->get('semaine2'),
            'filtre' => 'promo',
            'valeur' => $pl?->getSemestre()?->getId(),
        ]);
    }

    #[Route(path: '/get-event/{id}', name: 'administration_edt_get_event', options: ['expose' => true])]
    public function getEvent(EdtPlanning $edtPlanning): JsonResponse
    {
        $this->denyAccessUnlessGranted('MINIMAL_ROLE_EDT', $this->getDepartement());

        return $this->json($edtPlanning->getJson(), Response::HTTP_OK);
    }

    #[Route(path: '/delete/{id}', name: 'administration_edt_delete', options: ['expose' => true])]
    public function delete(Request $request, EdtPlanning $edtPlanning): JsonResponse
    {
        $this->denyAccessUnlessGranted('MINIMAL_ROLE_EDT', $this->getDepartement());
        $this->entityManager->remove($edtPlanning);
        $this->entityManager->flush();

        return $this->json([
            'redirect' => true,
            'url' => $request->server->get('HTTP_REFERER'),
        ]);
    }
}
