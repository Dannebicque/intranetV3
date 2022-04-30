<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Event/CovidEvent.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 07/02/2021 10:51
 */

namespace App\Event;

use App\Entity\CovidAttestationPersonnel;
use Symfony\Contracts\EventDispatcher\Event;

class CovidEvent extends Event
{
    final public const COVID_AUTORISATION_DEPOSEE = 'chgt.covid.autorisation.deposee';
    final public const COVID_AUTORISATION_EDITEE = 'chgt.covid.autorisation.editee';
    final public const COVID_AUTORISATION_VALIDEE_DEPARTEMENT = 'chgt.covid.autorisation.validee.departement';
    final public const COVID_AUTORISATION_VALIDEE_DIRECTION = 'chgt.covid.autorisation.validee.direction';
    final public const COVID_AUTORISATION_REFUSEE_DEPARTEMENT = 'chgt.covid.autorisation.refusee.departement';
    final public const COVID_AUTORISATION_REFUSEE_DIRECTION = 'chgt.covid.autorisation.refusee.direction';

    public function __construct(protected CovidAttestationPersonnel $covidAttestationPersonnel)
    {
    }

    public function getCovidAttestationPersonnel(): CovidAttestationPersonnel
    {
        return $this->covidAttestationPersonnel;
    }
}
