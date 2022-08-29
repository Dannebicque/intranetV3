<?php
/*
 * Copyright (c) 2022. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Classes/Apogee/Apogee.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 29/08/2022 19:37
 */

namespace App\Classes\Apogee;

use const E_USER_ERROR;
use PDO;
use PDOException;
use Symfony\Component\DependencyInjection\ParameterBag\ParameterBagInterface;

abstract class Apogee
{
    // todo refaire avec Doctrine ORM?
    protected PDO $conn;

    /**
     * MyApogee constructor.
     */
    public function __construct(private readonly ParameterBagInterface $parameterBag)
    {
    }

    protected function connect(): ?PDO
    {
        try {
            $this->conn = new PDO('oci:dbname='.$this->parameterBag->get('apogee.string'),
                $this->parameterBag->get('apogee.login'),
                $this->parameterBag->get('apogee.password'));

            return $this->conn;
        } catch (PDOException $e) {
            trigger_error(htmlentities('Connexion échouée : '.$e->getMessage().' '.$this->parameterBag->get('apogee.string')), E_USER_ERROR);
        }
    }
}
