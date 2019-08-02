<?php
/**
 * Copyright (C) 8 / 2019 | David annebicque | IUT de Troyes - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetv3/src/Controller/superAdministration/ApogeeController.php
 * @author     David Annebicque
 * @project intranetv3
 * @date 02/08/2019 14:32
 * @lastUpdate 02/08/2019 14:32
 */

namespace App\Controller\superAdministration;

use App\Controller\BaseController;
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
        // Connexion au service XE (i.e. la base de données) sur la machine "localhost"
        $conn = oci_connect('iut', 'Iut3Re1msApo!', 'apogee-db.univ-reims.fr:1522/APOGEE');
        if (!$conn) {
            $e = oci_error();
            trigger_error(htmlentities($e['message'], ENT_QUOTES), E_USER_ERROR);
        }

        $stid = oci_parse($conn, 'SELECT table_name, num_rows FROM ALL_TABLES');
        oci_execute($stid);

        echo "<table border='1'>\n";
        while ($row = oci_fetch_array($stid, OCI_ASSOC + OCI_RETURN_NULLS)) {
            echo "<tr>\n";
            foreach ($row as $item) {
                echo "    <td>" . ($item !== null ? htmlentities($item, ENT_QUOTES) : "") . "</td>\n";
            }
            echo "</tr>\n";
        }
        echo "</table>\n";

        $stid = oci_parse($conn, 'select owner as schema_name, 
       view_name
from sys.all_views
order by owner, 
         view_name;');
        oci_execute($stid);

        echo "<table border='1'>\n";
        while ($row = oci_fetch_array($stid, OCI_ASSOC + OCI_RETURN_NULLS)) {
            echo "<tr>\n";
            foreach ($row as $item) {
                echo "    <td>" . ($item !== null ? htmlentities($item, ENT_QUOTES) : "") . "</td>\n";
            }
            echo "</tr>\n";
        }
        echo "</table>\n";

        return $this->render('super-administration/apogee/index.html.twig', [

        ]);
    }
}
