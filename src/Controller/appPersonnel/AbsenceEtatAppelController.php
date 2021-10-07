<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Controller/appPersonnel/AbsenceEtatAppelController.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 06/10/2021 16:46
 */

namespace App\Controller\appPersonnel;

use App\Classes\Absences\AbsenceEtatAppel;
use App\Controller\BaseController;
use App\Repository\GroupeRepository;
use App\Utils\JsonRequest;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\IsGranted;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

#[IsGranted('ROLE_PERMANENT')]
class AbsenceEtatAppelController extends BaseController
{
    #[Route('/absence/etat/appel', name: 'app_personnel_absence_etat_appel', options: ['expose' => true])]
    public function enregistre(
        GroupeRepository $groupeRepository,
        AbsenceEtatAppel $absenceEtatAppel,
        Request $request
    ): Response {
        $data = JsonRequest::getFromRequest($request);
        $data['type_saisie'] = \App\Entity\AbsenceEtatAppel::SAISIE_SANS_ABSENT;
        $data['groupe'] = $groupeRepository->find($data['groupe']);
        $data['personnel'] = $this->getConnectedUser();

        $rep = $absenceEtatAppel->enregistreAppelFait($data);

        return $this->json($rep, Response::HTTP_OK);
    }
}
