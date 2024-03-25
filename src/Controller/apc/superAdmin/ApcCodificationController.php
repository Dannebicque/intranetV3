<?php
/*
 * Copyright (c) 2024. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Controller/apc/superAdmin/ApcCodificationController.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 16/02/2024 22:17
 */

namespace App\Controller\apc\superAdmin;

use App\Controller\BaseController;
use App\Entity\Semestre;
use App\Repository\ApcRessourceRepository;
use App\Repository\ApcSaeRepository;
use App\Repository\SemestreRepository;
use Symfony\Component\HttpFoundation\RedirectResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;

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
        SemestreRepository $semestreRepository,
        Semestre $semestre
    ): Response {
        return $this->render('apc/super_admin/codification/index.html.twig', [
            'semestre' => $semestre,
            'semestres' => $semestreRepository->findAllSemestreByDiplomeApc($semestre->getDiplome()),
            'ressources' => $this->apcRessourceRepository->findBySemestreReferentiel($semestre, $semestre->getDiplome()?->getReferentiel()),
            'saes' => $this->apcSaeRepository->findBySemestreReferentiel($semestre, $semestre->getDiplome()?->getReferentiel()),
        ]);
    }

    #[Route('/{semestre}', name: 'sa_apc_codification_mise_a_jour', methods: ['POST'])]
    public function miseAJourCodification(
        SemestreRepository $semestreRepository,
        Request $request,
        Semestre $semestre
    ): RedirectResponse {
        $ressources = $this->apcRessourceRepository->findBySemestreReferentiel($semestre, $semestre->getDiplome()?->getReferentiel());
        $saes = $this->apcSaeRepository->findBySemestreReferentiel($semestre, $semestre->getDiplome()?->getReferentiel());

        $tabSemestre = [];
        $semestres = $semestreRepository->findAllSemestreByDiplomeApc($semestre->getDiplome());
        foreach ($semestres as $sem) {
            $tabSemestre[$sem->getId()] = $sem;
        }

        foreach ($ressources as $ressource) {
            if ($request->request->has('codeApogee_res_'.$ressource->getId())) {
                $ressource->setCodeElement($request->request->get('codeApogee_res_'.$ressource->getId()));
                $ressource->setCodeMatiere($request->request->get('codeMatiere_res_'.$ressource->getId()));
                $ressource->setLibelle($request->request->get('libelleLong_res_'.$ressource->getId()));
                $ressource->setLibelleCourt($request->request->get('libelleCourt_res_'.$ressource->getId()));
                $sems = $request->request->all('semestre_res_'.$ressource->getId());

                foreach ($ressource->getSemestres() as $sem) {
                    $ressource->removeSemestre($sem);
                    $sem->removeApcSemestresRessource($ressource);
                }

                foreach ($sems as $sem) {
                        $ressource->addSemestre($tabSemestre[$sem]);
                        $tabSemestre[$sem]->addApcSemestresRessource($ressource);
                }
            }
        }
        $this->entityManager->flush();

        foreach ($saes as $sae) {
            if ($request->request->has('codeApogee_sae_'.$sae->getId())) {
                $sae->setCodeElement($request->request->get('codeApogee_sae_'.$sae->getId()));
                $sae->setCodeMatiere($request->request->get('codeMatiere_sae_'.$sae->getId()));
                $sae->setLibelle($request->request->get('libelleLong_sae_'.$sae->getId()));
                $sae->setLibelleCourt($request->request->get('libelleCourt_sae_'.$sae->getId()));

                $sems = $request->request->all('semestre_sae_'.$sae->getId());

                foreach ($sae->getSemestres() as $sem) {
                    $sae->removeSemestre($sem);
                    $sem->removeApcSemestresSae($sae);
                }

                foreach ($sems as $sem) {
                    $sae->addSemestre($tabSemestre[$sem]);
                    $tabSemestre[$sem]->addApcSemestresSae($sae);
                }
            }
        }
        $this->entityManager->flush();

        return $this->redirectToRoute('sa_apc_codification_index', ['semestre' => $semestre->getId()]);
    }
}
