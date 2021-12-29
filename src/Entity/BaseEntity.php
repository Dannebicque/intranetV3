<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Entity/BaseEntity.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 25/06/2021 10:28
 */

namespace App\Entity;

use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Serializer\Annotation\Groups;

/**
 * @ORM\MappedSuperclass
 */
abstract class BaseEntity
{
    /**
     * @ORM\Id()
     * @ORM\GeneratedValue()
     * @ORM\Column(type="integer")
     * @Groups({"acutalite_administration"})
     */
    private ?int $id;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function updateData(string $name, mixed $value): void
    {
        $field = 'set' . ucfirst($name);
        if (method_exists($this, $field)) {
            $this->$field($value);
        }
    }
}
