<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Entity/DocumentFavori.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 07/02/2021 10:49
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
 */
abstract class DocumentFavori extends BaseEntity
{
    /**
     * @ORM\ManyToOne(targetEntity="App\Entity\Document", inversedBy="documentsFavoris")
     */
    private $document;

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
