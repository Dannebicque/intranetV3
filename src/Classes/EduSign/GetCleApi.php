<?php
/*
 * Copyright (c) 2023. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Classes/EduSign/GetCleApi.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 20/11/2023 09:08
 */

namespace App\Classes\EduSign;

use App\Entity\Etudiant;
use Symfony\Component\DependencyInjection\ParameterBag\ParameterBagInterface;

class GetCleApi
{
    public function __construct(
        protected ParameterBagInterface $parameterBag)
    {
    }

    public function getCleApi(string $cle): string
    {
        // détection de l'environnement, si 'dev' alors prendre la clé dans le fichier .env.local, sinon prendre la clé passé en paramètre
        if ('dev' === $this->parameterBag->get('APP_ENV')) {
            return $this->parameterBag->get('API_EDUSIGN');
        }
        return $cle;
    }
}
