<?php
/*
 * Copyright (c) 2024. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Controller/appPersonnel/AbsenceEtatAppelController.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 23/02/2024 21:35
 */

namespace App\Controller\appPersonnel;

use App\Classes\Absences\AbsenceEtatAppel;
use App\Controller\BaseController;
use App\Repository\GroupeRepository;
use App\Utils\JsonRequest;
use JsonException;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;
use Symfony\Component\Security\Http\Attribute\IsGranted;

#[IsGranted('ROLE_PERMANENT')]
class AbsenceEtatAppelController extends BaseController
{
    /**
     * @throws JsonException
     */
    #[Route('/absence/etat/appel', name: 'app_personnel_absence_etat_appel', options: ['expose' => true])]
    public function enregistre(
        GroupeRepository $groupeRepository,
        AbsenceEtatAppel $absenceEtatAppel,
        Request $request
    ): Response {
        $data = JsonRequest::getFromRequest($request);
        $data['type_saisie'] = \App\Entity\AbsenceEtatAppel::SAISIE_SANS_ABSENT;
        $data['groupe'] = $groupeRepository->find($data['groupe']);
        $data['personnel'] = $this->getUser();

        $rep = $absenceEtatAppel->enregistreAppelFait($data);

        return $this->json($rep, Response::HTTP_OK);
    }
}
