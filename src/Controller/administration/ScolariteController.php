<?php
/**
 * *
 *  *  Copyright (C) $month.$year | David annebicque | IUT de Troyes - All Rights Reserved
 *  *
 *  *
 *  * @file /Users/davidannebicque/htdocs/intranetv3/src/Controller/administration/AbsenceController.php
 *  * @author     David annebicque
 *  * @project intranetv3
 *  * @date 4/28/19 8:47 PM
 *  * @lastUpdate 4/28/19 8:44 PM
 *  *
 *
 */

namespace App\Controller\administration;

use App\Controller\BaseController;
use App\Entity\Etudiant;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\ParamConverter;
use Symfony\Component\Routing\Annotation\Route;

/**
 * Class ScolariteController
 * @package App\Controller\administration
 * @Route("/administration/scolarite")
 */
class ScolariteController extends BaseController
{
    /**
     * @param Etudiant $etudiant
     * @Route("/edit/{slug}", name="administration_scolarite_etudiant_edit")
     * @ParamConverter("etudiant", options={"mapping": {"slug": "slug"}})

     */
    public function editScolariteEtudiant(Etudiant $etudiant): void
    {

    }
}
