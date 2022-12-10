<?php
/*
 * Copyright (c) 2022. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Entity/QuestionnairePersonnelReponse.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 28/05/2022 14:48
 */

namespace App\Entity;

use App\Repository\QuestionnairePersonnelReponseRepository;
use Doctrine\DBAL\Types\Types;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: QuestionnairePersonnelReponseRepository::class)]
#[ORM\HasLifecycleCallbacks]
/** @deprecated */
class QuestionnairePersonnelReponse extends QuestionnaireUserReponseAbstract
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column(type: Types::INTEGER)]
    private mixed $id;

    #[ORM\ManyToOne(targetEntity: QuestionnairePersonnel::class, inversedBy: 'questionnairePersonnelReponses')]
    private ?QuestionnairePersonnel $questionnairePersonnel = null;

    public function __construct(QuestionnairePersonnel $quizzPersonnel)
    {
        $this->setQuestionnairePersonnel($quizzPersonnel);
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getQuestionnairePersonnel(): ?QuestionnairePersonnel
    {
        return $this->questionnairePersonnel;
    }

    public function setQuestionnairePersonnel(?QuestionnairePersonnel $questionnairePersonnel): self
    {
        $this->questionnairePersonnel = $questionnairePersonnel;

        return $this;
    }
}
