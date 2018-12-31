<?php

namespace App\Controller\administration;

use App\Controller\BaseController;
use App\Entity\Etudiant;
use App\Entity\Semestre;
use App\MesClasses\MyEtudiant;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\ParamConverter;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

/**
 * Class SemestreExportController
 * @package App\Controller\administration
 * @Route("/administration/semestre/export")
 */
class SemestreExportController extends BaseController
{
    /**
     * @Route("/all/{semestre}", name="administration_semestre_export_tous_les_releves_provisoires")
     * @param Semestre $semestre
     *
     */
    public function exportTousLesRelevesProvisoires(MyEtudiant $myEtudiant, Semestre $semestre): void
    {

    }

    /**
     * @Route("/{slug}/{semestre}", name="administration_semestre_export_releve_provisoire")
     * @param Etudiant $etudiant
     * @param Semestre $semestre
     *
     * @ParamConverter("etudiant", options={"mapping": {"slug": "slug"}})
     *
     */
    public function exportReleveProvisoire(MyEtudiant $myEtudiant, Etudiant $etudiant, Semestre $semestre = null): void
    {
        $myEtudiant->setEtudiant($etudiant)->exportReleveProvisoire($semestre ?: $etudiant->getSemestre());
    }


}
