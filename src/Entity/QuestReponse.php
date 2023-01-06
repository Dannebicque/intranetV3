<?php
/*
 * Copyright (c) 2023. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Entity/QuestReponse.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 06/01/2023 19:19
 */

namespace App\Entity;

use App\Entity\Traits\ConfigTrait;
use App\Entity\Traits\LifeCycleTrait;
use App\Repository\QuestReponseRepository;
use Carbon\Carbon;
use Doctrine\DBAL\Types\Types;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: QuestReponseRepository::class)]
#[ORM\HasLifecycleCallbacks]
class QuestReponse extends BaseEntity
{
    use LifeCycleTrait;
    use ConfigTrait;

    #[ORM\ManyToOne(inversedBy: 'questReponses')]
    private ?QuestQuestion $question = null;

    #[ORM\Column(type: Types::STRING, length: 255)]
    private ?string $libelle = null;

    #[ORM\Column(type: Types::STRING, length: 255)]
    private ?string $valeur = null;

    #[ORM\Column(type: Types::INTEGER)]
    private ?int $ordre = null;

    public function __clone(): void
    {
        $this->setCreated(Carbon::now());
        $this->setUpdated(Carbon::now());
    }

    public function getQuestion(): ?QuestQuestion
    {
        return $this->question;
    }

    public function setQuestion(?QuestQuestion $question): self
    {
        $this->question = $question;

        return $this;
    }

    public function getLibelle(): ?string
    {
        return $this->libelle;
    }

    public function setLibelle(string $libelle): self
    {
        $this->libelle = $libelle;

        return $this;
    }

    public function getValeur(): ?string
    {
        return $this->valeur;
    }

    public function setValeur(string $valeur): self
    {
        $this->valeur = $valeur;

        return $this;
    }

    public function getOrdre(): ?int
    {
        return $this->ordre;
    }

    public function setOrdre(int $ordre): self
    {
        $this->ordre = $ordre;

        return $this;
    }
}
