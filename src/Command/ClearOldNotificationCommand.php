<?php
/*
 * Copyright (c) 2024. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Command/ClearOldNotificationCommand.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 23/02/2024 21:40
 */

/*
 * Pull your hearder here, for exemple, Licence header.
 */

namespace App\Command;

use App\Repository\NotificationRepository;
use Exception;
use Symfony\Component\Console\Attribute\AsCommand;
use Symfony\Component\Console\Command\Command;
use Symfony\Component\Console\Input\InputInterface;
use Symfony\Component\Console\Output\OutputInterface;
use Symfony\Component\Console\Style\SymfonyStyle;

#[AsCommand(
    name: 'app:clear-old-notification',
    description: 'Commande qui nettoye de manière régulière les anciennes notifications'
)]
class ClearOldNotificationCommand extends Command
{
    /**
     * ClearOldNotificationCommand constructor.
     */
    public function __construct(private readonly NotificationRepository $notificationRepository)
    {
        parent::__construct();
    }

    /**
     * @throws Exception
     */
    protected function execute(InputInterface $input, OutputInterface $output): int
    {
        $io = new SymfonyStyle($input, $output);

        $count = $this->notificationRepository->deleteOldNotification();

        $io->success(sprintf('"%d" notifications supprimées.', $count));

        return Command::SUCCESS;
    }
}
