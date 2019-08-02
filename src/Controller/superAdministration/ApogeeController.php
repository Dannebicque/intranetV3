<?php
/**
 * Copyright (C) 8 / 2019 | David annebicque | IUT de Troyes - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetv3/src/Controller/superAdministration/ApogeeController.php
 * @author     David Annebicque
 * @project intranetv3
 * @date 02/08/2019 11:39
 * @lastUpdate 02/08/2019 11:39
 */

namespace App\Controller\superAdministration;

use App\Controller\BaseController;
use PDO;
use PDOException;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\IsGranted;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

/**
 * @Route("/super-administration/apogee")
 */
class ApogeeController extends BaseController
{
    /**
     * @Route("/", methods={"GET"}, name="sa_apogee_index")
     * @IsGranted("ROLE_SUPER_ADMIN")
     *
     * @return Response
     */
    public function index(): Response
    {
        try {
            $conn = new PDO('oci:dbname=//apogee-db.univ-reims.fr:1522/APOGEE/ORCL', 'iut', 'Iut3Re1msApo!');
            $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
        } catch (PDOException $e) {
            echo 'ERROR: ' . $e->getMessage();
        }

        return $this->render('super-administration/apogee/index.html.twig', [

        ]);
    }
}
