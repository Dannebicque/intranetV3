<?php

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
        // TODO: Implement getDisplay() method.
    }
}
