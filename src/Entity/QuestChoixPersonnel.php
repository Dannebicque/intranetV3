<?php
/*
 * Copyright (c) 2022. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Entity/QuestChoixPersonnel.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 11/12/2022 15:19
 */

namespace App\Entity;

use App\Components\Questionnaire\Interfaces\QuestChoixInterface;
use App\Entity\Traits\LifeCycleTrait;
use App\Entity\Traits\QuestChoixTrait;
use App\Repository\QuestChoixPersonnelRepository;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: QuestChoixPersonnelRepository::class)]
#[ORM\HasLifecycleCallbacks]
class QuestChoixPersonnel extends BaseEntity implements QuestChoixInterface
{
    use QuestChoixTrait;
    use LifeCycleTrait;

    #[ORM\ManyToOne]
    private ?Personnel $personnel = null;

    public function getPersonnel(): ?Personnel
    {
        return $this->personnel;
    }

    public function setPersonnel(?Personnel $personnel): self
    {
        $this->personnel = $personnel;

        return $this;
    }

    public function getEmail(): string
    {
        return $this->personnel->getMailUniv();
    }

    public function getNom(): string
    {
        return $this->personnel->getNom();
    }

    public function getPrenom(): string
    {
        return $this->personnel->getPrenom();
    }

    public function getDisplay(): string
    {
        return $this->personnel->getDisplayPr();
    }
}
