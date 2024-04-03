<?php
/*
 * Copyright (c) 2023. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Classes/EduSign/UpdateEdt.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 14/11/2023 09:31
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
use Symfony\Component\HttpFoundation\Response;
use function PHPUnit\Framework\isEmpty;

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
        protected CreateEnseignant          $createEnseignant,
        protected DepartementRepository     $departementRepository,
        protected EdtPlanningRepository     $edtPlanningRepository,
        protected GroupeRepository          $groupeRepository,
        protected DiplomeRepository         $diplomeRepository,
        protected ApcReferentielRepository  $apcReferentielRepository,
        protected CalendrierRepository      $CalendrierRepository,
    )
    {
    }

    public function update(?string $keyEduSign, ?int $opt): void
    {
        if ($keyEduSign === null) {
            $diplomes = $this->diplomeRepository->findAllWithEduSign();
        } else {
            $diplomes = $this->diplomeRepository->findBy(['keyEduSign' => $keyEduSign]);
        }

        foreach ($diplomes as $diplome) {

            $this->cleApi = $diplome->getKeyEduSign();

            $semestres = $this->semestreRepository->findByDiplome($diplome);
            if ($opt === 1) {
                $start = Carbon::today();
                $end = Carbon::today()->next('saturday');
            } elseif ($opt === 2) {
                $start = Carbon::create('yesterday');
                $end = Carbon::create('today');
            }
            $bilan['header'] = ['type' => 'Mise à jour Edt', 'diplome' => $diplome->getLibelle(), 'periode' => $start . '-' . $end];
            $semaineReelle = date('W');

            foreach ($semestres as $semestre) {
                $eventSemaine = $this->CalendrierRepository->findOneBy(['semaineReelle' => $semaineReelle, 'anneeUniversitaire' => $semestre->getAnneeUniversitaire()]);
                $semaine = $eventSemaine->getSemaineFormation();

                $matieres = $this->typeMatiereManager->findBySemestre($semestre);
                $matieresSemestre = [];
                foreach ($matieres as $matiere) {
                    if ($matiere->getSemestres()->contains($semestre)) {
                        $matieresSemestre[$matiere->getTypeIdMatiere()] = $matiere;
                    }
                }

                $groupes = $this->groupeRepository->findBySemestre($semestre);

                //récupère les edt de l'intranet depuis EdtManager.php
                $edt = $this->edtManager->getPlanningSemestreSemaine($semestre, $semaine, $semestre->getAnneeUniversitaire(), $matieresSemestre, $groupes);

                foreach ($edt->evenements as $this->evenement) {

                    if ($this->evenement->dateObjet->isBetween($start, $end)) {

                        if (!($this->evenement->matiere === null || $this->evenement->matiere === "Inconnue" || $this->evenement->groupeObjet === null || $this->evenement->personnelObjet === null || $this->evenement->semestre === null)) {

                            $course = (new IntranetEdtEduSignAdapter($this->evenement))->getCourse();

                            $eduSignCourse = $this->apiEduSign->getCourseIdByApiId($this->evenement->id, $this->cleApi);

                            if ($course->id_edu_sign == null && !$eduSignCourse) {

                                $enseignant = $this->evenement->personnelObjet;

                                $departement = $diplome->getDepartement();
                                if ($enseignant) {
                                    if ($enseignant->getIdEduSign() == '' || $enseignant->getIdEduSign() == null || !array_key_exists($departement->getId(), $enseignant->getIdEduSign())) {
                                        $this->createEnseignant->update($enseignant, $departement, $this->cleApi);
                                    }
                                    $this->sendUpdate();
                                    $bilan['success'][] = ['id: ' . $this->evenement->id . ' - ' . $course->name . ' - ' . $enseignant->getPrenom() . ' ' . $enseignant->getNom() . ' - ' . $course->start . '|' . $course->end . ' - '. $this->evenement->semestre .'|'. $this->evenement->groupe . ' - ' . $this->sendUpdate()];
                                }
                            }
                        } else {
                            //tester les données manquantes
                            if ($this->evenement->id === null) {
                                $id = 'null';
                            } elseif ($this->evenement->id === '') {
                                $id = 'empty';
                            } else {
                                $id = $this->evenement->id;
                            }

                            if ($this->evenement->groupeObjet === null) {
                                $groupe = 'null';
                            } else {
                                $groupe = $this->evenement->groupeObjet->getLibelle();
                            }

                            if ($this->evenement->semestre === null) {
                                $semestre = 'null';
                            } elseif ($this->evenement->semestre === '') {
                                $semestre = 'empty';
                            } else {
                                $semestre = $this->evenement->semestre->getLibelle();
                            }

                            if ($this->evenement->personnelObjet === null) {
                                $enseignant = 'null';
                            } else {
                                $enseignant = $this->evenement->personnelObjet->getPrenom() . ' ' . $this->evenement->personnelObjet->getNom();
                            }

                            if ($this->evenement->matiere === '') {
                                $matiere = 'empty';
                            } elseif ($this->evenement->matiere === null) {
                                $matiere = 'null';
                            } else {
                                $matiere = $this->evenement->matiere;
                            }

                            if ($this->evenement->salle === null) {
                                $salle = 'null';
                            } elseif ($this->evenement->salle === '') {
                                $salle = 'empty';
                            } else {
                                $salle = $this->evenement->salle;
                            }

                            if ($this->evenement->heureDebut === null) {
                                $heureDebut = 'null';
                            } elseif ($this->evenement->heureDebut === '') {
                                $heureDebut = 'empty';
                            } else {
                                $heureDebut = $this->evenement->heureDebut;
                            }

                            if ($this->evenement->heureFin === null) {
                                $heureFin = 'null';
                            } elseif ($this->evenement->heureFin === '') {
                                $heureFin = 'empty';
                            } else {
                                $heureFin = $this->evenement->heureFin;
                            }

                            $bilan['error']['cours incomplet'][] = ['id: ' . $id . ' - matiere : ' . $matiere . ' - groupe : ' . $groupe . ' - semestre : ' . $semestre . ' - enseignant : ' . $enseignant . ' - salle : ' . $salle . ' - horaires : ' . $heureDebut . ' - ' . $heureFin];
                        }
                    }
                }
            }
        }
        dd($bilan);
    }

    public function sendUpdate(): mixed
    {
        $course = (new IntranetEdtEduSignAdapter($this->evenement))->getCourse();
        if ($course !== null) {
            $this->apiEduSign->addCourse($course, $this->cleApi);
            $response = $this->apiEduSign->addCourse($course, $this->cleApi);
        } else {
            $response = 'cours non trouvé - id : ' . $this->evenement->id;
        }
        return $response;
    }
}
