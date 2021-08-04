<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Components/Questionnaire/DTO/AbstractQuestionnaire.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 03/08/2021 11:53
 */

namespace App\Components\Questionnaire\DTO;


use Carbon\CarbonInterface;

class AbstractQuestionnaire
{
    public const MODE_APERCU = 'mode.apercu';
    public const MODE_EDITION = 'mode.edition';
    public const MODE_ETUDIANT = 'mode.etudiant';
    public const MODE_LECTURE_REPONSES = 'mode.lecture_reponses';

    public $semestre;
    public string $libelle;
    public string $titre;
    public string $textExplication;
    public string $uuid;
    public CarbonInterface $dateOuverture;
    public CarbonInterface $dateFermture;

    public array $sections = [];
    public string $mode;
    public int $id;

    public function addSection($section)
    {

    }

    public function getSections()
    {

    }
}
