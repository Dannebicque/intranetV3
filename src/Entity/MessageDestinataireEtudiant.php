<?php
/*
 * Copyright (c) 2023. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Entity/MessageDestinataireEtudiant.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 31/07/2023 09:48
 */

namespace App\Entity;

use App\Entity\Traits\LifeCycleTrait;
use App\Repository\MessageDestinataireEtudiantRepository;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: MessageDestinataireEtudiantRepository::class)]
#[ORM\HasLifecycleCallbacks]
class MessageDestinataireEtudiant extends MessageDestinataire
{
    use LifeCycleTrait;

    #[ORM\ManyToOne(targetEntity: Etudiant::class, inversedBy: 'messageDestinataireEtudiants')]
    private ?Etudiant $etudiant = null;

    public function getEtudiant(): ?Etudiant
    {
        return $this->etudiant;
    }

    public function setEtudiant(?Etudiant $etudiant): self
    {
        $this->etudiant = $etudiant;

        return $this;
    }

    public function display(): string
    {
        return $this->getEtudiant()->getDisplay();
    }
}
