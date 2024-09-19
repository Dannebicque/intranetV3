<?php
/*
 * Copyright (c) 2024. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Components/Logger/LogHelper.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 19/09/2024 19:31
 */

namespace App\Components\Logger;

use App\Components\Logger\DTO\Log;
use Carbon\CarbonInterface;
use DateTimeInterface;

class LogHelper
{
    /** @var Log[] */
    private array $logs = [];

    public function __construct(
    ) {
        $this->logs[] = new Log('Début des logs', 'info');
    }

    public function addItem(string $message, string $level = 'warning', null|CarbonInterface|DateTimeInterface $date = null): self
    {
        $this->logs[] = new Log($message, $level, $date);

        return $this;
    }

    public function getLogs(): array
    {
        return $this->logs;
    }
}
