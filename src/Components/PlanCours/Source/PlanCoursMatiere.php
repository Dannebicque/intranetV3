<?php
/*
 * Copyright (c) 2024. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Components/PlanCours/Source/PlanCoursMatiere.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 30/03/2024 16:17
 */

namespace App\Components\PlanCours\Source;

use App\Classes\Pdf\PdfManager;
use App\Components\PlanCours\Form\PlanCoursMatiereStep1Type;
use App\Components\PlanCours\Form\PlanCoursMatiereStep2Type;
use App\Components\PlanCours\Form\PlanCoursMatiereStep3Type;
use App\DTO\Matiere;
use App\Entity\AnneeUniversitaire;
use App\Entity\Departement;
use App\Entity\Personnel;
use App\Repository\PlanCoursMatiereRepository;

class PlanCoursMatiere extends AbstractPlanCours implements PlanCoursInterface
{
    public const SOURCE = 'matiere';
    public const FORM_STEP_1 = PlanCoursMatiereStep1Type::class;
    public const FORM_STEP_2 = PlanCoursMatiereStep2Type::class;
    public const FORM_STEP_3 = PlanCoursMatiereStep3Type::class;
    public const TEMPLATE_SHOW = '_show_matiere.html.twig';

    public const TEMPLATE_FORM_STEP_1 = 'plan_cours_matiere_1.html.twig';
    public const TEMPLATE_FORM_STEP_2 = 'plan_cours_matiere_2.html.twig';
    public const TEMPLATE_FORM_STEP_3 = 'plan_cours_matiere_3.html.twig';

    public function __construct(
        protected PdfManager $myPDF,
        protected PlanCoursMatiereRepository $planCoursMatiereRepository
    ) {
    }

    public function createPlanCours(Matiere $matiere, AnneeUniversitaire $anneeUniversitaire, Personnel $personnel)
    {
        $obj = $this->planCoursMatiereRepository->findOneBy([
            'typeMatiere' => $matiere->typeMatiere,
            'idMatiere' => $matiere->id,
            'anneeUniversitaire' => $anneeUniversitaire,
        ]);

        if (null === $obj) {
            $obj = new \App\Entity\PlanCoursMatiere();
            $obj->setIdMatiere($matiere->id);
            $obj->setTypeMatiere($matiere->typeMatiere);
            $obj->setResponsable($personnel);
            $obj->setAnneeUniversitaire($anneeUniversitaire);
            $obj->setDescriptionMatiere($matiere->objet->getDescription());
            $obj->setNbNotes($matiere->objet->getNbNotes());
            $obj->setCmPrevu($matiere->objet->getCmFormation());
            $obj->setTdPrevu($matiere->objet->getTdFormation());
            $obj->setTpPrevu($matiere->objet->getTpFormation());
        }

        return $obj;

    }

    public function add($planCours): void
    {
        $this->planCoursMatiereRepository->add($planCours);
    }

    public function getRepository(): PlanCoursMatiereRepository
    {
        return $this->planCoursMatiereRepository;
    }

    public function export(Matiere $matiere, AnneeUniversitaire $anneeUniversitaire, Departement $departement): void
    {
        // TODO: Implement export() method.
    }
}
