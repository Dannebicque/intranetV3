<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Entity/DocumentFavoriPersonnel.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 05/06/2021 19:10
 */

namespace App\Entity;

use App\Entity\Traits\LifeCycleTrait;
use App\Repository\DocumentFavoriPersonnelRepository;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: DocumentFavoriPersonnelRepository::class)]
#[ORM\HasLifecycleCallbacks]
class DocumentFavoriPersonnel extends DocumentFavori
{
    use LifeCycleTrait;

    public function __construct(#[ORM\ManyToOne(targetEntity: Personnel::class, inversedBy: 'documentsFavoris')] private Personnel $personnel, Document $document)
    {
        $this->setDocument($document);
    }

    public function getPersonnel(): ?Personnel
    {
        return $this->personnel;
    }

    public function setPersonnel(?Personnel $personnel): self
    {
        $this->personnel = $personnel;

        return $this;
    }
}
