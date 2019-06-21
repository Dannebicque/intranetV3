<?php
/**
 * *
 *  *  Copyright (C) $month.$year | David annebicque | IUT de Troyes - All Rights Reserved
 *  *
 *  *
 *  * @file /Users/davidannebicque/htdocs/intranetv3/src/Controller/administration/PrevisionnelController.php
 *  * @author     David annebicque
 *  * @project intranetv3
 *  * @date 4/28/19 8:47 PM
 *  * @lastUpdate 4/28/19 8:42 PM
 *  *
 *
 */

namespace App\Controller\administration;

use App\Controller\BaseController;
use App\Entity\Constantes;
use App\Entity\Matiere;
use App\Entity\Personnel;
use App\Entity\Previsionnel;
use App\Entity\Semestre;
use App\Form\ImportPrevisionnelType;
use App\MesClasses\MyPrevisionnel;
use App\MesClasses\Tools;
use App\Repository\MatiereRepository;
use App\Repository\PersonnelRepository;
use App\Repository\PrevisionnelRepository;
use PhpOffice\PhpSpreadsheet\Exception;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\RedirectResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\StreamedResponse;
use Symfony\Component\Routing\Annotation\Route;

/**
 * Class PrevisionnelExportController
 * @package App\Controller\administration
 * @Route("/administration/service-previsionnel/export")
 */
class PrevisionnelExportController extends BaseController
{


    /**
     * @param MyPrevisionnel $myPrevisionnel
     * @param                $annee
     *
     * @return StreamedResponse
     * @throws Exception
     * @Route("/omega/{annee}", name="administration_previsionnel_export_omega", methods="GET")
     *
     */
    public function exportOmega(MyPrevisionnel $myPrevisionnel, $annee): StreamedResponse
    {
        return $myPrevisionnel->exportOmegaDepartement($this->dataUserSession->getDepartement(), $annee);
    }

    /**
     * @param MyPrevisionnel $myPrevisionnel
     * @param                $annee
     *
     * @return StreamedResponse
     * @throws Exception
     * @Route("/{annee}/{type}/{data}/{_format}", name="administration_previsionnel_export", methods="GET", requirements={"_format"="csv|xlsx|pdf", "type"="personnel|matiere|semestre"})
     *
     */
    public function export(MyPrevisionnel $myPrevisionnel, $annee, $type, $data, $_format): StreamedResponse
    {
        return $myPrevisionnel->export($this->dataUserSession->getDepartement(), $annee, $type, $data, $_format);
    }


}
