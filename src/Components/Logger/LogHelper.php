<?php
/*
 * Copyright (c) 2024. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Components/Logger/LogHelper.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 25/09/2024 19:03
 */

namespace App\Components\Logger;

use App\Components\Logger\DTO\Log;
use Carbon\CarbonInterface;
use DateTimeInterface;
use Symfony\Component\HttpKernel\KernelInterface;

class LogHelper
{
    /** @var Log[] */
    private array $logs = [];
    private string $basePath;

    public function __construct(
        KernelInterface $kernel
    )
    {
        $this->basePath = $kernel->getProjectDir();
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

    public function getLogsByLevel(string $level): array
    {
        return array_filter($this->logs, fn(Log $log) => $log->getLevel() === $level);
    }

    public function getLogsByLevelAndDate(string $level, CarbonInterface $date): array
    {
        return array_filter($this->logs, fn(Log $log) => $log->getLevel() === $level && $log->getDate()->isSameDay($date));
    }

    public function getLogsByDate(CarbonInterface $date): array
    {
        return array_filter($this->logs, fn(Log $log) => $log->getDate()->isSameDay($date));
    }

    // ecrit les logs dans un fichier
    public function writeLogsToFile(string $filename, bool $withDateTime = true, string $dir = ''): void
    {
        $content = '';
        foreach ($this->logs as $log) {
            $content .= $log->date->format('Y-m-d H:i:s') . ' - ' . $log->level . ' - ' . $log->message . PHP_EOL;
        }

        $fullDir = $this->basePath . '/var/logs/' . $dir;

        // vérifie si le dossier existe
        if (!is_dir($fullDir)) {
            if (!mkdir($fullDir, 0777, true) && !is_dir($fullDir)) {
                throw new \RuntimeException(sprintf('Directory "%s" was not created', $fullDir));
            }
        }

        //on vérifie si le fichier à une extension, si oui on la supprime
        $filename = preg_replace('/\\.[^.\\s]{3,4}$/', '', $filename);

        if ($withDateTime) {
            $filename .= '_' . date('Y-m-d_H-i-s') . '.log';
        } else {
            $filename .= '.log';
        }

        $filename = $fullDir . '/' . $filename;
        file_put_contents($filename, $content);
    }
}
