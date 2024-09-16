<?php

namespace App\Classes\EduSign\Adapter;

use App\Classes\EduSign\DTO\EduSignCourse;
use App\DTO\EvenementEdt;
use Carbon\Carbon;

class IntranetEdtEduSignAdapter
{
    private ?EduSignCourse $course = null;

    public function __construct(EvenementEdt $edt)
    {
        $diplome = $edt->semestre?->getDiplome();

        $departement = $diplome?->getDepartement();

        if ($departement) {
            $this->course = new EduSignCourse();
            $this->course->id = $edt->idEduSign;
            $this->course->name = $edt->matiere;
            $this->course->start = Carbon::createFromFormat("Y-m-d H:i:s", $edt->dateObjet->format('Y-m-d') . " " . $edt->heureDebut->format('H:i:s'));
            $this->course->end = Carbon::createFromFormat("Y-m-d H:i:s", $edt->dateObjet->format('Y-m-d') . " " . $edt->heureFin->format('H:i:s'));
            $this->course->professor = $edt->personnelObjet?->getIdEduSign()[$diplome->getId()] ?? null;
            $this->course->classroom = $edt->salle;
            $this->course->school_group = [$edt->groupeObjet?->getIdEduSign()];
            $this->course->max_students = 30;
            $this->course->api_id = $edt->id;
            $this->course->id_edu_sign = $edt->idEduSign;
            $this->course->type_edt = $edt->getTypeIdEvent();
            $this->course->id_matiere = $edt->getIdMatiere();
            $this->course->type_matiere = $edt->getTypeMatiere();
        }
    }

    public function getCourse(): ?EduSignCourse
    {
        return $this->course;
    }
}