<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Classes/Apogee/Apogee.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 02/04/2021 12:05
 */

namespace App\Classes\Apogee;


use PDO;
use PDOException;
use Symfony\Component\DependencyInjection\ParameterBag\ParameterBagInterface;

abstract class Apogee
{
    protected PDO $conn;

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
            trigger_error(htmlentities('Connexion échouée : ' . $e->getMessage()), \E_USER_ERROR);
        }
    }
}
