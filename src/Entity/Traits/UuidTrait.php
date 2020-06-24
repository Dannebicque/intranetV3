<?php


namespace App\Entity\Traits;

use Symfony\Component\Uid\Uuid;
use Symfony\Component\Uid\UuidV4;
use Doctrine\ORM\Mapping as ORM;

trait UuidTrait
{
    /**
     *
     * @ORM\Column(type="uuid_binary", unique=true, length=36)
     */
    protected $uuid;

    /**
     * @return UuidV4
     */
    public function getUuidString(): string
    {

        return (string)$this->getUuid();
    }

    /**
     * @return UuidV4
     */
    public function getUuid(): UuidV4
    {
        return UuidV4::fromString($this->uuid);
    }

    public function setUuid(UuidV4 $uuidV4)
    {
        $this->uuid = $uuidV4->toRfc4122();
    }
}
