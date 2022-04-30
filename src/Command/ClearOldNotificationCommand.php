<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Command/ClearOldNotificationCommand.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 11/07/2021 19:38
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

        return 0;
    }
}
