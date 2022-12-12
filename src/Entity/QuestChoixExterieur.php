<?php
/*
 * Copyright (c) 2022. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Entity/QuestChoixExterieur.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 12/12/2022 21:28
 */

namespace App\Entity;

use App\Components\Questionnaire\Interfaces\QuestChoixInterface;
use App\Entity\Traits\LifeCycleTrait;
use App\Entity\Traits\QuestChoixTrait;
use App\Repository\QuestChoixExterieurRepository;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: QuestChoixExterieurRepository::class)]
#[ORM\HasLifecycleCallbacks]
class QuestChoixExterieur extends BaseEntity implements QuestChoixInterface
{
    use QuestChoixTrait;
    use LifeCycleTrait;

    #[ORM\Column(length: 50)]
    private string $nom;

    #[ORM\Column(length: 50)]
    private string $prenom;

    #[ORM\Column(length: 255)]
    private string $email;

    public function getNom(): string
    {
        return mb_strtoupper($this->nom);
    }

    public function setNom(string $nom): self
    {
        $this->nom = $nom;

        return $this;
    }

    public function getPrenom(): string
    {
        return ucwords(mb_strtolower($this->prenom));
    }

    public function setPrenom(string $prenom): self
    {
        $this->prenom = $prenom;

        return $this;
    }

    public function getEmail(): string
    {
        return $this->email;
    }

    public function setEmail(string $email): self
    {
        $this->email = $email;

        return $this;
    }

    public function getDisplay(): string
    {
        return $this->getPrenom() . ' ' . $this->getNom();
    }
}
