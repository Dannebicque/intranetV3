<?php
/*
 * Copyright (c) 2024. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Classes/EduSign/DTO/EduSignCourse.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 29/02/2024 19:03
 */

namespace App\Classes\EduSign\DTO;

use Carbon\CarbonInterface;

class EduSignCourse
{
    /**
     * {
     * "course": {
     * "NAME": "Growth hacking (mandatory)",
     * "DESCRIPTION": "Course about growth hacking",
     * "START": "2020-01-20T15:00:00", //  (ISO 8601 datetime)
     * "END": "2020-01-20T18:00:00", //  (ISO 8601 datetime)
     * "PROFESSOR": "dfgh6789Uhghj",
     * "PROFESSOR_SIGNATURE": "", // signature URL if the teacher has signed
     * "PROFESSOR_2": "dfgh6789Uhghj",
     * "PROFESSOR_SIGNATURE_2": "", // signature URL if the teacher 2 has signed
     * "PROFESSOR_3": "", // courses can have an infinite number of teachers, ordered by the number at the end of the key
     * "PROFESSOR_SIGNATURE_3": "",
     * ... // You can declare as many teachers as you want as long as they are ordered according to the number at the end of the key
     * "CLASSROOM": "B102",
     * "SCHOOL_GROUP": ["ghj865fgh897Tgh"],
     * "MAX_STUDENTS": 23, // maximum number of students that can be enrolled in the course , optional field
     * "ZOOM": true/false, // Create a zoom meeting and invite all the student to this meeting. /!\ Beta & Only works if you have set up zoom in the settings
     * "API_ID": "", // API ID,
     * "SURVEY_ID": "amsk22ovssga19f", // ID of a survey template (optional)
     * "SURVEY_1_AUTOMATIC_SEND_DATE": "2022-02-23T09:20:00", // automatic sending date of the survey to the participants of the course (optional)
     * "TEACHER_SURVEY": "amsk22ovssga19f" // ID of a survey template for the teacher (optional)
     * }
     * }
     */

    public ?string $id = '';
    public ?string $name = '';
    public ?string $description = '';
    public ?CarbonInterface $start;
    public ?CarbonInterface $end;
    public ?string $professor = '';
    public ?string $professor_signature = '';
    public ?string $professor_2 = '';
    public ?string $professor_signature_2 = '';
    public ?string $classroom = '';
    public ?array $school_group = [];
    public int|null $max_students = null;
    public ?bool $zoom = false;
    public ?string $api_id = '';
    public ?string $id_edu_sign = '';
    public ?string $type_edt = '';
    public ?string $apiId = '';

    public function toArray(): array
    {
        return [
            'ID' => $this->id,
            'NAME' => $this->name,
            'DESCRIPTION' => $this->description,
            'START' => $this->start->format('Y-m-d\TH:i:s'),
            'END' => $this->end->format('Y-m-d\TH:i:s'),
            'PROFESSOR' => $this->professor,
            'PROFESSOR_SIGNATURE' => $this->professor_signature,
            'PROFESSOR_2' => $this->professor_2,
            'PROFESSOR_SIGNATURE_2' => $this->professor_signature_2,
            'CLASSROOM' => $this->classroom,
            'SCHOOL_GROUP' => $this->school_group,
            'MAX_STUDENTS' => $this->max_students,
            'ZOOM' => $this->zoom,
            'API_ID' => $this->api_id,
            'ID_EDU_SIGN' => $this->id_edu_sign,
            'TYPE' => $this->type_edt,
        ];
    }
}
