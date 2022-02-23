<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Entity/MessageDestinataireEtudiant.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 06/06/2021 08:24
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
}
