<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Controller/ProfilPersonnelController.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 27/05/2021 17:10
 */

namespace App\Controller;

use App\Classes\Hrs\HrsManager;
use App\Classes\Previsionnel\PrevisionnelManager;
use App\Classes\Previsionnel\PrevisionnelSynthese;
use App\Entity\Personnel;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\ParamConverter;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

/**
 * Class ProfilPersonnelController.
 */
#[Route(path: '/personnel')]
class ProfilPersonnelController extends BaseController
{
    /**
     * @ParamConverter("personnel", options={"mapping": {"slug": "slug"}})
     */
    #[Route(path: '/profil/{slug}/actions', name: 'profil_personnel_action')]
    public function actions(Personnel $personnel): Response
    {
        return $this->render('user/composants/actions_personnel.html.twig', [
            'personnel' => $personnel,
        ]);
    }

    /**
     * @ParamConverter("personnel", options={"mapping": {"slug": "slug"}})
     */
    #[Route(path: '/profil/{slug}/a-propos', name: 'profil_personnel_about')]
    public function about(Personnel $personnel): Response
    {
        return $this->render('user/composants/_apropos.html.twig', [
            'user' => $personnel,
        ]);
    }

    /**
     * @ParamConverter("personnel", options={"mapping": {"slug": "slug"}})
     */
    #[Route(path: '/profil/{slug}/previsionnel', name: 'profil_personnel_previsionnel')]
    public function previsionnel(PrevisionnelManager $myPrevisionnel, PrevisionnelSynthese $previsionnelSynthese, HrsManager $hrsManager, Personnel $personnel): Response
    {
        $anneePrevisionnel = $this->dataUserSession->getAnneePrevisionnel();
        $previsionnels = $myPrevisionnel->getPrevisionnelEnseignantAnnee($personnel,
            $anneePrevisionnel);
        $hrs = $hrsManager->getPersonnelAnnee($personnel, $anneePrevisionnel);
        $synthsePrevisionnel = $previsionnelSynthese->getSynthese($previsionnels, $personnel)
            ->getHrsEnseignant($hrs);

        return $this->render('user/composants/previsionnel.html.twig', [
            'previsionnels' => $previsionnels,
            'synthsePrevisionnel' => $synthsePrevisionnel,
            'anneePrevisionnel' => $anneePrevisionnel,
            'semestres' => $this->dataUserSession->getSemestres(),
            //todo: doit être tous les semestres dans lequel le personnel intervient. Sans nuance de département
            'hrs' => $hrs,
            'personnel' => $personnel,
        ]);
    }
}
