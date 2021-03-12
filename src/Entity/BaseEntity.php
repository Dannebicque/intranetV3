<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Entity/BaseEntity.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 12/03/2021 22:10
 */

namespace App\Entity;

use DateTime;
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
    private $id;

    public function getId()
    {
        return $this->id;
    }

    /**
     * @param $name
     * @param $value
     */
    public function updateData($name, $value): void
    {
        $field = 'set' . ucfirst($name);
        if (method_exists($this, $field)) {
            $this->$field($value);
        }
    }
}
