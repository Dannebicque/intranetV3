<?php

namespace App\Controller\administration;

use App\Controller\BaseController;
use App\Entity\Etudiant;
use App\Entity\Semestre;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\ParamConverter;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

/**
 * Class SemestreExportController
 * @package App\Controller\administration
 * @Route({"fr":"administration/semestre/export",
 *         "en":"administration/semester/export"}
 *)
 */
class SemestreExportController extends BaseController
{
    /**
     * @Route("/{slug}/{semestre}", name="administration_semestre_export_releve_provisoire")
     * @param Semestre $semestre
     * @ParamConverter("etudiant", options={"mapping": {"slug": "slug"}})
     *
     * @return \Symfony\Component\HttpFoundation\Response
     */
    public function exportReleveProvisoire(Etudiant $etudiant, Semestre $semestre = null): Response
    {

    }
}
