<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Classes/Apogee/Apogee.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 04/09/2021 08:41
 */

namespace App\Classes\Apogee;

use const E_USER_ERROR;
use PDO;
use PDOException;
use Symfony\Component\DependencyInjection\ParameterBag\ParameterBagInterface;

abstract class Apogee
{
    protected $conn;

    private ParameterBagInterface $parameterBag;

    /**
     * MyApogee constructor.
     */
    public function __construct(ParameterBagInterface $parameterBag)
    {
        $this->parameterBag = $parameterBag;
    }

    protected function connect(): ?PDO
    {
        try {
            $this->conn = new PDO('oci:dbname='.$this->parameterBag->get('apogee.string'),
                $this->parameterBag->get('apogee.login'),
                $this->parameterBag->get('apogee.password'));

            return $this->conn;
        } catch (PDOException $e) {
            trigger_error(htmlentities('Connexion échouée : '.$e->getMessage()), E_USER_ERROR);
        }
    }
}
