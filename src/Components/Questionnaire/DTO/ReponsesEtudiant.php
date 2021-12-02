<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Components/Questionnaire/DTO/ReponsesEtudiant.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 02/12/2021 12:09
 */

namespace App\Components\Questionnaire\DTO;

class ReponsesEtudiant
{
    protected array $reponses = [];

    public function addReponse(ReponseEtudiant $reponse): void
    {
        $this->reponses[$reponse->cle_question] = $reponse;
    }

    public function getReponses(): array
    {
        return $this->reponses;
    }

    public function getReponse($cle)
    {
        return array_key_exists($cle, $this->reponses) ? $this->reponses[$cle] : null;
    }

    public function merge(ReponsesEtudiant $reponsesEtudiant)
    {
        foreach ($reponsesEtudiant->getReponses() as $rep) {
            $this->addReponse($rep);
        }
    }

}
