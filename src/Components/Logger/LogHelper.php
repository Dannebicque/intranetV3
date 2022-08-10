<?php
/*
 * Copyright (c) 2022. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Components/Logger/LogHelper.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 08/08/2022 19:01
 */

namespace App\Components\Logger;

use App\Components\Logger\DTO\Log;
use Carbon\CarbonInterface;

class LogHelper
{
    /** @var \App\Components\Logger\DTO\Log[] */
    private array $logs = [];

    public function __construct(
    ) {
        $this->logs[] = new Log('Début des logs', 'info');
    }

    public function addItem(string $message, string $level = 'warning', ?CarbonInterface $date = null): self
    {
        $this->logs[] = new Log($message, $level, $date);

        return $this;
    }

    public function getLogs(): array
    {
        return $this->logs;
    }
}
