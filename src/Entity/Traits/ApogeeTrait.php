<?php
// Copyright (C) 11 / 2019 | David annebicque | IUT de Troyes - All Rights Reserved
// @file /Users/davidannebicque/htdocs/intranetv3/src/Entity/Traits/ApogeeTrait.php
// @author     David Annebicque
// @project intranetv3
// @date 25/11/2019 10:20
// @lastUpdate 23/11/2019 09:14

/**
 * Created by PhpStorm.
 * User: davidannebicque
 * Date: 26/08/2018
 * Time: 09:59
 */
namespace App\Entity\Traits;

use Doctrine\ORM\Mapping as ORM;

trait ApogeeTrait {

    /**
     * @ORM\Column(type="string", length=20)
     */
    private $codeEtape; //code etape ou code diplome

    /**
     * @ORM\Column(type="string", length=20)
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

    /**
     * @return mixed
     */
    public function getCodeDiplome()
    {
        return $this->codeDiplome;
    }

    /**
     * @param mixed $codeDiplome
     */
    public function setCodeDiplome($codeDiplome): void
    {
        $this->codeDiplome = $codeDiplome;
    }

    /**
     * @return mixed
     */
    public function getCodeEtape()
    {
        return $this->codeEtape;
    }

    /**
     * @param mixed $codeEtape
     */
    public function setCodeEtape($codeEtape): void
    {
        $this->codeEtape = $codeEtape;
    }

    /**
     * @return mixed
     */
    public function getCodeVersion()
    {
        return $this->codeVersion;
    }

    /**
     * @param mixed $codeVersion
     */
    public function setCodeVersion($codeVersion): void
    {
        $this->codeVersion = $codeVersion;
    }

    /**
     * @return mixed
     */
    public function getCodeDepartement()
    {
        return $this->codeDepartement;
    }

    /**
     * @param mixed $codeDepartement
     */
    public function setCodeDepartement($codeDepartement): void
    {
        $this->codeDepartement = $codeDepartement;
    }
}
