<?php
/*
 * Copyright (c) 2024. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Components/PlanCours/Source/PlanCoursSAE.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 29/02/2024 10:18
 */

namespace App\Components\PlanCours\Source;

use App\Classes\Pdf\MyPDF;
use App\Components\PlanCours\Form\PlanCoursSaeStep1Type;
use App\Components\PlanCours\Form\PlanCoursSaeStep2Type;
use App\Components\PlanCours\Form\PlanCoursSaeStep3Type;
use App\DTO\Matiere;
use App\Entity\AnneeUniversitaire;
use App\Entity\Departement;
use App\Entity\Personnel;
use App\Repository\PlanCoursSaeRepository;
use Knp\Bundle\SnappyBundle\Snappy\Response\PdfResponse;

class PlanCoursSAE extends AbstractPlanCours implements PlanCoursInterface
{
    public const SOURCE = 'sae';
    public const FORM_STEP_1 = PlanCoursSaeStep1Type::class;
    public const FORM_STEP_2 = PlanCoursSaeStep2Type::class;
    public const FORM_STEP_3 = PlanCoursSaeStep3Type::class;
    public const TEMPLATE_SHOW = '_show_sae.html.twig';
    public const TEMPLATE_FORM_STEP_1 = 'plan_cours_sae_1.html.twig';
    public const TEMPLATE_FORM_STEP_2 = 'plan_cours_sae_2.html.twig';
    public const TEMPLATE_FORM_STEP_3 = 'plan_cours_sae_3.html.twig';

    public function __construct(
        protected MyPDF $myPDF,
        protected PlanCoursSaeRepository $planCoursSaeRepository
    ) {
    }

    public function createPlanCours(
        Matiere $matiere,
        AnneeUniversitaire $anneeUniversitaire,
        Personnel $personnel
    ) {
        $obj = $this->planCoursSaeRepository->findOneBy([
            'typeMatiere' => $matiere->typeMatiere,
            'idMatiere' => $matiere->id,
            'anneeUniversitaire' => $anneeUniversitaire,
        ]);

        if (null === $obj) {
            $obj = new \App\Entity\PlanCoursSae();
            $obj->setIdMatiere($matiere->id);
            $obj->setResponsable($personnel);
            $obj->setTypeMatiere($matiere->typeMatiere);
            $obj->setAnneeUniversitaire($anneeUniversitaire);
            $obj->setDescription($matiere->objet->getDescription());
            $obj->setNbNotes($matiere->objet->getNbNotes());
            $obj->setCmPrevu($matiere->objet->getCmFormation());
            $obj->setTdPrevu($matiere->objet->getTdFormation());
            $obj->setTpPrevu($matiere->objet->getTpFormation());
            $obj->setProjetPrevu($matiere->objet->getProjetFormation());
        }

        return $obj;
    }


    public function add($planCours): void
    {
        $this->planCoursSaeRepository->add($planCours, true);
    }

    public function getRepository(): PlanCoursSaeRepository
    {
        return $this->planCoursSaeRepository;
    }

    public function export(
        Matiere $matiere,
        AnneeUniversitaire $anneeUniversitaire,
        Departement $departement
    ): ?PdfResponse
    {
        $obj = $this->planCoursSaeRepository->findOneBy([
            'typeMatiere' => $matiere->typeMatiere,
            'idMatiere' => $matiere->id,
            'anneeUniversitaire' => $anneeUniversitaire,
        ]);

        if (null !== $obj) {
            return $this->myPDF::generePdf('components/plan_cours/pdf/sae.html.twig',
                [
                    'pc' => $obj,
                    'matiere' => $matiere,
                    'anneeUniversitaire' => $anneeUniversitaire,
                    'departement' => $departement
                ],
                'plan_cours_sae_' . $matiere->codeMatiere);
        }
        return null;
    }
}
