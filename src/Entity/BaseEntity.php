<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Entity/BaseEntity.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 07/02/2021 11:11
 */

namespace App\Entity;

use DateTime;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Serializer\Annotation\Groups;

/**
 * @ORM\MappedSuperclass
 * @ORM\HasLifecycleCallbacks()
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

    /**
     * @var DateTime
     * @ORM\Column(type="datetime")
     * @Groups({"acutalite_administration"})
     */
    private $created;

    /**
     * @var DateTime
     * @ORM\Column(type="datetime")
     * @Groups({"acutalite_administration"})
     */
    private $updated;

    /**
     * @return DateTime
     */
    public function getCreated(): ?DateTime
    {
        return $this->created;
    }

    public function setCreated(DateTime $created): void
    {
        $this->created = $created;
    }

    /**
     * @return DateTime
     */
    public function getUpdated(): ?DateTime
    {
        return $this->updated;
    }

    public function setUpdated(DateTime $updated): void
    {
        $this->updated = $updated;
    }

    /**
     * @ORM\PreUpdate()
     * @ORM\PrePersist()
     */
    public function setUpdatedValue(): void
    {
        $this->updated = new DateTime();
    }

    /**
     * @ORM\PrePersist()
     */
    public function setCreatedValue(): void
    {
        $this->created = new DateTime();
    }

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
