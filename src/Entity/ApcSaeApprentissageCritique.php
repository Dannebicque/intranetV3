<?php

namespace App\Entity;

use App\Repository\ApcSaeApprentissageCritiqueRepository;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass=ApcSaeApprentissageCritiqueRepository::class)
 */
class ApcSaeApprentissageCritique extends BaseEntity
{
    /**
     * @ORM\ManyToOne(targetEntity=ApcSae::class, inversedBy="apcSaeApprentissageCritiques")
     */
    private $sae;

    /**
     * @ORM\ManyToOne(targetEntity=ApcApprentissageCritique::class, inversedBy="apcSaeApprentissageCritiques")
     */
    private $apprentissageCritique;

    /**
     * ApcSaeApprentissageCritique constructor.
     *
     * @param $sae
     * @param $apprentissageCritique
     */
    public function __construct($sae, $apprentissageCritique)
    {
        $this->sae = $sae;
        $this->apprentissageCritique = $apprentissageCritique;
    }

    public function getSae(): ?ApcSae
    {
        return $this->sae;
    }

    public function setSae(?ApcSae $sae): self
    {
        $this->sae = $sae;

        return $this;
    }

    public function getApprentissageCritique(): ?ApcApprentissageCritique
    {
        return $this->apprentissageCritique;
    }

    public function setApprentissageCritique(?ApcApprentissageCritique $apprentissageCritique): self
    {
        $this->apprentissageCritique = $apprentissageCritique;

        return $this;
    }
}
