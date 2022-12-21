<?php
/*
 * Copyright (c) 2022. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Components/PlanCours/Source/PlanCoursRessource.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 21/12/2022 17:36
 */

namespace App\Components\PlanCours\Source;

use App\Components\PlanCours\Form\PlanCoursRessourceStep1Type;
use App\Components\PlanCours\Form\PlanCoursRessourceStep2Type;
use App\Components\PlanCours\Form\PlanCoursRessourceStep3Type;
use App\Components\PlanCours\Form\PlanCoursRessourceType;
use App\DTO\Matiere;
use App\Entity\AnneeUniversitaire;
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

    public function __construct(protected PlanCoursRessourceRepository $planCoursRessourceRepository)
    {
    }


    public function createPlanCours(Matiere $matiere, AnneeUniversitaire $anneeUniversitaire)
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
            $obj->setAnneeUniversitaire($anneeUniversitaire);
            $obj->setDescription($matiere->objet->getDescription());
            $obj->setNbNotes($matiere->objet->getNbNotes());
            $obj->setCmPrevu($matiere->objet->getCmFormation());
            $obj->setTdPrevu($matiere->objet->getTdFormation());
            $obj->setTpPrevu($matiere->objet->getTpFormation());
        }

        return $obj;
    }

    public function add($planCoursSae): void
    {
        $this->planCoursRessourceRepository->add($planCoursSae);
    }

    public function getRepository()
    {
        return $this->planCoursRessourceRepository;
    }
}
