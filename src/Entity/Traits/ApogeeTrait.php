<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Entity/Traits/ApogeeTrait.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 07/02/2021 10:49
 */

namespace App\Entity\Traits;

use Doctrine\ORM\Mapping as ORM;

trait ApogeeTrait
{
    /**
     * @ORM\Column(type="string", length=20)
     */
    private $codeEtape; //code etape ou code diplome

    /**
     * @ORM\Column(type="string", length=20, nullable=true)
     */
    private $codeDiplome; //code etape ou code diplome

    /**
     * @ORM\Column(type="string", length=10)
     */
    private $codeVersion;

    /**
     * @ORM\Column(type="string", length=10)
     */
    private $codeDepartement;

    public function getCodeDiplome()
    {
        return $this->codeDiplome;
    }

    public function setCodeDiplome($codeDiplome): void
    {
        $this->codeDiplome = $codeDiplome;
    }

    public function getCodeEtape()
    {
        return $this->codeEtape;
    }

    public function setCodeEtape($codeEtape): void
    {
        $this->codeEtape = $codeEtape;
    }

    public function getCodeVersion()
    {
        return $this->codeVersion;
    }

    public function setCodeVersion($codeVersion): void
    {
        $this->codeVersion = $codeVersion;
    }

    public function getCodeDepartement()
    {
        return $this->codeDepartement;
    }

    public function setCodeDepartement($codeDepartement): void
    {
        $this->codeDepartement = $codeDepartement;
    }
}
