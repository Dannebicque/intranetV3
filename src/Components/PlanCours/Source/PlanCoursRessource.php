<?php
/*
 * Copyright (c) 2023. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Components/PlanCours/Source/PlanCoursRessource.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 01/01/2023 16:10
 */

namespace App\Components\PlanCours\Source;

use App\Classes\Pdf\MyPDF;
use App\Components\PlanCours\Form\PlanCoursRessourceStep1Type;
use App\Components\PlanCours\Form\PlanCoursRessourceStep2Type;
use App\Components\PlanCours\Form\PlanCoursRessourceStep3Type;
use App\DTO\Matiere;
use App\Entity\AnneeUniversitaire;
use App\Entity\Departement;
use App\Entity\Personnel;
use App\Repository\PlanCoursRessourceRepository;

class PlanCoursRessource extends AbstractPlanCours implements PlanCoursInterface
{
    public const SOURCE = 'ressource';
    public const FORM_STEP_1 = PlanCoursRessourceStep1Type::class;
    public const FORM_STEP_2 = PlanCoursRessourceStep2Type::class;
    public const FORM_STEP_3 = PlanCoursRessourceStep3Type::class;
    public const TEMPLATE_FORM_STEP_1 = 'plan_cours_ressource_1.html.twig';
    public const TEMPLATE_FORM_STEP_2 = 'plan_cours_ressource_2.html.twig';
    public const TEMPLATE_FORM_STEP_3 = 'plan_cours_ressource_3.html.twig';

    public function __construct(
        protected MyPDF $myPDF,
        protected PlanCoursRessourceRepository $planCoursRessourceRepository
    ) {
    }


    public function createPlanCours(Matiere $matiere, AnneeUniversitaire $anneeUniversitaire, Personnel $personnel)
    {
        $obj = $this->planCoursRessourceRepository->findOneBy([
            'typeMatiere' => $matiere->typeMatiere,
            'idMatiere' => $matiere->id,
            'anneeUniversitaire' => $anneeUniversitaire,
        ]);

        if (null === $obj) {
            $obj = new \App\Entity\PlanCoursRessource();
            $obj->setIdMatiere($matiere->id);
            $obj->setTypeMatiere($matiere->typeMatiere);
            $obj->setResponsable($personnel);
            $obj->setAnneeUniversitaire($anneeUniversitaire);
            $obj->setDescription($matiere->objet->getDescription());
            $obj->setNbNotes($matiere->objet->getNbNotes());
            $obj->setCmPrevu($matiere->objet->getCmFormation());
            $obj->setTdPrevu($matiere->objet->getTdFormation());
            $obj->setTpPrevu($matiere->objet->getTpFormation());
        }

        return $obj;
    }

    public function add($planCoursRessource): void
    {
        $this->planCoursRessourceRepository->add($planCoursRessource, true);
    }

    public function getRepository()
    {
        return $this->planCoursRessourceRepository;
    }

    public function export(Matiere $matiere, AnneeUniversitaire $anneeUniversitaire, Departement $departement)
    {
        $obj = $this->planCoursRessourceRepository->findOneBy([
            'typeMatiere' => $matiere->typeMatiere,
            'idMatiere' => $matiere->id,
            'anneeUniversitaire' => $anneeUniversitaire,
        ]);

        if (null !== $obj) {
            return $this->myPDF::generePdf('components/plan_cours/pdf/ressource.html.twig',
                [
                    'pc' => $obj,
                    'matiere' => $matiere,
                    'anneeUniversitaire' => $anneeUniversitaire,
                    'departement' => $departement
                ],
                'plan_cours_ressource_' . $matiere->codeMatiere);
        }

    }
}
