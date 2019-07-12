<?php
/*
 * Copyright (C) 7 / 2019 | David annebicque | IUT de Troyes - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetv3/src/Controller/administration/SemestreExportController.php
 * @author     David Annebicque
 * @project intranetv3
 * @date 7/12/19 11:23 AM
 * @lastUpdate 7/12/19 11:21 AM
 */

namespace App\Controller\administration;

use App\Controller\BaseController;
use App\Entity\Etudiant;
use App\Entity\Semestre;
use App\MesClasses\MyEtudiant;
use App\MesClasses\MyEvaluations;
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
     * @param MyEtudiant $myEtudiant
     * @param Semestre   $semestre
     */
    public function exportTousLesRelevesProvisoires(MyEvaluations $myEvaluations, Semestre $semestre): void
    {
    }

    /**
     * @Route("/provisoire/{slug}/{semestre}", name="administration_semestre_export_releve_provisoire")
     * @param MyEtudiant $myEtudiant
     * @param Etudiant   $etudiant
     * @param Semestre   $semestre
     *
     * @ParamConverter("etudiant", options={"mapping": {"slug": "slug"}})
     */
    public function exportReleveProvisoire(MyEtudiant $myEtudiant, Etudiant $etudiant, Semestre $semestre = null): void
    {
        $myEtudiant->setEtudiant($etudiant)->exportReleveProvisoire($semestre ?: $etudiant->getSemestre());
    }

    /**
     * @Route("/définitif/{slug}/{semestre}", name="administration_semestre_export_releve_definitif")
     * @param MyEtudiant $myEtudiant
     * @param Etudiant   $etudiant
     * @param Semestre   $semestre
     *
     * @ParamConverter("etudiant", options={"mapping": {"slug": "slug"}})
     */
    public function exportReleveDefinitif(MyEtudiant $myEtudiant, Etudiant $etudiant, Semestre $semestre = null): void
    {
        $myEtudiant->setEtudiant($etudiant)->exportReleveProvisoire($semestre ?: $etudiant->getSemestre());
    }


}
