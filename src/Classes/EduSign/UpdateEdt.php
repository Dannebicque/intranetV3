<?php
/*
 * Copyright (c) 2023. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Classes/EduSign/UpdateEdt.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 01/08/2023 14:42
 */

namespace App\Classes\EduSign;

use App\Classes\Edt\EdtManager;
use App\Classes\EduSign\Adapter\IntranetEdtEduSignAdapter;
use App\Classes\Matieres\TypeMatiereManager;
use App\DTO\EvenementEdt;
use App\Repository\ApcReferentielRepository;
use App\Repository\CalendrierRepository;
use App\Repository\DepartementRepository;
use App\Repository\DiplomeRepository;
use App\Repository\EdtPlanningRepository;
use App\Repository\GroupeRepository;
use App\Repository\PersonnelRepository;
use App\Repository\SemestreRepository;
use Carbon\Carbon;

class UpdateEdt
{

    private ?EvenementEdt $evenement;
    private ?string $cleApi;

    public function __construct(
        private readonly ApiEduSign         $apiEduSign,
        private readonly EdtManager         $edtManager,
        private readonly TypeMatiereManager $typeMatiereManager,
        protected SemestreRepository        $semestreRepository,
        protected PersonnelRepository       $personnelRepository,
        protected UpdateEnseignant          $updateEnseignant,
        protected DepartementRepository     $departementRepository,
        protected EdtPlanningRepository     $edtPlanningRepository,
        protected GroupeRepository          $groupeRepository,
        protected DiplomeRepository         $diplomeRepository,
        protected ApcReferentielRepository  $apcReferentielRepository,
        protected CalendrierRepository      $CalendrierRepository,
    )
    {
    }

    public function update(): void
    {
        $diplomes = $this->diplomeRepository->findAllWithEduSign();

        foreach ($diplomes as $diplome) {

            $this->cleApi = $diplome->getKeyEduSign();

            $semestres = $this->semestreRepository->findByDiplome($diplome);
            foreach ($semestres as $semestre) {

                $today = Carbon::create('now');
                $saturday = Carbon::create('next saturday');
                $semaineReelle = date('W');

                $eventSemaine = $this->CalendrierRepository->findOneBy(['semaineReelle' => $semaineReelle, 'anneeUniversitaire' => $semestre->getAnneeUniversitaire()]);
                $semaine = $eventSemaine->getSemaineFormation();

                $referentiel = $this->apcReferentielRepository->findOneBy(['id' => $semestre->getDiplome()->getReferentiel()]);

                if ($referentiel !== null) {
                    $matieres = $this->typeMatiereManager->findByReferentielOrdreSemestreArray($semestre, $referentiel);
                    $matieresSemestre = [];
                    foreach ($matieres as $matiere) {
                        if ($matiere->getSemestres()->contains($semestre)) {
                            $matieresSemestre[$matiere->getTypeIdMatiere()] = $matiere;
                        }
                    }
                } else {
                    $matieresSemestre = [];
                }

                $groupes = $this->groupeRepository->findBySemestre($semestre);

                //récupère les edt de l'intranet depuis EdtManager.php
                $edt = $this->edtManager->getPlanningSemestreSemaine($semestre, $semaine, $semestre->getAnneeUniversitaire(), $matieresSemestre, $groupes);

                foreach ($edt->evenements as $this->evenement) {

                    if (!($this->evenement->matiere === null || $this->evenement->matiere === "Inconnue" || $this->evenement->groupeObjet === null || $this->evenement->personnelObjet === null)) {

                        if ($this->evenement->dateObjet->isBetween($today, $saturday)) {

                            $course = (new IntranetEdtEduSignAdapter($this->evenement))->getCourse();

                            if ($course->id_edu_sign == null) {

                                $enseignant = $this->evenement->personnelObjet;

                                $departement = $semestre->getDiplome()->getDepartement();
                                if ($enseignant) {
                                    if ($enseignant->getIdEduSign() == '' || $enseignant->getIdEduSign() == null || !array_key_exists($departement->getId(), $enseignant->getIdEduSign())) {
                                        $this->updateEnseignant->update($enseignant, $departement, $this->cleApi);
                                    }
                                    $this->sendUpdate();
                                }
                            } else {
                                dump('cours déjà envoyé');
                            }
                        } else {
                            dump('evenement hors d\'échéance');
                        }
                    }
                }
            }
        }
    }

    public function sendUpdate(): void
    {
        $course = (new IntranetEdtEduSignAdapter($this->evenement))->getCourse();
        $this->apiEduSign->addCourse($course, $this->cleApi);
    }
}
