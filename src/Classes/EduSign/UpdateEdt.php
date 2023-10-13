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
use App\Repository\DepartementRepository;
use App\Repository\DiplomeRepository;
use App\Repository\EdtPlanningRepository;
use App\Repository\GroupeRepository;
use App\Repository\PersonnelRepository;
use App\Repository\SemestreRepository;
use Carbon\Carbon;
use Symfony\Component\EventDispatcher\EventDispatcherInterface;
use Symfony\Contracts\EventDispatcher\Event;
use function PHPUnit\Framework\isEmpty;

class UpdateEdt
{

    private $evenement;
    private UpdateManager $updateManager;

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
    )
    {}

    public function onEnseignantUpdated(EnseignantUpdatedEvent $event)
    {
        $this->sendUpdate();
    }

    public function update()
    {
        $diplomes = $this->diplomeRepository->findAllWithEduSign();

        foreach ($diplomes as $diplome) {

            $this->cleApi = $diplome->getKeyEduSign();

            $semestres = $this->semestreRepository->findByDiplome($diplome);
            foreach ($semestres as $semestre) {

//                $today = Carbon::create('now');
                $today = Carbon::create(2023, 10, 16);
//                $saturday = Carbon::create('next saturday');
                $saturday = Carbon::create(2023, 10, 20);

//                $semaine = 8;
                $semaine = 8;

                $referentiel = $this->apcReferentielRepository->findOneBy(['id' => $semestre->getDiplome()->getReferentiel()]);

                if ($referentiel !== null) {
                    $matieres = $this->typeMatiereManager->findByReferentielOrdreSemestreArray($semestre, $referentiel);
                    $matieresSemestre = [];
                    foreach ($matieres as $matiere) {
                        if ($matiere->getSemestres()->contains($semestre)) {
                            dump('ok');
                            $matieresSemestre[$matiere->getTypeIdMatiere()] = $matiere;
                        }
                    }
                } else {
                    $matieresSemestre = [];
                }

                $groupes = $this->groupeRepository->findBySemestre($semestre);

                //récupère les edt de l'intranet depuis EdtManager.php
                $edt = $this->edtManager->getPlanningSemestreSemaine($semestre, $semaine, $semestre->getAnneeUniversitaire(), $matieresSemestre, $groupes);

                foreach ($edt->evenements as $evenement) {

                    if (!($evenement->matiere === null || $evenement->matiere === "Inconnue" || $evenement->groupeObjet === null || $evenement->personnelObjet === null)) {

                        if ($evenement->dateObjet->isBetween($today, $saturday)) {

                            $course = (new IntranetEdtEduSignAdapter($evenement))->getCourse();

                            if ($course->id_edu_sign == null) {

                                $this->evenement = $evenement;

                                $enseignant = $evenement->personnelObjet;

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

    public function sendUpdate()
    {
        $course = (new IntranetEdtEduSignAdapter($this->evenement))->getCourse();
        $this->apiEduSign->addCourse($course, $this->cleApi);
    }
}
