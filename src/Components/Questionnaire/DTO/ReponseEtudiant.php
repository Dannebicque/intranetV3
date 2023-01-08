<?php
/*
 * Copyright (c) 2023. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Components/Questionnaire/DTO/ReponseEtudiant.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 08/01/2023 09:31
 */

namespace App\Components\Questionnaire\DTO;

class ReponseEtudiant
{
    public ?int $questionnaire_etudiant_id = null;
    public mixed $valeur;
    public ?int $question_id = null;
    public ?int $etudiant_id = null;
    public ?string $cle_question = null;
    public ?string $complementValeur = null;
    public ?string $cle_reponse = null;
}
