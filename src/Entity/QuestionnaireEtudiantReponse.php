<?php
/*
 * Copyright (c) 2022. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Entity/QuestionnaireEtudiantReponse.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 28/05/2022 14:50
 */

namespace App\Entity;

use App\Components\Questionnaire\Interfaces\QuestionnaireChoixInterface;
use App\Repository\QuestionnaireEtudiantReponseRepository;
use Doctrine\DBAL\Types\Types;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: QuestionnaireEtudiantReponseRepository::class)]
#[ORM\HasLifecycleCallbacks]
/** @deprecated */
class QuestionnaireEtudiantReponse extends QuestionnaireUserReponseAbstract implements QuestionnaireChoixInterface
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column(type: Types::INTEGER)]
    private mixed $id;

    #[ORM\ManyToOne(targetEntity: QuestionnaireEtudiant::class, inversedBy: 'questionnaireEtudiantReponses')]
    private ?QuestionnaireEtudiant $questionnaireEtudiant = null;

    public function getId(): mixed
    {
        return $this->id;
    }

    public function __construct(QuestionnaireEtudiant $quizzEtudiant)
    {
        $this->setQuestionnaireEtudiant($quizzEtudiant);
    }

    public function getQuestionnaireEtudiant(): ?QuestionnaireEtudiant
    {
        return $this->questionnaireEtudiant;
    }

    public function setQuestionnaireEtudiant(?QuestionnaireEtudiant $questionnaireEtudiant): self
    {
        $this->questionnaireEtudiant = $questionnaireEtudiant;

        return $this;
    }
}
