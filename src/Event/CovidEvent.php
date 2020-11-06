<?php
// Copyright (c) 2020. | David Annebicque | IUT de Troyes  - All Rights Reserved
// @file /Users/davidannebicque/htdocs/intranetV3/src/Event/CovidEvent.php
// @author davidannebicque
// @project intranetV3
// @lastUpdate 05/11/2020 20:43

namespace App\Event;

use App\Entity\CovidAttestationPersonnel;
use Symfony\Contracts\EventDispatcher\Event;

class CovidEvent extends Event
{
    public const COVID_AUTORISATION_DEPOSEE = 'chgt.covid.autorisation.deposee';
    public const COVID_AUTORISATION_EDITEE = 'chgt.covid.autorisation.editee';
    public const COVID_AUTORISATION_VALIDEE_DEPARTEMENT = 'chgt.covid.autorisation.validee.departement';
    public const COVID_AUTORISATION_VALIDEE_DIRECTION = 'chgt.covid.autorisation.validee.direction';
    public const COVID_AUTORISATION_REFUSEE_DEPARTEMENT = 'chgt.covid.autorisation.refusee.departement';
    public const COVID_AUTORISATION_REFUSEE_DIRECTION = 'chgt.covid.autorisation.refusee.direction';

    protected CovidAttestationPersonnel $covidAttestationPersonnel;

    public function __construct(CovidAttestationPersonnel $covidAttestationPersonnel)
    {
        $this->covidAttestationPersonnel = $covidAttestationPersonnel;
    }

    public function getCovidAttestationPersonnel(): CovidAttestationPersonnel
    {
        return $this->covidAttestationPersonnel;
    }
}
