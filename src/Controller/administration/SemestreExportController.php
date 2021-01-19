<?php
// Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
// @file /Users/davidannebicque/htdocs/intranetV3/src/Controller/administration/SemestreExportController.php
// @author davidannebicque
// @project intranetV3
// @lastUpdate 19/01/2021 20:11

namespace App\Controller\administration;

use App\Classes\Etudiant\EtudiantExportReleve;
use App\Classes\MyEvaluations;
use App\Controller\BaseController;
use App\Entity\Etudiant;
use App\Entity\Scolarite;
use App\Entity\Semestre;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\ParamConverter;
use Symfony\Component\Routing\Annotation\Route;
use Twig\Error\LoaderError;
use Twig\Error\RuntimeError;
use Twig\Error\SyntaxError;

/**
 * Class SemestreExportController
 * @package App\Controller\administration
 * @Route("/administration/semestre/export")
 */
class SemestreExportController extends BaseController
{
    /**
     * @Route("/all/{semestre}", name="administration_semestre_export_tous_les_releves_provisoires")
     * @param Semestre      $semestre
     */
    public function exportTousLesRelevesProvisoires(
        EtudiantExportReleve $etudiantExportReleve,
        Semestre $semestre
    ): void {
        $etudiantExportReleve->exportAllReleveProvisoire($semestre,
            $this->dataUserSession->getAnneeUniversitaire());
    }

    /**
     * @Route("/provisoire/{slug}/{semestre}", name="administration_semestre_export_releve_provisoire")
     * @param EtudiantExportReleve $etudiantExportReleve
     * @param Etudiant             $etudiant
     * @param Semestre|null        $semestre
     *
     * @throws LoaderError
     * @throws RuntimeError
     * @throws SyntaxError
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
     * @Route("/definitif/{slug}/{scolarite}", name="administration_semestre_export_releve_definitif")
     * @param EtudiantExportReleve $etudiantExportReleve
     * @param Etudiant             $etudiant
     * @param Scolarite            $scolarite
     * @ParamConverter("etudiant", options={"mapping": {"slug": "slug"}})
     */
    public function exportReleveDefinitif(
        EtudiantExportReleve $etudiantExportReleve,
        Etudiant $etudiant,
        Scolarite $scolarite
    ) {
        $etudiantExportReleve->setEtudiant($etudiant);
        $etudiantExportReleve->exportReleveDefinitif($scolarite);
    }


}
