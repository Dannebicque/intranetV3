<?php
/**
 * *
 *  *  Copyright (C) $month.$year | David annebicque | IUT de Troyes - All Rights Reserved
 *  *
 *  *
 *  * @file /Users/davidannebicque/htdocs/intranetv3/src/Controller/administration/SousComissionController.php
 *  * @author     David annebicque
 *  * @project intranetv3
 *  * @date 4/28/19 8:47 PM
 *  * @lastUpdate 4/28/19 8:46 PM
 *  *
 *
 */

namespace App\Controller\administration;

use App\Controller\BaseController;
use App\Entity\Semestre;
use App\MesClasses\MySousCommission;
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
     * @param MySousCommission $mySousCommission
     * @param Semestre         $semestre
     *
     * @return Response
     */
    public function live(MySousCommission $mySousCommission, Semestre $semestre): Response
    {
        $mySousCommission->init($semestre, $semestre->getAnneeUniversitaire());


        return $this->render('administration/sous_commission/live.html.twig', [
            'semestre' => $semestre,
            'sousCommission' => $mySousCommission
        ]);
    }

    /**
     * @Route("/travail/{semestre}", name="administration_sous_commission_travail")
     * @param MySousCommission $mySousCommission
     * @param Semestre         $semestre
     *
     * @return Response
     */
    public function travail(MySousCommission $mySousCommission, Semestre $semestre): Response
    {
        $mySousCommission->init($semestre, $semestre->getAnneeUniversitaire());
        $mySousCommission->SauvegardeTravail();

        return $this->render('administration/sous_commission/travail.html.twig', [
            'semestre' => $semestre,
            //'sousCommission' => $mySousCommission
        ]);
    }

    /**
     * @Route("/purger/{semestre}", name="administration_sous_commission_purger")
     * @param MySousCommission $mySousCommission
     * @param Semestre         $semestre
     *
     * @return Response
     */
    public function purger(MySousCommission $mySousCommission, Semestre $semestre): Response
    {

        return $this->redirectToRoute('administration_sous_commission_travail', ['semestre' => $semestre->getId()]);
    }

    /**
     * @Route("/recalculer/{semestre}", name="administration_sous_commission_recalculer")
     * @param MySousCommission $mySousCommission
     * @param Semestre         $semestre
     *
     * @return Response
     */
    public function recalculer(MySousCommission $mySousCommission, Semestre $semestre): Response
    {
        return $this->redirectToRoute('administration_sous_comission_travail', ['semestre' => $semestre->getId()]);
    }

    /**
     * @Route("/publier/{semestre}", name="administration_sous_commission_publier")
     * @param MySousCommission $mySousCommission
     * @param Semestre         $semestre
     *
     * @return Response
     */
    public function publier(MySousCommission $mySousCommission, Semestre $semestre): Response
    {
        //mettre une notif + mail
        return $this->redirectToRoute('administration_sous_comission_travail', ['semestre' => $semestre->getId()]);
    }

    /**
     * @Route("/exporter/{semestre}", name="administration_sous_commission_exporter")
     * @param MySousCommission $mySousCommission
     * @param Semestre         $semestre
     *
     * @return Response
     * @throws \PhpOffice\PhpSpreadsheet\Exception
     */
    public function exporter(MySousCommission $mySousCommission, Semestre $semestre)
    {
        return $mySousCommission->export($semestre, $semestre->getAnneeUniversitaire());
    }

    /**
     * @Route("/grand-jury/{semestre}", name="administration_sous_commission_exporter_grand_jury")
     * @param MySousCommission $mySousCommission
     * @param Semestre         $semestre
     *
     * @return Response
     */
    public function grandJury(MySousCommission $mySousCommission, Semestre $semestre): Response
    {

    }
}
