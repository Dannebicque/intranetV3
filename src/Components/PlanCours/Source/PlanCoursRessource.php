<?php
/*
 * Copyright (c) 2024. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Components/PlanCours/Source/PlanCoursRessource.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 29/02/2024 10:18
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
use App\Entity\Previsionnel;
use App\Enums\PlanCoursEnum;
use App\Repository\PlanCoursRessourceRepository;
use Carbon\Carbon;
use Knp\Bundle\SnappyBundle\Snappy\Response\PdfResponse;

class PlanCoursRessource extends AbstractPlanCours implements PlanCoursInterface
{
    public const SOURCE = 'ressource';
    public const FORM_STEP_1 = PlanCoursRessourceStep1Type::class;
    public const FORM_STEP_2 = PlanCoursRessourceStep2Type::class;
    public const FORM_STEP_3 = PlanCoursRessourceStep3Type::class;
    public const TEMPLATE_SHOW = '_show_ressource.html.twig';

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

    public function recopiePlanCours($plancours, Previsionnel $previsionnel): \App\Entity\PlanCoursRessource
    {
        $obj = $this->planCoursRessourceRepository->findOneBy([
            'typeMatiere' => $previsionnel->getTypeMatiere(),
            'idMatiere' => $previsionnel->getIdMatiere(),
            'anneeUniversitaire' => $plancours->getAnneeUniversitaire(),
        ]);

        if (null === $obj) {
            $obj = new \App\Entity\PlanCoursRessource();
        }

        $obj->setIdMatiere($previsionnel->getIdMatiere());
        $obj->setTypeMatiere($previsionnel->getTypeMatiere());
        $obj->setResponsable($plancours->getResponsable());
        $obj->setAnneeUniversitaire($plancours->getAnneeUniversitaire());
        $obj->setDescription($plancours->getDescription());
        $obj->setNbNotes($plancours->getNbNotes() ?? 0);
        $obj->setCmPrevu($plancours->getCmPrevu() ?? 0.0);
        $obj->setTdPrevu($plancours->getTdPrevu() ?? 0.0);
        $obj->setTpPrevu($plancours->getTpPrevu() ?? 0.0);
        $obj->setCmRealise($plancours->getCmRealise() ?? 0.0);
        $obj->setTdRealise($plancours->getTdRealise() ?? 0.0);
        $obj->setTpRealise($plancours->getTpRealise() ?? 0.0);
        $obj->setBibliographie($plancours->getBibliographie());
        $obj->setPlanSuivi($plancours->isPlanSuivi());
        $obj->setPlanSuiviCommentaire($plancours->getPlanSuiviCommentaire());
        $obj->setObjectifsAtteints($plancours->isObjectifsAtteints());
        $obj->setObjectifsFAtteintsCommentaire($plancours->getObjectifsFAtteintsCommentaire());
        $obj->setCompetencesAcquises($plancours->isCompetencesAcquises());
        $obj->setCompetencesAcquisesCommentaire($plancours->getCompetencesAcquisesCommentaire());
        $obj->setCommentairesStep1($plancours->getCommentairesStep1());
        $obj->setCommentairesStep2($plancours->getCommentairesStep2());
        $obj->setCommentairesStep3($plancours->getCommentairesStep3());
        $obj->setModalitesEvaluations($plancours->getModalitesEvaluations());
        $obj->setModeEvaluationCommentaire($plancours->getModeEvaluationCommentaire());
        $obj->setCreated(new Carbon());
        $obj->setUpdated(new Carbon());
        $obj->setEtatPlanCours(PlanCoursEnum::EN_COURS);

        //dupliquer planCoursSequence et planCoursRealise, intervenants, fichierPlanCours et FichierPlanCoursFile

        foreach ($plancours->getInterVenants() as $intervenant) {
            $obj->addIntervenant($intervenant);
        }


        return $obj;
    }

    public function add($planCoursRessource): void
    {
        $this->planCoursRessourceRepository->add($planCoursRessource, true);
    }

    public function getRepository(): PlanCoursRessourceRepository
    {
        return $this->planCoursRessourceRepository;
    }

    public function export(Matiere $matiere, AnneeUniversitaire $anneeUniversitaire, Departement $departement): ?PdfResponse
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

        return null;
    }
}
