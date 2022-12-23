<?php
/*
 * Copyright (c) 2022. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Components/PlanCours/Source/PlanCoursSAE.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 23/12/2022 13:30
 */

namespace App\Components\PlanCours\Source;

use App\Classes\Pdf\MyPDF;
use App\Components\PlanCours\Form\PlanCoursSaeStep1Type;
use App\Components\PlanCours\Form\PlanCoursSaeStep2Type;
use App\Components\PlanCours\Form\PlanCoursSaeStep3Type;
use App\DTO\Matiere;
use App\Entity\AnneeUniversitaire;
use App\Repository\PlanCoursSaeRepository;

class PlanCoursSAE extends AbstractPlanCours implements PlanCoursInterface
{
    public const SOURCE = 'sae';
    public const FORM_STEP_1 = PlanCoursSaeStep1Type::class;
    public const FORM_STEP_2 = PlanCoursSaeStep2Type::class;
    public const FORM_STEP_3 = PlanCoursSaeStep3Type::class;
    public const TEMPLATE_FORM_STEP_1 = 'plan_cours_sae_1.html.twig';
    public const TEMPLATE_FORM_STEP_2 = 'plan_cours_sae_2.html.twig';
    public const TEMPLATE_FORM_STEP_3 = 'plan_cours_sae_3.html.twig';

    public function __construct(
        protected MyPDF $myPDF,
        protected PlanCoursSaeRepository $planCoursSaeRepository
    ) {
    }

    public function createPlanCours(Matiere $matiere, AnneeUniversitaire $anneeUniversitaire)
    {
        $obj = $this->planCoursSaeRepository->findOneBy([
            'typeMatiere' => $matiere->typeMatiere,
            'idMatiere' => $matiere->id,
            'anneeUniversitaire' => $anneeUniversitaire,
        ]);

        if (null === $obj) {
            $obj = new \App\Entity\PlanCoursSae();
            $obj->setIdMatiere($matiere->id);
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

    public function getRepository()
    {
        return $this->planCoursSaeRepository;
    }

    public function export(Matiere $matiere, AnneeUniversitaire $anneeUniversitaire)
    {
        $obj = $this->planCoursSaeRepository->findOneBy([
            'typeMatiere' => $matiere->typeMatiere,
            'idMatiere' => $matiere->id,
            'anneeUniversitaire' => $anneeUniversitaire,
        ]);

        if (null !== $obj) {
            return $this->myPDF::generePdf('components/plan_cours/pdf/sae.html.twig',
                ['pc' => $obj, 'matiere' => $matiere],
                'plan_cours_sae_' . $matiere->codeMatiere);
        }
    }
}
