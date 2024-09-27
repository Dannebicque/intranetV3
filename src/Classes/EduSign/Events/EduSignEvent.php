<?php
/*
 * Copyright (c) 2024. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Classes/EduSign/Events/EduSignEvent.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 27/09/2024 21:14
 */

namespace App\Classes\EduSign\Events;

use App\Classes\EduSign\DTO\EduSignCourse;
use App\DTO\EvenementEdt;
use Symfony\Contracts\EventDispatcher\Event;

class EduSignEvent extends Event
{
    public const EDUSIGN_UPDATE_COURSE = 'edusign.update.course';
    public const EDUSIGN_DELETE_COURSE = 'edusign.delete.course';

    private EvenementEdt $evenementEdt;
    private EduSignCourse $eduSignCourse;

    private string $cleApi;

    public function __construct(EduSignCourse $eduSignCourse, EvenementEdt $evenementEdt, string $cleApi)
    {
        $this->eduSignCourse = $eduSignCourse;
        $this->evenementEdt = $evenementEdt;
        $this->cleApi = $cleApi;
    }

    public function getEvenementEdt(): EvenementEdt
    {
        return $this->evenementEdt;
    }

    public function getEduSignCourse(): EduSignCourse
    {
        return $this->eduSignCourse;
    }

    public function getCleApi()
    {

    }

}
