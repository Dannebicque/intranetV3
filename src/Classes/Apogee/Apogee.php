<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Classes/Apogee/Apogee.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 23/08/2021 23:02
 */

namespace App\Classes\Apogee;

use PDO;
use PDOException;
use Symfony\Component\DependencyInjection\ParameterBag\ParameterBagInterface;
use const E_USER_ERROR;

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
            $this->conn = new PDO('oci:dbname=' . $this->parameterBag->get('APOGEE_STRING'),
                $this->parameterBag->get('APOGEE_LOGIN'),
                $this->parameterBag->get('APOGEE_PASSWORD'));

            return $this->conn;
        } catch (PDOException $e) {
            trigger_error(htmlentities('Connexion échouée : ' . $e->getMessage()), E_USER_ERROR);
        }
    }
}
