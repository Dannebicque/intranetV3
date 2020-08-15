<?php
// Copyright (c) 2020. | David Annebicque | IUT de Troyes  - All Rights Reserved
// @file /Users/davidannebicque/htdocs/intranetV3/src/Controller/administration/SemestreExportController.php
// @author davidannebicque
// @project intranetV3
// @lastUpdate 15/08/2020 09:06

namespace App\Controller\administration;

use App\Classes\Etudiant\EtudiantExportReleve;
use App\Classes\MyEvaluations;
use App\Controller\BaseController;
use App\Entity\Etudiant;
use App\Entity\Semestre;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\ParamConverter;
use Symfony\Component\Routing\Annotation\Route;

/**
 * Class SemestreExportController
 * @package App\Controller\administration
 * @Route("/administration/semestre/export")
 */
class SemestreExportController extends BaseController
{
    //todo: gestion de l'année universitaire
    /**
     * @Route("/all/{semestre}", name="administration_semestre_export_tous_les_releves_provisoires")
     * @param MyEvaluations $myEvaluations
     * @param Semestre      $semestre
     */
    public function exportTousLesRelevesProvisoires(MyEvaluations $myEvaluations, Semestre $semestre): void
    {

    }

    /**
     * @Route("/provisoire/{slug}/{semestre}", name="administration_semestre_export_releve_provisoire")
     * @param EtudiantExportReleve $etudiantExportReleve
     * @param Etudiant             $etudiant
     * @param Semestre|null        $semestre
     *
     * @ParamConverter("etudiant", options={"mapping": {"slug": "slug"}})
     */
    public function exportReleveProvisoire(
        EtudiantExportReleve $etudiantExportReleve,
        Etudiant $etudiant,
        Semestre $semestre = null
    ) {
        $etudiantExportReleve->setEtudiant($etudiant);
        $etudiantExportReleve->exportReleveProvisoire($semestre ?: $etudiant->getSemestre(),
            $etudiant->getAnneeUniversitaire());
    }

    /**
     * @Route("/definitif/{slug}/{semestre}", name="administration_semestre_export_releve_definitif")
     * @param EtudiantExportReleve $etudiantExportReleve
     * @param Etudiant             $etudiant
     * @param Semestre|null        $semestre
     *
     * @ParamConverter("etudiant", options={"mapping": {"slug": "slug"}})
     */
    public function exportReleveDefinitif(
        EtudiantExportReleve $etudiantExportReleve,
        Etudiant $etudiant,
        Semestre $semestre = null
    ): void {
        $etudiantExportReleve->setEtudiant($etudiant);
        $etudiantExportReleve->exportReleveDefinitif($semestre ?: $etudiant->getSemestre(),
            $etudiant->getAnneeUniversitaire());
    }


}
