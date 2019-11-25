<?php
// Copyright (C) 11 / 2019 | David annebicque | IUT de Troyes - All Rights Reserved
// @file /Users/davidannebicque/htdocs/intranetv3/src/Controller/administration/SemestreExportController.php
// @author     David Annebicque
// @project intranetv3
// @date 25/11/2019 10:20
// @lastUpdate 23/11/2019 09:14

namespace App\Controller\administration;

use App\Controller\BaseController;
use App\Entity\Etudiant;
use App\Entity\Semestre;
use App\MesClasses\MyEtudiant;
use App\MesClasses\MyEvaluations;
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
     * @param MyEtudiant $myEtudiant
     * @param Etudiant   $etudiant
     * @param Semestre   $semestre
     *
     * @throws LoaderError
     * @throws RuntimeError
     * @throws SyntaxError
     * @ParamConverter("etudiant", options={"mapping": {"slug": "slug"}})
     */
    public function exportReleveProvisoire(MyEtudiant $myEtudiant, Etudiant $etudiant, Semestre $semestre = null): void
    {
        $myEtudiant->setEtudiant($etudiant)->exportReleveProvisoire($semestre ?: $etudiant->getSemestre());
    }

    /**
     * @Route("/definitif/{slug}/{semestre}", name="administration_semestre_export_releve_definitif")
     * @param MyEtudiant $myEtudiant
     * @param Etudiant   $etudiant
     * @param Semestre   $semestre
     *
     * @throws LoaderError
     * @throws RuntimeError
     * @throws SyntaxError
     * @ParamConverter("etudiant", options={"mapping": {"slug": "slug"}})
     */
    public function exportReleveDefinitif(MyEtudiant $myEtudiant, Etudiant $etudiant, Semestre $semestre = null): void
    {
        $myEtudiant->setEtudiant($etudiant)->exportReleveProvisoire($semestre ?: $etudiant->getSemestre());
    }


}
