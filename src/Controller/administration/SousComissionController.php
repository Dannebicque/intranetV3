<?php
// Copyright (c) 2020. | David Annebicque | IUT de Troyes  - All Rights Reserved
// @file /Users/davidannebicque/htdocs/intranetV3/src/Controller/administration/SousComissionController.php
// @author davidannebicque
// @project intranetV3
// @lastUpdate 11/08/2020 14:22

namespace App\Controller\administration;

use App\Classes\SousCommission\SousCommission;
use App\Classes\SousCommission\SousCommissionExport;
use App\Controller\BaseController;
use App\Entity\Semestre;
use PhpOffice\PhpSpreadsheet\Exception;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

/**
 * Class SousComissionController
 * @package App\Controller\administration
 * @Route("/administration/sous-commission")
 */
class SousComissionController extends BaseController
{


    /**
     * @Route("/live/{semestre}", name="administration_sous_commission_live")
     * @param SousCommission $sousCommission
     * @param Semestre       $semestre
     *
     * @return Response
     */
    public function live(SousCommission $sousCommission, Semestre $semestre): Response
    {
        $sousCommission->calcul($semestre, $this->dataUserSession->getAnneeUniversitaire());

        return $this->render('administration/sous_commission/live.html.twig', [
            'semestre'       => $semestre,
            'sousCommission' => $sousCommission
        ]);
    }

    /**
     * @Route("/travail/{semestre}", name="administration_sous_commission_travail")
     * @param SousCommission $sousCommission
     * @param Semestre       $semestre
     *
     * @return Response
     */
    public function travail(SousCommission $sousCommission, Semestre $semestre): Response
    {
        $sousCommission->calcul($semestre, $semestre->getAnneeUniversitaire());
        $sousCommission->SauvegardeTravail();

        return $this->render('administration/sous_commission/travail.html.twig', [
            'semestre' => $semestre,
            //'sousCommission' => $mySousCommission
        ]);
    }

    /**
     * @Route("/purger/{semestre}", name="administration_sous_commission_purger")
     * @param SousCommission $sousCommission
     * @param Semestre       $semestre
     *
     * @return Response
     */
    public function purger(SousCommission $sousCommission, Semestre $semestre): Response
    {

        return $this->redirectToRoute('administration_sous_commission_travail', ['semestre' => $semestre->getId()]);
    }

    /**
     * @Route("/recalculer/{semestre}", name="administration_sous_commission_recalculer")
     * @param SousCommission $sousCommission
     * @param Semestre       $semestre
     *
     * @return Response
     */
    public function recalculer(SousCommission $sousCommission, Semestre $semestre): Response
    {
        return $this->redirectToRoute('administration_sous_comission_travail', ['semestre' => $semestre->getId()]);
    }

    /**
     * @Route("/publier/{semestre}", name="administration_sous_commission_publier")
     * @param SousCommission $sousCommission
     * @param Semestre       $semestre
     *
     * @return Response
     */
    public function publier(SousCommission $sousCommission, Semestre $semestre): Response
    {
        //mettre une notif + mail
        return $this->redirectToRoute('administration_sous_comission_travail', ['semestre' => $semestre->getId()]);
    }

    /**
     * @Route("/exporter/{semestre}", name="administration_sous_commission_exporter")
     * @param SousCommissionExport $sousCommission
     * @param Semestre             $semestre
     *
     * @return Response
     * @throws Exception
     */
    public function exporter(SousCommissionExport $sousCommission, Semestre $semestre): Response
    {
        return $sousCommission->export($semestre, $semestre->getAnneeUniversitaire());
    }

    /**
     * @Route("/grand-jury/{semestre}", name="administration_sous_commission_exporter_grand_jury")
     * @param SousCommission $sousCommission
     * @param Semestre       $semestre
     *
     * @return Response
     */
    public function grandJury(SousCommission $sousCommission, Semestre $semestre): Response
    {

    }
}
