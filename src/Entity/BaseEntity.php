<?php
/*
 * Copyright (c) 2022. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Entity/BaseEntity.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 26/05/2022 18:18
 */

namespace App\Entity;

use Doctrine\DBAL\Types\Types;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Serializer\Annotation\Groups;

#[ORM\MappedSuperclass]
abstract class BaseEntity
{
    #[Groups(groups: ['acutalite_administration'])]
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column(type: Types::INTEGER)]
    protected ?int $id = null;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function updateData(string $name, mixed $value): void
    {
        $field = 'set'.ucfirst($name);
        if (method_exists($this, $field)) {
            $this->$field($value);
        }
    }
}
