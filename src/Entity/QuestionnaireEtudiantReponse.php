<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Entity/QuestionnaireEtudiantReponse.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 06/06/2021 08:50
 */

namespace App\Entity;

use App\Entity\Traits\LifeCycleTrait;
use App\Repository\QuestionnaireEtudiantReponseRepository;
use function count;
use Doctrine\DBAL\Types\Types;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: QuestionnaireEtudiantReponseRepository::class)]
#[ORM\HasLifecycleCallbacks]
class QuestionnaireEtudiantReponse extends BaseEntity
{
    use LifeCycleTrait;

    #[ORM\Column(type: Types::TEXT, nullable: true)]
    private ?string $valeur = null;

    #[ORM\Column(type: Types::TEXT, nullable: true)]
    private ?string $cleReponse = null;

    #[ORM\Column(type: Types::STRING, length: 100)]
    private ?string $cleQuestion = null;

    #[ORM\ManyToOne(targetEntity: QuestionnaireEtudiant::class, inversedBy: 'questionnaireEtudiantReponses')]
    private ?QuestionnaireEtudiant $questionnaireEtudiant = null;

    public function __construct(QuestionnaireEtudiant $quizzEtudiant)
    {
        $this->setQuestionnaireEtudiant($quizzEtudiant);
    }

    public function getValeur(): ?string
    {
        return $this->valeur;
    }

    public function setValeur(?string $valeur): self
    {
        $this->valeur = trim($valeur);

        return $this;
    }

    public function getCleReponse(): ?string
    {
        return $this->cleReponse;
    }

    public function setCleReponse(?string $cleReponse): self
    {
        $this->cleReponse = $cleReponse;

        return $this;
    }

    public function getCleQuestion(): ?string
    {
        return $this->cleQuestion;
    }

    public function setCleQuestion(string $cleQuestion): self
    {
        $this->cleQuestion = $cleQuestion;

        return $this;
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

    public function getIdReponse(): string
    {
        $t = explode('_', $this->cleReponse);

        return $t[count($t) - 1];
    }
}
