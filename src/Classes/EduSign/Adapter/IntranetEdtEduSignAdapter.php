<?php
/*
 * Copyright (c) 2023. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Classes/EduSign/Adapter/IntranetEdtEduSignAdapter.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 01/08/2023 14:42
 */

namespace App\Classes\EduSign\Adapter;

use App\Classes\EduSign\EduSignCourse;
use Carbon\Carbon;

class IntranetEdtEduSignAdapter
{
    private ?EduSignCourse $course;

    /**
     * @param $edt
     */
    public function __construct($edt)
    {
        $this->course = new EduSignCourse();
        //complète l'objet $this->>course avec des données fictive pour le test
        $this->course->name = "Advanced Physics";
        $this->course->description = "An advanced course about Physics.";
        $this->course->start = Carbon::createFromFormat("Y-m-d\TH:i:s", "2023-08-02T09:00:00");
        $this->course->end = Carbon::createFromFormat("Y-m-d\TH:i:s", "2023-08-02T11:00:00");;
        $this->course->professor = "e2cgowr119ay62";
//        $this->course->professor_signature = "http://example.com/signature1.png";
//        $this->course->professor_2 = "PhysicsProfessor2";
//        $this->course->professor_signature_2 = "http://example.com/signature2.png";
        $this->course->classroom = "B305";
//        $this->course->school_group = ["physicsMajors2023", "scienceMajors2023"];
        $this->course->max_students = 30;
//        $this->course->zoom = true;
//        $this->course->api_id = "123456789";
    }

    public function getCourse(): ?EduSignCourse
    {
        return $this->course;
    }
}
