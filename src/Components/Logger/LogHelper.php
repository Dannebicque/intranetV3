<?php
/*
 * Copyright (c) 2024. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Components/Logger/LogHelper.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 23/02/2024 21:40
 */

namespace App\Components\Logger;

use App\Components\Logger\DTO\Log;
use Carbon\CarbonInterface;

class LogHelper
{
    /** @var Log[] */
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
