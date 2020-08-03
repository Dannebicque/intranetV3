<?php
// Copyright (c) 2020. | David Annebicque | IUT de Troyes  - All Rights Reserved
// @file /Users/davidannebicque/htdocs/intranetV3/src/Classes/ServiceRealise/ServiceRealise.php
// @author davidannebicque
// @project intranetV3
// @lastUpdate 03/08/2020 16:52

namespace App\Classes\ServiceRealise;


use App\DTO\EvenementEdt;
use App\Entity\AnneeUniversitaire;
use App\Entity\Matiere;
use App\Entity\Personnel;

interface ServiceRealise
{
    public function getServiceRealiseParMatiere(Matiere $matiere, AnneeUniversitaire $anneeUniversitaire): array;

    public function getServiceRealiserParEnseignant(
        Personnel $personnel,
        AnneeUniversitaire $anneeUniversitaire
    ): array;

    public function convertToEvenementEdt($event): EvenementEdt;
}
