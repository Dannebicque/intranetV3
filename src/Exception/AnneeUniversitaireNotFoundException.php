<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Exception/MatiereNotFoundException.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 08/05/2021 12:26
 */

namespace App\Exception;

use Exception;

class AnneeUniversitaireNotFoundException extends Exception
{
    protected $message = 'Année universitiare non trouvée';
}
