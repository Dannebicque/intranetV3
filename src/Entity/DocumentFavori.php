<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Entity/DocumentFavori.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 05/06/2021 19:10
 */

namespace App\Entity;

use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity
 * @ORM\Table(name="DocumentFavori")
 * @ORM\InheritanceType("SINGLE_TABLE")
 * @ORM\DiscriminatorColumn(name="type", type="string")
 * @ORM\DiscriminatorMap( {"documentFavori" = "DocumentFavori", "personnel" = "DocumentFavoriPersonnel",  "etudiant" =
 *                        "DocumentFavoriEtudiant"} )
 * @ORM\HasLifecycleCallbacks()
 */
abstract class DocumentFavori extends BaseEntity
{
    /**
     * @ORM\ManyToOne(targetEntity="App\Entity\Document", inversedBy="documentsFavoris")
     */
    private ?Document $document;

    public function getDocument(): ?Document
    {
        return $this->document;
    }

    public function setDocument(?Document $document): self
    {
        $this->document = $document;

        return $this;
    }
}
