<?php
/*
 * Copyright (c) 2022. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Components/Logger/DTO/Log.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 08/08/2022 19:09
 */

namespace App\Components\Logger\DTO;

use Carbon\Carbon;
use Carbon\CarbonInterface;

class Log
{
    public string $message = '';
    public string $level = 'warning';
    public CarbonInterface $date;

    public function __construct(string $message, string $level = 'warning', CarbonInterface $date = null)
    {
        $this->message = $message;
        $this->level = $level;
        $this->date = $date ?? Carbon::now();
    }
}
