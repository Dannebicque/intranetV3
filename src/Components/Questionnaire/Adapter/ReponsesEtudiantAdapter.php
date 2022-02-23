<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Components/Questionnaire/Adapter/ReponsesEtudiantAdapter.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 02/12/2021 11:28
 */

namespace App\Components\Questionnaire\Adapter;

use App\Components\Questionnaire\DTO\ReponseEtudiant;
use App\Components\Questionnaire\DTO\ReponsesEtudiant;
use App\Components\Questionnaire\DTO\Section;
use App\Entity\QuestionnaireEtudiantReponse;
use App\Repository\QuestionnaireEtudiantReponseRepository;
use App\Repository\QuestionnaireEtudiantRepository;

class ReponsesEtudiantAdapter
{
    protected QuestionnaireEtudiantRepository $questionnaireEtudiantRepository;
    protected QuestionnaireEtudiantReponseRepository $questionnaireEtudiantReponseRepository;
    protected ReponsesEtudiant $reponsesEtudiant;

    public function __construct(
        QuestionnaireEtudiantRepository $questionnaireEtudiantRepository,
        QuestionnaireEtudiantReponseRepository $questionnaireEtudiantReponseRepository
    ) {
        $this->questionnaireEtudiantRepository = $questionnaireEtudiantRepository;
        $this->questionnaireEtudiantReponseRepository = $questionnaireEtudiantReponseRepository;
    }

    public function getReponsesEtudiant(Section $section, mixed $etudiant_id, string $type = 'qualite'): ReponsesEtudiant
    {
        $this->reponsesEtudiant = new ReponsesEtudiant();
        if ('quizz' === $type) {
            $questionnaireEtudiant = $this->questionnaireEtudiantRepository->findOneBy([
                'etudiant' => $etudiant_id,
                'questionnaireQuizz' => $section->questionnaire_id,
            ]); //todo: a gérer selon le type avec le questionnaire...
        } else {
            $questionnaireEtudiant = $this->questionnaireEtudiantRepository->findOneBy([
                'etudiant' => $etudiant_id,
                'questionnaireQualite' => $section->questionnaire_id,
            ]); //todo: a gérer selon le type
        }
        if (null !== $questionnaireEtudiant) {
            $reponses = $this->questionnaireEtudiantReponseRepository->findBy(['questionnaireEtudiant' => $questionnaireEtudiant]);
            foreach ($reponses as $reponse) {
                $this->reponsesEtudiant->addReponse($this->adaptReponse($reponse, $etudiant_id));
            }
        }

        return $this->reponsesEtudiant;
    }

    public function getReponseQuestion(string $cle_question)
    {
        return $this->reponsesEtudiant->getReponse($cle_question);
    }

    private function adaptReponse(QuestionnaireEtudiantReponse $reponse, ?int $etudiant_id): ReponseEtudiant
    {
        $reponseEtudiant = new ReponseEtudiant();
        $reponseEtudiant->questionnaire_etudiant_id = $reponse->getQuestionnaireEtudiant()?->getId();
        $reponseEtudiant->valeur = $reponse->getValeur();
        $reponseEtudiant->etudiant_id = $etudiant_id;
        $reponseEtudiant->cle_question = $reponse->getCleQuestion();
        $reponseEtudiant->cle_reponse = $reponse->getCleReponse(); //todo: est-ce que c'est utile ?

        return $reponseEtudiant;
    }
}
