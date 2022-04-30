<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Entity/Configuration.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 05/06/2021 19:05
 */

namespace App\Entity;

use App\Entity\Traits\LifeCycleTrait;
use App\Repository\ConfigurationRepository;
use Doctrine\DBAL\Types\Types;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Serializer\Annotation\Groups;

#[ORM\Entity(repositoryClass: ConfigurationRepository::class)]
#[ORM\HasLifecycleCallbacks]
class Configuration extends BaseEntity
{
    use LifeCycleTrait;

    #[Groups(groups: ['configuration_administration'])]
    #[ORM\Column(type: \Doctrine\DBAL\Types\Types::STRING, length: 50)]
    private ?string $cle = null;

    #[Groups(groups: ['configuration_administration'])]
    #[ORM\Column(type: \Doctrine\DBAL\Types\Types::STRING, length: 255)]
    private ?string $valeur = null;

    #[ORM\Column(type: \Doctrine\DBAL\Types\Types::STRING, length: 1)]
    private string $type = 'T';

    public function getCle(): ?string
    {
        return $this->cle;
    }

    public function setCle(string $cle): self
    {
        $this->cle = $cle;

        return $this;
    }

    public function getValeur(): ?string
    {
        return $this->valeur;
    }

    public function setValeur(mixed $valeur): self
    {
        //todo: gérer un cast selon le type??
        $this->valeur = $valeur;

        return $this;
    }

    public function getType(): ?string
    {
        return $this->type;
    }

    public function setType(string $type): self
    {
        $this->type = $type;

        return $this;
    }

    public function getTypeLong(): string
    {
        return 'T' === $this->type ? 'Texte' : 'Fichier';
    }
}
