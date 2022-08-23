<?php
/*
 * Copyright (c) 2022. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Controller/apc/superAdmin/ApcCodificationController.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 23/08/2022 21:52
 */

namespace App\Controller\apc\superAdmin;

use App\Controller\BaseController;
use App\Entity\Semestre;
use App\Repository\ApcRessourceRepository;
use App\Repository\ApcSaeRepository;
use Symfony\Component\HttpFoundation\RedirectResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

#[Route('/administratif/apc/codification')]
class ApcCodificationController extends BaseController
{
    public function __construct(
        private readonly ApcRessourceRepository $apcRessourceRepository,
        private readonly ApcSaeRepository $apcSaeRepository,
    ) {
    }

    #[Route('/{semestre}', name: 'sa_apc_codification_index', methods: ['GET'])]
    public function index(
        Semestre $semestre
    ): Response {
        return $this->render('apc/super_admin/codification/index.html.twig', [
            'semestre' => $semestre,
            'ressources' => $this->apcRessourceRepository->findByReferentielSemestre($semestre->getDiplome()?->getReferentiel(),
                $semestre->getOrdreLmd()),
            'saes' => $this->apcSaeRepository->findByReferentielSemestre($semestre->getDiplome()?->getReferentiel(),
                $semestre->getOrdreLmd()),
        ]);
    }

    #[Route('/{semestre}', name: 'sa_apc_codification_mise_a_jour', methods: ['POST'])]
    public function miseAJourCodification(
        Request $request,
        Semestre $semestre
    ): RedirectResponse {
        $ressources = $this->apcRessourceRepository->findByReferentielSemestre($semestre->getDiplome()?->getReferentiel(),
            $semestre->getOrdreLmd());
        $saes = $this->apcSaeRepository->findByReferentielSemestre($semestre->getDiplome()?->getReferentiel(),
            $semestre->getOrdreLmd());

        foreach ($ressources as $ressource) {
            if ($request->request->has('codeApogee_res_'.$ressource->getId())) {
                $ressource->setCodeElement($request->request->get('codeApogee_res_'.$ressource->getId()));
                $ressource->setCodeMatiere($request->request->get('codeMatiere_res_'.$ressource->getId()));
                $ressource->setLibelle($request->request->get('libelleLong_res_'.$ressource->getId()));
                $ressource->setLibelleCourt($request->request->get('libelleCourt_res_'.$ressource->getId()));
            }
        }
        $this->entityManager->flush();

        foreach ($saes as $sae) {
            if ($request->request->has('codeApogee_sae_'.$sae->getId())) {
                $sae->setCodeElement($request->request->get('codeApogee_sae_'.$sae->getId()));
                $sae->setCodeMatiere($request->request->get('codeMatiere_sae_'.$sae->getId()));
                $sae->setLibelle($request->request->get('libelleLong_sae_'.$sae->getId()));
                $sae->setLibelleCourt($request->request->get('libelleCourt_sae_'.$sae->getId()));
            }
        }
        $this->entityManager->flush();

        return $this->redirectToRoute('sa_apc_codification_index', ['semestre' => $semestre->getId()]);
    }
}
